export default function Navbar({ activeView, setActiveView }: { activeView: string, setActiveView: (v: string) => void }) {
  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'about', label: 'About Us' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActiveView('landing')}>
            <span className="text-2xl font-bold tracking-tighter">
              LUXE<span className="text-brand-gold">ESTATE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeView === item.id 
                    ? 'text-brand-gold border-b-2 border-brand-gold' 
                    : 'text-gray-600 hover:text-brand-gold dark:text-gray-300'
                } py-2`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-brand-gold text-brand-navy font-semibold px-6 py-2 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Contact Agent
            </button>
          </div>
          
          {/* Mobile menu button (Simplified for prototype) */}
          <div className="md:hidden flex items-center">
            <button className="text-brand-navy dark:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
