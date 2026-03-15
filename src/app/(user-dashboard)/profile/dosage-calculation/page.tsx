"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import { DosageHome } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/DosageHome";
import { DosageSidebar } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/DosageSidebar";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid } from "lucide-react";

export default function DosageCalculationOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "calculation">(
    "overview",
  );

  return (
    <div className="container pt-3 lg:pt-8 pb-8 lg:pb-16">
      <OverviewBanner
        title="Master Medication Math"
        description="Master medication math and prepare for nursing success with comprehensive study notes and practice questions."
        image={
          <Image
            src={"/assets/images/dosage/dosage.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain scale-120 lg:scale-115 z-0 lg:translate-y-2 lg:-translate-x-12 "
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
        <DosageHome />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div
        className={activeTab === "calculation" ? "block lg:hidden" : "hidden"}
      >
        <DosageSidebar />
      </div>
    </div>
  );
}
