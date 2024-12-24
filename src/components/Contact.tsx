import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 rounded-lg bg-dark border border-primary/20">
            <Mail size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-light">contact@company.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-dark border border-primary/20">
            <Phone size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-light">+1 (555) 123-4567</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-dark border border-primary/20">
            <MapPin size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-light">123 Business St, City, State</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;