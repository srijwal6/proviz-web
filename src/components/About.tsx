import React from 'react';
import { Check } from 'lucide-react';

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "1500+", label: "Projects Completed" },
  { number: "300+", label: "Expert Consultants" },
  { number: "99%", label: "Client Satisfaction" }
];

const keyPoints = [
  "Strategic partnerships with leading global consulting firms",
  "Deep expertise in Qatar's business landscape",
  "Multi-disciplinary team of industry experts",
  "Proven track record of successful transformations",
  "Innovative solutions tailored to local market needs",
  "Commitment to sustainable business practices"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">About Our Firm</h2>
          <p className="text-light max-w-3xl mx-auto mb-8 text-lg">
            As a leading consulting firm in Qatar, we bring together deep industry knowledge,
            extensive regional experience, and technical excellence to help organizations
            achieve sustainable success. Our commitment to excellence and innovation has
            established us as a trusted partner for businesses seeking transformative growth.
          </p>
          <p className="text-light max-w-3xl mx-auto mb-12">
            Founded with a vision to transform the business landscape in Qatar and the MENA region,
            we have consistently delivered value to our clients through innovative solutions and
            strategic guidance. Our approach combines global best practices with deep local insights,
            enabling us to address complex challenges effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-secondary mt-1" size={20} />
                  <p className="text-light">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-dark/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-secondary mb-4">Our Mission</h3>
              <p className="text-light mb-6">
                To empower organizations in Qatar and beyond with innovative solutions and strategic guidance,
                enabling them to achieve sustainable growth and operational excellence in an evolving global landscape.
              </p>
              <h3 className="text-xl font-semibold text-secondary mb-4">Our Vision</h3>
              <p className="text-light">
                To be the region's most trusted business advisory partner, recognized for delivering
                transformative solutions that drive sustainable value and positive impact across industries.
              </p>
            </div>
          </div>
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