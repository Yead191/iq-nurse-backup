import React from "react";
import {
  bloodPressureData,
  bloodPressureNclexPoints,
  bloodPressureCriticalFindings,
} from "@/data/vital-signs/bloodPressureData";
import { InfoBox } from "@/components/shared/InfoBox";
import { MdOutlineBloodtype } from "react-icons/md";
import { AlertTriangle } from "lucide-react";
import { LuStethoscope } from "react-icons/lu";

export default function BloodPressurePage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <LuStethoscope className="w-8 h-8 text-black" />
        <h1 className="text-2xl lg:text-3xl font-bold text-[#1e5d8e]">
          {bloodPressureData.title}
        </h1>
      </div>

      {/* Adult Classifications Table */}
      <div className="mb-10 shadow-sm border border-slate-100 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-[#1e5d8e] text-lg">
            {bloodPressureData.adultClassifications.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-[#3393d2] text-white">
              <tr>
                {bloodPressureData.adultClassifications.headers.map(
                  (header, index) => (
                    <th key={index} className="px-6 py-4 font-bold">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {bloodPressureData.adultClassifications.rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 border-r border-slate-50">
                    <div className="flex items-center gap-2">
                      {row.category}
                      {row.tag && (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${row.tagColor}`}
                        >
                          {row.tag}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-r border-slate-50">
                    {row.systolic}
                  </td>
                  <td className="px-6 py-4 italic text-slate-500 border-r border-slate-50">
                    {row.logic}
                  </td>
                  <td className="px-6 py-4">{row.diastolic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pediatric Ranges Table */}
      <div className="mb-10 shadow-sm border border-slate-100 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-[#1e5d8e] text-lg">
            {bloodPressureData.pediatricRanges.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-[#3393d2] text-white">
              <tr>
                {bloodPressureData.pediatricRanges.headers.map(
                  (header, index) => (
                    <th key={index} className="px-6 py-4 font-bold">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {bloodPressureData.pediatricRanges.rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 border-r border-slate-50">
                    {row.age}
                  </td>
                  <td className="px-6 py-4 border-r border-slate-50">
                    {row.systolic}
                  </td>
                  <td className="px-6 py-4">{row.diastolic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assessment Technique */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {bloodPressureData.assessmentTechnique.title}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {bloodPressureData.assessmentTechnique.methods.map(
            (method, index) => (
              <div
                key={index}
                className="border border-[#3393d2] rounded-lg p-6 bg-white"
              >
                <h3 className="font-bold text-[#3393d2] text-lg mb-4">
                  {method.title}
                </h3>
                <div className="space-y-6">
                  {method.sections?.map((section, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="font-bold text-slate-800 mb-2">
                        {section.label}
                      </h4>
                      <ul className="space-y-1 ml-5 list-disc text-[15px] text-slate-600">
                        {section.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Korotkoff Sounds */}
      <div className="mb-8 p-6 bg-[#fff9e6] border-l-4 border-amber-400 rounded-lg">
        <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
          {bloodPressureData.korotkoff.title}
        </h3>
        <div className="bg-[#fff9e6] rounded-lg">
          <h4 className="font-bold text-amber-600 mb-4 italic">
            {bloodPressureData.korotkoff.boxTitle}
          </h4>
          <ul className="space-y-3">
            {bloodPressureData.korotkoff.items.map((item, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                <div className="flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
                  <span>
                    <span className="font-bold text-slate-900">
                      {item.phase}
                    </span>{" "}
                    {item.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NCLEX Box */}
      <div className="mb-8">
        <InfoBox data={bloodPressureNclexPoints} />
      </div>

      {/* Common Errors */}
      <div className="mb-8 p-6 bg-[#fff9e6] border-l-4 border-amber-400 rounded-lg">
        <h3 className="font-bold text-amber-600 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          {bloodPressureData.commonErrors.title}:
        </h3>
        <ul className="space-y-2 ml-5 list-disc text-[15px] text-slate-700">
          {bloodPressureData.commonErrors.items.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>

      {/* Critical Findings */}
      <div className="mb-12">
        <InfoBox data={bloodPressureCriticalFindings} />
      </div>
    </main>
  );
}
