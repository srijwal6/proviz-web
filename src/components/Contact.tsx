import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Get in Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20">
            <Mail size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
            <p className="text-primary">info@businessconsulting.com</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20">
            <Phone size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
            <p className="text-primary">+974 4012 3456</p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20">
            <MapPin size={32} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
            <p className="text-primary">West Bay, Doha, Qatar</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;