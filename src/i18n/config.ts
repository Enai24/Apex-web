// i18n/config.ts
// Central configuration for internationalization

export const locales = ['en', 'hi', 'ta', 'te', 'kn', 'bn', 'mr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, { name: string; native: string }> = {
    en: { name: 'English', native: 'English' },
    hi: { name: 'Hindi', native: 'हिन्दी' },
    ta: { name: 'Tamil', native: 'தமிழ்' },
    te: { name: 'Telugu', native: 'తెలుగు' },
    kn: { name: 'Kannada', native: 'ಕನ್ನಡ' },
    bn: { name: 'Bengali', native: 'বাংলা' },
    mr: { name: 'Marathi', native: 'मराठी' },
};
