import React from "react";
import {
  nclexSuccessHeader,
  nclexHighlight,
  studyPracticeStrategies,
  testTakingTips,
  clinicalPearlNclex,
  safetyAlertNclex,
} from "@/data/dosage-calculation/nclexSuccessStrategiesData";
import { InfoBox } from "@/components/shared/InfoBox";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

export default function SuccessStrategiesPage() {
  return (
    <main>
      {/* Page Header */}
      <SecondaryHeader title={nclexSuccessHeader.title} />
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 ">
        {nclexSuccessHeader.description}
      </p>

      {/* NCLEX-RN Highlight Box */}
      <div className="mb-6">
        <InfoBox data={nclexHighlight} />
      </div>

      {/* Strategies Sections */}
      <section className="space-y-6">
        <InfoBox data={studyPracticeStrategies} />
        <InfoBox data={testTakingTips} />
      </section>

      {/* Final Tips and Alerts */}
      <section className="mt-6 space-y-6">
        <InfoBox data={clinicalPearlNclex} />
        <InfoBox data={safetyAlertNclex} />
      </section>
    </main>
  );
}
