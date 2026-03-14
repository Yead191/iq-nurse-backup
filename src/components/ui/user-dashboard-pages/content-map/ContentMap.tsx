"use client";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import Dashboard from "./Dashboard/Dashboard";
import MyMaps from "./MyMaps/MyMaps";
import Shared from "./Shared/Shared";
import Image from "next/image";

const ContentMap = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(tabParam || "1");

  React.useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/profile/concept-map?tab=${tabId}`, { scroll: false });
  };

  const tabs = [
    {
      id: "1",
      label: "Dashboard",
      icon: <MdOutlineDashboard size={22} />,
      component: <Dashboard />,
    },
    {
      id: "2",
      label: "My Maps",
      icon: (
        <Image
          src="/assets/icons/network.svg"
          alt="NCLEX"
          width={50}
          height={50}
          draggable={false}
          className="w-fit h-[22px] object-contain "
        />
      ),
      component: <MyMaps />,
    },
    {
      id: "3",
      label: "Shared",
      icon: <HiOutlineUsers size={22} />,
      component: <Shared />,
    },
  ];

  return (
    <div className="">
      <PageNavbar
        icon={
          <Image
            src="/assets/sidebar-icons/concept-map-icon.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className="w-fit h-10 object-contain active-icon-filter"
          />
        }
        title="Interactive Concept Maps"
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-64px)]">
        {/* Sidebar with Tabs */}
        <div className="w-full lg:w-1/5 lg:p-3 flex flex-col   bg-white lg:shadow-xl rounded-lg ">
          <div className="lg:space-y-4 w-full flex lg:flex-col flex-row lg:items-start items-center px-1 pt-6 ">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full text-left lg:px-4 px-4 py-3 rounded-lg font-medium transition-all flex items-center lg:gap-4 gap-2 cursor-pointer hover:bg-primary hover:text-white lg:text-[16px] text-sm ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-white text-[#6B6B6B]"
                }`}
              >
                <p> {tab.icon} </p> <p> {tab.label} </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-4/5 bg-white rounded-xl h-auto overflow-y-auto p-4 mt-6">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default ContentMap;
