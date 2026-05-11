"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import LandingView from "@/components/LandingView";
import PropertiesView from "@/components/PropertiesView";
import AboutUsView from "@/components/AboutUsView";
import LocationView from "@/components/LocationView";

export default function Home() {
  const [activeView, setActiveView] = useState("landing");

  // A simple switch to render the correct component without routing
  const renderView = () => {
    switch (activeView) {
      case "landing":
        return <LandingView setActiveView={setActiveView} />;
      case "properties":
        return <PropertiesView />;
      case "about":
        return <AboutUsView />;
      case "location":
        return <LocationView />;
      default:
        return <LandingView setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 
        The Navbar takes the current activeView and the setter 
        so it can highlight the active tab and change views on click.
      */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      {/* 
        Main content area that smoothly swaps out components
        based on state. 
      */}
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
            <a href="#" className="hover:text-brand-gold transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
