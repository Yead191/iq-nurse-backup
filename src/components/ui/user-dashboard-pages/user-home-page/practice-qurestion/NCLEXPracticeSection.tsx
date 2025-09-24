"use client";

import { useState } from "react";

import { CategoryName, demoData } from "@/data/practiceQuestion";
import CategoryTabs from "./CategoryTabs";
import CompletionCard from "./CompletionCard";
import QuestionCard from "./QuestionCard";
import { SectionHeader } from "../SectionHeader";

export default function NCLEXPracticeSection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Pharmacology");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [showCompletion, setShowCompletion] = useState(false);
  const [score, setScore] = useState(0);

  const currentCategoryData = demoData[activeCategory];
  const currentQuestion = currentCategoryData?.questions[currentQuestionIndex];
  const totalQuestions = currentCategoryData?.questions.length || 0;

  const handleCategoryChange = (category: any) => {
    setActiveCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowCompletion(false);
    setScore(0);
  };

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
      const correctAnswers = currentCategoryData.questions.reduce(
        (acc: any, question: any, index: any) => {
          if (selectedAnswers[question.id] === question.correctAnswer) {
            return acc + 1;
          }
          return acc;
        },
        0
      );
      setScore(correctAnswers);
      setShowCompletion(true);
    }
  };

  const handleSubmitAnswer = () => {
    handleNextQuestion();
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowCompletion(false);
    setScore(0);
  };

  if (showCompletion) {
    return (
      <div
        style={{
          boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
          borderRadius: 12,
        }}
        className="my-8 p-4 lg:p-5 py-6 "
      >
        <div className="flex items-center justify-between mb-6">
          <SectionHeader title="NCLEX Practice Questions" />
          <button className="text-primary font-medium">See More</button>
        </div>

        <CategoryTabs
          categories={Object.keys(demoData)}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <CompletionCard
          score={score}
          totalQuestions={totalQuestions}
          category={activeCategory}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
        borderRadius: 12,
      }}
      className="my-8 p-4 lg:p-5 py-6 "
    >
      <div className="flex items-center justify-between mb-6">
        <SectionHeader title="NCLEX Practice Questions" />
        <button className="text-primary font-medium">See More</button>
      </div>

      <CategoryTabs
        categories={Object.keys(demoData)}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

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
    </div>
  );
}
