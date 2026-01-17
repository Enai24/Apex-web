import AISolutionPage from '@/components/AISolutionPage';

export function generateStaticParams() {
    return [{ solutionId: 'dummy' }];
}

export default function Page() {
    return <AISolutionPage />;
}
