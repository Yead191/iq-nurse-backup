import React from "react";
import {
  temperatureData,
  nclexPoints,
  criticalFindings,
} from "@/data/vital-signs/temperatureData";
import { InfoBox } from "@/components/shared/InfoBox";
import { Thermometer } from "lucide-react";

export default function TemperaturePage() {
  return (
    <main>
      <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-4">
        <Thermometer className="w-8 h-8 text-red-500" />
        <h1 className="text-3xl font-bold text-[#1e5d8e]">
          {temperatureData.title}
        </h1>
      </div>

      {/* Normal Ranges Table */}
      <div className="mb-10 shadow-sm border border-slate-100 rounded-lg overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="font-bold text-[#1e5d8e] text-lg">
            {temperatureData.normalRanges.title}
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-700">
            <thead className="bg-[#3393d2] text-white">
              <tr>
                {temperatureData.normalRanges.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {temperatureData.normalRanges.rows.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900">
                    {row.route}
                  </td>
                  <td className="px-6 py-4">{row.rangeF}</td>
                  <td className="px-6 py-4">{row.rangeC}</td>
                  <td className="px-6 py-4 text-slate-500">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Classifications Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {temperatureData.classifications.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {temperatureData.classifications.items.map((item, index) => (
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
              <p className="font-bold text-slate-800 mb-3">{item.range}</p>
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

      {/* Info Boxes */}
      <div className="space-y-8 mb-12">
        <InfoBox data={nclexPoints} />
        <InfoBox data={criticalFindings} />
      </div>
    </main>
  );
}
