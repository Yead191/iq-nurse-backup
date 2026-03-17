"use client";

import React from "react";
import {
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";
import { nursingSidebarItems } from "@/data/nursing-assessment/nursingSidebarItems";
import { useRouter } from "next/navigation";

export default function NursingHome({ setActiveTab }: any) {
  const router = useRouter();
  const popularAssessmentIds = [
    { systemId: "cardiovascular", itemId: "heart-rate-rhythm" },
    { systemId: "cardiovascular", itemId: "blood-pressure" },
    { systemId: "respiratory", itemId: "respiratory-rate" },
    { systemId: "neurological", itemId: "level-of-consciousness" },
    { systemId: "respiratory", itemId: "oxygen-saturation" },
    { systemId: "gastrointestinal", itemId: "bowel-sounds" },
  ];
  const navigateToAssessment = (itemId: string) => {
    router.push(`/profile/patient-assessment/${itemId}`);
  };
  return (
    <div className="flex flex-col gap-10 w-full pb-10">
      {/* Banner Section */}
      <div className="bg-[#f2fcf9] p-4 lg:p-6 rounded-2xl border border-gray-100 flex flex-col gap-2">
        <h2 className="text-[22px] font-bold text-[#1f2937]">
          NCLEX - Style Test
        </h2>
        <p className="text-[13px] text-gray-500 mb-2">
          Test your knowledge with comprehensive questions covering all skill
          categories
        </p>
        <div className="flex flex-wrap gap-2 lg:gap-4 mt-2">
          <button
            onClick={() => router.push("/profile/clinicals/practice-test")}
            className="bg-[#2f557c] text-white px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-[#203c58] transition-colors"
          >
            <ClipboardCheck className="w-4 h-4" /> Start Practice Test
          </button>
          <button
            onClick={() => {
              setActiveTab("assessment");
            }}
            className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            Browse Skills <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* popular */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-600" />
          Most Popular Assessments
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {popularAssessmentIds.map(({ systemId, itemId }) => {
            const system = nursingSidebarItems.find((s) => s.id === systemId);
            const item = system?.children?.find((a) => a.id === itemId);
            if (!system || !item) return null;
            const SystemIcon = system.icon;

            return (
              <button
                key={`${systemId}-${itemId}`}
                onClick={() => navigateToAssessment(itemId)}
                className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-left group"
              >
                <div className="p-2 rounded-lg text-blue-600 bg-slate-50 group-hover:bg-white">
                  <SystemIcon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-slate-900">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {system.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
