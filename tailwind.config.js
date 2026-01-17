/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            /**
             * FAANG-GRADE COLOR SYSTEM
             * Semantic naming for enterprise consistency
             */
            colors: {
                // Semantic Background Colors
                background: {
                    DEFAULT: 'hsl(var(--bg-primary))',
                    secondary: 'hsl(var(--bg-secondary))',
                    tertiary: 'hsl(var(--bg-tertiary))',
                    inverse: 'hsl(var(--bg-inverse))',
                },

                // Semantic Text Colors  
                text: {
                    primary: 'hsl(var(--text-primary))',
                    secondary: 'hsl(var(--text-secondary))',
                    tertiary: 'hsl(var(--text-tertiary))',
                    inverse: 'hsl(var(--text-inverse))',
                },

                // Semantic Border Colors
                border: {
                    DEFAULT: 'hsl(var(--border-primary))',
                    secondary: 'hsl(var(--border-secondary))',
                    hover: 'hsl(var(--border-hover))',
                },

                // Brand Accent (Orange - use sparingly)
                accent: {
                    50: 'hsl(var(--accent-50))',
                    100: 'hsl(var(--accent-100))',
                    200: 'hsl(var(--accent-200))',
                    300: 'hsl(var(--accent-300))',
                    400: 'hsl(var(--accent-400))',
                    500: 'hsl(var(--accent-500))',
                    600: 'hsl(var(--accent-600))',
                    700: 'hsl(var(--accent-700))',
                    DEFAULT: 'hsl(var(--accent-500))',
                },

                // Neutral Scale
                neutral: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                    950: '#09090b',
                },
            },

            /**
             * PREMIUM FONT SYSTEM
             * Geist-inspired typography stack
             */
            fontFamily: {
                sans: [
                    'var(--font-geist-sans)',
                    'SF Pro Display',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'system-ui',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
                mono: [
                    'var(--font-geist-mono)',
                    'SF Mono',
                    'Monaco',
                    'Inconsolata',
                    'Fira Mono',
                    'Droid Sans Mono',
                    'Source Code Pro',
                    'monospace',
                ],
            },

            /**
             * PREMIUM TYPOGRAPHY SCALE
             * Geometric precision with optical sizing
             */
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.01em' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0' }],
                'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.011em' }],
                'lg': ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-0.014em' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.017em' }],
                '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.021em' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.028em' }],
                '5xl': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.032em' }],
                '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.035em' }],
                '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
            },

            /**
             * DYNAMIC SPACING SYSTEM
             */
            spacing: {
                'xs': 'var(--spacing-xs)',
                'sm': 'var(--spacing-sm)',
                'md': 'var(--spacing-md)',
                'lg': 'var(--spacing-lg)',
                'xl': 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
            },

            /**
             * PREMIUM SHADOW SYSTEM
             */
            boxShadow: {
                'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
                'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
                'DEFAULT': '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
                'md': '0 4px 8px -2px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
                'lg': '0 12px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
                'xl': '0 24px 48px -12px rgba(0, 0, 0, 0.12)',
                '2xl': '0 32px 64px -16px rgba(0, 0, 0, 0.14)',
                'premium': '0 0 0 1px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.05), 0 12px 24px rgba(0, 0, 0, 0.05)',
                'glow': '0 0 0 1px hsl(var(--accent-500) / 0.1), 0 0 30px hsl(var(--accent-500) / 0.1)',
                'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            },

            /**
             * REFINED BORDER RADIUS
             */
            borderRadius: {
                'none': '0',
                'sm': '0.375rem',
                'DEFAULT': '0.5rem',
                'md': '0.625rem',
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                'full': '9999px',
            },

            /**
             * PREMIUM ANIMATION SYSTEM
             */
            transitionDuration: {
                DEFAULT: '200ms',
                'fast': '150ms',
                'slow': '300ms',
                'slower': '500ms',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
                'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            },
            animation: {
                'fade-in': 'fadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-up': 'slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                'slide-down': 'slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                'scale-in': 'scaleIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
            },
        },
    },
    plugins: [],
};
