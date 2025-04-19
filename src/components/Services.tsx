import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO, generateServiceSchema } from '../utils/seo';
import { 
  Users, FileCheck, FileSpreadsheet, BarChart2, Briefcase, 
  Cpu, Zap, Brain, Award, Globe2, CheckCircle, ArrowRight,
  Megaphone,
  ChevronDown, ChevronUp, Shield, Clock, Database, Building2
} from 'lucide-react';

// SEO-optimized service descriptions
const services = [
  {
    id: 1,
    name: "Contract Staffing Solutions",
    description: "Compliant workforce staffing services across all 28 Indian states with complete PF, ESI, and labor law adherence. Our AI-powered matching system ensures the right talent for your specific industry needs.",
    metaDescription: "India's leading contract staffing services with complete regulatory compliance across all states. PF & ESI compliant workforce solutions for all industries.",
    icon: Users,
    href: "/services/contract-staffing",
    features: [
      "100% PF, ESI, and Professional Tax compliant staffing across India",
      "AI-powered background verification with 99.7% accuracy",
      "Industry-specific talent matching algorithms reducing time-to-hire by 68%",
      "Real-time workforce management dashboards with compliance alerts"
    ],
    color: "blue",
    stat: { value: "280K+", label: "Associates deployed" }
  },
  {
    id: 2,
    name: "Payroll Management Services",
    description: "End-to-end payroll processing with statutory compliance for businesses of all sizes across India. Our automated systems handle complex multi-state regulations while ensuring 100% accuracy.",
    metaDescription: "End-to-end payroll services with complete statutory compliance across India. Multi-state payroll processing with automated calculations and filings.",
    icon: FileCheck,
    href: "/services/payroll-services",
    features: [
      "Automated statutory calculations and filings with 100% accuracy guarantee",
      "Multi-state compliance automation covering all 28 Indian states",
      "Digital payslips and secure employee self-service portal",
      "Customized payroll policy implementation with audit trails"
    ],
    color: "indigo",
    stat: { value: "₹850Cr+", label: "Monthly processing" }
  },
  {
    id: 3,
    name: "Labor Law Compliance",
    description: "Comprehensive statutory compliance management for all Indian labor laws. Our expert team ensures timely filing of returns, maintains documentation, and conducts regular compliance audits.",
    metaDescription: "Labor law compliance services for all Indian states. Expert statutory compliance management, returns filing, and documentation maintenance.",
    icon: FileSpreadsheet,
    href: "/services/regulatory-compliance",
    features: [
      "Timely monthly/quarterly statutory returns filing with verification",
      "Comprehensive compliance audit system with remediation tracking",
      "Automated compliance calendar with critical deadline alerts",
      "State-specific labor law advisory from certified experts"
    ],
    color: "purple",
    stat: { value: "99.8%", label: "Compliance rate" }
  },
  {
    id: 4,
    name: "AI Workforce Analytics",
    description: "Leverage cutting-edge artificial intelligence to gain actionable insights into workforce performance, optimization opportunities, and compliance risks. Predict trends before they impact your operations.",
    metaDescription: "AI-powered workforce analytics for Indian businesses. Data-driven insights for performance optimization, cost reduction, and compliance management.",
    icon: Brain,
    href: "/services/workforce-analytics",
    features: [
      "Predictive analytics for precise workforce planning and budgeting",
      "Advanced attrition prediction algorithms with 83% accuracy",
      "AI-driven skill gap analysis with tailored training recommendations",
      "Real-time compliance risk monitoring across all locations"
    ],
    color: "green",
    isNew: true,
    stat: { value: "42%", label: "Avg. efficiency gain" }
  },
  {
    id: 5,
    name: "Training & Development Programs",
    description: "Industry-aligned upskilling programs with recognized certifications. Our adaptive learning platform combines virtual and in-person training to develop a skilled workforce tailored to your requirements.",
    metaDescription: "Upskilling and training programs aligned with Indian industry standards. NSDC-certified courses, virtual and in-person training delivery across India.",
    icon: Award,
    href: "/services/training-development",
    features: [
      "NSDC-aligned certification courses recognized across industries",
      "Personalized learning paths with AI-driven progress tracking",
      "Hybrid virtual and in-person training delivery models",
      "Skill India partnership programs with government incentives"
    ],
    color: "orange",
    stat: { value: "75K+", label: "Workers trained" }
  },
  {
    id: 6,
    name: "Pan-India Deployment Services",
    description: "Seamless workforce deployment across all major Indian cities with localized compliance expertise. Our regional specialists ensure smooth operations while maintaining centralized control.",
    metaDescription: "Nationwide workforce deployment services across 25+ Indian cities. Local compliance expertise with centralized management for consistent service delivery.",
    icon: Globe2,
    href: "/services/india-deployment",
    features: [
      "Operational presence across Tier 1, 2 and 3 cities in all regions",
      "Regional labor law expertise covering all 28 states and 8 union territories",
      "Streamlined local onboarding and compliant documentation",
      "Centralized management dashboard with localized support teams"
    ],
    color: "red",
    stat: { value: "25+", label: "Cities covered" }
  },
  {
    id: 7,
    name: "Security Services",
    description: "Comprehensive physical and digital security solutions for businesses across India. Our trained security professionals ensure the safety of your premises, assets, and personnel with 24/7 vigilance.",
    metaDescription: "Professional security services across India with trained guards, surveillance systems, and security audits. PSARA-compliant security solutions for all industries.",
    icon: Shield,
    href: "/services/security-services",
    features: [
      "PSARA-compliant security personnel with rigorous background verification",
      "Integrated surveillance systems with AI-enabled threat detection",
      "Customized security protocols based on industry requirements",
      "Regular security audits and emergency response training"
    ],
    color: "blue",
    stat: { value: "15K+", label: "Security personnel" }
  },
  {
    id: 8,
    name: "Placement Services",
    description: "End-to-end recruitment and placement solutions for permanent staffing needs. Our industry-specialized recruiters leverage AI matching technology to identify ideal candidates with precision and speed.",
    metaDescription: "Permanent staffing and recruitment solutions across India. Industry-specialized talent acquisition with AI-powered candidate matching for all sectors.",
    icon: Briefcase,
    href: "/services/placement-services",
    features: [
      "Industry-specialized recruitment teams with deep domain expertise",
      "AI-powered candidate sourcing and matching algorithms",
      "Comprehensive skill assessment and cultural fit evaluation",
      "90-day replacement guarantee with extensive onboarding support"
    ],
    color: "indigo",
    stat: { value: "30K+", label: "Placements annually" }
  },
  {
    id: 9,
    name: "Labour Contract Services",
    description: "Fully compliant labour contracting solutions for manufacturing, construction, and industrial sectors. We manage all aspects of workforce contracts while ensuring complete adherence to relevant labor laws.",
    metaDescription: "Labor contracting services with complete statutory compliance for manufacturing, construction, and industrial sectors across India. Manage contract labor efficiently and legally.",
    icon: FileCheck,
    href: "/services/labour-contract",
    features: [
      "End-to-end management of contract labor with full compliance",
      "Specialized solutions for manufacturing, construction, and industrial sectors",
      "Real-time attendance and productivity monitoring systems",
      "Comprehensive wage calculation and timely disbursement"
    ],
    color: "purple",
    stat: { value: "100%", label: "Compliance assured" }
  },
  {
    id: 10,
    name: "Housekeeping Services",
    description: "Professional housekeeping and facility maintenance services for corporate offices, industrial premises, and commercial spaces. Our trained staff maintain pristine environments with quality assurance protocols.",
    metaDescription: "Professional housekeeping services for corporate, industrial, and commercial spaces across India. Trained staff, quality assurance, and environmentally friendly cleaning solutions.",
    icon: CheckCircle,
    href: "/services/housekeeping",
    features: [
      "Trained and verified housekeeping staff with standardized protocols",
      "Environmentally friendly cleaning products and sustainable practices",
      "Customized cleaning schedules based on facility requirements",
      "Regular quality audits and performance monitoring"
    ],
    color: "green",
    stat: { value: "5M+", label: "Sq.ft. maintained" }
  },
  {
    id: 11,
    name: "Horticulture Services",
    description: "Expert landscaping and horticulture management for corporate campuses, industrial parks, and commercial properties. Our specialists create and maintain sustainable green spaces that enhance work environments.",
    metaDescription: "Professional horticulture and landscaping services for corporate campuses and commercial properties. Sustainable green space design and maintenance across India.",
    icon: Globe2,
    href: "/services/horticulture",
    features: [
      "Sustainable landscaping design with native and adaptive plant species",
      "Water-efficient irrigation systems and rainwater harvesting integration",
      "Regular maintenance schedules with seasonal enhancements",
      "Organic pest management and eco-friendly fertilization practices"
    ],
    color: "emerald",
    stat: { value: "2M+", label: "Sq.ft. green space" }
  },
  {
    id: 12,
    name: "Backend Support Services",
    description: "Comprehensive back-office support services including data processing, document management, and administrative functions. Our teams streamline operations while ensuring accuracy and efficiency.",
    metaDescription: "Back-office support services including data processing, documentation, and administrative functions. Outsourced backend operations for enhanced efficiency across all sectors.",
    icon: Database,
    href: "/services/backend-support",
    features: [
      "Data entry and processing with 99.9% accuracy guarantee",
      "Document digitization and secure cloud-based archiving",
      "Accounts payable/receivable processing with timely reconciliation",
      "Dedicated teams with domain expertise across industries"
    ],
    color: "orange",
    stat: { value: "40%", label: "Cost reduction" }
  },
  {
    id: 13,
    name: "Real Estate Services",
    description: "End-to-end real estate solutions for corporate clients, including property acquisition, lease management, and facility optimization. Our experts navigate the complex Indian real estate landscape for optimal outcomes.",
    metaDescription: "Corporate real estate services including property acquisition, lease management, and facility optimization across India. Expert guidance for all commercial real estate needs.",
    icon: Building2,
    href: "/services/real-estate",
    features: [
      "Strategic property acquisition and lease negotiation expertise",
      "Comprehensive due diligence and regulatory compliance verification",
      "Portfolio optimization and space utilization analysis",
      "Facility management with preventive maintenance protocols"
    ],
    color: "blue",
    stat: { value: "₹500Cr+", label: "Managed annually" }
  },
  {
    id: 14,
    name: "Liaison Services",
    description: "Expert liaison and regulatory affairs management for businesses navigating India's complex regulatory environment. Our specialists facilitate smooth interactions with government agencies and regulatory bodies.",
    metaDescription: "Professional liaison services for regulatory affairs and government relations across India. Expert assistance for permits, licenses, and regulatory compliance for all sectors.",
    icon: Clock,
    href: "/services/liaison-services",
    features: [
      "End-to-end management of permits and licenses acquisition",
      "Representation before regulatory authorities and government bodies",
      "Compliance monitoring with updates on regulatory changes",
      "Strategic advisory on government policies and incentives"
    ],
    color: "indigo",
    stat: { value: "500+", label: "Clients served" }
  },
  {
    id: 15,
    name: "Marketing Services",
    description: "Comprehensive marketing solutions including digital marketing, brand strategy, and campaign management to boost your market presence across India.",
    metaDescription: "Full-stack marketing services: digital marketing, branding, and campaign execution for businesses in India.",
    icon: Megaphone,
    href: "/services/marketing-services",
    features: [
      "Data-driven digital marketing campaigns",
      "Brand strategy and identity development",
      "Social media management and engagement",
      "Performance analytics and ROI optimization"
    ],
    color: "teal",
    stat: { value: "150+", label: "Campaigns run" }
  }
];

