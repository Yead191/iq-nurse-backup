import React from "react";
import {
  clinicalDecisionHeader,
  fiveRightsData,
  nclexHighlight1,
  safeDoseVerification,
  safetyAlert1,
  deviceSelection,
  clinicalPearl1,
  safetyAlert2,
  errorPrevention,
  nclexHighlight2,
  criticalThinkingScenario,
  documentationRequirements,
  clinicalPearl2,
} from "@/data/dosage-calculation/clinicalDecisionData";
import { InfoBox } from "@/components/shared/InfoBox";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

export default function ClinicalDecisionPage() {
  return (
    <main>
      {/* Page Header */}
      <SecondaryHeader title={clinicalDecisionHeader.title} />
      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-5xl">
        {clinicalDecisionHeader.description}
      </p>

      {/* The Five Rights of Medication Administration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          The Five Rights of Medication Administration
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          These fundamental principles guide safe medication practice and are
          emphasized on the NCLEX-RN.
        </p>
        <div className="space-y-4">
          <InfoBox data={fiveRightsData} />
          <InfoBox data={nclexHighlight1} />
        </div>
      </section>

      {/* Verifying Safe Dose Ranges */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          Verifying Safe Dose Ranges
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          After calculating a dose, always verify it falls within the safe
          therapeutic range for that medication, patient age, and condition.
        </p>
        <div className="space-y-4">
          <InfoBox data={safeDoseVerification} />
          <InfoBox data={safetyAlert1} />
        </div>
      </section>

      {/* Selecting Appropriate Measurement Devices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          Selecting Appropriate Measurement Devices
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          Using the correct measurement device is crucial for accurate
          medication administration.
        </p>
        <div className="space-y-4">
          <InfoBox data={deviceSelection} />
          <InfoBox data={clinicalPearl1} />
        </div>
      </section>

      {/* Common Medication Error Prevention Strategies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          Common Medication Error Prevention Strategies
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          Understanding common error patterns helps you implement effective
          prevention strategies.
        </p>
        <div className="space-y-4">
          <InfoBox data={safetyAlert2} />
          <InfoBox data={errorPrevention} />
        </div>
      </section>

      {/* Critical Thinking in Dosage Calculations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          Critical Thinking in Dosage Calculations
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          Beyond mathematical accuracy, nurses must apply critical thinking to
          evaluate whether calculated doses make clinical sense.
        </p>
        <div className="space-y-4">
          <InfoBox data={nclexHighlight2} />
          <InfoBox data={criticalThinkingScenario} />
        </div>
      </section>

      {/* Documentation and Communication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
          Documentation and Communication
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
          Proper documentation and communication are essential components of
          safe medication administration.
        </p>
        <div className="space-y-4">
          <InfoBox data={documentationRequirements} />
          <InfoBox data={clinicalPearl2} />
        </div>
      </section>
    </main>
  );
}
