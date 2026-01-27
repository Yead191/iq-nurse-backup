// src/components/exam/QuestionReviewItem.tsx
import { Question } from "@/helpers/examUtils";
import { Button } from "antd";
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from "lucide-react";

interface QuestionReviewItemProps {
  question: Question;
  index: number;
  userAnswer: string | string[] | undefined;
  isExpanded: boolean;
  onToggle: (id: string) => void;
}

export function QuestionReviewItem({
  question,
  index,
  userAnswer,
  isExpanded,
  onToggle,
}: QuestionReviewItemProps) {
  const isCorrect =
    userAnswer &&
    JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer);

  return (
    <div
      className={`border rounded-lg ${
        isCorrect
          ? "border-green-200 bg-green-50"
          : userAnswer
            ? "border-red-200 bg-red-50"
            : "border-gray-200 bg-gray-50"
      }`}
    >
      <Button
        type="text"
        size="large"
        onClick={() => onToggle(question.id)}
        className="w-full !px-4 !py-2  !h-auto flex items-start justify-between text-left hover:bg-transparent"
      >
        <div className="flex items-start gap-3 flex-1">
          {isCorrect ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          ) : userAnswer ? (
            <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-gray-400 mt-0.5 flex-shrink-0" />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-sm">Question {index + 1}</span>
              <span className="text-xs px-2 py-1 border rounded text-gray-700">
                {question.category}
              </span>
            </div>
            <p className="text-sm text-gray-700 text-wrap !text-start">
              {question.question}
            </p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </Button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              Your Answer:
            </p>
            <p className="text-sm text-gray-900">
              {userAnswer
                ? Array.isArray(userAnswer)
                  ? userAnswer.join(", ")
                  : userAnswer
                : "Not answered"}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">
              Correct Answer:
            </p>
            <p className="text-sm text-green-700 font-medium">
              {Array.isArray(question.correctAnswer)
                ? question.correctAnswer.join(", ")
                : question.correctAnswer}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Rationale:</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {question.rationale}
            </p>
          </div>
          {question.rationaleImage && (
            <div className="mt-3">
              {/* <ImageWithFallback
                src={question.rationaleImage}
                alt="Rationale illustration"
                className="max-w-md rounded-lg border border-gray-200"
              /> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
