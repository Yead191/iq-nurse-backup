"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ClipboardCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  Activity,
} from "lucide-react";
import { nursingSidebarItems } from "@/data/nursing-assessment/nursingSidebarItems";
import { useRouter } from "next/navigation";

export default function NursingHome({ setActiveTab }: any) {
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("nursing-recently-viewed");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setRecentlyViewed(parsed.slice(0, 6)); // Show only 6 most recent
      } catch (e) {
        console.error("Failed to parse recently viewed:", e);
      }
    }
  }, []);

  const formatTimeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  const findSystemByItemId = (itemId: string) => {
    return nursingSidebarItems.find((system) =>
      system.children?.some((item) => item.id === itemId),
    );
  };

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
    <div className="flex flex-col gap-6 lg:gap-10 w-full pb-10">
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
      <div className="bg-white rounded-2xl lg:p-6 lg:shadow-sm lg:border lg:border-slate-100">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
          <TrendingUp className="text-blue-600" />
          Most Popular Assessments
        </h3>
        <div className="flex overflow-x-auto scrollbar-hide pb-4 gap-4 md:grid md:grid-cols-2 md:pb-0">
          {popularAssessmentIds.map(({ systemId, itemId }) => {
            const system = nursingSidebarItems.find((s) => s.id === systemId);
            const item = system?.children?.find((a) => a.id === itemId);
            if (!system || !item) return null;
            const SystemIcon = system.icon;

            return (
              <button
                key={`${systemId}-${itemId}`}
                onClick={() => navigateToAssessment(itemId)}
                className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-left group min-w-[300px] md:min-w-0 flex-1"
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

      {/* Recently Viewed */}
      <div className="bg-white rounded-2xl lg:p-6 lg:shadow-sm lg:border lg:border-slate-100">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100 mb-4">
          <div className="p-2 bg-purple-50 rounded-lg">
            <Clock className="size-5 text-purple-600" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Recently Viewed</h2>
        </div>

        {recentlyViewed.length > 0 ? (
          <div className="flex overflow-x-auto scrollbar-hide pb-4 gap-4 md:grid md:grid-cols-2 md:pb-0">
            {recentlyViewed.map((assessment: any) => {
              const system = findSystemByItemId(assessment.id);
              const SystemIcon = system?.icon || Activity;

              return (
                <button
                  key={`${assessment.id}-${assessment.timestamp}`}
                  onClick={() => navigateToAssessment(assessment.id)}
                  className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all text-left group min-w-[300px] md:min-w-0 flex-1"
                >
                  <div className="p-2 rounded-lg text-blue-600 bg-slate-50 group-hover:bg-white">
                    <SystemIcon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium text-sm text-slate-900 truncate">
                        {assessment.title}
                      </div>
                      <ArrowRight className="size-3 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 flex items-center justify-between">
                      <span>{system?.label || "Assessment"}</span>
                      <span className="text-[10px] opacity-70">
                        {formatTimeAgo(assessment.timestamp)}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-8 text-center">
            <Clock className="size-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium">No recently viewed yet</p>
            <p className="text-xs text-slate-400 mt-1">
              Assessments you visit will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
