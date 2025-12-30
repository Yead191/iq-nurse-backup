import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  firstDegreeIntro,
  definingCharacteristics,
  commonCauses,
  clinicalSignificance,
  nursingManagement,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/firstDegreeData";
import { Stethoscope } from "lucide-react";
import Image from "next/image";

export default function FirstDegree() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {firstDegreeIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {firstDegreeIntro.description}
        </p>

        {/* ECG Strip Placeholder */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/heart/heart1.png"
            alt="nsr-img"
            width={1600}
            height={800}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Defining Characteristics Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-4">
          Defining Characteristics
        </h2>
        <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Parameter
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  First-Degree AV Block Criteria
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {definingCharacteristics.map((row, index) => (
                <tr
                  key={index}
                  className={`
                    ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    hover:bg-blue-50/50 transition-colors duration-150
                  `}
                >
                  <td className="px-6 py-4 font-bold text-slate-700 w-1/4">
                    {row.parameter}
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <span
                      className={`${
                        row.isHighlight ? "font-bold text-[#1e5d8e]" : ""
                      }`}
                    >
                      {row.criteria}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Causes and Clinical Significance Grid */}
      <div>
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-4">
          Common Causes
        </h2>
        <div className="h-full mb-12">
          <ul className="space-y-3">
            {Object.entries(commonCauses).map(([key, value], index) => (
              <li key={index} className="text-[14px] flex flex-col">
                <span className="font-bold text-slate-800 mb-0.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1e5d8e] rounded-full shrink-0"></span>
                  {key}
                </span>
                <span className="text-slate-600 ml-3.5 leading-relaxed">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-4">
            Clinical Significance
          </h2>
          <div className="h-full">
            <InfoBox data={clinicalSignificance} className="h-full" />
          </div>
        </div>
      </div>

      {/* Nursing Management Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Nursing Management
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" /> Monitoring and Assessment
          </h3>
          <ul className="grid md:grid-cols-1 gap-4">
            {nursingManagement.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>
                  <span className="font-bold text-slate-900">
                    {item.action}:
                  </span>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Reference Box */}
      <div className="bg-[#1e5d8e] text-white rounded-xl p-8 mb-12 shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
          {quickReference.title}
        </h2>

        {/* Badges */}
        <div className="flex flex-wrap gap-4 mb-8">
          {quickReference.badges.map((badge, i) => (
            <div
              key={i}
              className={`px-4 py-1.5 rounded-full text-sm font-bold ${badge.color} flex items-center gap-2 shadow-sm`}
            >
              {badge.label}
            </div>
          ))}
        </div>

        <ul className="space-y-4">
          {quickReference.points.map((point, i) => (
            <li key={i} className="font-medium flex gap-3 text-lg opacity-90">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* NCLEX High Yield */}
      <InfoBox data={nclexHighYield} />
    </main>
  );
}
