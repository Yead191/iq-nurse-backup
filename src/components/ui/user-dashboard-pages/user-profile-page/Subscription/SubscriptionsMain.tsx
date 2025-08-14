import React from 'react';
import { FaHome } from 'react-icons/fa';
import { SlBadge } from 'react-icons/sl';
import PlanSection from './PlanSection';
import { subscriptionsData } from '@/data/subscriptionsData';

const SubscriptionsMain = () => {
    return (
        <div>
            <div className="flex items-start justify-start space-x-4 p-4  text-[#7B7B7B] pb-3 text-sm">
                <a href="/profile/home" className="flex items-center space-x-2  ">
                    <FaHome className="text-[#7B7B7B]" />
                    <span className="font-medium">Home</span>
                </a>
                <span className="text-gray-500">⟷</span>
                <p className="flex items-center space-x-2 ">
                    <SlBadge className="text-[#EB4233]" />
                    <span className="font-medium">Subscriptions</span>
                </p>
            </div>

            <div>
                <div className="flex  ">
                    <div className="w-3/4 bg-white p-6 rounded-lg "> 

                    <div className=' grid grid-cols-2 gap-10 '> 

                        {
                            subscriptionsData?.map((values, index) => (
                                <div key={index} className=' flex items-center gap-2'>
                                    <div className=' w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#4A87F2]/12'>
                                        <img src={values?.icon} alt='' className=' w-[17px] h-[17px] object-cover' />
                                    </div>
                                    <div>
                                        <h1 className="text-sm font-bold text-gray-800 mb-1">{values?.title}</h1>
                                        <p className='text-xs font-normal'> {values?.description} </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                    </div>
                    <PlanSection />
                </div>
            </div>
        </div>
    );
};

export default SubscriptionsMain;