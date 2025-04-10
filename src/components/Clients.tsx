// React import not needed with JSX transform in React 17+
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, MapPin, ArrowRight, Users, 
  Globe2, Award, BarChart2, ChevronRight,
  CheckCircle2, Star, Briefcase, Factory,
  Server, ShoppingBag, Monitor, Coffee
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
  'Healthcare': CheckCircle2,
  'Food Processing': Factory,
  'Electronics': Briefcase
};

// Enhanced client data with additional information
const clients = [
  {
    name: 'M.D.H Ltd.',
    logo: '/logos/mdh.svg', // Placeholder for MDH logo
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
    logo: '/logos/zup.svg', // Placeholder for ZUP Corp logo
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

// Enhanced location data with regions and states
const clientLocations = [
  {
    city: 'Gurgaon',
    state: 'Haryana',
    region: 'North',
    mapCoordinates: [28.4595, 77.0266],
    clients: [
      'Eastern Medikit Ltd.',
      'M.D.H Ltd.',
      'Super Delicacies Pvt. Ltd.',
      'Gulati Export House',
      'Techtronic India Ltd.',
      'Leading Edge Electronic Pvt. Ltd.',
      'SR Info Tach Pvt. Ltd.',
      'Deepak International',
      'Merigold Export House',
      'Vijai Electrical Ltd.',
    ],
  },
  {
    city: 'New Delhi',
    state: 'Delhi NCR',
    region: 'North',
    mapCoordinates: [28.6139, 77.2090],
    clients: [
      'Goel Farm House Dera Mandi',
    ],
  },
  {
    city: 'Baddi',
    state: 'Himachal Pradesh',
    region: 'North',
    mapCoordinates: [30.9550, 76.7915],
    clients: [
      'Kobian India Electronic Ltd.',
      'Su-kam Communication',
      'Flack & Flower',
      'Bajaj Consumer Care',
      'Amco India Ltd.',
      'Jayco (Bummer) Ltd.',
    ],
  },
  {
    city: 'Manesar',
    state: 'Haryana',
    region: 'North',
    mapCoordinates: [28.3548, 76.9346],
    clients: [
      'Amul Dudh Sagar Ltd.',
    ],
  },
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'West',
    mapCoordinates: [19.0760, 72.8777],
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
    mapCoordinates: [12.9716, 77.5946],
    clients: [
      'Tech Innovations Pvt. Ltd.',
      'Digital Solutions Inc.',
      'Infoway Systems',
    ],
  },
];

// Client statistics for animated counter
const clientStats = [
  { value: 100, label: 'Enterprise Clients', icon: Building2 },
  { value: 25, label: 'Cities Covered', icon: MapPin },
  { value: 12, label: 'Industries Served', icon: Briefcase },
  { value: 15, label: 'Years of Excellence', icon: Award }
];

// Industry distribution for visualization
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
  const [visibleStats, setVisibleStats] = useState<{ [key: number]: number }>({});
  const [hasScrolled, setHasScrolled] = useState(false);

  // Filter locations by region
  const filteredLocations = activeRegion === 'All' 
    ? clientLocations 
    : clientLocations.filter(location => location.region === activeRegion);

  // Animate stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasScrolled(true);
        }
      },
      { threshold: 0.1 }
    );

    const statsSection = document.getElementById('client-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  // Animate count-up effect for stats
  useEffect(() => {
    if (!hasScrolled) return;

    clientStats.forEach((stat, index) => {
      let startValue = 0;
      const endValue = stat.value;
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(endValue / (duration / 50)); // Update every 50ms

      const timer = setInterval(() => {
        startValue += increment;
        if (startValue > endValue) {
          startValue = endValue;
          clearInterval(timer);
        }
        setVisibleStats(prev => ({
          ...prev,
          [index]: startValue
        }));
      }, 50);

      return () => clearInterval(timer);
    });
  }, [hasScrolled]);

  return (
    <>
      <Helmet>
        <title>Apex Enterprises | India’s Premier AI Workforce Partner</title>
        <meta 
          name="description" 
          content="Discover our impressive client roster spanning multiple industries across India. Learn how Apex Enterprises provides exceptional workforce solutions to leading companies." 
        />
      </Helmet>

      {/* Hero section with background gradient and pattern */}
      <section className="relative bg-gradient-to-b from-blue-900 to-indigo-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative container mx-auto px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Trusted by <span className="text-blue-300">Industry Leaders</span> Across India
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              From startups to Fortune 500 companies, we partner with organizations of all sizes to deliver excellence in workforce solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key stats section with animated counters */}
      <section id="client-stats" className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-4 transition-transform group-hover:scale-110 duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {hasScrolled ? visibleStats[index] ?? 0 : 0}
                  {stat.label === 'Cities Covered' ? '+' : ''}
                  {stat.label === 'Industries Served' ? '+' : ''}
                  {stat.label === 'Years of Excellence' ? '+' : ''}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured clients section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Featured Clients
            </h2>
            <p className="text-lg text-gray-600">
              We're proud to partner with these industry-leading organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients
              .filter(client => client.featured)
              .map((client) => (
                <div 
                  key={client.name} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                  onClick={() => setSelectedClient(client.name === selectedClient ? null : client.name)}
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-3">
                        {/* Industry Icon */}
                        {industryIcons[client.industry] && (
                          <div className={`p-2 rounded-lg bg-blue-50 text-blue-600`}>
                            {React.createElement(industryIcons[client.industry], { size: 20 })}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                          <p className="text-sm text-gray-500">{client.industry}</p>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {client.relationship}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{client.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {client.services.map((service, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable testimonial section */}
                  {client.testimonial && (
                    <div className={`bg-blue-50 p-6 transition-all duration-500 ${
                      selectedClient === client.name ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden p-0'
                    }`}>
                      <p className="text-sm italic text-gray-700 mb-3">"{client.testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center mr-3">
                          <span className="text-blue-700 font-semibold text-sm">{client.testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{client.testimonial.author}</p>
                          <p className="text-xs text-gray-500">{client.testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
                    <span className="text-xs text-gray-500">Click to {selectedClient === client.name ? 'hide' : 'view'} testimonial</span>
                    <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${
                      selectedClient === client.name ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Success Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Industry Distribution Visualization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Client Industry Distribution
            </h2>
            <p className="text-lg text-gray-600">
              Our expertise spans across multiple sectors
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {industryDistribution.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{item.industry}</span>
                  <span className="text-sm font-medium text-blue-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${hasScrolled ? item.percentage : 0}%`, transition: 'width 1.5s ease-in-out' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-India client network section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Pan-India Client Network
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Serving clients across the country with local expertise
            </p>
            
            {/* Region filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {['All', 'North', 'South', 'East', 'West'].map((region) => (
                <button
                  key={region}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeRegion === region 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveRegion(region)}
                >
                  {region === 'All' ? 'All Regions' : `${region} India`}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((location) => (
              <div 
                key={location.city} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h3 className="text-lg font-semibold">{location.city}</h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <Globe2 className="h-4 w-4 text-blue-400 mr-2" />
                    {location.state}, {location.region} India
                  </p>
                  
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Clients:</h4>
                    <ul role="list" className="space-y-3">
                      {location.clients.slice(0, 4).map((client) => (
                        <li key={client} className="flex items-start gap-x-3">
                          <Building2 className="h-4 w-4 flex-none text-blue-600 mt-0.5" />
                          <span className="text-gray-600 text-sm">{client}</span>
                        </li>
                      ))}
                      {location.clients.length > 4 && (
                        <li className="text-sm text-blue-600 font-medium ml-7 flex items-center cursor-pointer hover:text-blue-800">
                          +{location.clients.length - 4} more clients
                          <ChevronRight className="h-3 w-3 ml-1" />
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 relative">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 p-12 md:p-16 lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  Join Our Growing Network of Satisfied Clients
                </h2>
                <div className="mt-8 flex flex-col sm:flex-row gap-8">
                  {[
                    { count: '100%', label: 'Compliance Accuracy' },
                    { count: '97%', label: 'Client Retention' },
                    { count: '99%', label: 'On-time Delivery' }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="h-8 w-8 text-yellow-300 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-white">{stat.count}</p>
                        <p className="text-sm text-blue-100">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-md hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center rounded-lg border border-white px-6 py-3 text-base font-medium text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
                >
                  View Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}