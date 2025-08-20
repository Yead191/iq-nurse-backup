import DirectionTitle from '@/components/shared/user-dashboard/support-legal/DirectionTitle';
import React from 'react';
import { CiCreditCard1 } from 'react-icons/ci';
import TitleBanner from './TitleBanner';
import { flashHomeData } from '@/data/flashCards';
import Card from '../Card';

const FlashCard = () => {
    return (
        <div className='w-full'>
            <DirectionTitle icon={<CiCreditCard1 className='text-[#28C76F]' size={22} />} title='Flash Cards' />

            <div className=' lg:w-[60%] w-full '>
                <TitleBanner />
            </div>

            <div className='w-full  py-[30px] flex items-center justify-center '>
                <div className=' lg:w-2/3 w-full '>

                    <div className=' grid lg:grid-cols-2 grid-cols-1  lg:gap-10 gap-5 items-center'>
                        {
                            flashHomeData?.map((items, index) => (
                                <div key={index}>
                                    <Card className='' items={items} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashCard;