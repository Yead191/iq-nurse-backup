import { InfoBox } from "@/components/shared/InfoBox";
import {
  pageIntro,
  definingCharacteristics,
  physiologicalSignificance,
  clinicalSignificance,
  variationsOfNormal,
  nursingAssessment,
  monitorClosely,
  patientEducation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/nsrData";
import Image from "next/image";
import React from "react";

export default function NsrPage() {
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

        {/* Rhythm Strip Placeholder */}
        <div className="flex justify-center items-center mb-10">
          <Image
            src="/assets/images/dashboard/ecg/nsr/nsr1.png"
            alt="nsr-img"
            width={1400}
            height={800}
            className="w-full h-full object-fit"
            draggable={false}
          />
        </div>
      </div>
      {/* Defining Characteristics Table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Defining Characteristics
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          To identify Normal Sinus Rhythm, all of the following criteria must be
          met:
        </p>

        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">
                  Normal Sinus Rhythm Criteria
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
      {/* Physiological Significance */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Physiological Significance
        </h2>
        <p className="text-[15px] text-slate-600 mb-4">
          Normal Sinus Rhythm indicates that:
        </p>
        <ul className="space-y-2 mb-8 ml-1">
          {physiologicalSignificance.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <InfoBox data={clinicalSignificance} />
      </div>
      {/* Variations of Normal */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Variations of Normal
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-primary mb-2">
            Sinus Arrhythmia
          </h3>
          <p className="text-[15px] leading-relaxed text-slate-600">
            {variationsOfNormal.sinusArrhythmia}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary mb-4">
            Age-Related Variations
          </h3>
          <ul className="space-y-3">
            {variationsOfNormal.ageRelated.map((item, index) => (
              <li key={index} className="text-[15px] text-slate-700">
                <span className="font-bold text-slate-800">
                  • {item.label}:
                </span>{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Assessment and Monitoring */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Assessment and Monitoring
        </h2>
        <InfoBox data={nursingAssessment} />
      </div>
      {/* When NSR Requires Attention */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-4">
          When NSR Requires Attention
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          While NSR is the desired rhythm, certain situations warrant closer
          monitoring or intervention:
        </p>
        <InfoBox data={monitorClosely} />
      </div>
      {/* Patient Education */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Patient Education
        </h2>
        <p className="text-[15px] text-slate-600 mb-4">
          When a patient has Normal Sinus Rhythm, use this as an opportunity for
          education:
        </p>
        <ul className="space-y-2 ml-1">
          {patientEducation.map((item, index) => (
            <li key={index} className="flex gap-3 text-[15px] text-slate-700">
              <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#1e5d8e] text-white rounded-xl p-8 mb-12 shadow-md">
        <h2 className="text-xl font-bold mb-4">{quickReference.title}</h2>
        <p className="font-medium mb-4">{quickReference.description}</p>
        <ul className="space-y-2">
          {quickReference?.features?.map((feature, i) => (
            <li key={i} className="font-medium">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <InfoBox data={nclexHighYield} />
    </main>
  );
}
