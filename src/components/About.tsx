import React from 'react';

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "200+", label: "Projects Completed" },
  { number: "50+", label: "Team Members" },
  { number: "95%", label: "Client Satisfaction" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Us</h2>
          <p className="text-light max-w-2xl mx-auto">
            We are a team of dedicated professionals committed to delivering
            exceptional results for our clients through innovative solutions
            and strategic thinking.
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