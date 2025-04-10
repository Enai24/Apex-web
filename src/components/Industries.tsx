import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Factory, Server, Briefcase, Building2, ShoppingBag, Truck, 
  Users, FileCheck, Shield, BarChart2, Brain, Award, Globe2, 
  CheckCircle, ChevronRight, TrendingUp, Heart
} from 'lucide-react';

// Industry data with SEO-optimized descriptions and keywords
const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    title: 'Manufacturing Workforce Solutions',
    icon: Factory,
    color: 'blue',
    metaDescription: 'Specialized staffing and compliance solutions for manufacturing industries across India. Expert workforce management for factories and production facilities.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1470&auto=format&fit=crop',
    description: 'Comprehensive workforce solutions tailored for manufacturing facilities across India, with specialized expertise in shift management, safety compliance, and production-oriented staffing.',
    keyPoints: [
      'PF & ESI compliant blue-collar staffing across all manufacturing hubs',
      'Specialized recruitment for skilled technicians and operators',
      'Shift optimization and attendance management systems',
      'Safety training and compliance documentation'
    ],
    stats: [
      { value: '15K+', label: 'Factory workers deployed' },
      { value: '98%', label: 'Compliance rate' },
      { value: '250+', label: 'Manufacturing clients' }
    ],
    caseStudy: {
      title: 'How we helped a major automotive manufacturer reduce compliance issues by 87%',
      description: 'A leading automotive components manufacturer was struggling with labor compliance issues across multiple states. Our integrated approach delivered complete statutory compliance while optimizing their workforce allocation.'
    }
  },
  {
    id: 'it-ites',
    name: 'IT & ITES',
    title: 'IT & ITES Talent Solutions',
    icon: Server,
    color: 'indigo',
    metaDescription: 'Specialized IT staffing solutions for technology companies in India. Expert talent acquisition for software development, IT services, and ITES sectors.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1470&auto=format&fit=crop',
    description: 'Strategic tech talent acquisition and management services for IT companies across India, with expertise in sourcing specialized technology skills and managing distributed tech teams.',
    keyPoints: [
      'Specialized recruitment for niche technology skills and frameworks',
      'Contract staffing for project-based technology deployments',
      'IT skill assessment and validation through technical evaluations',
      'Remote workforce management tools and practices'
    ],
    stats: [
      { value: '12K+', label: 'Tech professionals placed' },
      { value: '200+', label: 'IT companies served' },
      { value: '85%', label: 'Retention rate' }
    ],
    caseStudy: {
      title: 'Scaling a tech startup from 50 to 500 employees in 18 months',
      description: 'A rapidly growing SaaS company needed to scale their development team while maintaining quality. Our specialized tech recruitment process helped them grow their engineering team 10x while reducing time-to-hire by 62%.'
    }
  },
  {
    id: 'bfsi',
    name: 'Banking & Financial Services',
    title: 'BFSI Workforce Solutions',
    icon: Building2,
    color: 'green',
    metaDescription: 'Specialized staffing solutions for banking, financial services and insurance sectors in India. Compliant workforce management for BFSI companies.',
    heroImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1470&auto=format&fit=crop',
    description: 'Specialized staffing solutions for the banking and financial services sector, with rigorous compliance protocols, background verification, and domain-specific talent acquisition.',
    keyPoints: [
      'Enhanced background verification for financial roles',
      'BFSI-specific regulatory compliance expertise',
      'Risk-minimized onboarding processes for financial institutions',
      'Domain-trained financial services professionals'
    ],
    stats: [
      { value: '50+', label: 'Financial institutions' },
      { value: '8K+', label: 'Associates deployed' },
      { value: '99.9%', label: 'Compliance accuracy' }
    ],
    caseStudy: {
      title: 'Enabling a major bank to expand operations to 12 new cities',
      description: 'A leading private sector bank needed to rapidly expand their branch presence across multiple states. Our pan-India recruitment capabilities helped them staff 120+ new branches with 100% compliance.'
    }
  },
  {
    id: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    title: 'Retail & E-commerce Staffing',
    icon: ShoppingBag,
    color: 'purple',
    metaDescription: 'Flexible workforce solutions for retail and e-commerce businesses across India. Scalable staffing for seasonal demands and retail operations.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop',
    description: 'Flexible workforce management for retail and e-commerce operations, with scalable staffing solutions for seasonal demands, warehouse operations, and customer-facing roles.',
    keyPoints: [
      'Rapid scaling capability for seasonal business peaks',
      'Pan-India staffing for retail and distribution networks',
      'Specialized recruitment for warehousing and logistics roles',
      'Customer service and sales-oriented talent acquisition'
    ],
    stats: [
      { value: '35K+', label: 'Retail personnel' },
      { value: '45+', label: 'Cities covered' },
      { value: '72hrs', label: 'Avg. fulfillment time' }
    ],
    caseStudy: {
      title: 'How we helped an e-commerce giant scale for festival season',
      description: 'An e-commerce marketplace needed to triple their warehouse workforce for the Diwali season. Our rapid scaling model helped them onboard 5,000+ workers across 8 cities in just 3 weeks with full compliance.'
    }
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    title: 'Logistics Workforce Management',
    icon: Truck,
    color: 'amber',
    metaDescription: 'Specialized workforce solutions for logistics and supply chain companies in India. Expert staffing for warehousing, transportation, and distribution operations.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop',
    description: 'End-to-end workforce solutions for logistics and supply chain operations, covering warehouse staff, transportation personnel, and distribution network management.',
    keyPoints: [
      'Specialized recruitment for logistics operations',
      'Multi-location workforce deployment across transport hubs',
      'Compliance management for interstate transport regulations',
      'Shift optimization for 24/7 logistics operations'
    ],
    stats: [
      { value: '18K+', label: 'Logistics personnel' },
      { value: '75+', label: 'Transport hubs' },
      { value: '32%', label: 'Efficiency improvement' }
    ],
    caseStudy: {
      title: 'Transforming a logistics company\'s multi-state operations',
      description: 'A growing logistics company struggled with compliance across interstate transport regulations. Our centralized compliance system helped them achieve 100% statutory compliance while expanding to 15 new states.'
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    title: 'Healthcare Staffing Solutions',
    icon: Heart,
    color: 'red',
    metaDescription: 'Specialized staffing and compliance solutions for healthcare organizations across India. Expert workforce management for hospitals, clinics, and healthcare facilities.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1470&auto=format&fit=crop',
    description: 'Specialized healthcare staffing solutions with stringent verification processes, regulatory compliance, and healthcare-specific recruitment expertise.',
    keyPoints: [
      'Healthcare-specific background verification processes',
      'Staffing for both clinical and administrative healthcare roles',
      'Healthcare regulatory compliance expertise',
      'Training programs for healthcare support staff'
    ],
    stats: [
      { value: '10K+', label: 'Healthcare professionals' },
      { value: '125+', label: 'Healthcare institutions' },
      { value: '95%', label: 'Long-term placement rate' }
    ],
    caseStudy: {
      title: 'Staffing a new multi-specialty hospital in record time',
      description: 'A leading hospital chain needed to staff their new 500-bed facility in just 45 days. Our healthcare-focused recruitment team helped them onboard 700+ healthcare professionals while maintaining strict quality standards.'
    }
  }
];

