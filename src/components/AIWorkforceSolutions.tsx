'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2, ArrowLeft, Shield, Zap, Settings, Languages, Quote } from 'lucide-react';
import { aiSolutions, AI_WORKFORCE_STATS, AI_CASE_STUDIES, PLATFORM_CAPABILITIES } from '../data/ai-solutions';
import { AI_ICON_MAP } from '../utils/ai-workforce';
import { SEO } from '../utils/seo';

// Databricks-style: Sharp corners, generous padding, small orange icons
export default function AIWorkforceSolutions() {
  const [activeSection, setActiveSection] = useState<'solutions' | 'case-studies' | 'integrations'>('solutions');
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);

  return (
    <>
      <SEO
        title="AI-Powered Workforce Solutions | Apex Enterprises India"
        description="Leading AI recruitment and workforce management in India. Precision talent matching, predictive analytics, and compliance automation."
      />

      <div className="bg-white font-sans">
        {/* Hero Section - Clean Minimal */}
        <section className="bg-[#f9f7f4] pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.01em] text-[#1b3139]">
                  Production-quality AI for your workforce
                </h1>
                <p className="mt-6 text-[20px] leading-[28px] text-[#5a6f77] max-w-[520px]">
                  Deploy intelligent talent matching and predictive workforce analytics built for India's enterprise scale.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#eb1600] px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-[#bd2b26]"
                  >
                    Get started
                  </Link>
                  <Link
                    href="/ai-resume-screening"
                    className="inline-flex items-center justify-center border border-[#1b3139] px-6 py-3 text-[16px] font-medium text-[#1b3139] transition-colors hover:bg-[#1b3139] hover:text-white"
                  >
                    See demo
                  </Link>
                </div>
              </div>

              {/* Product Screenshot */}
              <div className="relative">
                <div className="bg-white shadow-[0px_72px_104px_rgba(27,49,57,.07),0px_32px_40px_rgba(27,49,57,.05),0px_16px_24px_rgba(27,49,57,.04)]">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                    alt="AI Workforce Dashboard"
                    className="w-full"
                  />
                </div>
                {/* Floating stat */}
                <div className="absolute -bottom-6 -left-6 bg-[#1b3139] px-6 py-4 shadow-lg">
                  <p className="text-[32px] font-medium text-white">94%</p>
                  <p className="text-[14px] text-[#90a5b1]">Match Accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tab Navigation */}
        <div className="sticky top-0 z-50 border-b border-[#dce0e2] bg-white">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <nav className="flex gap-6" aria-label="Section Navigation">
              {[
                { id: 'solutions', label: 'AI Products' },
                { id: 'capabilities', label: 'Key Capabilities' },
                { id: 'case-studies', label: 'Customer Stories' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveSection(tab.id as any);
                    document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`
                    relative py-4 text-[14px] font-medium transition-colors
                    ${activeSection === tab.id
                      ? 'text-[#1b3139]'
                      : 'text-[#5a6f77] hover:text-[#1b3139]'}
                  `}
                >
                  {tab.label}
                  {activeSection === tab.id && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff3621]" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* AI Modules Section */}
        <section id="solutions" className="bg-[#f9f7f4] py-16 lg:py-24 border-b border-[#dce0e2]">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="mb-10">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                INTELLIGENT MODULES
              </span>
              <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139]">
                Tools for end-to-end workforce systems
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiSolutions.map((solution, idx) => {
                const Icon = AI_ICON_MAP[solution.iconName] || CheckCircle2;
                return (
                  <Link
                    key={idx}
                    href={`/ai-workforce-solutions/${solution.id}`}
                    className="group block bg-[#1b3139] p-8 lg:p-10 transition-all hover:bg-[#293e46] hover:shadow-[0px_32px_40px_rgba(27,49,57,.05)]"
                  >
                    <Icon className="h-5 w-5 text-[#ff5f46] mb-6" strokeWidth={2} />
                    <h3 className="text-[24px] lg:text-[28px] font-medium leading-[1.25] text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-[16px] leading-[24px] text-[#90a5b1] mb-6">
                      {solution.description}
                    </p>
                    <div className="flex items-center gap-2 text-white text-[14px] font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                      <span>Explore module</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platform Capabilities Section - New */}
        <section id="capabilities" className="bg-white py-16 lg:py-24 border-b border-[#dce0e2]">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="mb-12">
              <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                CORE CAPABILITIES
              </span>
              <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139]">
                Built for enterprise scale and security
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {PLATFORM_CAPABILITIES.map((cap, idx) => {
                const Icon = AI_ICON_MAP[cap.iconName] || Settings;
                return (
                  <div key={idx} className="bg-[#f9f7f4] p-8">
                    <Icon className="h-6 w-6 text-[#1b3139] mb-4" />
                    <h3 className="text-[20px] font-medium text-[#1b3139] mb-3">{cap.title}</h3>
                    <p className="text-[15px] leading-[22px] text-[#5a6f77]">{cap.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Customer Stories Section - Expanded */}
        <section id="case-studies" className="bg-[#f9f7f4] py-16 lg:py-24">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                  CUSTOMER STORIES
                </span>
                <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1b3139]">
                  Customers deploy production-<br />quality workforce solutions
                </h2>
              </div>

              <div className="hidden md:flex gap-2">
                <button
                  onClick={() => setCaseStudyIndex(Math.max(0, caseStudyIndex - 1))}
                  className="w-12 h-12 border border-[#dce0e2] flex items-center justify-center hover:border-[#1b3139] bg-white transition-colors"
                  disabled={caseStudyIndex === 0}
                >
                  <ArrowLeft className="h-5 w-5 text-[#1b3139]" />
                </button>
                <button
                  onClick={() => setCaseStudyIndex(Math.min(AI_CASE_STUDIES.length - 1, caseStudyIndex + 1))}
                  className="w-12 h-12 bg-[#ff3621] flex items-center justify-center hover:bg-[#bd2b26] transition-colors"
                  disabled={caseStudyIndex === AI_CASE_STUDIES.length - 1}
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Expanded Case Study Detail */}
            <div className="bg-white border border-[#dce0e2] overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Visual Side */}
                <div className="relative aspect-[4/3] lg:aspect-auto bg-[#eeede9]">
                  <img
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                    alt={AI_CASE_STUDIES[caseStudyIndex].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1b3139]/10" />
                  <div className="absolute bottom-8 left-8 right-8 bg-[#1b3139] p-6 text-white max-w-[400px]">
                    <Quote className="h-6 w-6 text-[#ff5f46] mb-3" />
                    <p className="text-[18px] font-medium leading-[26px]">
                      "{AI_CASE_STUDIES[caseStudyIndex].quote || 'The standard for enterprise AI in India.'}"
                    </p>
                    <p className="mt-2 text-[14px] text-[#90a5b1]">
                      — Hiring Manager, {AI_CASE_STUDIES[caseStudyIndex].company}
                    </p>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="text-[20px] font-medium text-[#1b3139] block mb-1">
                      {AI_CASE_STUDIES[caseStudyIndex].company}
                    </span>
                    <span className="text-[14px] text-[#5a6f77]">
                      {AI_CASE_STUDIES[caseStudyIndex].industry} • {AI_CASE_STUDIES[caseStudyIndex].location}
                    </span>
                  </div>

                  <div className="grid gap-8">
                    <div>
                      <h4 className="text-[14px] font-semibold text-[#bd2b26] uppercase tracking-wider mb-2">The Challenge</h4>
                      <p className="text-[18px] text-[#5a6f77] leading-[28px]">
                        {AI_CASE_STUDIES[caseStudyIndex].challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[14px] font-semibold text-[#bd2b26] uppercase tracking-wider mb-2">The Results</h4>
                      <div className="grid gap-4">
                        {AI_CASE_STUDIES[caseStudyIndex].results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-[#ff3621] mt-1 shrink-0" />
                            <span className="text-[20px] font-medium text-[#1b3139]">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[16px] font-medium text-[#eb1600] group"
                    >
                      Read full case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#1b3139] py-16 lg:py-20">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {AI_WORKFORCE_STATS.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-[40px] md:text-[56px] font-medium text-white">{stat.value}</p>
                  <p className="text-[14px] text-[#90a5b1]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8 text-center">
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#1b3139] mb-4">
              Ready to transform your workforce?
            </h2>
            <p className="text-[20px] text-[#5a6f77] max-w-[600px] mx-auto mb-8">
              Join the network of enterprise leaders scaling with Apex AI across India.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#eb1600] px-8 py-4 text-[16px] font-medium text-white transition-colors hover:bg-[#bd2b26]"
              >
                Contact sales
              </Link>
              <Link
                href="/ai-resume-screening"
                className="inline-flex items-center justify-center border border-[#1b3139] px-8 py-4 text-[16px] font-medium text-[#1b3139] transition-colors hover:bg-[#1b3139] hover:text-white"
              >
                Try demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}