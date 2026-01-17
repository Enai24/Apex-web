'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { I18nProvider } from '@/i18n/client';
import DomTranslator from '@/i18n/DomTranslator';

export function Providers({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <I18nProvider>
                <DomTranslator />
                {children}
            </I18nProvider>
            <Toaster position="top-right" />
        </QueryClientProvider>
    );
}
