'use client';

import React, { useState } from 'react';
import { Scale, FileText, MessageSquare, UserCheck, Phone, Mail, Clock, Shield, AlertTriangle, Landmark, Briefcase, Building, Map, BookOpen, FileCheck, FileClock, Users, Gavel, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Updated services with brand colors
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
    color: "#EE3D2C"
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
    color: "#EE3D2C"
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
    color: "#EE3D2C"
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
    color: "#EE3D2C"
  }
];

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
    label: "Legal Hotline",
    value: "+91 124 4040 281",
    href: "tel:+911244040281"
  },
  {
    icon: Mail,
    label: "Case Inquiries",
    value: "mail@apexenterprises.net",
    href: "mailto:mail@apexenterprises.net"
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 business hours"
  }
];

const legalCaseSchema = z.object({
  caseCode: z.string().optional(),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  state: z.string().min(1, 'Please select a state'),
  caseType: z.enum(['pf-esi', 'labor-law', 'dispute', 'compliance', 'other']),
  description: z.string().min(50, 'Please provide more details about your case (min 50 characters)'),
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
      console.log('Form submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Case submitted successfully! Our legal team will contact you shortly.');
    } catch (error) {
      toast.error('Failed to submit case. Please try again.');
    }
  };

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-32 pb-24 font-sans selection:bg-[#EE3D2C]/10 selection:text-[#EE3D2C]">
      <title>Legal Services | Apex Enterprises</title>

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col border-l-4 border-[#EE3D2C] pl-8 py-4">
          <div className="text-[12px] font-bold text-[#EE3D2C] uppercase tracking-[0.2em] mb-3 font-mono">Expert Counsel</div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1B292E] tracking-tight leading-[1.1] mb-6">
            Indian Labour Law & <br />Legal Services
          </h1>
          <p className="text-xl text-[#1B292E]/70 max-w-2xl leading-relaxed">
            Apex Enterprises provides comprehensive compliance solutions tailored to India's complex labour regulations across all states.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 mb-12 bg-white/50 p-1 border border-[#E5E1DA] w-fit">
          {[
            { key: 'services', label: 'Our Services', icon: Briefcase },
            { key: 'states', label: 'Regional Expertise', icon: Map },
            { key: 'updates', label: 'Compliance Updates', icon: FileCheck }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as 'services' | 'states' | 'updates')}
              className={`flex items-center gap-2 px-6 py-3 text-[14px] font-bold transition-all duration-200 ${activeTab === tab.key
                  ? "text-white bg-[#1B292E]"
                  : "text-[#1B292E]/60 hover:text-[#1B292E] hover:bg-white"
                }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {services.map((service) => (
              <div key={service.title} className="bg-white border border-[#E5E1DA] p-10 group hover:border-[#EE3D2C] transition-colors duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex h-14 w-14 items-center justify-center bg-[#F9F7F4] text-[#1B292E] group-hover:bg-[#EE3D2C] group-hover:text-white transition-colors duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="text-[10px] font-mono font-black text-[#1B292E]/20 uppercase tracking-widest pt-2">Service Component</div>
                </div>

                <h3 className="text-2xl font-black text-[#1B292E] mb-4 tracking-tight">{service.title}</h3>
                <p className="text-[#1B292E]/60 mb-8 leading-relaxed">{service.description}</p>

                <ul className="space-y-4 mb-0">
                  {service.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-sm font-medium text-[#1B292E]/80">
                      <div className="mt-1.5 h-1 w-4 bg-[#EE3D2C]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* States Tab Content */}
        {activeTab === 'states' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {indianStates.map((state) => (
              <div key={state.key} className="bg-white border border-[#E5E1DA] p-8 group hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-[#EE3D2C]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#F9F7F4] group-hover:bg-[#1B292E]/5">
                    <Building className="h-5 w-5 text-[#1B292E]/60" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B292E]">{state.name}</h3>
                </div>

                {state.hasSpecialLaws ? (
                  <div className="text-[10px] font-mono font-bold text-[#EE3D2C] uppercase tracking-wider mb-4">Specific State Rules Apply</div>
                ) : (
                  <div className="text-[10px] font-mono font-bold text-[#1B292E]/30 uppercase tracking-wider mb-4">Central Regulations</div>
                )}

                <Link
                  href={`/legal-services/states/${state.key}`}
                  className="inline-flex items-center text-[12px] font-black text-[#1B292E] uppercase tracking-widest group-hover:text-[#EE3D2C] transition-colors"
                >
                  Explore Compliance
                  <ArrowRight className="ml-2 h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Updates Tab Content */}
        {activeTab === 'updates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {complianceUpdates.map((update, index) => (
              <div key={index} className="bg-[#1B292E] p-10 text-white flex gap-8 border-b-8 border-[#EE3D2C]">
                <div className="flex-shrink-0">
                  <update.icon className="h-10 w-10 text-[#EE3D2C]" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] font-mono font-bold bg-[#EE3D2C] px-3 py-1 uppercase tracking-widest">{update.date}</span>
                    <h3 className="text-xl font-black tracking-tight">{update.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{update.description}</p>
                  <Link href="/legal-services/updates" className="text-[12px] font-black uppercase tracking-[0.2em] text-[#EE3D2C] hover:text-white transition-colors">
                    Read Analysis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Bar */}
        <div className="bg-white border border-[#E5E1DA] p-12 mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "States Covered", value: "28+", sublabel: "Full PAN India Reach" },
              { label: "Labor Laws", value: "50+", sublabel: "Central & State Acts" },
              { label: "Audit Success", value: "99.8%", sublabel: "Compliance Rating" },
              { label: "Cases Solved", value: "12,000+", sublabel: "Established 2003" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-4xl font-black text-[#1B292E] mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] font-mono font-bold text-[#EE3D2C] uppercase tracking-[0.2em] mb-1">{stat.label}</div>
                <div className="text-[11px] font-bold text-[#1B292E]/40 uppercase tracking-widest">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Submission Form */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12">
          <div className="bg-white border border-[#E5E1DA] p-12">
            <h3 className="text-3xl font-black text-[#1B292E] mb-4 tracking-tight">Submit Legal Inquiry</h3>
            <p className="text-[#1B292E]/60 mb-10 leading-relaxed">
              Our PAN-India labour law specialists will review your case and provide documented guidance.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-[#1B292E] uppercase tracking-widest">Full Name</label>
                  <input
                    {...register('fullName')}
                    className="w-full bg-[#F9F7F4] border-b-2 border-[#E5E1DA] p-4 focus:border-[#EE3D2C] outline-none transition-colors font-bold text-[#1B292E]"
                    placeholder="Enter legal name"
                  />
                  {errors.fullName && <p className="text-[10px] font-bold text-[#EE3D2C] uppercase mt-1">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-[#1B292E] uppercase tracking-widest">Email Address</label>
                  <input
                    {...register('email')}
                    className="w-full bg-[#F9F7F4] border-b-2 border-[#E5E1DA] p-4 focus:border-[#EE3D2C] outline-none transition-colors font-bold text-[#1B292E]"
                    placeholder="name@company.com"
                  />
                  {errors.email && <p className="text-[10px] font-bold text-[#EE3D2C] uppercase mt-1">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-[#1B292E] uppercase tracking-widest">Phone Number</label>
                  <input
                    {...register('phone')}
                    className="w-full bg-[#F9F7F4] border-b-2 border-[#E5E1DA] p-4 focus:border-[#EE3D2C] outline-none transition-colors font-bold text-[#1B292E]"
                    placeholder="+91..."
                  />
                  {errors.phone && <p className="text-[10px] font-bold text-[#EE3D2C] uppercase mt-1">{errors.phone.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-[#1B292E] uppercase tracking-widest">Target State</label>
                  <select
                    {...register('state')}
                    className="w-full bg-[#F9F7F4] border-b-2 border-[#E5E1DA] p-4 focus:border-[#EE3D2C] outline-none transition-colors font-bold text-[#1B292E] appearance-none cursor-pointer"
                  >
                    <option value="">Select Region</option>
                    {indianStates.map(state => <option key={state.key} value={state.key}>{state.name}</option>)}
                  </select>
                  {errors.state && <p className="text-[10px] font-bold text-[#EE3D2C] uppercase mt-1">{errors.state.message}</p>}
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[11px] font-black text-[#1B292E] uppercase tracking-widest">Case Description</label>
                  <textarea
                    {...register('description')}
                    rows={6}
                    className="w-full bg-[#F9F7F4] border-b-2 border-[#E5E1DA] p-4 focus:border-[#EE3D2C] outline-none transition-colors font-medium text-[#1B292E]"
                    placeholder="Provide incident details, statutory act involved, and current status..."
                  />
                  {errors.description && <p className="text-[10px] font-bold text-[#EE3D2C] uppercase mt-1">{errors.description.message}</p>}
                </div>
              </div>

              <div className="flex items-center bg-[#F9F7F4] p-6 border-l-4 border-[#EE3D2C]">
                <input
                  type="checkbox"
                  {...register('termsAccepted')}
                  className="h-4 w-4 border-[#E5E1DA] accent-[#EE3D2C] cursor-pointer"
                />
                <label className="ml-4 text-[12px] font-bold text-[#1B292E]/70">
                  I consent to the processing of personal data for legal consultation purposes.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-[#EE3D2C] text-white text-[14px] font-black uppercase tracking-[0.2em] hover:bg-[#1B292E] transition-colors duration-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting Case...' : 'Transmit Inquiry'}
              </button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="bg-[#1B292E] p-10 text-white border-t-8 border-[#EE3D2C]">
              <h4 className="text-[14px] font-mono font-bold text-[#EE3D2C] uppercase tracking-[0.2em] mb-8">Case Priority</h4>
              <div className="space-y-10">
                {contactInfo.map((info) => (
                  <div key={info.label} className="group">
                    <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 font-black">{info.label}</div>
                    <a
                      href={info.href}
                      className={`text-lg font-black tracking-tight ${info.href ? "hover:underline decoration-[#EE3D2C] decoration-2" : ""}`}
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E5E1DA] p-10">
              <h4 className="text-[12px] font-black text-[#1B292E] uppercase tracking-widest mb-6 underline decoration-[#EE3D2C] decoration-4 underline-offset-8">Statutory Compliance</h4>
              <p className="text-[11px] font-bold text-[#1B292E]/60 leading-relaxed uppercase tracking-wider italic">
                All legal consultations are handled by certified compliance officers and advocates specialized in the Indian Industrial Relations Code.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}