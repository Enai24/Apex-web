'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Building2, TrendingUp, Shield, CheckCircle2, RefreshCw, BarChart, Zap, Award, Users } from 'lucide-react';

/**
 * CustomerStories component
 * 
 * A horizontal slider section featuring customer success stories
 * using the Databricks-inspired design with Apex Enterprises data.
 */

interface Story {
    id: string;
    client: string;
    industry: string;
    metric: string;
    metricLabel: string;
    title: string;
    description: string;
    quote?: string;
    quoteAuthor?: string;
    quotePosition?: string;
    icon: React.ElementType;
}

const stories: Story[] = [
    {
        id: 'eastern-medikit',
        client: 'Eastern Medikit Ltd.',
        industry: 'Healthcare Manufacturing',
        metric: '100%',
        metricLabel: 'security compliance',
        title: 'Enterprise-Wide Security Implementation',
        description: 'Comprehensive security solution for a large manufacturing facility. Deployed trained security personnel across all shifts, implemented advanced access control systems, and established emergency response protocols.',
        quote: "Apex Enterprises transformed our security operations with a solution that not only protects our assets but also integrates seamlessly with our manufacturing processes.",
        quoteAuthor: "Vikram Singh",
        quotePosition: "Chief Operations Officer",
        icon: Shield,
    },
    {
        id: 'mdh-food',
        client: 'M.D.H Ltd.',
        industry: 'Food Processing',
        metric: '30%',
        metricLabel: 'productivity boost',
        title: 'Specialized Workforce Management',
        description: 'End-to-end staffing solution for food processing facility with strict hygiene and safety requirements. Implemented rigorous training programs, created flexible staffing schedules, and established quality control processes.',
        quote: "The specialized workforce Apex provided understands our industry's stringent requirements. Their training and quality control processes are exceptional.",
        quoteAuthor: "Anita Sharma",
        quotePosition: "HR Director",
        icon: TrendingUp,
    },
    {
        id: 'techtronic',
        client: 'Techtronic India Ltd.',
        industry: 'Technology',
        metric: '40%',
        metricLabel: 'cost savings',
        title: 'Integrated Facility Management',
        description: 'Complete facility management including housekeeping, security, and maintenance services for a large campus with multiple buildings. Deployed integrated management system with digital tracking tools.',
        quote: "Apex's integrated approach to facility management has transformed our campus operations, creating a seamless experience for employees and visitors alike.",
        quoteAuthor: "Prakash Mehta",
        quotePosition: "Facilities Director",
        icon: BarChart,
    },
    {
        id: 'global-pharma',
        client: 'Global Pharma Inc.',
        industry: 'Pharmaceuticals',
        metric: '₹1.8Cr',
        metricLabel: 'annual savings',
        title: 'Regulatory Compliance Management',
        description: 'End-to-end compliance management for a multinational pharmaceutical company operating across 8 Indian states. Implemented centralized compliance tracking with automated reporting.',
        quote: "The regulatory landscape in India is challenging, but Apex's solutions have eliminated compliance concerns and allowed us to focus on our core business.",
        quoteAuthor: "Dr. Sunita Patel",
        quotePosition: "Compliance Head",
        icon: Award,
    },
    {
        id: 'tech-mahindra',
        client: 'Tech Mahindra',
        industry: 'IT Services',
        metric: '50K+',
        metricLabel: 'workforce deployed',
        title: 'Pan-India IT Staffing Solution',
        description: 'Contract staffing, IT recruitment, and compliance management across multiple locations. Apex\'s pan-India presence has been crucial for multi-location operations.',
        quote: "Apex's understanding of regional labour laws and commitment to compliance is unmatched across all our locations.",
        quoteAuthor: "Priya Sharma",
        quotePosition: "HR Director",
        icon: Users,
    },
    {
        id: 'bajaj-consumer',
        client: 'Bajaj Consumer Care',
        industry: 'Consumer Goods',
        metric: '6+',
        metricLabel: 'years partnership',
        title: 'Manufacturing Staffing Excellence',
        description: 'Major FMCG company specializing in hair and skin care products. Apex provides manufacturing staffing, payroll, and labor compliance across all manufacturing units.',
        quote: "The compliance expertise that Apex provides gives us peace of mind across all our manufacturing units.",
        quoteAuthor: "Sanjay Mehta",
        quotePosition: "Operations Head",
        icon: CheckCircle2,
    }
];

