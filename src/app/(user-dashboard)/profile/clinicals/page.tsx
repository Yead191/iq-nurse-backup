"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid, Menu } from "lucide-react";
import PracticalHome from "@/components/ui/user-dashboard-pages/practical-skill/components/PracticalHome";
import PracticalSidebar from "@/components/ui/user-dashboard-pages/practical-skill/components/PracticalSidebar";

export default function PracticalOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "skills">("overview");

  return (
    <div className="container pt-6 lg:pt-12 pb-8 lg:pb-16">
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
          onClick={() => setActiveTab("skills")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "skills"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <Menu className="w-5 h-5" />
          <span>Practical Skills</span>
        </button>
      </div>

      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <PracticalHome setActiveTab={setActiveTab} />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div className={activeTab === "skills" ? "block lg:hidden" : "hidden"}>
        <PracticalSidebar />
      </div>
    </div>
  );
}
