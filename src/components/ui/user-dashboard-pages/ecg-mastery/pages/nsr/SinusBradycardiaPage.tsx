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
          <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
              {/* Slow rhythm SVG */}
              <svg
                className="w-full text-slate-400"
                height="60"
                viewBox="0 0 600 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {[...Array(6)].map((_, i) => (
                  <path
                    key={i}
                    d={`M${i * 100} 30H${i * 100 + 40} L${i * 100 + 45} 10 L${
                      i * 100 + 50
                    } 50 L${i * 100 + 55} 30 H${i * 100 + 65} C${
                      i * 100 + 70
                    } 30 ${i * 100 + 70} 20 ${i * 100 + 75} 20 C${
                      i * 100 + 80
                    } 20 ${i * 100 + 80} 30 ${i * 100 + 85} 30 H${
                      i * 100 + 100
                    }`}
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                ))}
              </svg>
            </div>
            <p className="text-sm font-medium text-primary/70">
              Sinus Bradycardia - Regular rhythm, rate &lt;60 bpm
            </p>
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
          <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
              <svg
                className="w-full text-slate-400"
                height="60"
                viewBox="0 0 600 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                {/* Irregular spacing */}
                <path
                  d="M0 30H40 L45 10 L50 50 L55 30 H65 C70 30 70 20 75 20 C80 20 80 30 85 30 H100"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 30H130 L135 10 L140 50 L145 30 H155 C160 30 160 20 165 20 C170 20 170 30 175 30 H200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M200 30H220 L225 10 L230 50 L235 30 H245 C250 30 250 20 255 20 C260 20 260 30 265 30 H280"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M280 30H330 L335 10 L340 50 L345 30 H355 C360 30 360 20 365 20 C370 20 370 30 375 30 H400"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M400 30H420 L425 10 L430 50 L435 30 H445 C450 30 450 20 455 20 C460 20 460 30 465 30 H500"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-primary/70">
              Sinus Arrhythmia - Irregular R-R intervals with respiratory
              variation
            </p>
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
          <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[200px]">
            <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
              <svg
                className="w-full text-slate-400"
                height="60"
                viewBox="0 0 600 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 30H40 L45 10 L50 50 L55 30 H65 C70 30 70 20 75 20 C80 20 80 30 85 30 H100"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M100 30H140 L145 10 L150 50 L155 30 H165 C170 30 170 20 175 20 C180 20 180 30 185 30 H200"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                {/* PAUSE */}
                <path
                  d="M200 30 H400"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <text
                  x="300"
                  y="25"
                  textAnchor="middle"
                  className="text-xs fill-red-500 font-bold tracking-widest"
                >
                  PAUSE
                </text>
                <path
                  d="M400 30H440 L445 10 L450 50 L455 30 H465 C470 30 470 20 475 20 C480 20 480 30 485 30 H500"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-primary/70">
              Sinus Arrest - Prolonged pause when SA node fails to fire
            </p>
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
