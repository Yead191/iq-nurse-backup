"use client";
import PageNavbar from '@/components/shared/user-dashboard/PageNavbar';
import { Network } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbSitemap } from 'react-icons/tb';
import Dashboard from './Dashboard/Dashboard';
import MyMaps from './MyMaps/MyMaps';
import Shared from './Shared/Shared';

const ContentMap = () => {
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
        router.push(`/profile/content-map?tab=${tabId}`, { scroll: false });
    };

    const tabs = [
        { id: "1", label: "Dashboard", icon: <p> <MdOutlineDashboard size={22} /> </p>, component: <Dashboard  /> },
        { id: "2", label: "My Maps", icon: <p> <TbSitemap size={22} /> </p>, component: <MyMaps /> },
        { id: "3", label: "Shared", icon: <p> <HiOutlineUsers size={22} /> </p>, component: <Shared /> },
    ];

    return (
        <div >
            <PageNavbar
                icon={<Network className=" text-black" />}
                title="Interactive Concept Maps"
                subtitle="Visualize and understand complex concepts with interactive concept maps" 
                isAiEnhanced={false}
            />

            <div className='flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-100px)]'>
                <div className='w-full lg:w-1/6  p-1  flex justify-center items-start '>
                    <div className="flex flex-col gap-4 bg-white shadow-xl  w-full p-3 pb-12 border border-gray-100">
                        {tabs.map((tab) => (
                            <div
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-4 cursor-pointer ${activeTab === tab.id
                                    ? "bg-primary text-white shadow"
                                    : "bg-white text-[#6B6B6B] hover:bg-primary hover:text-white"
                                    }`}
                            >
                                <p> {tab.icon} </p> <p> {tab.label} </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Component Display */}
                <div className="w-full lg:w-3/4 bg-white rounded-xl h-auto  overflow-y-auto">
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </div>
            </div>
        </div>
    );
};

export default ContentMap;