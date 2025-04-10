import React from 'react';
import { SEO } from '../utils/seo';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Brain, CheckCircle2, Zap, FileSearch } from 'lucide-react';
import { 
  AI_SOLUTIONS, 
  AICapability, 
  AICaseStudy, 
  AI_WORKFORCE_STATS, 
  AIStat,
  AI_CASE_STUDIES
} from '../utils/ai-workforce';

export default function AIWorkforceSolutions() {
  // Generate schema for the page
  const generateAIWorkforceSolutionsSchema = (baseUrl = 'https://apexenterprises.net') => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI-Powered Workforce Solutions",
      "description": "Transforming Indian businesses with AI-driven talent matching, predictive analytics, automated compliance, and intelligent workforce management solutions.",
      "provider": {
        "@type": "Organization",
        "name": "Apex Enterprises",
        "url": baseUrl
      },
      "serviceType": "AI Workforce Solutions",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "url": `${baseUrl}/ai-workforce-solutions`
    };
  };

  const schema = generateAIWorkforceSolutionsSchema();
  
  // Define case studies for AI solutions
  const caseStudies = [
    {
      id: 'techspire',
      title: 'TechSpire India Ltd',
      challenge: 'Faced 35% attrition and 45-day hiring cycles',
      solution: 'AI-powered talent matching system',
      results: [
        '87% reduction in time-to-hire',
        'Attrition reduced to 12%',
        '₹1.2 crore annual savings'
      ],
      industry: 'Information Technology',
      logoSrc: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      solutionId: 'ai-talent-matching'
    },
    {
      id: 'nextgen',
      title: 'NextGen Manufacturing',
      challenge: 'Managing compliance for 5000+ contract workers across 12 states',
      solution: 'Automated compliance management system',
      results: [
        '100% compliance achieved',
        'Eliminated ₹3.4 crore in potential penalties',
        '72% reduction in compliance management time'
      ],
      industry: 'Manufacturing',
      logoSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      solutionId: 'automated-compliance'
    },
    {
      id: 'horizon',
      title: 'Horizon Bank',
      challenge: 'Needed to hire 2500 employees with specific skills and compliance requirements',
      solution: 'AI recruitment assistant and predictive analytics',
      results: [
        'Hired all 2500 staff 40% faster than planned',
        '95% of hires still with company after 1 year',
        '32% higher performance metrics compared to previous hiring methods'
      ],
      industry: 'Banking',
      logoSrc: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      solutionId: 'ai-recruitment-assistant'
    }
  ];

  return (
    <>
      <SEO
        title="AI-Powered Workforce Solutions | Apex Enterprises"
        description="Transforming Indian businesses with AI-driven talent matching, predictive analytics, automated compliance, and intelligent workforce management solutions with proven results."
        schema={schema}
      />

      <div className="bg-white">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <div className="inline-flex space-x-6">
                  <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                    Innovative Solutions
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Powered by AI</span>
                  </span>
                </div>
              </div>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                India's Leading <span className="text-indigo-600">AI-Driven</span> Workforce Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transforming how businesses find, manage, and optimize their workforce with intelligent technology 
                and 15+ years of industry expertise across all 28 Indian states.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <a href="#case-studies" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                  View case studies <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="AI-powered Workforce Analytics Dashboard"
                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative -mt-12 lg:-mt-24 bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  AI-Driven Results That Speak Volumes
                </h2>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  Our intelligent workforce solutions consistently deliver measurable outcomes for businesses across India.
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {AI_WORKFORCE_STATS.slice(0, 8).map((stat, index) => (
                  <div key={index} className="flex flex-col bg-gray-50 p-8">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">{stat.value}</dd>
                    <dd className="mt-1 text-xs text-gray-500">{stat.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Solutions section */}
        <div id="services" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">AI-POWERED SOLUTIONS</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transform Your Workforce with Intelligent Technology
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our suite of AI-driven workforce solutions helps businesses across India optimize their hiring, compliance, and workforce management.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3">
              {AI_SOLUTIONS.map((solution) => (
                <div key={solution.id} className="group relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="h-1.5 w-full bg-indigo-600"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-indigo-600/10">
                        <solution.icon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link 
                        to={`/ai-workforce-solutions/${solution.id}`}
                        className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4 transition-all group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Solution: AI Resume Screening */}
        <div className="relative mt-16 overflow-hidden bg-indigo-50 rounded-3xl py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">FEATURED TOOL</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Apex IntelliHire™ - AI Resume Screening
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Cut hiring time by 65% and identify the best candidates with 94% accuracy. Our AI analyzes thousands of resumes in minutes, matching skills, experience, and cultural fit.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span className="text-gray-700">Advanced CV analysis across 12 Indian languages</span>
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span className="text-gray-700">Intelligent skill matching with 94% accuracy</span>
                  </div>
                  <div className="flex gap-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span className="text-gray-700">Smart ranking with cultural fit assessment</span>
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/ai-resume-screening"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Explore Resume Screening <ArrowRight className="ml-1 inline-block h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="relative h-full flex items-center justify-center">
                  <div className="rounded-xl bg-white p-3 shadow-xl ring-1 ring-gray-200 sm:p-4">
                    <div className="flex justify-center">
                      <FileSearch size={64} className="text-indigo-600" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Demo Available
                      </span>
                      <p className="mt-2 text-sm text-gray-500">Try our interactive demo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">SUCCESS STORIES</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transforming Indian Businesses
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                See how our AI solutions have transformed workforce management for companies across India.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {AI_CASE_STUDIES.map((caseStudy) => (
                <div key={caseStudy.id} className="flex h-full">
                  <AICaseStudy {...caseStudy} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to transform your workforce with AI?
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Implement intelligent solutions that deliver measurable improvements in efficiency, compliance, and performance.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <Link
                    to="/contact"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="#services" 
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="AI-powered workforce intelligence visualization"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 