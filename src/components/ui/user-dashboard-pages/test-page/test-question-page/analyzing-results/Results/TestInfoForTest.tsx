import React from 'react';
import { GoClock } from 'react-icons/go';
import { IoCalendarOutline } from 'react-icons/io5';

const TestInfoForTest = () => {
    return (
        <div>
            <div className="w-full mx-auto bg-white rounded-xl  p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="lg:text-xl text-lg font-medium text-gray-900">Cardiovascular</div>
                </div>
                <div className="lg:mt-4 mt-2 flex lg:flex-row flex-wrap items-center lg:gap-10 gap-3">
                    <div className="text-sm text-gray-500 flex items-center space-x-5">
                      <p className=' text-[#7B7B7B] lg:text-[16px] text-sm flex items-center gap-1 '> <span> <GoClock />  </span>  <span>12:30 PM</span> </p> 
                    <p className=' text-[#7B7B7B] lg:text-[16px] text-sm flex items-center gap-1 '> <span>  <IoCalendarOutline />  </span> <span>29/06/2025</span> </p>    
                    </div>
                    <button className="lg:px-8 px-3 py-2 bg-[#28C76F] text-white lg:text-sm text-xs font-normal rounded-lg ">
                        Status: Pass
                    </button>
                </div>
                <div className="mt-4 text-xl font-medium text-gray-600">Subject: Medical Surgical</div>
            </div>
        </div>
    );
};

export default TestInfoForTest;