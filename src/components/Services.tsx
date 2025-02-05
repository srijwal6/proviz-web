import React from 'react';
import { Lightbulb, TrendingUp, Users, Shield, BarChart, Building, Globe, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Strategic Consulting",
    description: "Expert guidance in business strategy, market analysis, and organizational development for sustainable growth."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Excellence",
    description: "Implementation of quality management systems and operational excellence frameworks"
  },//Professional project planning, execution, and monitoring services across various sectors
  {
    icon: <Users size={40} />,
    title: "HR Management",
    description: "Professional project planning, execution, and monitoring services across various sectors"
  },
  // {
  //   icon: <Users size={40} />,
  //   title: "Human Capital Management",
  //   description: "Strategic workforce planning, talent acquisition, and development programs designed to build high-performing teams. We help organizations attract, develop, and retain top talent while creating positive workplace cultures."
  // },
  {
    icon: <Shield size={40} />,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your business interests"
  },
  {
    icon: <BarChart size={40} />,
    title: "Financial Services",
    description: "Expert financial planning, analysis, and optimization to enhance business performance and support growth."
  },
  {
    icon: <Building size={40} />,
    title: "Corporate Restructuring",
    description: "Specialized services in organizational restructuring, merger integration, and change management to ensure smooth business transitions."
  },
  {
    icon: <Globe size={40} />,
    title: "Global Expansion",
    description: "Expert guidance for international market entry, cross-border operations, and regulatory compliance."
  },
  {
    icon: <Briefcase size={40} />,
    title: "Management Excellence",
    description: "Provide expert project management from conception to completion, ensuring alignment with business goals."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comprehensive Business Solutions
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Our diverse range of services is designed to address every aspect of your business needs,
            from strategic planning to operational execution. We combine local expertise with global
            best practices to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
            >
              <div className="text-secondary mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;