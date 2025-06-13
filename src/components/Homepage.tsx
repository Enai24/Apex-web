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
import { AI_WORKFORCE_STATS } from '../utils/ai-workforce';
import './homepage.css'; // Import CSS file with animations

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const keyFeatures = [
    { 
      name: "AI-Powered Talent Matching", 
      description: "Our proprietary algorithms analyze 40+ parameters to match candidates with job requirements with 94% accuracy.",
      icon: Brain
    },
    { 
      name: "Workforce Predictive Analytics", 
      description: "Forecast staffing needs and identify attrition risks with our machine learning models trained on pan-India workforce data.",
      icon: BarChart2
    },
    { 
      name: "Automated Compliance Management", 
      description: "AI-driven compliance tracking across all 28 Indian states with real-time updates on regulatory changes.",
      icon: Shield
    },
    { 
      name: "Intelligent Payroll Processing", 
      description: "Machine learning algorithms optimize payroll processing with 99.7% accuracy, ensuring compliance with state regulations.",
      icon: Zap
    },
    { 
      name: "AI Voice Calling Agent", 
      description: "Conversational AI system that conducts initial candidate screening calls, schedules interviews, and answers common queries in multiple Indian languages.",
      icon: MessageSquare
    },
  ];

  const solutions = [
    { 
      name: "Contract Staffing",
      description: "Short and long-term staffing solutions with complete EPF, ESI compliance across India",
      href: "/services/contract-staffing",
      icon: Users,
    },
    {
      name: "Payroll & PF/ESI Compliance",
      description: "End-to-end management of PF, ESI, Gratuity, LWF, and Professional Tax with statutory reporting",
      href: "/services/payroll-compliance",
      icon: Shield,
    },
    {
      name: "Labour Law Advisory",
      description: "Expert guidance on Shops & Establishment Act and Industrial Disputes Act compliance",
      href: "/services/labour-law-advisory",
      icon: Target,
    },
    {
      name: "Blue & White-Collar Hiring",
      description: "Specialised recruitment for IT, manufacturing, retail, and BFSI across Tier-1 & Tier-2 cities",
      href: "/services/specialised-hiring",
      icon: Building2,
    },
    {
      name: "AI Workforce Analytics",
      description: "Advanced data analytics powered by AI to optimize workforce planning and performance",
      href: "/services/workforce-analytics",
      icon: BarChart2,
    },
    {
      name: "Pan-India Field Management",
      description: "Field staff deployment across 25+ Indian cities with local compliance expertise",
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
        <title>Apex Enterprises | AI-Powered Staffing & Workforce Solutions in India</title>
        <meta name="description" content="Apex Enterprises delivers AI-powered staffing, payroll, and compliance solutions across all 28 Indian states. Trusted by top companies for 23+ years of workforce innovation." />
        
        {/* Open Graph meta tags for better social preview */}
        <meta property="og:title" content="Apex Enterprises | India's Premier AI Workforce Partner" />
        <meta property="og:description" content="Transforming hiring, payroll, and compliance with intelligent automation." />
        <meta property="og:image" content="https://apexenterprises.net/og-image.jpg" />
        <meta property="og:url" content="https://apexenterprises.net" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Custom Hero Section - AI Focus */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
        {/* Enhanced geometric background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3b82f6] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="absolute inset-y-0 right-1/3 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white bg-opacity-80 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="absolute top-1/2 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#6366f1] to-[#a78bfa] opacity-10"></div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">AI-Powered Innovation</span>
                <span className="h-0.5 w-0.5 rounded-full bg-gray-500"></span>
                <a href="#ai-solutions" className="flex items-center gap-x-1 font-semibold text-gray-900">
                  Explore our solutions <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
  <span className="block">India's Premier</span>
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
    Workforce Solutions
  </span>
</h1>
<p className="mt-4 mb-2 text-base sm:text-lg font-medium text-green-800 bg-green-50 border border-green-200 rounded-lg px-4 py-2 inline-block shadow-sm">
  <span className="font-semibold">Apex</span> is <span className="font-semibold">MSME</span> & <span className="font-semibold">NAPS</span> registered, and fully licensed under the <span className="font-semibold">Contract Labour (Regulation &amp; Abolition) Act, 1970</span>.
</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Combining 23+ years of traditional staffing expertise with cutting-edge AI technology. We deliver both time-tested workforce solutions and innovative AI-powered talent management across all 28 Indian states.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/ai-workforce-solutions" className="relative group rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 overflow-hidden">
                <span className="relative z-10">Explore AI Solutions</span>
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></div>
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-x-1 group">
                Talk to Our Team <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative z-10">
            <div className="relative mx-auto overflow-hidden rounded-3xl shadow-2xl border border-indigo-50 bg-white transition-transform duration-300 hover:scale-[1.02] md:h-[540px] md:w-[540px]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1639322537138-5e513100b36e"
                alt="AI-powered workforce management dashboard showing recruitment analytics and staffing solutions for Indian businesses | Apex Enterprises"
                width={540}
                height={540}
                priority={true}
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 768px) 400px, 540px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/40 to-purple-500/30 mix-blend-multiply"></div>
              
              {/* Interactive AI annotation badges */}
              <div className="absolute -left-4 top-1/4 flex items-center gap-x-2 rounded-full bg-white/90 px-3 py-1 shadow-lg backdrop-blur-sm border border-indigo-50 animate-float">
                <Brain className="h-5 w-5 text-indigo-600" />
                <span className="text-xs font-medium text-gray-800">AI Talent Matching</span>
              </div>
              
              <div className="absolute -right-2 top-2/3 flex items-center gap-x-2 rounded-full bg-white/90 px-3 py-1 shadow-lg backdrop-blur-sm border border-indigo-50 animate-float animation-delay-2000">
                <Shield className="h-5 w-5 text-indigo-600" />
                <span className="text-xs font-medium text-gray-800">Automated Compliance</span>
              </div>
              
              <div className="absolute bottom-10 left-1/3 flex items-center gap-x-2 rounded-full bg-white/90 px-3 py-1 shadow-lg backdrop-blur-sm border border-indigo-50 animate-float animation-delay-4000">
                <BarChart2 className="h-5 w-5 text-indigo-600" />
                <span className="text-xs font-medium text-gray-800">Predictive Analytics</span>
              </div>
              
              {/* UI overlay elements for tech/innovation feel */}
              <div className="absolute top-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg border border-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>
                    <span className="text-xs font-semibold text-gray-700">AI Workforce Hub</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                    <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-xl px-3 py-2 shadow-lg border border-indigo-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Bot className="h-3.5 w-3.5 text-indigo-600" />
                    <span className="text-xs font-medium text-gray-700">AI Assistant Active</span>
                  </div>
                  <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></div>
                </div>
              </div>
              
              {/* AI Data visualization overlays */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-16 flex flex-col gap-1.5">
                <div className="h-2 w-full rounded-full bg-indigo-200/60 backdrop-blur-sm">
                  <div className="h-full w-3/4 rounded-full bg-indigo-500/80 animate-pulse-ring"></div>
                </div>
                <div className="h-2 w-full rounded-full bg-indigo-200/60 backdrop-blur-sm">
                  <div className="h-full w-1/2 rounded-full bg-purple-500/80 animate-pulse-ring animation-delay-2000"></div>
                </div>
                <div className="h-2 w-full rounded-full bg-indigo-200/60 backdrop-blur-sm">
                  <div className="h-full w-2/3 rounded-full bg-blue-500/80 animate-pulse-ring animation-delay-4000"></div>
                </div>
              </div>
              
              {/* Neural network visualization */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.1" stroke="white" strokeWidth="0.5">
                    <line x1="10%" y1="20%" x2="30%" y2="40%" />
                    <line x1="30%" y1="40%" x2="50%" y2="30%" />
                    <line x1="50%" y1="30%" x2="70%" y2="50%" />
                    <line x1="70%" y1="50%" x2="85%" y2="30%" />
                    <line x1="30%" y1="40%" x2="40%" y2="60%" />
                    <line x1="40%" y1="60%" x2="60%" y2="70%" />
                    <line x1="60%" y1="70%" x2="80%" y2="60%" />
                    
                    <circle cx="10%" cy="20%" r="2" fill="white" />
                    <circle cx="30%" cy="40%" r="2" fill="white" />
                    <circle cx="50%" cy="30%" r="2" fill="white" />
                    <circle cx="70%" cy="50%" r="2" fill="white" />
                    <circle cx="85%" cy="30%" r="2" fill="white" />
                    <circle cx="40%" cy="60%" r="2" fill="white" />
                    <circle cx="60%" cy="70%" r="2" fill="white" />
                    <circle cx="80%" cy="60%" r="2" fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Approach Section - Traditional + AI */}
      <section className="bg-white py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">OUR DUAL APPROACH</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Best of Both Worlds
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine proven traditional staffing methodologies with cutting-edge AI innovations to deliver complete workforce solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row gap-8">
            {/* Traditional Staffing Card */}
            <div className="flex-1 rounded-2xl bg-blue-50 p-8 shadow-lg border border-blue-100 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Traditional Staffing Excellence</h3>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Our traditional staffing services have been trusted by 3,500+ clients across India for over 23 years, providing reliable and compliant workforce solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Pan-India operations in 25+ cities",
                  "Complete statutory compliance management",
                  "Expert recruiters with sector specialization",
                  "Comprehensive HR and payroll services"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-x-2">
                    <CheckCircle className="h-5 w-5 flex-none text-blue-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
                  <p className="text-3xl font-bold text-blue-600">23+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-100 text-center">
                  <p className="text-3xl font-bold text-blue-600">50K+</p>
                  <p className="text-sm text-gray-600">Associates Deployed</p>
                </div>
              </div>
              
              <Link to="/services" className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
                Explore Traditional Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* AI Solutions Card */}
            <div className="flex-1 rounded-2xl bg-indigo-50 p-8 shadow-lg border border-indigo-100 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">AI-Powered Innovation</h3>
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Our cutting-edge AI solutions revolutionize how businesses acquire, manage, and retain talent with data-driven intelligence and automation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "AI-powered candidate matching",
                  "Predictive workforce analytics",
                  "Automated compliance management",
                  "AI voice calling for screening"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-x-2">
                    <CheckCircle className="h-5 w-5 flex-none text-indigo-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center">
                  <p className="text-3xl font-bold text-indigo-600">65%</p>
                  <p className="text-sm text-gray-600">Faster Hiring</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center">
                  <p className="text-3xl font-bold text-indigo-600">94%</p>
                  <p className="text-sm text-gray-600">Match Accuracy</p>
                </div>
              </div>
              
              <Link to="/ai-workforce-solutions" className="inline-flex items-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Apex Section - Best of Both Worlds */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">WHY CHOOSE APEX</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unmatched Workforce Expertise
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you prefer trusted traditional methods or cutting-edge AI technology, Apex delivers superior workforce solutions tailored to your unique requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Traditional + AI Integration",
                  description: "Seamlessly blend proven staffing methods with AI innovations based on your unique business needs and tech readiness.",
                  icon: Handshake,
                  color: "purple"
                },
                {
                  title: "Customized Solutions",
                  description: "Tailor our services to your preference - choose fully traditional, AI-augmented, or completely AI-driven workforce solutions.",
                  icon: Target,
                  color: "indigo"
                },
                {
                  title: "Adaptive Approach",
                  description: "Start with traditional services and gradually incorporate AI features as your organization's digital maturity evolves.",
                  icon: Zap,
                  color: "blue"
                }
              ].map((feature, idx) => (
                <div key={idx} className="relative rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${feature.color}-50 mb-6`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 border border-indigo-100 rounded-2xl p-8 bg-white shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Apex Advantage</h3>
                  <p className="text-gray-600 mb-6">
                    Whether you're looking for traditional staffing excellence or AI-powered innovation, Apex Enterprises delivers superior results through our dual-approach methodology.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/contact" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                      Contact Us
                    </Link>
                    <Link to="/case-studies" className="inline-flex items-center rounded-md border border-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50">
                      View Success Stories
                    </Link>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {[
                    { label: "Client Retention", value: "96%" },
                    { label: "Pan-India Coverage", value: "28 States" },
                    { label: "Client Satisfaction", value: "4.8/5" },
                    { label: "Team Size", value: "200+" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                      <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI? Why Now? Section */}
      <section id="why-ai" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">WHY AI? WHY NOW?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Future of Workforce Management is Here
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AI is reshaping how businesses hire, manage, and retain talent across India. Our solutions combine deep industry expertise with cutting-edge artificial intelligence to solve today's most complex workforce challenges.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Smarter Decisions",
                  description: "AI algorithms analyze vast datasets to provide insights and recommendations beyond human capacity, resulting in better hiring decisions and workforce planning.",
                  icon: Brain,
                },
                {
                  name: "Faster Operations",
                  description: "Automate repetitive tasks and streamline workflows to reduce time-to-hire by up to 65% and boost operational efficiency across your organization.",
                  icon: Zap,
                },
                {
                  name: "Scalable Solutions",
                  description: "Our AI systems grow with your business, handling workforce management across all 28 Indian states with consistent quality and compliance.",
                  icon: Globe2,
                },
              ].map((feature) => (
                <div key={feature.name} className="relative bg-white pl-16 shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-tl-xl rounded-br-xl bg-indigo-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* AI-Driven Services Section */}
      <section id="ai-solutions" className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">OUR AI-DRIVEN SERVICES</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Workforce Management with AI
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our suite of AI-powered solutions covers every aspect of workforce management, from talent acquisition to compliance and beyond.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div key={feature.name} className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="h-1.5 w-full bg-indigo-600"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600/10">
                      <feature.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/ai-workforce-solutions`}
                      className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Featured AI tool - Resume Screening */}
          <div className="mt-24 relative overflow-hidden rounded-3xl bg-indigo-50 py-12 sm:py-16">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </div>
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:px-8">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <div className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6">
                    <Brain className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    <span>FEATURED AI TOOL</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Apex IntelliHire™ - AI Resume Screening
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our AI resume screening technology analyzes thousands of CVs in minutes, matching candidates to your requirements with 94% accuracy while reducing screening time by 65%.
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      "Analyzes CVs in 12 Indian languages",
                      "Reduces unconscious bias in screening",
                      "Ranks candidates by skill match & culture fit",
                      "Integrates with leading ATS platforms"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-x-2">
                        <CheckCircle className="h-5 w-5 flex-none text-indigo-600" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link to="/ai-resume-screening" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Explore IntelliHire™ <ArrowRight className="inline-block ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:order-first relative">
                <img
                  src="https://images.unsplash.com/photo-1607703703674-df96941cfa24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="AI Resume Screening Dashboard"
                  className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 -rotate-2 transform transition-all duration-500 hover:rotate-0"
                />
                
                {/* AI workflow overlay elements - Updated with better z-index and higher opacity backgrounds */}
                <div className="absolute -top-8 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-indigo-50 max-w-xs -rotate-2 transform transition-all duration-500 hover:rotate-0 z-20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <FileSearch className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">CV Parsing Engine</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="h-1 rounded-full bg-green-100">
                      <div className="h-full w-full rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-1 rounded-full bg-indigo-100">
                      <div className="h-full w-full rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="h-1 rounded-full bg-purple-100">
                      <div className="h-full w-full rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Processing 350+ CVs/minute</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-indigo-50 max-w-xs rotate-2 transform transition-all duration-500 hover:rotate-0 z-20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Brain className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">AI Workflow Automation</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-1 flex-1 rounded-full bg-indigo-100">
                      <div className="h-full w-4/5 rounded-full bg-indigo-600"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">80% Faster</span>
                  </div>
                </div>
                
                {/* AI workflow diagram overlay - Redesigned with better readability */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] pointer-events-none z-10">
                  <div className="relative w-full h-full">
                    {/* AI workflow steps */}
                    <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-indigo-50 flex items-center gap-2 z-20">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">1</div>
                      <span className="text-xs font-medium text-gray-700">CV Upload</span>
                    </div>
                    
                    <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#6366F1" />
                        </marker>
                      </defs>
                      <g>
                        <path 
                          d="M80,40 C120,60 160,80 200,100" 
                          stroke="#6366F1" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5"
                          markerEnd="url(#arrowhead)" 
                        />
                        <path 
                          d="M250,140 C200,180 150,200 100,220" 
                          stroke="#6366F1" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5"
                          markerEnd="url(#arrowhead)" 
                        />
                        <path 
                          d="M140,260 C220,260 300,200 380,210" 
                          stroke="#6366F1" 
                          strokeWidth="2" 
                          fill="none" 
                          strokeDasharray="5,5"
                          markerEnd="url(#arrowhead)" 
                        />
                      </g>
                    </svg>
                    
                    <div className="absolute top-1/3 right-0 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-indigo-50 flex items-center gap-2 z-20">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">2</div>
                      <span className="text-xs font-medium text-gray-700">AI Analysis</span>
                    </div>
                    
                    <div className="absolute bottom-1/3 left-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-indigo-50 flex items-center gap-2 z-20">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">3</div>
                      <span className="text-xs font-medium text-gray-700">Skills Matching</span>
                    </div>
                    
                    <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md border border-indigo-50 flex items-center gap-2 z-20">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-600">4</div>
                      <span className="text-xs font-medium text-gray-700">Ranked Results</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Voice Calling Agent Feature */}
          <div className="mt-24 relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-50 to-indigo-50 py-12 sm:py-16">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            </div>
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:px-8">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 mb-6">
                    <MessageSquare className="mr-1.5 h-4 w-4" aria-hidden="true" />
                    <span>NEW AI FEATURE</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Apex VoiceConnect™ - AI Calling Agent
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Our conversational AI system conducts initial candidate screening calls, handles scheduling, and responds to common queries in multiple Indian languages with natural-sounding voice.
                  </p>
                  <div className="mt-6 space-y-4">
                    {[
                      "Supports 8 major Indian languages",
                      "24/7 availability for global candidates",
                      "Handles 85% of routine screening calls",
                      "AI-powered sentiment analysis during calls"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-x-2">
                        <CheckCircle className="h-5 w-5 flex-none text-purple-600" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link to="/ai-voice-connect" className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">
                      Explore VoiceConnect™ <ArrowRight className="inline-block ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto overflow-hidden rounded-xl shadow-xl border border-purple-50 bg-white transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="AI Voice Calling Agent"
                    className="w-full object-cover h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-indigo-500/30 mix-blend-multiply"></div>
                  
                  {/* Phone mockup overlay - Improved z-index and positioning */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[560px] bg-gray-900 rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden z-20">
                    {/* Phone screen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-indigo-900">
                      {/* Phone notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl"></div>
                      
                      {/* Call interface */}
                      <div className="absolute inset-x-0 top-16 flex flex-col items-center">
                        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                          <Bot className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-white text-xl font-bold">Apex AI Assistant</h3>
                        <p className="text-indigo-200 text-sm mb-6">Voice Screening Call</p>
                        
                        {/* Call timer */}
                        <div className="text-white text-sm font-mono mb-8">03:24</div>
                        
                        {/* Voice visualization - Improved to prevent animation overlap */}
                        <div className="w-[180px] h-[60px] mb-6 relative z-10">
                          <div className="w-full h-full flex items-center justify-between">
                            {Array.from({length: 12}).map((_, i) => (
                              <div 
                                key={i} 
                                className="w-2 bg-indigo-400 rounded-full" 
                                style={{
                                  height: `${Math.max(15, Math.sin(i * 0.8) * 40 + Math.random() * 15)}px`,
                                  animationDelay: `${i * 0.15}s`,
                                  animation: 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                        
                        {/* AI generated response - Improved contrast */}
                        <div className="bg-white/20 rounded-xl p-3 mx-4 backdrop-blur-sm mb-6">
                          <p className="text-white text-sm font-medium">
                            "Tell me about your experience with Python development for data analysis projects."
                          </p>
                        </div>
                        
                        {/* Call controls */}
                        <div className="absolute bottom-10 inset-x-0 flex justify-center space-x-6 z-20">
                          <div className="h-14 w-14 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                            <span className="h-6 w-6 rounded-full bg-red-600/60"></span>
                          </div>
                          <div className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                            <Check className="h-7 w-7 text-white" />
                          </div>
                        </div>
                        
                        {/* Animated dots - Adjusted animation to be less distracting */}
                        <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                          <span className="h-2 w-2 bg-indigo-200 rounded-full" style={{ animation: 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></span>
                          <span className="h-2 w-2 bg-indigo-200 rounded-full" style={{ animation: 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.3s' }}></span>
                          <span className="h-2 w-2 bg-indigo-200 rounded-full" style={{ animation: 'pulse-ring 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite', animationDelay: '0.6s' }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI features badge - Improved visibility */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-30">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-700">Apex VoiceConnect™</div>
                        <div className="text-xs text-gray-500">AI-Powered Voice Agent</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Voice features tooltip - Improved visibility and positioning */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[200px] border border-purple-50 z-30">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      <span className="text-xs font-semibold text-gray-800">Language Processing</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-1 flex-1 rounded-full bg-purple-100">
                        <div className="h-full w-9/10 rounded-full bg-purple-600"></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section id="benefits" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">WHO BENEFITS</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              AI Solutions for Every Stakeholder
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our intelligent workforce solutions provide value across your organization, from HR teams to C-suite executives.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-4">
            {[
              {
                title: "HR Teams",
                description: "Automate repetitive tasks like screening and scheduling, enabling your HR professionals to focus on strategic hiring and employee experience.",
                icon: Users,
                color: "blue"
              },
              {
                title: "Enterprises",
                description: "Scale your workforce rapidly and intelligently across multiple locations while maintaining consistent quality and compliance.",
                icon: Building2,
                color: "indigo"
              },
              {
                title: "Startups & SMEs",
                description: "Access enterprise-grade AI hiring tools at affordable costs, competing effectively for top talent in competitive markets.",
                icon: Target,
                color: "purple"
              },
              {
                title: "Field Operations",
                description: "Efficiently hire and manage blue-collar staff across multiple sites with location-specific compliance management.",
                icon: Globe2,
                color: "green"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group perspective-1000">
                <div className={`flex flex-col gap-4 rounded-xl border border-${item.color}-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:rotate-y-3 h-full`}>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 transition-all duration-300`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-700`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact Metrics */}
      <section id="impact" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">REAL IMPACT</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Faster. Smarter. Compliant.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI solutions deliver measurable improvements in hiring efficiency, candidate experience, and compliance accuracy.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-4">
            {aiMetrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="rounded-full bg-indigo-50 p-3 mb-4">
                  {idx === 0 && <Clock className="h-6 w-6 text-indigo-600" />}
                  {idx === 1 && <MessageSquare className="h-6 w-6 text-indigo-600" />}
                  {idx === 2 && <Shield className="h-6 w-6 text-indigo-600" />}
                  {idx === 3 && <BarChart2 className="h-6 w-6 text-indigo-600" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">FAQS ABOUT AI @ APEX</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to know about our AI-powered workforce solutions.
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl divide-y divide-gray-900/10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-6">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="relative isolate">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-3xl bg-indigo-600 px-8 py-16 shadow-xl sm:px-16 sm:py-24">
              <div className="mx-auto max-w-xl">
                <div className="flex justify-center">
                  <div className="inline-flex items-center rounded-full bg-indigo-500/30 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-indigo-500/20 mb-6">
                    <Sparkles className="mr-1.5 h-4 w-4" />
                    <span>Ready to Go AI-First?</span>
                  </div>
                </div>
                <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let us show you how intelligent hiring can transform your workforce
                </h2>
                <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                  <Link to="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Schedule a Free Consultation
                  </Link>
                  <Link to="/resources" className="rounded-md border border-white/20 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Download Brochure
                  </Link>
                  <Link to="/demo" className="rounded-md border border-white/20 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Watch Product Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other sections */}
      <Industries />
      <Statistics />
      <Clients />
      <Testimonials />
      <Insights />
      <LegalServices />
      <InteractiveElements />
      <Awards />
      <Newsletter />
      <div className="pb-0 last-section">
        <ElevenLabsConvai agentId="hdYVmisQI4kAcZwuyCtC" />
      </div>

      {/* Add floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="animate-float opacity-70 absolute top-20 left-[15%] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/20"></div>
        <div className="animate-float animation-delay-2000 opacity-70 absolute top-40 left-[80%] w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-indigo-500/20"></div>
        <div className="animate-float animation-delay-4000 opacity-70 absolute top-[60%] left-[25%] w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-500/20"></div>
        <div className="animate-float opacity-70 absolute top-[30%] left-[60%] w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-orange-500/20"></div>
      </div>



      {/* Solutions section - improved with icons and better cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-blue-700">India-Focused Solutions</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compliant Staffing for Indian Markets
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-600">
            Discover how our services can help your business navigate India's complex labour laws while accessing quality talent across metropolitan and developing cities.
          </p>
        </div>
        <div className="mx-auto mt-12 sm:mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div 
                key={solution.name} 
                className="flex flex-col bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 ease-in-out"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-lg sm:text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <solution.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <span>{solution.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-sm sm:text-base leading-6 sm:leading-7 text-gray-600">
                  <p className="flex-auto">{solution.description}</p>
                  <p className="mt-6">
                    <Link
                      to={solution.href}
                      className="text-sm font-semibold leading-6 text-blue-700 hover:text-blue-500 flex items-center group"
                    >
                      Learn more <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* AI metrics */}
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">AI-Powered Performance</h2>
            <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
              Our intelligent solutions deliver measurable improvements to your workforce processes
            </p>
          </div>
          <div className="mx-auto mt-8 sm:mt-16 max-w-2xl grid grid-cols-1 gap-y-6 sm:gap-y-0 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-x-8 text-center">
            {aiMetrics.map((metric) => (
              <div key={metric.title} className="relative p-6 flex flex-col">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-indigo-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {metric.title}
                </div>
                <p className="text-sm sm:text-base leading-6 text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}