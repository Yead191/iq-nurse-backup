import React from "react";
import {
  pacemakerIntro,
  typesOfPacemakers,
  pacemakerCode,
  commonModes,
  ecgCharacteristics,
  pacemakerFunction,
  malfunctions,
  pacemakerMediatedTachycardia,
  nursingAssessment,
  nursingInterventions,
  patientEducation,
  quickReference,
} from "@/data/ecg/pacemakerData";
import { AlertTriangle, Stethoscope, Zap } from "lucide-react";
import { InfoBox } from "@/components/shared/InfoBox";
import { pacemakerHighYieldPoints } from "@/data/ecg/foundation/waveformsData";

export default function PacemakerPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {pacemakerIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {pacemakerIntro.description}
        </p>
      </div>

      {/* Types of Pacemakers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Types of Pacemakers
        </h2>

        <h3 className="text-lg font-bold text-[#337ab7] mb-4">
          By Chamber Paced
        </h3>
        <ul className="space-y-6 mb-8 ml-2">
          {typesOfPacemakers.byChamber.map((type, index) => (
            <li key={index} className="flex flex-col gap-2">
              <div className="font-bold text-slate-900 text-[15px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                {type.title}:
              </div>
              <ul className="pl-6 space-y-1">
                {type.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex gap-2 items-start"
                  >
                    <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          /\*\*(.*?)\*\*/g,
                          '<span class="font-bold text-slate-800">$1</span>'
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold text-[#337ab7] mb-4">By Function</h3>
        <ul className="space-y-3 mb-12 ml-2">
          {typesOfPacemakers.byFunction.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-slate-800">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Pacemaker Code (NBG Code) */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Pacemaker Code (NBG Code)
        </h2>
        <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Position
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Meaning
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Common Letters
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {pacemakerCode.map((row, index) => (
                <tr
                  key={index}
                  className={`
                    ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    hover:bg-blue-50/50 transition-colors duration-150
                  `}
                >
                  <td className="px-6 py-4 font-bold text-slate-700">
                    {row.position}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.meaning}</td>
                  <td className="px-6 py-4 text-slate-600">{row.letters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Common Pacemaker Modes */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
          Common Pacemaker Modes
        </h3>
        <ul className="space-y-3 ml-2">
          {commonModes.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-slate-800">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* ECG Characteristics of Paced Rhythms */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
          ECG Characteristics of Paced Rhythms
        </h2>

        {/* Pacemaker Spike */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#337ab7] mb-3">
            Pacemaker Spike
          </h3>
          <ul className="space-y-2 pl-4">
            {ecgCharacteristics.spike.map((item, i) => (
              <li
                key={i}
                className="text-sm text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1 h-1 bg-slate-500 rounded-full mt-2 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<span class="font-bold text-slate-900">$1</span>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Ventricular Paced Rhythm */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#337ab7] mb-3">
            Ventricular Paced Rhythm
          </h3>
          <ul className="space-y-2 pl-4">
            {ecgCharacteristics.ventricularPaced.map((item, i) => (
              <li
                key={i}
                className="text-sm text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1 h-1 bg-slate-500 rounded-full mt-2 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<span class="font-bold text-slate-900">$1</span>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Atrial Paced Rhythm */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#337ab7] mb-3">
            Atrial Paced Rhythm
          </h3>
          <ul className="space-y-2 pl-4">
            {ecgCharacteristics.atrialPaced.map((item, i) => (
              <li
                key={i}
                className="text-sm text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1 h-1 bg-slate-500 rounded-full mt-2 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<span class="font-bold text-slate-900">$1</span>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Dual-Chamber Paced Rhythm */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#337ab7] mb-3">
            Dual-Chamber Paced Rhythm
          </h3>
          <ul className="space-y-2 pl-4">
            {ecgCharacteristics.dualChamberPaced.map((item, i) => (
              <li
                key={i}
                className="text-sm text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1 h-1 bg-slate-500 rounded-full mt-2 shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.replace(
                      /\*\*(.*?)\*\*/g,
                      '<span class="font-bold text-slate-900">$1</span>'
                    ),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pacemaker Function Assessment */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Pacemaker Function Assessment
        </h2>

        <h3 className="text-lg font-bold text-[#337ab7] mb-4">
          Normal Pacemaker Function
        </h3>
        <ul className="space-y-6">
          {pacemakerFunction.normal.map((item, index) => (
            <li key={index} className="flex flex-col gap-1">
              <div className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                {item.title}
              </div>
              {item.items.length > 0 && (
                <ul className="pl-6 space-y-1 mt-1">
                  {item.items.map((subItem, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-600 flex gap-2 items-center"
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full" />
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Pacemaker Malfunctions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
          Pacemaker Malfunctions
        </h2>

        <div className="space-y-8">
          {malfunctions.map((malfunction, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-[#337ab7] mb-3">
                {index + 1}. {malfunction.title}
              </h3>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                <h4 className="flex items-center gap-2 text-amber-600 font-bold mb-4">
                  <AlertTriangle className="w-5 h-5" />
                  {malfunction.title}
                </h4>

                <div className="space-y-3 text-[15px] text-slate-700">
                  <p>
                    <span className="font-bold text-slate-900">
                      Definition:
                    </span>{" "}
                    {malfunction.definition}
                  </p>
                  <p>
                    <span className="font-bold text-slate-900">
                      ECG appearance:
                    </span>{" "}
                    {malfunction.ecgAppearance}
                  </p>
                  <div>
                    <span className="font-bold text-slate-900">Causes:</span>
                    <ul className="pl-5 mt-1 list-disc space-y-1 text-slate-700">
                      {malfunction.causes.map((cause, i) => (
                        <li key={i}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                  <p>
                    <span className="font-bold text-slate-900">
                      Clinical significance:
                    </span>{" "}
                    {malfunction.clinicalSignificance}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* 4. Pacemaker-Mediated Tachycardia */}
          <div>
            <h3 className="text-lg font-bold text-[#337ab7] mb-3">
              4. {pacemakerMediatedTachycardia.title}
            </h3>
            <ul className="space-y-2 ml-4">
              {pacemakerMediatedTachycardia.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm text-slate-700 flex gap-2 items-start"
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 rounded-full mt-2 shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: feature.replace(
                        /\*\*(.*?)\*\*/g,
                        '<span class="font-bold text-slate-800">$1</span>'
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Nursing Assessment */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Nursing Assessment of Pacemaker Patients
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" /> {nursingAssessment.title}
          </h3>
          <div className="space-y-6">
            {nursingAssessment.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-red-700 mb-2 flex gap-2 text-[15px]">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                  {section.title}
                </h4>
                <ul className="pl-6 space-y-1">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-600 flex gap-2 items-center"
                    >
                      <span className="w-1 h-1 bg-slate-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nursing Interventions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Nursing Interventions for Pacemaker Malfunctions
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5" /> {nursingInterventions.title}
          </h3>
          <div className="space-y-6">
            {nursingInterventions.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-800 mb-2 flex gap-2 text-[15px]">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2" />
                  {section.title}
                </h4>
                {section.items.length > 0 && (
                  <ul className="pl-6 space-y-1">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex gap-2 items-center"
                      >
                        <span className="w-1 h-1 bg-red-300 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Education */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Patient Education
        </h2>
        <ul className="space-y-4 ml-2">
          {patientEducation.items.map((item, index) => {
            if (typeof item === "string") {
              return (
                <li
                  key={index}
                  className="text-[15px] text-slate-700 flex gap-2 items-start"
                >
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.replace(
                        /\*\*(.*?)\*\*/g,
                        '<span class="font-bold text-slate-800">$1</span>'
                      ),
                    }}
                  />
                </li>
              );
            } else {
              return (
                <li key={index} className="flex flex-col gap-2">
                  <div className="text-[15px] text-slate-700 flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.title.replace(
                          /\*\*(.*?)\*\*/g,
                          '<span class="font-bold text-slate-800">$1</span>'
                        ),
                      }}
                    />
                  </div>
                  <ul className="pl-6 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-sm text-slate-600 flex gap-2 items-start"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/* Quick Reference */}
      <div className="mb-12 bg-[#337ab7] text-white rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6">{quickReference.title}</h2>
        <ul className="space-y-3">
          {quickReference.items.map((item, index) => (
            <li key={index} className="flex gap-2 items-start text-[15px]">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0" />
              <span
                dangerouslySetInnerHTML={{
                  __html: item.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold">$1</span>'
                  ),
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* NCLEX High Yield */}
      <div className="mb-16">
        <InfoBox data={pacemakerHighYieldPoints} />
      </div>
      {/* End Main */}
    </main>
  );
}
