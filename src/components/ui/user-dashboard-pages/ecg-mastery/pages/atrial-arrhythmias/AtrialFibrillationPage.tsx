import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  afibIntro,
  rateClassification,
  commonCauses,
  clinicalSignificance,
  signsAndSymptoms,
  nursingAssessment,
  chadsvascScore,
  managementStrategies,
  nursingInterventions,
  cardioversionConsiderations,
  patientEducation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/afibData";
import { Activity, Siren } from "lucide-react";
import Image from "next/image";

export default function AtrialFibrillationPage() {
  return (
    <main>
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {afibIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {afibIntro.description}
        </p>

        {/* Rhythm Strip Placeholder - Irregularly Irregular */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/afib/afib1.png"
            alt="nsr-img"
            width={1600}
            height={800}
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* Rate Classification */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Rate Classification
        </h2>
        <ul className="space-y-2 mb-8 ml-1">
          {rateClassification.map((item, index) => (
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
      </div>

      {/* Causes and Significance Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Common Causes and Risk Factors
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {Object.entries(commonCauses).map(([key, value], index) => (
                <li key={index} className="text-[14px]">
                  <span className="font-bold text-slate-900 capitalize block mb-1">
                    {key === "postOp" ? "Post-Operative" : key}:
                  </span>
                  <span className="text-slate-600">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Signs and Symptoms
          </h2>
          <ul className="space-y-2 mb-6 ml-1">
            {signsAndSymptoms.map((item, index) => (
              <li key={index} className="flex gap-3 text-[14px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <InfoBox data={clinicalSignificance} />
        </div>
      </div>

      {/* Nursing Assessment & CHA2DS2-VASc */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Assessment
        </h2>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" /> Comprehensive Assessment
          </h3>
          <ul className="space-y-2 ml-1">
            {nursingAssessment.comprehensive.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>
                  <span className="font-bold text-slate-800">
                    {item.split(":")[0]}:
                  </span>
                  {item.split(":")[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
          CHA₂DS₂-VASc Score (Stroke Risk)
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold">Risk Factor</th>
                <th className="px-6 py-3 font-bold w-24 text-center">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {chadsvascScore.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {row.factor}
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-center font-bold">
                    {row.points}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50 border-t border-slate-200">
              <tr>
                <td
                  colSpan={2}
                  className="px-6 py-3 text-xs text-slate-500 italic"
                >
                  Interpretation: Score ≥2 in men or ≥3 in women:
                  Anticoagulation recommended
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Management Strategies */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Management Strategies
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          Management of A-fib involves three main goals:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Rate Control */}
          <div className="border border-slate-200 rounded-xl p-5 bg-white">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              1. Rate Control Strategy
            </h3>
            <p className="text-sm text-slate-500 mb-4 italic">
              {managementStrategies.rateVsRhythm.rateControl.strategy}
            </p>

            <p className="font-semibold text-sm mb-2">Medications:</p>
            <ul className="list-disc pl-5 text-sm text-slate-600 mb-4 space-y-1">
              {managementStrategies.rateVsRhythm.rateControl.medications.map(
                (m, i) => (
                  <li key={i}>{m}</li>
                )
              )}
            </ul>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Preferred for:</span>{" "}
              {managementStrategies.rateVsRhythm.rateControl.preferredFor}
            </p>
          </div>

          {/* Rhythm Control */}
          <div className="border border-slate-200 rounded-xl p-5 bg-white">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              2. Rhythm Control Strategy
            </h3>
            <p className="text-sm text-slate-500 mb-4 italic">
              {managementStrategies.rateVsRhythm.rhythmControl.strategy}
            </p>

            <p className="font-semibold text-sm mb-2">Methods:</p>
            <ul className="list-disc pl-5 text-sm text-slate-600 mb-4 space-y-1">
              {managementStrategies.rateVsRhythm.rhythmControl.methods.map(
                (m, i) => (
                  <li key={i}>{m}</li>
                )
              )}
            </ul>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Preferred for:</span>{" "}
              {managementStrategies.rateVsRhythm.rhythmControl.preferredFor}
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-600 mb-4">
          3. Anticoagulation (Stroke Prevention)
        </h3>
        <ul className="space-y-4 mb-8">
          <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <span className="font-bold text-slate-900 block mb-1">
              {managementStrategies.anticoagulation.doacs.name}:
            </span>
            <span className="text-sm text-slate-600">
              {managementStrategies.anticoagulation.doacs.details}
            </span>
          </li>
          <li className="bg-slate-50 p-4 rounded-lg border border-slate-100">
            <span className="font-bold text-slate-900 block mb-1">
              {managementStrategies.anticoagulation.warfarin.name}:
            </span>
            <span className="text-sm text-slate-600">
              {managementStrategies.anticoagulation.warfarin.details}
            </span>
          </li>
        </ul>
      </div>

      {/* Nursing Interventions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Interventions
        </h2>

        {/* Stable AFib */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            {nursingInterventions.stable.title}
          </h3>
          <ul className="space-y-2">
            {nursingInterventions.stable.items.map((item, i) => (
              <li key={i} className="text-[15px] text-slate-700">
                <span className="font-bold text-slate-800">
                  • {item.action}:
                </span>{" "}
                {item.detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Unstable AFib / RVR */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-100 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Siren className="w-6 h-6 text-red-600" />
            <h3 className="text-lg font-bold text-red-600">
              {nursingInterventions.unstable.title}
            </h3>
          </div>

          <div className="bg-white rounded-lg p-4 border border-red-100 shadow-sm mb-4">
            <h4 className="font-bold text-red-600 mb-2 border-b border-red-100 pb-2">
              Urgent Interventions
            </h4>
            {nursingInterventions.unstable.urgent.map((block, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <p className="font-bold text-slate-800 text-sm mb-2">
                  {block.condition}:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {block.actions.map((action, j) => (
                    <li key={j} className="text-sm text-slate-700">
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="font-bold text-slate-800 mb-2">Ongoing Management:</p>
          <ul className="list-disc pl-5 space-y-1">
            {nursingInterventions.unstable.general.map((action, j) => (
              <li key={j} className="text-sm text-slate-700">
                {action}
              </li>
            ))}
          </ul>
        </div>

        <InfoBox data={cardioversionConsiderations} />
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

        {/* Pills/Badges */}
        <div className="flex flex-wrap gap-4 mb-6">
          {quickReference.badges.map((badge, i) => (
            <div
              key={i}
              className={`px-4 py-1.5 rounded-full text-sm font-bold ${badge.color} flex items-center gap-2 shadow-sm`}
            >
              {badge.label}
            </div>
          ))}
        </div>

        <ul className="space-y-2">
          {quickReference.points.map((point, i) => (
            <li key={i} className="font-medium flex gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <InfoBox data={nclexHighYield} />
    </main>
  );
}
