import React from "react";
import {
  pulseData,
  pulseNclexPoints,
  pulseCriticalFindings,
} from "@/data/vital-signs/pulseData";
import { InfoBox } from "@/components/shared/InfoBox";
import { Heart } from "lucide-react";

export default function PulsePage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1e5d8e]">
          {pulseData.title}
        </h1>
      </div>

      {/* Normal Ranges Table */}
      <div className="mb-10 shadow-sm border border-slate-100 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-[#1e5d8e] text-lg">
            {pulseData.normalRanges.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-[#3393d2] text-white">
              <tr>
                {pulseData.normalRanges.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {pulseData.normalRanges.rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {row.age}
                  </td>
                  <td className="px-6 py-4">{row.range}</td>
                  <td className="px-6 py-4">{row.average}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pulse Assessment Technique */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {pulseData.assessmentTechnique.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pulseData.assessmentTechnique.methods.map((method, index) => (
            <div
              key={index}
              className="border border-[#3393d2] rounded-lg p-6 bg-white"
            >
              <h3 className="font-bold text-[#3393d2] text-lg mb-4">
                {method.title}
              </h3>
              <ol className="space-y-2 list-decimal ml-5 text-[15px] text-slate-700">
                {method.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Pulse Characteristics */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {pulseData.characteristics.title}
        </h2>
        <div className="bg-[#fff9e6] border-l-4 border-amber-400 rounded-lg p-6">
          <h3 className="font-bold text-amber-600 text-lg mb-4">
            {pulseData.characteristics.boxTitle}
          </h3>
          <ul className="space-y-4">
            {pulseData.characteristics.items.map((item, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                <div className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                  <span>
                    <span className="font-bold text-slate-900">
                      {item.label}:
                    </span>{" "}
                    {item.text}
                  </span>
                </div>
                {item.subItems && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {item.subItems.map((sub, sIndex) => (
                      <li
                        key={sIndex}
                        className="flex gap-2 items-center text-sm"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0 border border-slate-500" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="space-y-8 mb-12">
        <InfoBox data={pulseNclexPoints} />
        <InfoBox data={pulseCriticalFindings} />
      </div>
    </main>
  );
}
