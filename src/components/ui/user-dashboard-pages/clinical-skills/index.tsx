"use client";
import React, { useState } from "react";
import TempleteList from "../templates-page/TempleteList";
import ClinicalSkillsTab from "./ClinicalSkills";
import SkillSidebar from "./SkillSidebar";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Download, File, Printer, Share } from "lucide-react";

export default function ClinicalSkills() {

    type CategoryState = {
        skillCategoryId: string | null;
        setSkillId: string | null;
    };

    const [skills, setSkill] = useState<CategoryState>({
        skillCategoryId: null,
        setSkillId: null,
    });
    const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);

    console.log(skills)

    return (
        <>
            <PageNavbar
                icon={<File />}
                title="Document Templates"
                subtitle="Professional nursing documentation templates for clinical practice"
                isAiEnhanced={true}
            />
            <div className="flex flex-col md:flex-row">
                <div className={`${isSideBarSelect ? "hidden" : "block"} md:block`}>
                    <SkillSidebar setSkill={setSkill} setIsSideBarSelect={setIsSideBarSelect} />
                </div>

                <div className={`w-full md:flex-1 ${isSideBarSelect ? "block" : "hidden"} md:block`}>
                    <ClinicalSkillsTab categories={skills} setIsSideBarSelect={setIsSideBarSelect} />
                </div>
            </div>
        </>
    );
}
