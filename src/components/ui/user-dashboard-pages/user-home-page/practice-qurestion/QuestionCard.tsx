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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-4">
          Question {questionNumber} of {totalQuestions}
        </p>
        <h2 className="text-lg text-gray-900 leading-relaxed">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const optionLabel = optionLabels[index];
          const optionValue = `${optionLabel}.${option}`;
          const isSelected = selectedAnswer === optionValue;

          return (
            <label
              key={index}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={optionValue}
                  checked={isSelected}
                  onChange={(e) => onAnswerSelect(e.target.value)}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-blue-500"
                />
              </div>
              <span
                className={`text-sm leading-relaxed ${
                  isSelected ? "text-primary font-medium" : "text-gray-700"
                }`}
              >
                <span className="font-medium">{optionLabel}.</span> {option}
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

      <div className="flex items-center gap-4">
        {isLastQuestion ? (
          <button
            onClick={onSubmitAnswer}
            disabled={!selectedAnswer}
            className="px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Submit answer
          </button>
        ) : (
          <button
            onClick={onNextQuestion}
            disabled={!selectedAnswer}
            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium cursor-pointer  disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Next Question
          </button>
        )}

        <button
          onClick={() => setShowExplanation(!showExplanation)}
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700 text-sm font-medium"
        >
          <span className="w-4 h-4 bg-orange-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">!</span>
          </span>
          {showExplanation ? "Hide Explanation" : "Explanation"}
        </button>
      </div>
    </div>
  );
}
