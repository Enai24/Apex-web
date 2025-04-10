import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Shield, Briefcase, Clock, FileText, BarChart4 } from 'lucide-react';

const partnershipTypes = [
  {
    title: 'Staffing Agencies',
    description: 'Join our network of staffing partners to expand your reach and collaborate on large-scale projects across India.',
    icon: Users,
  },
  {
    title: 'Training Institutes',
    description: 'Partner with us to provide skill development and certification programs for our talent pool.',
    icon: FileText,
  },
  {
    title: 'Technology Providers',
    description: 'Offer your HR tech, screening, or management solutions to enhance our service offerings.',
    icon: BarChart4,
  },
];

const vettingSteps = [
  {
    number: '01',
    title: 'Initial Application',
    description: 'Complete our comprehensive partner application form with details about your organization and expertise.',
  },
  {
    number: '02',
    title: 'Document Verification',
    description: 'Submit required business documents and certifications for our compliance team to review.',
  },
  {
    number: '03',
    title: 'Service Quality Assessment',
    description: 'Demonstrate your service standards through client references and process documentation.',
  },
  {
    number: '04',
    title: 'Compliance Check',
    description: 'We verify your organization\'s compliance with relevant regulatory requirements in your area of operation.',
  },
  {
    number: '05',
    title: 'Partnership Agreement',
    description: 'Once approved, we will finalize terms, SLAs, and sign partnership agreements to begin collaboration.',
  },
];

export default function PartnersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-green-700 to-teal-600 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 transform -translate-y-12 opacity-20" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Partner With Apex
            </h1>
            <p className="mt-6 text-lg leading-8 text-green-50">
              Join our network of trusted partners and collaborate to deliver exceptional workforce solutions across India
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="#partnership-form"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors duration-300"
              >
                Apply for Partnership
              </Link>
              <Link
                to="#how-to-collaborate"
                className="text-base font-semibold leading-6 text-white flex items-center group"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How to Collaborate section */}
      <div id="how-to-collaborate" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Partnership Opportunities</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How to Collaborate With Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Apex Enterprises offers multiple avenues for strategic partnerships that leverage complementary strengths to deliver superior workforce solutions across India.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {partnershipTypes.map((type) => (
              <div key={type.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    <type.icon className="h-6 w-6" />
                  </div>
                  <span>{type.title}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{type.description}</p>
                </dd>
              </div>
            ))}
          </div>
          
          <div className="mt-20 rounded-3xl bg-gray-50 py-16 px-8 sm:px-16">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Partner Benefits</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Partnering with Apex Enterprises offers significant advantages that help you grow your business while maintaining the highest standards of service quality and compliance.
              </p>
              <ul className="mt-8 grid gap-y-3 gap-x-8 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Access to our pan-India client network</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Collaborative business development</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Knowledge sharing and best practices</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Joint marketing opportunities</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Streamlined payment processes</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Compliance and regulatory support</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Enhanced market reputation</span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircle className="h-6 w-6 flex-none text-green-600" />
                  <span>Access to technology platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Vetting Process section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-green-600">Quality Assurance</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Partner Vetting Process
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 mx-auto max-w-2xl">
                We maintain the highest standards of service quality through a thorough vetting process that ensures all partners meet our stringent criteria.
              </p>
            </div>
            
            <div className="mt-16">
              <ol className="relative border-l border-green-200">
                {vettingSteps.map((step, index) => (
                  <li key={step.number} className="mb-12 ml-6">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 ring-8 ring-white">
                      <span className="text-white font-bold">{index + 1}</span>
                    </span>
                    <h3 className="flex items-center mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-base text-gray-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600">The entire process typically takes 2-3 weeks to complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Form section */}
      <div id="partnership-form" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">Get Started</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partnership Application
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Complete the form below to begin the partnership process. Our team will review your application and contact you within 3 business days.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200 sm:p-10">
            <form className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Organization Information</h3>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="years-in-business" className="block text-sm font-medium text-gray-700">
                      Years in Business *
                    </label>
                    <input
                      type="number"
                      id="years-in-business"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="partnership-type" className="block text-sm font-medium text-gray-700">
                      Partnership Type *
                    </label>
                    <select
                      id="partnership-type"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                      <option value="">Select partnership type</option>
                      <option value="staffing">Staffing Agency</option>
                      <option value="training">Training Institute</option>
                      <option value="technology">Technology Provider</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Contact Information</h3>
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                      Primary Contact Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-role" className="block text-sm font-medium text-gray-700">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      id="contact-role"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="partnership-interest" className="block text-sm font-medium text-gray-700">
                  How do you envision partnering with Apex Enterprises? *
                </label>
                <textarea
                  id="partnership-interest"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Please describe your organization's services and how you would like to collaborate with us."
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="privacy-policy"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/privacy-policy" className="text-green-600 hover:text-green-500">
                    privacy policy
                  </Link>{' '}
                  and{' '}
                  <Link to="/terms" className="text-green-600 hover:text-green-500">
                    terms of service
                  </Link>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-green-700">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to become a valued partner?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Join our network of trusted partners and help us deliver exceptional workforce solutions across India.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="#partnership-form"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-green-700 shadow-sm hover:bg-green-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="text-base font-semibold leading-6 text-white flex items-center group"
            >
              Contact Partnership Team <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 