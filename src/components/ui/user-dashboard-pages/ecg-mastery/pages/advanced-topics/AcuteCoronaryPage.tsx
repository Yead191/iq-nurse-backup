import React from "react";
import {
  acsIntro,
  spectrumOfAcs,
  pathophysiology,
  ecgChanges,
  localizationTable,
  reciprocalChanges,
  clinicalPresentation,
  timeSensitiveWarning,
  nursingAssessment,
  immediateManagement,
  nursingInterventions as acsNursingInterventions,
  complications,
  patientEducation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/acuteCoronaryData";
import { AlertTriangle, Siren, Stethoscope, Target, Zap } from "lucide-react";
import { InfoBox } from "@/components/shared/InfoBox";

export default function AcuteCoronaryPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {acsIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {acsIntro.description}
        </p>
      </div>

      {/* Spectrum & Pathophysiology Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Spectrum */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            Spectrum of ACS
          </h2>
          <ul className="space-y-4 ml-2">
            {spectrumOfAcs.map((item, index) => (
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

        {/* Pathophysiology */}
        <div>
          <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
            Pathophysiology
          </h2>
          <p className="text-[15px] text-slate-600 mb-4">
            ACS typically results from:
          </p>
          <ul className="space-y-3 ml-2">
            {pathophysiology.map((item, index) => (
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
      </div>

      {/* ECG Changes */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          ECG Changes in Myocardial Ischemia and Infarction
        </h2>

        {/* Evolution Table */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#337ab7] mb-4">
            Evolution of ECG Changes in STEMI
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Time Frame
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    ECG Changes
                  </th>
                  <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                    Pathophysiology
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ecgChanges.evolutionTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`
                            ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                            hover:bg-blue-50/50 transition-colors duration-150
                        `}
                  >
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {row.time}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.changes}</td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.pathophysiology}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Findings List */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#337ab7] mb-6">
            Key ECG Findings
          </h3>
          <div className="space-y-8">
            {ecgChanges.findings.map((section, index) => (
              <div key={index}>
                <h4 className="text-[16px] font-bold text-slate-800 mb-3">
                  {section.title}
                </h4>
                <div className="space-y-4 ml-1">
                  {section.items.map((item, i) => (
                    <div key={i}>
                      {item.head && (
                        <p className="font-bold text-slate-800 text-sm mb-1">
                          {item.head}
                        </p>
                      )}
                      <ul className="pl-4 space-y-1">
                        {item.points.map((point, pIndex) => (
                          <li
                            key={pIndex}
                            className="text-sm text-slate-600 flex gap-2 items-start"
                          >
                            <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: point.replace(
                                  /\*\*(.*?)\*\*/g,
                                  '<span class="font-bold text-slate-800">$1</span>'
                                ),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Localization Table */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Localization of MI by ECG Leads
        </h2>
        <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm mb-8">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  MI Location
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Leads Showing Changes
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Coronary Artery
                </th>
                <th className="px-6 py-4 font-bold border-b border-[#337ab7]">
                  Complications
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {localizationTable.map((row, index) => (
                <tr
                  key={index}
                  className={`
                            ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                            hover:bg-blue-50/50 transition-colors duration-150
                        `}
                >
                  <td className="px-6 py-4 font-bold text-slate-700">
                    {row.location}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.leads}</td>
                  <td className="px-6 py-4 text-slate-600">{row.artery}</td>
                  <td className="px-6 py-4 text-slate-600">
                    {row.complications}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-[#1e5d8e] mb-4">
          Reciprocal Changes
        </h3>
        <p className="text-sm text-slate-600 mb-2">
          ST depression in leads opposite to ST elevation:
        </p>
        <ul className="space-y-2 ml-2">
          {reciprocalChanges.map((item, index) => (
            <li
              key={index}
              className="text-sm text-slate-700 flex gap-2 items-start"
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

      {/* Clinical Presentation & Time Sensitive Warning */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Clinical Presentation of ACS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold text-[#337ab7] mb-4">
              {clinicalPresentation.classic.title}
            </h3>
            <div className="space-y-4">
              {clinicalPresentation.classic.items.map((item, index) => (
                <div key={index}>
                  <p className="font-bold text-slate-800 text-[15px] mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                    {item.head}
                  </p>
                  <ul className="pl-6 space-y-1">
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
          <div>
            <h3 className="text-lg font-bold text-[#337ab7] mb-2">
              {clinicalPresentation.atypical.title}
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              {clinicalPresentation.atypical.subtitle}
            </p>
            <ul className="space-y-2 ml-2">
              {clinicalPresentation.atypical.items.map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] text-slate-700 flex gap-2 items-start"
                >
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning Box */}
        <InfoBox data={timeSensitiveWarning} />
      </div>

      {/* Nursing Assessment */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Nursing Assessment for Suspected ACS
        </h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-lg font-bold text-red-500 mb-6 flex items-center gap-2">
            <Stethoscope className="w-5 h-5" /> {nursingAssessment.title}
          </h3>
          <ul className="space-y-4">
            {nursingAssessment.items.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <li
                    key={index}
                    className="text-[15px] text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          /\*\*(.*?)\*\*/g,
                          '<span class="font-bold text-slate-900">$1</span>'
                        ),
                      }}
                    />
                  </li>
                );
              } else {
                return (
                  <li key={index} className="flex flex-col gap-2">
                    <div className="text-[15px] text-slate-700 flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item.text.replace(
                            /\*\*(.*?)\*\*/g,
                            '<span class="font-bold text-slate-900">$1</span>'
                          ),
                        }}
                      />
                    </div>
                    <ul className="pl-6 space-y-1">
                      {item.subItems.map((sub, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 flex gap-2 items-center"
                        >
                          <span className="w-1 h-1 bg-slate-400 rounded-full" />
                          {sub}
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>

      {/* Immediate Management */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Immediate Management of ACS
        </h2>
        <h3 className="text-xl font-bold text-[#337ab7] mb-6">
          MONA Protocol (Initial Treatment)
        </h3>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12">
          <h4 className="flex items-center gap-2 text-red-500 font-bold mb-6 text-base">
            <Target className="w-5 h-5" />
            {immediateManagement.mona.subtitle}
          </h4>
          <div className="grid gap-6">
            {immediateManagement.mona.items.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold shrink-0">
                  {item.letter}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base mb-1">
                    {item.drug}:{" "}
                    <span className="font-normal text-slate-600 text-sm">
                      {item.dosage}
                    </span>
                  </p>
                  <ul className="space-y-1">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex gap-2 items-center"
                      >
                        <span className="w-1 h-1 bg-red-300 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Meds */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-[#337ab7] mb-6">
            {immediateManagement.additionalMeds.title}
          </h3>
          <ul className="space-y-6">
            {immediateManagement.additionalMeds.items.map((item, index) => (
              <li key={index}>
                <p className="font-bold text-slate-900 text-[15px] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  {item.title}
                </p>
                <ul className="pl-6 space-y-1">
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
              </li>
            ))}
          </ul>
        </div>

        {/* Reperfusion */}
        <div>
          <h3 className="text-xl font-bold text-[#337ab7] mb-6">
            {immediateManagement.reperfusion.title}
          </h3>
          <div className="space-y-8">
            {immediateManagement.reperfusion.sections.map((section, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-800 text-base mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2 ml-2">
                  {section.items.map((item, i) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul key={i} className="pl-6 space-y-1 my-1">
                          {item.map((sub, j) => (
                            <li
                              key={j}
                              className="text-sm text-slate-600 flex gap-2 items-center"
                            >
                              <span className="w-1 h-1 bg-slate-400 rounded-full" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      );
                    } else {
                      return (
                        <li
                          key={i}
                          className="text-sm text-slate-700 flex gap-2 items-start"
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
                    }
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complications of MI */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          Complications of MI
        </h2>
        <ul className="space-y-4 ml-2">
          {complications.map((item, index) => {
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
                <li key={index}>
                  <p className="font-bold text-slate-900 text-[15px] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                    {item.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                  </p>
                  <ul className="pl-6 space-y-1">
                    {item.subItems.map((sub, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex gap-2 items-start"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/* Nursing Interventions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {acsNursingInterventions.title}
        </h2>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h4 className="flex items-center gap-2 text-red-500 font-bold mb-6 text-base">
            <Target className="w-5 h-5" />
            {acsNursingInterventions.care.title}
          </h4>
          <ul className="space-y-2 ml-2">
            {acsNursingInterventions.care.items.map((item, index) => (
              <li
                key={index}
                className="text-sm text-slate-700 flex gap-2 items-start"
              >
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
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

      {/* Patient Education & Secondary Prevention */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {patientEducation.title}
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
                <li key={index}>
                  <p className="font-bold text-slate-900 text-[15px] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                    {item.text.replace(/\*\*(.*?)\*\*/g, "$1")}
                  </p>
                  <ul className="pl-6 space-y-1">
                    {item.subItems.map((sub, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-600 flex gap-2 items-start"
                      >
                        <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                        {sub}
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
        <InfoBox data={nclexHighYield} />
      </div>
    </main>
  );
}
