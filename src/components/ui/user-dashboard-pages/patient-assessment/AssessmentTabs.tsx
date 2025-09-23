"use client";

import { AssessmentCategory, FindingData } from "@/data/assessmentCategories";
import { ColumnsType } from "antd/es/table";

import { useState } from "react";
import { ComprehensiveContent } from "./tab-content/ComprehensiveContent";
import { MnemonicsContent } from "./tab-content/MnemonicsContent";

interface AssessmentTabsProps {
  category?: AssessmentCategory;
}

export default function AssessmentTabs({ category }: AssessmentTabsProps) {
  const [activeTab, setActiveTab] = useState("comprehensive");

  const columns: ColumnsType<FindingData> = [
    {
      title: "Assessment",
      dataIndex: "assessment",
      key: "assessment",
      className: "font-medium text-gray-800",
      width: "30%",
    },
    {
      title: "Normal",
      dataIndex: "normal",
      key: "normal",
      className: "text-green-700",
      width: "35%",
    },
    {
      title: "Abnormal",
      dataIndex: "abnormal",
      key: "abnormal",
      className: "text-red-600",
      width: "35%",
    },
  ];

  return (
    <div className="">
      <div className=" px-2 lg:px-0 lg:pl-6">
        <div className="flex space-x-1.5 md:space-x-4  h-[80px] p-1 rounded-lg  items-center max-w-xl ">
          <button
            onClick={() => setActiveTab("comprehensive")}
            className={`flex-1 text-xs  md:text-sm font-medium  rounded-full transition-all duration-200 h-[40px] border ${
              activeTab === "comprehensive"
                ? " text-white bg-[#02478D] shadow-sm border-transparent"
                : "text-gray-600 hover:text-gray-800 bg-white border-[#B1B1B1]"
            }`}
          >
            Comprehensive Assessment
          </button>
          <button
            onClick={() => setActiveTab("mnemonics")}
            className={`flex-1 text-xs  md:text-sm font-medium  rounded-full transition-all duration-200 h-[40px] border ${
              activeTab === "mnemonics"
                ? " text-white bg-[#02478D] shadow-sm border-transparent"
                : "text-gray-600 hover:text-gray-800 bg-white border-[#B1B1B1]"
            }`}
          >
            Mnemonics
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content max-h-[calc(100vh-236px)] lg:max-h-[calc(100vh-190px)] 2xl:max-h-[calc(100vh-190px)] overflow-y-auto px-4 md:px-6 py-6">
        {activeTab === "comprehensive" && (
          <ComprehensiveContent category={category} columns={columns} />
        )}
        {activeTab === "mnemonics" && <MnemonicsContent category={category} />}
      </div>
    </div>
  );
}
