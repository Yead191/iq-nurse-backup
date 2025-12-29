import React from "react";
import { introData, nclexConcept } from "@/data/vital-signs/introData";
import { InfoBox } from "@/components/shared/InfoBox";

export default function VitalIntroduction() {
  return (
    <main>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          {introData.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-6" />
        <p className="text-[15px] leading-relaxed text-slate-600">
          {introData.description}
        </p>
      </div>

      {/* NCLEX Key Concept */}
      <InfoBox data={nclexConcept} />

      {/* Clinical Tip */}
      <div className="bg-[#e0f2f1] border-l-4 border-[#00897b] rounded-r-lg p-6 shadow-sm">
        <p className="text-[15px] text-slate-700 leading-relaxed">
          <span className="font-bold text-[#00695c]">Clinical Tip:</span>{" "}
          {introData.clinicalTip}
        </p>
      </div>
    </main>
  );
}
