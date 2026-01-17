'use client';

import React from 'react';
import Link from 'next/link';
import {
    ChevronRight, ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle2,
    Factory, Server, Building2, ShoppingBag, Truck, Heart, Globe, Microscope, Activity, ShoppingCart, Search
} from 'lucide-react';
import { IndustrySolution } from '../data/industries';
import { SEO } from '../utils/seo';
import Image from 'next/image';

const iconMap: Record<string, React.ElementType> = {
    Shield, Zap, Users, TrendingUp, CheckCircle2, Factory, Server,
    Building2, ShoppingBag, Truck, Heart, Globe, Microscope,
    Activity, ShoppingCart, Search
};

interface Props {
    industry: IndustrySolution;
}

export default function IndustrySolutions({ industry }: Props) {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans">
            <SEO
                title={`${industry.name} Industry Solutions | Apex Enterprises`}
                description={industry.hero.description}
            />

            {/* Hero Section */}
            <section className="relative bg-navy py-16 lg:py-24 border-b border-border overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Image
                        src={industry.hero.image}
                        alt=""
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/80" />
                </div>

                <div className="container mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="font-mono text-sm text-orange-red uppercase tracking-widest mb-4 block">
                            {industry.hero.subtitle}
                        </span>
                        <h1 className="text-white text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-[1.1] mb-6">
                            {industry.hero.title}
                        </h1>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
                            {industry.hero.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="btn-primary">
                                Talk to an Expert
                            </Link>
                            {industry.caseStudyId && (
                                <Link href={`/portfolio#${industry.caseStudyId}`} className="btn-secondary border border-white/20">
                                    View Story
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section - Databricks Style Minimalist Block */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-navy text-3xl md:text-4xl font-medium mb-6">
                                {industry.overview.title}
                            </h2>
                            <p className="text-teal-gray text-lg leading-relaxed">
                                {industry.overview.content}
                            </p>
                        </div>
                        <div className="bg-oat-medium0/20 p-8 lg:p-12 border-l-4 border-orange-red">
                            <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-8">Strategic Benefits</h4>
                            <ul className="space-y-6">
                                {industry.benefits.items.map((benefit, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <CheckCircle2 className="text-orange-red shrink-0" size={24} />
                                        <span className="text-navy font-medium leading-tight">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section - Darker Contrast */}
            <section className="py-20 bg-oat border-y border-border">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-navy text-3xl md:text-4xl font-medium">
                            {industry.challenges.title}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {industry.challenges.items.map((challenge, idx) => (
                            <div key={idx} className="bg-white p-8 shadow-premium border border-border group hover:border-orange-red transition-all">
                                <h4 className="text-navy font-bold uppercase tracking-widest text-xs mb-4 text-orange-red">
                                    {challenge.label}
                                </h4>
                                <p className="text-teal-gray text-sm leading-relaxed">
                                    {challenge.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Grid - High Impact Cards */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-navy text-[32px] md:text-[48px] font-medium leading-tight">
                            {industry.solutions.title}
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {industry.solutions.items.map((solution, idx) => {
                            const Icon = iconMap[solution.iconName] || Shield;
                            return (
                                <div key={idx} className="group flex flex-col">
                                    <div className="h-16 w-16 bg-navy text-white flex items-center justify-center mb-8 group-hover:bg-orange-red transition-colors duration-500">
                                        <Icon size={32} />
                                    </div>
                                    <h3 className="text-navy text-2xl font-medium mb-4 group-hover:text-orange-red transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-teal-gray leading-relaxed mb-6">
                                        {solution.description}
                                    </p>
                                    <Link href="/contact" className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-navy hover:text-orange-red transition-colors">
                                        Learn how it works <ArrowRight size={14} className="ml-2" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Dynamic Branding / Trust Section */}
            <section className="bg-navy py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-white text-3xl font-medium mb-12">
                        Ready to transform your {industry.name.toLowerCase()} operations?
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact" className="bg-orange-red text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
                            Consult with an Expert
                        </Link>
                        <Link href="/industries" className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                            Explore other Industries
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumbs for SEO */}
            <div className="bg-white py-4 border-t border-border">
                <div className="container mx-auto px-6 lg:px-8">
                    <nav className="flex text-xs font-mono uppercase tracking-widest text-teal-gray">
                        <Link href="/" className="hover:text-navy">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/industries" className="hover:text-navy">Industries</Link>
                        <span className="mx-2">/</span>
                        <span className="text-navy font-bold">{industry.name}</span>
                    </nav>
                </div>
            </div>

        </div>
    );
}
