import JobDetailPage from '@/components/jobs/JobDetailPage';

export function generateStaticParams() {
    return [{ jobId: 'dummy' }];
}

export default function Page() {
    return <JobDetailPage />;
}
