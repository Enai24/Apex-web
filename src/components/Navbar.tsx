'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Use Next.js Link
import { usePathname } from 'next/navigation';
import { Search, Globe, ChevronDown, Menu as MenuIcon, X, ArrowRight, Check } from 'lucide-react';
import { useI18n } from '@/i18n/client';
import type { Locale } from '@/i18n/config';

/**
 * Databricks-Style Global Navbar
 * Refined to match exact specification provided by user.
 * Features: Fixed 64px height, hover indicators, global actions, i18n support.
 */

interface DropdownItem {
    name: string;
    href: string;
}

interface NavItem {
    name: string;
    href: string;
    dropdown?: DropdownItem[];
}

// Navigation structure with translation keys
const getNavigation = (t: (key: string) => string): NavItem[] => [
    {
        name: t('nav.services'),
        href: '/services',
        dropdown: [
            { name: t('nav.contractStaffing'), href: '/services/contract-staffing' },
            { name: t('nav.payrollCompliance'), href: '/services/payroll-compliance' },
            { name: t('nav.industrialHousekeeping'), href: '/services/industrial-housekeeping' },
            { name: t('nav.labourLawAdvisory'), href: '/services/labour-law-advisory' },
            { name: t('nav.specializedHiring'), href: '/services/specialised-hiring' },
        ],
    },
    {
        name: t('nav.aiSolutions'),
        href: '/ai-workforce-solutions',
        dropdown: [
            { name: t('nav.aiResumeScreening'), href: '/ai-resume-screening' },
            { name: t('nav.talentMatching'), href: '/ai-workforce-solutions/ai-talent-matching' },
            { name: t('nav.predictiveAnalytics'), href: '/ai-workforce-solutions/predictive-analytics' },
            { name: t('nav.automatedCompliance'), href: '/ai-workforce-solutions/automated-compliance' },
            { name: t('nav.aiVoiceAgent'), href: '/ai-voice-connect' },
        ],
    },
    { name: t('nav.industries'), href: '/industries' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.careers'), href: '/careers' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const { locale, setLocale, locales, localeNames, t } = useI18n();

    // Get translated navigation items
    const navigation = getNavigation(t);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    const handleMouseEnter = (name: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#E5E1DA] flex flex-col font-sans">
            {/* Top Utility Bar */}
            <div className="bg-[#F9F7F4] border-b border-[#E5E1DA] h-8 hidden md:flex items-center">
                <div className="container mx-auto px-4 md:px-8 xl:px-10 flex justify-between items-center w-full max-w-[1440px]">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#1B292E]/70 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            ISO 9001:2015 Certified
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#1B292E]/70 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            NAPS Certified
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#1B292E]/70 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            MSME Registered
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 text-[12px] font-medium text-[#1B292E]">
                        <a href="tel:+9101242340139" className="hover:text-[#EE3D2C] transition-colors flex items-center gap-1">
                            +91 0124 2340139
                        </a>
                        <span className="text-[#E5E1DA]">|</span>
                        <a href="mailto:mail@apexenterprises.net" className="hover:text-[#EE3D2C] transition-colors">
                            mail@apexenterprises.net
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-[64px] flex items-center">
                <div className="container mx-auto px-4 md:px-8 xl:px-10 flex items-center justify-between w-full max-w-[1440px]">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center mr-12 gap-3 group">
                            <img
                                src="/logo.png"
                                alt="Apex Enterprises"
                                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="flex flex-col justify-center">
                                <span className="text-[18px] font-bold text-[#F68B1F] leading-none tracking-tight">APEX</span>
                                <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B292E] mt-0.5 font-extrabold">Enterprises</span>
                                <span className="text-[7px] font-bold text-[#1B292E]/60 tracking-widest mt-1">EST. 2003</span>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-0">
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group h-[64px] flex items-center"
                                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.dropdown ? (
                                        <button className="flex items-center text-[16px] font-medium text-[#1B292E] px-5 py-2 hover:text-[#EE3D2C] transition-colors duration-200">
                                            {item.name}
                                            <ChevronDown className={`ml-1.5 h-3.5 w-3.5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <a href={item.href} className="text-[16px] font-medium text-[#1B292E] px-5 py-2 hover:text-[#EE3D2C] transition-colors duration-200">
                                            {item.name}
                                        </a>
                                    )}

                                    {/* Visual indicator for active/hover state line */}
                                    <div className={`absolute bottom-0 left-0 w-full h-[3px] transition-all duration-200 ${pathname === item.href || (item.dropdown && activeDropdown === item.name) || (item.href !== '/' && pathname.startsWith(item.href))
                                        ? 'bg-[#1B292E]'
                                        : 'bg-transparent group-hover:bg-[#1B292E]'
                                        }`}></div>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && activeDropdown === item.name && (
                                        <div
                                            className="absolute top-[64px] left-0 w-64 bg-white border border-[#E5E1DA] shadow-lg animate-in fade-in zoom-in-95 duration-200 z-[110]"
                                            onMouseEnter={() => handleMouseEnter(item.name)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <div className="py-2">
                                                {item.dropdown.map((child) => (
                                                    <a
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`block px-5 py-3 text-[14px] font-medium transition-colors ${pathname === child.href
                                                            ? 'text-[#EE3D2C] bg-[#F9F7F2]'
                                                            : 'text-[#1B292E] hover:text-[#EE3D2C] hover:bg-[#F9F7F2]'
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4 md:space-x-6">
                        <div className="hidden lg:flex items-center space-x-6">
                            <button className="text-[#1B292E] hover:text-[#EE3D2C] transition-colors p-1" aria-label="Search">
                                <Search size={20} strokeWidth={2} />
                            </button>

                            {/* Language Selector */}
                            <div
                                className="relative group flex items-center h-[64px]"
                                onMouseEnter={() => handleMouseEnter('language')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className="flex items-center text-[#1B292E] hover:text-[#EE3D2C] transition-colors p-1 gap-1" aria-label="Language Selector">
                                    <Globe size={20} strokeWidth={2} />
                                    <ChevronDown className={`h-3 w-3 transition-transform ${activeDropdown === 'language' ? 'rotate-180' : ''}`} />
                                </button>

                                {activeDropdown === 'language' && (
                                    <div
                                        className="absolute top-[64px] right-0 w-52 bg-white border border-[#E5E1DA] shadow-lg animate-in fade-in zoom-in-95 duration-200 z-[110]"
                                        onMouseEnter={() => handleMouseEnter('language')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="py-2">
                                            {locales.map((loc) => {
                                                const langInfo = localeNames[loc];
                                                const isActive = locale === loc;
                                                return (
                                                    <button
                                                        key={loc}
                                                        className={`w-full text-left px-5 py-2.5 text-[14px] font-medium transition-colors flex justify-between items-center ${isActive
                                                            ? 'text-[#EE3D2C] bg-[#F9F7F2]'
                                                            : 'text-[#1B292E] hover:text-[#EE3D2C] hover:bg-[#F9F7F2]'
                                                            }`}
                                                        onClick={() => {
                                                            setLocale(loc);
                                                            setActiveDropdown(null);
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            {isActive && <Check size={14} className="text-[#EE3D2C]" />}
                                                            <span>{langInfo.name}</span>
                                                        </div>
                                                        <span className="text-[12px] text-[#5a6f77] font-normal">{langInfo.native}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a href="/contact" className="text-[16px] font-medium text-[#1B292E] hover:text-[#EE3D2C] transition-colors">
                                {t('nav.contact')}
                            </a>
                        </div>

                        <a
                            href="/contact"
                            className="bg-[#EE3D2C] text-white text-[16px] font-semibold px-5 py-2.5 rounded-[4px] hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            {t('common.getStarted')}
                            <ArrowRight size={16} />
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-[#1B292E]"
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-[#E5E1DA] shadow-lg animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[calc(100vh-100%)]">
                    <div className="flex flex-col p-4">
                        {navigation.map((item) => (
                            <div key={item.name} className="flex flex-col border-b border-[#F9F7F2] last:border-0">
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                            className="flex items-center justify-between py-4 px-4 text-[#1B292E] font-medium"
                                        >
                                            {item.name}
                                            <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {activeDropdown === item.name && (
                                            <div className="bg-[#F9F7F2] py-2 px-8 flex flex-col gap-3 pb-4">
                                                {item.dropdown.map((child) => (
                                                    <a
                                                        key={child.href}
                                                        href={child.href}
                                                        className="text-[14px] text-[#1B292E] font-medium py-1"
                                                    >
                                                        {child.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="py-4 px-4 text-[#1B292E] font-medium"
                                    >
                                        {item.name}
                                    </a>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col mt-4 space-y-4 px-4 pb-6">
                            <a href="/contact" className="text-[#1B292E] font-medium">Contact Us</a>

                            <div className="pt-2 border-t border-[#F9F7F2]">
                                <p className="text-[12px] uppercase tracking-wider text-[#5a6f77] font-bold mb-3 px-1">Select Language</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {locales.map((loc) => {
                                        const langInfo = localeNames[loc];
                                        const isActive = locale === loc;
                                        return (
                                            <button
                                                key={loc}
                                                className={`text-left py-2 px-3 text-[14px] font-medium rounded-sm flex items-center gap-2 ${isActive
                                                    ? 'text-[#EE3D2C] bg-[#F9F7F2]'
                                                    : 'text-[#1B292E] hover:bg-[#F9F7F2]'
                                                    }`}
                                                onClick={() => setLocale(loc)}
                                            >
                                                {isActive && <Check size={12} />}
                                                {langInfo.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="flex items-center space-x-6 pt-4 border-t border-[#F9F7F2]">
                                <Search size={22} className="text-[#1B292E]" />
                                <Globe size={22} className="text-[#1B292E]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}