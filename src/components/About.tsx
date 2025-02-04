import React from 'react';

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Delivered" },
  { number: "100+", label: "Expert Consultants" },
  { number: "98%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About Us</h2>
          <p className="text-light max-w-2xl mx-auto">
            As a leading consulting firm, we bring together industry expertise, 
            innovative solutions, and proven methodologies to help organizations 
            achieve operational excellence and sustainable growth in an ever-evolving 
            business landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;