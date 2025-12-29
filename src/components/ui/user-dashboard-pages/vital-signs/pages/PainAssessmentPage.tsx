import React from "react";
import {
  painAssessmentData,
  painNclexPoints,
} from "@/data/vital-signs/painAssessmentData";
import { InfoBox } from "@/components/shared/InfoBox";
import { AlertTriangle } from "lucide-react";

export default function PainAssessmentPage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <span className="text-3xl">🤒</span>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1e5d8e]">
          {painAssessmentData.title}
        </h1>
      </div>

      {/* Pain Assessment Overview */}
      <div className="mb-10 p-6 bg-slate-50 border border-slate-100 rounded-lg shadow-sm">
        <h3 className="font-bold text-[#1e5d8e] text-lg mb-2">
          Pain Assessment Overview
        </h3>
        <p className="text-[15px] text-slate-700 leading-relaxed">
          {painAssessmentData.overview}
        </p>
      </div>

      {/* Pain Assessment Scales */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {painAssessmentData.scales.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painAssessmentData.scales.items.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[#3393d2] text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-sm font-bold text-slate-800 mb-4 italic">
                {item.subtitle}
              </p>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex gap-2 items-start"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive Pain Assessment (PQRST) */}
      <h3 className="text-xl font-bold text-[#1e5d8e] mb-6">
        Comprehensive Pain Assessment (PQRST Method)
      </h3>
      <div className="mb-10">
        <InfoBox data={painAssessmentData.pqrst} />
      </div>

      {/* NCLEX Box */}
      <div className="mb-10">
        <InfoBox data={painNclexPoints} />
      </div>

      {/* Red Flags */}
      <div className="mb-12 p-6 bg-[#fff9e6] border-l-4 border-amber-400 rounded-lg">
        <h3 className="font-bold text-amber-600 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          {painAssessmentData.redFlags.title}
        </h3>
        <ul className="space-y-3 ml-5 list-disc text-[15px] text-slate-700">
          {painAssessmentData.redFlags.items.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
