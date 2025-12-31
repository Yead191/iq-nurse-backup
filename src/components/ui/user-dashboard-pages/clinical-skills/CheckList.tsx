"use client";
import MediaTab from "@/components/shared/MediaTab";
import { SkillStep } from "@/data/clinical-skills-data";
import { Card, Checkbox, Grid } from "antd";
import { FaCheckCircle } from "react-icons/fa";

interface ChecklistProps {
  checklist: string[];
  steps: SkillStep[];
}

export const Checklist = ({ checklist, steps }: ChecklistProps) => {
  const { lg } = Grid.useBreakpoint();

  const onChange = (data: any) => {
    // console.log(data)
  };

  return (
    <>
      <div className="p-6 bg-[#F5F5F5] rounded-sm">
        {checklist?.map((item, index) => (
          <div key={index} className="flex items-start gap-3  p-2">
            <FaCheckCircle className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{item}</span>
          </div>
        ))}
      </div>

      <p className="py-4 text-md font-bold">Procedure Steps</p>

      {steps?.map(({ title, description }, i) => (
        <Card
          className="!mb-3 shadow-md !border-none "
          styles={{
            body: {
              padding: lg ? 16 : "16px 12px",
            },
          }}
          key={i}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="bg-[#003877] text-white rounded-[50%] py-2 px-4">
                    {i + 1}
                  </span>
                  <h1 className="font-bold">{title}</h1>
                </div>
                <div className="mt-1">
                  <Checkbox onChange={onChange} className="!accent-green-500" />
                </div>
              </div>
              <p className="pl-12  sm:w-3/4 text-justify">{description}</p>
            </div>
          </div>
        </Card>
      ))}

      <div className="sm:w-3/4 pb-2">
        <MediaTab />
      </div>
    </>
  );
};
