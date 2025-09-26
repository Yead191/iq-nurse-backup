import React from 'react';
import TestInfo from './TestInfo';
import QuestionBank from './QuestionBank';

const FlashTestResultMain = () => {
    return (
        <div className=' flex lg:flex-row flex-col items-start gap-10'> 
            <div className='lg:w-[45%] w-full'> 
            <TestInfo /> 
            </div> 

            <div className=' lg:w-[55%] w-full'> 
            <QuestionBank/>
            </div>
        </div>
    );
};

export default FlashTestResultMain;