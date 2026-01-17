"use client";

import React from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/client";

const logos = [
    { name: "Reliance Industries", src: "https://www.google.com/s2/favicons?domain=ril.com&sz=128" },
    { name: "TCS", src: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128" },
    { name: "Infosys", src: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128" },
    { name: "Wipro", src: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128" },
    { name: "HDFC Bank", src: "https://www.google.com/s2/favicons?domain=hdfcbank.com&sz=128" },
];

export default function LogoTicker() {
    const { translate } = useI18n();

    return (
        <section className="py-12 bg-white border-y border-border overflow-hidden">
            <div className="container mx-auto px-6">
                <p className="font-mono text-[12px] font-bold text-[#5D6B6F] uppercase tracking-[0.2em] text-center mb-10 opacity-70">
                    {translate("Trusted by India's biggest enterprises")}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {logos.map((logo) => (
                        <div key={logo.name} className="relative h-8 md:h-10 w-32 md:w-40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-100">
                            <Image
                                src={logo.src}
                                alt={translate('{logo} logo - Apex Enterprises Client', { logo: logo.name })}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
