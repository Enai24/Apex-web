import React from 'react';
import Head from '@/components/layout/Head';
import { Shield, CheckCircle, Clock, Zap, ArrowRight, Award, Factory, HardHat, Droplets, Wind, ChevronRight, BarChart3, Database, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function IndustrialHousekeeping() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Housekeeping & Facility Management India",
    "description": "Premium industrial housekeeping and facility management services for manufacturing plants in India. Specialized cleaning with 100% safety compliance.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Enterprises",
      "url": "https://apexenterprises.net"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Industrial Housekeeping and Safety Management"
  };

  const useCases = [
    {
      category: "Maximize Safety",
      items: [
        {
          title: "Zero-Incident Cleaning",
          desc: "Specialized chemical handling and high-altitude cleaning protocols designed to prevent accidents in complex manufacturing zones."
        },
        {
          title: "EHS Alignment",
          desc: "Full integration with your Environment, Health, and Safety (EHS) standards, ensuring all cleaning activities meet international safety benchmarks."
        }
      ]
    },
    {
      category: "Improve Productivity",
      items: [
        {
          title: "Shop Floor Optimization",
          desc: "Remove operational friction with 24/7 floor maintenance that ensures a clean, organized, and high-performance production environment."
        },
        {
          title: "Pre-Audit Sanitization",
          desc: "Specific deep-cleaning modules for regulatory audits, ISO certifications, and client inspections to ensure a 'zero-defect' visual standard."
        }
      ]
    },
    {
      category: "Build Facility Resilience",
      items: [
        {
          title: "Chemical Spill Management",
          desc: "Rapid-response protocols for hazardous material containment and remediation, preserving facility integrity and worker health."
        },
        {
          title: "Waste Segregation Intelligence",
          desc: "AI-tracked waste disposal and segregation systems to ensure environmental compliance and reduce disposal costs."
        }
      ]
    }
  ];

  return (
    <>
      <Head
        title="Industrial Housekeeping & Safety Management India | Apex Enterprises"
        description="India's most trusted industrial housekeeping partner. Specialized cleaning solutions for manufacturing plants with 100% safety and EHS compliance."
        keywords="industrial housekeeping india, facility management manufacturing, plant cleaning services, factory maintenance, safety first cleaning, industrial sanitation"
        canonicalPath="/services/industrial-housekeeping"
        structuredData={structuredData}
      />

      <div className="bg-white min-h-screen">
        {/* Hero Section - Refined White Design */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-3xl"></div>

          <div className="container relative">
            <div className="max-w-4xl">
              <div className="flex items-center gap-x-2 eyebrow mb-6">
                <HardHat className="h-4 w-4 text-orange-red" />
                <span>Zero-Incident Facility Management</span>
              </div>
              <h1 className="text-navy mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                The Operational Platform for <span className="text-orange-red">Industrial Excellence</span>
              </h1>
              <p className="text-xl lg:text-2xl text-teal-gray max-w-3xl mb-12 leading-relaxed">
                Maintain peak operational efficiency with India's most trusted plant maintenance partner. Specialized, safety-first solutions for complex environments.
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
                { label: 'Metrics', href: '#metrics' },
                { label: 'Service Modules', href: '#modules' },
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
              <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Plant, Your Future</h2>
              <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                Transform facility maintenance from a cost center into a strategic operational advantage.
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

        {/* Operational Excellence Metrics */}
        <section id="metrics" className="py-24 bg-oat border-y border-border">
          <div className="container">
            <div className="text-center mb-16">
              <h3 className="eyebrow mb-6">Operational Impact</h3>
              <p className="text-2xl font-bold text-navy text-center">Data-driven facility management for modern plants</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Safety Record", value: "Zero" },
                { label: "Client Retention", value: "98%" },
                { label: "Managed Area", value: "15M+" },
                { label: "Trained Staff", value: "5k+" }
              ].map((metric, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-navy mb-2">{metric.value}</div>
                  <div className="eyebrow text-[10px] text-teal-gray">{metric.label}</div>
                  <div className="text-[10px] text-orange-red mt-2 font-bold uppercase tracking-widest">Scale Ready</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Modules - Oat with White Cards */}
        <section id="modules" className="py-24 lg:py-32 bg-oat">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <h3 className="eyebrow mb-6 text-orange-red">Service Modules</h3>
                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions for<br />Safe & Efficient Environments</h2>
              </div>
              <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                Explore All Modules
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Plant Shop Floor", icon: Factory, tag: "Essential" },
                { title: "Hazardous Materials", icon: Droplets, tag: "Specialized" },
                { title: "HVAC & Air Quality", icon: Wind, tag: "New" },
                { title: "High-Altitude Zones", icon: HardHat, tag: "Safety High" },
                { title: "EHS Audit Prep", icon: Shield, tag: "Critical" },
                { title: "Waste Management", icon: Database, tag: null }
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
                  <p className="text-sm text-teal-gray leading-relaxed">Integrated workflows strictly following international EHS and safety protocols.</p>
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
              <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Facility Knowledge</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { type: "Guide", title: "Safety-First: Plant Cleaning Post-Pandemic", link: "/contact" },
                { type: "Webinar", title: "Improving Shop Floor Productivity via EHS", link: "/contact" },
                { type: "Case Study", title: "Zero Incident Record: A 5-Year Journey", link: "/contact" }
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
                { q: "What safety standard do you follow?", a: "We follow OHSAS 18001/ISO 45001 standards. Every site has a dedicated Safety Officer and all staff undergo rigorous monthly training in hazardous material handling and specialized equipment usage." },
                { q: "How do you handle high-altitude cleaning?", a: "We use IRATA-certified rope access techniques and motorized cradles, combined with comprehensive work-at-height permits and fall-arrest systems." },
                { q: "Do you provide customized cleaning schedules?", a: "Yes. We design schedules based on your shift patterns, ensuring no operational downtime while maintaining peak cleanliness standards 24/7." }
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
            <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Elevate Your Operational<br />Standards Today</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading manufacturing plants enhancing efficiency and safety with India's most trusted housekeeping partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                Launch Safety Audit
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