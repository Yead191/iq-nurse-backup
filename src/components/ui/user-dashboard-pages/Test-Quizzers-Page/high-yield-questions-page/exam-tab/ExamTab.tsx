"use client";
import { questionSections } from "@/data/quizFolder";
import React, { useState } from "react";
import FlashCategory from "../../../flash-cards/high-yield-flashcards/FlashCategory";
import { Collapse, RadioChangeEvent } from "antd";
import { Minus, Plus } from "lucide-react";
import MobileTabHeader from "@/components/shared/MobileTabHeader";
import ExamConfigSection from "./ExamConfigSection";
import { useRouter } from "next/navigation";

export default function ExamTab() {
  const [numQuestions, setNumQuestions] = useState(30);
  const [examMode, setExamMode] = useState("practice");
  const handleExamModeChange = (e: RadioChangeEvent) => {
    setExamMode(e.target.value);
  };
  const router = useRouter();
  const handleStart = () => {
    console.log("Starting exam with:", { numQuestions, examMode });
    // Add your start logic here
    router.push(`/profile/tests/high-yield-questions/${examMode}`);
  };
  return (
    <div>
      <MobileTabHeader title="Exams" subtitle="2500 Test Questions Available" />
      <div className="flex flex-col gap-y-5">
        {questionSections?.map((values: any, index: number) => (
          <div key={index} className="border border-gray-200 rounded-xl p-3">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 ">
                <h2 className="text-xl md:text-2xl font-bold">
                  {values?.title}
                </h2>
                {/* <span className="border px-4 py-1 border-gray-200 ps-2 md:hidden rounded-lg">
                  {values?.total}
                </span> */}
              </div>
              <div className="md:flex items-center hidden ">
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
              </div>
            </div>

            {/* Large device → 3-column grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-10 py-5">
              {values?.categories.map((column: any, colIdx: number) => (
                <div key={colIdx} className="space-y-2">
                  <FlashCategory categories={column} />
                </div>
              ))}
            </div>

            {/* Small device → accordion (Collapse question) */}
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
                // expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
              >
                {values?.categories.map((column: any, colIdx: number) => (
                  <Collapse.Panel
                    header={
                      <div>
                        {column?.title ? (
                          column?.title
                        ) : (
                          <div className="flex items-center gap-2 text-[#003877]">
                            <h2 className="text-[16px] font-medium">
                              {"Category" + colIdx + 1}
                            </h2>
                            <span className="border px-2 py-1 border-[#C5D0D0]  text-xs ps-2 md:hidden rounded-lg">
                              {values?.total}
                            </span>
                          </div>
                        )}
                      </div>
                    }
                    key={colIdx}
                  >
                    <div className="flex items-center md:hidden mb-2 pl-2">
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
                      </label>
                    </div>
                    <FlashCategory categories={column} />
                  </Collapse.Panel>
                ))}
              </Collapse>
            </div>
          </div>
        ))}
      </div>

      <ExamConfigSection
        numQuestions={numQuestions}
        setNumQuestions={setNumQuestions}
        examMode={examMode}
        handleStart={handleStart}
        handleExamModeChange={handleExamModeChange}
      />
    </div>
  );
}
