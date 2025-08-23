import { questionSections } from "@/data/quizFolder";
import React from "react";
import FlashCategory from "../../../flash-cards/high-yield-flashcards/FlashCategory";
import { Collapse } from "antd";
import { Minus, Plus } from "lucide-react";
import MobileTabHeader from "@/components/shared/MobileTabHeader";

export default function ExamTab() {
  return (
    <div>
      <MobileTabHeader title="Exams" subtitle="2500 Test Questions Available" />
      <div className="flex flex-col gap-y-5">
        {questionSections?.map((values: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-xl p-3">
            {/* Header */}
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold">{values?.title}</h2>
              {/* <div className="flex items-center">
                <input
                  type="checkbox"
                  name={`all-${values?.title}`}
                  className="mr-2 h-3 w-3"
                />
                <label
                  htmlFor={`all-${values?.title}`}
                  className="text-gray-700 flex items-center gap-1"
                >
                  <span>All {values?.title}</span>
                  <span className="border px-4 py-1 border-gray-200 ps-2">
                    {values?.total}
                  </span>
                </label>
              </div> */}
            </div>

            {/* Large device → 3-column grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-10 py-5">
              {values?.categories.map((column: any, colIdx: number) => (
                <div key={colIdx} className="space-y-2">
                  <FlashCategory categories={column} />
                </div>
              ))}
            </div>

            {/* Small device → FAQ (Collapse) */}
            <div className="block lg:hidden py-5">
              <Collapse
                ghost
                defaultActiveKey={["0"]}
                expandIconPosition="end"
                style={{
                  backgroundColor: "white",
                }}
                size="large"
                className="custom-faq-collapse"
                expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
              >
                {values?.categories.map((column: any, colIdx: number) => (
                  <Collapse.Panel
                    header={column?.title || `Category ${colIdx + 1}`}
                    key={colIdx}
                  >
                    <FlashCategory categories={column} />
                  </Collapse.Panel>
                ))}
              </Collapse>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex items-center justify-end mt-4">
        <Link
          href={"/profile/flash-cards/create-flash/start-scratch/flash-folder"}
          className=" h-[45px] lg:w-[200px] w-full rounded-lg bg-[#003877] text-white flex items-center justify-center gap-1 cursor-pointer"
        >
          <span> Continue </span>{" "}
          <span>
            {" "}
            <MdOutlineArrowForward size={20} />{" "}
          </span>
        </Link>
      </div> */}
    </div>
  );
}
