"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { X, Check } from "lucide-react";

interface Props {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFlipped: boolean;
  onMarkWrong?: () => void;
  onMarkCorrect?: () => void;
  isFromChat?: string
  setShowCompletion?: any;
  isStudyNote?: boolean;
}

const FlashTestFooter: React.FC<Props> = ({
  currentIndex,
  total,
  onPrev,
  onNext,
  isFlipped,
  onMarkWrong,
  onMarkCorrect,
  isFromChat,
  setShowCompletion,
  isStudyNote,
}) => {
  const router = useRouter();
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const wrongDisabled = isFlipped;
  const correctDisabled = !isFlipped;

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="flex items-center justify-between lg:w-1/2 w-full">
        {/* Prev */}
        <button
          type="button"
          aria-label="Previous card"
          onClick={!isFirst ? onPrev : undefined}
          disabled={isFirst}
          className={`w-10 h-12 border border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-200 ${
            isFirst
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-[#003877] text-white cursor-pointer"
          }`}
        >
          <IoArrowBackSharp size={24} />
        </button>

        {/* Center controls */}
        <div className="flex items-center justify-between gap-10">
          {/* Wrong */}
          <button
            type="button"
            aria-label="Mark as wrong"
            onClick={!wrongDisabled ? onMarkWrong : undefined}
            disabled={wrongDisabled}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-red-600 border border-red-600`}
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div
            className="text-lg font-semibold text-gray-700"
            aria-live="polite"
          >
            {currentIndex + 1}/{total}
          </div>

          {/* Correct */}
          <button
            type="button"
            aria-label="Mark as correct"
            onClick={!correctDisabled ? onMarkCorrect : undefined}
            disabled={correctDisabled}
            className={`w-9 h-9 rounded-full flex items-center justify-center border text-green-600 border-green-600`}
          >
            <Check size={20} />
          </button>
        </div>

        {/* Next or Done */}
        {!isLast ? (
          <button
            type="button"
            aria-label="Next card"
            onClick={onNext}
            className="w-10 h-12 rounded-lg flex items-center justify-center bg-[#003877] text-white cursor-pointer"
          >
            <IoArrowForwardSharp size={24} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Finish test"
            onClick={() =>
              router.push(
               isFromChat?`/profile/group/${isFromChat}`: "/profile/flash-cards/high-yield-flashcards/create-test/test-result"
              )
            }
            className="px-4 h-12 rounded-lg flex items-center justify-center bg-[#003877] text-white font-medium cursor-pointer"
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default FlashTestFooter;
