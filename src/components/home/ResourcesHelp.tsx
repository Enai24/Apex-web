'use client';

import React, { useMemo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/i18n/client';

/**
 * ResourcesHelp component - Clones the "More than meets the AI" section 
 * with two large interactive panels for "Get help" and "See what's new".
 */
export default function ResourcesHelp() {
    const { translate, translateData } = useI18n();
    const helpLinks = useMemo(
        () => translateData([
            { text: 'Customer Support', href: '/contact' },
            { text: 'HR Training', href: '/services' },
            { text: 'Employer Community', href: '/partners' }
        ], { skipKeys: ['href'] }),
        [translateData]
    );
    const newsLinks = useMemo(
        () => translateData([
            { text: 'Apex Blog', href: '/updates' },
            { text: 'Market News', href: '/updates' },
            { text: 'Industry Events', href: '/updates' }
        ], { skipKeys: ['href'] }),
        [translateData]
    );

    return (
        <section className="bg-white py-20 md:py-[120px]">
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
                {/* Eyebrow & Headline */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="font-mono text-[14px] font-bold tracking-[0.1em] uppercase text-[#F68B1F] mb-4">
                        {translate('Resources')}
                    </p>
                    <h2 className="text-[#1B292E] text-[32px] md:text-[48px] font-medium leading-[1.1] mb-8">
                        {translate('More than meets the AI')}
                    </h2>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-8">

                    {/* Get Help Panel */}
                    <div className="bg-[#1B292E] p-10 md:p-[60px] flex flex-col min-h-[480px] rounded-sm shadow-2xl">
                        <h3 className="text-white text-[28px] md:text-[32px] font-medium mb-4">
                            {translate('Get help')}
                        </h3>
                        <p className="text-[#E5E1DA] text-[18px] mb-12 opacity-80">
                            {translate('Everything you need to succeed with Apex workforce solutions')}
                        </p>

                        <div className="mt-auto space-y-0">
                            {helpLinks.map((link, index) => (
                                <ResourceLink
                                    key={link.href}
                                    text={link.text}
                                    href={link.href}
                                    borderBottom={index !== helpLinks.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* See What's New Panel */}
                    <div className="bg-[#1B292E] p-10 md:p-[60px] flex flex-col min-h-[480px] rounded-sm shadow-2xl">
                        <h3 className="text-white text-[28px] md:text-[32px] font-medium mb-4">
                            {translate('See what’s new')}
                        </h3>
                        <p className="text-[#E5E1DA] text-[18px] mb-12 opacity-80">
                            {translate('Our latest announcements, expert analyses and upcoming events')}
                        </p>

                        <div className="mt-auto space-y-0">
                            {newsLinks.map((link, index) => (
                                <ResourceLink
                                    key={`${link.href}-${link.text}`}
                                    text={link.text}
                                    href={link.href}
                                    borderBottom={index !== newsLinks.length - 1}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/**
 * Sub-component for resource links inside panels
 */
function ResourceLink({ text, href, borderBottom = true }: { text: string; href: string; borderBottom?: boolean }) {
    return (
        <a
            href={href}
            className={`group flex items-center justify-between py-5 border-t border-[#F68B1F]/30 hover:bg-white/5 transition-colors duration-300 ${!borderBottom ? 'border-b border-[#F68B1F]/30' : ''}`}
        >
            <span className="text-white text-[18px] font-medium transition-transform duration-300 group-hover:translate-x-1">
                {text}
            </span>
            <ArrowUpRight
                className="text-[#F68B1F] w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={2.5}
            />
        </a>
    );
}
