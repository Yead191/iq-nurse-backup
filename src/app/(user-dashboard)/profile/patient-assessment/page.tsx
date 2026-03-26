"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid, Menu } from "lucide-react";
import NursingSidebar from "@/components/ui/user-dashboard-pages/nursing-assessment/components/NursingSidebar";
import NursingHome from "@/components/ui/user-dashboard-pages/nursing-assessment/components/NursingHome";

export default function NursingOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "assessment">(
    "overview",
  );

  return (
    <div className="container lg:pt-6 pb-8 px-4">
      {/* Mobile Tabs Wrapper */}
      <div className="flex items-center gap-3 lg:hidden mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "overview"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span>Overview</span>
        </button>
        <button
          onClick={() => setActiveTab("assessment")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "assessment"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <Menu className="w-5 h-5" />
          <span>Nursing Assessments</span>
        </button>
      </div>

      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <NursingHome setActiveTab={setActiveTab} />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div
        className={` ${activeTab === "assessment" ? "block lg:hidden" : "hidden"}`}
      >
        <NursingSidebar />
      </div>
    </div>
  );
}
