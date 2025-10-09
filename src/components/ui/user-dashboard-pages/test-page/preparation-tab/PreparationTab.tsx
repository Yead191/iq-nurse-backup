import React, { useState } from "react";
import TestHeader from "../TestHeader";
import ExamConfigSection from "@/components/ui/old-components/Old-Test-Quizzers-Page/high-yield-questions-page/exam-tab/ExamConfigSection";
import { useRouter } from "next/navigation";
import { RadioChangeEvent } from "antd";

const topics = [
  { id: 1, name: "Cardiovascular", questions: 85 },
  { id: 2, name: "Respiratory", questions: 75 },
  { id: 3, name: "Neurological", questions: 85 },
  { id: 4, name: "Pharmacology", questions: 110 },
  { id: 5, name: "Maternal Health", questions: 85 },
  { id: 6, name: "Pediatrics", questions: 85 },
  { id: 7, name: "Medical-Surgical", questions: 85 },
  { id: 8, name: "Mental Health", questions: 85 },
];
export default function PreparationTab() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [numQuestions, setNumQuestions] = useState(30);
  const [examMode, setExamMode] = useState("practice");
  const router = useRouter();

  const handleExamModeChange = (e: RadioChangeEvent) => {
    setExamMode(e.target.value);
  };
  const handleStart = () => {
    console.log("Starting exam with:", { numQuestions, examMode });
    // Add your start logic here
    router.push(`/profile/tests/mode/${examMode}`);
  };
  return (
    <div>
      <TestHeader
        title="Select a Topic to Practice"
        subtitle="Choose from our comprehensive list of NCLEX topic to focus your study."
      />
      {/* Topic Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {topics?.map((topic: any) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic.id)}
            className={`
              relative p-6 rounded-lg border-2 transition-all duration-200 text-left
              bg-white boxShadow h-auto lg:h-[180px]
              ${
                selectedTopic === topic.id
                  ? "border-primary shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }
            `}
          >
            {/* Topic Content */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 md:text-lg leading-tight">
                {topic.name}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm">
                {topic.questions} Questions
              </p>
            </div>

            {/* Selection Indicator */}
            {selectedTopic === topic.id && (
              <div className="absolute top-3 right-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}
          </button>
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
