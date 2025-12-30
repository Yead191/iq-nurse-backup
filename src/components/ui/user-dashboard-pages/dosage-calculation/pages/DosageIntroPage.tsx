import { InfoBox } from "@/components/shared/InfoBox";
import { HighlightedCard } from "@/components/shared/user-dashboard/HighlightedCard";
import React from "react";

const data = {
  title: "Why Dosage Calculations Matter:",
  features: [
    "Medication errors are a leading cause of patient harm in healthcare settings",
    "Nurses are legally and ethically responsible for safe medication administration",
    "Accurate calculations prevent adverse drug events and save lives",
    "NCLEX-RN requires demonstrated competency in dosage calculations",
    "Clinical practice demands quick, accurate calculations in high-pressure situations",
  ],
  defaultColor: "#FDCB6E",
};

export default function DosageIntroPage() {
  return (
    <div>
      <div className="bg-[#2C5F8D] px-4 py-6 rounded-xl">
        <h1 className="text-2xl font-semibold text-white">
          Introduction to Dosage Calculations
        </h1>
      </div>
      <p className="my-4">
        Dosage calculation is one of the most critical skills for nursing
        students and practicing nurses. As the final checkpoint in the
        medication administration process, nurses bear significant
        responsibility for preventing medication errors. Mastery of dosage
        calculations is essential not only for passing the NCLEX-RN examination
        but also for ensuring patient safety throughout your nursing career.
      </p>
      <HighlightedCard
        title="⭐ NCLEX-RN HIGHLIGHT"
        focusLabel="NCLEX-RN Testing Focus: "
        className="bg-linear-to-r from-[#FFEAA7] to-[#FDCB6E]"
        content="The NCLEX-RN exam includes dosage calculation questions that test your ability to accurately calculate medication
doses, IV flow rates, and weight-based dosages. You must demonstrate proficiency in multiple calculation methods and the ability to make safe
clinical decisions. Calculators are provided during the exam, but you must know which formulas to use and how to interpret results."
      />
      <InfoBox data={data} />
    </div>
  );
}
