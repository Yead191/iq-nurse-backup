"use client";

import { useState } from "react";
import { FileText, BookMarked, Eye } from "lucide-react";
import { tabData } from "@/data/tabData";

export default function ReadingTabs() {
  const [activeTab, setActiveTab] = useState("continue");

  const activeContent =
    tabData.find((tab) => tab.id === activeTab)?.items || [];

  return (
    <div className="w-full">
      {/* Tabs header */}
      <div className="flex items-center justify-between ">
        <div className="flex bg-gray-100  rounded-lg w-full max-w-xl px-3 py-[6px]">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all flex-1 justify-center ${
                activeTab === tab.id
                  ? `bg-[#0038771A] border-[#85A6CA] border shadow-sm`
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <button className="hidden text-xs font-medium text-neutral-500 hover:text-neutral-800 md:inline-block">
          See All
        </button>
      </div>

      {/* Tab content */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
        {activeContent.map((item) => (
          <div
            key={item.id}
            className="rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white p-4 flex items-start gap-3"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
              <FileText className="h-5 w-5 text-gray-600" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">
                {item.title}
              </div>
              <p className="mt-1 text-xs text-gray-500">{item.description}</p>
            </div>

            {/* Bookmark Icon */}
            <button className="text-gray-400 hover:text-gray-600">
              <BookMarked className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
