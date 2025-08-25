"use client";

import { useState } from "react";
import MCQQuestion from "./MCQQuestion";
import FillInBlankQuestion from "./FillInBlankQuestion";
import QuestionNavigation from "./QuestionNavigation";
import QuestionHeader from "./QuestionHeader";

// Demo data
const questions = [
  {
    id: 1,
    type: "mcq" as const,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    options: [
      "Administer a 1 L 0.9% sodium chloride IV bolus",
      "Initiate an IV infusion of regular insulin",
      "Instruct client to breathe into a paper bag",
      "Obtain blood specimen for a serum glucose test",
      "Place the client on continuous cardiac monitoring",
    ],
    explanation:
      "Acute psychosis is characteristic of many psychiatric illnesses (eg, schizophrenia) and refers to bizarre thinking that is disconnected from reality. Symptoms of psychosis include hallucinations (false sensory perceptions) and delusions (eg, strong, false beliefs that are accepted by the client as well). Appropriate nursing interventions for clients experiencing auditory hallucinations (eg, hearing voices, talking back) and persecutory delusions (eg, false beliefs that are accepted by the client as well) include:",
  },
  {
    id: 2,
    type: "fill" as const,
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function TestQuestion({ mode }: { mode: string }) {
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
    <div className="">
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
