import React from 'react';
import { Lightbulb, TrendingUp, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Innovation",
    description: "Cutting-edge solutions for modern business challenges"
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Growth",
    description: "Strategic planning for sustainable business expansion"
  },
  {
    icon: <Users size={40} />,
    title: "Collaboration",
    description: "Building strong partnerships for mutual success"
  },
  {
    icon: <Shield size={40} />,
    title: "Security",
    description: "Protecting your business assets and data"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-dark border border-primary/20 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;