'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function NavbarClient() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />;
}
