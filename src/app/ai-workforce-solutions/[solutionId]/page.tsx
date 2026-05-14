import AISolutionPage from '@/components/AISolutionPage';

export function generateStaticParams() {
    return [
        { solutionId: 'ai-talent-matching' },
        { solutionId: 'predictive-analytics' },
        { solutionId: 'automated-compliance' },
        { solutionId: 'intelligent-payroll' },
        { solutionId: 'ai-recruitment-assistant' },
    ];
}

export default function Page() {
    return <AISolutionPage />;
}
