import React from 'react';
import Head from '@/components/layout/Head';
import { Target, Users, Shield, CheckCircle, ArrowRight, Briefcase, Sparkles, Zap, Award, Factory, HardHat, Cpu, ChevronRight, TrendingUp, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function SpecialisedHiring() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Specialised Hiring & Industry-Specific Recruitment India",
        "description": "Premium specialised hiring services for niche industries in India. AI-powered talent matching for Pharmaceuticals, Manufacturing, IT, and BFSI.",
        "provider": {
            "@type": "Organization",
            "name": "Apex Enterprises",
            "url": "https://apexenterprises.net"
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "serviceType": "Specialised Industry Recruitment"
    };

    const useCases = [
        {
            category: "Accelerate Growth",
            items: [
                {
                    title: "IT & Emerging Tech",
                    desc: "Source AI/ML engineers, cloud architects, and cybersecurity experts for global tech hubs and local giants."
                },
                {
                    title: "BFSI & FinTech",
                    desc: "Hire high-stakes roles in risk analysis, compliance, and digital banking transformation."
                }
            ]
        },
        {
            category: "Optimize Operations",
            items: [
                {
                    title: "Manufacturing Excellence",
                    desc: "Recruit plant heads, industrial engineers, and supply chain specialists to lead modern factory operations."
                },
                {
                    title: "Pharma & Life Sciences",
                    desc: "Find skilled scientists, regulatory consultants, and production specialists for regulated global markets."
                }
            ]
        },
        {
            category: "Build Critical Capabilities",
            items: [
                {
                    title: "Energy & Infrastructure",
                    desc: "Identify project leads and safety experts for large-scale renewable and infrastructure commitments."
                },
                {
                    title: "Healthcare Systems",
                    desc: "Staff hospital networks with administrative pros, medical coders, and specialized care professionals."
                }
            ]
        }
    ];

    return (
        <>
            <Head
                title="Specialised Hiring & Industry Recruitment India | Apex Enterprises"
                description="Expert specialised hiring for niche industries. Premium recruitment for Pharma, IT, Manufacturing, and BFSI with AI-powered talent matching."
                keywords="specialised hiring india, niche industry recruitment, pharma recruitment, IT staffing, manufacturing recruitment, BFSI hiring"
                canonicalPath="/services/specialised-hiring"
                structuredData={structuredData}
            />

            <div className="bg-white min-h-screen">
                {/* Hero Section - Refined White Design */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-3xl"></div>

                    <div className="container relative">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-x-2 eyebrow mb-6">
                                <Target className="h-4 w-4 text-orange-red" />
                                <span>Talent Intelligence Platform</span>
                            </div>
                            <h1 className="text-navy mb-8 text-hxl max-w-4xl leading-[1.05] tracking-tight">
                                The Recruitment Platform for <span className="text-orange-red">Specialised Hiring</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-teal-gray max-w-3xl mb-12 leading-relaxed">
                                Bring the power of AI and deep industry domain expertise to every critical hire. Find the specialists who will drive your next wave of growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link href="/contact" className="btn-primary w-full sm:w-auto px-8 py-4">
                                    Let's Chat
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <a href="#use-cases" className="btn-secondary w-full sm:w-auto px-8 py-4">
                                    Explore Industries
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
                                { label: 'Industries', href: '#use-cases' },
                                { label: 'Advantage', href: '#advantage' },
                                { label: 'Hiring Modules', href: '#modules' },
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
                            <h3 className="eyebrow mb-6 text-orange-red">Industries</h3>
                            <h2 className="text-navy text-4xl lg:text-5xl mb-6">Your Future, Powered by Talent</h2>
                            <p className="text-xl text-teal-gray max-w-2xl mx-auto leading-relaxed">
                                Precision recruitment for the industries driving the global economy.
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

                {/* The Apex Advantage - Solid Navy Accent Section */}
                <section id="advantage" className="py-24 bg-navy text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-red/10 rounded-full blur-[100px] -translate-y-1/2"></div>
                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="eyebrow text-orange-red mb-6">Advantage</h3>
                                <h2 className="text-4xl lg:text-5xl mb-8 leading-tight font-bold">Why Leading GCCs & Enterprises Partner with Apex</h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "AI Skill Mapper", desc: "Our neural matching engine predicts candidate success based on 150+ domain-specific parameters." },
                                        { title: "Domain Experts", desc: "Recruiters with deep industry tenure who understand the nuance of critical technical roles." },
                                        { title: "Expedited Search", desc: "Average time-to-hire of 18 days for specialist roles, 60% faster than the industry norm." }
                                    ].map((adv, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle className="h-6 w-6 text-orange-red flex-shrink-0" />
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                                                <p className="text-white/60 leading-relaxed">{adv.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-8 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md">
                                <h3 className="text-2xl font-bold mb-8">Specialist Placement Impact</h3>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-4xl font-bold text-orange-red mb-2">94%</div>
                                        <div className="text-xs uppercase tracking-widest text-white/50">Retention Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-orange-red mb-2">8k+</div>
                                        <div className="text-xs uppercase tracking-widest text-white/50">Specialists Placed</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-orange-red mb-2">150+</div>
                                        <div className="text-xs uppercase tracking-widest text-white/50">Skill Parameters</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-orange-red mb-2">90 Days</div>
                                        <div className="text-xs uppercase tracking-widest text-white/50">Success Guarantee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hiring Modules - Oat with White Cards */}
                <section id="modules" className="py-24 lg:py-32 bg-oat">
                    <div className="container">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="max-w-2xl">
                                <h3 className="eyebrow mb-6 text-orange-red">Hiring Modules</h3>
                                <h2 className="text-navy text-4xl lg:text-5xl leading-tight">Apex-Developed Solutions for<br />Precision Recruitment</h2>
                            </div>
                            <Link href="/contact" className="btn-secondary bg-white border-navy text-navy hover:bg-navy hover:text-white transition-all">
                                Explore All Modules
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "AI Skill Mapper", icon: Cpu, tag: "Featured" },
                                { title: "Executive Search", icon: Briefcase, tag: "New" },
                                { title: "Competency Suite", icon: Target, tag: null },
                                { title: "Onboarding Flow", icon: Zap, tag: null }
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
                                    <p className="text-sm text-teal-gray leading-relaxed">Proprietary hiring workflows driven by real-time talent market intelligence.</p>
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
                            <h2 className="text-navy text-4xl leading-tight font-bold">Deepen Your Hiring Expertise</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { type: "Guide", title: "Sourcing Niche Talent in India: The 2026 Playbook", link: "/contact" },
                                { type: "Webinar", title: "Reducing Time-to-Hire for GCC Technical Roles", link: "/contact" },
                                { type: "Case Study", title: "Scaling a FinTech's Engineering Team by 10x", link: "/contact" }
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
                                { q: "What is your average time-to-hire for specialists?", a: "For niche technical and leadership roles, our average time-to-hire is 18-24 days, significantly lower than the industry average of 45+ days." },
                                { q: "Do you handle executive search as well?", a: "Yes. Our executive search division focuses on VP and C-Suite placements for manufacturing, IT, and pharmaceutical giants." },
                                { q: "How do you verify technical competency?", a: "We use a multi-stage approach combining our AI mapping technology with peer-level technical interviews by domain experts." }
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
                        <h2 className="text-4xl lg:text-7xl text-white mb-8 leading-[1.05] font-bold">Find Your Next<br />Specialist Today</h2>
                        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join leading enterprises securing elite talent with India's most precise specialised recruitment partner.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="btn-primary px-12 py-6 text-lg font-bold">
                                Start Hiring
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
