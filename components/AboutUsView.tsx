export default function AboutUsView() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24 mt-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-6">Redefining Luxury Real Estate</h1>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Founded in 2010, LuxeEstate has established itself as the premier destination for exclusive properties worldwide. Our mission is to connect discerning clients with extraordinary homes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe that finding a home is more than a transaction—it is a life-changing experience. Our dedicated team of global experts provides unparalleled service, discretion, and market insight.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-gold/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80" 
              alt="Luxury Office" 
              className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-brand-navy rounded-3xl p-12 text-white mb-24 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-brand-gold mb-2">15+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-gold mb-2">$5B+</p>
              <p className="text-gray-300">Total Sales</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-gold mb-2">250+</p>
              <p className="text-gray-300">Global Agents</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-gold mb-2">12</p>
              <p className="text-gray-300">Countries</p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 dark:text-gray-400">The visionaries behind our success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="rounded-full object-cover w-full h-full shadow-lg" alt="CEO" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white">James Sterling</h3>
              <p className="text-brand-gold font-medium mb-4">Founder & CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1976&q=80" className="rounded-full object-cover w-full h-full shadow-lg" alt="COO" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white">Elena Rostova</h3>
              <p className="text-brand-gold font-medium mb-4">Chief Operating Officer</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" className="rounded-full object-cover w-full h-full shadow-lg" alt="Head of Sales" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-white">Michael Chen</h3>
              <p className="text-brand-gold font-medium mb-4">Head of Global Sales</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
