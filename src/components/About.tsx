import React from 'react';

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "1000+", label: "Projects Completed" },
  { number: "200+", label: "Expert Professionals" },
  { number: "99%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About Us</h2>
          <p className="text-light max-w-2xl mx-auto">
            With over two decades of experience, we have established ourselves as a 
            trusted partner for businesses seeking excellence. Our team of seasoned 
            professionals combines local market knowledge with international best practices 
            to deliver exceptional results. We take pride in our ability to understand 
            unique business challenges and provide tailored solutions that drive sustainable growth 
            and innovation across the MENA region.
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