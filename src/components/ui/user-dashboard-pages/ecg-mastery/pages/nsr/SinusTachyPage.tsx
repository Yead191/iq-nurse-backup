import { InfoBox } from "@/components/shared/InfoBox";
import {
  pageIntro,
  definingCharacteristics,
  commonCauses,
  clinicalSignificance,
  signsAndSymptoms,
  nursingAssessment,
  nursingInterventions,
  patientEducation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/sinusTachyData";
import { Activity } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SinusTachyPage() {
  return (
    <main>
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {pageIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {pageIntro.description}
        </p>

        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/nsr/nsr2.png"
            alt="nsr-img"
            width={1400}
            height={800}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Defining Characteristics Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Defining Characteristics
        </h2>

        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">
                  Sinus Tachycardia Criteria
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {definingCharacteristics.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}
                >
                  <td className="px-6 py-4 font-bold text-slate-700">
                    {row.parameter}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Causes */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Common Causes</h2>
        <p className="text-[15px] text-slate-600 mb-6">
          Sinus tachycardia is the heart&apos;s normal response to increased
          demand. Identifying the underlying cause is essential for appropriate
          treatment:
        </p>

        <div className="space-y-8">
          {/* Physiological */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-3">
              Physiological Causes (Normal Response)
            </h3>
            <ul className="space-y-2 ml-1">
              {commonCauses.physiological.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] text-slate-700"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <span className="font-semibold">{item.split(":")[0]}:</span>
                    {item.split(":")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pathological */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-3">
              Pathological Causes (Requires Treatment)
            </h3>
            <ul className="space-y-2 ml-1">
              {commonCauses.pathological.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] text-slate-700"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <span className="font-semibold">{item.split(":")[0]}:</span>
                    {item.split(":")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Medication */}
          <div>
            <h3 className="text-lg font-bold text-blue-600 mb-3">
              Medication-Related Causes
            </h3>
            <ul className="space-y-2 ml-1">
              {commonCauses.medication.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] text-slate-700"
                >
                  <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>
                    <span className="font-semibold">{item.split(":")[0]}:</span>
                    {item.split(":")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <InfoBox data={clinicalSignificance} />
        </div>
      </div>

      {/* Signs and Symptoms */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Signs and Symptoms
        </h2>
        <p className="text-[15px] text-slate-600 mb-4">
          Patients may experience:
        </p>
        <ul className="space-y-2 mb-6 ml-1">
          {signsAndSymptoms.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm italic text-slate-500">
          <span className="font-bold">Note:</span> Many patients with sinus
          tachycardia are asymptomatic, especially if the rate is only mildly
          elevated or if the tachycardia developed gradually.
        </p>
      </div>

      {/* Nursing Assessment */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Assessment
        </h2>
        <InfoBox data={nursingAssessment} />
      </div>

      {/* Nursing Interventions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Interventions
        </h2>

        {/* Priority Interventions Box - Custom styling to match screenshot somewhat or use a simple card */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-bold text-red-500">
              Priority Interventions
            </h3>
          </div>
          <ul className="space-y-4">
            {nursingInterventions.priority.map((item, i) => (
              <li key={i} className="text-[15px] text-slate-700">
                <span className="font-bold text-slate-900">
                  • {item.action}:
                </span>{" "}
                {item.detail}
                {item.subItems && (
                  <ul className="pl-6 mt-1 space-y-1">
                    {item.subItems.map((sub, j) => (
                      <li key={j} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-red-400 text-xs mt-1">○</span>{" "}
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">
          Medical Management
        </h3>
        <p className="text-[15px] text-slate-600 mb-4">
          Treatment focuses on addressing the underlying cause rather than the
          tachycardia itself:
        </p>
        <ul className="space-y-2 mb-8 ml-1">
          {nursingInterventions.medical.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>
                <span className="font-bold text-slate-800">
                  {item.split(":")[0]}:
                </span>
                {item.split(":")[1]}
              </span>
            </li>
          ))}
        </ul>

        <InfoBox data={nursingInterventions.escalate} />
      </div>

      {/* Patient Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Patient Education
        </h2>
        <ul className="space-y-2 ml-1">
          {patientEducation.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Reference Box - Custom Blue */}
      <div className="bg-[#1e5d8e] text-white rounded-xl p-8 mb-12 shadow-md">
        <h2 className="text-xl font-bold mb-4">{quickReference.title}</h2>
        <p className="font-medium mb-4">{quickReference.description}</p>

        {/* Pills/Badges */}
        <div className="flex flex-wrap gap-4 mb-6">
          {quickReference.points.map((point, i) => (
            <div
              key={i}
              className={`px-4 py-1.5 rounded-full text-sm font-bold text-slate-800 ${point.color} flex items-center gap-2 shadow-sm`}
            >
              {point.label === "Usually Stable" ? (
                <span>{point.label}</span>
              ) : (
                <>
                  <span className="opacity-70">{point.label}:</span>
                  <span>{point.value}</span>
                </>
              )}
            </div>
          ))}
        </div>

        <ul className="space-y-2">
          {quickReference.features.map((feature, i) => (
            <li key={i} className="font-medium flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70" />
              {feature.split(":")[0]}: {feature.split(":")[1]}
            </li>
          ))}
        </ul>
      </div>

      <InfoBox data={nclexHighYield} />
    </main>
  );
}
