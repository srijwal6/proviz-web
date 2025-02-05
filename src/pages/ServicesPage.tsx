import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Building, User, Package, BookText, FileText, Keyboard, Globe, Percent } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const businessServices = [
  {
    icon: <Building className="h-8 w-8" />,
    title: "BUSINESS SETUP (COMPANY FORMATION)",
    description: "Complete assistance in setting up your business in Qatar"
  },
  {
    icon: <User className="h-8 w-8" />,
    title: "VISA ASSISTANCE SERVICES",
    description: "Professional visa services for business and individuals"
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: "PROFESSIONAL PRO PACKAGES",
    description: "Comprehensive professional service packages"
  },
  {
    icon: <BookText className="h-8 w-8" />,
    title: "TRANSLATION SERVICES",
    description: "Professional translation services for all your business needs"
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "ATTESTATION SERVICES",
    description: "Document attestation services for various purposes"
  },
  {
    icon: <Keyboard className="h-8 w-8" />,
    title: "TYPING SERVICES",
    description: "Professional typing services for all types of documents"
  }
];

const companyTypes = [
  {
    icon: <Percent className="h-8 w-8" />,
    title: "100% foreign ownership",
    description: "Set up your business with complete ownership"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "WLL with sponsor arrangement",
    description: "Limited liability company setup with local sponsor"
  },
  {
    icon: <Building className="h-8 w-8" />,
    title: "WLL without sponsor arrangement",
    description: "Limited liability company setup without sponsor requirement"
  }
];

const countries = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "European & North American Services",
    description: "Schengen countries, UK, USA, Canada"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Middle Eastern Services",
    description: "KSA, UAE, Qatar"
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Asian Services",
    description: "Malaysia, Singapore, Thailand"
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white mb-16 text-center">Our Services</h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-8">Business Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessServices.map((service, index) => (
                <Card key={index} className="bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
                  <CardHeader>
                    <div className="text-secondary mb-4">{service.icon}</div>
                    <CardTitle className="text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    {service.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-8">Company Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyTypes.map((type, index) => (
                <Card key={index} className="bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
                  <CardHeader>
                    <div className="text-secondary mb-4">{type.icon}</div>
                    <CardTitle className="text-white">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    {type.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-8">International Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {countries.map((region, index) => (
                <Card key={index} className="bg-black/95 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
                  <CardHeader>
                    <div className="text-secondary mb-4">{region.icon}</div>
                    <CardTitle className="text-white">{region.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    {region.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;