"use client";

import React from "react";
import {
  TrendingUp,
  FileText,
  ChevronRight,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock data for the cards to match the design screenshot
const popularSkills = [
  {
    id: "hand-hygiene",
    title: "Hand Hygiene (Medical & Surgical)",
    category: "Fundamentals / Basic Skills",
    steps: 5,
    objectives: 3,
  },
  {
    id: "vital-signs",
    title: "Vital Signs & Pain Assessment",
    category: "Fundamentals / Basic Skills",
    steps: 5,
    objectives: 3,
  },
  {
    id: "sterile-gloving",
    title: "Sterile Gloving",
    category: "Wound Care",
    steps: 5,
    objectives: 2,
  },
];

const recentlyViewedSkills = [
  {
    id: "hand-hygiene-recent",
    title: "Hand Hygiene (Medical & Surgical)",
    category: "Fundamentals / Basic Skills",
    steps: 5,
    objectives: 3,
  },
  {
    id: "vital-signs-recent",
    title: "Vital Signs & Pain Assessment",
    category: "Fundamentals / Basic Skills",
    steps: 5,
    objectives: 3,
  },
  {
    id: "sterile-gloving-recent",
    title: "Sterile Gloving",
    category: "Wound Care",
    steps: 5,
    objectives: 2,
  },
];

export default function PracticalHome({ setActiveTab }: any) {
  const router = useRouter();

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
              setActiveTab("skills");
            }}
            className="bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
          >
            Browse Skills <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Most Popular Skills Section */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-[#2f557c]" />
          <h2 className="text-2xl font-bold text-[#1a202c]">
            Most Popular Skills
          </h2>
        </div>

        {/* For small screens: overflow-x-auto, for large: grid */}
        <div className="flex pb-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {popularSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() => router.push(`/profile/clinicals/${skill.id}`)}
              className="min-w-[280px] lg:min-w-0 snap-start bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div>
                <h3 className="text-[15px] font-bold text-[#1a202c] mb-1.5 leading-snug">
                  {skill.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {skill.category}
                </p>
              </div>
              <div className="flex gap-3 mt-auto pt-2">
                <span className="bg-[#eff6ff] text-[#2563eb] px-2.5 py-1 rounded text-xs font-medium">
                  {skill.steps} steps
                </span>
                <span className="bg-[#f3f4f6] text-[#4b5563] px-2.5 py-1 rounded text-xs font-medium">
                  {skill.objectives} objectives
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Recently Viewed Section */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-6 h-6 text-[#2f557c]" />
          <h2 className="text-2xl font-bold text-[#1a202c]">
            Most Recently Viewed
          </h2>
        </div>

        <div className="flex overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar gap-5 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:pb-0">
          {recentlyViewedSkills.map((skill) => (
            <div
              key={skill.id}
              onClick={() =>
                router.push(
                  `/profile/clinicals/${skill.id.replace("-recent", "")}`,
                )
              }
              className="min-w-[280px] lg:min-w-0 snap-start bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div>
                <h3 className="text-[15px] font-bold text-[#1a202c] mb-1.5 leading-snug">
                  {skill.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {skill.category}
                </p>
              </div>
              <div className="flex gap-3 mt-auto pt-2">
                <span className="bg-[#eff6ff] text-[#2563eb] px-2.5 py-1 rounded text-xs font-medium">
                  {skill.steps} steps
                </span>
                <span className="bg-[#f3f4f6] text-[#4b5563] px-2.5 py-1 rounded text-xs font-medium">
                  {skill.objectives} objectives
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start Guide Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 mt-2 shadow-sm">
        <h2 className="text-[#2f557c] text-lg font-bold mb-5">
          Quick Start Guide:
        </h2>
        <ol className="space-y-4">
          <li className="flex gap-4 items-start text-gray-600 text-[15px]">
            <span className="font-bold text-[#2f557c] text-base leading-snug">
              1.
            </span>
            <span className="leading-snug">
              Browse skills by category in the left sidebar
            </span>
          </li>
          <li className="flex gap-4 items-start text-gray-600 text-[15px]">
            <span className="font-bold text-[#2f557c] text-base leading-snug">
              2.
            </span>
            <span className="leading-snug">
              Use the search bar to find specific skills quickly
            </span>
          </li>
          <li className="flex gap-4 items-start text-gray-600 text-[15px]">
            <span className="font-bold text-[#2f557c] text-base leading-snug">
              3.
            </span>
            <span className="leading-snug">
              Click on any skill to view detailed instructions
            </span>
          </li>
          <li className="flex gap-4 items-start text-gray-600 text-[15px]">
            <span className="font-bold text-[#2f557c] text-base leading-snug">
              4.
            </span>
            <span className="leading-snug">
              Take the NCLEX-style practice test to assess your knowledge
            </span>
          </li>
        </ol>
      </div>

      {/* Add custom style for hiding scrollbar if not in global CSS */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
