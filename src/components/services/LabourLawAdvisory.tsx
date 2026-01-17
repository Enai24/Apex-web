import React from 'react';
import Head from '@/components/layout/Head';
import { Scale, Shield, FileText, CheckCircle, ArrowRight, TrendingUp, Lock, ChevronRight, Zap, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function LabourLawAdvisory() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Labour Law Advisory & Compliance Services India",
        "description": "Comprehensive labour law advisory and statutory compliance services for enterprises in India. Expert guidance on CLRA, EPF, ESI, Shops & Establishment Act.",
        "provider": {
            "@type": "Organization",
            "name": "Apex Enterprises",
            "url": "https://apexenterprises.net"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "serviceType": "Labour Law Compliance and Advisory Services"
    };

    const useCases = [
        {
            category: "Mitigate Risk",
            items: [
                {
                    title: "CLRA Intelligence",
                    desc: "Complete Contract Labour (Regulation & Abolition) Act management including license acquisition, contractor compliance audits, and real-time register digitization."
                },
                {
                    title: "Factory Act Compliance",
                    desc: "End-to-end Factories Act adherence including safety audits, licensing, statutory inspections, and hazard management."
                }
            ]
        },
        {
            category: "Ensure Statutory Precision",
            items: [
                {
                    title: "EPF & ESI Advisory",
                    desc: "Strategic guidance on Provident Fund and Employee State Insurance with dispute resolution support and challan automation."
                },
                {
                    title: "Shops & Establishment",
                    desc: "State-wise registration and compliance for the Shops & Establishment Act with automated renewal tracking and penalty alerts."
                }
            ]
        },
        {
            category: "Build Operational Resilience",
            items: [
                {
                    title: "Industrial Disputes",
                    desc: "Expert representation and advisory for industrial disputes, standing orders, settlement negotiations, and tribunal appearances."
                },
                {
                    title: "Minimum Wages Intelligence",
                    desc: "Real-time tracking of state-wise minimum wage revisions, automated payroll adjustments, and compliance gap analysis."
                }
            ]
        }
    ];

    return (
        <>
            <Head
                title="Labour Law Advisory & Compliance Services India | Apex Enterprises"
                description="Expert labour law advisory and compliance services in India. Comprehensive guidance on CLRA, Shops & Establishment Act, EPF, ESI, and all statutory requirements."
                keywords="labour law advisory india, CLRA compliance, shops establishment act, EPF ESI compliance, statutory compliance services, labour law consultants india"
                canonicalPath="/services/labour-law-advisory"
                structuredData={structuredData}
            />

            <div className="bg-white min-h-screen">
                {/* Hero Section - Refined White Design */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-3xl"></div>

                    <div className="container relative">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-x-2 eyebrow mb-6">
                                <Scale className="h-4 w-4 text-orange-red" />
                                <span>Statutory Intelligence Platform</span>
                            </div>
                            <h1 className="text-navy mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                                The Workforce Intelligence Platform for <span className="text-orange-red">Labour Compliance</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-teal-gray max-w-3xl mb-12 leading-relaxed">
                                Bring the power of AI and deep domain expertise to every statutory obligation in your workforce. Transform complexity into strategic advantage.
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
                            <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Compliance, Your Future</h2>
                            <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                                Leverage AI-driven insights to transform statutory obligations into strategic advantages.
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
                            <p className="text-2xl font-bold text-navy">500+ enterprises rely on Apex for statutory compliance</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 items-center grayscale opacity-70">
                            {['Fortune 500 GCCs', 'Leading MNCs', 'Indian Conglomerates', 'Tech Unicorns', 'Manufacturing Giants', 'BFSI Leaders'].map((client, i) => (
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
                                <h3 className="eyebrow mb-6 text-orange-red">Solution Modules</h3>
                                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions to Deliver<br />Outcomes That Matter</h2>
                            </div>
                            <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                                Explore All Modules
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "CLRA License Manager", icon: FileText, tag: "Featured" },
                                { title: "EPF/ESI Automation", icon: Shield, tag: "New" },
                                { title: "Wage Intelligence", icon: TrendingUp, tag: null },
                                { title: "Audit Readiness Suite", icon: Lock, tag: null }
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
                                    <p className="text-sm text-teal-gray leading-relaxed">Automated compliance workflows strictly following latest regulatory amendments.</p>
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
                            <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Compliance Knowledge</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { type: "eBook", title: "The Complete Guide to Labour Law Compliance in India", link: "/contact" },
                                { type: "Webinar", title: "CLRA 2026: What Every HR Leader Needs to Know", link: "/contact" },
                                { type: "Whitepaper", title: "AI in Statutory Compliance: The Future of HR Tech", link: "/contact" }
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
                                { q: "What labour laws does Apex cover?", a: "Apex provides advisory for 45+ central and state labour laws including CLRA, Factories Act, EPF, ESI, Shops & Establishment, Minimum Wages, Payment of Bonus, and all state-specific Acts." },
                                { q: "How does Apex ensure 100% compliance?", a: "Our AI-powered platform continuously monitors 400+ regulatory amendments, triggers proactive alerts, and automates filing workflows to ensure zero-gap compliance." },
                                { q: "Do you provide representation during labour inspections?", a: "Yes. Our legal team provides end-to-end support during inspections, audits, and tribunal proceedings, including documentation preparation and on-ground representation." }
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
                        <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Ready to Transform Your<br />Compliance Operations?</h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join leading enterprises leveraging Apex for AI-powered, zero-risk labour law compliance.
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
