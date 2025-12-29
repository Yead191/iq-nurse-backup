import React from "react";
import {
  documentationData,
  nclexDocumentationPrinciples,
} from "@/data/vital-signs/documentationData";
import { InfoBox } from "@/components/shared/InfoBox";

export default function DocumentationPage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <span className="text-3xl">📝</span>
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1e5d8e]">
          {documentationData.title}
        </h1>
      </div>

      {/* Proper Vital Signs Documentation Box */}
      <div className="mb-10 p-8 bg-blue-50/50 border-2 border-dashed border-blue-400 rounded-lg">
        <h3 className="font-bold text-[#1e5d8e] text-lg mb-4">
          {documentationData.properDocumentation.title}
        </h3>

        <div className="mb-4">
          <p className="font-bold text-slate-800 mb-1">
            Example Documentation:
          </p>
          <p className="text-[15px] text-slate-700 leading-relaxed italic">
            "
            {documentationData.properDocumentation.example.replace(
              /^"|"$/g,
              ""
            )}
            "
          </p>
        </div>

        <div>
          <p className="font-bold text-slate-800 mb-3">
            Key Documentation Points:
          </p>
          <ul className="space-y-2.5">
            {documentationData.properDocumentation.points.map(
              (point, index) => (
                <li
                  key={index}
                  className="text-[15px] text-slate-700 flex gap-2 items-start"
                >
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                  {point}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* NCLEX Principles InfoBox */}
      <div className="mb-10">
        <InfoBox data={nclexDocumentationPrinciples} />
      </div>
    </main>
  );
}
