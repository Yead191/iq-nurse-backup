"use client";
import React, { useState } from "react";
import ClinicalSkillsTab from "./ClinicalSkills";
import SkillSidebar from "./SkillSidebar";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Grid } from "antd";
import Image from "next/image";
import { clinicalSkillsData } from "@/data/clinical-skills-data";

export type CategoryState = {
  skillCategoryId: string | null;
  setSkillId: string | null;
};

export default function ClinicalSkills() {
  const { lg } = Grid.useBreakpoint();

  const [skills, setSkill] = useState<CategoryState>({
    skillCategoryId: clinicalSkillsData[0]?.id || null,
    setSkillId: null,
  });
  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);

  const selectedCategory = clinicalSkillsData.find(
    (cat) => cat.id === skills.skillCategoryId
  );
  const activeSkills = selectedCategory ? selectedCategory.skills : [];

  //   console.log(skills);

  return (
    <>
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/clinical.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className="w-fit h-[32px] object-contain"
          />
        }
        title="Clinical Skill"
        subtitle="Master essential nursing skills with IQ Nurse"
        isAiEnhanced={true}
      />

      <div className="flex flex-col md:flex-row mt-6 lg:mt-0">
        {/* <div className={` md:block`}>
          <SkillSidebar setIsSideBarSelect={setIsSideBarSelect} />
        </div> */}

        <div className={`w-full md:flex-1 hidden md:block`}>
          <ClinicalSkillsTab
            skills={activeSkills}
            setIsSideBarSelect={setIsSideBarSelect}
          />
        </div>
      </div>
    </>
  );
}
