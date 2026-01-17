'use client';

import { useState, useEffect } from 'react';
import {
  Building2, MapPin, ArrowRight, Users,
  Globe2, Award, Star, Briefcase, Factory,
  Server, ShoppingBag, Monitor, Coffee,
  ChevronRight, Gauge, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Industry icons mapping
type IndustryIconsType = {
  [key: string]: React.ElementType;
};

const industryIcons: IndustryIconsType = {
  'Food & Spices': Factory,
  'Technology': Server,
  'IT Services': Monitor,
  'Consumer Goods': ShoppingBag,
  'Food & Dairy': Coffee,
  'Healthcare': Globe2,
  'Food Processing': Factory,
  'Electronics': Briefcase
};

const clients = [
  {
    name: 'M.D.H Ltd.',
    logo: '/logos/mdh.svg',
    industry: 'Food & Spices',
    featured: true,
    description: 'Leading manufacturer of spices and food products in India',
    relationship: '7+ years',
    services: ['Workforce Management', 'Compliance', 'Facility Services'],
    testimonial: {
      quote: "Apex has been instrumental in helping us maintain our strict quality standards while managing our seasonal workforce fluctuations.",
      author: "Rajeev Sharma",
      position: "HR Director, M.D.H Ltd."
    }
  },
  {
    name: 'ZUP Corp',
    logo: '/logos/zup.svg',
    industry: 'Technology',
    featured: true,
    description: 'Innovative technology solutions provider',
    relationship: '4+ years',
    services: ['IT Staffing', 'Regulatory Compliance', 'Payroll Services'],
    testimonial: {
      quote: "Their tech talent acquisition has been spot-on, helping us scale rapidly with the right skills.",
      author: "Ananya Patel",
      position: "CTO, ZUP Corp"
    }
  },
  {
    name: 'Tech Mahindra',
    logo: '/logos/tech-mahindra.svg',
    industry: 'IT Services',
    featured: true,
    description: 'Global IT services and consulting company',
    relationship: '5+ years',
    services: ['Contract Staffing', 'IT Recruitment', 'Compliance Management'],
    testimonial: {
      quote: "Apex's pan-India presence has been crucial for our multi-location operations.",
      author: "Vikram Singh",
      position: "VP Human Resources, Tech Mahindra"
    }
  },
  {
    name: 'Bajaj Consumer Care',
    logo: '/logos/bajaj.svg',
    industry: 'Consumer Goods',
    featured: true,
    description: 'Major FMCG company specializing in hair and skin care products',
    relationship: '6+ years',
    services: ['Manufacturing Staffing', 'Payroll', 'Labor Compliance'],
    testimonial: {
      quote: "The compliance expertise that Apex provides gives us peace of mind across all our manufacturing units.",
      author: "Sanjay Mehta",
      position: "Operations Head, Bajaj Consumer Care"
    }
  },
  {
    name: 'Amul',
    logo: '/logos/amul.svg',
    industry: 'Food & Dairy',
    featured: true,
    description: "India's largest food products marketing organization",
    relationship: '8+ years',
    services: ['Production Staffing', 'Supply Chain', 'Facility Management'],
    testimonial: {
      quote: "Their understanding of the food industry's unique requirements has been exceptional.",
      author: "Ramesh Patel",
      position: "Regional Manager, Amul"
    }
  },
  {
    name: 'Eastern Medikit Ltd.',
    logo: '/logos/eastern-medikit.svg',
    industry: 'Healthcare',
    featured: false,
    description: 'Manufacturer of medical devices and equipment',
    relationship: '3+ years',
    services: ['Specialized Recruitment', 'Compliance', 'Security Services'],
  },
  {
    name: 'Super Delicacies Pvt. Ltd.',
    logo: '/logos/super-delicacies.svg',
    industry: 'Food Processing',
    featured: false,
    description: 'Premium food processing company',
    relationship: '5+ years',
    services: ['Food Safety Compliance', 'Production Staffing', 'Quality Control'],
  },
  {
    name: 'Techtronic India Ltd.',
    logo: '/logos/techtronic.svg',
    industry: 'Electronics',
    featured: true,
    description: 'Leading electronics manufacturer',
    relationship: '4+ years',
    services: ['Technical Staffing', 'Facility Management', 'Security Services'],
    testimonial: {
      quote: "Apex has consistently provided us with skilled technical staff that meets our exacting standards.",
      author: "Ajay Kumar",
      position: "Manufacturing Director, Techtronic India"
    }
  }
];

const clientLocations = [
  {
    city: 'Gurgaon',
    state: 'Haryana',
    region: 'North',
    clients: [
      'Eastern Medikit Ltd.',
      'M.D.H Ltd.',
      'Super Delicacies Pvt. Ltd.',
      'Gulati Export House',
      'Techtronic India Ltd.',
    ],
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    clients: [
      'ZUP Corp',
      'Tech Mahindra',
      'Globex Systems Ltd.',
    ],
  },
  {
    city: 'Bengaluru',
    state: 'Karnataka',
    region: 'South',
    clients: [
      'Tech Innovations Pvt. Ltd.',
      'Digital Solutions Inc.',
      'Infoway Systems',
    ],
  },
  {
    city: 'Baddi',
    state: 'Himachal Pradesh',
    region: 'North',
    clients: [
      'Kobian India Electronic Ltd.',
      'Bajaj Consumer Care',
      'Su-kam Communication',
    ],
  }
];

const clientStats = [
  { value: 100, label: 'Enterprise Clients', icon: Building2 },
  { value: 25, label: 'Cities Covered', icon: MapPin },
  { value: 12, label: 'Industries Served', icon: Briefcase },
  { value: 15, label: 'Years of Excellence', icon: Award }
];

const industryDistribution = [
  { industry: 'Manufacturing', percentage: 35 },
  { industry: 'IT & Technology', percentage: 25 },
  { industry: 'Food Processing', percentage: 20 },
  { industry: 'FMCG', percentage: 10 },
  { industry: 'Others', percentage: 10 }
];

export default function Clients() {
  const [activeRegion, setActiveRegion] = useState('All');
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const filteredLocations = activeRegion === 'All'
    ? clientLocations
    : clientLocations.filter(location => location.region === activeRegion);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Hero Section */}
      <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-oat-medium0 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-red opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center">
          <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
            OUR CLIENTS
          </span>
          <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] mb-6">
            Trusted by Industry Leaders
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From Fortune 500 giants to fast-growing startups,
            we enable the world's most innovative companies to scale with confidence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-oat py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clientStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center bg-white p-8 shadow-premium group hover:bg-navy transition-all duration-300">
                <div className="h-16 w-16 rounded-full bg-oat flex items-center justify-center mb-6 group-hover:bg-orange-red/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-orange-red" />
                </div>
                <p className="text-navy text-[36px] font-bold group-hover:text-white transition-colors">{stat.value}+</p>
                <p className="text-teal-gray text-sm uppercase tracking-wider font-medium group-hover:text-white/70 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-navy text-[32px] md:text-[48px] font-medium leading-[1.1] mb-4">
              Our Featured Partners
            </h2>
            <p className="text-teal-gray text-lg max-w-2xl mx-auto">
              We're proud to provide world-class workforce solutions to these leading organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.filter(c => c.featured).map((client) => (
              <div
                key={client.name}
                className="bg-oat/30 border border-border group cursor-pointer hover:bg-white hover:shadow-premium transition-all p-8 flex flex-col h-full"
                onClick={() => setSelectedClient(selectedClient === client.name ? null : client.name)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center border border-border group-hover:border-orange-red/30 transition-colors">
                    {industryIcons[client.industry] && React.createElement(industryIcons[client.industry], { className: "text-orange-red w-6 h-6" })}
                  </div>
                  <span className="text-[12px] font-mono text-teal-gray uppercase tracking-widest">{client.relationship}</span>
                </div>

                <h3 className="text-navy text-2xl font-medium mb-3 group-hover:text-orange-red transition-colors">{client.name}</h3>
                <p className="text-teal-gray text-sm mb-6 flex-grow">{client.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {client.services.slice(0, 3).map((s, i) => (
                    <span key={i} className="text-[11px] font-medium bg-white px-2.5 py-1 text-navy border border-border uppercase tracking-wider">
                      {s}
                    </span>
                  ))}
                </div>

                {client.testimonial && (
                  <div className={`mt-4 pt-6 border-t border-border transition-all duration-500 overflow-hidden ${selectedClient === client.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-navy italic text-sm mb-4">"{client.testimonial.quote}"</p>
                    <div>
                      <p className="text-navy font-bold text-sm">{client.testimonial.author}</p>
                      <p className="text-teal-gray text-xs">{client.testimonial.position}</p>
                    </div>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between text-navy font-semibold text-[13px] uppercase tracking-wider">
                  <span>{selectedClient === client.name ? 'Hide details' : 'View details'}</span>
                  <ChevronRight size={16} className={`transition-transform ${selectedClient === client.name ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="bg-oat py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <span className="font-mono text-sm font-medium text-orange-red uppercase tracking-widest mb-4 block">EXPERT COVERAGE</span>
                <h2 className="text-navy text-[32px] font-medium mb-6">Market leading expertise in every core sector</h2>
                <p className="text-teal-gray mb-8">
                  Our deep domain knowledge allows us to deliver specialized workforce solutions
                  tailored to the unique regulatory and operational needs of each industry.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-red" size={20} />
                    <span className="text-navy font-medium">Compliance-Ready</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-red" size={20} />
                    <span className="text-navy font-medium">AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-red" size={20} />
                    <span className="text-navy font-medium">Regional Expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-orange-red" size={20} />
                    <span className="text-navy font-medium">Rapid Deployment</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full space-y-6">
                {industryDistribution.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 shadow-premium">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-navy font-medium uppercase tracking-wider text-[12px]">{item.industry}</span>
                      <span className="text-orange-red font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-oat h-1.5 overflow-hidden">
                      <div
                        className="bg-orange-red h-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Network */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-navy text-[32px] md:text-[48px] font-medium leading-[1.1] mb-6">
              Our Pan-India Reach
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {['All', 'North', 'South', 'West'].map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-6 py-2 font-mono text-sm tracking-widest border transition-all ${activeRegion === region
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-navy border-border hover:border-orange-red'
                    }`}
                >
                  {region.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredLocations.map((location) => (
              <div key={location.city} className="bg-oat p-6 flex flex-col hover:bg-white hover:shadow-premium transition-all border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-orange-red" size={20} />
                  <div>
                    <h4 className="text-navy font-bold">{location.city}</h4>
                    <p className="text-teal-gray text-[11px] uppercase tracking-tighter">{location.state}, {location.region} India</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 pt-4 border-t border-border">
                  <p className="text-[10px] font-mono font-bold text-teal-gray uppercase tracking-widest mb-2">Key Partners</p>
                  {location.clients.map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-orange-red rounded-full" />
                      <span className="text-navy text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-orange-red p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-white text-[32px] md:text-[40px] font-medium leading-[1.1] mb-4">
                Join our network of elite partners
              </h2>
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">100%</p>
                    <p className="text-white/70 text-xs">Compliance Accuracy</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">97%</p>
                    <p className="text-white/70 text-xs">Client Retention</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 font-semibold hover:bg-oat transition-colors whitespace-nowrap text-center">
                Get Started
              </Link>
              <Link href="/portfolio" className="border border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors whitespace-nowrap text-center">
                Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}