"use client";

import { useState, useEffect } from 'react';

export default function Navbar({ activeView, setActiveView }: { activeView: string, setActiveView: (v: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveView(id);
    setIsMobileMenuOpen(false); // Close menu on mobile after click
  };

  const isDarkBg = isScrolled || activeView === 'landing';
  const logoTextColor = isDarkBg ? 'text-white' : 'text-brand-navy';
  const unselectedLinkColor = isDarkBg ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-brand-navy';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/80 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('landing')}>
            <span className={`text-2xl font-bold tracking-tighter transition-colors ${logoTextColor}`}>
              LUXE<span className="text-brand-gold">ESTATE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeView === item.id 
                    ? 'text-brand-gold border-b-2 border-brand-gold' 
                    : unselectedLinkColor
                } py-2`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-brand-gold text-brand-navy font-semibold px-6 py-2 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Contact Agent
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${logoTextColor} p-2 focus:outline-none transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left block px-3 py-3 rounded-md text-base font-medium ${
                activeView === item.id
                  ? 'bg-brand-gold/10 text-brand-gold'
                  : 'text-gray-700 hover:text-brand-gold dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-full mt-4 bg-brand-gold text-brand-navy font-semibold px-4 py-3 rounded-lg shadow-md"
          >
            Contact Agent
          </button>
        </div>
      </div>
    </nav>
  );
}
