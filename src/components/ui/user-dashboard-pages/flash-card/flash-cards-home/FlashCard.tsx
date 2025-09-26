"use client"
import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Network } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import FlashCardBanner from "./FlashCardBanner";
import { IoMdAdd, IoMdCard } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";

export const FlashCard = () => {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get("tab");
    const router = useRouter()
    const [activeTab, setActiveTab] = React.useState(tabParam || "1");

    React.useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);
    // console.log(user);


    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        router.push(`/profile/flash-card?tab=${tabId}`);
    };

    const tabs = [
        { id: "1", label: "Study Desk", icon:  <IoMdAdd size={22} /> , component: <FlashCardBanner  /> },
        { id: "2", label: "My Decks", icon:  <IoAnalytics  size={22} /> , component: <FlashCardBanner  /> },
    ];

    return (
        <div >
            <PageNavbar
                icon={<IoMdCard className=" text-black" />}
                title="Flashcards"
                subtitle="Master nursing concepts with intelligent falscards and spaced repetition" 
                isAiEnhanced={false}
            />

            <div className='flex flex-col lg:flex-row gap-8 '>
                <div className='w-full lg:w-1/4 2xl:w-1/6  p-1  flex justify-center items-start   '>
                    <div className="flex md:flex-col gap-4 bg-white shadow-xl h-[calc(100%)]   w-full p-3 pb-12 border border-gray-100">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-4 cursor-pointer ${activeTab === tab.id
                                    ? "bg-primary text-white shadow"
                                    : "bg-primary/20 text-[#6B6B6B] hover:bg-primary hover:text-white"
                                    }`}
                            >
                                <p> {tab.icon} </p> <p> {tab.label} </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Component Display */}
                <div className="w-full lg:w-3/4  rounded-xl h-[calc(100vh-105px)] overflow-y-scroll  ">
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>
        </div>
    );
};