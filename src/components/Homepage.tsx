import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Target, Award, Users, Building2, Globe2, Handshake, Zap, Shield, 
  Sparkles, Brain, Code, Database, Cpu, BarChart2, Network, Check, TrendingUp, 
  CheckCircle, ChevronDown, Clock, FileSearch, Bot, MessageSquare
} from 'lucide-react';
import OptimizedImage from './ui/OptimizedImage';
import Hero from './Hero';
import Services from './Services';
import Industries from './Industries';
import Testimonials from './Testimonials';
import Insights from './Insights';
import Awards from './Awards';
import LegalServices from './LegalServices';
import Statistics from './Statistics';
import Newsletter from './Newsletter';
import Clients from './Clients';
import InteractiveElements from './InteractiveElements';
import ElevenLabsConvai from './ElevenLabsConvai';
import ConversionCTA from './ConversionCTA';
import TrustSignals from './TrustSignals';
import { AI_WORKFORCE_STATS } from '../utils/ai-workforce';
import './homepage.css'; // Import CSS file with animations

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreServices = [
    { 
      name: "Executive Search & C-Suite Placements", 
      description: "As one of the top executive search firms in India, we specialize in discreetly sourcing and placing high-caliber leadership talent.",
      icon: Users
    },
    { 
      name: "IT & Technology Staffing", 
      description: "Comprehensive IT staffing solutions, from niche skills to large-scale project deployments. Your go-to IT recruitment agency.",
      icon: Code
    },
    { 
      name: "Manpower Supply & Blue-Collar Recruitment", 
      description: "Reliable manpower supply across India for manufacturing, logistics, and more, ensuring full compliance.",
      icon: Building2
    },
    { 
      name: "HR Consulting & Advisory", 
      description: "Expert HR consulting to streamline your operations, from compliance audits to performance management.",
      icon: Handshake
    },
    { 
      name: "AI-Powered Recruitment Process Outsourcing (RPO)", 
      description: "End-to-end RPO services powered by AI for efficiency, quality, and significant cost savings.",
      icon: Brain
    },
  ];

  const solutions = [
    { 
      name: "Contract Staffing",
      description: "Agile short and long-term staffing solutions with complete EPF, ESI compliance across India. We are a leading contract staffing company.",
      href: "/services/contract-staffing",
      icon: Users,
    },
    {
      name: "Payroll & PF/ESI Compliance",
      description: "End-to-end management of PF, ESI, Gratuity, LWF, and Professional Tax with statutory reporting. A key service for any manpower supply company.",
      href: "/services/payroll-compliance",
      icon: Shield,
    },
    {
      name: "Labour Law Advisory",
      description: "Expert guidance on Shops & Establishment Act and Industrial Disputes Act compliance from top HR consultants in India.",
      href: "/services/labour-law-advisory",
      icon: Target,
    },
    {
      name: "Specialized & Niche Hiring",
      description: "Specialised recruitment for IT, manufacturing, retail, and BFSI. One of the best placement agencies in India for niche roles.",
      href: "/services/specialised-hiring",
      icon: Building2,
    },
    {
      name: "AI Workforce Analytics",
      description: "Advanced data analytics to optimize workforce planning and performance. A unique offering from a leading job consultancy in India.",
      href: "/services/workforce-analytics",
      icon: BarChart2,
    },
    {
      name: "Pan-India Deployment",
      description: "Field staff deployment across 25+ Indian cities with local compliance expertise. We are a truly pan-India recruitment agency.",
      href: "/services/india-deployment",
      icon: Globe2,
    },
  ];

  const clientTestimonials = [
    {
      quote: "Apex's AI-powered talent matching reduced our hiring time by 65% while improving candidate quality significantly.",
      author: "Rahul Sharma",
      title: "HR Director",
      company: "TechVision India",
      industry: "IT Services",
    },
    {
      quote: "Their automated compliance system helps us navigate the complex regulatory landscape across 12 states with complete confidence.",
      author: "Priya Mehta",
      title: "Chief Compliance Officer",
      company: "NextGen Manufacturing",
      industry: "Manufacturing",
    },
    {
      quote: "The predictive analytics dashboard has transformed how we forecast staffing needs, saving us millions in unnecessary hiring costs.",
      author: "Amit Patel",
      title: "COO",
      company: "Horizon Bank",
      industry: "Banking & Finance",
    },
  ];

  const aiMetrics = [
    { 
      title: "Time to Shortlist", 
      value: "-60%", 
      description: "Reduce candidate screening time by 60% with our AI-powered resume screening system" 
    },
    { 
      title: "Candidate Engagement", 
      value: "80%", 
      description: "Increase response rates with our 24/7 AI chatbots assisting candidates throughout the hiring process" 
    },
    { 
      title: "Compliance Accuracy", 
      value: "99.5%", 
      description: "Maintain regulatory compliance with automated AI monitoring and verification systems" 
    },
    { 
      title: "Attrition Prediction", 
      value: "30 days", 
      description: "Identify retention risks a full month before traditional methods with AI forecasting" 
    },
  ];

  const faqs = [
    {
      question: "Is the AI technology secure and private?",
      answer: "Yes. We follow strict Indian data protection norms and never store sensitive personal data unnecessarily. All data is encrypted both in transit and at rest, with regular security audits."
    },
    {
      question: "Do I need technical knowledge to use your AI solutions?",
      answer: "Not at all. We manage everything for you – from onboarding to automation. Our solutions are designed with intuitive interfaces, and our team provides comprehensive training and support."
    },
    {
      question: "Can I integrate your AI tools with my existing ATS/HRMS?",
      answer: "Yes, we offer integrations with all major HRMS, ATS, and ERP systems used in India. Our team can create custom workflows that seamlessly connect with your existing tools and processes."
    },
    {
      question: "How does AI improve compliance management?",
      answer: "Our AI systems continuously monitor regulatory changes across all 28 Indian states, automatically updating compliance requirements, generating necessary documentation, and providing alerts for upcoming deadlines."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>#1 Recruitment Agency & Staffing Company in India | Apex Enterprises</title>
        <meta name="description" content="Apex Enterprises is India's leading recruitment agency and staffing company. We offer executive search, IT staffing, and manpower supply solutions. Contact the top HR consultants in India today." />
        
        {/* Open Graph meta tags for better social preview */}
        <meta property="og:title" content="#1 Recruitment Agency & Staffing Company in India | Apex Enterprises" />
        <meta property="og:description" content="Partner with India's top recruitment agency for comprehensive staffing and HR solutions." />
        <meta property="og:image" content="https://www.apexenterprises.in/og-image.jpg" />
        <meta property="og:url" content="https://www.apexenterprises.in" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Refined Professional Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50 py-16 sm:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Premium Badge */}
            <div className="hero-premium-badge mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-orange-100 to-green-100 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-inset ring-orange-200/50">
              <span className="mr-2 h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              Trusted by 500+ Leading Companies Across India
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-blue-600 to-green-600">#1 Recruitment</span>
              <br />
              <span className="text-gray-800">& Staffing Agency</span>
            </h1>
            
            {/* Subheading */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              For over 23 years, we've been the trusted partner connecting exceptional talent with India's most successful companies. Our AI-powered solutions ensure perfect matches, every time.
            </p>
            
            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="hero-cta-button group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-orange-500 hover:to-orange-400 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Link>
              
              <Link 
                to="/services" 
                className="hero-cta-button group inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Explore Our Services
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="hero-trust-indicators mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
              <div className="text-center">
                <div className="hero-trust-number text-2xl font-bold text-orange-600">50,000+</div>
                <div className="hero-trust-label text-sm text-gray-600">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="hero-trust-number text-2xl font-bold text-blue-600">500+</div>
                <div className="hero-trust-label text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="hero-trust-number text-2xl font-bold text-green-600">23+</div>
                <div className="hero-trust-label text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="hero-trust-number text-2xl font-bold text-orange-600">28</div>
                <div className="hero-trust-label text-sm text-gray-600">States Covered</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-400 to-green-400 opacity-20" style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}>
          </div>
        </div>
      </section>

      <TrustSignals />
      
      {/* Core Services Section */}
      <section id="core-services" className="py-20 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Core Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A Comprehensive Recruitment Agency for India
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a full spectrum of HR services, from executive search to large-scale manpower supply. As a top staffing company in India, we have the expertise to meet all your hiring needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {coreServices.map((service) => (
                <div key={service.name} className="flex flex-col p-6 rounded-lg billion-dollar-card hover:shadow-2xl transition-shadow duration-300">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-8 w-8 flex-none text-indigo-600 luxury-gradient-text" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <Link to="/services" className="text-sm font-semibold leading-6 text-indigo-600">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ConversionCTA />

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Apex Enterprises as Your Recruitment Partner in India?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We are not just another placement agency. We are a strategic partner committed to your success. Our deep understanding of the Indian job market, combined with cutting-edge technology, makes us the best choice for your company.
            </p>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">20+ Years of Experience</h3>
                <p className="mt-2 text-gray-600">Proven track record as a top job consultancy in India since 2003.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Globe2 className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Pan-India Reach</h3>
                <p className="mt-2 text-gray-600">Extensive network across all major cities and industrial hubs.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Brain className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">AI-Powered Technology</h3>
                <p className="mt-2 text-gray-600">Leveraging AI for faster, more accurate placements.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Shield className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">100% Statutory Compliance</h3>
                <p className="mt-2 text-gray-600">Expert handling of all labor laws and regulations.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Industry Specialization</h3>
                <p className="mt-2 text-gray-600">Dedicated teams for IT, Manufacturing, BFSI, and more.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <TrendingUp className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Measurable ROI</h3>
                <p className="mt-2 text-gray-600">Our solutions are designed to improve your bottom line.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <Industries />

      <Clients />
      
      <Statistics />

      <LegalServices />

      <Insights />

      <Awards />
      
      <InteractiveElements />

      <Newsletter />

    </main>
  );
}