
import FlashCard from '@/components/ui/user-dashboard-pages/flash-cards/flash-cards-home/FlashCard';
import React, { Suspense } from 'react';

const FlashCardPage = () => {
    return (
        <div> 
            <Suspense fallback={<div>Loading...</div>} > 
            <FlashCard />
            </Suspense>
        </div>
    );
};

export default FlashCardPage;