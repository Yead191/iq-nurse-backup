"use client"
import { flashTabsData } from '@/data/highYieldFlashcardsData';
import React, { useState } from 'react';

const HighYieldFlashCardsMain = () => {
    const [activeTab, setActiveTab] = useState("Flashcards");

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };


    return (
        <div>
            <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-[22px] gap-3 mb-0  overflow-x-auto pb-3">
                {flashTabsData.map((tab) => (
                    <div key={tab.id} className="cursor-pointer">
                        <div
                            onClick={() => handleTabClick(tab.id)}
                            className={` border rounded-lg p-2 py-4 md:p-4 shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer w-full  flex flex-row items-center justify-between  gap-2 md:gap-4 ${activeTab === tab.id
                                ? "border-[#003877]/80 bg-[#E6EBF1]/80"
                                : "border-[#C5D0D0] bg-white hover:border-[#547AA4]/80"
                                }`}
                        >
                            <p
                                className={` font-medium text-xs md:text-base text-start flex flex-wrap ${activeTab === tab.id ? "text-black" : "text-gray-700"
                                    }`}
                            >
                                {tab.label}
                            </p>

                            <div className="">
                                <img src={tab.imageSrc} alt="" className='w-10 h-10 ' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Render active tab's content */}
            <div className="mt-4">
                {flashTabsData.find((tab) => tab.id === activeTab)?.component}
            </div>
        </div>
    );
};

export default HighYieldFlashCardsMain;
