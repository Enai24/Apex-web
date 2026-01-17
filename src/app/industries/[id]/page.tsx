import { industrySolutions } from '../../../data/industries';
import IndustrySolutions from '../../../components/IndustrySolutions';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return industrySolutions.map((industry) => ({
        id: industry.id,
    }));
}

export default async function IndustryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const industry = industrySolutions.find((s) => s.id === id);

    if (!industry) {
        notFound();
    }

    return <IndustrySolutions industry={industry} />;
}
