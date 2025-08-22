"use client";

import { quizTabsData } from "@/data/quizFolder";
import React, { useState } from "react";
import TabSelect from "./TabSelect";

export default function OwnQuizzesPage() {
  const [activeTab, setActiveTab] = useState("Exams");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-[32px] gap-3 mb-0  overflow-x-auto pb-3">
        {quizTabsData?.map((quiz) => (
          <TabSelect
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            tab={quiz}
          />
        ))}
      </div>
      {/* Render active tab's content */}
      <div className="mt-4">
        {quizTabsData.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}
