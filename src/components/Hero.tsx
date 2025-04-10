import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Building2, Award, Globe2, TrendingUp, GraduationCap, ShieldCheck, FileCheck, Zap, Sparkles } from 'lucide-react';

interface SolutionType {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface StatType {
  id: number;
  name: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const stats: StatType[] = [
  { id: 1, name: 'Associates Deployed', value: '280,000+', icon: Users },
  { id: 2, name: 'Indian Clients', value: '3,500+', icon: Building2 },
  { id: 3, name: 'Years in India', value: '20+', icon: Award },
  { id: 4, name: 'Cities Covered', value: '25+', icon: Globe2 },
  { id: 5, name: 'Client Retention', value: '98%', icon: TrendingUp },
  { id: 6, name: 'Certified HR Experts', value: '500+', icon: GraduationCap },
];

const solutions: SolutionType[] = [
  {
    name: 'Contract Staffing',
    description: 'Short and long-term staffing solutions with complete EPF, ESI compliance across India',
    href: '/services/contract-staffing',
    icon: Users,
  },
  {
    name: 'Payroll & PF/ESI Compliance',
    description: 'End-to-end management of PF, ESI, Gratuity, LWF, and Professional Tax with statutory reporting',
    href: '/services/payroll-compliance',
    icon: FileCheck,
  },
  {
    name: 'Labour Law Advisory',
    description: 'Expert guidance on Shops & Establishment Act and Industrial Disputes Act compliance',
    href: '/services/labour-law-advisory',
    icon: ShieldCheck,
  },
  {
    name: 'Blue & White-Collar Hiring',
    description: 'Specialised recruitment for IT, manufacturing, retail, and BFSI across Tier-1 & Tier-2 cities',
    href: '/services/specialised-hiring',
    icon: Building2,
  },
  {
    name: 'Skilling & NSDC Training',
    description: 'NSDC-aligned workforce development programs with certification and Skill India support',
    href: '/services/skilling-training',
    icon: GraduationCap,
  },
  {
    name: 'Pan-India Field Management',
    description: 'Field staff deployment across 25+ Indian cities with local compliance and regional expertise',
    href: '/services/india-deployment',
    icon: Globe2,
  },
];

export default function Hero() {
  // Add state for animated counters
  const [animatedStats, setAnimatedStats] = useState(stats.map(stat => ({ ...stat, animatedValue: "0" })));
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect when component comes into view
  useEffect(() => {
    setIsVisible(true);
    
    // Animate the stats when component mounts
    const timer = setTimeout(() => {
      stats.forEach((stat, index) => {
        const numericValue = parseInt(stat.value.replace(/\D/g, ''));
        
        // Animate the counters with incrementing values
        let startValue = 0;
        const incrementValue = Math.ceil(numericValue / 30);
        const interval = setInterval(() => {
          if (startValue >= numericValue) {
            clearInterval(interval);
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = { ...newStats[index], animatedValue: stat.value };
              return newStats;
            });
          } else {
            startValue += incrementValue;
            if (startValue > numericValue) startValue = numericValue;
            
            setAnimatedStats(prev => {
              const newStats = [...prev];
              let displayValue = startValue.toString();
              if (stat.value.includes('+')) displayValue += '+';
              if (stat.value.includes('%')) displayValue += '%';
              newStats[index] = { ...newStats[index], animatedValue: displayValue };
              return newStats;
            });
          }
        }, 50);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Enhanced background with multiple animated gradient elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-700 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            animationDuration: '12s',
          }}
        />
      </div>
      
      {/* Add floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-5 pointer-events-none">
        <div className="animate-float opacity-70 absolute top-20 left-[15%] w-8 h-8 rounded-full bg-blue-500/20"></div>
        <div className="animate-float animation-delay-2000 opacity-70 absolute top-40 left-[80%] w-12 h-12 rounded-full bg-indigo-500/20"></div>
        <div className="animate-float animation-delay-4000 opacity-70 absolute top-[60%] left-[25%] w-10 h-10 rounded-full bg-purple-500/20"></div>
        <div className="animate-float opacity-70 absolute top-[30%] left-[60%] w-16 h-16 rounded-full bg-orange-500/20"></div>
      </div>

      {/* Enhanced hero content with 3D effects and animations */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-x-16 lg:items-center">
            <div className={`col-span-7 w-full max-w-xl lg:shrink-0 xl:max-w-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-6">
                <Sparkles className="mr-1.5 h-4 w-4" />
                <span>Transforming Indian Workforce</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                <span className="block">Leading Staffing Solutions in India</span>
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 animate-gradient-x">Pan-India Excellence Since 2003</span>
              </h1>
              
              <p className="relative mt-8 text-xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                <strong className="text-gray-900">India's trusted workforce partner across Tier-1 & Tier-2 cities.</strong> Apex Enterprises delivers compliant staffing solutions, specialised in EPF/ESI management, labour law advisory, and workforce deployment that addresses unique Indian market challenges.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto rounded-md bg-gradient-to-r from-[#1F4287] to-[#2D5FB3] px-6 py-4 text-center text-base font-semibold text-white shadow-md hover:shadow-xl hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4287] transition-all duration-300 ease-in-out group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Request a Consultation
                    <Zap className="ml-2 h-4 w-4 animate-pulse" />
                  </span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-opacity-10 bg-white/20"></div>
                </Link>
                
                <Link
                  to="/services"
                  className="w-full sm:w-auto rounded-md bg-white px-6 py-4 text-center text-base font-semibold text-[#F68B1F] shadow-sm ring-1 ring-inset ring-[#F68B1F]/30 hover:bg-orange-50 hover:ring-[#F68B1F]/40 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 hover:scale-110 transition-transform duration-300">
                  ISO 9001 Certified
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 hover:scale-110 transition-transform duration-300">
                  MSME Registered
                </span>
                <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 hover:scale-110 transition-transform duration-300">
                  Pan-India Presence
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20 hover:scale-110 transition-transform duration-300">
                  24x7 Support
                </span>
              </div>
            </div>
            
            {/* 3D perspective image grid */}
            <div className={`col-span-5 mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 perspective-1000 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative hover:scale-105 transition-transform duration-500 ease-in-out shadow-xl hover:shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                    alt="Team collaboration"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-700 group-hover:rotate-y-6"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative hover:scale-105 transition-transform duration-500 ease-in-out shadow-xl hover:shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490"
                    alt="Corporate office"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-700 group-hover:rotate-y-6"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative hover:scale-105 transition-transform duration-500 ease-in-out shadow-xl hover:shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                    alt="Professional meeting"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg transform transition-transform duration-700 group-hover:rotate-y-6"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced stats section with animations and modern design */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        <div className="absolute inset-0 flex justify-center -z-10">
          <div className="w-full h-full max-w-7xl bg-gradient-to-b from-blue-50/30 via-transparent to-transparent rounded-3xl"></div>
        </div>
        
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-4">
            <TrendingUp className="mr-1.5 h-4 w-4" />
            <span>Our Growth Metrics</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Impact <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">in Numbers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Two decades of excellence in workforce solutions across India
          </p>
        </div>
        
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-3 lg:grid-cols-6">
          {animatedStats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`mx-auto flex max-w-xs flex-col gap-y-4 transform hover:scale-105 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <stat.icon className="h-8 w-8 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">{stat.animatedValue}</span>
              </dd>
              <dt className="text-base leading-7 text-gray-600 font-medium">{stat.name}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Trusted by section with enhanced hover effects and animations */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className={`mx-auto text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/20 mb-4">
              <Building2 className="mr-1.5 h-4 w-4" />
              <span>Elite Partnerships</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">India's Top Corporations</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders across the nation
            </p>
          </div>
          
          <div className={`mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <img
              className="col-span-1 max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png"
              alt="Reliance Industries"
              width={158}
              height={48}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 hover:scale-110"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Tata_Consultancy_Services_Logo.svg/1200px-Tata_Consultancy_Services_Logo.svg.png"
              alt="TCS"
              width={158}
              height={48}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
              alt="Infosys"
              width={158}
              height={48}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Wipro_Logo.png"
              alt="Wipro"
              width={158}
              height={48}
            />
            <img
              className="col-span-1 max-h-12 w-full object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/HDFC_Bank_Logo.svg/1200px-HDFC_Bank_Logo.svg.png"
              alt="HDFC Bank"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      {/* Solutions section - improved with icons and better cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-blue-700">India-Focused Solutions</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compliant Staffing for Indian Markets
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how our services can help your business navigate India's complex labour laws while accessing quality talent across metropolitan and developing cities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <div 
                key={solution.name} 
                className="flex flex-col bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 ease-in-out"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <solution.icon className="h-6 w-6" />
                  </div>
                  <span>{solution.name}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
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

      {/* Featured Testimonials Section - refined with better cards and spacing */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 mt-8">
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-7xl bg-blue-50/30 h-full transform skew-y-3 -z-10"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-700">Client Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by India's Leading Businesses
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 transform transition-transform duration-300 hover:scale-105">
              <div className="mb-10">
                <div className="flex gap-x-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg key={rating} className="h-5 w-5 text-[#F68B1F]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-700">
                  <p>"Apex Enterprises has been instrumental in helping us build our pan-India team. Their understanding of regional labour laws and commitment to compliance is unmatched across all our locations."</p>
                </div>
              </div>
              <div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-medium text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">HR Director, Tech Mahindra</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 transform transition-transform duration-300 hover:scale-105 lg:translate-y-4">
              <div className="mb-10">
                <div className="flex gap-x-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg key={rating} className="h-5 w-5 text-[#F68B1F]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-700">
                  <p>"The level of expertise in PF/ESI compliance and attention to detail in candidate screening has made Apex our go-to staffing partner for operations across Mumbai, Delhi, and Bengaluru."</p>
                </div>
              </div>
              <div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-medium text-gray-900">Rajesh Patel</div>
                  <div className="text-sm text-gray-600">Operations Director, Aditya Birla Group</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 xl:p-10 transform transition-transform duration-300 hover:scale-105">
              <div className="mb-10">
                <div className="flex gap-x-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg key={rating} className="h-5 w-5 text-[#F68B1F]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-700">
                  <p>"Working with Apex has transformed our hiring process across Tier-2 cities where finding quality talent is challenging. Their understanding of local markets from Pune to Chandigarh has been invaluable."</p>
                </div>
              </div>
              <div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-medium text-gray-900">Anjali Desai</div>
                  <div className="text-sm text-gray-600">CEO, Apollo Healthcare Solutions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/testimonials" className="text-base font-semibold leading-7 text-[#1F4287] hover:text-[#F68B1F] transition-colors group flex items-center">
              Read more testimonials <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}