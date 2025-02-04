import React from 'react';
import { Lightbulb, TrendingUp, Users, Shield } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Strategic Consulting",
    description: "Expert guidance in business strategy, market analysis, and organizational development for sustainable growth"
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Excellence",
    description: "Implementation of quality management systems and operational excellence frameworks"
  },
  {
    icon: <Users size={40} />,
    title: "Project Management",
    description: "Professional project planning, execution, and monitoring services across various sectors"
  },
  {
    icon: <Shield size={40} />,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your business interests"
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