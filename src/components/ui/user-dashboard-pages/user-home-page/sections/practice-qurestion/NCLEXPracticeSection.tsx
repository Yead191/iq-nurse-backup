"use client";
import { useState } from "react";
import { ChevronRight, AlertCircle } from "lucide-react";
import { NCLEXPracticeQuestions } from "@/data/practiceQuestion";
import { SectionHeader } from "../SectionHeader";
import QuestionResult, { Option } from "./QuestionResult";

export interface QuestionType {
  id: number;
  text: string;
  options: { label: string; value: string }[];
  correctValue: string;
  rationale: string;
}

export default function NCLEXPracticeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = NCLEXPracticeQuestions[currentIndex];

  const handleSelect = (value: string) => {
    if (!isSubmitted) {
      setSelected(value);
    }
  };

  const handleSubmit = () => {
    if (!selected) return;
    setIsSubmitted(true);
    if (selected === currentQuestion.correctValue) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < NCLEXPracticeQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div>
        <QuestionResult score={score} handleRestart={handleRestart} />
      </div>
    );
  }

  return (
    <div className="w-full pt-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4 text-[#02478d]">
        <SectionHeader title="NCLEX Mastery Challenge of the week" />
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-slate-500">
            Question {currentIndex + 1}/{NCLEXPracticeQuestions.length}
          </span>
        </div>
      </div>

      {/* Challenge Card */}
      <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col min-h-[400px] relative overflow-hidden">
        <div className="flex-1">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">
              {currentQuestion.id}
            </div>
            <h3 className="font-medium text-[16px] leading-relaxed text-slate-600">
              {currentQuestion.text}
            </h3>
          </div>

          <div className="space-y-3 pl-2">
            {currentQuestion.options.map((option) => (
              <Option
                key={option.value}
                label={option.label}
                value={option.value}
                selected={selected}
                correctValue={currentQuestion.correctValue}
                isSubmitted={isSubmitted}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>

        {/* Rationale Section - Appears after submit */}
        {isSubmitted && (
          <div className="mt-6 ml-2 p-4 bg-blue-50 border border-blue-100 rounded-xl animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-2 text-[#02478d] font-bold mb-2">
              <AlertCircle size={16} />
              <span>Rationale</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {currentQuestion.rationale}
            </p>
          </div>
        )}

        <div className="mt-8 pl-12 flex justify-between items-center">
          {/* Progress Dots */}
          <div className="flex gap-1.5">
            {NCLEXPracticeQuestions.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex
                    ? "bg-[#02478d]"
                    : idx < currentIndex
                      ? "bg-slate-400"
                      : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!selected}
              className={`
                   py-2 px-6 rounded-lg font-normal transition-all
                   ${
                     selected
                       ? "bg-primary text-white shadow-md shadow-blue-900/10"
                       : "bg-slate-100 text-slate-400 cursor-not-allowed"
                   }
                 `}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary text-white font-normal py-2 px-6 rounded-lg transition-colors shadow-md shadow-blue-900/10"
            >
              {currentIndex === NCLEXPracticeQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
