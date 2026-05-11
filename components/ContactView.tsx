"use client";

import Image from 'next/image';
import { useState } from 'react';
import { LeadSubmission } from '@/components/AdminView';

interface ContactViewProps {
  submissions?: LeadSubmission[];
  setSubmissions?: (val: LeadSubmission[]) => void;
}

export default function ContactView({ submissions, setSubmissions }: ContactViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [propertyInterest, setPropertyInterest] = useState('General Inquiry');
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
        propertyInterest,
        message
      };
      setSubmissions([newLead, ...submissions]);
    }
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-light dark:bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Find our offices or send us a message below.</p>
        </div>

        {/* Contact Form Section - Bold Navy & Gold Theme */}
        <div id="contact-form" className="max-w-4xl mx-auto mb-24 relative group">
          <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
          
          <div className="relative bg-brand-navy rounded-[3rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(10,25,47,0.4)] border border-brand-gold/30 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <div className="text-center mb-12 relative z-10">
              <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Private Inquiry</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Find Your Dream Home</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center relative z-10 animate-fade-in">
                <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  <svg className="w-12 h-12 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Sent</h3>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto text-lg">
                  Thank you. An advisor will contact you within the hour to discuss your requirements.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all placeholder-gray-500 backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all placeholder-gray-500 backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all placeholder-gray-500 backdrop-blur-sm"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest ml-1">Property Interest</label>
                    <input 
                      type="text" 
                      value={propertyInterest}
                      onChange={(e) => setPropertyInterest(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all placeholder-gray-500 backdrop-blur-sm"
                      placeholder="e.g. Beverly Hills Mansion"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-brand-gold/80 text-xs font-bold uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none resize-none transition-all placeholder-gray-500 backdrop-blur-sm"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button 
                    type="submit"
                    className="bg-brand-gold text-brand-navy px-20 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.3)] w-full md:w-auto"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[400px] md:h-[500px] bg-gray-200 dark:bg-gray-800 rounded-[2.5rem] overflow-hidden mb-16 relative shadow-inner border border-gray-100 dark:border-gray-700">
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2074&q=80" 
            alt="Map View Placeholder" 
            fill
            unoptimized
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full border border-brand-gold/10">
              <svg className="w-12 h-12 text-brand-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="text-xl md:text-2xl font-bold text-brand-navy dark:text-white mb-2">Global Headquarters</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm md:text-base">123 Luxury Avenue, Suite 500<br/>Beverly Hills, CA 90210</p>
              <button className="w-full bg-brand-navy dark:bg-brand-gold text-white dark:text-brand-navy py-3 rounded-xl font-medium transition-colors hover:bg-brand-gold hover:text-brand-navy">
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Area Coverage Cards */}
        <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-8 text-center md:text-left">Key Regions Covered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Region 1 */}
          <div className="group relative h-72 rounded-[2rem] overflow-hidden cursor-pointer shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Los Angeles" 
              fill
              unoptimized
              className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">Los Angeles</h3>
              <p className="text-brand-gold tracking-widest text-xs uppercase font-bold">142 Properties</p>
            </div>
          </div>

          {/* Region 2 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="New York" 
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">New York</h3>
              <p className="text-brand-gold">89 Properties</p>
            </div>
          </div>

          {/* Region 3 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1980&q=80" 
              alt="Miami" 
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">Miami</h3>
              <p className="text-brand-gold">105 Properties</p>
            </div>
          </div>

          {/* Region 4 */}
          <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md">
            <Image 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" 
              alt="London" 
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 z-20">
              <h3 className="text-2xl font-bold text-white mb-1">London</h3>
              <p className="text-brand-gold">64 Properties</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
