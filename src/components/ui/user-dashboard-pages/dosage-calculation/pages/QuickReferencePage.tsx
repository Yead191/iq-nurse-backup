import React from "react";
import {
  quickReferenceHeader,
  essentialFormulas,
  criticalConversions,
  safetyChecklistData,
} from "@/data/dosage-calculation/quickReferenceData";
import SecondaryHeader from "@/components/shared/SecondaryHeader";
import { Check } from "lucide-react";

export default function QuickReferencePage() {
  return (
    <main>
      {/* Page Header */}
      <SecondaryHeader title={quickReferenceHeader.title} />

      {/* Essential Formulas */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-6">
          Essential Formulas
        </h2>
        <div className="space-y-4">
          {essentialFormulas.map((formula, index) => (
            <div
              key={index}
              className="bg-[#d6eafb] border border-[#aed3f2] rounded-xl p-6 flex items-center justify-center text-center shadow-sm"
            >
              <span className="text-[#1565c0] font-bold text-lg md:text-xl">
                {formula}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Conversions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-6">
          Critical Conversions
        </h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7e57c2] text-white">
                {criticalConversions.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {criticalConversions.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {row.from}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{row.to}</td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">
                    {row.conversion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Safety Checklist */}
      <section>
        <h2 className="text-xl font-bold text-[#8e24aa] mb-6">
          Safety Checklist
        </h2>
        <div className="bg-[#fff8e1] border border-[#ffecb3] rounded-xl p-8 shadow-sm">
          <ul className="space-y-4">
            {safetyChecklistData.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-600 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
