"use client";

import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  onNextQuestion: () => void;
  onSubmitAnswer: () => void;
  isLastQuestion: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNextQuestion,
  onSubmitAnswer,
  isLastQuestion,
}: QuestionCardProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="bg-white">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center text-sm font-semibold text-[#6B7280]">
          {questionNumber}
        </div>
        <h2 className="text-black font-semibold text-base lg:text-[18px] leading-relaxed mt-0.5">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-8">
        {question.options.map((option, index) => {
          const optionLabel = optionLabels[index];
          const optionValue = `${optionLabel}.${option}`;
          const isSelected = selectedAnswer === optionValue;

          return (
            <label
              key={index}
              className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? "border-[#003B73] bg-white ring-1 ring-[#003B73]"
                  : "border-[#E5E7EB] hover:border-gray-300 bg-white"
              }`}
            >
              <div className="relative flex items-center justify-center">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={optionValue}
                  checked={isSelected}
                  onChange={(e) => onAnswerSelect(e.target.value)}
                  className="w-5 h-5 text-[#003B73] border-[#E5E7EB] focus:ring-[#003B73]"
                />
              </div>
              <span
                className={`text-sm lg:text-base ${
                  isSelected ? "text-[#111827] font-semibold" : "text-[#4B5563]"
                }`}
              >
                {optionLabel}. {option}
              </span>
            </label>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </span>
            <h3 className="text-sm font-medium text-orange-800">Explanation</h3>
          </div>
          <p className="text-sm text-orange-700 leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      <div className="flex items-center justify-end md:justify-between mt-10">
        <div className="md:flex gap-2 hidden ">
          {Array.from({ length: Math.min(totalQuestions, 10) }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === (questionNumber - 1) % 10
                  ? "bg-[#003B73]"
                  : "bg-[#E5E7EB]"
              }`}
            />
          ))}
          {totalQuestions > 10 && (
            <div className="text-[10px] text-gray-400 self-center">...</div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {isLastQuestion ? (
            <button
              onClick={onSubmitAnswer}
              disabled={!selectedAnswer}
              className="px-6 md:px-8 py-2 md:py-3 bg-primary text-white rounded-[8px] text-sm md:text-[16px] font-medium hover:bg-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Submit test
            </button>
          ) : (
            <button
              onClick={onNextQuestion}
              disabled={!selectedAnswer}
              className="px-6 md:px-8 py-2 md:py-3 bg-primary text-white rounded-[8px] text-sm md:text-[16px] font-medium cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors hover:bg-primary/95 "
            >
              Next Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
