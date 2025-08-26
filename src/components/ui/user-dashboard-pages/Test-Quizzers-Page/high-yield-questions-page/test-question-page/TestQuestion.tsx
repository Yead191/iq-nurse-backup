"use client";

import { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import MCQQuestion from "./MCQQuestion";
import FillInBlankQuestion from "./FillInBlankQuestion";
import QuestionNavigation from "./QuestionNavigation";
import { questions } from "@/data/testQuestionData";

export default function TestQuestionPage({ mode }: { mode: string }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(
    new Set()
  );
  const [timeRemaining, setTimeRemaining] = useState(135); // 2:15 in seconds

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
      />

      <div className="max-w-4xl mx-auto p-6">
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
