"use client";

import { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import MCQQuestion from "./MCQQuestion";
import FillInBlankQuestion from "./FillInBlankQuestion";
import ExplanationPanel from "./ExplanationPanel";
import QuestionNavigation from "./QuestionNavigation";
import FlashcardModal from "./FlashcardModal";
import explanationImg from "@/assets/explanation-img.svg";
import Calculator from "./Calculator";

interface Question {
  id: number;
  type: "mcq" | "fill-in-blank";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  explanationImage?: string;
}

interface TestQuestionPageProps {
  mode: any;
  questions: Question[];
  subject: string;
  category: string;
  initialTime?: number;
}

export default function TestQuestion({
  mode,
  questions,
  subject,
  category,
  initialTime = 135,
}: TestQuestionPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<number>>(
    new Set()
  );
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(
    new Set()
  );
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showFlashcardModal, setShowFlashcardModal] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isQuestionSubmitted = submittedQuestions.has(currentQuestion.id);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (isCorrect: boolean) => {
    setSubmittedQuestions((prev) => new Set(prev).add(currentQuestion.id));
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
    <div className="w-full">
      <QuestionHeader
        subject={subject}
        category={category}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        timeRemaining={timeRemaining}
        isMarkedForReview={markedForReview.has(currentQuestion.id)}
        onMarkForReview={handleMarkForReview}
        onFlashcardClick={() => setShowFlashcardModal(true)}
        setShowCalculator={setShowCalculator}
        showCalculator={showCalculator}
      />

      <div className="py-4 w-full px-4 lg:px-5">
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
                correctAnswer={currentQuestion.correctAnswer}
                selectedAnswer={answers[currentQuestion.id]}
                onAnswerChange={(answer) =>
                  handleAnswerChange(currentQuestion.id, answer)
                }
                onSubmit={handleSubmit}
                isSubmitted={isQuestionSubmitted}
                questionId={currentQuestion.id}
              />
            ) : (
              <FillInBlankQuestion
                mode={mode}
                question={currentQuestion.question}
                correctAnswer={currentQuestion.correctAnswer}
                answer={answers[currentQuestion.id] || ""}
                onAnswerChange={(answer) =>
                  handleAnswerChange(currentQuestion.id, answer)
                }
                onSubmit={handleSubmit}
              />
            )}
          </div>

          <div className="">
            {showCalculator ? (
              <Calculator />
            ) : (
              <ExplanationPanel
                explanation={currentQuestion.explanation || ""}
                imageUrl={explanationImg}
                isVisible={
                  mode === "practice" &&
                  isQuestionSubmitted &&
                  !!currentQuestion.explanation
                }
              />
            )}
          </div>
        </div>

        <QuestionNavigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          canGoPrevious={currentQuestionIndex > 0}
          canGoNext={currentQuestionIndex < totalQuestions - 1}
          mode={mode}
        />
      </div>

      <FlashcardModal
        open={showFlashcardModal}
        onClose={() => setShowFlashcardModal(false)}
        questionId={currentQuestion.id}
      />
    </div>
  );
}
