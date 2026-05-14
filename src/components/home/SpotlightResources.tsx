'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { useI18n } from '@/i18n/client';

const SpotlightResources = () => {
    const { translate, translateData } = useI18n();
    const resources = useMemo(() => translateData([
        {
            type: "REPORT",
            title: "India Labor Market Outlook 2026: The AI Workforce Transition",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/2025-09-eb-mittr-building-a-high-performance-data--14.png",
            linkText: "Read now",
            linkHref: "/resources",
        },
        {
            type: "AWARD",
            title: "Apex named a Leader in 2025 Workforce Solutions Grid for Asia-Pacific.",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/2025-11-gartner-mq-dbms-ty-tn-360x188-2x-15.png",
            linkText: "See report",
            linkHref: "/about#awards",
        },
        {
            type: "LEVEL UP YOUR HR SKILLS",
            title: "Future of Work Summit Gurgaon — Learn from India's top CHROs and connect with experts to share success tactics for the AI era.",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/ty-tn-daiwt-360x188-16.png",
            linkText: "Register now",
            linkHref: "/contact",
        },
        {
            type: "EBOOK",
            title: "The Big Book of Indian Labor Compliance (4th Edition)",
            image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1df43dfa-eab5-4753-ba4c-1431675fa885-databricks-com/assets/images/2025-10-eb-big-book-of-data-engineering-4th-ed-ty--17.png",
            linkText: "Read now",
            linkHref: "/resources",
        }
    ], { skipKeys: ['image', 'linkHref'] }), [translateData]);

    return (
        <section className="bg-[#F9F7F2] py-[80px] md:py-[100px] lg:py-[120px]">
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1B292E] tracking-tight">
                        {translate('In the spotlight')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {resources.map((resource, index) => (
                        <div key={index} className="flex flex-col group h-full">
                            <div className="relative aspect-[360/188] w-full mb-6 overflow-hidden rounded-sm shadow-sm ring-1 ring-black/5">
                                <Image
                                    src={resource.image}
                                    alt={resource.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>

                            <div className="flex flex-col flex-grow">
                                <span className="font-mono text-[10px] md:text-[11px] lg:text-[12px] font-bold tracking-[0.1em] text-[#5D6B6F] uppercase mb-3">
                                    {resource.type}
                                </span>

                                <h3 className="text-[16px] md:text-[17px] lg:text-[18px] font-medium text-[#1B292E] leading-[1.4] mb-4 flex-grow line-clamp-3">
                                    {resource.title}
                                </h3>

                                <a
                                    href={resource.linkHref}
                                    className="inline-flex items-center text-[14px] md:text-[15px] font-bold text-[#0060FE] hover:underline group/link"
                                >
                                    {resource.linkText}
                                    <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-20 flex justify-center">
                    <a
                        href="/updates"
                        className="bg-[#1B292E] text-white text-[14px] font-bold py-3 px-8 transition-colors hover:bg-opacity-90 shadow-lg"
                    >
                        {translate('See more resources')}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpotlightResources;
