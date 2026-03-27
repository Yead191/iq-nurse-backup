"use client";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  RefreshCw,
  Award,
  ClipboardCheck,
  Calculator as CalcIcon,
} from "lucide-react";
import { DosageCalculator } from "./Calculator";
import { practiceQuestions } from "@/data/dosage-calculation/practice-questions";

export function PracticeTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(practiceQuestions.length).fill(false),
  );
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const currentQuestion = practiceQuestions[currentQuestionIndex];
  const totalQuestions = practiceQuestions.length;
  const questionsAnswered = answeredQuestions.filter(Boolean).length;

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setShowResult(true);

    if (isCorrect && !answeredQuestions[currentQuestionIndex]) {
      setScore(score + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[currentQuestionIndex] = true;
    setAnsweredQuestions(newAnsweredQuestions);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(practiceQuestions.length).fill(false));
  };

  return (
    <div className="container mx-auto  space-y-6 pb-6 ">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
          <div className="flex items-start gap-3">
            <ClipboardCheck className="w-8 h-8 text-[#2C5F8D] flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                NCLEX Practice Test
              </h2>
              <p className="text-sm text-gray-600">
                Comprehensive dosage calculation questions to prepare for the
                NCLEX exam
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-xs bg-white border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 hover:border-[#2C5F8D] transition-colors"
            >
              <CalcIcon className="w-4 h-4" />
              Calculator
            </button>
            <button
              onClick={resetTest}
              className="flex items-center gap-2 px-4 py-2 text-xs bg-white border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Test
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-700">
              Progress: {questionsAnswered} of {totalQuestions} questions
            </span>
            <span className="text-xs font-medium text-[#2C5F8D]">
              Score: {score}/{totalQuestions}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#2C5F8D] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(questionsAnswered / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
              {currentQuestion.category}
            </span>
          </div>

          <h3 className="text-sm font-medium text-gray-700 mb-4">
            {currentQuestion.question}
          </h3>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrect = showResult && isCorrect;
              const showIncorrect = showResult && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showIncorrect
                        ? "border-red-500 bg-red-50"
                        : isSelected
                          ? "border-[#2C5F8D] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  } ${showResult ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                        showCorrect
                          ? "border-green-500 bg-green-500 text-white"
                          : showIncorrect
                            ? "border-red-500 bg-red-500 text-white"
                            : isSelected
                              ? "border-[#2C5F8D] bg-[#2C5F8D] text-white"
                              : "border-gray-300 text-gray-500"
                      }`}
                    >
                      {showCorrect ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : showIncorrect ? (
                        <XCircle className="w-4 h-4" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span
                      className={`flex-1 text-xs ${
                        showCorrect
                          ? "text-green-900 font-medium"
                          : showIncorrect
                            ? "text-red-900"
                            : isSelected
                              ? "text-blue-700 font-medium"
                              : "text-gray-600"
                      }`}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit/Explanation Section */}
        {!showResult ? (
          <button
            onClick={checkAnswer}
            disabled={selectedAnswer === null}
            className="w-full px-6 py-3 bg-[#2C5F8D] text-white rounded-lg font-medium text-sm hover:bg-[#234a6d] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Submit Answer
          </button>
        ) : (
          <div className="space-y-4">
            {/* Result Banner */}
            <div
              className={`rounded-lg p-4 ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <div className="flex items-start gap-3">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-2 text-sm ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "text-green-900"
                        : "text-red-900"
                    }`}
                  >
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? "Correct!"
                      : "Incorrect"}
                  </h4>
                  <div
                    className={`text-xs ${
                      selectedAnswer === currentQuestion.correctAnswer
                        ? "text-green-800"
                        : "text-red-800"
                    }`}
                  >
                    <p className="font-semibold mb-1">Explanation:</p>
                    <p className="whitespace-pre-line">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rationale */}
            {currentQuestion.rationale && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-gray-700 mb-2 text-sm">
                  Rationale:
                </h5>
                <p className="text-xs text-gray-600 whitespace-pre-line">
                  {currentQuestion.rationale}
                </p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex-1 px-6 py-3 bg-white border-2 border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
                className="flex-1 px-6 py-3 bg-primary text-white border-2 border-primary rounded-lg font-medium text-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next Question
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Completion Message */}
      {questionsAnswered === totalQuestions && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 p-6">
          <div className="flex items-start gap-4">
            <Award className="w-12 h-12 text-[#2C5F8D] flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Test Complete! 🎉
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                You've answered all {totalQuestions} questions.
              </p>
              <p className="text-base font-semibold text-[#2C5F8D]">
                Final Score: {score}/{totalQuestions} (
                {Math.round((score / totalQuestions) * 100)}%)
              </p>
              <p className="text-xs text-gray-600 mt-2">
                {score / totalQuestions >= 0.8
                  ? "Excellent work! You're well-prepared for the NCLEX."
                  : score / totalQuestions >= 0.6
                    ? "Good effort! Review the topics you missed and try again."
                    : "Keep studying! Review the study notes and retake the test."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Study Tips */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-700 mb-2 text-sm">
          Test-Taking Tips
        </h3>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>
            • Read each question carefully and identify what is being asked
          </li>
          <li>• Pay attention to units and convert when necessary</li>
          <li>• Eliminate obviously wrong answers first</li>
          <li>• Double-check your calculations before submitting</li>
          <li>• Review the explanations even when you answer correctly</li>
        </ul>
      </div>

      {/* Calculator Modal */}
      <DosageCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}
