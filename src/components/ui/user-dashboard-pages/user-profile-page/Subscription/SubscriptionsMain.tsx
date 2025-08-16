import React from 'react';
import { SlBadge } from 'react-icons/sl';
import PlanSection from './PlanSection';
import { subscriptionsData } from '@/data/subscriptionsData';
import DirectionTitle from '@/components/shared/user-dashboard/support-legal/DirectionTitle';

const SubscriptionsMain = () => {
    return (
        <div>
            <DirectionTitle icon={<SlBadge className="text-[#EB4233]" />} title={"Subscriptions"} />

            <div>
                <div className="grid grid-cols-3 w-full flex-col-reverse   ">
                    <div className="lg:col-span-2 col-span-3 order-2 lg:order-1  ">

                        <div className=' grid lg:grid-cols-2 grid-cols-1 py-7 lg:py-0 gap-x-10 gap-y-5 '>

                            {
                                subscriptionsData?.map((values, index) => (
                                    <div key={index} className=' flex items-center gap-2'>
                                        <div className=' w-10 h-10 rounded-full flex items-center justify-center bg-[#4A87F2]/12'>
                                            <img src={values?.icon} alt='' className=' w-6 h-6 object-cover' />
                                        </div>
                                        <div>
                                            <h1 className="text-[16px] font-bold text-gray-800 mb-1">{values?.title}</h1>
                                            <p className='text-sm font-normal'> {values?.description} </p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className=' lg:col-span-1 col-span-3 w-full order-1 lg:order-2' >
                        <PlanSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionsMain;