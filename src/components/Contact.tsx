import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Users } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-12">
            Whether you're looking to transform your business, optimize operations, or explore new opportunities,
            our team of experts is here to help. Reach out to us to schedule a consultation and discover how
            we can support your business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <Mail size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
            <p className="text-white/80 mb-2">General Inquiries:</p>
            <p className="text-white">info@businessgroup.qa</p>
            <p className="text-white/80 mt-2">Business Development:</p>
            <p className="text-white">bd@businessgroup.qa</p>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <Phone size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/80 mb-2">Main Office:</p>
            <p className="text-white">+974 4012 3456</p>
            <p className="text-white/80 mt-2">Customer Support:</p>
            <p className="text-white">+974 4012 3457</p>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <MapPin size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
            <p className="text-white text-center">
              Level 25, Office Tower<br />
              West Bay District<br />
              P.O. Box 23456<br />
              Doha, Qatar
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <Clock size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Working Hours</h3>
            <p className="text-white text-center">
              Sunday - Thursday<br />
              8:00 AM - 5:00 PM<br />
              Closed on Friday & Saturday
            </p>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <Globe size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
            <p className="text-white text-center">
              With strategic partnerships across<br />
              the MENA region and beyond,<br />
              serving clients worldwide
            </p>
          </div>
          
          <div className="flex flex-col items-center p-8 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <Users size={32} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Careers</h3>
            <p className="text-white text-center">
              Join our growing team<br />
              Send your CV to:<br />
              careers@businessgroup.qa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;