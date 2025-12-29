"use client";

import React from "react";
import { InfoBox } from "@/components/shared/InfoBox";
import {
  svtIntro,
  svtCharacteristics,
  svtCauses,
  svtManagement,
  svtNclex,
  pacIntro,
  pacCharacteristics,
  pacClinical,
  matIntro,
  matCharacteristics,
  matClinical,
  wapIntro,
  wapCharacteristics,
} from "@/data/ecg/svtData";
import { Activity, Wind, Zap, Syringe, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function SupraventricularTachycardiaPage() {
  return (
    <main>
      {/* ==================== SVT SECTION ==================== */}
      <section className="mb-20">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {svtIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {svtIntro.description}
        </p>

        {/* SVT Rhythm Strip */}
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

        {/* SVT Characteristics Table */}
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-8 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold w-1/4">Parameter</th>
                <th className="px-6 py-3 font-bold">SVT Criteria</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {svtCharacteristics.map((row, index) => (
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

        {/* SVT Causes */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Common Causes and Triggers
          </h3>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 ml-1">
            {svtCauses.map((item, index) => (
              <li key={index} className="flex gap-3 text-[15px] text-slate-700">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SVT Management */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Management and Treatment
          </h2>

          {/* Stable Algorithm */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-[#1e5d8e] mb-2 flex items-center gap-2">
              <Activity className="w-5 h-5" /> For Stable SVT
            </h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-slate-800 mb-2">
                  1. Vagal Maneuvers (First-Line)
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-slate-700">
                  {svtManagement.stable.maneuvers.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                <p className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <Syringe className="w-4 h-4 text-blue-500" />
                  2. Adenosine Protocol (Drug of Choice)
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-sm">
                    <p className="font-semibold text-slate-700 mb-1">
                      Dose Sequence:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-600 mb-3">
                      {svtManagement.stable.adenosine.dose.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ol>
                    <p className="font-semibold text-slate-700 mb-1">
                      Administration:
                    </p>
                    <p className="text-slate-600 italic mb-2">
                      {svtManagement.stable.adenosine.administration}
                    </p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded text-sm border border-amber-100">
                    <p className="font-bold text-amber-800 mb-1">Warning:</p>
                    <p className="text-amber-700">
                      {svtManagement.stable.adenosine.sideEffects}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unstable Algorithm */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-6">
            <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5" /> For Unstable SVT
            </h3>
            <p className="text-sm font-bold text-slate-800 mb-2">
              Indication: {svtManagement.unstable.indication}
            </p>
            <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm">
              <p className="font-bold text-red-600 text-lg mb-1">
                {svtManagement.unstable.action}
              </p>
              <p className="text-sm text-slate-600 italic">
                {svtManagement.unstable.sedation}
              </p>
            </div>
          </div>
        </div>

        <InfoBox data={svtNclex} />
      </section>

      <div className="w-full h-[1px] bg-slate-200 my-16" />

      {/* ==================== PAC SECTION ==================== */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {pacIntro.title}
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          {pacIntro.description}
        </p>

        {/* PAC Rhythm Strip */}
        <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[150px]">
          <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
            <svg
              className="w-full text-slate-400"
              height="60"
              viewBox="0 0 600 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Normal beats then early beat */}
              <path
                transform="translate(0,0)"
                d="M0 30 L10 30 L15 20 L20 30 L25 30 L35 30 L40 10 L45 50 L50 30 L60 30 L65 25 L70 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                transform="translate(140,0)"
                d="M0 30 L10 30 L15 20 L20 30 L25 30 L35 30 L40 10 L45 50 L50 30 L60 30 L65 25 L70 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* PAC: Early, abnormal P */}
              <path
                transform="translate(240,0)"
                d="M0 30 L5 30 L10 15 L15 30 L20 30 L25 30 L30 10 L35 50 L40 30 L50 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Pause then Normal */}
              <path
                transform="translate(400,0)"
                d="M0 30 L10 30 L15 20 L20 30 L25 30 L35 30 L40 10 L45 50 L50 30 L60 30 L65 25 L70 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-primary/70">
            PAC - Early beat with abnormal P wave followed by pause
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Characteristics List */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-4">
              Defining Characteristics
            </h3>
            <ul className="space-y-3">
              {pacCharacteristics.map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-bold text-slate-700 block">
                    {item.parameter}:
                  </span>
                  <span className="text-slate-600">{item.criteria}</span>
                </li>
              ))}
            </ul>
          </div>
          <InfoBox data={pacClinical} />
        </div>
      </section>

      <div className="w-full h-[1px] bg-slate-200 my-16" />

      {/* ==================== MAT SECTION ==================== */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {matIntro.title}
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          {matIntro.description}
        </p>

        {/* MAT Rhythm Strip */}
        <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[150px]">
          <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
            <svg
              className="w-full text-slate-400"
              height="60"
              viewBox="0 0 600 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Irregular, different P waves */}
              {/* Beat 1: Upright P */}
              <path
                transform="translate(0,0)"
                d="M0 30 L10 30 L15 20 L20 30 L25 30 L30 10 L35 50 L40 30 L50 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Beat 2: Inverted P */}
              <path
                transform="translate(70,0)"
                d="M0 30 L5 30 L10 40 L15 30 L20 30 L25 10 L30 50 L35 30 L45 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Beat 3: Peaked P */}
              <path
                transform="translate(130,0)"
                d="M0 30 L5 30 L10 10 L15 30 L20 30 L25 10 L30 50 L35 30 L45 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Beat 4: Flat P */}
              <path
                transform="translate(210,0)"
                d="M0 30 L5 30 L10 30 L15 30 L20 30 L25 10 L30 50 L35 30 L45 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-primary/70">
            MAT - Rate &gt; 100, Irregular, &ge;3 different P wave morphologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Wind className="w-5 h-5" /> {matClinical.title}
            </h3>
            <p className="text-sm font-semibold text-orange-800 mb-2">
              {matClinical.description}
            </p>
            <ul className="space-y-2">
              {matClinical.features.map((f, i) => (
                <li key={i} className="text-sm text-orange-900">
                  • {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-4">
              Defining Characteristics
            </h3>
            <ul className="space-y-3">
              {matCharacteristics.map((item, i) => (
                <li key={i} className="text-sm">
                  <span className="font-bold text-slate-700 block">
                    {item.parameter}:
                  </span>
                  <span className="text-slate-600">{item.criteria}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-slate-200 my-16" />

      {/* ==================== WAP SECTION ==================== */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {wapIntro.title}
        </h2>
        <p className="text-[15px] text-slate-600 mb-6">
          {wapIntro.description}
        </p>

        {/* WAP Rhythm Strip - Slower than MAT */}
        <div className="border border-slate-200 rounded-xl p-8 mb-8 bg-white/50 flex flex-col items-center justify-center min-h-[150px]">
          <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full overflow-hidden">
            <svg
              className="w-full text-slate-400"
              height="60"
              viewBox="0 0 600 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Beat 1: Upright P */}
              <path
                transform="translate(0,0)"
                d="M0 30 L10 30 L15 20 L20 30 L25 30 L30 10 L35 50 L40 30 L50 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Beat 2: Inverted P - Long gap */}
              <path
                transform="translate(110,0)"
                d="M0 30 L5 30 L10 40 L15 30 L20 30 L25 10 L30 50 L35 30 L45 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Beat 3: Peaked P - Short gap */}
              <path
                transform="translate(200,0)"
                d="M0 30 L5 30 L10 10 L15 30 L20 30 L25 10 L30 50 L35 30 L45 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-primary/70">
            WAP - Rate &lt; 100, &ge;3 different P wave morphologies (Benign)
          </p>
        </div>

        <div className="bg-green-50 border border-green-100 rounded-xl p-6">
          <h3 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" /> Benign Rhythm
          </h3>
          <ul className="space-y-3">
            {wapCharacteristics.map((item, i) => (
              <li key={i} className="text-sm text-green-900">
                <span className="font-bold">{item.parameter}:</span>{" "}
                {item.criteria}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
