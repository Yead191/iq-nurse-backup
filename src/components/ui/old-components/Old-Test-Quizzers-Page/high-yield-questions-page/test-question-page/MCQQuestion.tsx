"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

interface MCQQuestionProps {
  question: string;
  options: string[];
  selectedAnswer?: string;
  onAnswerChange: (answer: string) => void;
  explanation?: string;
  mode: string;
}

export default function MCQQuestion({
  question,
  options,
  selectedAnswer,
  onAnswerChange,
  explanation,
  mode
}: MCQQuestionProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const optionLabels = ["A", "B", "C", "D", "E"];

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
              className={`flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                isSelected
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="mcq-answer"
                value={label}
                checked={isSelected}
                onChange={() => onAnswerChange(label)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900 mr-2">{label}.</span>
                <span className="text-gray-700">{option}</span>
              </div>
            </label>
          );
        })}
      </div>

      {explanation && mode === "practice" && (
        <div className="mt-6 border-t pt-4">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
          >
            <Lightbulb className="w-4 h-4" />
            <span>Explanation</span>
            {showExplanation ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showExplanation && (
            <div className="mt-3 p-4 bg-orange-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">{explanation}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
