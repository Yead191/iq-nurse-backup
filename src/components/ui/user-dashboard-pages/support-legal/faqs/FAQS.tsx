import DirectionTitle from '@/components/shared/user-dashboard/support-legal/DirectionTitle';
import SupportBanner from '@/components/shared/user-dashboard/support-legal/SupportBanner';
import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import AllFaqs from './AllFaqs';

const FAQS = () => {
    return (
        <div> 
            <DirectionTitle icon={<FaQuestion className='text-[#28C76F]' />} title='FAQs' /> 
            <div className=' hidden lg:block'> 
            <SupportBanner title='The FAQs' subTitle='Help center' description='Every thing you need to know about Ace-Nursing' /> 
            </div>

            {/* main contains  */} 
            <div>  
                <AllFaqs />
            </div>
        </div>
    );
};

export default FAQS;