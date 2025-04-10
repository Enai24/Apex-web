import React from 'react';
import { Link } from 'react-router-dom';
import { Check, FileCheck, Clock, Award, Shield, ArrowRight, Briefcase, Users, Star, CreditCard, BarChart } from 'lucide-react';

const whyWorkWithUs = [
  {
    title: 'Regulatory Compliance Expertise',
    description: 'Navigate India\'s complex labor laws with our expert guidance on EPF, ESI, professional tax, and labor law compliance across all Indian states.',
    icon: FileCheck,
  },
  {
    title: 'Pan-India Coverage',
    description: 'Access talent across 25+ cities in India with our extensive network and local market expertise in both metropolitan and emerging markets.',
    icon: Briefcase,
  },
  {
    title: 'Industry-Specific Solutions',
    description: 'Benefit from our deep understanding of your industry\'s unique challenges and requirements, from IT to manufacturing, BFSI to retail.',
    icon: BarChart,
  },
  {
    title: 'Rigorous Screening Process',
    description: 'Receive pre-vetted candidates who meet your specific requirements through our comprehensive assessment and background verification process.',
    icon: Shield,
  },
  {
    title: 'Flexible Workforce Models',
    description: 'Choose from multiple engagement models including contract staffing, permanent placement, payroll management, or project-based teams.',
    icon: Users,
  },
  {
    title: 'Dedicated Account Management',
    description: 'Work with a dedicated relationship manager who understands your business needs and provides personalized service.',
    icon: Star,
  },
];

const pricingModels = [
  {
    title: 'Cost-Plus Model',
    description: 'Transparent pricing with fixed management fee on top of actual employment costs. Ideal for large-scale staffing with predictable billing.',
    features: [
      'Complete visibility of all costs',
      'Scalable pricing for large teams',
      'Monthly detailed billing reports',
      'No hidden charges',
    ],
  },
  {
    title: 'Percentage-Based Model',
    description: 'Pricing calculated as a percentage of the associate\'s gross salary. Good option for companies with varying staffing requirements.',
    features: [
      'Simple percentage-based calculation',
      'Scales with salary ranges',
      'Adaptable to different roles',
      'Includes all compliance services',
    ],
  },
  {
    title: 'Fixed Fee Model',
    description: 'Predetermined fixed fee per associate based on role category. Perfect for budgeting and forecasting with stable workforce requirements.',
    features: [
      'Predictable monthly expenses',
      'Role-based tiered pricing',
      'Budget-friendly approach',
      'Simplified accounting process',
    ],
  },
  {
    title: 'Custom Enterprise Solutions',
    description: 'Tailored pricing structures for large enterprises with complex or specialized requirements across multiple locations in India.',
    features: [
      'Volume-based discounts',
      'Multi-location service packages',
      'Custom reporting dashboards',
      'Strategic workforce planning',
    ],
  },
];

export default function EmployersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <pattern id="grid-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              For Employers & Clients
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Strategic workforce solutions to help your business thrive in India's competitive market while ensuring full regulatory compliance
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors duration-300"
              >
                Request a Consultation
              </Link>
              <Link
                to="/services"
                className="text-base font-semibold leading-6 text-white flex items-center group"
              >
                Browse Services <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Apex</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Work With Apex Enterprises
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Partnering with Apex gives you a strategic advantage in India's complex business landscape, ensuring you have the right talent, compliant operations, and scalable workforce solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {whyWorkWithUs.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span>{item.title}</span>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{item.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Pricing Models section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Flexible Engagement</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transparent Pricing Models
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer transparent, flexible pricing structures designed to align with your business needs and budget requirements.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {pricingModels.map((model) => (
              <div key={model.title} className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200 xl:p-10 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold leading-8 text-gray-900">{model.title}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{model.description}</p>
                <ul className="mt-8 space-y-3">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/contact" className="text-base font-medium text-blue-600 hover:text-blue-800 flex items-center">
              Request custom pricing <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Service Guarantee section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Promise</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                The Apex Service Guarantee
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                When you partner with Apex Enterprises, you're not just getting a service provider – you're gaining a committed ally in your business success. Our service guarantee is built on these foundational promises:
              </p>
              <dl className="mt-10 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 flex-none">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">100% Compliance Guarantee</dt>
                    <dd className="mt-1 text-base text-gray-600">
                      We ensure full compliance with all Indian labor laws and regulations, with financial protection against compliance-related penalties.
                    </dd>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 flex-none">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">Rapid Response Commitment</dt>
                    <dd className="mt-1 text-base text-gray-600">
                      24-hour response time for all client inquiries. Critical issues addressed within 4 business hours.
                    </dd>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-700 flex-none">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-lg font-semibold text-gray-900">Quality Replacement Assurance</dt>
                    <dd className="mt-1 text-base text-gray-600">
                      If any associate doesn't meet your requirements, we'll provide a qualified replacement within 15 business days at no additional cost.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="Business agreement handshake" 
                className="rounded-2xl shadow-xl" 
              />
              <div className="absolute inset-0 rounded-2xl shadow-inner ring-1 ring-inset ring-black/10"></div>
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-blue-600 p-8 shadow-lg">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/80">Client Satisfaction</p>
                    <p className="text-2xl font-bold text-white">98%</p>
                    <p className="text-xs text-white/80">Based on 2023 survey data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-700">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your workforce strategy?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Let's discuss how Apex Enterprises can help you build, manage and optimize your workforce across India.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/contact"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 shadow-sm hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us Today
            </Link>
            <Link
              to="/case-studies"
              className="text-base font-semibold leading-6 text-white flex items-center group"
            >
              View Success Stories <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 