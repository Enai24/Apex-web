import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PlatformIntro = () => {
    const features = [
        {
            icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/svgs/icon-succeed-with-ai-16.svg",
            title: "Succeed with AI",
            description: "Scale your workforce with AI-driven talent matching that reduces time-to-hire by 40%."
        },
        {
            icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/svgs/icon-democratize-insights-17.svg",
            title: "Democratize insights",
            description: "Empower your HR leadership with real-time data on labor market trends and internal performance."
        },
        {
            icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/svgs/icon-drive-down-costs-18.svg",
            title: "Drive down costs",
            description: "Gain efficiency through unified payroll, compliance, and automated recruitment workflows."
        }
    ];

    return (
        <section className="bg-[#F9F7F2] py-20 md:py-[120px]">
            <div className="max-w-[1440px] mx-auto px-6 md:px-8">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="font-mono text-[14px] font-medium tracking-[0.1em] text-[#EE3D2C] uppercase mb-4 block">
                        PLATFORM
                    </span>
                    <h2 className="font-sans text-[40px] md:text-[48px] leading-[1.1] font-medium text-[#1B292E] mb-6 tracking-[-0.02em]">
                        India's Smartest AI-Powered<br />Workforce Intelligence Platform
                    </h2>
                    <p className="font-sans text-[18px] leading-[1.6] text-[#5D6B6F] max-w-[600px] mx-auto">
                        Apex integrates advanced AI with 20+ years of Indian staffing expertise to help you hire, manage, and scale with absolute precision across 28 states.
                    </p>
                </div>

                {/* 3-Column Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="mb-6 h-[64px] flex items-center">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={64}
                                    height={64}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="font-sans text-[24px] md:text-[28px] font-medium text-[#1B292E] mb-4 tracking-[-0.01em]">
                                {feature.title}
                            </h3>
                            <p className="font-sans text-[18px] leading-[1.6] text-[#5D6B6F]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
                    <a
                        href="/services"
                        className="bg-[#1B292E] text-white font-sans text-[16px] font-semibold px-8 py-3.5 hover:opacity-90 transition-opacity"
                    >
                        Explore the platform
                    </a>
                    <a
                        href="/contact"
                        className="text-[#0060FE] font-sans text-[16px] font-semibold flex items-center group"
                    >
                        Schedule a demo
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PlatformIntro;
