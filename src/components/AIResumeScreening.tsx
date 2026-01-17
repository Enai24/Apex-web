'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Search, CheckCircle2, X } from 'lucide-react';
import { SEO } from '../utils/seo';
import {
  RESUME_SCREENING_FEATURES,
  DEMO_RESUME_MATCHES,
  ResumeCandidate
} from '../data/ai-solutions';
import { AI_ICON_MAP } from '../utils/ai-workforce';

export default function AIResumeScreening() {
  const [activeTab, setActiveTab] = useState<'features' | 'demo' | 'pricing'>('features');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const allLocations = [...new Set(DEMO_RESUME_MATCHES.map(c => c.location))];

  const filteredCandidates = DEMO_RESUME_MATCHES.filter((candidate: ResumeCandidate) => {
    if (searchTerm && !candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !candidate.keySkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) {
      return false;
    }
    if (selectedLocation && candidate.location !== selectedLocation) {
      return false;
    }
    return true;
  });

  return (
    <>
      <SEO
        title="AI Resume Screening - IntelliHire™ | Apex Enterprises India"
        description="Cut hiring time by 65% with precision AI resume screening. 94% matching accuracy for GCCs and enterprises."
      />

      <div className="bg-white font-sans">
        {/* Hero Section - Databricks Sharp Style */}
        <section className="bg-[#f9f7f4] pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-[16px] font-normal tracking-[0.01em] text-[#bd2b26] uppercase mb-3">
                  INTELLIHIRE™
                </span>
                <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] tracking-[-0.01em] text-[#1b3139]">
                  AI Resume Screening
                </h1>
                <p className="mt-6 text-[20px] leading-[28px] text-[#5a6f77] max-w-[520px]">
                  Deploy semantic analysis and skill mapping for high-retention talent. 94% accuracy across 12 Indian languages.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-[#eb1600] px-6 py-3 text-[16px] font-medium text-white hover:bg-[#bd2b26]"
                  >
                    Get started
                  </Link>
                  <button
                    onClick={() => setActiveTab('demo')}
                    className="inline-flex items-center justify-center border border-[#1b3139] px-6 py-3 text-[16px] font-medium text-[#1b3139] hover:bg-[#1b3139] hover:text-white"
                  >
                    Try demo
                  </button>
                </div>
              </div>

              {/* Product Screenshot */}
              <div className="relative">
                <div className="bg-white shadow-[0px_72px_104px_rgba(27,49,57,.07),0px_32px_40px_rgba(27,49,57,.05)]">
                  <div className="p-6 space-y-4">
                    {[94, 89, 76].map((score, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-[#f9f7f4]">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-[#1b3139]" />
                          <div>
                            <div className="h-3 w-24 bg-[#dce0e2] mb-1" />
                            <div className="h-2 w-16 bg-[#eeede9]" />
                          </div>
                        </div>
                        <span className={`text-[20px] font-medium ${score >= 90 ? 'text-[#ff3621]' : 'text-[#1b3139]'}`}>
                          {score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-y border-[#dce0e2] bg-white py-6">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[32px] font-medium text-[#ff3621]">94%</p>
                <p className="text-[14px] text-[#5a6f77]">Match Accuracy</p>
              </div>
              <div>
                <p className="text-[32px] font-medium text-[#1b3139]">65%</p>
                <p className="text-[14px] text-[#5a6f77]">Faster Hiring</p>
              </div>
              <div>
                <p className="text-[32px] font-medium text-[#1b3139]">12+</p>
                <p className="text-[14px] text-[#5a6f77]">Languages</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <div className="sticky top-0 z-50 border-b border-[#dce0e2] bg-white">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <nav className="flex gap-6">
              {[
                { id: 'features', label: 'Features' },
                { id: 'demo', label: 'Live Demo' },
                { id: 'pricing', label: 'Pricing' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative py-4 text-[14px] font-medium ${activeTab === tab.id ? 'text-[#1b3139]' : 'text-[#5a6f77] hover:text-[#1b3139]'}`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff3621]" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Features - Databricks Navy Cards */}
        {activeTab === 'features' && (
          <section className="bg-[#f9f7f4] py-16 lg:py-24">
            <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
              <div className="mb-10">
                <span className="block text-[16px] text-[#bd2b26] uppercase mb-3">CORE CAPABILITIES</span>
                <h2 className="text-[40px] md:text-[48px] font-medium text-[#1b3139]">
                  Enterprise-grade AI screening
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {RESUME_SCREENING_FEATURES.map((feature, idx) => {
                  const Icon = AI_ICON_MAP[feature.iconName] || CheckCircle2;
                  return (
                    <div key={idx} className="bg-[#1b3139] p-8 lg:p-10">
                      <Icon className="h-5 w-5 text-[#ff5f46] mb-6" strokeWidth={2} />
                      <h3 className="text-[24px] font-medium text-white mb-3">{feature.title}</h3>
                      <p className="text-[16px] text-[#90a5b1] mb-4">{feature.description}</p>
                      <p className="text-[14px] font-medium text-[#ff5f46]">{feature.metrics}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Demo */}
        {activeTab === 'demo' && (
          <section className="bg-[#f9f7f4] py-16 lg:py-24">
            <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
              <div className="mb-10">
                <h2 className="text-[40px] font-medium text-[#1b3139]">Live Candidate Matching</h2>
              </div>

              <div className="mb-8 flex flex-wrap gap-4">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#5a6f77]" />
                  <input
                    type="text"
                    placeholder="Search by name or skill..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-[#dce0e2] bg-white py-3 pl-12 pr-4 text-[14px] focus:border-[#1b3139] focus:outline-none"
                  />
                </div>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="border border-[#dce0e2] bg-white px-4 py-3 text-[14px] focus:border-[#1b3139] focus:outline-none"
                >
                  <option value="">All Locations</option>
                  {allLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {filteredCandidates.map((candidate: ResumeCandidate) => (
                  <div key={candidate.id} className="border border-[#dce0e2] bg-white p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[18px] font-medium text-[#1b3139]">{candidate.name}</h3>
                        <p className="text-[14px] text-[#5a6f77]">{candidate.location} • {candidate.experience} years</p>
                      </div>
                      <span className={`px-3 py-1 text-[14px] font-medium ${candidate.matchScore >= 90 ? 'bg-[#ff3621] text-white' : 'bg-[#1b3139] text-white'
                        }`}>
                        {candidate.matchScore}%
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.keySkills.slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="bg-[#f9f7f4] px-3 py-1 text-[12px] text-[#1b3139]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing */}
        {activeTab === 'pricing' && (
          <section className="py-16 lg:py-24">
            <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-[40px] font-medium text-[#1b3139]">Simple Pricing</h2>
              </div>

              <div className="mx-auto max-w-[900px] grid gap-6 md:grid-cols-2">
                <div className="border border-[#dce0e2] bg-white p-8">
                  <h3 className="text-[20px] font-medium text-[#1b3139]">Starter</h3>
                  <p className="mt-2 text-[32px] font-medium text-[#1b3139]">₹49,999<span className="text-[16px] text-[#5a6f77]">/mo</span></p>
                  <ul className="mt-6 space-y-3">
                    {['500 resumes/mo', 'Basic matching', 'Email support'].map((f) => (
                      <li key={f} className="flex items-center text-[14px] text-[#5a6f77]">
                        <CheckCircle2 className="mr-3 h-4 w-4 text-[#ff3621]" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-8 block w-full border border-[#1b3139] py-3 text-center text-[14px] font-medium text-[#1b3139] hover:bg-[#1b3139] hover:text-white">
                    Contact Sales
                  </Link>
                </div>

                <div className="border-2 border-[#ff3621] bg-white p-8 relative">
                  <span className="absolute -top-3 left-6 bg-[#ff3621] px-3 py-1 text-[12px] font-medium text-white">Popular</span>
                  <h3 className="text-[20px] font-medium text-[#1b3139]">Enterprise</h3>
                  <p className="mt-2 text-[32px] font-medium text-[#1b3139]">Custom</p>
                  <ul className="mt-6 space-y-3">
                    {['Unlimited resumes', 'Advanced AI', 'Priority support', 'API access'].map((f) => (
                      <li key={f} className="flex items-center text-[14px] text-[#5a6f77]">
                        <CheckCircle2 className="mr-3 h-4 w-4 text-[#ff3621]" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-8 block w-full bg-[#eb1600] py-3 text-center text-[14px] font-medium text-white hover:bg-[#bd2b26]">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-[#1b3139] py-16">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8 text-center">
            <h2 className="text-[32px] font-medium text-white">Ready to transform hiring?</h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center bg-[#eb1600] px-8 py-4 text-[16px] font-medium text-white hover:bg-[#bd2b26]"
            >
              Get started
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
