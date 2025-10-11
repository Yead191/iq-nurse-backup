"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { BsFillLightbulbFill } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";

interface Props {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  isFlipped: boolean;
  onMarkWrong?: () => void;
  onMarkCorrect?: () => void;
  isFromChat?: string;
  setShowCompletion?: any;
  isStudyNote?: boolean;
  onPlippeClicked:() => void;
}

const BUTTONS = [
  {
    label: "Easy",
    ariaLabel: "Easy",
    className:
      "px-6 py-2 rounded-md cursor-pointer bg-[#22C55E] text-white font-medium transition-colors duration-200 hover:bg-[#16a34a] focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-offset-1 focus:ring-blue-300",
    onClickKey: "onMarkCorrect",
    disabled: (isFlipped: boolean) => !isFlipped,
  },
  {
    label: "Medium",
    ariaLabel: "Medium",
    className:
      "px-6 py-2 rounded-md cursor-pointer bg-[#F59E42] text-white font-medium transition-colors duration-200 hover:bg-[#ea8600] focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-offset-1 focus:ring-blue-300",
    onClickKey: "onMarkWrong",
    disabled: (isFlipped: boolean) => !isFlipped,
  },
  {
    label: "Hard",
    ariaLabel: "Hard",
    className:
      "px-6 py-2 rounded-md bg-[#EF4444] cursor-pointer text-white font-medium transition-colors duration-200 hover:bg-[#dc2626] focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-offset-1 focus:ring-blue-300",
    onClickKey: "onMarkWrong",
    disabled: (isFlipped: boolean) => !isFlipped,
  },
];

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
  onPlippeClicked
}) => {
  const router = useRouter();
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === total - 1;

  const clickHandlers: Record<string, (() => void) | undefined> = {
    onMarkCorrect,
    onMarkWrong,
  };

  // Toggle state for hint section
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="p-4 items-center justify-center">

      <p className="font-medium text-black text-center pb-2 sm:hidden ">
        How well did you know this?
      </p>
      <div className="flex items-center justify-between w-full md:px-8">

        {/* Prev */}
        <button
          type="button"
          aria-label="Previous card"
          onClick={!isFirst ? onPrev : undefined}
          disabled={isFirst}
          className={`py-2 border border-gray-300 px-3 rounded-lg flex items-center justify-center transition-colors duration-200 ${isFirst
            ? "bg-[#95A5A6] text-white cursor-not-allowed"
            : "bg-[#003877] text-white cursor-pointer"
            }`}
        >
          <span className="hidden md:flex items-center gap-2">
            <HiArrowSmallLeft size={20} />
            Previous
          </span>
          <IoIosArrowBack className="md:hidden" size={20} />
        </button>
        {/* Center controls */}
        <div className="flex items-center gap-6 px-2">
          <p className="font-medium !text-black hidden xl:block text-[min(1rem,4vw)]">
            How well did you know this?
          </p>
          {BUTTONS.map((btn) => (
            <button
              key={btn.label}
              type="button"
              aria-label={btn.ariaLabel}
              className={btn.className}
              onClick={clickHandlers[btn.onClickKey]}
              disabled={btn.disabled(isFlipped)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Next or Done */}
        {!isLast ? (
          <button
            type="button"
            aria-label="Next card"
            onClick={onNext}
            className="py-2 rounded-lg px-6 flex items-center justify-center bg-[#003877] text-white cursor-pointer"
          >
            <span className="hidden md:flex items-center gap-2">
              Next <HiArrowSmallRight size={20} />
            </span>
            <MdArrowForwardIos className="md:hidden" size={20} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Finish test"
            onClick={
              isStudyNote
                ? () => setShowCompletion(true)
                : () =>
                  router.push(
                    isFromChat
                      ? `/profile/group/${isFromChat}`
                      : "/profile/flash-cards/high-yield-flashcards/create-test/test-result"
                  )
            }
            className="px-4 py-2 rounded-lg flex items-center justify-center bg-primary text-white font-medium cursor-pointer"
          >
            <span className="md:block hidden">Done</span>
            <FaCheck className="md:hidden" size={20} />
          </button>
        )}
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <button
          type="button"
          onClick={onPlippeClicked}
          className="px-3 py-2 rounded-md bg-primary hover:scale-105 transition cursor-pointer text-white font-medium duration-200 hover:bg-primary/90  focus:outline-none flex items-center gap-2"
        >
          <SlRefresh size={15} />
          Flip Card
        </button>
        <button
          type="button"
          className="px-6 py-2 rounded-md bg-[#FAC898] hover:scale-105 transition cursor-pointer text-[#222] font-medium duration-200 hover:bg-[#f7b97a] focus:outline-none flex items-center gap-2"
          onClick={() => setShowHint((prev) => !prev)}
          aria-expanded={showHint}
          aria-controls="hint-section"
        >
          <BsFillLightbulbFill size={13} />
          {showHint ? "Hide Hint" : "Hint"}
        </button>
      </div>

      {/* hint (toggle) */}
      {showHint && (
        <div className="flex justify-center gap-6 mt-6" id="hint-section">
          <div className="bg-white rounded-lg shadow p-4 max-w-xl w-full border-l-8 border-blue-900 ">
            <div className="flex items-center mb-2">
              <span role="img" aria-label="Hint" className="mr-2">
                💡
              </span>
              <span className="font-semibold text-[#003877]">Hint</span>
            </div>
            <div className="text-sm text-gray-800 space-y-2">
              <p>
                Think about the acronym{" "}
                <span className="font-semibold">"MONA"</span> for initial
                treatment of suspected MI, and what each letter stands for.
                <br />
                This can help you remember the symptoms as well.
              </p>
              <p>
                Also consider the difference between typical and atypical
                presentations.
              </p>
              <a
                href="#"
                className="text-blue-600 underline text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Related content in textbook
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashTestFooter;
