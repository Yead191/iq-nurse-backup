"use client";

import { Check, X } from "lucide-react";

interface MCQQuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  selectedAnswer?: string;
  onAnswerChange: (answer: string) => void;
  mode: "practice" | "test";
  onSubmit?: (isCorrect: boolean) => void;
  isSubmitted?: boolean;
  questionId: number;
}

export default function MCQQuestion({
  question,
  options,
  correctAnswer,
  selectedAnswer,
  onAnswerChange,
  mode,
  onSubmit,
  isSubmitted = false,
  questionId,
}: MCQQuestionProps) {
  const optionLabels = ["A", "B", "C", "D", "E"];

  const handleSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === correctAnswer;
      onSubmit?.(isCorrect);
    }
  };

  const getOptionStyle = (label: string) => {
    if (!isSubmitted || mode === "test") {
      return selectedAnswer === label
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
    }

    if (label === correctAnswer) {
      return "border-green-500 bg-green-50";
    }

    if (label === selectedAnswer && label !== correctAnswer) {
      return "border-red-500 bg-red-50";
    }

    return "border-gray-200";
  };

  const getOptionIcon = (label: string) => {
    if (!isSubmitted || mode === "test") return null;

    if (label === correctAnswer) {
      return <Check className="w-5 h-5 text-green-600" />;
    }

    if (label === selectedAnswer && label !== correctAnswer) {
      return <X className="w-5 h-5 text-red-600" />;
    }

    return null;
  };

  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed mb-6">{question}</p>

      <div className="space-y-3">
        {options.map((option, index) => {
          const label = optionLabels[index];
          const isSelected = selectedAnswer === label;

          return (
            <label
              key={index}
              className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${getOptionStyle(
                label
              )}`}
            >
              <input
                type="radio"
                name={`mcq-answer-${questionId}`}
                value={label}
                checked={isSelected}
                onChange={() => !isSubmitted && onAnswerChange(label)}
                disabled={isSubmitted && mode === "practice"}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="flex-1 flex items-start justify-between">
                <div>
                  <span className="font-medium text-gray-900 mr-2">
                    {label}.
                  </span>
                  <span className="text-gray-700">{option}</span>
                </div>
                {getOptionIcon(label)}
              </div>
            </label>
          );
        })}
      </div>

      {mode === "practice" && selectedAnswer && !isSubmitted && (
        <div className="pt-4">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#003877] text-white rounded-lg hover:bg-[#003877]/90 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
