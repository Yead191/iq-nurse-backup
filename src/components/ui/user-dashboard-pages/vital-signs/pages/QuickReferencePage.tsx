import React from "react";
import { quickReferenceData } from "@/data/vital-signs/quickReferenceData";
import { BarChart3, CheckSquare } from "lucide-react";

export default function QuickReferencePage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <BarChart3 className="w-8 h-8 text-[#1e5d8e]" />
        <h1 className="text-3xl font-bold text-[#1e5d8e]">
          {quickReferenceData.title}
        </h1>
      </div>

      <div className="mb-8 p-6 bg-slate-50 border border-slate-100 rounded-lg shadow-sm">
        <h3 className="font-bold text-[#1e5d8e] text-xl mb-6">
          {quickReferenceData.summaryTable.title}
        </h3>

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#3498db] text-white">
                {quickReferenceData.summaryTable.headers.map(
                  (header, index) => (
                    <th key={index} className="px-6 py-4 font-bold text-[15px]">
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {quickReferenceData.summaryTable.rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-slate-900 font-bold text-[15px]">
                    {row.vitalSign}
                  </td>
                  <td className="px-6 py-4 text-slate-700 text-[15px]">
                    {row.normalRange}
                  </td>
                  <td className="px-6 py-4 text-slate-700 text-[15px]">
                    {row.criticalLow}
                  </td>
                  <td className="px-6 py-4 text-slate-700 text-[15px]">
                    {row.criticalHigh}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-10 p-6 bg-[#d4edda] border border-[#c3e6cb] rounded-lg shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <CheckSquare className="w-5 h-5 text-green-700" />
          <h3 className="font-bold text-green-800 text-lg">
            Remember for NCLEX Success:
          </h3>
        </div>
        <ul className="space-y-2.5">
          {quickReferenceData.nclexTips.map((tip, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
