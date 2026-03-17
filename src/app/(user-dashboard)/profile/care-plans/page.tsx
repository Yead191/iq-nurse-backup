"use client";

import OverviewBanner from "@/components/shared/OverviewBanner";
import Image from "next/image";
import { useState } from "react";
import { LayoutGrid, Menu } from "lucide-react";
import CarePlansSidebar from "@/components/ui/user-dashboard-pages/care-plans-new/components/CarePlansSidebar";
import CareHome from "@/components/ui/user-dashboard-pages/care-plans-new/components/CareHome";

export default function CarePlansOverview() {
  const [activeTab, setActiveTab] = useState<"overview" | "plans">("overview");

  return (
    <div className="container pt-6  pb-8 px-4">
      <OverviewBanner
        title="Plan. Prioritize. Provide."
        description="Evidence-based nursing care plans across major conditions to strengthen critical thinking and NCLEX readiness."
        image={
          <Image
            src={"/assets/images/dosage/dosage.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain scale-120 lg:scale-105 z-0 lg:translate-y-4.5 2xl:translate-x-3 lg:-translate-x-16  "
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
          onClick={() => setActiveTab("plans")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-medium transition-colors text-xs  border text-nowrap ${
            activeTab === "plans"
              ? "bg-[#2f557c] text-white border-[#2f557c]"
              : "bg-white text-[#2f557c] border-[#2f557c]"
          }`}
        >
          <Menu className="w-5 h-5" />
          <span>Care Plans</span>
        </button>
      </div>

      {/* Overview Content */}
      <div className={activeTab === "overview" ? "block" : "hidden lg:block"}>
        <CareHome />
      </div>

      {/* Dosage Calculation Sidebar (Mobile Only) */}
      <div
        className={` ${activeTab === "plans" ? "block lg:hidden" : "hidden"}`}
      >
        <CarePlansSidebar />
      </div>
    </div>
  );
}
