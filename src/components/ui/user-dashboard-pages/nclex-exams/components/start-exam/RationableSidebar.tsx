import { Question } from "@/helpers/examUtils";
import { Badge, Card } from "antd";
import { CheckCircle2, XCircle } from "lucide-react";
import React from "react";
import { ImageWithFallback } from "./ImageWithFallback";

interface RationableSidebarProps {
  currentQuestion: Question;
  currentAnswer: string | string[];
}

export default function RationableSidebar({
  currentQuestion,
  currentAnswer,
}: RationableSidebarProps) {
  return (
    <Card className="p-6 bg-white border-2 border-gray-300 shadow-lg max-h-[calc(100vh-255px)] overflow-y-auto">
      {/* Correct/Incorrect Header */}
      <div className="mb-6">
        {JSON.stringify(currentAnswer) ===
        JSON.stringify(currentQuestion.correctAnswer) ? (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-semibold text-lg">Correct!</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
            <XCircle className="w-6 h-6" />
            <span className="font-semibold text-lg">Incorrect</span>
          </div>
        )}
      </div>

      {/* Correct Answer */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Correct Answer:
        </p>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-900">
            {Array.isArray(currentQuestion.correctAnswer)
              ? currentQuestion.correctAnswer.join(", ")
              : currentQuestion.correctAnswer}
          </p>
        </div>
      </div>

      {/* Rationale */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2">Rationale:</p>
        <p className="text-sm text-gray-700 leading-relaxed">
          {currentQuestion.rationale}
        </p>
      </div>

      {/* Option-by-Option Explanation */}
      {currentQuestion.optionRationales && currentQuestion.options && (
        <div className="mb-6">
          <p className="text-sm font-semibold text-gray-700 mb-3">
            Answer Explanations:
          </p>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const optionRationale = currentQuestion.optionRationales![option];
              if (!optionRationale) return null;

              const isCorrect =
                currentQuestion.type === "multiple-choice"
                  ? option === currentQuestion.correctAnswer
                  : (currentQuestion.correctAnswer as string[]).includes(
                      option,
                    );

              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg border-l-4 ${
                    isCorrect
                      ? "bg-green-50 border-green-500"
                      : "bg-red-50 border-red-500"
                  }`}
                >
                  <div className="flex items-start gap-2 mb-1">
                    {isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <p
                      className={`text-xs font-semibold ${
                        isCorrect ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </p>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed ml-6">
                    {optionRationale}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {currentQuestion.rationaleImage && (
        <div className="mb-6">
          <ImageWithFallback
            src={currentQuestion.rationaleImage}
            alt="Rationale illustration"
            className="w-full rounded-lg border border-gray-200"
          />
        </div>
      )}

      {/* Question Metadata */}
      <div className="space-y-4 pt-4 border-t border-gray-200">
        {/* Peer Performance */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-xs font-semibold text-gray-600 mb-1">
            PEER PERFORMANCE
          </p>
          <p className="text-sm text-gray-900">
            <span className="font-semibold text-primary">
              {Math.floor(Math.random() * 40) + 40}%
            </span>{" "}
            of peers got this right
          </p>
        </div>

        {/* Difficulty Level */}
        <div>
          <p className="text-xs font-semibold text-gray-600 mb-2">DIFFICULTY</p>
          <Badge
            className={
              currentQuestion.difficulty === "easy"
                ? "bg-green-100 text-green-800 border-green-300"
                : currentQuestion.difficulty === "medium"
                  ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                  : "bg-red-100 text-red-800 border-red-300"
            }
          >
            {currentQuestion.difficulty.charAt(0).toUpperCase() +
              currentQuestion.difficulty.slice(1)}
          </Badge>
        </div>

        {/* Subject & Category */}
        <div>
          <p className="text-xs font-semibold text-gray-600 mb-2">
            SUBJECT & CATEGORY
          </p>
          <div className="space-y-2">
            <Badge className="bg-gray-50">{currentQuestion.category}</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
