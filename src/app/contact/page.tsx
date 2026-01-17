import Contact from '@/components/Contact';

import { Suspense } from 'react';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Contact />
        </Suspense>
    );
}
