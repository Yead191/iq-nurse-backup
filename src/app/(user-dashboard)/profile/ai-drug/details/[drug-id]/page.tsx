import AIDrug from '@/components/ui/user-dashboard-pages/ai-drug';
import React from 'react';

interface PageProps {
    params: {
        'drug-id': string;
    };
}

const AIDrugPage = async({ params }: PageProps) => {
    const { 'drug-id': drugId } = await params;

    return <AIDrug drugId={drugId} />;
};

export default AIDrugPage;