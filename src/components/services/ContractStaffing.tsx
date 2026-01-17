import React from 'react';
import Head from '@/components/layout/Head';
import { ArrowRight, CheckCircle, Sparkles, Database, Users, TrendingUp, BarChart3, Clock, Shield, ChevronRight, Zap, Target } from 'lucide-react';
import Link from 'next/link';

export default function ContractStaffing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Contract Staffing Solutions India",
    "description": "High-fidelity contract staffing and talent intelligence solutions for enterprises in India. AI-powered recruitment with 100% compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Contract Staffing and Workforce Solutions"
  };

  const useCases = [
    {
      category: "Accelerate Hiring",
      items: [
        {
          title: "Scale-Ready Talent Pipelines",
          desc: "Access pre-vetted talent pools for bulk hiring and seasonal spikes. Our AI-driven engine predicts hiring bottlenecks before they occur."
        },
        {
          title: "48-Hour Submittal",
          desc: "Experience rapid-cycle recruitment with industry-leading submittal times, powered by automated resume parsing and skill-matching."
        }
      ]
    },
    {
      category: "Optimize Workforce",
      items: [
        {
          title: "Deployment Intelligence",
          desc: "Monitor real-time associate performance and attendance across multi-city operations with centralized dashboarding."
        },
        {
          title: "Statutory Mastery",
          desc: "Eliminate liability with 100% compliant payroll, EPF, and ESI management for your entire contract workforce."
        }
      ]
    },
    {
      category: "Build Resource Resilience",
      items: [
        {
          title: "Zero-Gap Compliance",
          desc: "Stay ahead of regulatory changes with automated CLRA management and proactive statutory audit readiness."
        },
        {
          title: "Transition Management",
          desc: "Seamlessly transition existing workforces to our platform with zero operational downtime and high employee retention."
        }
      ]
    }
  ];

  return (
    <>
      <Head
        title="Contract Staffing & Workforce Intelligence India | Apex Enterprises"
        description="India's leading contract staffing partner. Scalable, AI-powered workforce recruitment with 100% statutory compliance and talent intelligence."
        keywords="contract staffing india, workforce solutions, temporary staffing agency, AI recruitment platform, compliant workforce management"
        canonicalPath="/services/contract-staffing"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Hero Section - Refined White Design */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-3xl"></div>

          <div className="container relative">
            <div className="max-w-4xl">
              <div className="flex items-center gap-x-2 eyebrow mb-6">
                <Sparkles className="h-4 w-4 text-orange-red" />
                <span>Workforce Intelligence</span>
              </div>
              <h1 className="text-navy mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                The Workforce Intelligence Platform for <span className="text-orange-red">Contract Staffing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-gray max-w-3xl mb-12 leading-relaxed">
                Bring the power of AI and deep domain expertise to every hire in your organization. Secure talent at scale with 100% compliance.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
                  Let's Chat
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="#use-cases" className="btn-secondary w-full sm:w-auto px-8 py-4">
                  Explore Use Cases
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation Tabs */}
        <section className="sticky top-[80px] z-40 bg-white border-b border-border shadow-sm">
          <div className="container">
            <nav className="flex gap-10 overflow-x-auto py-5 text-sm font-medium">
              {[
                { label: 'Use Cases', href: '#use-cases' },
                { label: 'Customers', href: '#customers' },
                { label: 'Solution Modules', href: '#modules' },
                { label: 'Resources', href: '#resources' },
                { label: 'FAQ', href: '#faq' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-teal-gray hover:text-navy whitespace-nowrap transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Use Cases Section - Whitespace Driven */}
        <section id="use-cases" className="py-24 lg:py-32 bg-white">
          <div className="container">
            <div className="text-center mb-24">
              <h3 className="eyebrow mb-6 text-orange-red">Use Cases</h3>
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Workforce, Your Future</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                Connect your enterprise with validated expertise in record time using our AI-driven deployment engine.
              </p>
            </div>

            <div className="space-y-24">
              {useCases.map((category, catIdx) => (
                <div key={catIdx} className="grid lg:grid-cols-3 gap-12 items-start">
                  <div className="lg:pr-12">
                    <div className="w-12 h-12 bg-oat rounded-xl flex items-center justify-center mb-6">
                      <Zap className="h-6 w-6 text-orange-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-4">{category.category}</h3>
                  </div>
                  <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="group">
                        <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-orange-red transition-colors flex items-center gap-2">
                          {item.title}
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                        </h4>
                        <p className="text-teal-gray leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Logos Section */}
        <section id="customers" className="py-24 bg-oat border-y border-border">
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

        {/* Solution Modules - Oat with White Cards */}
        <section id="modules" className="py-24 lg:py-32 bg-oat">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="eyebrow mb-6 text-orange-red">Skill Modules</h3>
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions to Deliver<br />Staffing Outcomes That Matter</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white">
                View All Modules
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "AI-Talent Match", icon: Database, tag: "Featured" },
                { title: "Statutory Shield", icon: Shield, tag: "Essential" },
                { title: "Real-time Tracker", icon: BarChart3, tag: null },
                { title: "Velocity Hirer", icon: Target, tag: "New" }
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
                  <p className="text-sm text-teal-gray">Proprietary logic optimized for the Indian labor market.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <h3 className="eyebrow mb-6 text-orange-red">Resources</h3>
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Workforce Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { type: "eBook", title: "Mastering Contract Labor in India 2026", link: "/contact" },
                { type: "Whitepaper", title: "Scale Your GCC with AI Intelligence", link: "/contact" },
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

        {/* FAQ Section */}
        <section id="faq" className="py-24 lg:py-32 bg-oat border-t border-border">
          <div className="container max-w-4xl">
            <h2 className="text-navy text-4xl mb-16 font-bold text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How fast can you source 500+ associates?", a: "Our AI talent pool allows us to begin submittals within 48 hours and complete bulk deployment transitions within 15-21 days depending on the skill mix." },
                { q: "Do you handle all statutory compliance?", a: "Absolutely. We assume 100% liability for EPF, ESI, LWF, and PT filings. You receive digital compliance reports every month with your invoice." },
                { q: "Which cities do you operate in?", a: "We have a pan-India presence with operational hubs in 12 major cities and the capability to deploy across all 28 states for large enterprise projects." }
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

        {/* Final CTA - The High-Impact Navy Section */}
        <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-red/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="container relative z-10 text-center">
            <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Ready to Scale Your<br />Workforce with Intelligence?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 500+ global enterprises leveraging Apex for high-fidelity, compliant staffing solutions in the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary px-12 py-6 text-lg bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}