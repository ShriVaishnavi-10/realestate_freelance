"use client";

import Image from 'next/image';
import { useState } from 'react';
import { properties } from '@/lib/properties';

interface PropertiesViewProps {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
  searchType: string;
  setSearchType: (v: string) => void;
  navigateToView?: (view: string, id?: number) => void;
}

export default function PropertiesView({ searchQuery, setSearchQuery, searchType, setSearchType, navigateToView }: PropertiesViewProps) {
  const [filterPrice, setFilterPrice] = useState('Any Price');

  const filteredProperties = properties.filter((prop) => {
    // Search Query Match
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchesLoc = prop.location.toLowerCase().includes(query);
      const matchesTitle = prop.title.toLowerCase().includes(query);
      if (!matchesLoc && !matchesTitle) return false;
    }
    
    // Type Match
    if (searchType !== 'All Types' && searchType !== '') {
      if (prop.type !== searchType) return false;
    }
    
    // Price Match
    if (filterPrice === '$1M - $5M' && (prop.priceValue < 1000000 || prop.priceValue > 5000000)) return false;
    if (filterPrice === '$5M - $10M' && (prop.priceValue < 5000000 || prop.priceValue > 10000000)) return false;
    if (filterPrice === '$10M+' && prop.priceValue <= 10000000) return false;

    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-light dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Exclusive Properties</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Discover our curated collection of luxury real estate.</p>
        </div>

        {/* Filters Panel */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md mb-12 flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Search Location</label>
            <input 
              type="text"
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              placeholder="City, Neighborhood, or Property Name"
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
          <div className="w-full md:flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Property Type</label>
            <select 
              value={searchType} 
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold"
            >
              <option value="All Types">All Types</option>
              <option value="Houses">Houses</option>
              <option value="Apartments">Apartments</option>
              <option value="Villas">Villas</option>
            </select>
          </div>
          <div className="w-full md:flex-1 min-w-[200px]">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price Range</label>
            <select 
              value={filterPrice} 
              onChange={(e) => setFilterPrice(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-brand-gold"
            >
              <option value="Any Price">Any Price</option>
              <option value="$1M - $5M">$1M - $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M+">$10M+</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div 
                key={prop.id} 
                onClick={() => navigateToView && navigateToView('property', prop.id)}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover-lift shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={prop.img}
                    alt={prop.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-bold tracking-widest uppercase border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">View Details</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-navy z-10">
                    For Sale
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-brand-gold font-bold text-2xl mb-2">{prop.price}</p>
                  <h3 className="text-xl font-bold mb-4 text-brand-navy dark:text-white line-clamp-1 group-hover:text-brand-gold transition-colors">{prop.title}</h3>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4 text-sm">
                    <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.beds}</strong> Beds</span>
                    <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.baths}</strong> Baths</span>
                    <span className="flex items-center gap-1"><strong className="text-brand-navy dark:text-white">{prop.sqft}</strong> Sq Ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSearchType('All Types'); setFilterPrice('Any Price'); }}
              className="mt-6 bg-brand-gold text-brand-navy px-6 py-2 rounded-full font-bold hover:bg-brand-gold-light transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
}
