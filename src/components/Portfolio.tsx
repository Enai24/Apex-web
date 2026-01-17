'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Building2, Users, Calendar, CheckCircle2, TrendingUp,
  ArrowRight, Filter, ChevronRight, Search,
  BarChart, RefreshCw, Zap, Award, Shield, X, ArrowLeft
} from 'lucide-react';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  date: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  image: string;
  metrics: {
    label: string;
    value: string;
    change: string;
    icon: React.ElementType;
  }[];
  category: 'staffing' | 'compliance' | 'payroll' | 'facilities';
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'eastern-medikit',
    title: 'Enterprise-Wide Security Implementation',
    client: 'Eastern Medikit Ltd.',
    industry: 'Healthcare Manufacturing',
    date: '2023',
    description: 'Comprehensive security solution for a large manufacturing facility including access control and 24/7 surveillance.',
    challenges: [
      'Multiple entry points requiring monitoring',
      'High-value inventory protection',
      'Complex shift management',
    ],
    solutions: [
      'Deployed trained security personnel across all shifts',
      'Implemented advanced access control systems',
      'Established emergency response protocols',
    ],
    results: [
      '100% security incident prevention',
      'Improved employee safety metrics',
      'Reduced unauthorized access attempts',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop',
    metrics: [
      { label: 'Security incidents', value: '0', change: '-100%', icon: Shield },
      { label: 'Staff productivity', value: '+28%', change: 'increase', icon: TrendingUp },
      { label: 'Compliance rate', value: '100%', change: 'maintained', icon: CheckCircle2 }
    ],
    category: 'facilities',
    testimonial: {
      quote: "Apex Enterprises transformed our security operations with a solution that not only protects our assets but also integrates seamlessly with our manufacturing processes.",
      author: "Vikram Singh",
      position: "Chief Operations Officer, Eastern Medikit Ltd."
    },
    tags: ['Security', 'Manufacturing', 'Compliance', 'Facility Management']
  },
  {
    id: 'mdh-food',
    title: 'Specialized Workforce Management',
    client: 'M.D.H Ltd.',
    industry: 'Food Processing',
    date: '2023',
    description: 'End-to-end staffing solution for food processing facility with strict hygiene and safety requirements.',
    challenges: [
      'High hygiene standards compliance',
      'Seasonal workforce fluctuations',
      'Specialized skill requirements',
    ],
    solutions: [
      'Implemented rigorous training programs',
      'Created flexible staffing schedules',
      'Established quality control processes',
    ],
    results: [
      '30% improvement in productivity',
      'Zero food safety incidents',
      'Reduced staff turnover by 25%',
    ],
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1470&auto=format&fit=crop',
    metrics: [
      { label: 'Productivity', value: '+30%', change: 'increase', icon: TrendingUp },
      { label: 'Staff turnover', value: '-25%', change: 'decrease', icon: RefreshCw },
      { label: 'Food safety incidents', value: '0', change: 'maintained', icon: CheckCircle2 }
    ],
    category: 'staffing',
    testimonial: {
      quote: "The specialized workforce Apex provided understands our industry's stringent requirements. Their training and quality control processes are exceptional.",
      author: "Anita Sharma",
      position: "HR Director, M.D.H Ltd."
    },
    tags: ['Food Processing', 'Staffing', 'Training', 'Quality Control']
  },
  {
    id: 'techtronic',
    title: 'Integrated Facility Management',
    client: 'Techtronic India Ltd.',
    industry: 'Technology',
    date: '2023',
    description: 'Complete facility management including housekeeping, security, and maintenance services.',
    challenges: [
      'Large campus with multiple buildings',
      'High cleanliness standards',
      'Complex coordination requirements',
    ],
    solutions: [
      'Deployed integrated management system',
      'Implemented digital tracking tools',
      'Established clear communication channels',
    ],
    results: [
      '40% cost optimization',
      'Improved facility ratings',
      'Enhanced employee satisfaction',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop',
    metrics: [
      { label: 'Cost reduction', value: '40%', change: 'savings', icon: BarChart },
      { label: 'Employee satisfaction', value: '92%', change: '+15%', icon: Users },
      { label: 'Service efficiency', value: '+35%', change: 'improvement', icon: Zap }
    ],
    category: 'facilities',
    testimonial: {
      quote: "Apex's integrated approach to facility management has transformed our campus operations, creating a seamless experience for employees and visitors alike.",
      author: "Prakash Mehta",
      position: "Facilities Director, Techtronic India Ltd."
    },
    tags: ['Technology', 'Facility Management', 'Efficiency', 'Cost Optimization']
  },
  {
    id: 'global-pharma',
    title: 'Regulatory Compliance Management',
    client: 'Global Pharma Inc.',
    industry: 'Pharmaceuticals',
    date: '2023',
    description: 'End-to-end compliance management for a multinational pharmaceutical company operating across 8 Indian states.',
    challenges: [
      'Complex regulatory environment',
      'Multi-state operations',
      'Frequent regulatory changes',
    ],
    solutions: [
      'Implemented centralized compliance tracking',
      'Established regulatory update monitoring',
      'Created automated compliance reporting',
    ],
    results: [
      '100% compliance across all locations',
      'Reduced compliance costs by 30%',
      'Zero regulatory penalties in 24 months',
    ],
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1470&auto=format&fit=crop',
    metrics: [
      { label: 'Compliance rate', value: '100%', change: 'maintained', icon: CheckCircle2 },
      { label: 'Cost savings', value: '₹1.8Cr', change: 'annually', icon: BarChart },
      { label: 'Audit success rate', value: '100%', change: '+15%', icon: Award }
    ],
    category: 'compliance',
    testimonial: {
      quote: "The regulatory landscape in India is challenging, but Apex's solutions have eliminated compliance concerns and allowed us to focus on our core business.",
      author: "Dr. Sunita Patel",
      position: "Compliance Head, Global Pharma Inc."
    },
    tags: ['Pharmaceuticals', 'Compliance', 'Regulatory', 'Multi-state']
  }
];

