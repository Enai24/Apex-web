import React from 'react';
import { Shield, Award, Users, CheckCircle, Globe, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function TrustSignals() {
  const certifications = [
    {
      name: "ISO 9001:2015 Certified",
      description: "Quality Management System",
      icon: Award,
      color: "green",
      verified: true
    },
    {
      name: "MSME Registered",
      description: "Government Recognition",
      icon: Shield,
      color: "blue",
      verified: true
    },
    {
      name: "NAPS Certified",
      description: "National Association of Professional Staffing",
      icon: CheckCircle,
      color: "purple",
      verified: true
    },
    {
      name: "PCI DSS Compliant",
      description: "Payment Card Industry Data Security",
      icon: Shield,
      color: "red",
      verified: true
    }
  ];

  const statistics = [
    {
      value: "50,000+",
      label: "Successful Placements",
      description: "Candidates placed across India",
      icon: Users
    },
    {
      value: "500+",
      label: "Enterprise Clients",
      description: "Fortune 500 & top Indian companies",
      icon: Globe
    },
    {
      value: "20+",
      label: "Years Experience",
      description: "Trusted since 2003",
      icon: Clock
    },
    {
      value: "15+",
      label: "Cities Covered",
      description: "Pan-India presence",
      icon: MapPin
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "24/7 Support",
      value: "+91-0124-2340139",
      description: "Immediate assistance available"
    },
    {
      icon: Mail,
      label: "Email Support",
      value: "mail@apexenterprises.net",
      description: "Response within 2 hours"
    },
    {
      icon: MapPin,
      label: "Head Office",
      value: "Gurgaon, Haryana",
      description: "Visit our executive offices"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Trust Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20 mb-6">
            <Shield className="mr-2 h-4 w-4" />
            Trusted & Verified
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl billion-dollar-text">
            Why 500+ Companies Trust Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Certified, compliant, and committed to excellence in every partnership
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className="billion-dollar-card p-6 text-center premium-card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${cert.color}-100 text-${cert.color}-600 mb-4`}>
                <cert.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
              {cert.verified && (
                <div className="inline-flex items-center text-green-600 text-sm font-medium">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Verified
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-luxury-navy rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-luxury-mesh opacity-20"></div>
          <div className="relative">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h3>
              <p className="text-luxury-gold text-lg">
                Two decades of measurable success
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-luxury-gold/20 text-luxury-gold mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-luxury-gold mb-1">
                    {stat.label}
                  </div>
                  <p className="text-white/80 text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Trust Signals */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Here to Help
            </h3>
            <p className="text-lg text-gray-600">
              Multiple ways to reach our expert team
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <contact.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{contact.label}</h4>
                <p className="text-lg font-medium text-gray-900 mb-1">{contact.value}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
} 