import React from 'react';
import { Lightbulb, TrendingUp, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Management Consulting",
    description: "Expert guidance in strategic planning, organizational restructuring, and performance optimization to drive sustainable business growth"
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Development",
    description: "Comprehensive support in market entry strategies, partnership development, and revenue growth initiatives across diverse sectors"
  },
  {
    icon: <Users size={40} />,
    title: "Human Capital Solutions",
    description: "Strategic workforce planning, talent acquisition, and development programs tailored to meet your organizational objectives"
  },
  {
    icon: <Shield size={40} />,
    title: "Risk Advisory",
    description: "Advanced risk assessment, compliance management, and strategic advisory services to protect and enhance your business value"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-primary/90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;