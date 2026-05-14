'use client';

import React, { useState } from 'react';
import Head from '@/components/layout/Head';
import { ArrowRight, Users, FileText, TrendingUp, Shield, Clock, BarChart3, ChevronRight, Zap, Rocket, Lock, Globe, Award } from 'lucide-react';
import Link from 'next/link';

export default function HROutsourcing() {
  const [activeTab, setActiveTab] = useState<'startup' | 'midmarket' | 'enterprise'>('startup');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "HR Outsourcing Services India",
    "description": "End-to-end HR outsourcing for Indian enterprises. From onboarding to exit management, we handle your complete HR function.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "serviceType": "HR Outsourcing and Managed HR Services"
  };

  const tabs = [
    { id: 'startup' as const, label: 'Startup' },
    { id: 'midmarket' as const, label: 'Mid-Market' },
    { id: 'enterprise' as const, label: 'Enterprise' },
  ];

  const useCaseData = {
    startup: [
      { title: "Founder-Friendly HR", desc: "Lightweight HR ops for 10-50 person teams. ESOP management, culture setup, and zero-compliance hiring." },
      { title: "Rapid Scaling", desc: "Go from 20 to 200 employees in 6 months with automated onboarding and payroll for every new hire." },
      { title: "Investor-Ready Compliance", desc: "Due-diligence ready documentation, labor law compliance, and audit-ready HR records from day one." },
      { title: "Remote-First Setup", desc: "HR infrastructure for distributed teams across India with localized compliance in every state." },
    ],
    midmarket: [
      { title: "HR Function Transition", desc: "Migrate from ad-hoc HR to structured processes with dedicated account managers and SOPs." },
      { title: "Multi-State Compliance", desc: "Manage EPF, ESI, PT, and LWF across 5-10 states with single-dashboard visibility." },
      { title: "Talent Retention", desc: "Reduce attrition by 30% with structured appraisals, career paths, and engagement programs." },
      { title: "Cost Optimization", desc: "Cut HR operational costs by 35% through automation, shared services, and elimination of penalty risks." },
    ],
    enterprise: [
      { title: "Global HR Operations", desc: "Unified HR across India, APAC, and global hubs with centralized reporting and localized compliance." },
      { title: "M&A Integration", desc: "Seamless HR integration for acquired companies—payroll harmonization, policy alignment, and culture merge." },
      { title: "Workforce Analytics", desc: "Predictive dashboards for attrition, hiring bottlenecks, cost-per-hire, and diversity metrics." },
      { title: "Union & Labor Relations", desc: "Expert handling of union negotiations, grievance redressal, and industrial relations compliance." },
    ],
  };

  return (
    <>
      <Head
        title="HR Outsourcing Services India | Apex Enterprises"
        description="Complete HR outsourcing for enterprises in India. From talent acquisition to compliance, we manage your entire HR function with technology and expertise."
        keywords="HR outsourcing india, managed HR services, payroll outsourcing, statutory compliance, HR managed services"
        canonicalPath="/services/hr-outsourcing"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Dark Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-navy">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-x-2 eyebrow mb-6 text-white/70">
                <Users className="h-4 w-4 text-orange-red" />
                <span>Managed HR Services</span>
              </div>
              <h1 className="text-white mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                The Workforce Intelligence Platform for <span className="text-orange-red">HR Outsourcing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed">
                Transform your HR function with our end-to-end outsourcing solutions. From hiring to exit, we handle it all—so you can focus on your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
                  Outsource Your HR
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#use-cases" className="px-8 py-4 rounded-md border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
                  Explore Use Cases
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
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

        {/* Use Cases with Sub-Tabs */}
        <section id="use-cases" className="py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Use Cases</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your HR, Your Future</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                HR solutions scaled to your organization size and growth stage.
              </p>
            </div>

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
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">HR Outcomes That Matter</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Reduce Cost", icon: BarChart3, items: ["25-40% HR cost reduction", "Zero compliance penalties", "Predictable monthly spend"] },
                { title: "Ensure Compliance", icon: Shield, items: ["100% statutory adherence", "Monthly filing automation", "Audit-ready documentation"] },
                { title: "Scale Flexibly", icon: Rocket, items: ["10 to 10,000+ employees", "Multi-state operations", "24/7 support coverage"] },
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
              <p className="text-2xl font-bold text-navy">500+ enterprises trust Apex for HR outsourcing</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center grayscale opacity-70">
              {['Fortune 500 GCCs', 'Indian Conglomerates', 'Tech Unicorns', 'BFSI Leaders', 'Manufacturing Giants', 'Global MNCs'].map((client, i) => (
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
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions to Deliver<br />HR Outcomes That Matter</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                Explore All
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Talent Acquisition", icon: Users, tag: "Featured", desc: "AI-driven hiring with dedicated recruiters and skill-matching." },
                { title: "Payroll Engine", icon: FileText, tag: "Essential", desc: "Zero-error payroll with 100% statutory compliance." },
                { title: "Analytics Suite", icon: BarChart3, tag: null, desc: "Predictive dashboards for attrition and workforce planning." },
                { title: "Compliance Shield", icon: Shield, tag: "New", desc: "Automated EPF, ESI, PT, LWF filing and audit readiness." }
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
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your HR Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { type: "eBook", title: "The Complete Guide to HR Outsourcing in India", link: "/contact" },
                { type: "Whitepaper", title: "Reducing HR Costs by 35% with Managed Services", link: "/contact" },
                { type: "Case Study", title: "150K+ Employees Managed with 100% Compliance", link: "/contact" }
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
                { q: "What HR functions do you outsource?", a: "We manage the complete HR lifecycle—from talent acquisition and onboarding to payroll, compliance, performance management, and exit formalities. You can outsource specific modules or the entire function." },
                { q: "How do you ensure data security?", a: "We are ISO 27001 certified with encrypted data transmission, role-based access controls, and regular security audits. All employee data is stored in India-compliant data centers." },
                { q: "What is the typical cost savings?", a: "Our clients typically see 25-40% reduction in HR operational costs within the first year, driven by process automation, centralized management, and elimination of compliance penalties." }
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
            <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Ready to Transform<br />Your HR Function?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ enterprises leveraging Apex for comprehensive, technology-driven HR outsourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                Get a Custom Proposal
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
