import { Radio } from "antd";
import { CheckCircle2, XCircle, Minus } from "lucide-react";
import { Button } from "antd";

interface MultipleChoiceOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  strikethrough: boolean;
  onToggleStrikethrough: (option: string) => void;
}

export function MultipleChoiceOption({
  option,
  index,
  isSelected,
  isCorrect,
  showFeedback,
  strikethrough,
  onToggleStrikethrough,
}: MultipleChoiceOptionProps) {
  let borderColor = "border-gray-200";
  let bgColor = "";

  if (showFeedback) {
    if (isCorrect) {
      borderColor = "border-green-500";
      bgColor = "bg-green-50";
    } else if (isSelected && !isCorrect) {
      borderColor = "border-red-500";
      bgColor = "bg-red-50";
    }
  }
  console.log(option);
  return (
    <div
      className={`flex items-start space-x-3 border rounded-lg p-4 transition-colors ${borderColor} ${bgColor} ${
        !showFeedback ? "hover:border-blue-300" : ""
      }`}
    >
      <Radio value={option} className="flex-1">
        <span
          className={
            strikethrough ? "line-through text-gray-400" : "text-gray-900"
          }
        >
          {option || "Empty Option"}
        </span>
      </Radio>

      {showFeedback && isCorrect && (
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
      )}
      {showFeedback && isSelected && !isCorrect && (
        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
      )}
    </div>
  );
}
