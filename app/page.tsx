"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import LandingView from "@/components/LandingView";
import PropertiesView from "@/components/PropertiesView";
import AboutUsView from "@/components/AboutUsView";
import ContactView from "@/components/ContactView";
import PropertyDetailView from "@/components/PropertyDetailView";
import AdminView, { LeadSubmission } from "@/components/AdminView";
import { properties } from "@/lib/properties";

export default function Home() {
  const [activeView, setActiveView] = useState("landing");
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null);
  const [submissions, setSubmissions] = useState<LeadSubmission[]>([]);
  
  // Shared Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("All Types");

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      const id = params.get('id');
      
      if (view === 'property' && id) {
        setSelectedPropertyId(Number(id));
        setActiveView('property');
      } else if (view && ['landing', 'properties', 'about', 'contact', 'admin'].includes(view)) {
        setActiveView(view);
      } else {
        setActiveView('landing');
      }
    };

    // Listen for back button clicks
    window.addEventListener('popstate', handlePopState);
    
    // Check initial URL on page load
    handlePopState();

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Custom navigation function that updates URL history without reloading
  const navigateToView = (view: string, id?: number) => {
    const params = new URLSearchParams(window.location.search);
    const currentView = params.get('view') || 'landing';
    const currentId = params.get('id');
    
    // Only push to history if we are actually changing pages
    if (currentView !== view || (id && currentId !== String(id))) {
      let newUrl = view === 'landing' ? window.location.pathname : `?view=${view}`;
      if (id) {
        newUrl += `&id=${id}`;
      }
      window.history.pushState({}, '', newUrl);
    }
    
    if (id) setSelectedPropertyId(id);
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // A simple switch to render the correct component without routing
  const renderView = () => {
    switch (activeView) {
      case "landing":
        return <LandingView 
          setActiveView={navigateToView} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchType={searchType}
          setSearchType={setSearchType}
        />;
      case "properties":
        return <PropertiesView 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          navigateToView={navigateToView}
        />;
      case "property":
        const selectedProperty = properties.find(p => p.id === selectedPropertyId);
        if (!selectedProperty) return <PropertiesView searchQuery="" setSearchQuery={setSearchQuery} searchType="All Types" setSearchType={setSearchType} navigateToView={navigateToView} />;
        return <PropertyDetailView 
          property={selectedProperty} 
          navigateToView={navigateToView} 
          submissions={submissions}
          setSubmissions={setSubmissions}
        />;
      case "about":
        return <AboutUsView />;
      case "contact":
        return <ContactView 
          submissions={submissions}
          setSubmissions={setSubmissions}
        />;
      case "admin":
        return <AdminView submissions={submissions} />;
      default:
        return <LandingView 
          setActiveView={navigateToView} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchType={searchType}
          setSearchType={setSearchType}
        />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeView={activeView} setActiveView={navigateToView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Simple Global Footer */}
      <footer className="bg-brand-navy text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold tracking-tighter">
              LUXE<span className="text-brand-gold">ESTATE</span>
            </span>
            <p className="text-gray-400 mt-2 text-sm">© 2026 LuxeEstate Worldwide. All rights reserved.</p>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
            <button onClick={() => navigateToView('contact')} className="hover:text-brand-gold transition-colors">Contact</button>
            <button onClick={() => navigateToView('admin')} className="hover:text-brand-gold transition-colors font-mono text-xs opacity-30 hover:opacity-100">
              [Admin]
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
