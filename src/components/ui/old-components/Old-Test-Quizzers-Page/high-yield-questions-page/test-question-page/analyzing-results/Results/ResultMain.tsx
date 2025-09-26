import React from 'react';
import TestInfoForTest from './TestInfoForTest';
import QuestionBankForTest from './QuestionBankForTest';

const ResultMain = () => {
    return (
        <div className=' flex  flex-col lg:items-center  items-start justify-center gap-10'>
            <div className=' w-full'>
                <TestInfoForTest />
            </div>

            <div className=' lg:w-[55%] w-full'>
                <QuestionBankForTest />
            </div>
        </div>
    );
};

export default ResultMain; 