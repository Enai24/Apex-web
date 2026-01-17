// i18n/client.tsx
// Client-side internationalization context and provider
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { locales, defaultLocale, localeNames, type Locale } from './config';

// Import translations statically for static export compatibility
import en from '../../messages/en.json';
import hi from '../../messages/hi.json';
import ta from '../../messages/ta.json';
import te from '../../messages/te.json';
import kn from '../../messages/kn.json';
import bn from '../../messages/bn.json';
import mr from '../../messages/mr.json';

const translations: Record<Locale, typeof en> = {
    en,
    hi,
    ta,
    te,
    kn,
    bn,
    mr,
};

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, vars?: Record<string, string | number>) => string;
    translate: (text: string, vars?: Record<string, string | number>) => string;
    translateData: <T>(data: T, options?: { skipKeys?: string[] }) => T;
    dictionary: Record<string, string>;
    locales: readonly Locale[];
    localeNames: typeof localeNames;
}

const I18nContext = createContext<I18nContextType | null>(null);

const LOCALE_STORAGE_KEY = 'apex-locale';

// Helper function to get nested translation value
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
    const keys = path.split('.');
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === 'object' && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path; // Return the key if not found
        }
    }

    return current ?? path;
}

function interpolateText(text: string, vars?: Record<string, string | number>): string {
    if (!vars) return text;
    return text.replace(/\{(\w+)\}/g, (match, key) => {
        if (Object.prototype.hasOwnProperty.call(vars, key)) {
            return String(vars[key]);
        }
        return match;
    });
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale);
    const [mounted, setMounted] = useState(false);
    const messages = translations[locale] || translations[defaultLocale];
    const dictionary = (messages as unknown as { dictionary?: Record<string, string> }).dictionary || {};

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

    const t = (key: string, vars?: Record<string, string | number>): string => {
        const value = getNestedValue(messages as unknown as Record<string, unknown>, key);
        const text = typeof value === 'string' ? value : key;
        return interpolateText(text, vars);
    };

    const translate = (text: string, vars?: Record<string, string | number>): string => {
        const translated = Object.prototype.hasOwnProperty.call(dictionary, text)
            ? dictionary[text]
            : text;
        return interpolateText(translated, vars);
    };

    const defaultSkipKeys = new Set([
        'id',
        'iconName',
        'image',
        'href',
        'url',
        'slug',
        'caseStudyId',
        'candidateId',
    ]);

    const translateData = <T,>(data: T, options?: { skipKeys?: string[] }): T => {
        const skipKeys = new Set([...defaultSkipKeys, ...(options?.skipKeys ?? [])]);

        const walk = (value: unknown): unknown => {
            if (typeof value === 'string') {
                return translate(value);
            }
            if (Array.isArray(value)) {
                return value.map((item) => walk(item));
            }
            if (value && typeof value === 'object') {
                const entries = Object.entries(value as Record<string, unknown>);
                return entries.reduce<Record<string, unknown>>((acc, [key, val]) => {
                    if (skipKeys.has(key)) {
                        acc[key] = val;
                    } else {
                        acc[key] = walk(val);
                    }
                    return acc;
                }, {});
            }
            return value;
        };

        return walk(data) as T;
    };

    // Always provide context, use default locale before mounting to prevent hydration issues
    return (
        <I18nContext.Provider value={{ locale, setLocale, t, translate, translateData, dictionary, locales, localeNames }}>
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
