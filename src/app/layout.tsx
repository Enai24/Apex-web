import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import NavbarClient from './navbar-client';
import Footer from '@/components/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'Apex Enterprises | AI-Powered Workforce Solutions in India',
        template: '%s | Apex Enterprises',
    },
    description:
        "India's leading AI-driven workforce solutions provider. Expert staffing, compliance, and payroll services enhanced with cutting-edge AI technology.",
    keywords: [
        'workforce solutions',
        'AI staffing',
        'payroll services India',
        'contract staffing',
        'HR compliance',
        'manpower outsourcing',
    ],
    authors: [{ name: 'Apex Enterprises' }],
    creator: 'Apex Enterprises',
    publisher: 'Apex Enterprises',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://apexenterprises.net'),
    openGraph: {
        title: 'Apex Enterprises | AI-Powered Workforce Solutions in India',
        description:
            "India's leading AI-driven workforce solutions provider. Expert staffing, compliance, and payroll services enhanced with cutting-edge AI technology.",
        url: 'https://apexenterprises.net',
        siteName: 'Apex Enterprises',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Apex Enterprises | AI-Powered Workforce Solutions',
        description:
            "India's leading AI-driven workforce solutions provider.",
    },
    icons: {
        icon: '/logo.png',
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
                <Providers>
                    <div className="min-h-screen flex flex-col">
                        <NavbarClient />
                        <main className="flex-grow flex flex-col">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
