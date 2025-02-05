import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/lovable-uploads/e55addd9-62bd-4ab0-92c7-7d3872195d43.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
            Empowering Excellence Through
            <span className="text-secondary"> Strategic Solutions</span>
          </h1>
          {/* <p className="text-light text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-up">
            As a premier business consulting firm in Qatar, we specialize in delivering comprehensive solutions 
            that drive sustainable growth and operational excellence. Our expertise spans strategic planning, 
            business development, and organizational transformation, helping businesses navigate the complex 
            landscape of the modern economy.
          </p> */}
          <div className="space-y-4">
            <p className="text-light text-md md:text-lg max-w-2xl mx-auto">
              With a deep understanding of local markets and global best practices, 
              we provide tailored solutions that address your unique business challenges 
              and opportunities.
            </p>
            <button className="bg-secondary hover:bg-secondary-dark text-dark px-8 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 mx-auto">
              Discover Our Expertise
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;