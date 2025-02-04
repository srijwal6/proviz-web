import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black backdrop-blur-sm text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Business Group Qatar</h3>
            <p className="text-sm">Your trusted partner for business excellence in Qatar and beyond.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-secondary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-secondary transition-colors">Business Consulting</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Financial Advisory</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Strategic Planning</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Market Research</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Risk Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+974 1234 5678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@businessgroupqatar.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Doha, Qatar</span>
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-secondary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Business Group Qatar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;