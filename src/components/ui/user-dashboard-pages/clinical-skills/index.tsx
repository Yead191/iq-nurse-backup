"use client";
import React, { useState } from "react";
import ClinicalSkillsTab from "./ClinicalSkills";
import SkillSidebar from "./SkillSidebar";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { File } from "lucide-react";
import { Grid } from "antd";

export default function ClinicalSkills() {
  const { lg } = Grid.useBreakpoint();
  type CategoryState = {
    skillCategoryId: string | null;
    setSkillId: string | null;
  };

  const [skills, setSkill] = useState<CategoryState>({
    skillCategoryId: "1",
    setSkillId: null,
  });
  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);

  //   console.log(skills);

  return (
    <>
      <PageNavbar
        icon={<File />}
        title="Document Templates"
        subtitle="Professional nursing documentation  templates for clinical practice"
        isAiEnhanced={true}
      />

      <div className="flex flex-col md:flex-row mt-6 lg:mt-0">
        <div className={` md:block`}>
          <SkillSidebar
            skill={skills?.skillCategoryId}
            setSkill={setSkill}
            setIsSideBarSelect={setIsSideBarSelect}
          />
        </div>

        <div className={`w-full md:flex-1 hidden md:block`}>
          <ClinicalSkillsTab
            categories={skills}
            setIsSideBarSelect={setIsSideBarSelect}
          />
        </div>
      </div>
    </>
  );
}