// Industry-specific solutions with targeted keywords
const industries = [
  { name: "Manufacturing", description: "Specialized workforce solutions for manufacturing sector with compliance focus", icon: Briefcase },
  { name: "IT & ITES", description: "Talent solutions for technology companies with specialized skill matching", icon: Cpu },
  { name: "Banking & Finance", description: "Compliant staffing for BFSI sector with stringent verification processes", icon: Shield },
  { name: "E-commerce & Retail", description: "Flexible workforce solutions for retail operations across India", icon: Globe2 },
  { name: "Healthcare", description: "Specialized staffing and compliance for healthcare organizations", icon: Award },
  { name: "Real Estate & Construction", description: "End-to-end workforce and facility management for property developers", icon: Building2 },
  { name: "Hospitality", description: "Trained staff and facility management for hotels and restaurants", icon: CheckCircle },
  { name: "Education", description: "Support services and administrative staffing for educational institutions", icon: Award },
  { name: "Government & PSUs", description: "Liaison and compliance services for public sector requirements", icon: Shield }
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [visibleSection, setVisibleSection] = useState<string>("services");

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

  return (
    <div className="bg-white py-24 sm:py-32">
      <SEO 
        title="Workforce Solutions & Services | Apex Enterprises"
        description="Comprehensive workforce solutions including contract staffing, payroll services, security, housekeeping, horticulture, real estate, and liaison services across all 28 Indian states with AI-powered efficiency."
        keywords="contract staffing, payroll services, regulatory compliance, AI workforce analytics, security services, housekeeping, horticulture, labour contract, real estate services, liaison services, placement services, backend support"
        canonical="/services"
        schema={generateServiceSchema({
          name: "Workforce Solutions",
          description: "Comprehensive workforce management services across India with specialized solutions for staffing, compliance, security, facility management, and business support services.",
          url: "https://apexenterprises.net/services",
          image: "https://apexenterprises.net/images/services.jpg"
        })}
      />

      <div className="relative py-24 sm:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute inset-0 bg-grid opacity-5"></div>
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-blob"></div>
          <div className="absolute top-3/4 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero section with SEO-optimized heading structure */}
          <section className="mx-auto max-w-3xl lg:text-center mb-16" id="overview">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-6">
              <Zap className="mr-1.5 h-4 w-4" aria-hidden="true" />
              <span>Comprehensive Service Suite</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              AI-Enhanced <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Workforce Solutions</span> for Indian Businesses
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Our innovative blend of technology and domain expertise delivers exceptional workforce management services tailored to the unique regulatory challenges of the Indian market. With operations across all 28 states, we ensure 100% compliance while optimizing your workforce operations.
            </p>
          </section>
          
          {/* Featured services grid with enhanced interactions and semantic structure */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" id="services" aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Our Services</h2>
            {services.map((service) => (
              <article 
                key={service.id}
                className="group relative perspective-1000 h-full"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div 
                  className={`h-full rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-${service.color}-100 transform-style-3d hover:-translate-y-2 ${hoveredId === service.id ? 'hover:rotate-y-3' : ''}`}
                >
                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 h-24 w-24 rounded-full bg-${service.color}-50 opacity-40 -mt-6 -mr-6 group-hover:scale-125 transition-transform duration-500`} aria-hidden="true"></div>
                  
                  {service.isNew && (
                    <div className="absolute top-4 right-4 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 z-10">
                      New Service
                    </div>
                  )}
                  
                  {/* Service icon */}
                  <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 text-${service.color}-700 mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110`} aria-hidden="true">
                    <service.icon className="h-7 w-7" />
                    
                    {/* Pulsing ring for AI-powered services */}
                    {service.id === 4 && (
                      <div className="absolute inset-0 rounded-xl animate-ring-pulse"></div>
                    )}
                  </div>
                  
                  {/* Service content with semantic structure */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      {service.name}
                      {service.id === 4 && (
                        <Cpu className="ml-2 h-4 w-4 text-green-600" aria-label="AI-powered service" />
                      )}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    {/* Key statistic */}
                    <div className="flex items-center gap-2 mb-5">
                      <div className={`text-2xl font-bold text-${service.color}-600`}>{service.stat.value}</div>
                      <div className="text-xs text-gray-500">{service.stat.label}</div>
                    </div>
                    
                    {/* Features list - expandable for better UX */}
                    <div className={`space-y-3 mb-6 transition-all duration-300 ${expandedId === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 flex-shrink-0 text-${service.color}-500 mr-2 mt-0.5`} aria-hidden="true" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between mt-6">
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className={`flex items-center text-sm font-medium text-${service.color}-600 hover:text-${service.color}-500`}
                        aria-expanded={expandedId === service.id}
                      >
                        {expandedId === service.id ? (
                          <>
                            <span>Less info</span>
                            <ChevronUp className="ml-1 h-4 w-4" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            <span>More info</span>
                            <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                      
                      <Link 
                        to={service.href}
                        className={`inline-flex items-center text-sm font-medium text-${service.color}-600 hover:text-${service.color}-500 group`}
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Explore
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
          
          {/* AI-powered services highlight section with enhanced content */}
          <section className="mt-24 mx-auto max-w-5xl" id="ai-solutions" aria-labelledby="ai-solutions-heading">
            <h2 id="ai-solutions-heading" className="sr-only">AI-Powered Workforce Solutions</h2>
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" aria-hidden="true"></div>
              
              <div className="px-8 py-12 sm:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2">
                    <div className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/30 mb-6">
                      <Brain className="mr-1.5 h-4 w-4" aria-hidden="true" />
                      <span>AI-Powered Innovation</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6">Experience the Future of Workforce Management in India</h3>
                    
                    <p className="text-blue-100 mb-8">
                      Our AI-enhanced solutions transform how businesses manage their workforce across India's complex regulatory landscape. With intelligent matching algorithms, predictive analytics, and automated compliance monitoring, we deliver measurable improvements in efficiency and cost savings.
                    </p>
                    
                    <Link
                      to="/ai-workforce-solutions"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-300 mb-4"
                    >
                      <span>Explore AI Solutions</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  
                  <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: "Faster Talent Matching", value: "68%", icon: Zap },
                        { title: "Compliance Accuracy", value: "99.7%", icon: CheckCircle },
                        { title: "Attrition Prediction", value: "83%", icon: BarChart2 },
                        { title: "Cost Reduction", value: "32%", icon: Briefcase }
                      ].map((stat, idx) => (
                        <div key={idx} className="rounded-xl bg-white/10 backdrop-blur-sm p-4 hover:bg-white/20 transition-colors duration-300">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                              <stat.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-white">{stat.title}</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured AI Solution: Resume Screening */}
            <div className="mt-10 rounded-2xl bg-indigo-50 border border-indigo-100 overflow-hidden">
              <div className="px-8 py-10 sm:px-12 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-2/3">
                  <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/20 mb-4">
                    <span>FEATURED AI TOOL</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Apex IntelliHire™ - AI Resume Screening</h3>
                  <p className="text-gray-600 mb-6">
                    Cut hiring time by 65% with our AI-powered resume screening technology. Our intelligent system analyzes thousands of resumes in minutes, identifying the best candidates with 94% accuracy based on skills, experience, and cultural fit.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-indigo-500 mr-2 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-600">Advanced CV analysis across 12 Indian languages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-indigo-500 mr-2 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-600">Bias-free candidate evaluation & ranking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-indigo-500 mr-2 mt-0.5" aria-hidden="true" />
                      <span className="text-gray-600">Seamless ATS integration with real-time analytics</span>
                    </li>
                </ul>
                  <Link
                    to="/ai-resume-screening"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 hover:shadow-md transition-all duration-300"
                  >
                    <span>Explore Resume Screening</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-6 border border-gray-100">
                    <div className="text-center">
                      <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                        <Brain className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">Hiring Efficiency</div>
                      <div className="text-3xl font-bold text-indigo-600 mb-2">65%</div>
                      <div className="text-xs text-gray-500">Time reduction</div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Matching Accuracy</div>
                        <div className="text-3xl font-bold text-indigo-600 mb-2">94%</div>
                        <div className="text-xs text-gray-500">Candidate-job fit accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Industry solutions section - new for SEO enhancement */}
          <section className="mt-24 mx-auto" id="industry-solutions" aria-labelledby="industry-heading">
            <div className="text-center mb-12">
              <h2 id="industry-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Industry-Specific Workforce Solutions
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                We offer specialized staffing and compliance solutions tailored to the unique requirements of key industries across India.
              </p>
        </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {industries.map((industry, idx) => (
                <Link 
                  key={idx} 
                  to={`/industries/${industry.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                  className="group flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="rounded-full bg-blue-50 p-3 mb-4">
                    <industry.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-center text-gray-600">{industry.description}</p>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Why choose us section - new for SEO enhancement */}
          <section className="mt-24 mx-auto" id="why-choose-us" aria-labelledby="why-heading">
            <div className="text-center mb-12">
              <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Why Choose Apex Enterprises
            </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                India's most trusted partner for workforce management solutions with two decades of proven expertise.
            </p>
          </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "20+ Years Experience",
                  description: "Pioneering workforce solutions in India since 2001 with deep domain expertise",
                  icon: Clock
                },
                {
                  title: "Pan-India Coverage",
                  description: "Operations across all 28 states and 8 union territories with local expertise",
                  icon: Globe2
                },
                {
                  title: "100% Compliance",
                  description: "Comprehensive understanding of India's complex labor regulations",
                  icon: Shield
                },
                {
                  title: "AI-Powered Innovation",
                  description: "Cutting-edge technology for smarter workforce management",
                  icon: Brain
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Call to action */}
          <section className="mt-16 text-center" id="contact-us">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Workforce Management?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Speak with our experts to discover how our AI-enhanced workforce solutions can help your business achieve greater efficiency, compliance, and cost savings.
              </p>
            <Link
              to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-300"
            >
                <span>Schedule a Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          </section>
        </div>
      </div>
    </div>
  );
}