import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  aflutterIntro,
  definingCharacteristics,
  avConductionRatios,
  commonCauses,
  clinicalSignificance,
  signsAndSymptoms,
  nursingAssessment,
  managementData,
  nursingInterventions,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/aflutterData";
import { Activity, Siren } from "lucide-react";
import Image from "next/image";

export default function AtrialFlutter() {
  return (
    <main>
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {aflutterIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {aflutterIntro.description}
        </p>

        {/* Rhythm Strip Placeholder - Sawtooth Pattern */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/afib/afib2.png"
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
        <h2 className="text-2xl font-bold text-primary mb-4">
          Defining Characteristics
        </h2>

        <div className="overflow-hidden border border-slate-200 rounded-xl mb-8 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">Atrial Flutter Criteria</th>
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

        <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
          AV Conduction Ratios
        </h3>
        <p className="text-[15px] text-slate-600 mb-4">
          The AV node blocks some of the atrial impulses, creating different
          conduction ratios:
        </p>
        <ul className="space-y-2 ml-1">
          {avConductionRatios.map((item, index) => (
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

      {/* Causes and Signs Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Common Causes
          </h2>
          <ul className="space-y-2 mb-8 ml-1">
            {commonCauses.map((item, index) => (
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
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Signs and Symptoms
          </h2>
          <ul className="space-y-2 mb-8 ml-1">
            {signsAndSymptoms.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <InfoBox data={clinicalSignificance} />
      </div>

      {/* Nursing Assessment */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Assessment
        </h2>
        <div className="bg-red-50 border border-red-100 rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" /> {nursingAssessment.title}
          </h3>
          <ul className="space-y-2 ml-1">
            {nursingAssessment.features.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-red-400" />
                <span>
                  <span className="font-bold text-slate-900">
                    {item.split(":")[0]}:
                  </span>
                  {item.split(":")[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Management */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Management</h2>

        {/* Rate Control */}
        <h3 className="text-lg font-bold text-[#1e5d8e] mb-2">Rate Control</h3>
        <p className="text-[15px] text-slate-600 mb-4">
          {managementData.rateControl.description}
        </p>
        <ul className="space-y-2 mb-8 ml-1">
          {managementData.rateControl.points.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Rhythm Control */}
        <h3 className="text-lg font-bold text-[#1e5d8e] mb-2">
          Rhythm Control
        </h3>
        <p className="text-[15px] text-slate-600 mb-4">
          {managementData.rhythmControl.description}
        </p>
        <ul className="space-y-2 mb-8 ml-1">
          {managementData.rhythmControl.points.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>
                {item.includes("Catheter ablation") ? (
                  <>
                    <span className="font-bold text-blue-600">
                      {item.split(":")[0]}:
                    </span>
                    {item.split(":")[1]}
                  </>
                ) : (
                  item
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Anticoagulation */}
        <h3 className="text-lg font-bold text-[#1e5d8e] mb-2">
          Anticoagulation
        </h3>
        <p className="text-[15px] text-slate-600 mb-4">
          {managementData.anticoagulation.description}
        </p>
        <ul className="space-y-2 ml-1">
          {managementData.anticoagulation.points.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-800" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Nursing Interventions */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Nursing Interventions
        </h2>

        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Siren className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-bold text-red-500">
              {nursingInterventions.priority.title}
            </h3>
          </div>

          <ul className="space-y-2">
            {nursingInterventions.priority.features.map((item, i) => (
              <li key={i} className="text-[15px] text-slate-700">
                {item.trim().startsWith("If stable:") ? (
                  <>
                    <span className="font-bold text-slate-900">
                      • If stable:
                    </span>
                  </>
                ) : item.trim().startsWith("•") ? (
                  // Indented sub-items
                  <div className="ml-6 flex gap-2">
                    <span className="text-red-400 mt-1.5 w-1 h-1 rounded-full bg-red-400 block shrink-0"></span>
                    <span>{item.replace("• ", "")}</span>
                  </div>
                ) : (
                  // Normal items
                  <>
                    {item.includes(":") ? (
                      <>
                        <span className="font-bold text-slate-900">
                          • {item.split(":")[0]}:
                        </span>{" "}
                        {item.split(":")[1]}
                      </>
                    ) : (
                      <span>• {item}</span>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
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
