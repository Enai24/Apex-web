'use client';

import React, { useState } from 'react';
import Head from '@/components/layout/Head';
import { ArrowRight, Crown, Shield, Target, Lock, Users, ChevronRight, Zap, Award, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn';

export default function ExecutiveSearch() {
  const [activeTab, setActiveTab] = useState<'cxo' | 'vp' | 'board'>('cxo');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Executive Search & Leadership Hiring India",
    "description": "Confidential executive search and leadership hiring for CXO and senior management roles across India.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "serviceType": "Executive Search and Leadership Recruitment"
  };

  const tabs = [
    { id: 'cxo' as const, label: 'C-Suite' },
    { id: 'vp' as const, label: 'VP & Director' },
    { id: 'board' as const, label: 'Board Search' },
  ];

  const useCaseData = {
    cxo: [
      { title: "CEO Search", desc: "Find visionary CEOs with P&L ownership experience and proven turnaround track records." },
      { title: "CTO & CIO", desc: "Source technology leaders who have scaled engineering organizations from 50 to 500+." },
      { title: "CFO & CHRO", desc: "Recruit finance and people leaders with IPO, M&A, and global expansion experience." },
      { title: "COO & President", desc: "Identify operations executives who have delivered 2-3x revenue growth in 5 years." },
    ],
    vp: [
      { title: "VP Engineering", desc: "Hire engineering leaders with deep expertise in cloud, AI, and platform architecture." },
      { title: "VP Sales", desc: "Source sales leaders who have built channel networks across India and ASEAN markets." },
      { title: "VP Product", desc: "Find product executives who have launched 0-to-1 products and scaled them to $100M+ ARR." },
      { title: "Director Operations", desc: "Recruit operations directors with lean Six Sigma and digital transformation expertise." },
    ],
    board: [
      { title: "Independent Directors", desc: "Identify independent directors with regulatory compliance and governance expertise." },
      { title: "Advisory Board", desc: "Build advisory boards with industry veterans, investors, and former CXOs." },
      { title: "Committee Chairs", desc: "Source audit, risk, and compensation committee chairs with listed company experience." },
      { title: "Board Diversity", desc: "Recruit diverse board members to meet SEBI and global governance standards." },
    ],
  };

  return (
    <>
      <Head
        title="Executive Search & Leadership Hiring India | Apex Enterprises"
        description="Confidential executive search for CXO and senior leadership roles across India. 98% placement success with dedicated search partners."
        keywords="executive search india, CXO hiring, leadership recruitment, board search, confidential hiring"
        canonicalPath="/services/executive-search"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Dark Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-navy">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-x-2 eyebrow mb-6 text-white/70"
              >
                <Crown className="h-4 w-4 text-orange-red" />
                <span>Leadership Intelligence</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight"
              >
                The Workforce Intelligence Platform for <span className="text-orange-red">Executive Search</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl lg:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed"
              >
                Find transformational leaders who shape the future of your organization. Confidential, bespoke search for CXO and senior management roles.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
                  Start Confidential Search
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#use-cases" className="px-8 py-4 rounded-md border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red">
                  Explore Use Cases
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
        <section className="sticky top-[80px] z-40 bg-white border-b border-border shadow-sm">
          <div className="container">
            <nav className="flex gap-6 md:gap-8 overflow-x-auto py-4 text-sm font-medium scroll-smooth snap-x snap-mandatory scrollbar-hide" aria-label="Page sections">
              {[
                { label: 'Use Cases', href: '#use-cases' },
                { label: 'Customers', href: '#customers' },
                { label: 'Solution Accelerators', href: '#accelerators' },
                { label: 'Resources', href: '#resources' },
                { label: 'FAQ', href: '#faq' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-teal-gray hover:text-navy whitespace-nowrap transition-colors pb-1 border-b-2 border-transparent hover:border-orange-red snap-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red rounded-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Use Cases with Sub-Tabs */}
        <section id="use-cases" className="py-24 lg:py-32 bg-white">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Use Cases</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Leadership, Your Legacy</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                Confidential search tailored by leadership level and organizational need.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="flex justify-center mb-16">
              <div className="inline-flex bg-oat rounded-lg p-1" role="tablist" aria-label="Leadership levels">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 md:px-6 py-2.5 rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red ${
                      activeTab === tab.id
                        ? 'bg-navy text-white shadow-sm'
                        : 'text-teal-gray hover:text-navy'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {useCaseData[activeTab].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="group h-full p-8 bg-white rounded-2xl border border-oat-medium hover:border-orange-red/30 transition-all hover:shadow-databricks">
                      <h4 className="text-xl font-bold text-navy mb-3 group-hover:text-orange-red transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-teal-gray leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Outcome Categories */}
        <section className="py-24 bg-oat">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Outcomes</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Leadership Outcomes That Matter</h2>
            </FadeIn>
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Mitigate Risk", icon: Shield, items: ["NDA-protected searches", "Code-named processes", "Reputation-safe outreach"] },
                { title: "Ensure Fit", icon: Target, items: ["360-degree reference checks", "Cultural alignment scoring", "Performance prediction"] },
                { title: "Build Pipeline", icon: BarChart3, items: ["Succession-ready candidates", "Internal + external mapping", "Board-ready talent pool"] },
              ].map((cat, i) => (
                <StaggerItem key={i}>
                  <div className="h-full p-8 bg-white rounded-2xl border border-oat-medium hover:shadow-premium transition-all duration-500">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Customers */}
        <section id="customers" className="py-24 bg-white border-y border-border">
          <div className="container">
            <FadeIn className="text-center mb-16">
              <h3 className="eyebrow mb-6">Trusted By</h3>
              <p className="text-2xl font-bold text-navy">500+ enterprises trust Apex for leadership hiring</p>
            </FadeIn>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                { name: 'Google', abbr: 'G' },
                { name: 'Microsoft', abbr: 'M' },
                { name: 'Amazon', abbr: 'A' },
                { name: 'TCS', abbr: 'T' },
                { name: 'Infosys', abbr: 'I' },
                { name: 'Wipro', abbr: 'W' },
              ].map((client, i) => (
                <StaggerItem key={i}>
                  <div className="flex flex-col items-center gap-2 py-6 group cursor-default">
                    <div className="w-14 h-14 bg-oat rounded-xl flex items-center justify-center text-navy/80 text-xl font-bold tracking-tighter group-hover:bg-navy group-hover:text-white transition-all duration-300">
                      {client.abbr}
                    </div>
                    <span className="text-xs font-medium text-teal-gray tracking-wide">{client.name}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Solution Accelerators */}
        <section id="accelerators" className="py-24 lg:py-32 bg-oat">
          <div className="container">
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="eyebrow mb-6 text-orange-red">Solution Accelerators</h3>
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions to Deliver<br />Leadership Outcomes That Matter</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-orange-red">
                Explore All
              </Link>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "CXO Mapping", icon: Target, tag: "Featured", desc: "Organizational mapping of target companies for leadership talent." },
                { title: "Confidential Search", icon: Shield, tag: "Essential", desc: "NDA-protected, code-named search processes." },
                { title: "Board Advisory", icon: Crown, tag: null, desc: "Board composition and independent director search." },
                { title: "Succession Planner", icon: Users, tag: "New", desc: "Build leadership pipelines for critical roles." }
              ].map((mod, i) => (
                <StaggerItem key={i}>
                  <div className="group h-full p-8 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-databricks transition-all duration-500 border border-transparent hover:border-oat-medium">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="py-24 bg-white">
          <div className="container">
            <FadeIn className="max-w-2xl mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Resources</h3>
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Leadership Expertise</h2>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-12">
              {[
                { type: "eBook", title: "The Complete Guide to CXO Hiring in India", link: "/contact" },
                { type: "Whitepaper", title: "Building Leadership Pipelines for 2030", link: "/contact" },
                { type: "Case Study", title: "98% Success in Confidential Searches", link: "/contact" }
              ].map((res, i) => (
                <StaggerItem key={i}>
                  <Link href={res.link} className="group block h-full p-6 -m-6 rounded-2xl hover:bg-oat/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red">
                    <div className="eyebrow text-[10px] mb-4 text-orange-red">{res.type}</div>
                    <h4 className="text-xl font-bold text-navy group-hover:text-orange-red transition-colors mb-4">{res.title}</h4>
                    <div className="flex items-center text-sm font-bold text-navy">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32 bg-oat border-t border-border">
          <div className="container max-w-4xl">
            <FadeIn>
              <h2 className="text-navy text-4xl mb-16 font-bold text-center">Frequently Asked Questions</h2>
            </FadeIn>
            <div className="space-y-4">
              {[
                { q: "How confidential is the search process?", a: "We operate under strict NDAs with code-named searches. Candidate identity is never revealed until mutual interest is confirmed, and all communications flow through secure channels." },
                { q: "What is your typical search timeline?", a: "Most CXO searches are completed within 45-60 days. Board-level and specialized roles may take 60-90 days depending on the specificity of requirements." },
                { q: "Do you provide post-placement support?", a: "Yes. We offer 90-day integration coaching for placed executives and remain available for advisory throughout the first year of tenure." }
              ].map((faq, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <details className="group p-8 bg-white rounded-2xl border border-oat-medium cursor-pointer open:shadow-premium transition-shadow">
                    <summary className="font-bold text-navy text-lg list-none flex justify-between items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red rounded-lg">
                      {faq.q}
                      <div className="w-8 h-8 rounded-full bg-oat flex items-center justify-center group-open:bg-navy group-open:text-white transition-colors flex-shrink-0 ml-4">
                        <ChevronRight className="h-5 w-5 group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    <p className="mt-6 text-teal-gray leading-relaxed text-lg">{faq.a}</p>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10 text-center">
            <FadeIn>
              <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Your Next Leader Is<br />Waiting</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join leading enterprises leveraging Apex for confidential, intelligence-driven executive search.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold focus-visible:ring-2 focus-visible:ring-orange-red focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                  Schedule Confidential Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/services" className="px-12 py-6 text-lg rounded-md border border-white/20 text-white font-bold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-red focus-visible:ring-offset-2 focus-visible:ring-offset-navy">
                  View All Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
