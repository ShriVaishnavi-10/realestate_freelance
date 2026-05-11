export default function LocationView() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-light dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Our Locations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Find our offices and explore the premium areas we cover.</p>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden mb-16 relative shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Map View Placeholder" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center max-w-sm">
              <svg className="w-12 h-12 text-brand-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2">Global Headquarters</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">123 Luxury Avenue, Suite 500<br/>Beverly Hills, CA 90210</p>
              <button className="w-full bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy py-2 rounded-lg font-medium transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Area Coverage Cards */}
        <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-8">Key Regions Covered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Region 1 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1534430258838-89c0b1154c41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Los Angeles" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-1">Los Angeles</h3>
              <p className="text-brand-gold">142 Properties</p>
            </div>
          </div>

          {/* Region 2 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="New York" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-1">New York</h3>
              <p className="text-brand-gold">89 Properties</p>
            </div>
          </div>

          {/* Region 3 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1980&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Miami" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-1">Miami</h3>
              <p className="text-brand-gold">105 Properties</p>
            </div>
          </div>

          {/* Region 4 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <img src="https://images.unsplash.com/photo-1522083111301-440263f3ccb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="London" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-1">London</h3>
              <p className="text-brand-gold">64 Properties</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