export default function CustomerStories() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollButtons);
            return () => container.removeEventListener('scroll', checkScrollButtons);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -600 : 600;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-navy py-16 lg:py-[120px] overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col mb-12">
                    <div className="text-center mb-8">
                        <p className="font-mono text-[14px] font-medium uppercase tracking-[0.1em] text-orange-red mb-4">
                            SUCCESS STORIES
                        </p>
                        <h2 className="text-white text-3xl md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] mb-6">
                            Unmatched Excellence in Indian Staffing & Operations
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <p className="text-[#E5E1DA] text-lg max-w-[500px] leading-relaxed">
                            Discover how India's top enterprises achieve operational scale and compliant growth with our AI-powered workforce intelligence.
                        </p>

                        {/* Slider Controls */}
                        <div className="flex gap-4">
                            <button
                                aria-label="Previous story"
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`w-12 h-12 rounded-full border flex items-center justify-center text-white transition-all ${canScrollLeft
                                    ? 'border-[#5D6B6F] hover:border-white cursor-pointer'
                                    : 'border-[#5D6B6F]/30 text-white/30 cursor-not-allowed'
                                    }`}
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <button
                                aria-label="Next story"
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all ${canScrollRight
                                    ? 'bg-orange-red hover:opacity-90 cursor-pointer'
                                    : 'bg-orange-red/30 cursor-not-allowed'
                                    }`}
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stories Horizontal Display */}
                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-8 scrollbar-hide pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory"
                    >
                        {stories.map((story, index) => (
                            <div
                                key={story.id}
                                className="min-w-[85vw] md:min-w-[700px] lg:min-w-[900px] bg-white flex flex-col md:flex-row overflow-hidden shadow-premium group cursor-pointer snap-start"
                            >
                                {/* Left Content Side */}
                                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
                                    <div>
                                        {/* Client & Industry Badge */}
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className="h-12 w-12 rounded-lg bg-oat flex items-center justify-center">
                                                <story.icon className="h-6 w-6 text-orange-red" />
                                            </div>
                                            <div>
                                                <p className="text-navy font-semibold">{story.client}</p>
                                                <p className="text-teal-gray text-sm">{story.industry}</p>
                                            </div>
                                        </div>

                                        {/* Metric */}
                                        <div className="mb-8">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-navy text-[56px] md:text-[72px] font-medium leading-none tracking-tight">
                                                    {story.metric}
                                                </span>
                                                <span className="text-teal-gray text-lg font-normal">
                                                    {story.metricLabel}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-navy text-[24px] md:text-[28px] font-medium leading-[1.2] mb-4">
                                            {story.title}
                                        </h3>

                                        <p className="text-teal-gray text-base leading-relaxed mb-6 max-w-[440px]">
                                            {story.description}
                                        </p>
                                    </div>

                                    <a
                                        href="/portfolio"
                                        className="inline-flex items-center text-link-blue font-semibold hover:underline group/link"
                                    >
                                        See the full story
                                        <ArrowRight className="ml-1 transition-transform group-hover/link:translate-x-1" size={16} />
                                    </a>
                                </div>

                                {/* Right Quote/Image Side */}
                                <div className="w-full md:w-[45%] relative bg-navy overflow-hidden flex items-center justify-center p-8 md:p-12">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                                    <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-orange-red opacity-10 blur-3xl"></div>
                                    <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-oat opacity-10 blur-3xl"></div>

                                    {story.quote && (
                                        <div className="relative z-10 text-center">
                                            <div className="text-orange-red text-6xl font-serif leading-none mb-4">"</div>
                                            <p className="text-white text-lg leading-relaxed mb-6 italic">
                                                {story.quote}
                                            </p>
                                            <div>
                                                <p className="text-white font-semibold">{story.quoteAuthor}</p>
                                                <p className="text-white/60 text-sm">{story.quotePosition}, {story.client}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Link */}
                <div className="mt-12 text-center">
                    <a
                        href="/portfolio"
                        className="inline-flex items-center text-white font-medium hover:text-orange-red transition-colors group"
                    >
                        See all Success Stories
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
