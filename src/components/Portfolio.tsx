import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, Users, Calendar, CheckCircle2, TrendingUp, 
  ArrowRight, Filter, ChevronRight, Search, 
  BarChart, RefreshCw, Zap, Award, Shield
} from 'lucide-react';

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

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Case Studies' },
  { id: 'staffing', name: 'Workforce Solutions' },
  { id: 'compliance', name: 'Compliance Management' },
  { id: 'payroll', name: 'Payroll Services' },
  { id: 'facilities', name: 'Facility Management' }
];

// Industries for filtering
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
  const [isAnimating, setIsAnimating] = useState(false);
  
  const caseStudyRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Filter case studies based on selected criteria
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
  
  // Scroll to case study when selected
  useEffect(() => {
    if (activeCaseStudy && caseStudyRefs.current[activeCaseStudy]) {
      setIsAnimating(true);
      setTimeout(() => {
        caseStudyRefs.current[activeCaseStudy]?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
        setTimeout(() => setIsAnimating(false), 600);
      }, 100);
    }
  }, [activeCaseStudy]);

  return (
    <>
      <Helmet>
        <title>Case Studies & Success Stories | Apex Enterprises</title>
        <meta 
          name="description" 
          content="Explore our portfolio of successful workforce solutions, compliance management, and facility services across various industries in India."
        />
      </Helmet>
    
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-indigo-800 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        
        {/* Animated blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-blue-300">Success Stories</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              Discover how we've helped leading organizations across India optimize their operations,
              ensure compliance, and achieve exceptional business results.
            </p>
            <a href="#case-studies" className="px-6 py-3 bg-white text-blue-800 font-medium rounded-full transition duration-300 inline-flex items-center hover:bg-blue-50">
              Explore Case Studies <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '95+', label: 'Enterprise Clients', icon: Building2 },
              { value: '25K+', label: 'Workers Deployed', icon: Users },
              { value: '32+', label: 'Industry Awards', icon: Award },
              { value: '99.8%', label: 'Client Retention', icon: RefreshCw }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4 transition-transform group-hover:scale-110 duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* Filter Section */}
      <section id="case-studies" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Studies</h2>
              <p className="text-gray-600">Explore our portfolio of successful client engagements</p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                >
                  {industries.map(industry => (
                    <option key={industry.id} value={industry.id}>{industry.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((study) => (
                <div 
                  key={study.id} 
                  className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 group ${
                    isAnimating && activeCaseStudy === study.id ? 'ring-4 ring-blue-500 scale-[1.02]' : ''
                  }`}
                  onClick={() => setActiveCaseStudy(study.id)}
                  ref={el => caseStudyRefs.current[study.id] = el}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3 flex gap-2 flex-wrap">
                      {study.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="flex items-center gap-x-2 mb-4">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{study.client}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {study.description}
                    </p>
                    
                    <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-900">{study.results.length}</span> key outcomes
                      </div>
                      
                      <button 
                        className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCaseStudy(study.id);
                        }}
                      >
                        View Details
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-4">
                  <Filter className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Try adjusting your search criteria or filters to find the case studies you're looking for.
                </p>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    setActiveFilter('all');
                    setActiveIndustry('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Detailed Case Study Section - Shown when a case study is selected */}
      {activeCaseStudy && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 lg:px-8">
            {filteredCaseStudies.filter(study => study.id === activeCaseStudy).map((study) => (
              <div key={study.id} className="bg-white">
                <button 
                  onClick={() => setActiveCaseStudy(null)}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
                >
                  <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
                  Back to all case studies
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100 mb-8">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                    
                    {study.testimonial && (
                      <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500 relative">
                        <div className="text-blue-600 text-3xl absolute -top-4 -left-2">"</div>
                        <p className="text-gray-700 italic mb-4">
                          {study.testimonial.quote}
                        </p>
                        <div>
                          <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                        </div>
                      </div>
                    )}
              </div>

                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                  {study.title}
                    </h2>
                    
                    <div className="mb-6 flex flex-wrap gap-2">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-x-2">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{study.client}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{study.industry}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{study.date}</span>
                  </div>
                </div>

                    <p className="text-lg text-gray-700 mb-8">
                  {study.description}
                </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
                            <metric.icon className="h-6 w-6" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-500 capitalize">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Challenges, Solutions, Results */}
                    <div className="space-y-8">
                  <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenges</h3>
                        <ul className="space-y-3">
                      {study.challenges.map((challenge, i) => (
                            <li key={i} className="flex gap-x-3 items-start">
                              <CheckCircle2 className="h-6 w-5 flex-none text-blue-600 mt-0.5" />
                              <span className="text-gray-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                        <ul className="space-y-3">
                      {study.solutions.map((solution, i) => (
                            <li key={i} className="flex gap-x-3 items-start">
                              <CheckCircle2 className="h-6 w-5 flex-none text-blue-600 mt-0.5" />
                              <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Results</h3>
                        <ul className="space-y-3">
                      {study.results.map((result, i) => (
                            <li key={i} className="flex gap-x-3 items-start">
                              <CheckCircle2 className="h-6 w-5 flex-none text-blue-600 mt-0.5" />
                              <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Partner with Apex Enterprises for innovative workforce solutions designed specifically for your industry and business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="px-6 py-3 bg-white text-blue-800 font-medium rounded-full hover:bg-blue-50 transition-colors">
              Contact Our Team
            </a>
            <a href="/services" className="px-6 py-3 bg-blue-800 text-white font-medium rounded-full border border-blue-700 hover:bg-blue-800/80 transition-colors">
              Explore Our Services
            </a>
      </div>
    </div>
      </section>
    </>
  );
}