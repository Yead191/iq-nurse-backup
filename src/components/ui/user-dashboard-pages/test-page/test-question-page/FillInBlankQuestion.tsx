"use client";

import { Check, X } from "lucide-react";

interface FillInBlankQuestionProps {
  question: string;
  correctAnswer: string;
  answer: string;
  onAnswerChange: (answer: string) => void;
  mode: "practice" | "test";
  onSubmit?: (isCorrect: boolean) => void;
  isSubmitted?: boolean;
}

export default function FillInBlankQuestion({
  question,
  correctAnswer,
  answer,
  onAnswerChange,
  mode,
  onSubmit,
  isSubmitted = false,
}: FillInBlankQuestionProps) {
  const handleSubmit = () => {
    if (answer.trim()) {
      const isCorrect =
        answer.trim().toLowerCase() === correctAnswer.toLowerCase();
      onSubmit?.(isCorrect);
    }
  };

  const isCorrect =
    isSubmitted && answer.trim().toLowerCase() === correctAnswer.toLowerCase();
  const isIncorrect =
    isSubmitted && answer.trim().toLowerCase() !== correctAnswer.toLowerCase();

  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed mb-6">{question}</p>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={answer}
            onChange={(e) => !isSubmitted && onAnswerChange(e.target.value)}
            disabled={isSubmitted && mode === "practice"}
            placeholder="Type your answer here..."
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
              isCorrect
                ? "border-green-500 bg-green-50 focus:ring-green-500"
                : isIncorrect
                ? "border-red-500 bg-red-50 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {isSubmitted && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isCorrect ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <X className="w-5 h-5 text-red-600" />
              )}
            </div>
          )}
        </div>

        {isSubmitted && isIncorrect && mode === "practice" && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="font-medium">Correct Answer:</span>{" "}
              {correctAnswer}
            </p>
          </div>
        )}

        {mode === "practice" && answer.trim() && !isSubmitted && (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#003877] text-white rounded-lg hover:bg-[#003877]/90 transition-colors font-medium"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
