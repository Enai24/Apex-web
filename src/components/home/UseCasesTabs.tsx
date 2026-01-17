"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface UseCase {
    id: string;
    label: string;
    title: string;
    description: string;
    features: string[];
    image: string;
    ctaText: string;
    secondaryCtaText: string;
}

const useCases: UseCase[] = [
    {
        id: "ai",
        label: "AI Hiring",
        title: "Smarter talent acquisition with Data Intelligence",
        description: "Our AI-powered engine analyzes millions of data points to find the perfect cultural and technical fit. Reduce bias and increase placement speed with our proprietary matching algorithms.",
        features: [
            "Automated resume parsing and skill validation",
            "Predictive candidate success modeling",
            "Seamless integration with major Indian job boards"
        ],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/productscreen-static-real-time-analytics-9.png",
        ctaText: "Learn about AI Matching",
        secondaryCtaText: "Request demo"
    },
    {
        id: "executive",
        label: "Executive Search",
        title: "Discreet leadership placement for the C-Suite",
        description: "Identify and attract top-tier leadership talent. We use a combination of deep industry networking and data-driven headhunting to find leaders who can drive enterprise growth.",
        features: [
            "Rigorous leadership competency mapping",
            "Global talent sourcing for Indian leadership",
            "Comprehensive background and reference checking"
        ],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/productscreen-static-governance-5.png",
        ctaText: "Explore Executive Search",
        secondaryCtaText: ""
    },
    {
        id: "payroll",
        label: "Payroll Services",
        title: "Compliant Indian Payroll Management at Scale",
        description: "Manage end-to-end payroll processing for thousands of employees across 28 Indian states with 100% accuracy and statutory adherence.",
        features: [
            "AI-automated statutory deductions (PF, ESI, Professional Tax)",
            "Multi-state compliant payroll processing",
            "Seamless integration with Indian banking for direct disbursements"
        ],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/productscreen-static-warehousing-6.png",
        ctaText: "Explore Payroll Solutions",
        secondaryCtaText: ""
    },
    {
        id: "compliance",
        label: "Compliance",
        title: "100% Statutory compliance across 28 states",
        description: "Navigate the complex landscape of Indian labor laws effortlessly. We handle EPF, ESI, LWF, and all other regulatory requirements with extreme precision.",
        features: [
            "Real-time compliance monitoring and alerts",
            "Automated filing of monthly returns",
            "Expert legal advisory for labor law updates"
        ],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/productscreen-static-etl_1-7.png",
        ctaText: "View Governance Model",
        secondaryCtaText: ""
    },
    {
        id: "analytics",
        label: "Analytics",
        title: "Data Intelligence for your workforce",
        description: "Turn raw HR data into actionable business intelligence. Monitor attrition rates, hiring costs, and workforce productivity through unified dashboards.",
        features: [
            "Predictive attrition and retention analysis",
            "Real-time cost-to-company (CTC) tracking",
            "Custom workforce productivity reports"
        ],
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/productscreen-static-sharing-8.png",
        ctaText: "Discover AI Insights",
        secondaryCtaText: ""
    }
];

export default function UseCasesTabs() {
    const [activeTab, setActiveTab] = useState(useCases[0]);

    return (
        <section className="bg-white py-[80px] md:py-[120px]">
            <div className="container px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="font-mono text-[14px] font-medium uppercase tracking-[0.1em] text-[#F68B1F] block mb-4">
                        USE CASES
                    </span>
                    <h2 className="text-[#1B292E] text-[36px] md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em]">
                        Unify Your AI Recruitment & HR Strategy
                    </h2>
                </div>

                {/* Custom Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-16 md:mb-24">
                    {useCases.map((useCase) => (
                        <button
                            key={useCase.id}
                            onClick={() => setActiveTab(useCase)}
                            className={`px-5 py-2.5 rounded-full text-[16px] font-medium transition-all duration-300 border ${activeTab.id === useCase.id
                                ? "bg-[#1B292E] border-[#1B292E] text-white"
                                : "bg-[#F9F7F2] border-transparent text-[#1B292E] hover:bg-[#E5E1DA]"
                                }`}
                        >
                            {useCase.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-center min-h-[500px]">
                    {/* Text Content */}
                    <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                        <h3 className="text-[#1B292E] text-[28px] md:text-[32px] font-medium leading-[1.2] mb-6">
                            {activeTab.title}
                        </h3>
                        <p className="text-[#5D6B6F] text-[18px] leading-[1.6] mb-8">
                            {activeTab.description}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {activeTab.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#F68B1F] mt-1 shrink-0" />
                                    <span className="text-[#1B292E] text-[16px] leading-[1.4]">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="bg-[#1B292E] text-white font-semibold py-3 px-6 text-[16px] hover:opacity-90 transition-opacity">
                                {activeTab.ctaText}
                            </button>
                            {activeTab.secondaryCtaText && (
                                <a
                                    href="/contact"
                                    className="text-[#0060FE] font-semibold text-[16px] flex items-center group font-sans"
                                >
                                    {activeTab.secondaryCtaText}
                                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Dynamic Image Preview */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="relative w-full h-full bg-[#F9F7F2] shadow-xl rounded-lg overflow-hidden border border-border">
                            <Image
                                src={activeTab.image}
                                alt={activeTab.title}
                                fill
                                className="object-contain p-4 lg:p-8"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
