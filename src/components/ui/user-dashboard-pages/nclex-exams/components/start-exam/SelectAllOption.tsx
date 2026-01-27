import { Checkbox } from "antd";
import { CheckCircle2, XCircle } from "lucide-react";

interface SelectAllOptionProps {
  option: string;
  index: number;
  isChecked: boolean;
  isCorrect: boolean;
  showFeedback: boolean;
  strikethrough: boolean;
  onToggleStrikethrough: (option: string) => void;
  onChange: (checked: boolean) => void;
}

export function SelectAllOption({
  option,
  index,
  isChecked,
  isCorrect,
  showFeedback,
  strikethrough,
  onChange,
}: SelectAllOptionProps) {
  let borderColor = "border-gray-200";
  let bgColor = "";

  if (showFeedback) {
    if (isCorrect) {
      borderColor = "border-green-500";
      bgColor = "bg-green-50";
    } else if (isChecked && !isCorrect) {
      borderColor = "border-red-500";
      bgColor = "bg-red-50";
    }
  }

  return (
    <div
      className={`flex items-start space-x-3 gap-2 border rounded-lg p-4 transition-colors ${borderColor} ${bgColor} ${
        !showFeedback ? "hover:border-blue-300" : ""
      }`}
    >
      <Checkbox
        id={`option-${index}`}
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5"
      />
      <label
        htmlFor={`option-${index}`}
        className={`flex-1 cursor-pointer ${strikethrough ? "line-through text-gray-400" : ""}`}
      >
        {option}
      </label>

      {showFeedback && isCorrect && (
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
      )}
      {showFeedback && isChecked && !isCorrect && (
        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
      )}
    </div>
  );
}
