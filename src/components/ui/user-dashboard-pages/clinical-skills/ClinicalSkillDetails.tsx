"use client";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Grid, Tabs } from "antd";
import { File } from "lucide-react";
import type { TabsProps } from "antd";
import MediaTab from "@/components/shared/MediaTab";
import { Checklist } from "./CheckList";
import DetailsHeader from "@/components/shared/DetailsHeader";
import { ClinicalSkill } from "@/data/clinical-skills-data";

interface IProps {
  skill: ClinicalSkill;
}

export default function ClinicalSkillDetails({ skill }: IProps) {
  const { lg } = Grid.useBreakpoint();
  const onChange = (key: string) => {
    // console.log(key);
  };

  const isMobile = globalThis.screen.width <= 768;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Checklist",
      children: (
        <Checklist checklist={skill.checklist} steps={skill.procedureSteps} />
      ),
    },
    {
      key: "2",
      label: "Video",
      children: (
        <div className="sm:w-3/4 pb-2 ">
          <MediaTab />
        </div>
      ),
    },
  ];
  return (
    <section className="mb-8">
      <div className=" px-4 md:px-5">
        {/* Title */}
        <h3 className="text-lg font-semibold ">{skill.name}</h3>
        <p className="text-gray-500 mt-2 mb-4">{skill.description}</p>

        {/* Tabs */}

        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className={isMobile ? "mb-6 !font-semibold text-2xl" : ""}
          tabBarGutter={lg ? 300 : undefined}
        />
      </div>
    </section>
  );
}
