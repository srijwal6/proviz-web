import React from 'react';
import { Lightbulb, TrendingUp, Users, Shield, BarChart, Building, Globe, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb size={40} />,
    title: "Strategic Management Consulting",
    description: "Comprehensive strategic planning and execution support, including market entry strategies, business model optimization, and organizational restructuring. We help businesses identify growth opportunities and develop actionable roadmaps for success."
  },
  {
    icon: <TrendingUp size={40} />,
    title: "Business Development & Growth",
    description: "End-to-end business development solutions encompassing market research, partnership development, and revenue growth strategies. Our team helps identify and capitalize on new market opportunities while optimizing existing operations."
  },
  {
    icon: <Users size={40} />,
    title: "Human Capital Management",
    description: "Strategic workforce planning, talent acquisition, and development programs designed to build high-performing teams. We help organizations attract, develop, and retain top talent while creating positive workplace cultures."
  },
  {
    icon: <Shield size={40} />,
    title: "Risk Management & Compliance",
    description: "Comprehensive risk assessment and management services, ensuring regulatory compliance and business continuity. Our experts help identify, evaluate, and mitigate risks while maintaining operational efficiency."
  },
  {
    icon: <BarChart size={40} />,
    title: "Financial Advisory Services",
    description: "Expert financial planning, analysis, and optimization services to enhance business performance. We provide detailed financial modeling, investment analysis, and strategic financial planning to support growth objectives."
  },
  {
    icon: <Building size={40} />,
    title: "Corporate Restructuring",
    description: "Specialized services in organizational restructuring, merger integration, and change management. Our team guides businesses through complex transformations while maintaining operational stability."
  },
  {
    icon: <Globe size={40} />,
    title: "International Business Solutions",
    description: "Comprehensive support for international market entry, cross-border operations, and global expansion strategies. We help businesses navigate international markets while ensuring compliance with local regulations."
  },
  {
    icon: <Briefcase size={40} />,
    title: "Project Management Excellence",
    description: "Professional project management services ensuring successful initiative delivery. Our experienced team manages complex projects from conception to completion, ensuring alignment with business objectives."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
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
              className="p-6 rounded-lg bg-dark/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
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