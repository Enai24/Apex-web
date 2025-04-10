import React, { useState } from 'react';
import { Scale, FileText, MessageSquare, UserCheck, Phone, Mail, Clock, Shield, AlertTriangle, Landmark, Briefcase, Building, Map, BookOpen, FileCheck, FileClock, Users, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Updated services with India-specific focus
const services = [
  {
    title: "EPF & ESI Compliance",
    description: "Comprehensive compliance management for Indian labor laws",
    items: [
      "PF, ESI, and Professional Tax registration and filings across all Indian states",
      "Monthly/quarterly statutory returns and challans processing",
      "Employee onboarding and statutory compliance documentation",
      "Representation before PF/ESI authorities during inspections"
    ],
    icon: Shield,
    color: "blue"
  },
  {
    title: "Labor Law Advisory",
    description: "Expert guidance on India's complex labor regulations",
    items: [
      "Shops & Establishment Act compliance across different states",
      "Industrial Disputes Act and state-specific labor laws consultation",
      "Minimum Wages Act and Payment of Wages Act compliance",
      "Contract Labor (Regulation & Abolition) Act advisory"
    ],
    icon: Landmark,
    color: "indigo"
  },
  {
    title: "Documentation & Appeals",
    description: "Professional handling of legal processes",
    items: [
      "Labor law compliance documentation for all Indian states",
      "PF/ESI appeal preparation and representation",
      "Maintenance of statutory registers and records",
      "Legal correspondence with government authorities"
    ],
    icon: FileText,
    color: "purple"
  },
  {
    title: "Dispute Resolution",
    description: "Specialized labor dispute management",
    items: [
      "Conciliation proceedings under Industrial Disputes Act",
      "Labor court representation across major Indian cities",
      "Settlement negotiation with labor unions",
      "Preventive compliance to avoid legal disputes"
    ],
    icon: Gavel,
    color: "green"
  }
];

// Indian states and UTs for state-specific consultation
const indianStates = [
  { name: "Delhi NCR", key: "delhi", hasSpecialLaws: true },
  { name: "Maharashtra", key: "maharashtra", hasSpecialLaws: true },
  { name: "Karnataka", key: "karnataka", hasSpecialLaws: true },
  { name: "Tamil Nadu", key: "tamil-nadu", hasSpecialLaws: true },
  { name: "Gujarat", key: "gujarat", hasSpecialLaws: true },
  { name: "Telangana", key: "telangana", hasSpecialLaws: false },
  { name: "Haryana", key: "haryana", hasSpecialLaws: true },
  { name: "Uttar Pradesh", key: "uttar-pradesh", hasSpecialLaws: true },
  { name: "West Bengal", key: "west-bengal", hasSpecialLaws: true },
  { name: "Punjab", key: "punjab", hasSpecialLaws: false },
  { name: "Rajasthan", key: "rajasthan", hasSpecialLaws: false },
  { name: "Kerala", key: "kerala", hasSpecialLaws: true },
  { name: "Other States & UTs", key: "other", hasSpecialLaws: false }
];

// Compliance updates for 2023-2024
const complianceUpdates = [
  {
    title: "New Labor Codes Implementation",
    description: "Guidance on the four new labor codes expected to be implemented across India",
    date: "2023-24",
    icon: BookOpen
  },
  {
    title: "Digital PF/ESI Compliance",
    description: "Updated procedures for electronic compliance submissions and validations",
    date: "Current",
    icon: FileCheck
  },
  {
    title: "State-wise Minimum Wage Revisions",
    description: "Regular updates on changing minimum wage requirements across Indian states",
    date: "Quarterly",
    icon: FileClock
  },
  {
    title: "Social Security Reforms",
    description: "Implementation guidance for EPFO and ESIC changes affecting employers",
    date: "Ongoing",
    icon: Users
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 124 4040 281",
    href: "tel:+911244040281"
  },
  {
    icon: Mail,
    label: "Email",
    value: "mail@apexenterprises.net",
    href: "mailto:mail@apexenterprises.net"
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday-Friday, 9:00 AM - 5:00 PM"
  }
];

const legalCaseSchema = z.object({
  caseCode: z.string().min(6, 'Case code must be at least 6 characters'),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  state: z.string().min(1, 'Please select a state'),
  caseType: z.enum(['pf-esi', 'labor-law', 'dispute', 'compliance', 'other']),
  description: z.string().min(50, 'Please provide more details about your case'),
  documents: z.array(z.any()).optional(),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
});

type LegalCaseForm = z.infer<typeof legalCaseSchema>;

export default function LegalServices() {
  const [activeTab, setActiveTab] = useState<'services' | 'states' | 'updates'>('services');
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LegalCaseForm>({
    resolver: zodResolver(legalCaseSchema)
  });

  const onSubmit = async (data: LegalCaseForm) => {
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', data);
      toast.success('Case submitted successfully! Our legal team will contact you shortly.');
    } catch (error) {
      toast.error('Failed to submit case. Please try again.');
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
      </div>
    
      <div className="relative py-24 sm:py-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/20 mb-6">
            <Scale className="mr-1.5 h-4 w-4" />
            <span>India-Focused Legal Expertise</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Comprehensive <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Indian Labor Law</span> Services
          </h2>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Our specialized legal team provides end-to-end compliance solutions tailored to India's complex labor regulations across all states and union territories.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mt-12 mb-10 border-b border-gray-200">
          <nav className="flex space-x-8" aria-label="Legal Services Navigation">
            {[
              { key: 'services', label: 'Services', icon: Briefcase },
              { key: 'states', label: 'State-Specific Expertise', icon: Map },
              { key: 'updates', label: 'Compliance Updates', icon: FileCheck }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as 'services' | 'states' | 'updates')}
                className={`flex items-center pb-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.key
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="group relative perspective-1000">
                  <div className={`h-full rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-${service.color}-100 overflow-hidden transform-style-3d hover:-translate-y-2 hover:rotate-y-3`}>
                    <div className={`absolute top-0 right-0 h-20 w-20 rounded-full bg-${service.color}-50 opacity-50 -mt-6 -mr-6 group-hover:scale-125 transition-transform duration-500`}></div>
                    
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 text-${service.color}-700 mb-6 shadow-sm`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{service.title}</h3>
                    <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6 relative z-10">
                      {service.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className={`flex-shrink-0 h-5 w-5 rounded-full bg-${service.color}-100 flex items-center justify-center mt-0.5 mr-3`}>
                            <div className={`h-2 w-2 rounded-full bg-${service.color}-600`}></div>
                          </div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* States Tab Content */}
        {activeTab === 'states' && (
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our legal team specializes in state-specific labor law variations across India, providing customized compliance solutions for businesses operating in multiple regions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {indianStates.map((state) => (
                <div key={state.key} className="group relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`h-1.5 w-full ${state.hasSpecialLaws ? 'bg-indigo-600' : 'bg-blue-400'}`}></div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Building className="h-5 w-5 text-gray-500" />
                      {state.name}
                    </h3>
                    
                    {state.hasSpecialLaws && (
                      <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 mt-2">
                        Special Labor Laws
                      </span>
                    )}
                    
                    <Link 
                      to={`/legal-services/states/${state.key}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 group-hover:underline"
                    >
                      View compliance requirements
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Updates Tab Content */}
        {activeTab === 'updates' && (
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-10">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest changes to Indian labor laws and compliance requirements for 2023-2024.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceUpdates.map((update, index) => (
                <div 
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-indigo-50">
                      <update.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{update.title}</h3>
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                          {update.date}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{update.description}</p>
                      <Link 
                        to="/legal-services/updates"
                        className="mt-3 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* India Labor Law Statistics */}
        <div className="mt-24 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">Our Legal Impact Across India</h3>
            <p className="mt-2 text-gray-600">Comprehensive legal solutions for businesses across the country</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "States Covered", value: "28+", sublabel: "All states & UTs" },
              { label: "Labor Laws Handled", value: "50+", sublabel: "Central & State Acts" },
              { label: "Compliance Rate", value: "99.8%", sublabel: "Audit success" },
              { label: "Cases Resolved", value: "12,000+", sublabel: "Since 2003" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{stat.value}</div>
                <div className="font-medium text-gray-800">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Submission Form - Enhanced with state selection */}
        <div className="mt-24 bg-white shadow-lg ring-1 ring-gray-900/5 sm:rounded-xl overflow-hidden">
          <div className="px-4 py-6 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900">Submit Your Legal Inquiry</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Our India labor law specialists will review your case and provide tailored guidance for your specific needs.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="caseCode" className="block text-sm font-medium text-gray-700">
                       Case Code (if existing)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="e.g., APEX-PF-2023-001"
                        {...register('caseCode')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.caseCode && (
                        <p className="mt-1 text-sm text-red-600">{errors.caseCode.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Your name"
                        {...register('fullName')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        placeholder="you@company.com"
                        {...register('email')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        {...register('phone')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('state')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option value="">Select a state</option>
                        {indianStates.map(state => (
                          <option key={state.key} value={state.key}>{state.name}</option>
                        ))}
                      </select>
                      {errors.state && (
                        <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="caseType" className="block text-sm font-medium text-gray-700">
                      Case Type
                    </label>
                    <div className="mt-1">
                      <select
                        {...register('caseType')}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      >
                        <option value="pf-esi">PF/ESI Compliance</option>
                        <option value="labor-law">Labor Law Advisory</option>
                        <option value="dispute">Dispute Resolution</option>
                        <option value="compliance">General Compliance</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.caseType && (
                        <p className="mt-1 text-sm text-red-600">{errors.caseType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Case Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        {...register('description')}
                        rows={4}
                        placeholder="Please provide details about your legal inquiry..."
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      />
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="termsAccepted"
                          type="checkbox"
                          {...register('termsAccepted')}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="termsAccepted" className="font-medium text-gray-700">
                          I agree to the privacy policy and terms of service
                        </label>
                        {errors.termsAccepted && (
                          <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Legal Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 rounded-2xl bg-gray-50 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Our Legal Team</h3>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-indigo-600 hover:text-indigo-500">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}