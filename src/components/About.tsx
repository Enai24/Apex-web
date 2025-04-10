import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Target, Award, Heart, Scale, Users, Building2, Clock, MapPin, Globe, BarChart2, 
  Shield, Zap, Star, TrendingUp, Briefcase, ArrowRight, Check, ChevronRight, Eye
} from 'lucide-react';

export default function About() {
  const [activeValue, setActiveValue] = useState('innovation');

  const handleValueClick = (value: string) => {
    setActiveValue(value);
  };

  // Company core values content
  const coreValues = {
    innovation: {
      title: "Innovation",
      description: "We continuously evolve our services, methodologies, and technologies to stay ahead of market trends. Our AI-powered solutions drive efficiency and effectiveness for our clients.",
      points: [
        "AI-powered talent matching and workforce analytics",
        "Proprietary compliance monitoring systems",
        "Data-driven strategic workforce planning"
      ]
    },
    excellence: {
      title: "Operational Excellence",
      description: "Our strength lies in our cutting-edge infrastructure, highly trained workforce, and client-centric service delivery. We continuously benchmark against global standards.",
      points: [
        "ISO 9001:2015 certified processes",
        "Regular performance audits and optimization",
        "Continuous improvement methodology"
      ]
    },
    integrity: {
      title: "Regulatory Integrity",
      description: "We maintain unwavering compliance with India's complex labor regulations, providing our clients with security and confidence in their workforce management.",
      points: [
        "100% statutory compliance guaranteed",
        "Real-time regulatory update monitoring",
        "Comprehensive compliance documentation"
      ]
    },
    commitment: {
      title: "Client Commitment",
      description: "We're dedicated to creating long-term partnerships through exceptional service quality, transparent communication, and understanding each client's unique needs.",
      points: [
        "24/7 dedicated account management",
        "Regular business review meetings",
        "Customized service level agreements"
      ]
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us | Apex Enterprises</title>
        <meta name="description" content="Learn about Apex Enterprises - India's leading workforce management company with over 20 years of excellence in staffing solutions." />
      </Helmet>

      {/* Modern Hero Section with animated gradient and grid pattern */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white"></div>
          <div className="absolute inset-0 opacity-20" 
               style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M0 0h4v4H0V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zm10 0h4v4h-4V0zM5 5h4v4H5V5zm10 0h4v4h-4V5zm10 0h4v4h-4V5zM0 10h4v4H0v-4zm5 0h4v4H5v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4zm5 0h4v4h-4v-4z\'/%3E%3C/g%3E%3C/svg%3E")',
                backgroundSize: '40px 40px'}}></div>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block p-1 px-3 mb-6 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 font-medium text-sm border border-blue-200 shadow-sm">
              ESTABLISHED 2001 • 20+ YEARS OF EXCELLENCE
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Transforming <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Workforce Management</span> Across India
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              At Apex Enterprises, we're not just a service provider—we're your strategic partner in 
              navigating India's complex labor ecosystem. Our innovative approach combines deep 
              industry expertise with cutting-edge technology to deliver workforce solutions that drive 
              business success.
            </p>
            
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#our-story" className="group bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all hover:bg-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-600/20">
                Our Journey
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#leadership" className="group bg-white text-blue-700 border border-blue-200 px-5 py-2.5 rounded-lg font-medium transition-all hover:bg-blue-50 shadow-md hover:shadow-xl">
                Meet Our Team
                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern cards with animations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { label: 'Years of Excellence', value: '20+', icon: Clock, color: 'bg-blue-600', textColor: 'text-blue-600' },
              { label: 'Cities Covered', value: '50+', icon: MapPin, color: 'bg-indigo-600', textColor: 'text-indigo-600' },
              { label: 'Satisfied Clients', value: '200+', icon: Building2, color: 'bg-purple-600', textColor: 'text-purple-600' },
              { label: 'Team Members', value: '1,000+', icon: Users, color: 'bg-teal-600', textColor: 'text-teal-600' },
            ].map((stat, index) => (
              <div key={stat.label} className="group transform transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center rounded-xl p-6 hover:bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon className={`h-7 w-7 ${stat.textColor}`} />
                  </div>
                  <div className="relative">
                    <h3 className="text-4xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                      <span className="inline-block count-up" id={`stat-${index}`}>{stat.value}</span>
                    </h3>
                    <p className={`text-sm font-medium ${stat.textColor}`}>{stat.label}</p>
                </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20">
              <TrendingUp className="mr-1.5 h-4 w-4" />
              <span>Our Evolution</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pioneering Excellence in <span className="text-blue-700">Workforce Innovation</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From our humble beginnings to becoming a national leader, our journey has been defined by innovation, resilience, and an unwavering commitment to excellence.
          </p>
        </div>
        
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-xl bg-gray-50 p-8">
              <h3 className="text-2xl font-bold text-gray-900">Our Origin Story</h3>
              
              <div className="mt-6 space-y-6 text-gray-600">
                <p>
                  <span className="font-semibold text-blue-800">APEX ENTERPRISES</span>, headquartered in the National Capital Region, has emerged as a premier provider of workforce solutions across diverse sectors including corporate, hospitality, education, and government institutions. Our comprehensive service portfolio has garnered international acclaim for its operational excellence, client-centric approach, and sustainable long-term partnerships.
                </p>
                <p>
                  Under the visionary leadership of our founder, <span className="font-semibold text-blue-700">MR. DEVENDRA S. NEHRA (M.A., LL.B)</span>, we've transformed from a regional service provider to a national leader with an innovative approach to workforce management that combines human expertise with technological advancement.
                </p>
                <div className="flex gap-2">
                  <div className="mt-1 flex-none">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <p>
                    Our current service spectrum encompasses Security Services, Labour Contracting, Integrated Facility Management, Strategic Manpower Solutions, Horticultural Services, Comprehensive Payroll Management, and specialized Government Licensing facilitation.
                  </p>
              </div>
            </div>
          </div>
          
            <div className="mt-8 space-y-6 text-gray-600">
              <p>
              Our state-of-the-art infrastructure and domain expertise have positioned us at the forefront of the industry. Through our strategically developed management network, we've successfully extended our reach to the most remote regions of India, ensuring comprehensive national coverage for our clients.
            </p>
              <p>
                At Apex Enterprises, we are committed to our guiding principle of placing the <span className="font-medium text-blue-700">'RIGHT PERSON FOR THE RIGHT JOB'</span>. This commitment drives our meticulous selection process, rigorous training programs, and continuous performance evaluation systems. We pride ourselves on delivering premium services at competitive rates tailored to our clients' budgetary considerations without compromising on quality.
            </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern Timeline Section */}
      <section className="bg-gray-50 py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-50" 
             style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b82f6\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: '60px 60px'}}></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 shadow-sm">
              <Clock className="mr-1.5 h-4 w-4" />
              <span>Our Growth Journey</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Two Decades of Transformation
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-400 to-blue-400 rounded-full"></div>
              
              <div className="space-y-16">
                {[
                  { year: '2001', title: 'Foundation', description: 'Established in Gurgaon with a vision to transform workforce management in India', icon: Building2, color: 'bg-blue-400', iconBg: 'bg-blue-100' },
                  { year: '2005', title: 'Expansion', description: 'Extended operations to multiple cities across North India', icon: MapPin, color: 'bg-indigo-400', iconBg: 'bg-indigo-100' },
                  { year: '2010', title: 'Diversification', description: 'Added specialized services including Facility Management and Payroll Solutions', icon: Briefcase, color: 'bg-purple-400', iconBg: 'bg-purple-100' },
                  { year: '2015', title: 'Technology Integration', description: 'Implemented advanced systems for enhanced service delivery and monitoring', icon: BarChart2, color: 'bg-teal-400', iconBg: 'bg-teal-100' },
                  { year: '2020', title: 'National Presence', description: 'Achieved pan-India coverage with clients across diverse industries', icon: Globe, color: 'bg-emerald-400', iconBg: 'bg-emerald-100' },
                  { year: '2023', title: 'Digital Transformation', description: 'Launched AI-powered workforce management platform', icon: Zap, color: 'bg-amber-400', iconBg: 'bg-amber-100' },
            ].map((item, idx) => (
                  <div key={item.year} className="group relative pl-28">
                    {/* Year marker */}
                    <div className="absolute left-0 flex items-center">
                      <div className="h-24 w-24 rounded-full shadow-md bg-white border border-gray-100 flex items-center justify-center transform transition-all group-hover:scale-110 group-hover:shadow-lg">
                        <div className={`h-20 w-20 rounded-full ${item.iconBg} flex items-center justify-center`}>
                          <div className={`h-16 w-16 rounded-full ${item.color} text-white font-bold flex items-center justify-center text-xl`}>
                            {item.year}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="relative pl-8 pb-12">
                      <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 hover:-translate-y-1 transform">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconBg}`}>
                            <item.icon className={`h-6 w-6 ${item.color} text-opacity-80`} />
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  </div>
                        <p className="text-gray-600">{item.description}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      </section>
      
      {/* Core Values Section - Interactive with modern design */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50/70 to-transparent"></div>
        <div className="absolute right-0 top-20 w-96 h-96 rounded-full bg-indigo-100/30 blur-3xl"></div>
        <div className="absolute left-0 bottom-20 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 shadow-sm">
              <Star className="mr-1.5 h-4 w-4" />
              <span>Our Guiding Principles</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Values That <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Define Us</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core principles guide every decision we make and represent the foundation of our organizational culture.
            </p>
          </div>
          
          <div className="mt-16 mx-auto max-w-5xl">
            {/* Value selector tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {Object.entries(coreValues).map(([key, value]) => (
                <button
                  key={key}
                  className={`relative overflow-hidden rounded-full py-2.5 px-6 text-sm font-medium transition-all duration-300 ${
                    activeValue === key 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => handleValueClick(key)}
                >
                  {activeValue === key && (
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                  )}
                  <span className="relative">{value.title}</span>
                </button>
              ))}
        </div>
            
            {/* Value content - Interactive card with 3D effect */}
            <div className="perspective relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 transform hover:shadow-xl hover:-translate-y-2 backface-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/10 to-indigo-400/10 blur-2xl"></div>
                
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="w-full md:w-1/3">
                    <div className="group h-full rounded-xl bg-blue-50 p-6 transition-all duration-300 hover:bg-blue-100">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {coreValues[activeValue as keyof typeof coreValues].title}
                      </h3>
                      
                      <div className="h-1 w-12 rounded-full bg-blue-200 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500 mb-6"></div>
                      
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {coreValues[activeValue as keyof typeof coreValues].description}
                      </p>
                </div>
              </div>
              
                  <div className="w-full md:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coreValues[activeValue as keyof typeof coreValues].points.map((point, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 transform"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                              <Check className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>
                          <div>
                            <p className="font-medium text-gray-900">{point}</p>
                </div>
                        </div>
                    ))}
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section - Modern card-based approach */}
      <section id="leadership" className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
        <div className="absolute right-0 -bottom-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl"></div>
        <div className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 shadow-sm">
              <Users className="mr-1.5 h-4 w-4" />
              <span>Our Leadership</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Visionary <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Leadership Team</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced leadership team brings decades of industry expertise to guide Apex Enterprises toward continued excellence and innovation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            {/* Founder Card - Premium design */}
            <div className="relative mb-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-1 shadow-xl">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-indigo-100/40 blur-3xl"></div>
              
              <div className="relative rounded-xl bg-white p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col flex-shrink-0 items-center md:items-start">
                    <div className="group relative h-32 w-32 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-90"></div>
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">DSN</span>
                        </div>
                      <div className="absolute bottom-0 w-full py-2 bg-gradient-to-t from-black/60 to-transparent">
                        <div className="text-center text-xs font-medium text-white">Managing Director</div>
                      </div>
                    </div>
                    
                    <h3 className="mt-6 text-xl font-bold text-gray-900">MR. DEVENDRA S. NEHRA</h3>
                    <p className="text-blue-600 font-medium">Founder & Managing Director</p>
                    <p className="text-gray-500 text-sm">M.A., LL.B</p>
                    
                    <div className="mt-5 flex gap-3">
                      <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </button>
                      <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="rounded-lg bg-blue-50 p-5 mb-4 border-l-4 border-blue-600">
                      <p className="italic text-gray-600 leading-relaxed">
                        "Our mission is to transform workforce management in India by empowering businesses with innovative, compliant solutions that drive organizational success."
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                          With over 25 years of experience in workforce management and legal advisory, Mr. Nehra has transformed Apex Enterprises from a small regional operation to a national leader in comprehensive workforce solutions. His visionary leadership and deep industry knowledge have been instrumental in establishing our reputation for excellence and reliability.
                        </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                          Mr. Nehra's dual expertise in management and law has enabled Apex to develop innovative solutions that address the complex challenges faced by businesses across India. Under his guidance, we continue to expand our service offerings while maintaining our commitment to quality and client satisfaction.
                        </p>
                    
                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="rounded-full py-1 px-4 bg-blue-50 text-blue-700 text-sm font-medium">Strategic Vision</div>
                      <div className="rounded-full py-1 px-4 bg-indigo-50 text-indigo-700 text-sm font-medium">Legal Expertise</div>
                      <div className="rounded-full py-1 px-4 bg-purple-50 text-purple-700 text-sm font-medium">Industry Pioneer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            {/* Executive Team - Modern grid with hover effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  initials: "RK",
                  name: "Rajiv Kumar",
                  position: "Chief Operations Officer",
                  description: "Oversees all operational aspects of our service delivery across India, ensuring consistent quality and client satisfaction.",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  initials: "PS",
                  name: "Priya Sharma",
                  position: "Head of Legal Services",
                  description: "Leads our legal advisory team, providing expert guidance on compliance, contracts, and regulatory matters.",
                  color: "from-indigo-400 to-indigo-600"
                },
                {
                  initials: "AP",
                  name: "Anand Patel",
                  position: "Director of Business Development",
                  description: "Spearheads our expansion initiatives and develops strategic partnerships to enhance our service offerings.",
                  color: "from-purple-400 to-purple-600"
                }
              ].map((member, idx) => (
                <div key={member.name} className="group relative">
                  {/* Card background with hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50 to-white transform transition-all duration-300 group-hover:scale-95 group-hover:shadow-none"></div>
                  
                  {/* Card content */}
                  <div className="relative z-10 rounded-2xl bg-white border border-gray-200 p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 transform">
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${member.color} text-white font-medium text-lg shadow-md`}>
                        {member.initials}
                      </div>
                      <div className="h-8 w-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <span className="text-gray-400 font-medium">{idx + 1}</span>
                    </div>
                  </div>
                  
                    <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h4>
                    <p className="text-sm font-medium text-blue-600 mb-4">{member.position}</p>
                    <div className="h-0.5 w-12 bg-gray-200 group-hover:w-20 group-hover:bg-blue-600 transition-all duration-300 mb-4"></div>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section - Modern card design with gradient and effects */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2">
            {/* Mission Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 opacity-80 blur transition-all duration-500 group-hover:opacity-100"></div>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 shadow-md group-hover:scale-110 transition-transform">
                    <Target className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  To transform workforce management across India by providing innovative, compliant, and efficient solutions that enable our clients to focus on their core business while we handle their most valuable asset—their people.
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-blue-700">Innovation</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-blue-700">Compliance</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-blue-700">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="group relative overflow-hidden">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 blur transition-all duration-500 group-hover:opacity-100"></div>
              <div className="relative rounded-2xl bg-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 shadow-md group-hover:scale-110 transition-transform">
                    <Eye className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  To be India's most trusted workforce solutions provider, known for our technological innovation, compliance expertise, and ability to deliver exceptional value to clients across all sectors and regions of the country.
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-indigo-700">Trust</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-indigo-700">Technology</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 text-center">
                    <div className="font-medium text-indigo-700">Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - Modern with gradient and animation */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-20 w-20 rounded-full bg-white opacity-10 animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-3/4 left-2/3 h-12 w-12 rounded-full bg-white opacity-10 animate-ping" style={{animationDuration: '7s'}}></div>
          <div className="absolute top-1/3 right-1/4 h-16 w-16 rounded-full bg-white opacity-10 animate-ping" style={{animationDuration: '5s'}}></div>
        </div>
        
        {/* Diagonal design element */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white transform -skew-y-3 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform skew-y-3 origin-bottom-left"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-12 pb-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Ready to Transform Your <span className="border-b-4 border-white pb-1">Workforce Management</span>?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
              Partner with Apex Enterprises and experience the difference our innovative AI-powered solutions can make for your business.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group rounded-lg bg-white px-5 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-700/20"
              >
                Contact Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/ai-workforce-solutions"
                className="group rounded-lg bg-blue-500/20 backdrop-blur-sm px-5 py-3 text-base font-semibold text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-blue-500/40 hover:shadow-xl"
              >
                Explore Our AI Solutions
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}