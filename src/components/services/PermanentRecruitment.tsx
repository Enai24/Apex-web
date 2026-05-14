'use client';

import React, { useState } from 'react';
import Head from '@/components/layout/Head';
import { ArrowRight, Users, Target, Briefcase, Award, TrendingUp, Shield, ChevronRight, Zap, Rocket, BarChart3, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function PermanentRecruitment() {
  const [activeTab, setActiveTab] = useState<'it' | 'manufacturing' | 'bfsi'>('it');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Permanent Recruitment Solutions India",
    "description": "End-to-end permanent hiring solutions for enterprises across India. AI-driven talent matching with deep industry expertise.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "serviceType": "Permanent Recruitment and Talent Acquisition"
  };

  const tabs = [
    { id: 'it' as const, label: 'IT & Technology' },
    { id: 'manufacturing' as const, label: 'Manufacturing' },
    { id: 'bfsi' as const, label: 'BFSI' },
  ];

  const useCaseData = {
    it: [
      { title: "Scale Engineering Teams", desc: "Hire 50+ developers per quarter with pre-vetted talent pools and AI skill matching." },
      { title: "Leadership Hiring", desc: "Source CTOs, VPs of Engineering, and Product Heads with verified track records." },
      { title: "Niche Skill Acquisition", desc: "Find specialists in AI/ML, cloud architecture, and cybersecurity across India." },
      { title: "Campus to Corporate", desc: "Build graduate hiring pipelines from top engineering colleges with zero lead time." },
    ],
    manufacturing: [
      { title: "Plant Head Search", desc: "Recruit operations leaders with 15+ years of experience in lean manufacturing." },
      { title: "Shop Floor Talent", desc: "Hire supervisors, quality engineers, and maintenance managers at scale." },
      { title: "Supply Chain Experts", desc: "Source procurement and logistics professionals with Six Sigma certification." },
      { title: "Safety & Compliance", desc: "Recruit HSE officers and compliance managers with factory audit experience." },
    ],
    bfsi: [
      { title: "Risk & Compliance", desc: "Hire risk officers, compliance leads, and regulatory experts with RBI/NPCI exposure." },
      { title: "Sales Force Expansion", desc: "Build relationships manager teams across tier-1, tier-2, and tier-3 cities." },
      { title: "Digital Banking Talent", desc: "Source fintech engineers, product managers, and UX designers for digital transformation." },
      { title: "Wealth Advisors", desc: "Recruit certified wealth managers and investment advisors for HNI segments." },
    ],
  };

  return (
    <>
      <Head
        title="Permanent Recruitment Solutions India | Apex Enterprises"
        description="End-to-end permanent hiring solutions across India. AI-driven talent matching with 95% retention rate and industry-specialized recruitment teams."
        keywords="permanent recruitment india, direct hire services, talent acquisition, executive hiring, AI recruitment"
        canonicalPath="/services/permanent-recruitment"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Dark Hero — matching Databricks */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-navy">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-x-2 eyebrow mb-6 text-white/70">
                <Users className="h-4 w-4 text-orange-red" />
                <span>Talent Acquisition Intelligence</span>
              </div>
              <h1 className="text-white mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                The Workforce Intelligence Platform for <span className="text-orange-red">Permanent Recruitment</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed">
                Build your core team with India's most trusted permanent recruitment partner. AI-powered matching, industry expertise, and 95% candidate retention.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
                  Let's Chat
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#use-cases" className="px-8 py-4 rounded-md border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
                  Explore Use Cases
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tabs — Databricks style */}
        <section className="sticky top-[80px] z-40 bg-white border-b border-border shadow-sm">
          <div className="container">
            <nav className="flex gap-8 overflow-x-auto py-4 text-sm font-medium">
              {[
                { label: 'Use Cases', href: '#use-cases' },
                { label: 'Customers', href: '#customers' },
                { label: 'Solution Accelerators', href: '#accelerators' },
                { label: 'Resources', href: '#resources' },
                { label: 'FAQ', href: '#faq' }
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-teal-gray hover:text-navy whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-orange-red">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Use Cases with Sub-Tabs — Databricks pattern */}
        <section id="use-cases" className="py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Use Cases</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Workforce, Your Future</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                Outcome-focused hiring solutions tailored by industry segment.
              </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex bg-oat rounded-lg p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2.5 rounded-md text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-navy text-white shadow-sm'
                        : 'text-teal-gray hover:text-navy'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {useCaseData[activeTab].map((item, i) => (
                <div key={i} className="group p-8 bg-white rounded-2xl border border-oat-medium hover:border-orange-red/30 transition-all hover:shadow-databricks">
                  <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-orange-red transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-teal-gray leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome Categories */}
        <section className="py-24 bg-oat">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Outcomes</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Hiring Outcomes That Matter</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Drive Growth", icon: Rocket, items: ["Bulk hiring at scale", "Leadership pipeline building", "Niche skill acquisition"] },
                { title: "Reduce Cost", icon: BarChart3, items: ["40% lower cost-per-hire", "Zero agency overlap", "Predictable hiring budgets"] },
                { title: "Improve Quality", icon: Shield, items: ["95% first-year retention", "Culture-fit matching", "Zero compliance gaps"] },
              ].map((cat, i) => (
                <div key={i} className="p-8 bg-white rounded-2xl border border-oat-medium">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white mb-6">
                    <cat.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy mb-4">{cat.title}</h4>
                  <ul className="space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-teal-gray">
                        <ChevronRight className="h-4 w-4 text-orange-red flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customers */}
        <section id="customers" className="py-24 bg-white border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="eyebrow mb-6">Trusted By</h3>
              <p className="text-2xl font-bold text-navy">500+ global enterprises scale with Apex</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center grayscale opacity-70">
              {['Fortune 500 GCCs', 'Top Pharma', 'Auto Leaders', 'Tech Giants', 'BFSI Peers', 'Global MNCs'].map((client, i) => (
                <div key={i} className="h-12 border border-navy/10 rounded flex items-center justify-center text-[10px] font-mono text-navy/40 uppercase tracking-widest px-4 text-center leading-tight">
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Accelerators */}
        <section id="accelerators" className="py-24 lg:py-32 bg-oat">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="eyebrow mb-6 text-orange-red">Solution Accelerators</h3>
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions to Deliver<br />Hiring Outcomes That Matter</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                Explore All
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "AI-Talent Match", icon: Target, tag: "Featured", desc: "Proprietary AI matching engine for the Indian talent market." },
                { title: "Industry Specialists", icon: Briefcase, tag: "Essential", desc: "Domain-expert recruiters for every major industry vertical." },
                { title: "Retention Predictor", icon: TrendingUp, tag: null, desc: "ML-powered attrition prediction before you make the offer." },
                { title: "Velocity Hirer", icon: Award, tag: "New", desc: "48-hour submittal guarantee for critical roles." }
              ].map((mod, i) => (
                <div key={i} className="group p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-databricks transition-all duration-500 border border-transparent hover:border-oat-medium">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white group-hover:bg-orange-red transition-colors duration-500">
                      <mod.icon className="h-6 w-6" />
                    </div>
                    {mod.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-orange-red/10 text-orange-red px-2 py-1 rounded">
                        {mod.tag}
                      </span>
                    )}
                  </div>
                  <h4 className="text-navy text-lg font-bold mb-2">{mod.title}</h4>
                  <p className="text-sm text-teal-gray leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-24 bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Resources</h3>
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Workforce Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { type: "eBook", title: "Mastering Permanent Hiring in India 2026", link: "/contact" },
                { type: "Whitepaper", title: "AI in Talent Acquisition: The Future of Recruitment", link: "/contact" },
                { type: "Case Study", title: "98% Retention in Scale Transitions", link: "/contact" }
              ].map((res, i) => (
                <Link key={i} href={res.link} className="group block">
                  <div className="eyebrow text-[10px] mb-4 text-orange-red">{res.type}</div>
                  <h4 className="text-xl font-bold text-navy group-hover:text-orange-red transition-colors mb-4">{res.title}</h4>
                  <div className="flex items-center text-sm font-bold text-navy">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32 bg-oat border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="text-navy text-4xl mb-16 font-bold text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How fast can you fill permanent roles?", a: "Our AI talent pool allows us to begin submittals within 48 hours and complete most permanent placements within 15-21 days depending on the seniority and skill mix." },
                { q: "Do you handle all statutory compliance?", a: "Absolutely. We ensure 100% compliance in onboarding, background verification, and documentation. You receive digital compliance reports with every placement." },
                { q: "Which cities do you operate in?", a: "We have a pan-India presence with operational hubs in 12 major cities and the capability to hire across all 28 states for large enterprise projects." }
              ].map((faq, i) => (
                <details key={i} className="group p-8 bg-white rounded-2xl border border-oat-medium cursor-pointer">
                  <summary className="font-bold text-navy text-lg list-none flex justify-between items-center">
                    {faq.q}
                    <div className="w-8 h-8 rounded-full bg-oat flex items-center justify-center group-open:bg-navy group-open:text-white transition-colors">
                      <ChevronRight className="h-5 w-5 group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <p className="mt-6 text-teal-gray leading-relaxed text-lg">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Ready to Build Your<br />Dream Team?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ global enterprises leveraging Apex for high-fidelity permanent recruitment in the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/services" className="px-12 py-6 text-lg rounded-md border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
