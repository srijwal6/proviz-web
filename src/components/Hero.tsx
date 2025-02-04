import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
            Empowering Excellence Through
            <span className="text-secondary"> Strategic Solutions</span>
          </h1>
          <p className="text-light text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            We specialize in delivering comprehensive business solutions that drive growth, 
            innovation, and sustainable success across diverse industries.
          </p>
          <button className="bg-secondary hover:bg-secondary-dark text-dark px-8 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 mx-auto">
            Discover More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;