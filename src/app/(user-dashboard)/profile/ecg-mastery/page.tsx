"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import { EcgSidebar } from "@/components/ui/user-dashboard-pages/ecg-mastery-new/components/EcgSidebar";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid } from "lucide-react";
import { EcgHome } from "@/components/ui/user-dashboard-pages/ecg-mastery-new/components/EcgHome";

export default function EcgMasteryOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "calculation">(
    "overview",
  );

  return (
    <div className="container pt-3 lg:pt-8 pb-8 lg:pb-16">
      <OverviewBanner
        title="Read Every Rhythm with Confidence"
        description="Master ECG interpretation for NCLEX success with comprehensive study notes and practice tests."
        image={
          <Image
            src={"/assets/images/ecg/ecg-mastery.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain scale-120 lg:scale-105 z-0 lg:translate-y-3  "
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
          <LayoutGrid className="w-5 h-5" />
          <span>Dosage Calculation</span>
        </button>
      </div>

      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <EcgHome />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div
        className={activeTab === "calculation" ? "block lg:hidden" : "hidden"}
      >
        <EcgSidebar />
      </div>
    </div>
  );
}
