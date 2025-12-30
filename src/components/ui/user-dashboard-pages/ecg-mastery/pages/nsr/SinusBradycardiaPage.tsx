import { InfoBox } from "@/components/shared/InfoBox";
import {
  bradyPageIntro,
  bradyAssessment,
  bradyInterventions,
  bradyPacing,
  bradyConsiderations,
  bradyManagement,
  bradyEducation,
  bradyQuickRef,
  bradyNclex,
  arrhythmiaIntro,
  arrhythmiaCharacteristics,
  arrhythmiaClinical,
  arrhythmiaAssessment,
  arrhythmiaNclex,
  arrestIntro,
  arrestCharacteristics,
  arrestSignificance,
  arrestAssessment,
  arrestNclex,
} from "@/data/ecg/sinusBradyData";
import { Activity } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SinusBradycardiaPage() {
  return (
    <main>
      {/* --- SINUS BRADYCARDIA SECTION --- */}
      <section className="mb-20">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-primary mb-4">
            {bradyPageIntro.title}
          </h1>
          <div className="h-[1px] bg-slate-200 w-full mb-8" />
          <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
            {bradyPageIntro.description}
          </p>

          {/* Rhythm Strip - Bradycardia */}
          <div className="flex justify-center items-center mb-10">
            <Image
              src="/assets/images/dashboard/ecg/nsr/nsr3.png"
              alt="nsr-img"
              width={1600}
              height={800}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Nursing Assessment */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Nursing Assessment
          </h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" /> Systematic Assessment
            </h3>
            <ul className="space-y-2 ml-1">
              {bradyAssessment.systematic.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] text-slate-700"
                >
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
        </div>

        {/* Nursing Interventions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Nursing Interventions
          </h2>

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            For Asymptomatic Bradycardia
          </h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Monitoring and Prevention
            </h4>
            <ul className="space-y-2">
              {bradyInterventions.asymptomatic.map((item, i) => (
                <li key={i} className="text-[15px] text-slate-700">
                  <span className="font-bold text-slate-800">
                    • {item.split(":")[0]}:
                  </span>{" "}
                  {item.split(":")[1]}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            For Symptomatic Bradycardia
          </h3>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-8">
            <h4 className="font-bold text-red-500 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" />{" "}
              {bradyInterventions.symptomatic.title}
            </h4>
            <ul className="space-y-4">
              {bradyInterventions.symptomatic.steps.map((step, i) => (
                <li key={i} className="text-[15px] text-slate-700">
                  <span className="font-bold text-slate-900">
                    • {step.text.split(":")[0]}:
                  </span>{" "}
                  {step.text.split(":")[1] || ""}
                  {step.sub && (
                    <ul className="pl-6 mt-1 space-y-1">
                      {step.sub.map((sub, j) => (
                        <li
                          key={j}
                          className="text-sm text-slate-600 flex gap-2"
                        >
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

          <h3 className="text-lg font-bold text-[#1e5d8e] mb-4">
            {bradyPacing.title}
          </h3>
          <p className="text-[15px] text-slate-600 mb-4">
            {bradyPacing.description}
          </p>
          <ul className="space-y-3 mb-8 ml-1">
            {bradyPacing.points.map((item, index) => (
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

          <InfoBox data={bradyConsiderations} />

          <div className="mt-12">
            <h3 className="text-xl font-bold text-primary mb-4">
              Long-Term Management
            </h3>
            <p className="text-[15px] text-slate-600 mb-4">
              For patients with persistent symptomatic bradycardia:
            </p>
            <ul className="space-y-2 ml-1">
              {bradyManagement.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-[15px] text-slate-700"
                >
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
        </div>

        {/* Patient Education */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Patient Education
          </h2>
          <ul className="space-y-2 ml-1">
            {bradyEducation.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Ref */}
        <div className="bg-[#1e5d8e] text-white rounded-xl p-8 mb-12 shadow-md">
          <h2 className="text-xl font-bold mb-2">{bradyQuickRef.title}</h2>
          <p className="font-medium mb-6 text-blue-100 italic">
            {bradyQuickRef.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {bradyQuickRef.points.map((point, i) => (
              <div
                key={i}
                className={`px-4 py-1.5 rounded-full text-sm font-bold text-slate-800 ${point.color} flex items-center gap-2 shadow-sm`}
              >
                <span className="opacity-70">{point.label}:</span>
                <span>{point.value}</span>
              </div>
            ))}
          </div>

          <ul className="space-y-2">
            {bradyQuickRef.features.map((feature, i) => (
              <li key={i} className="font-medium flex gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70" />
                {feature.split(":")[0]}: {feature.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>

        <InfoBox data={bradyNclex} />
      </section>

      {/* --- SINUS ARRHYTHMIA SECTION --- */}
      <section className="mb-20 pt-10 border-t border-slate-200">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {arrhythmiaIntro.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
            {arrhythmiaIntro.description}
          </p>

          {/* Rhythm Strip - Arrhythmia */}
          <div className="flex justify-center items-center mb-10">
            <Image
              src="/assets/images/dashboard/ecg/nsr/nsr4.png"
              alt="nsr-img"
              width={1600}
              height={800}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">
          ECG Characteristics
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">Finding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {arrhythmiaCharacteristics.map((row, index) => (
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

        <div className="space-y-8">
          <InfoBox data={arrhythmiaClinical} />
          <InfoBox data={arrhythmiaAssessment} />
          <InfoBox data={arrhythmiaNclex} />
        </div>
      </section>

      {/* --- SINUS ARREST SECTION --- */}
      <section className="pt-10 border-t border-slate-200 mb-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {arrestIntro.title}
          </h2>
          {/* Rhythm Strip - Arrest */}
          <div className="flex justify-center items-center mb-10">
            <Image
              src="/assets/images/dashboard/ecg/nsr/nsr5.png"
              alt="nsr-img"
              width={1600}
              height={800}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-4">
          ECG Characteristics
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">Finding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {arrestCharacteristics.map((row, index) => (
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

        <div className="space-y-8">
          <InfoBox data={arrestSignificance} />
          <InfoBox data={arrestAssessment} />
          <InfoBox data={arrestNclex} />
        </div>
      </section>
    </main>
  );
}