// Service capabilities highlighting our expertise
const capabilities = [
  {
    title: 'Compliant Staffing',
    description: 'Industry-specific staffing with 100% statutory compliance across all Indian states',
    icon: Users
  },
  {
    title: 'Payroll Management',
    description: 'End-to-end payroll processing with industry-specific policies and regulations',
    icon: FileCheck
  },
  {
    title: 'Regulatory Compliance',
    description: 'Specialized compliance management for sector-specific labor regulations',
    icon: Shield
  },
  {
    title: 'Performance Analytics',
    description: 'Industry-specific KPIs and workforce performance tracking systems',
    icon: BarChart2
  },
  {
    title: 'AI-Powered Matching',
    description: 'Artificial intelligence algorithms for precise industry-specific talent matching',
    icon: Brain
  },
  {
    title: 'Training Programs',
    description: 'Customized upskilling and certification programs for each industry',
    icon: Award
  }
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [visibleSection, setVisibleSection] = useState('hero');

  // Intersection Observer to track visible sections for analytics
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleIndustryHover = (id: string) => {
    setActiveIndustry(id);
  };

  return (
    <>
      <Helmet>
        <title>Industry-Specific Workforce Solutions in India | Apex Enterprises</title>
        <meta 
          name="description" 
          content="Specialized workforce solutions for key industries across India including IT, manufacturing, BFSI, retail, logistics, and healthcare. Industry-specific staffing, compliance, and management services." 
        />
        <meta 
          name="keywords" 
          content="industry workforce solutions, IT staffing India, manufacturing staffing, BFSI workforce, retail staffing, healthcare staffing India" 
        />
        <link rel="canonical" href="https://apexenterprises.net/industries" />
      </Helmet>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industry-Specific <span className="text-blue-300">Workforce Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Specialized staffing, compliance, and workforce management tailored to the unique requirements of each industry across India. Experience sector-specific expertise that drives business success.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#industries" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-300 flex items-center">
                Explore Industries 
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
              <a href="#capabilities" className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition duration-300 flex items-center backdrop-blur-sm">
                Our Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Section */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              We provide specialized workforce solutions across diverse industries, understanding the unique challenges and regulatory requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
              <Link 
                to={`/industries/${industry.id}`} 
                key={industry.id}
                className="group block relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-80"
                onMouseEnter={() => handleIndustryHover(industry.id)}
                onMouseLeave={() => handleIndustryHover(industry.id)}
              >
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`w-16 h-16 rounded-full bg-${industry.color}-100 mb-4 flex items-center justify-center`}>
                    <industry.icon className={`h-8 w-8 text-${industry.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                  <p className="text-blue-100 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-blue-300 font-medium">
                    <span>Learn more</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Industry-Specific Capabilities</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specialized Expertise</h2>
            <p className="text-lg text-gray-600">
              We provide uniquely tailored workforce solutions that address the specific challenges and requirements of each industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-blue-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <capability.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry Case Studies */}
      <section id="case-studies" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">
              See how our industry-specific workforce solutions have transformed businesses across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.slice(0, 4).map((industry) => (
              <div 
                key={industry.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full bg-${industry.color}-100 flex items-center justify-center mr-3`}>
                      <industry.icon className={`h-5 w-5 text-${industry.color}-600`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{industry.caseStudy.title}</h4>
                  <p className="text-gray-600 mb-6">{industry.caseStudy.description}</p>
                  
                  <Link 
                    to={`/industries/${industry.id}`}
                    className={`inline-flex items-center text-${industry.color}-600 font-medium hover:text-${industry.color}-800`}
                  >
                    Read full case study
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-300"
            >
              View All Case Studies
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Stats Section */}
      <section id="stats" className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact Across Industries</h2>
            <p className="text-lg text-blue-100">
              We've helped thousands of businesses across India optimize their workforce with industry-specific solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '95K+', label: 'Workers Deployed', icon: Users },
              { value: '25+', label: 'Cities Covered', icon: Globe2 },
              { value: '750+', label: 'Enterprise Clients', icon: Building2 },
              { value: '99.8%', label: 'Compliance Rate', icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to transform your industry-specific workforce?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Speak with our industry experts to discover how our specialized solutions can help your business overcome unique challenges and achieve operational excellence.
                </p>
                <div className="space-y-4">
                  {industries.slice(0, 3).map((industry) => (
                    <div key={industry.id} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">Specialized {industry.name} workforce solutions with industry-specific compliance</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition duration-300"
                  >
                    Schedule a Consultation
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] lg:min-h-[500px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop" 
                  alt="Industry Experts" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
        </div>
      </div>
    </div>
      </section>
    </>
  );
}