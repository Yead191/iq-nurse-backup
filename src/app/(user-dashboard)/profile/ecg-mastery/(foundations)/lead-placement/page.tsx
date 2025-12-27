import { InfoBox } from "@/components/shared/InfoBox";
import {
  pageIntro,
  understandingLeads,
  threeLeadSystem,
  fiveLeadSystem,
  twelveLeadSystem,
  leadViews,
  specialConsiderations,
  nursingResponsibilities,
  nclexHighYield,
  type Electrode,
} from "@/data/ecg/foundation/leadPlacementData";
import React from "react";

// Helper component for Electrode Cards
const ElectrodeCard = ({ electrode }: { electrode: Electrode }) => (
  <div className="border border-slate-200 rounded-xl p-6 flex flex-col gap-4">
    <div
      className="w-8 h-8 rounded-full shadow-sm border border-slate-100"
      style={{ backgroundColor: electrode.dotColor }}
    />
    <div>
      <h3 className="font-bold text-slate-800 mb-2">
        {electrode.name} ({electrode.code}) - {electrode.color}
      </h3>
      <div className="space-y-2 text-sm text-slate-600">
        <p>
          <span className="font-bold">Location:</span> {electrode.location}
        </p>
        {electrode.landmark && (
          <p>
            <span className="font-bold">Landmark:</span> {electrode.landmark}
          </p>
        )}
        {electrode.extraInfo && (
          <div className="whitespace-pre-line mt-2 italic text-slate-500">
            {electrode.extraInfo}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function LeadPlacementPage() {
  return (
    <main className="">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-primary mb-4">
          {pageIntro.title}
        </h1>
        <div className="h-[1px] bg-slate-200 w-full mb-8" />
        <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
          {pageIntro.description}
        </p>
      </div>

      {/* Understanding ECG Leads */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {understandingLeads.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-slate-600">
          {understandingLeads.content}
        </p>
      </div>

      {/* 3-Lead ECG Monitoring */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {threeLeadSystem.title}
        </h2>
        <div className="mb-6 text-[15px] text-slate-600 space-y-2">
          <p>
            <span className="font-bold">Purpose:</span>{" "}
            {threeLeadSystem.purpose}
          </p>
          <p>
            <span className="font-bold">Provides:</span>{" "}
            {threeLeadSystem.provides}
          </p>
        </div>

        <h3 className="text-lg font-bold text-primary mb-4">
          Electrode Placement for 3-Lead
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {threeLeadSystem.electrodes.map((electrode, idx) => (
            <ElectrodeCard key={idx} electrode={electrode} />
          ))}
        </div>

        <InfoBox data={threeLeadSystem.tips} />
        <div className="h-[1px] bg-slate-200 w-full my-12" />
      </div>

      {/* 5-Lead ECG Monitoring */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {fiveLeadSystem.title}
        </h2>
        <div className="mb-6 text-[15px] text-slate-600 space-y-2">
          <p>
            <span className="font-bold">Purpose:</span> {fiveLeadSystem.purpose}
          </p>
          <p>
            <span className="font-bold">Provides:</span>{" "}
            {fiveLeadSystem.provides}
          </p>
        </div>

        <h3 className="text-lg font-bold text-primary mb-4">
          Electrode Placement for 5-Lead
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {fiveLeadSystem.electrodes.slice(0, 4).map((electrode, idx) => (
            <ElectrodeCard key={idx} electrode={electrode} />
          ))}
        </div>
        {/* Chest Lead separate row/card if needed, typically placed below or in grid */}
        <div className="mb-8 w-full md:w-1/4">
          <ElectrodeCard electrode={fiveLeadSystem.electrodes[4]} />
        </div>

        <InfoBox data={fiveLeadSystem.advantages} />
        <div className="h-[1px] bg-slate-200 w-full my-12" />
      </div>

      {/* 12-Lead ECG */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {twelveLeadSystem.title}
        </h2>
        <div className="mb-8 text-[15px] text-slate-600 space-y-2">
          <p>
            <span className="font-bold">Purpose:</span>{" "}
            {twelveLeadSystem.purpose}
          </p>
          <p>
            <span className="font-bold">Provides:</span>{" "}
            {twelveLeadSystem.provides}
          </p>
          <p>
            <span className="font-bold">When to obtain:</span>{" "}
            {twelveLeadSystem.whenToObtain}
          </p>
        </div>

        {/* Limb Lead Table */}
        <h3 className="text-lg font-bold text-primary mb-4">
          Limb Lead Placement (4 electrodes)
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold">Electrode</th>
                <th className="px-6 py-3 font-bold">Color</th>
                <th className="px-6 py-3 font-bold">Placement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {twelveLeadSystem.limbLeads.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : ""}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {row.electrode}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.color}</td>
                  <td className="px-6 py-4 text-slate-600">{row.placement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Precordial Lead Table */}
        <h3 className="text-lg font-bold text-primary mb-4">
          Precordial (Chest) Lead Placement (6 electrodes)
        </h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold">Lead</th>
                <th className="px-6 py-3 font-bold">Anatomical Location</th>
                <th className="px-6 py-3 font-bold">Cardiac View</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {twelveLeadSystem.precordialLeads.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : ""}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {row.lead}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.location}</td>
                  <td className="px-6 py-4 text-slate-600">{row.view}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-bold text-primary mb-4">
          Anatomical Landmarks for Chest Leads
        </h3>
        <InfoBox data={twelveLeadSystem.landmarksTip} />
      </div>

      {/* Lead Views */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {leadViews.title}
        </h2>
        <div className="overflow-hidden border border-slate-200 rounded-xl mb-12">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#1e5d8e] text-white">
              <tr>
                <th className="px-6 py-3 font-bold">Cardiac Territory</th>
                <th className="px-6 py-3 font-bold">Leads</th>
                <th className="px-6 py-3 font-bold">Coronary Artery</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {leadViews.data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#f8fafc]" : ""}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">
                    {row.territory}
                  </td>
                  <td className="px-6 py-4 text-slate-600">{row.leads}</td>
                  <td className="px-6 py-4 text-slate-600">{row.artery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <InfoBox data={leadViews.errorsTip} />
      </div>

      {/* Special Considerations */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {specialConsiderations.title}
        </h2>
        <div className="space-y-6">
          {specialConsiderations.items.map((item, index) => (
            <div key={index}>
              <h3
                className={`font-bold text-primary ${
                  index === 0 ? "text-xl mb-2" : "text-lg mb-1"
                }`}
              >
                {item.label}
              </h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {index === 0 ? (
                  item.content
                ) : (
                  <ul className="list-disc pl-5">
                    <li>{item.content}</li>
                  </ul>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other Info Boxes */}
      <InfoBox data={nursingResponsibilities} />
      <InfoBox data={nclexHighYield} />
    </main>
  );
}
