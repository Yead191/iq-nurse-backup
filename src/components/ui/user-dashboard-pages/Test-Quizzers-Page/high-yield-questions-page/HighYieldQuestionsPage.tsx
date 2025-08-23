"use client";

import { quizTabsData } from "@/data/quizFolder";
import React, { useState } from "react";
import TabSelect from "./TabSelect";

export default function HighYieldQuestionsPage() {
  globalThis.scrollTo(0, 0);
  const [activeTab, setActiveTab] = useState("Exams");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-row md:flex-col gap-2 md:gap-0">
      <div className="flex flex-col md:flex-row pt-4 md:pt-0 md:grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[32px] gap-3 mb-0  lg:overflow-x-auto pb-3 bg-[#F4F7FE] md:bg-transparent  sticky h-[calc(100vh-200px)] md:h-auto top-20 md:static px-2 md:px-0">
        {quizTabsData?.map((quiz, index) => (
          <TabSelect
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            tab={quiz}
            key={index}
          />
        ))}
      </div>

      {/* Render active tab's content */}
      <div className="mt-4 flex-1">
        {quizTabsData.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}
