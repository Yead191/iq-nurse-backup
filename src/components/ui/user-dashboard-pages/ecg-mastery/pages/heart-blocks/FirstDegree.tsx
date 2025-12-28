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
        <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[200px]">
          <div className="flex items-center justify-center gap-2 opacity-80 mb-4 w-full overflow-hidden">
            <svg
              className="w-full text-slate-600"
              height="100"
              viewBox="0 0 800 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Grid Background (Optional, kept simple) */}
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(200,200,200,0.3)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="800" height="100" fill="url(#grid)" />

              {/* 
                  First Degree AV Block ECG Path
                  Key characteristics: Regular rhythm, P wave before every QRS, PROLONGED PR interval.
                  Normal P wave: ~80ms width
                  PR Interval to simulate: >200ms (so distance from P start to QRS start must be visibly long)
                
                  Let's design one beat and repeat it.
                  Beat dimensions (approx):
                  - Isoelectric: 50
                  - P wave: 30 wide
                  - PR segment (prolonged): 40 wide (Total PR ~70 visual units)
                  - QRS: 20 wide
                  - ST segment: 20 wide
                  - T wave: 40 wide
                  - Isoelectric: 50
                  
                  Total beat width ~250.
                  Sequence:
                  Start baseline: M 0 50
                  Beat 1: P(up), flat(long), Q(down), R(up), S(down), flat, T(up), flat
              */}
              <path
                d="
                  M 0 50 L 50 50 
                  C 60 35 70 35 80 50  
                  L 130 50             
                  L 135 60 L 145 10 L 155 60 L 160 50 
                  L 180 50             
                  C 190 35 210 35 220 50 
                  L 300 50
                  
                  C 310 285 320 285 330 50 
                  L 380 50              
                  L 385 60 L 395 10 L 405 60 L 410 50 
                  L 430 50              
                  C 440 35 460 35 470 50 
                  L 550 50

                   C 560 35 570 35 580 50 
                   L 630 50              
                   L 635 60 L 645 10 L 655 60 L 660 50 
                   L 680 50              
                   C 690 35 710 35 720 50 
                   L 800 50
                "
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Highlight PR Interval (First beat) */}
              <path
                d="M 50 70 L 135 70"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4 2"
              />
              <text
                x="80"
                y="85"
                className="text-[10px] fill-blue-600 font-bold"
              >
                Prolonged PR
              </text>

              {/* P Wave Highlight */}
              <path
                d="M 55 35 Q 65 25 75 35"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                className="opacity-60"
              />

              {/* QRS Highlight */}
              <path
                d="M 135 80 L 145 80 L 155 80"
                stroke="#22c55e"
                strokeWidth="2"
                strokeDasharray="4 2"
                className="opacity-0"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-[#1e5d8e]/80">
            First-Degree AV Block - Regular rhythm with prolonged PR interval
            (&gt;0.20 seconds)
          </p>
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
