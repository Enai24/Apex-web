import React from 'react';
import Head from '@/components/layout/Head';
import { Calculator, Shield, FileText, CheckCircle, Clock, Award, Phone, Mail, AlertTriangle, ArrowRight, Sparkles, Database, BarChart3, Lock, MessageSquare, ChevronRight, Zap } from 'lucide-react';
import Link from 'next/link';

export default function PayrollCompliance() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI-Powered Payroll & Statutory Compliance India",
    "description": "Zero-error payroll and statutory compliance solutions for enterprises in India. AI-powered precision for EPF, ESI, Tax, and Labor Law audits.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Payroll and Compliance Management"
  };

  const useCases = [
    {
      category: "Eliminate Risk",
      items: [
        {
          title: "Statutory Anomaly Detection",
          desc: "Our AI-driven engine identifies filing discrepancies in EPF, ESI, and LWF returns before submission, ensuring a zero-penalty record."
        },
        {
          title: "Multi-State PT Compliance",
          desc: "Centrally manage Professional Tax across all 28 states with automated trackers and localized regulatory updates."
        }
      ]
    },
    {
      category: "Optimize Operations",
      items: [
        {
          title: "Payroll Automation",
          desc: "Integrate attendance and leave data directly into our payroll engine for 100% accurate, ready-to-disburse salary processing."
        },
        {
          title: "Digital Compliance Vault",
          desc: "Access all statutory registers, licenses, and challans in a secure, audit-ready digital repository available 24/7."
        }
      ]
    },
    {
      category: "Secure Workforce Trust",
      items: [
        {
          title: "AI Grievance Resolution",
          desc: "Automated helpdesk for rapid resolution of associate statutory queries, improving workforce satisfaction and transparency."
        },
        {
          title: "Transparent Reporting",
          desc: "Real-time visibility into employer contributions and employee benefits via specialized enterprise dashboards."
        }
      ]
    }
  ];

  return (
    <>
      <Head
        title="Zero-Error Payroll & Statutory Compliance India | Apex Enterprises"
        description="Eliminate statutory risks with India's most trusted payroll intelligence partner. 100% precision in EPF, ESI, and Tax filings powered by AI."
        keywords="payroll compliance india, statutory compliance services, EPF ESI filing, professional tax management, labor law audit, payroll outsourcing"
        canonicalPath="/services/payroll-compliance"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Hero Section - Refined White Design */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-3xl"></div>

          <div className="container relative">
            <div className="max-w-4xl">
              <div className="flex items-center gap-x-2 eyebrow mb-6">
                <Shield className="h-4 w-4 text-orange-red" />
                <span>Zero-Error Compliance</span>
              </div>
              <h1 className="text-navy mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                The Compliance Intelligence Platform for <span className="text-orange-red">Statutory Precision</span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-gray max-w-3xl mb-12 leading-relaxed">
                Eliminate regulatory friction and administrative overhead. Bring the power of AI to every filing, audit, and disbursement.
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
                { label: 'Credentials', href: '#credentials' },
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
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Enterprise, Secured</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                Master your compliance stack with India's most precise workforce financial engine.
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

        {/* Confidence Banner - Databricks Logostrip Style */}
        <section id="credentials" className="py-24 bg-oat border-y border-border">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-12 items-center text-center">
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                  <Shield className="h-8 w-8 text-orange-red" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">Zero Penalties</div>
                <div className="eyebrow text-[10px]">In 23+ Years of Service</div>
              </div>
              <div className="flex flex-col items-center border-x border-border md:px-12">
                <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                  <Database className="h-8 w-8 text-orange-red" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">ISO 27001</div>
                <div className="eyebrow text-[10px]">Highest Data Security Standards</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                  <Award className="h-8 w-8 text-orange-red" />
                </div>
                <div className="text-3xl font-bold text-navy mb-2">100% Audit-Ready</div>
                <div className="eyebrow text-[10px]">Full Digital Trails for Every Transaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Modules - Oat with White Cards */}
        <section id="modules" className="py-24 lg:py-32 bg-oat">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="eyebrow mb-6 text-orange-red">Compliance Stack</h3>
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Databricks-developed solutions for<br />Financial Accuracy & Risk Control</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                Explore All Modules
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "EPF & ESI Intelligence", icon: Database, tag: "Essential" },
                { title: "Statutory Filings", icon: FileText, tag: "New" },
                { title: "Multi-State PT", icon: Calculator, tag: "Featured" },
                { title: "Labour Law Services", icon: Shield, tag: null },
                { title: "Audit & Risk Support", icon: AlertTriangle, tag: null },
                { title: "Grievance Redressal", icon: MessageSquare, tag: "AI-Powered" }
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
                  <p className="text-sm text-teal-gray leading-relaxed">Proprietary logic for automated monthly contributions and automated state returns.</p>
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
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Compliance Expertise</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { type: "Guide", title: "Decoding the 2026 Labor Code Changes", link: "/contact" },
                { type: "Webinar", title: "Automating Multi-State Professional Tax", link: "/contact" },
                { type: "Case Study", title: "How a 10k-Employee Tech Giant Reached Zero Penalties", link: "/contact" }
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
                { q: "How do you handle multi-state PF & ESI?", a: "We maintain discrete state-level registrations and centralized digital filing. You get a single dashboard view of your entire national compliance health while we manage the local nuances." },
                { q: "What is your turnaround time for monthly fillings?", a: "Contributions are computed by the 5th and filings are completed by the 10th of every month, ensuring you never face a late payment penalty." },
                { q: "Can we migrate our legacy payroll data?", a: "Yes. Our transition team specializes in data sanitation and migration, typically completing the move within one payroll cycle with zero downtime." }
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
            <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Achieve Zero-Defect<br />Compliance Today</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of enterprises eliminating compliance friction with India's most trusted payroll intelligence partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary px-12 py-6 text-lg bg-white/10 hover:bg-white/20 border-white/20 text-white font-bold">
                View All Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}