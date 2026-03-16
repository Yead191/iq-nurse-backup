"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid, Menu } from "lucide-react";
import { LabsSidebar } from "@/components/ui/user-dashboard-pages/labs-reference-new/components/LabsSidebar";
import { LabsHome } from "@/components/ui/user-dashboard-pages/labs-reference-new/components/LabsHome";

export default function LabsOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "calculation">(
    "overview",
  );

  return (
    <div className="container pt-6 lg:pt-12 pb-8 lg:pb-16">
      <OverviewBanner
        title="Understand & Interpret Results "
        description="Master diagnostic tests and laboratory values for nursing excellence"
        image={
          <Image
            src={"/assets/images/ecg/ecg-mastery.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain scale-120 lg:scale-105 z-0 lg:translate-y-3 translate-x-3  "
            priority
            draggable={false}
          />
        }
      />

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
          onClick={() => setActiveTab("calculation")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "calculation"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <Menu className="w-5 h-5" />
          <span>Tests & Labs</span>
        </button>
      </div>

      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <LabsHome />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div
        className={activeTab === "calculation" ? "block lg:hidden" : "hidden"}
      >
        <LabsSidebar />
      </div>
    </div>
  );
}
