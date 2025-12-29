import { InfoBox } from "@/components/shared/InfoBox";
import {
  keyComponents,
  anatomySections,
  conductionSequence,
  highYieldPoints,
  nursingImplications,
} from "@/data/ecg/foundation/cardiacData";
import Image from "next/image";

export default function CardiacConductionPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[#1e5d8e] mb-4">
          Cardiac Conduction System
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          Understanding the heart's electrical system is fundamental to ECG
          interpretation. The cardiac conduction system is responsible for
          generating and coordinating the electrical impulses that cause the
          heart to contract in a synchronized manner, ensuring efficient blood
          circulation throughout the body.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
        Anatomy of the Conduction System
      </h2>
      <InfoBox data={keyComponents} />
      <div className="flex justify-center items-center mb-10">
        <Image
          src="/assets/images/dashboard/ecg/foundation/cardiac1.png"
          alt="cardiac1"
          width={800}
          height={800}
          className="w-contain h-auto"
        />
      </div>

      {/* Anatomy Sections */}
      <div className="space-y-10 mb-16">
        {anatomySections.map((section) => (
          <div key={section.number} className="space-y-3">
            <h3 className="text-xl font-bold text-[#1e5d8e]">
              {section.number}. {section.title}
            </h3>
            <div className="space-y-2.5 text-[15px] text-slate-700">
              <p>
                <span className="font-bold">Location:</span> {section.location}
              </p>
              <p>
                <span className="font-bold">Function:</span> {section.function}
              </p>
              <p>
                <span className="font-bold">Clinical Significance:</span>{" "}
                {section.clinical}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
        Electrical Pathway Summary
      </h2>
      <InfoBox data={conductionSequence} />

      <div className="flex justify-center items-center mb-10">
        <Image
          src="/assets/images/dashboard/ecg/foundation/cardiac2.png"
          alt="cardiac2"
          width={800}
          height={800}
          className="w-contain h-auto"
        />
      </div>

      <h2 className="text-2xl font-bold text-[#1e5d8e] mb-8">
        Intrinsic Pacemaker Rates
      </h2>
      <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1e5d8e] text-white">
            <tr>
              <th className="px-6 py-3 font-bold">Pacemaker Site</th>
              <th className="px-6 py-3 font-bold">Intrinsic Rate (bpm)</th>
              <th className="px-6 py-3 font-bold">Clinical Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            <tr className="bg-[#f8fafc]">
              <td className="px-6 py-4 font-medium text-slate-700">SA Node</td>
              <td className="px-6 py-4 text-slate-600">60-100</td>
              <td className="px-6 py-4 text-slate-600">
                Primary pacemaker (normal)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium text-slate-700">AV Node</td>
              <td className="px-6 py-4 text-slate-600">40-60</td>
              <td className="px-6 py-4 text-slate-600">
                Backup if SA node fails
              </td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-6 py-4 font-medium text-slate-700">
                Purkinje Fibers
              </td>
              <td className="px-6 py-4 text-slate-600">20-40</td>
              <td className="px-6 py-4 text-slate-600">
                Last resort pacemaker
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <InfoBox data={nursingImplications} />
      <InfoBox data={highYieldPoints} />
    </main>
  );
}
