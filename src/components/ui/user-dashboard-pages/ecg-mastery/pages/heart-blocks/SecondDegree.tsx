import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  secondDegreeIntro,
  mobitzType1,
  mobitzType2,
  comparisonTable,
  nursingManagement,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/secondDegreeData";
import { Stethoscope, Siren } from "lucide-react";
import Image from "next/image";

export default function SecondDegree() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {secondDegreeIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-12">
          {secondDegreeIntro.description}
        </p>

        {/* --- Mobitz Type I Section --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            {mobitzType1.title}
          </h2>

          {/* Type I ECG Strip */}
          <div className="flex justify-center items-center mb-10">
            <Image
              src="/assets/images/dashboard/ecg/heart/heart2.png"
              alt="nsr-img"
              width={1600}
              height={800}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            Mobitz Type I Characteristics
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Parameter
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Mobitz Type I Criteria
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {mobitzType1.characteristics.map((row, index) => (
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
                    <td className="px-6 py-4 text-slate-600">{row.criteria}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            Mobitz Type I - Clinical Significance
          </h3>
          <InfoBox data={mobitzType1.clinicalSignificance} />
        </section>

        {/* --- Mobitz Type II Section --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            {mobitzType2.title}
          </h2>

          {/* Type II ECG Strip */}
          <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[220px]">
            <div className="flex items-center justify-center gap-2 opacity-80 mb-4 w-full overflow-hidden">
              <svg
                className="w-full text-slate-600"
                height="100"
                viewBox="0 0 800 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="grid-type2"
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
                <rect width="800" height="100" fill="url(#grid-type2)" />

                {/* 
                  Mobitz II Pattern:
                  Constant PR interval (normal or prolonged, but constant).
                  Sudden dropped QRS.
                  Sequence:
                  1. Beat
                  2. Beat
                  3. Dropped QRS (P only)
                  4. Beat
                  5. Dropped QRS
                */}
                <path
                  d="
                    M 0 50 L 50 50
                    C 60 35 70 35 80 50
                    L 110 50             
                    L 115 60 L 125 10 L 135 60 L 140 50 
                    L 160 50            
                    C 170 40 190 40 200 50

                    L 250 50
                    C 260 35 270 35 280 50
                    L 310 50             
                    L 315 60 L 325 10 L 335 60 L 340 50 
                    L 360 50            
                    C 370 40 390 40 400 50

                    L 450 50     
                    C 460 35 470 35 480 50
                    L 530 50    
                    
                    L 550 50
                    C 560 35 570 35 580 50
                    L 610 50             
                    L 615 60 L 625 10 L 635 60 L 640 50 
                    L 660 50            
                    C 670 40 690 40 700 50

                    L 750 50
                    C 760 35 770 35 780 50
                    L 800 50
                  "
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Dropped QRS Indicators */}
                <text
                  x="460"
                  y="70"
                  className="text-[10px] fill-red-600 font-bold"
                >
                  Dropped QRS
                </text>
                <path
                  d="M 450 55 Q 460 45 470 55"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-80"
                />

                <text
                  x="760"
                  y="70"
                  className="text-[10px] fill-red-600 font-bold"
                >
                  Dropped QRS
                </text>
                <path
                  d="M 750 55 Q 760 45 770 55"
                  stroke="#ef4444"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-80"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-[#1e5d8e]/80">
              Mobitz Type II - Constant PR interval with sudden dropped QRS
              complexes
            </p>
          </div>

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            Mobitz Type II Characteristics
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Parameter
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Mobitz Type II Criteria
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {mobitzType2.characteristics.map((row, index) => (
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
                          row.isHighlight ? "font-bold text-slate-900" : ""
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

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            Mobitz Type II - Clinical Significance
          </h3>
          <InfoBox data={mobitzType2.clinicalSignificance} />
        </section>

        {/* --- Comparison Table --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            Comparison: Type I vs. Type II
          </h2>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Feature
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Mobitz Type I (Wenckebach)
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Mobitz Type II
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                      ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      hover:bg-blue-50/50 transition-colors duration-150
                    `}
                  >
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.type1}</td>
                    <td className="px-6 py-4 text-slate-600 font-medium">
                      {row.type2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- Nursing Management --- */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            Nursing Management
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Type I Management */}
            <div>
              <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
                For Mobitz Type I
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h4 className="text-sm font-bold text-red-500 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-4 h-4" /> Monitoring Approach
                </h4>
                <ul className="space-y-2">
                  {nursingManagement.type1.map((item, index) => (
                    <li key={index} className="text-[14px] text-slate-700">
                      <span className="font-bold text-slate-800">
                        • {item.action}:
                      </span>{" "}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Type II Management */}
            <div>
              <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
                For Mobitz Type II
              </h3>
              <div className="bg-red-50 border border-red-100 rounded-xl p-6">
                <h4 className="text-sm font-bold text-red-600 mb-4 flex items-center gap-2">
                  <Siren className="w-4 h-4" /> Urgent Management
                </h4>
                <ul className="space-y-2">
                  {nursingManagement.type2.map((item, index) => (
                    <li key={index} className="text-[14px] text-slate-700">
                      <span className="font-bold text-slate-800">
                        • {item.action}:
                      </span>{" "}
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Quick Reference --- */}
        <section className="bg-[#1e5d8e] text-white rounded-xl p-8 mb-12 shadow-lg">
          <h2 className="text-xl font-bold mb-6">{quickReference.title}</h2>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Type I Quick Ref */}
            <div>
              <h3 className="text-md font-bold mb-3 opacity-90">
                {quickReference.type1.title}
              </h3>
              {/* Badges */}
              <div className="flex flex-wrap gap-4 mb-3">
                {quickReference.type1.badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${badge.color} flex items-center gap-2 shadow-sm`}
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {quickReference.type1.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-md opacity-90 flex gap-2 items-start"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-white shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Type II Quick Ref */}
            <div>
              <h3 className="text-md font-bold mb-3 opacity-90">
                {quickReference.type2.title}
              </h3>
              {/* Badges */}
              <div className="flex flex-wrap gap-4 mb-3">
                {quickReference.type2.badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`px-3 py-1 rounded-full text-xs font-bold ${badge.color} flex items-center gap-2 shadow-sm`}
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {quickReference.type2.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-md opacity-90 flex gap-2 items-start"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-white shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* NCLEX High Yield */}
        <InfoBox data={nclexHighYield} />
      </div>
    </main>
  );
}
