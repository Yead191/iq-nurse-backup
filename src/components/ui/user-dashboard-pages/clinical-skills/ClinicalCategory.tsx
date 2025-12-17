"use client";
import React from "react";
import ClinicalSkills from "./ClinicalSkills";
import DetailsHeader from "@/components/shared/DetailsHeader";

export default function ClinicalCategory({ category }: any) {
  return (
    <section>
      <DetailsHeader primaryBg={false} title="Clinical Skills" />
      <ClinicalSkills
        categories={{ skillCategoryId: category, setSkillId: null }}
      />
    </section>
  );
}
