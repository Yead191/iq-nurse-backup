import React from "react";
import {
  artifactIntro,
  artifactTypes,
  leadDisconnection,
  movementArtifact,
  distinctionTables,
  troubleshooting,
  skinPrep,
  specialConsiderations,
  criticalSafety,
  documentation,
  quickReference,
  nclexHighYield,
} from "@/data/ecg/artifactData";
import { InfoBox } from "@/components/shared/InfoBox";
import { AlertTriangle, Stethoscope } from "lucide-react";

export default function ArtifactPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          {artifactIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600">
          {artifactIntro.description}
        </p>
      </div>

      {/* Common Types of Artifact */}
      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
        Common Types of Artifact
      </h2>

      {/* 1-3. Green Boxes (Tremor, Wandering, Interference) */}
      <div className="space-y-12 mb-12">
        {artifactTypes.map((artifact, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-[#337ab7] mb-4">
              {artifact.title}
            </h3>
            <div className="bg-[#f0fdf4] border-l-4 border-green-500 rounded-lg p-6 shadow-sm">
              <h4 className="text-green-700 font-bold mb-4 text-[16px]">
                {artifact.boxTitle}
              </h4>
              <p className="text-[15px] text-slate-700 mb-4">
                <span className="font-bold text-slate-900">Appearance:</span>{" "}
                {artifact.appearance}
              </p>

              <div className="mb-4">
                <p className="font-bold text-slate-900 text-sm mb-2">Causes:</p>
                <ul className="space-y-1 ml-1">
                  {artifact.causes.map((cause, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-700 flex gap-2 items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                      {cause}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-bold text-slate-900 text-sm mb-2">
                  Solutions:
                </p>
                <ul className="space-y-1 ml-1">
                  {artifact.solutions.map((sol, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-700 flex gap-2 items-start"
                    >
                      <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        {/* 4. Lead Disconnection (Yellow Box) */}
        <div>
          <h3 className="text-lg font-bold text-[#337ab7] mb-4">
            {leadDisconnection.title}
          </h3>
          <div className="bg-[#fffbeb] border-l-4 border-amber-400 rounded-lg p-6 shadow-sm">
            <h4 className="text-amber-700 font-bold mb-4 text-[16px] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {leadDisconnection.boxTitle}
            </h4>
            <p className="text-[15px] text-slate-700 mb-4">
              <span className="font-bold text-slate-900">Appearance:</span>{" "}
              {leadDisconnection.appearance}
            </p>

            <div className="mb-4">
              <p className="font-bold text-slate-900 text-sm mb-2">Causes:</p>
              <ul className="space-y-1 ml-1">
                {leadDisconnection.causes.map((cause, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                    {cause}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-bold text-slate-900 text-sm mb-2">
                Critical Action:
              </p>
              <ul className="space-y-1 ml-1">
                {leadDisconnection.criticalAction.map((action, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                    <span
                      dangerouslySetInnerHTML={{
                        __html: action.replace(
                          /\*\*(.*?)\*\*/g,
                          '<span class="font-bold text-slate-900">$1</span>'
                        ),
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-slate-900 text-sm mb-2">
                Solutions:
              </p>
              <ul className="space-y-1 ml-1">
                {leadDisconnection.solutions.map((sol, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 5. Movement Artifact (Green Box) */}
        <div>
          <h3 className="text-lg font-bold text-[#337ab7] mb-4">
            {movementArtifact.title}
          </h3>
          <div className="bg-[#f0fdf4] border-l-4 border-green-500 rounded-lg p-6 shadow-sm">
            <h4 className="text-green-700 font-bold mb-4 text-[16px]">
              {movementArtifact.boxTitle}
            </h4>
            <p className="text-[15px] text-slate-700 mb-4">
              <span className="font-bold text-slate-900">Appearance:</span>{" "}
              {movementArtifact.appearance}
            </p>
            <div className="mb-4">
              <p className="font-bold text-slate-900 text-sm mb-2">Causes:</p>
              <ul className="space-y-1 ml-1">
                {movementArtifact.causes.map((cause, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                    {cause}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-slate-900 text-sm mb-2">
                Solutions:
              </p>
              <ul className="space-y-1 ml-1">
                {movementArtifact.solutions.map((sol, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 shrink-0" />
                    {sol}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Distinguishing Artifact */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
          Distinguishing Artifact from True Arrhythmias
        </h2>

        {/* Table 1: VF */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#337ab7] mb-4">
            {distinctionTables.vf.title}
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-t-lg shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  {distinctionTables.vf.headers.map((h, i) => (
                    <th key={i} className="px-6 py-4 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {distinctionTables.vf.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.artifact}</td>
                    <td className="px-6 py-4 text-slate-600">{row.trueVf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: VT */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#337ab7] mb-4">
            {distinctionTables.vt.title}
          </h3>
          <div className="overflow-hidden border border-slate-200 rounded-t-lg shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1e5d8e] text-white">
                <tr>
                  {distinctionTables.vt.headers.map((h, i) => (
                    <th key={i} className="px-6 py-4 font-bold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {distinctionTables.vt.rows.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 font-bold text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{row.artifact}</td>
                    <td className="px-6 py-4 text-slate-600">{row.trueVt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Systematic Approach */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {troubleshooting.title}
        </h2>
        <div className="bg-white border border-slate-100 rounded-xl p-0 shadow-sm">
          <div className="p-6">
            <h4 className="text-red-500 font-bold mb-6 text-base flex items-center gap-2">
              <Stethoscope className="w-5 h-5" />
              {troubleshooting.subtitle}
            </h4>
            <ol className="list-decimal space-y-6 ml-4">
              {troubleshooting.steps.map((step, index) => (
                <li
                  key={index}
                  className="text-slate-800 font-bold text-[15px] pl-2"
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: step.text.replace(/\*\*(.*?)\*\*/g, "$1"),
                    }}
                  />
                  <ul className="space-y-2 mt-2 ml-1 list-disc text-slate-600 font-normal">
                    {step.subItems.map((sub, i) => (
                      <li key={i} className="text-sm pl-1">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Skin Prep */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {skinPrep.title}
        </h2>
        <p className="text-slate-600 mb-6">{skinPrep.subtitle}</p>
        <ul className="space-y-4 ml-2">
          {skinPrep.items.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
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

      {/* Special Considerations */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
          {specialConsiderations.title}
        </h2>
        <div className="space-y-8">
          {specialConsiderations.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-[#337ab7] mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 ml-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[15px] text-slate-700 flex gap-2 items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Safety Rule */}
      <div className="mb-16">
        <InfoBox data={criticalSafety} />
      </div>

      {/* Documentation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e5d8e] mb-6">
          {documentation.title}
        </h2>
        <ul className="space-y-4 ml-2">
          {documentation.items.map((item, index) => (
            <li
              key={index}
              className="text-[15px] text-slate-700 flex gap-2 items-start"
            >
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2 shrink-0" />
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

      {/* Quick Reference */}
      <div className="mb-12 bg-[#337ab7] text-white rounded-lg p-8 shadow-sm">
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
