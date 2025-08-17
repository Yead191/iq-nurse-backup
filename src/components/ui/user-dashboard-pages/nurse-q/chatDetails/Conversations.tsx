import { chatDetailsData } from '@/data/nurseQ';
import React from 'react';

const Conversations = () => {
    return (
        <div className=''>
            <div className=''>
                {
                    chatDetailsData.map((item) => (
                        <div key={item.id} className="w-full flex flex-col gap-y-10 ">
                            <div className=" flex items-center justify-end">
                                <p className=" bg-[#F4F4F5] text-[#000000] text-[12px] px-6 py-4 lg:w-[630px] w-[95%] tracking-wide rounded-b-3xl rounded-tl-3xl rounded-tr-none "> {item.question}</p>
                            </div>

                            <div className=" flex items-center justify-start relative">
                                <div className='flex items-start gap-1' >
                                    <div className="">   <img src="/assets/user-dashboard-images/nurse-q/chatAi.svg" alt="" className=' w-10 h-10' />  </div>

                                    <p className="  text-[#606060] text-[12px] px-2 py-4 lg:w-[630px] w-[95%] tracking-wide rounded-b-3xl rounded-tl-none rounded-tr-3xl  "> {item.answer}</p>

                                </div>

                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Conversations;