import Image from 'next/image';

interface LandingViewProps {
  setActiveView: (v: string) => void;
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  searchType: string;
  setSearchType: (v: string) => void;
}

export default function LandingView({ setActiveView, searchQuery, setSearchQuery, searchType, setSearchType }: LandingViewProps) {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image using Next.js Image for optimization */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home Background"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-in-up">
            Find Your <span className="text-brand-gold">Dream Home</span> Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Discover the most premium and exclusive properties in the world's most sought-after locations.
          </p>
          
          {/* Quick Search Bar */}
          <div className="bg-white p-2 rounded-3xl md:rounded-full max-w-4xl mx-auto flex flex-col md:flex-row gap-2 items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/20">
            <div className="w-full md:w-2/5 px-4 py-2">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-widest mb-1 text-left">Location</label>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="City, Neighborhood, or Zip" 
                className="w-full bg-transparent border-none focus:ring-0 text-brand-navy placeholder-gray-400 p-0 font-medium text-lg outline-none" 
              />
            </div>
            
            <div className="hidden md:block w-px h-12 bg-gray-200"></div>
            
            <div className="w-full md:w-2/5 px-4 py-2 border-t md:border-t-0 border-gray-100">
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-widest mb-1 text-left">Property Type</label>
              <select 
                required 
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-brand-navy invalid:text-gray-400 p-0 font-medium text-lg cursor-pointer outline-none"
              >
                <option value="" disabled hidden>Select property type</option>
                <option value="All Types" className="text-brand-navy">All Types</option>
                <option value="Houses" className="text-brand-navy">House</option>
                <option value="Apartments" className="text-brand-navy">Apartment</option>
                <option value="Villas" className="text-brand-navy">Luxury Villa</option>
              </select>
            </div>

            <button 
              onClick={() => setActiveView('properties')}
              className="w-full md:w-auto bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 ml-auto whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-2 md:mt-0 text-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="py-24 bg-brand-light dark:bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-navy dark:text-white">Featured Exclusives</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Featured Property 1 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover-lift shadow-xl">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
                  alt="Beverly Hills Mansion"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-brand-gold font-bold text-2xl mb-2">$4,500,000</p>
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-white">Beverly Hills Mansion</h3>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 border-t pt-4">
                  <span><strong className="text-brand-navy dark:text-white">5</strong> Beds</span>
                  <span><strong className="text-brand-navy dark:text-white">6</strong> Baths</span>
                  <span><strong className="text-brand-navy dark:text-white">7,200</strong> Sq Ft</span>
                </div>
              </div>
            </div>
            
            {/* Featured Property 2 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover-lift shadow-xl">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Malibu Coastal Villa"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-brand-gold font-bold text-2xl mb-2">$8,250,000</p>
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-white">Malibu Coastal Villa</h3>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 border-t pt-4">
                  <span><strong className="text-brand-navy dark:text-white">4</strong> Beds</span>
                  <span><strong className="text-brand-navy dark:text-white">5</strong> Baths</span>
                  <span><strong className="text-brand-navy dark:text-white">5,500</strong> Sq Ft</span>
                </div>
              </div>
            </div>

            {/* Featured Property 3 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover-lift shadow-xl">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern Alpine Estate"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-brand-gold font-bold text-2xl mb-2">$12,900,000</p>
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-white">Modern Alpine Estate</h3>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 border-t pt-4">
                  <span><strong className="text-brand-navy dark:text-white">6</strong> Beds</span>
                  <span><strong className="text-brand-navy dark:text-white">8</strong> Baths</span>
                  <span><strong className="text-brand-navy dark:text-white">10,000</strong> Sq Ft</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setActiveView('properties')}
              className="inline-block border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
            >
              View All Properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
