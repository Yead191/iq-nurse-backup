import React from "react";
import {
  measurementSystemsHeader,
  metricSystemData,
  householdSystemData,
  weightConversionsData,
  apothecarySystemData,
} from "@/data/dosage-calculation/measurementSystemsData";
import { InfoBox } from "@/components/shared/InfoBox";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

export default function MeasurementSystems() {
  return (
    <main>
      {/* Page Header */}
      <SecondaryHeader title={measurementSystemsHeader.title} />
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-5xl">
        {measurementSystemsHeader.description}
      </p>

      {/* Metric System Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-4">Metric System</h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {metricSystemData.description}
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7e57c2] text-white">
                {metricSystemData.table.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {metricSystemData.table.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {row.unit}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {row.abbreviation}
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">
                    {row.equivalent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4">
          <InfoBox data={metricSystemData.safetyAlert} />
          <InfoBox data={metricSystemData.example} />
        </div>
      </section>

      {/* Household System Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-4">
          Household System
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {householdSystemData.description}
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7e57c2] text-white">
                {householdSystemData.table.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {householdSystemData.table.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {row.unit}
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">
                    {row.equivalent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <InfoBox data={householdSystemData.clinicalPearl} />
      </section>

      {/* Weight Conversions Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-4">
          Weight Conversions
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {weightConversionsData.description}
        </p>

        {/* Formulas Box */}
        <div className="bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB] border border-[#2196F3] rounded-xl p-8 mb-6 flex flex-col items-center justify-center text-center shadow-sm">
          <span className="text-[#1565c0] text-sm uppercase tracking-widest mb-4 opacity-80 font-bold">
            {weightConversionsData.formulas.title}
          </span>
          <div className="space-y-2">
            {weightConversionsData.formulas.items.map((formula, idx) => (
              <div
                key={idx}
                className="text-[#1565c0] font-bold text-lg md:text-xl"
              >
                {formula}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <InfoBox data={weightConversionsData.highlight} />
          <InfoBox data={weightConversionsData.example} />
        </div>
      </section>

      {/* Apothecary System Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-4">
          Apothecary System
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          {apothecarySystemData.description}
        </p>

        <div className="space-y-4">
          <InfoBox data={apothecarySystemData.conversions} />
          <InfoBox data={apothecarySystemData.clinicalPearl} />
        </div>
      </section>
    </main>
  );
}
