import React from "react";
import {
  respirationData,
  respirationNclexPoints,
  respirationCriticalFindings,
} from "@/data/vital-signs/respirationData";
import { InfoBox } from "@/components/shared/InfoBox";
import { BsFillLungsFill } from "react-icons/bs";

export default function RespirationPage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <BsFillLungsFill className="w-8 h-8 text-red-300" />
        <h1 className="text-3xl font-bold text-[#1e5d8e]">
          {respirationData.title}
        </h1>
      </div>

      {/* Normal Ranges Table */}
      <div className="mb-10 shadow-sm border border-slate-100 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-[#1e5d8e] text-lg">
            {respirationData.normalRanges.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-[#3393d2] text-white">
              <tr>
                {respirationData.normalRanges.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {respirationData.normalRanges.rows.map((row, index) => (
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

      {/* Respiratory Assessment Technique */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {respirationData.assessmentTechnique.title}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {respirationData.assessmentTechnique.methods.map((method, index) => (
            <div
              key={index}
              className="border border-[#3393d2] rounded-lg p-6 bg-white"
            >
              <h3 className="font-bold text-[#3393d2] text-lg mb-4">
                {method.title}
              </h3>
              <ol className="space-y-2 list-decimal ml-5 text-[15px] text-slate-700">
                {method.steps.map((step, i) => (
                  <li key={i}>
                    {/* Check if the step contains 'without' to bold it as in screenshot */}
                    {step.includes("without") ? (
                      <>
                        {step.split("without")[0]}
                        <span className="font-bold">without</span>
                        {step.split("without")[1]}
                      </>
                    ) : (
                      step
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Respiratory Patterns Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {respirationData.patterns.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {respirationData.patterns.items.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-lg p-6 bg-white shadow-[0_2px_8px_-3px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[#3393d2] text-lg mb-3">
                {item.title}
              </h3>
              <div
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${item.tagColor}`}
              >
                {item.tag}
              </div>
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex gap-2 items-start"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                    <span>
                      {/* Bold the label if it contains a colon */}
                      {point.includes(":") ? (
                        <>
                          <span className="font-bold text-slate-800">
                            {point.split(":")[0]}:
                          </span>
                          {point.split(":")[1]}
                        </>
                      ) : (
                        point
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Info Boxes */}
      <div className="space-y-8 mb-12">
        <InfoBox data={respirationNclexPoints} />
        <InfoBox data={respirationCriticalFindings} />
      </div>
    </main>
  );
}
