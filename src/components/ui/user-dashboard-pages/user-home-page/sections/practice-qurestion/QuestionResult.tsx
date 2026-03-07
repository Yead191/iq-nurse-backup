import { SectionHeader } from "../SectionHeader";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { NCLEXPracticeQuestions } from "@/data/practiceQuestion";
import Image from "next/image";

const QuestionResult = ({
  score,
  handleRestart,
}: {
  score: number;
  handleRestart: () => void;
}) => {
  const percentage = Math.round((score / NCLEXPracticeQuestions?.length) * 100);
  const isGoodScore = percentage >= 70;

  const getEncouragementMessage = () => {
    if (percentage === 100) {
      return "Perfect score! You have excellent understanding of this topic.";
    } else if (percentage >= 80) {
      return `Great job! You have a good understanding of NCLEX Mastery.`;
    } else if (percentage >= 60) {
      return "Good effort! Review the materials and try again to improve your score.";
    } else {
      return "Keep studying! Review the materials and try again.";
    }
  };

  return (
    <div className="w-full md:mt-8 mt-10">
      <SectionHeader title="NCLEX Mastery Challenge of the week" />

      <div
        className={` ${
          isGoodScore ? "bg-green-100 pt-10" : "bg-pink-100"
        } text-slate-900 rounded-2xl mt-4 p-8 shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center h-[300px]`}
      >
        <div
          className={`relative h-full w-full flex flex-col items-center justify-center`}
        >
          {isGoodScore && (
            <Image
              src="https://i.ibb.co.com/7dkC9QrD/5bea8a1dbf43ad852d3512742aa2ad005bfafd95.png"
              alt="good score img"
              height={100}
              width={100}
              unoptimized
              className="h-[90px] w-[90px] absolute -top-6 left-1/2 -translate-y-8 -translate-x-1/2"
            />
          )}
          <div>
            <h2
              className={`text-xl font-semibold mb-2 ${
                isGoodScore ? "text-green-800" : "text-pink-800"
              }`}
            >
              Test Complete!
            </h2>
            <p
              className={`text-lg mb-2 ${
                isGoodScore ? "text-green-700" : "text-pink-700"
              }`}
            >
              You scored {score} out of {NCLEXPracticeQuestions?.length} (
              {percentage}%)
            </p>
            <p
              className={`text-sm ${
                isGoodScore ? "text-green-600" : "text-pink-600"
              }`}
            >
              {getEncouragementMessage()}
            </p>

            <button
              onClick={handleRestart}
              className={`mt-4 px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                isGoodScore
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-pink-600 text-white hover:bg-pink-700"
              }`}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;

export const Option = ({
  label,
  value,
  selected,
  correctValue,
  isSubmitted,
  onSelect,
}: {
  label: string;
  value: string;
  selected: string | null;
  correctValue: string;
  isSubmitted: boolean;
  onSelect: (v: string) => void;
}) => {
  let borderColor = "border-slate-200";
  let textColor = "text-slate-600";
  let dotColor = null;
  let bgClass = "hover:bg-slate-50";

  const isSelected = selected === value;
  const isCorrect = value === correctValue;

  if (isSubmitted) {
    if (isCorrect) {
      borderColor = "border-emerald-500";
      textColor = "text-emerald-700";
      dotColor = "bg-emerald-500";
      bgClass = "bg-emerald-50";
    } else if (isSelected && !isCorrect) {
      borderColor = "border-rose-500";
      textColor = "text-rose-700";
      dotColor = "bg-rose-500";
      bgClass = "bg-rose-50";
    } else {
      borderColor = "border-slate-200";
      textColor = "text-slate-400";
      bgClass = "bg-white opacity-50";
    }
  } else {
    if (isSelected) {
      borderColor = "border-[#02478d]";
      textColor = "text-[#02478d]";
      dotColor = "bg-[#02478d]";
      bgClass = "bg-blue-50";
    } else {
      borderColor = "border-slate-200 group-hover:border-slate-300";
      textColor = "text-slate-600 group-hover:text-slate-800";
    }
  }

  return (
    <div
      className={`
        flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200
        ${borderColor} ${bgClass}
        ${!isSubmitted ? "cursor-pointer group" : "cursor-default"}
      `}
      onClick={() => onSelect(value)}
    >
      <div
        className={`
        w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-colors
        ${
          isSubmitted && isCorrect
            ? "border-emerald-500"
            : isSubmitted && isSelected && !isCorrect
              ? "border-rose-500"
              : isSelected
                ? "border-[#02478d]"
                : "border-slate-300"
        }
      `}
      >
        {dotColor && (
          <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></div>
        )}
      </div>

      <div className="flex-1 flex justify-between items-center">
        <span className={`font-medium text-sm ${textColor}`}>{label}</span>
        {isSubmitted && isCorrect && (
          <CheckCircle2 size={18} className="text-emerald-500" />
        )}
        {isSubmitted && isSelected && !isCorrect && (
          <XCircle size={18} className="text-rose-500" />
        )}
      </div>
    </div>
  );
};
