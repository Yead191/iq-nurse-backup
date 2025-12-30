import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  thirdDegreeIntro,
  definingCharacteristics,
  escapePacemaker,
  commonCauses,
  lifeThreateningEmergency,
  signsAndSymptoms,
  nursingAssessment,
  management,
  nursingInterventions,
  postPacemakerCare,
  patientEducation,
  quickReference,
  nclexHighYield,
  block2to1,
  highGradeBlock,
} from "@/data/ecg/thirdDegreeData";
import { Stethoscope, Target, Zap } from "lucide-react";
import Image from "next/image";

export default function ThirdDegree() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {thirdDegreeIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {thirdDegreeIntro.description}
        </p>

        {/* ECG Strip Placeholder */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/heart/heart3.png"
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
                  Third-Degree AV Block Criteria
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
      </div>

      {/* Escape Pacemaker Location */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Escape Pacemaker Location
        </h2>
        <ul className="space-y-6">
          {escapePacemaker.map((item, index) => (
            <li key={index} className="flex flex-col gap-2">
              <div className="font-bold text-slate-900 text-[15px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                {item.location}:
              </div>
              <ul className="pl-6 space-y-1">
                {item.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex gap-2 items-center"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Common Causes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-4">
          Common Causes
        </h2>
        <ul className="space-y-3">
          {commonCauses.map((item, index) => (
            <li key={index} className="text-[15px] text-slate-700">
              <span className="font-bold text-slate-900">• {item.cause}:</span>{" "}
              {item.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Life-Threatening Emergency Box */}
      <InfoBox data={lifeThreateningEmergency} />

      {/* Signs and Symptoms */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Signs and Symptoms
        </h2>
        <ul className="space-y-3 ml-1">
          {signsAndSymptoms.map((item, index) => (
            <li key={index} className="text-[15px] text-slate-700">
              <span className="font-bold text-slate-900">• {item.sign}:</span>{" "}
              {item.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Nursing Assessment (Critical) */}
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm mb-12">
        <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
          <Stethoscope className="w-5 h-5" /> Critical Assessment
        </h3>
        <ul className="space-y-3">
          {nursingAssessment.map((item, index) => (
            <li key={index} className="text-[15px] text-slate-700">
              <span className="font-bold text-red-700">• {item.action}:</span>{" "}
              {item.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Management and Treatment */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Management and Treatment
        </h2>

        <h3 className="text-lg font-bold text-[#337ab7] mb-4">
          Immediate Management
        </h3>

        {/* Emergency Interventions */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-8">
          <h4 className="text-sm font-bold text-red-600 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4" /> Emergency Interventions
          </h4>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-slate-800 text-sm mb-2">
                • Assess stability: Determine if patient is stable or unstable
              </p>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm mb-2">
                • If unstable (hypotensive, altered mental status, chest pain):
              </p>
              <ul className="pl-6 space-y-1">
                {management.immediate.unstable.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700 flex gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full mt-2" />
                    <span>
                      <span className="font-bold">{item.action}:</span>{" "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm mb-2">
                • If stable:
              </p>
              <ul className="pl-6 space-y-1">
                {management.immediate.stable.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700 flex gap-2">
                    <span className="w-1 h-1 bg-red-400 rounded-full mt-2" />
                    <span>
                      <span className="font-bold">{item.action}:</span>{" "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                {management.immediate.general.map((item, i) => (
                  <li key={i} className="text-sm text-slate-700">
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

        <h3 className="text-lg font-bold text-[#337ab7] mb-4">
          Definitive Treatment
        </h3>
        <div className="grid md:grid-cols-1 gap-6">
          {management.definitive.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-5"
            >
              <h4 className="font-bold text-slate-900 mb-1">
                {item.title}{" "}
                {item.detail && (
                  <span className="font-normal text-slate-500">
                    : {item.detail}
                  </span>
                )}
              </h4>
              <ul className="pl-5 list-disc space-y-1 mt-2">
                {item.points.map((pt, i) => (
                  <li key={i} className="text-sm text-slate-600">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Nursing Interventions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Nursing Interventions
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5" /> Critical Care Management
          </h3>
          <ul className="space-y-3">
            {nursingInterventions.map((item, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                <span className="font-bold text-red-700">• {item.action}:</span>{" "}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Post Pacemaker Care */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Post-Pacemaker Care
        </h2>
        <ul className="space-y-3">
          {postPacemakerCare.map((item, index) => (
            <li key={index} className="text-[15px] text-slate-700">
              <span className="font-bold text-slate-900">• {item.action}:</span>{" "}
              {item.detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Patient Education */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Patient Education
        </h2>
        <ul className="space-y-3">
          {patientEducation.map((item, index) => (
            <li key={index} className="text-[15px] text-slate-700">
              <span className="font-bold text-slate-900">• {item.topic}:</span>{" "}
              {item.detail}
            </li>
          ))}
        </ul>
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
              className={`px-4 py-1.5 rounded-full text-xs font-bold ${badge.color} flex items-center gap-2 shadow-sm uppercase tracking-wide`}
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

      {/* Divider */}
      <div className="my-16 h-px bg-slate-200" />

      {/* --- Second-Degree 2:1 Conduction --- */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#1e5d8e] mb-8">
          {block2to1.title}
        </h2>

        {/* 2:1 ECG Strip Placeholder */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/heart/heart4.png"
            alt="nsr-img"
            width={1600}
            height={800}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>

        {/* 2:1 Characteristics Table */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
            ECG Characteristics
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Parameter
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Finding
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {block2to1.characteristics.map((row, index) => (
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
        </div>

        {/* 2:1 Clinical Significance */}
        <InfoBox data={block2to1.clinicalSignificance} className="mb-12" />

        {/* 2:1 Nursing Assessment - Blue Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-bold text-[#1e5d8e] mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />{" "}
            {block2to1.nursingAssessment.title}
          </h3>
          <ul className="space-y-3">
            {block2to1.nursingAssessment.points.map((point, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                {point.includes(":") ? (
                  <>
                    <span className="font-bold text-[#1e5d8e]">
                      • {point.split(":")[0]}:
                    </span>
                    {point.split(":")[1]}
                  </>
                ) : (
                  <>• {point}</>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 2:1 NCLEX High Yield */}
        <InfoBox data={block2to1.nclexHighYield} />
      </section>

      {/* --- High-Grade AV Block --- */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[#1e5d8e] mb-8">
          {highGradeBlock.title}
        </h2>

        {/* High-Grade ECG Strip Placeholder */}
        <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[200px]">
          <div className="flex items-center justify-center gap-2 opacity-80 mb-4 w-full overflow-hidden">
            <svg
              className="w-full text-slate-600"
              height="120"
              viewBox="0 0 800 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <rect width="800" height="120" fill="url(#grid-3rd-new)" />
              {/* 
                  High Grade (3:1) Logic:
                  P waves regular. 2 blocked, 1 conducted.
                  P-QRS --- P(blocked) --- P(blocked) --- P-QRS
                  
                  P intervals: 120 units
                  Ps at: 50, 170, 290, 410, 530, 650, 770
                  Conducted: 50, 410, 770
                  Blocked: 170, 290, 530, 650
              */}
              <path
                d="M 0 60 L 50 60
                   Q 60 45 70 60  
                   L 80 60 L 85 70 L 95 10 L 105 70 L 110 60 
                   L 170 60
                   Q 180 45 190 60 
                   L 290 60
                   Q 300 45 310 60 
                   L 410 60
                   Q 420 45 430 60
                   L 440 60 L 445 70 L 455 10 L 465 70 L 470 60
                   L 530 60
                   Q 540 45 550 60 
                   L 650 60
                   Q 660 45 670 60
                   L 770 60
                   Q 780 45 790 60
                   L 800 60"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="350"
                y="100"
                className="text-[12px] fill-red-600 font-bold"
              >
                3:1 or 4:1 BLOCK
              </text>
            </svg>
          </div>
          <p className="text-sm font-medium text-[#1e5d8e]/80">
            High-Grade AV Block - Multiple consecutive P waves blocked (3:1,
            4:1, or worse)
          </p>
        </div>

        {/* High-Grade Characteristics Table */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
            ECG Characteristics
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Parameter
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Finding
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {highGradeBlock.characteristics.map((row, index) => (
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
        </div>

        {/* High-Grade Clinical Significance */}
        <InfoBox data={highGradeBlock.clinicalSignificance} className="mb-12" />

        {/* High-Grade Nursing Assessment - Blue Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <h3 className="text-lg font-bold text-[#1e5d8e] mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" />{" "}
            {highGradeBlock.nursingAssessment.title}
          </h3>
          <ul className="space-y-3">
            {highGradeBlock.nursingAssessment.points.map((point, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                {point.includes(":") ? (
                  <>
                    <span className="font-bold text-[#1e5d8e]">
                      • {point.split(":")[0]}:
                    </span>
                    {point.split(":")[1]}
                  </>
                ) : (
                  <>• {point}</>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* High-Grade NCLEX High Yield */}
        <InfoBox data={highGradeBlock.nclexHighYield} />
      </section>
    </main>
  );
}