const categories = [
  { id: 'all', name: 'All Case Studies' },
  { id: 'staffing', name: 'Workforce Solutions' },
  { id: 'compliance', name: 'Compliance Management' },
  { id: 'payroll', name: 'Payroll Services' },
  { id: 'facilities', name: 'Facility Management' }
];

const industries = [
  { id: 'all', name: 'All Industries' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'food', name: 'Food Processing' },
  { id: 'technology', name: 'Technology' },
  { id: 'pharmaceuticals', name: 'Pharmaceuticals' }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesCategory = activeFilter === 'all' || study.category === activeFilter;
    const matchesIndustry = activeIndustry === 'all' || study.industry.toLowerCase().includes(activeIndustry);
    const matchesSearch = searchQuery === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const activeStudy = caseStudies.find(s => s.id === activeCaseStudy);

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Hero Section */}
      <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-oat-medium0 opacity-20 blur-3xl animate-blob"></div>
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-red opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-orange-red uppercase mb-4 block">
              PORTFOLIO
            </span>
            <h1 className="text-white text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-[-0.02em] mb-6">
              Our Success Stories
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Discover how Apex Enterprises enables industry leaders to achieve excellence
              through AI-powered workforce and compliance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-oat py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Enterprise Clients', value: '95+', icon: Building2 },
              { label: 'Workers Deployed', value: '25K+', icon: Users },
              { label: 'Industry Awards', value: '32+', icon: Award },
              { label: 'Client Retention', value: '99.8%', icon: RefreshCw }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white p-6 shadow-premium group">
                <div className="h-12 w-12 rounded-lg bg-oat flex items-center justify-center group-hover:bg-orange-red/10 transition-colors">
                  <stat.icon className="h-6 w-6 text-orange-red" />
                </div>
                <div>
                  <p className="text-navy text-2xl font-bold">{stat.value}</p>
                  <p className="text-teal-gray text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-white py-12 border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-teal-gray" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full pl-12 pr-4 py-3 border border-border bg-oat/30 text-navy focus:outline-none focus:ring-2 focus:ring-orange-red transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-4 w-full lg:w-auto">
              <select
                className="flex-1 lg:flex-none px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red cursor-pointer"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
              >
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
              <select
                className="flex-1 lg:flex-none px-4 py-3 border border-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-orange-red cursor-pointer"
                value={activeIndustry}
                onChange={(e) => setActiveIndustry(e.target.value)}
              >
                {industries.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="bg-oat py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white group cursor-pointer shadow-premium hover:shadow-lg transition-all border border-border overflow-hidden"
                  onClick={() => setActiveCaseStudy(study.id)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {study.tags.slice(0, 1).map((tag, i) => (
                        <span key={i} className="bg-navy/90 text-white text-[12px] px-3 py-1 font-mono uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 text-orange-red mb-3">
                      <Building2 size={16} />
                      <span className="text-[14px] font-medium tracking-wide">{study.client}</span>
                    </div>
                    <h3 className="text-navy text-xl font-medium mb-4 group-hover:text-orange-red transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-teal-gray text-sm line-clamp-3 mb-6">
                      {study.description}
                    </p>
                    <div className="flex items-center text-navy font-semibold text-sm">
                      View full story
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white shadow-premium">
              <p className="text-navy text-xl">No case studies found matching your criteria.</p>
              <button
                onClick={() => { setActiveFilter('all'); setActiveIndustry('all'); setSearchQuery(''); }}
                className="mt-4 text-orange-red font-semibold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal Overlay */}
      {activeStudy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-8">
          <div className="absolute inset-0 bg-navy/90 backdrop-blur-sm" onClick={() => setActiveCaseStudy(null)} />
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white overflow-y-auto shadow-2xl animate-slide-up">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-navy text-white hover:bg-orange-red transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <img
                  src={activeStudy.image}
                  alt={activeStudy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 text-orange-red mb-4">
                  <span className="font-mono text-sm tracking-wider uppercase">{activeStudy.industry}</span>
                  <span className="text-border">|</span>
                  <span className="font-mono text-sm tracking-wider uppercase">{activeStudy.date}</span>
                </div>

                <h2 className="text-navy text-3xl font-medium mb-6">
                  {activeStudy.title}
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {activeStudy.metrics.map((m, idx) => (
                    <div key={idx} className="bg-oat p-4 text-center">
                      <m.icon className="h-5 w-5 text-orange-red mx-auto mb-2" />
                      <p className="text-navy text-xl font-bold">{m.value}</p>
                      <p className="text-teal-gray text-[10px] uppercase tracking-wide">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-4">The Challenge</h4>
                    <ul className="space-y-3">
                      {activeStudy.challenges.map((c, i) => (
                        <li key={i} className="flex gap-3 text-teal-gray text-sm">
                          <span className="text-orange-red mt-1">•</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-4">Our Approach</h4>
                    <ul className="space-y-3">
                      {activeStudy.solutions.map((s, i) => (
                        <li key={i} className="flex gap-3 text-teal-gray text-sm">
                          <CheckCircle2 className="h-5 w-5 text-orange-red shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-navy font-bold uppercase tracking-wider text-sm mb-4">The Result</h4>
                    <ul className="space-y-3">
                      {activeStudy.results.map((r, i) => (
                        <li key={i} className="flex gap-3 text-navy font-medium text-sm">
                          <TrendingUp className="h-5 w-5 text-orange-red shrink-0" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {activeStudy.testimonial && (
                  <div className="mt-12 p-8 bg-navy text-white relative">
                    <div className="text-orange-red text-6xl font-serif absolute top-4 left-4 opacity-20">"</div>
                    <p className="relative z-10 italic text-lg mb-4">
                      {activeStudy.testimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold">{activeStudy.testimonial.author}</p>
                      <p className="text-white/60 text-xs">{activeStudy.testimonial.position}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-navy py-20 text-center">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-white text-3xl font-medium mb-6">Ready to achieve similar results?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            Partner with India’s leading AI workforce management provider
            for solutions that drive real business impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-orange-red text-white px-8 py-4 font-semibold hover:opacity-90 transition-opacity">
              Contact Our Team
            </a>
            <a href="/services" className="border border-white/20 text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}