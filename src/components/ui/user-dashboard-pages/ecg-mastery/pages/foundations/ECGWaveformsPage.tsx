import { InfoBox } from "@/components/shared/InfoBox";
import {
  pageIntro,
  waveformsDetails,
  summaryTableData,
  nursingAssessmentTips,
  nclexHighYieldPoints,
} from "@/data/ecg/foundation/waveformsData";
import Image from "next/image";
import React from "react";

export default function ECGWaveformsPage() {
  return (
    <section className="px-4 lg:px-0 py-4 lg:py-0">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
          {pageIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {pageIntro.description}
        </p>

        {/* Diagram Placeholder */}
        <div className="border border-slate-200 rounded-xl  mb-8 bg-white flex items-center justify-center h-[150px] lg:h-[400px]">
          <Image
            src="/assets/images/dashboard/ecg/foundation/waveform.png"
            alt="ECG Waveforms"
            width={800}
            height={800}
            className="w-full h-full object-cover object-left rounded-xl"
            draggable={false}
          />
        </div>
      </div>

      {/* Waveforms & Intervals Details */}
      <div className="space-y-12 mb-16">
        {waveformsDetails.map((item, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {item.title}
            </h2>

            <div className="space-y-4 text-[15px] text-slate-700">
              <p>
                <span className="font-bold">Represents: </span>
                {item.represents}
              </p>

              <div>
                <p className="font-bold mb-2">Normal Characteristics:</p>
                <ul className="space-y-2">
                  {item.characteristics.map((char, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                <span className="font-bold">Clinical Significance: </span>
                {item.clinicalSignificance}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Normal Values Summary Table */}
      <h2 className="text-2xl font-bold text-primary mb-6">
        Normal Values Summary
      </h2>
      <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1e5d8e] text-white">
            <tr>
              <th className="px-6 py-3 font-bold">Component</th>
              <th className="px-6 py-3 font-bold">Normal Duration</th>
              <th className="px-6 py-3 font-bold">
                Small Squares (0.04 sec each)
              </th>
              <th className="px-6 py-3 font-bold">What It Represents</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {summaryTableData.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#f8fafc]" : ""}>
                <td className="px-6 py-4 font-medium text-slate-700">
                  {row.component}
                </td>
                <td className="px-6 py-4 text-slate-600">
                  {row.normalDuration}
                </td>
                <td className="px-6 py-4 text-slate-600">{row.smallSquares}</td>
                <td className="px-6 py-4 text-slate-600">{row.represents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Info Boxes */}
      <InfoBox data={nursingAssessmentTips} />
      <InfoBox data={nclexHighYieldPoints} />
    </section>
  );
}
