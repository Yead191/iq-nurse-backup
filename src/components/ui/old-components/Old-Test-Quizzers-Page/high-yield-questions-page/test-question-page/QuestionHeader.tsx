"use client";

import { useEffect, useState } from "react";
import { Clock, Flag, Calculator, Notebook } from "lucide-react";
import { Button, Grid } from "antd";

interface QuestionHeaderProps {
  subject: string;
  category: string;
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
  isMarkedForReview: boolean;
  onMarkForReview: () => void;
  setShowCalculator: (v: boolean) => void;
  showCalculator: boolean;
}

export default function QuestionHeader({
  subject,
  category,
  currentQuestion,
  totalQuestions,
  timeRemaining: initialTime,
  isMarkedForReview,
  onMarkForReview,
  setShowCalculator,
  showCalculator,
}: QuestionHeaderProps) {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const { lg } = Grid.useBreakpoint();
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <header>
      <div className="bg-[#003877] text-white px-6 py-4">
        <div className=" items-center flex justify-between flex-wrap gap-4">
          <div className="flex  items-center space-x-8">
            {/* <div className="flex items-center space-x-2">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Calculator</span>
          </div> */}

            <div className="text-start lg:text-center">
              <div className="text-lg font-semibold">{subject}</div>
              {/* <div className="text-sm opacity-90">{category}</div> */}
            </div>
          </div>
          <div className="flex flex-row justify-center space-x-6">
            <div className="text-sm opacity-90 ">
              Question {currentQuestion} of {totalQuestions}
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">
                Time:{formatTime(timeRemaining)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-[#667EEA] p-2 md:pr-4">
        <div className="flex items-center md:space-x-4">
          <Button
            icon={<Notebook size={lg ? 16 : 14} />}
            size={lg ? "large" : "small"}
            className="!bg-transparent !text-white !border-none"
          >
            Notes
          </Button>
          <Button
            onClick={() => setShowCalculator(!showCalculator)}
            icon={<Calculator size={lg ? 16 : 14} />}
            size={lg ? "large" : "small"}
            className="!bg-transparent !text-white !border-none"
          >
            Calculator
          </Button>
        </div>
        <div className="flex justify-end items-center space-x-8 text-white">
          <button
            onClick={onMarkForReview}
            className={`flex items-center space-x-2 px-3 py-1 rounded text-xs md:text-sm font-medium transition-colors ${
              isMarkedForReview
                ? "bg-yellow-500 text-yellow-900"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            <Flag className="w-4 h-4" />
            <span>Mark for Review</span>
          </button>
        </div>
      </div>
    </header>
  );
}
