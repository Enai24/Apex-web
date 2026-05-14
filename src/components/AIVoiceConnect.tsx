'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, CheckCircle2, Globe, Clock } from 'lucide-react';
import { SEO } from '../utils/seo';
import {
  VOICE_CALLING_FEATURES,
  DEMO_VOICE_CONVERSATIONS,
  VoiceConversation
} from '../data/ai-solutions';
import { AI_ICON_MAP } from '../utils/ai-workforce';

export default function AIVoiceConnect() {
  const [activeTab, setActiveTab] = useState<'features' | 'demo' | 'pricing'>('features');
  const [languageFilter, setLanguageFilter] = useState('');

  const allLanguages = [...new Set(DEMO_VOICE_CONVERSATIONS.map(c => c.languageSpoken))];

  const filteredConversations = DEMO_VOICE_CONVERSATIONS.filter((conv: VoiceConversation) => {
    if (languageFilter && conv.languageSpoken !== languageFilter) return false;
    return true;
  });

  return (
    <>
      <SEO
        title="AI Voice Connect | Apex Enterprises India"
        description="Intelligent voice AI for candidate screening. 24/7 availability in 8 Indian languages."
      />

      <div className="bg-white font-sans">
        {/* Hero */}
        <section className="bg-[#f9f7f4] pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="block text-[16px] text-[#bd2b26] uppercase mb-3">VOICECONNECT™</span>
                <h1 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.1] text-[#1b3139]">
                  AI Voice Calling
                </h1>
                <p className="mt-6 text-[20px] leading-[28px] text-[#5a6f77] max-w-[520px]">
                  Conversational AI that screens candidates 24/7 in 8 Indian languages.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center bg-[#eb1600] px-6 py-3 text-[16px] font-medium text-white hover:bg-[#bd2b26]">
                    Get started
                  </Link>
                  <button onClick={() => setActiveTab('demo')} className="inline-flex items-center border border-[#1b3139] px-6 py-3 text-[16px] font-medium text-[#1b3139] hover:bg-[#1b3139] hover:text-white">
                    Listen to demo
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white shadow-[0px_72px_104px_rgba(27,49,57,.07),0px_32px_40px_rgba(27,49,57,.05)] p-6">
                  <div className="flex items-center gap-4 mb-6 p-4 bg-[#1b3139]">
                    <Phone className="h-6 w-6 text-white" />
                    <div>
                      <p className="text-white font-medium">Call in progress</p>
                      <p className="text-[14px] text-[#90a5b1]">Hindi • 3:24</p>
                    </div>
                  </div>
                  <div className="h-16 bg-[#f9f7f4] flex items-center justify-center">
                    <div className="flex gap-1">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="w-1 bg-[#ff3621]" style={{ height: `${(Math.sin(i * 1.7) * 0.5 + 0.5) * 32 + 8}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[#dce0e2] py-6">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[32px] font-medium text-[#ff3621]">8+</p>
                <p className="text-[14px] text-[#5a6f77]">Languages</p>
              </div>
              <div>
                <p className="text-[32px] font-medium text-[#1b3139]">24/7</p>
                <p className="text-[14px] text-[#5a6f77]">Availability</p>
              </div>
              <div>
                <p className="text-[32px] font-medium text-[#1b3139]">85%</p>
                <p className="text-[14px] text-[#5a6f77]">Sentiment Accuracy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="sticky top-0 z-50 border-b border-[#dce0e2] bg-white">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
            <nav className="flex gap-6">
              {[{ id: 'features', label: 'Features' }, { id: 'demo', label: 'Conversations' }, { id: 'pricing', label: 'Pricing' }].map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`relative py-4 text-[14px] font-medium ${activeTab === tab.id ? 'text-[#1b3139]' : 'text-[#5a6f77]'}`}>
                  {tab.label}
                  {activeTab === tab.id && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#ff3621]" />}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Features */}
        {activeTab === 'features' && (
          <section className="bg-[#f9f7f4] py-16 lg:py-24">
            <div className="mx-auto max-w-[1456px] px-4 lg:px-8">
              <div className="mb-10">
                <span className="block text-[16px] text-[#bd2b26] uppercase mb-3">CORE CAPABILITIES</span>
                <h2 className="text-[40px] font-medium text-[#1b3139]">Intelligent voice technology</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {VOICE_CALLING_FEATURES.map((feature, idx) => {
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
                <h2 className="text-[40px] font-medium text-[#1b3139]">Sample Conversations</h2>
              </div>
              <div className="mb-8">
                <select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)} className="border border-[#dce0e2] bg-white px-4 py-3 text-[14px]">
                  <option value="">All Languages</option>
                  {allLanguages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
                </select>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {filteredConversations.map((conv: VoiceConversation) => (
                  <div key={conv.id} className="border border-[#dce0e2] bg-white p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[18px] font-medium text-[#1b3139]">{conv.candidateName}</h3>
                        <p className="text-[14px] text-[#5a6f77]">{conv.position}</p>
                      </div>
                      <span className={`px-3 py-1 text-[12px] font-medium ${conv.status === 'Qualified' ? 'bg-[#00a972] text-white' : 'bg-[#dce0e2] text-[#1b3139]'}`}>
                        {conv.status}
                      </span>
                    </div>
                    <div className="flex gap-4 text-[14px] text-[#5a6f77]">
                      <span className="flex items-center gap-1"><Globe className="h-4 w-4" />{conv.languageSpoken}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{conv.duration}</span>
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
                  <h3 className="text-[20px] font-medium text-[#1b3139]">Pay As You Go</h3>
                  <p className="mt-2 text-[32px] font-medium text-[#1b3139]">₹2.50<span className="text-[16px] text-[#5a6f77]">/min</span></p>
                  <ul className="mt-6 space-y-3">
                    {['All 8 languages', 'Basic analytics', 'Email support'].map((f) => (
                      <li key={f} className="flex items-center text-[14px] text-[#5a6f77]"><CheckCircle2 className="mr-3 h-4 w-4 text-[#ff3621]" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-8 block w-full border border-[#1b3139] py-3 text-center text-[14px] font-medium text-[#1b3139] hover:bg-[#1b3139] hover:text-white">Get Started</Link>
                </div>
                <div className="border-2 border-[#ff3621] bg-white p-8 relative">
                  <span className="absolute -top-3 left-6 bg-[#ff3621] px-3 py-1 text-[12px] font-medium text-white">Best Value</span>
                  <h3 className="text-[20px] font-medium text-[#1b3139]">Enterprise</h3>
                  <p className="mt-2 text-[32px] font-medium text-[#1b3139]">Custom</p>
                  <ul className="mt-6 space-y-3">
                    {['Unlimited minutes', 'Advanced AI', 'Priority support', 'API access'].map((f) => (
                      <li key={f} className="flex items-center text-[14px] text-[#5a6f77]"><CheckCircle2 className="mr-3 h-4 w-4 text-[#ff3621]" />{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="mt-8 block w-full bg-[#eb1600] py-3 text-center text-[14px] font-medium text-white hover:bg-[#bd2b26]">Contact Sales</Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-[#1b3139] py-16">
          <div className="mx-auto max-w-[1456px] px-4 lg:px-8 text-center">
            <h2 className="text-[32px] font-medium text-white">Ready to scale outreach?</h2>
            <Link href="/contact" className="mt-6 inline-flex items-center bg-[#eb1600] px-8 py-4 text-[16px] font-medium text-white hover:bg-[#bd2b26]">Get started</Link>
          </div>
        </section>
      </div>
    </>
  );
}
