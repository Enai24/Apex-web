'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Shield, Briefcase, Clock, FileText, BarChart4, CheckCircle2 } from 'lucide-react';
import { SEO } from '../utils/seo';

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
    <>
      <SEO
        title="Partner Network | Apex Enterprises India"
        description="Join Apex's trusted partner network. Collaborating with staffing agencies, training institutes, and technology providers across India."
      />

      <div className="bg-white font-sans">
        {/* Hero Section - Databricks Style (Oat background) */}
        <section className="bg-[#f9f7f4] pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="max-w-[800px]">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-4">
                COLLABORATIVE GROWTH
              </span>
              <h1 className="text-[40px] md:text-[56px] lg:text-[72px] font-medium leading-[1.1] tracking-[-0.01em] text-[#1b3139]">
                Partner with Apex to scale Indian workforce systems
              </h1>
              <p className="mt-8 text-[22px] leading-[30px] text-[#5a6f77] max-w-[600px]">
                Join our network of trusted providers to deliver AI-powered workforce solutions and exceptional service standards pan-India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#partnership-form"
                  className="inline-flex items-center justify-center bg-[#eb1600] px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-[#bd2b26]"
                >
                  Apply for Partnership
                </Link>
                <Link
                  href="#how-to-collaborate"
                  className="inline-flex items-center justify-center border border-[#1b3139] px-8 py-4 text-[16px] font-medium text-[#1b3139] transition-colors hover:bg-[#1b3139] hover:text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types - Navy Cards Grid */}
        <section id="how-to-collaborate" className="bg-white py-20 lg:py-32">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="mb-16">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                OPPORTUNITIES
              </span>
              <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139]">
                How we work with partners
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {partnershipTypes.map((type, idx) => {
                const Icon = type.icon;
                return (
                  <div key={idx} className="bg-[#1b3139] p-10 group hover:bg-[#293e46] transition-all">
                    <Icon className="h-6 w-6 text-[#ff5f46] mb-6" />
                    <h3 className="text-[28px] font-medium text-white mb-4">{type.title}</h3>
                    <p className="text-[17px] leading-[26px] text-[#90a5b1]">
                      {type.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section - Side by Side with visual */}
        <section className="bg-[#f9f7f4] py-20 lg:py-32">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                  ADVANTAGES
                </span>
                <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139] mb-8">
                  Why partner with Apex?
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    "Pan-India client network",
                    "Joint business development",
                    "Regulatory support",
                    "AI platform access",
                    "Streamlined payments",
                    "Market reputation"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#ff3621] mt-1 shrink-0" />
                      <span className="text-[16px] text-[#5a6f77] font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white shadow-[0px_72px_104px_rgba(27,49,57,.07)] p-2">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="Partner collaboration"
                    className="w-full"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-[#1b3139] p-8 max-w-[280px]">
                  <p className="text-[20px] font-medium text-white italic">
                    "Apex provides bridge to enterprise-scale clients across 28 states."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vetting Process - Step Timeline */}
        <section className="bg-white py-20 lg:py-32 border-b border-[#dce0e2]">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="text-center mb-20">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                QUALITY ASSURANCE
              </span>
              <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139]">
                Our Partner Vetting Process
              </h2>
            </div>

            <div className="grid gap-12 lg:grid-cols-5 relative">
              {vettingSteps.map((step, idx) => (
                <div key={idx} className="relative z-10">
                  <div className="text-[14px] font-mono font-bold text-[#eb1600] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-[18px] font-medium text-[#1b3139] mb-3">{step.title}</h3>
                  <p className="text-[14px] leading-[22px] text-[#5a6f77]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Form - Redesigned with Databricks input style */}
        <section id="partnership-form" className="bg-[#f9f7f4] py-20 lg:py-32">
          <div className="mx-auto max-w-[800px] px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-4">
                GET STARTED
              </span>
              <h2 className="text-[40px] font-medium text-[#1b3139]">
                Partnership Application
              </h2>
            </div>

            <div className="bg-white p-10 lg:p-16 shadow-[0px_72px_104px_rgba(27,49,57,.07)]">
              <form className="grid gap-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Company Name *</label>
                    <input type="text" className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Website</label>
                    <input type="url" className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Partnership Type *</label>
                    <select className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none bg-transparent">
                      <option>Select type</option>
                      <option>Staffing Agency</option>
                      <option>Training Institute</option>
                      <option>Technology Provider</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Primary Contact Name *</label>
                    <input type="text" className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Email *</label>
                    <input type="email" className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Phone *</label>
                    <input type="tel" className="w-full border-b border-[#dce0e2] py-3 text-[16px] focus:border-[#eb1600] outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold uppercase text-[#1b3139] mb-2">Interest & Services *</label>
                  <textarea rows={4} className="w-full border border-[#dce0e2] p-4 text-[16px] focus:border-[#eb1600] outline-none" placeholder="Describe your collaboration interest..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#eb1600] py-4 text-[16px] font-medium text-white hover:bg-[#bd2b26] transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1b3139] py-20 lg:py-24 text-center">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-6">
              Empower your business with Apex
            </h2>
            <p className="text-[20px] text-[#90a5b1] max-w-[600px] mx-auto mb-10">
              Join the network of enterprise leaders scaling workforce operations across India.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link
                href="#partnership-form"
                className="bg-white text-[#1b3139] px-10 py-4 text-[16px] font-medium hover:bg-[#f9f7f4] transition-colors"
              >
                Apply Now
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-10 py-4 text-[16px] font-medium hover:bg-white hover:text-[#1b3139] transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}