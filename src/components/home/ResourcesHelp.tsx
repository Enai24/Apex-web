import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * ResourcesHelp component - Clones the "More than meets the AI" section 
 * with two large interactive panels for "Get help" and "See what's new".
 */
export default function ResourcesHelp() {
    return (
        <section className="bg-white py-20 md:py-[120px]">
            <div className="container mx-auto px-4 md:px-8 max-w-[1440px]">
                {/* Eyebrow & Headline */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="font-mono text-[14px] font-bold tracking-[0.1em] uppercase text-[#F68B1F] mb-4">
                        Resources
                    </p>
                    <h2 className="text-[#1B292E] text-[32px] md:text-[48px] font-medium leading-[1.1] mb-8">
                        More than meets the AI
                    </h2>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-x-8">

                    {/* Get Help Panel */}
                    <div className="bg-[#1B292E] p-10 md:p-[60px] flex flex-col min-h-[480px] rounded-sm shadow-2xl">
                        <h3 className="text-white text-[28px] md:text-[32px] font-medium mb-4">
                            Get help
                        </h3>
                        <p className="text-[#E5E1DA] text-[18px] mb-12 opacity-80">
                            Everything you need to succeed with Apex workforce solutions
                        </p>

                        <div className="mt-auto space-y-0">
                            <ResourceLink text="Customer Support" href="/contact" />
                            <ResourceLink text="HR Training" href="/services" />
                            <ResourceLink text="Employer Community" href="/partners" borderBottom={false} />
                        </div>
                    </div>

                    {/* See What's New Panel */}
                    <div className="bg-[#1B292E] p-10 md:p-[60px] flex flex-col min-h-[480px] rounded-sm shadow-2xl">
                        <h3 className="text-white text-[28px] md:text-[32px] font-medium mb-4">
                            See what’s new
                        </h3>
                        <p className="text-[#E5E1DA] text-[18px] mb-12 opacity-80">
                            Our latest announcements, expert analyses and upcoming events
                        </p>

                        <div className="mt-auto space-y-0">
                            <ResourceLink text="Apex Blog" href="/updates" />
                            <ResourceLink text="Market News" href="/updates" />
                            <ResourceLink text="Industry Events" href="/updates" borderBottom={false} />
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
