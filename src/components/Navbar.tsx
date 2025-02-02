import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-dark/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-secondary text-xl font-bold">Company</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-light hover:text-secondary transition-colors duration-200">Home</a>
              <a href="#services" className="text-light hover:text-secondary transition-colors duration-200">Services</a>
              <a href="#about" className="text-light hover:text-secondary transition-colors duration-200">About</a>
              <a href="#contact" className="text-light hover:text-secondary transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark">
            <a href="#home" className="block px-3 py-2 text-light hover:text-secondary">Home</a>
            <a href="#services" className="block px-3 py-2 text-light hover:text-secondary">Services</a>
            <a href="#about" className="block px-3 py-2 text-light hover:text-secondary">About</a>
            <a href="#contact" className="block px-3 py-2 text-light hover:text-secondary">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;