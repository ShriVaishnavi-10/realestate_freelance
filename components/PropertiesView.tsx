export default function PropertiesView() {
  const properties = [
    { id: 1, title: 'Beverly Hills Mansion', price: '$4,500,000', beds: 5, baths: 6, sqft: '7,200', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80' },
    { id: 2, title: 'Malibu Coastal Villa', price: '$8,250,000', beds: 4, baths: 5, sqft: '5,500', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 3, title: 'Modern Alpine Estate', price: '$12,900,000', beds: 6, baths: 8, sqft: '10,000', img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 4, title: 'Downtown Penthouse', price: '$3,100,000', beds: 3, baths: 3, sqft: '3,200', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 5, title: 'Lakefront Retreat', price: '$5,400,000', beds: 5, baths: 4, sqft: '6,100', img: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { id: 6, title: 'Historic Townhouse', price: '$2,850,000', beds: 4, baths: 3, sqft: '4,000', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1984&q=80' },
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-light dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Exclusive Properties</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Discover our curated collection of luxury real estate.</p>
        </div>

        {/* Filters Panel (Mock) */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md mb-12 flex flex-wrap gap-4 items-center">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
            <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white">
              <option>All Locations</option>
              <option>Los Angeles</option>
              <option>New York</option>
              <option>Miami</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Property Type</label>
            <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white">
              <option>All Types</option>
              <option>Houses</option>
              <option>Condos</option>
            </select>
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
            <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white">
              <option>Any Price</option>
              <option>$1M - $5M</option>
              <option>$5M - $10M</option>
              <option>$10M+</option>
            </select>
          </div>
          <div className="flex-none mt-6">
            <button className="bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity w-full">
              Filter
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div key={prop.id} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover-lift shadow-lg border border-gray-100 dark:border-gray-800">
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${prop.img}')` }}>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-navy">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <p className="text-brand-gold font-bold text-2xl mb-2">{prop.price}</p>
                <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-white line-clamp-1">{prop.title}</h3>
                <div className="flex justify-between text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4 text-sm">
                  <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.beds}</strong> Beds</span>
                  <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.baths}</strong> Baths</span>
                  <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.sqft}</strong> Sq Ft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
