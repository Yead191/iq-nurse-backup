import React from "react";
import {
  factorsAffectingData,
  medicationEffectsData,
} from "@/data/vital-signs/factorsAffectingData";
import { InfoBox } from "@/components/shared/InfoBox";
import { RefreshCcw } from "lucide-react";

export default function FactorsAffectingPage() {
  const renderFactorCard = (title: string, items: string[]) => (
    <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 shadow-sm">
      <h3 className="font-bold text-[#1e5d8e] text-xl mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const [label, ...rest] = item.split(":");
          return (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
              <span>
                <span className="font-bold text-slate-900">{label}:</span>
                {rest.join(":")}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <RefreshCcw className="w-8 h-8 text-[#1e5d8e]" />
        <h1 className="text-3xl font-bold text-[#1e5d8e]">
          {factorsAffectingData.title}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {renderFactorCard(
          factorsAffectingData.physiologicalFactors.title,
          factorsAffectingData.physiologicalFactors.items
        )}
        {renderFactorCard(
          factorsAffectingData.environmentalFactors.title,
          factorsAffectingData.environmentalFactors.items
        )}
      </div>

      <div className="mb-10">
        <InfoBox data={medicationEffectsData} />
      </div>
    </main>
  );
}
