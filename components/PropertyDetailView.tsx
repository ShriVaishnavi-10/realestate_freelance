import { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/lib/properties';
import { LeadSubmission } from '@/components/AdminView';

interface PropertyDetailViewProps {
  property: Property;
  navigateToView: (view: string, id?: number) => void;
  submissions?: LeadSubmission[];
  setSubmissions?: (val: LeadSubmission[]) => void;
}

export default function PropertyDetailView({ property, navigateToView, submissions, setSubmissions }: PropertyDetailViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submissions && setSubmissions) {
      const newLead: LeadSubmission = {
        id: Math.random().toString(36).substring(7),
        date: new Date().toLocaleDateString(),
        name,
        email,
        phone,
        propertyInterest: `LUXE-${property.id}000: ${property.title}`,
        message
      };
      setSubmissions([newLead, ...submissions]);
    }
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-light dark:bg-brand-navy relative">
      {/* Hero Image Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <Image 
          src={property.img}
          alt={property.title}
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <span className="bg-brand-gold text-brand-navy font-bold px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-4 inline-block">
            For Sale
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{property.title}</h1>
          <p className="text-2xl md:text-3xl font-light text-gray-200">{property.location}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Main Details */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 mb-8">
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-6">Property Details</h2>
            
            <div className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">Price</p>
                <p className="text-2xl font-bold text-brand-gold">{property.price}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">Bedrooms</p>
                <p className="text-2xl font-bold text-brand-navy dark:text-white">{property.beds}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">Bathrooms</p>
                <p className="text-2xl font-bold text-brand-navy dark:text-white">{property.baths}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-1">Square Feet</p>
                <p className="text-2xl font-bold text-brand-navy dark:text-white">{property.sqft}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-4">Description</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
              {property.description}
            </p>

            <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-4">Features & Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar / Contact Actions */}
        <div className="w-full lg:w-1/3">
          <div className="bg-brand-navy rounded-3xl p-8 shadow-2xl sticky top-28">
            <h3 className="text-2xl font-bold text-white mb-2">Interested?</h3>
            <p className="text-gray-300 mb-8">Reach out to our elite agents to schedule a private viewing of this magnificent property.</p>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-brand-gold text-brand-navy font-bold text-lg py-4 rounded-xl hover:bg-brand-gold-light transition-colors shadow-lg"
              >
                Contact Agent Now
              </button>
              <button 
                onClick={() => navigateToView('properties')}
                className="w-full bg-transparent border border-white/20 text-white font-bold text-lg py-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                Back to Properties
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">Reference ID: LUXE-{property.id}000</p>
            </div>
          </div>
        </div>

      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-lg w-full shadow-2xl z-10 animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-brand-navy dark:hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2">Inquiry Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Our agents will contact you shortly about {property.title}.</p>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-brand-navy dark:text-white mb-2">Schedule a Viewing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Inquire about {property.title}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">Full Name</label>
                    <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">Email Address</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">Phone Number</label>
                    <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-gold outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">Message</label>
                    <textarea required rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-gray-800 dark:text-white focus:ring-2 focus:ring-brand-gold outline-none resize-none" placeholder="I would like to schedule a viewing..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-gold text-brand-navy font-bold text-lg py-4 rounded-xl hover:bg-brand-gold-light transition-colors shadow-lg mt-4">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
