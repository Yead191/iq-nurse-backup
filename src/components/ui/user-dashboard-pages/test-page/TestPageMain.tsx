"use client";

import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { BookOpen } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { IoAnalytics } from "react-icons/io5";
import PreparationTab from "./preparation-tab/PreparationTab";
import PersonalizeQuizTab from "./PersonalizeQuizTab/PersonalizeQuizTab";
import PerformanceAnalytics from "./performance-analytics/PerformanceAnalytics";

export default function TestPageMain() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(tabParam || "1");

  React.useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  // console.log(user);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/profile/tests?tab=${tabId}`, { scroll: false });
  };

  const tabs = [
    {
      id: "1",
      label: "NCLEX Prep",
      icon: <IoAnalytics size={22} />,
      component: <PreparationTab />,
    },
    {
      id: "2",
      label: "Personalized Quiz",
      icon: <IoAnalytics size={22} />,
      component: <PersonalizeQuizTab />,
    },
    {
      id: "3",
      label: "Progress",
      icon: <IoAnalytics size={22} />,
      component: <PerformanceAnalytics />,
    },
  ];

  return (
    <div>
      <PageNavbar
        icon={<BookOpen className="text-black fill-current" />}
        title="Master the NCLEX with Confidence"
        subtitle="Practice with targeted questions, track your progress, and compare with peers to boost your chances of success."
        isAiEnhanced={false}
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:h-[calc(100vh-100px)]">
        <div className="w-full lg:w-1/4 2xl:w-1/6  p-1 px-2 md:px-0  flex justify-center items-start h-full">
          <div className="flex md:flex-col gap-4 justify-between md:justify-start md:bg-white md:shadow-xl  w-full md:p-3 md:pb-12 md:border border-gray-100 h-full">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-left text-[12px] md:text-base px-4 py-3 rounded-md md:rounded-lg font-medium transition-all flex items-center gap-4 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-white text-[#6B6B6B] hover:bg-primary hover:text-white"
                }`}
              >
                <p className="hidden md:block"> {tab.icon} </p>{" "}
                <p> {tab.label} </p>
              </div>
            ))}
          </div>
        </div>

        {/* Component Display */}
        <div className="w-full px-4 lg:w-3/4 bg-white rounded-xl h-auto  overflow-y-auto">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
}
