"use client";
import { useEffect, useState } from "react";

import { demoData, Question } from "@/data/practiceQuestion";
import CompletionCard from "./CompletionCard";
import QuestionCard from "./QuestionCard";
import { SectionHeader } from "../SectionHeader";

export default function NCLEXPracticeSection() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showCompletion, setShowCompletion] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Get all questions from all categories
    const allQuestions = Object.values(demoData).flatMap(
      (category) => category.questions,
    );

    // Shuffle and pick 10
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate score and show completion
      const correctAnswers = questions.reduce(
        (acc: number, question: Question) => {
          if (selectedAnswers[question.id] === question.correctAnswer) {
            return acc + 1;
          }
          return acc;
        },
        0,
      );
      setScore(correctAnswers);
      setShowCompletion(true);
    }
  };

  const handleSubmitAnswer = () => {
    handleNextQuestion();
  };

  const handleRetry = () => {
    // Re-shuffle for retry
    const allQuestions = Object.values(demoData).flatMap(
      (category) => category.questions,
    );
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));

    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowCompletion(false);
    setScore(0);
  };

  return (
    <div className="my-8 ">
      <div className="flex items-center justify-between gap-6 mb-6">
        <SectionHeader title="NCLEX Mastery Challenge of the week" />
        {!showCompletion && (
          <p className="text-[#6B7280] text-sm">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </p>
        )}
      </div>
      <div className="p-4 lg:p-6 pb-12 py-6 relative overflow-hidden boxShadow rounded-2xl">
        {showCompletion ? (
          <CompletionCard
            score={score}
            totalQuestions={totalQuestions}
            category="NCLEX"
            onRetry={handleRetry}
          />
        ) : (
          <>
            {currentQuestion && (
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={totalQuestions}
                selectedAnswer={selectedAnswers[currentQuestion.id]}
                onAnswerSelect={(answer) =>
                  handleAnswerSelect(currentQuestion.id, answer)
                }
                onNextQuestion={handleNextQuestion}
                onSubmitAnswer={handleSubmitAnswer}
                isLastQuestion={currentQuestionIndex === totalQuestions - 1}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
