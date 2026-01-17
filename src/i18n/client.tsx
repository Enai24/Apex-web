// i18n/client.tsx
// Client-side internationalization context and provider
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales, defaultLocale, localeNames, type Locale } from './config';

// Import translations statically for static export compatibility
import en from '../../messages/en.json';
import hi from '../../messages/hi.json';

const translations: Record<Locale, typeof en> = {
    en,
    hi,
    // Fallback to English for languages not yet translated
    ta: en,
    te: en,
    kn: en,
    bn: en,
    mr: en,
};

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
    locales: readonly Locale[];
    localeNames: typeof localeNames;
}

const I18nContext = createContext<I18nContextType | null>(null);

const LOCALE_STORAGE_KEY = 'apex-locale';

// Helper function to get nested translation value
function getNestedValue(obj: Record<string, unknown>, path: string): string {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return the key if not found
        }
    }

    return typeof current === 'string' ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load saved locale from localStorage
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
        if (savedLocale && locales.includes(savedLocale)) {
            setLocaleState(savedLocale);
        } else {
            // Try to detect browser language
            const browserLang = navigator.language.split('-')[0] as Locale;
            if (locales.includes(browserLang)) {
                setLocaleState(browserLang);
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        if (typeof window !== 'undefined') {
            localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
            // Update HTML lang attribute
            document.documentElement.lang = newLocale;
        }
    };

    const t = (key: string): string => {
        const messages = translations[locale] || translations[defaultLocale];
        return getNestedValue(messages as unknown as Record<string, unknown>, key);
    };

    // Always provide context, use default locale before mounting to prevent hydration issues
    return (
        <I18nContext.Provider value={{ locale, setLocale, t, locales, localeNames }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}

export function useTranslation() {
    const { t, locale } = useI18n();
    return { t, locale };
}
