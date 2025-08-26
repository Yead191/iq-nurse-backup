"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, Check, X } from "lucide-react";

interface MCQQuestionProps {
  question: string;
  options: string[];
  selectedAnswer?: string;
  onAnswerChange: (answer: string) => void;
  explanation?: string;
  correctAnswer?: string;
  mode: string; 
  showAnswers?: boolean; 
}
export default function MCQAnswer({
  question,
  options,
  selectedAnswer,
  onAnswerChange,
  explanation,
  correctAnswer,
  mode,
  showAnswers = true
}: MCQQuestionProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const optionLabels = ["A", "B", "C", "D", "E"]; 

  const getOptionStyling = (label: string, isSelected: boolean) => {
  if (!showAnswers) {
    return isSelected
      ? "border-blue-500 bg-blue-50"
      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
  }

  const isCorrectOption = label === correctAnswer;
  const isSelectedWrong = isSelected && !isCorrectOption;

  if (isCorrectOption) {
    return "border-green-500 bg-green-50"; 
  } else if (isSelectedWrong) {
    return "border-red-500 bg-red-50";
  } else {
    return "border-gray-200 bg-gray-50"; 
  }
};

const getAnswerIcon = (label: string, isSelected: boolean) => {
  if (!showAnswers) return null;

  const isCorrectOption = label === correctAnswer;
  const isSelectedWrong = isSelected && !isCorrectOption;

  if (isCorrectOption) {
    return <Check className="w-5 h-5 text-green-600 flex-shrink-0" />;
  } else if (isSelectedWrong) {
    return <X className="w-5 h-5 text-red-600 flex-shrink-0" />;
  }
  return null;
};


  return (
    <div className="space-y-4">
      <p className="text-gray-700 leading-relaxed mb-6">{question}</p>
      
      {/* Show result summary if answers are revealed */}
      {showAnswers && selectedAnswer && (
        <div className={`p-4 rounded-lg mb-4 ${
          selectedAnswer === correctAnswer 
            ? "bg-green-50 border border-green-200" 
            : "bg-red-50 border border-red-200"
        }`}>
          <div className="flex items-center space-x-2">
            {selectedAnswer === correctAnswer ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <X className="w-5 h-5 text-red-600" />
            )}
            <span className={`font-medium ${
              selectedAnswer === correctAnswer ? "text-green-800" : "text-red-800"
            }`}>
              {selectedAnswer === correctAnswer ? "Correct!" : "Incorrect"}
            </span>
          </div>
          {selectedAnswer !== correctAnswer && (
            <p className="mt-2 text-sm text-gray-600">
              The correct answer is <strong>{correctAnswer}</strong>.
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {options.map((option, index) => {
          const label = optionLabels[index];
          const isSelected = selectedAnswer === label;
          
          return (
            <label
              key={index}
              className={`flex items-start space-x-3 p-3 rounded-lg border transition-colors ${
                showAnswers ? 'cursor-default' : 'cursor-pointer'
              } ${getOptionStyling(label, isSelected)}`}
            >
              <input
                type="checkbox"
                name="mcq-answer"
                value={label}
                checked={isSelected}
                onChange={() => onAnswerChange(label)}
                disabled={showAnswers} 
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <div className="flex-1 flex items-start justify-between">
                <div>
                  <span className="font-medium text-gray-900 mr-2">{label}.</span>
                  <span className="text-gray-700">{option}</span>
                </div>
                {getAnswerIcon(label, isSelected)}
              </div>
            </label>
          );
        })}
      </div>

      {explanation && (mode === "practice" || showAnswers) && (
        <div className="mt-6 border-t border-gray-100 pt-4">
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