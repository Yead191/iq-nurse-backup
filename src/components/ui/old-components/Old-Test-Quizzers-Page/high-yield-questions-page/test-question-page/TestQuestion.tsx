"use client";

import { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import MCQQuestion from "./MCQQuestion";
import FillInBlankQuestion from "./FillInBlankQuestion";
import QuestionNavigation from "./QuestionNavigation";
import { questions } from "@/data/testQuestionData";
import { Lightbulb } from "lucide-react";
import explanationImg from "@/assets/explanation-img.svg";
import Image from "next/image";
import Calculator from "./Calculator";
export default function TestQuestionPage({ mode }: { mode: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(
    new Set()
  );
  const [timeRemaining, setTimeRemaining] = useState(135); // 2:15 in seconds
  const [showCalculator, setShowCalculator] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion.id)) {
        newSet.delete(currentQuestion.id);
      } else {
        newSet.add(currentQuestion.id);
      }
      return newSet;
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };
  console.log(answers, markedForReview);

  return (
    <div>
      <QuestionHeader
        subject="Cardiovascular"
        category="Medical Surgical"
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        timeRemaining={timeRemaining}
        isMarkedForReview={markedForReview.has(currentQuestion.id)}
        onMarkForReview={handleMarkForReview}
        setShowCalculator={setShowCalculator}
        showCalculator={showCalculator}
      />

      <div className=" py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Question No {currentQuestion.id}
            </h2>

            {currentQuestion.type === "mcq" ? (
              <MCQQuestion
                mode={mode}
                question={currentQuestion.question}
                options={currentQuestion.options!}
                selectedAnswer={answers[currentQuestion.id]}
                onAnswerChange={(answer) =>
                  handleAnswerChange(currentQuestion.id, answer)
                }
                explanation={currentQuestion.explanation}
              />
            ) : (
              <FillInBlankQuestion
                question={currentQuestion.question}
                answer={answers[currentQuestion.id] || ""}
                onAnswerChange={(answer) =>
                  handleAnswerChange(currentQuestion.id, answer)
                }
              />
            )}
          </div>
          {showCalculator ? (
            <Calculator />
          ) : (
            <div>
              {currentQuestion?.explanation && mode === "practice" && (
                <div className="pb-4">
                  <button
                    // onClick={() => setShowExplanation(!showExplanation)}
                    className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span>Explanation</span>
                  </button>

                  {currentQuestion?.explanation && mode === "practice" && (
                    <div className="mt-3 p-4 bg-orange-50 rounded-lg">
                      <Image
                        src={explanationImg}
                        alt="explanation"
                        width={100}
                        height={100}
                        className="h-[280px] lg:h-[300px] w-full object-contain"
                      />
                      <p className="text-gray-700 leading-relaxed">
                        {currentQuestion?.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <QuestionNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentQuestionIndex > 0}
          canGoNext={currentQuestionIndex < totalQuestions - 1}
        />
      </div>
    </div>
  );
}
