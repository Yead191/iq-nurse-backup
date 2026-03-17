"use client";
import { useState, useEffect } from "react";

import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
} from "lucide-react";
import {
  shuffleQuestions,
  TestQuestion,
  testQuestions,
} from "@/data/practicalSkill/practicalTest";
import Spinner from "@/components/shared/Spinner";

export function PracticeSkillTest() {
  const [questions, setQuestions] = useState<TestQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    Array<{ question: TestQuestion; userAnswer: string; correct: boolean }>
  >([]);

  useEffect(() => {
    // Shuffle questions on component mount
    setQuestions(shuffleQuestions(testQuestions));
  }, []);

  if (questions.length === 0) {
    return <Spinner />;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedAnswer(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswered(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    setAnsweredQuestions([
      ...answeredQuestions,
      {
        question: currentQuestion,
        userAnswer: selectedAnswer,
        correct: isCorrect,
      },
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestartTest = () => {
    setQuestions(shuffleQuestions(testQuestions));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsComplete(false);
    setAnsweredQuestions([]);
  };

  // Test Complete Screen
  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 75;

    return (
      <div className="flex-1  overflow-y-auto">
        <div className="max-w-4xl mx-auto p-8">
          {/* Results Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-6 text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#2C5F8D]/10 mb-4">
              <Award className="size-12 text-[#2C5F8D]" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Test Complete!
            </h1>
            <p className="text-lg text-gray-600 mb-4">Here's how you did:</p>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="text-5xl font-bold text-[#2C5F8D] mb-2">
                {percentage}%
              </div>
              <p className="text-xl text-gray-700 mb-2">
                {score} out of {questions.length} correct
              </p>
              <div
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  passed
                    ? "bg-green-100 text-green-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {passed ? "✓ PASSED" : "Review recommended"}
              </div>
            </div>

            <button
              onClick={handleRestartTest}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors font-medium"
            >
              <RotateCcw className="size-5" />
              Retake Test
            </button>
          </div>

          {/* Question Review */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Review Your Answers
            </h2>
            <div className="space-y-4">
              {answeredQuestions.map((item, index) => (
                <div
                  key={index}
                  className={`border-l-4 p-4 rounded ${
                    item.correct
                      ? "border-green-500 bg-green-50"
                      : "border-red-500 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {item.correct ? (
                      <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="size-6 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-2">
                        Question {index + 1}: {item.question.question}
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        <span className="font-medium">Your answer:</span>{" "}
                        {
                          item.question.options.find(
                            (opt) => opt.id === item.userAnswer,
                          )?.text
                        }
                      </p>
                      {!item.correct && (
                        <p className="text-sm text-gray-700 mb-2">
                          <span className="font-medium">Correct answer:</span>{" "}
                          {
                            item.question.options.find(
                              (opt) => opt.id === item.question.correctAnswer,
                            )?.text
                          }
                        </p>
                      )}
                      <div className="bg-white rounded p-3 mt-2">
                        <p className="text-xs font-semibold text-[#2C5F8D] mb-1">
                          RATIONALE:
                        </p>
                        <p className="text-sm text-gray-700">
                          {item.question.rationale}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Test Screen
  return (
    <div className="flex-1  overflow-y-auto">
      <div className="max-w-4xl mx-auto p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-[#2C5F8D]">
              Score: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#2C5F8D] h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Question Header */}
          <div className="flex items-start gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C5F8D] text-white font-bold flex items-center justify-center">
              {currentQuestionIndex + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-700">
                  {currentQuestion.category}
                </span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${
                    currentQuestion.difficulty === "Easy"
                      ? "bg-green-100 text-green-800"
                      : currentQuestion.difficulty === "Medium"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {currentQuestion.difficulty}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">
                {currentQuestion.question}
              </h2>
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectAnswer =
                option.id === currentQuestion.correctAnswer;
              const showCorrect = isAnswered && isCorrectAnswer;
              const showIncorrect =
                isAnswered && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showIncorrect
                        ? "border-red-500 bg-red-50"
                        : isSelected
                          ? "border-[#2C5F8D] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                  } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold ${
                        showCorrect
                          ? "border-green-500 bg-green-500 text-white"
                          : showIncorrect
                            ? "border-red-500 bg-red-500 text-white"
                            : isSelected
                              ? "border-[#2C5F8D] bg-[#2C5F8D] text-white"
                              : "border-gray-300 text-gray-600"
                      }`}
                    >
                      {showCorrect ? (
                        <CheckCircle className="size-5" />
                      ) : showIncorrect ? (
                        <XCircle className="size-5" />
                      ) : (
                        option.id.toUpperCase()
                      )}
                    </div>
                    <span className="text-gray-800">{option.text}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Rationale Display */}
          {isAnswered && (
            <div className="mt-6 p-4 bg-blue-50 border-l-4 border-[#2C5F8D] rounded">
              <h3 className="font-semibold text-[#2C5F8D] mb-2 flex items-center gap-2">
                <span>📚 Rationale:</span>
              </h3>
              <p className="text-sm text-gray-800 leading-relaxed">
                {currentQuestion.rationale}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            {!isAnswered ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedAnswer
                    ? "bg-[#2C5F8D] text-white hover:bg-[#234a6d]"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#2C5F8D] text-white rounded-lg hover:bg-[#234a6d] transition-colors font-medium"
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="size-5" />
                  </>
                ) : (
                  <>
                    View Results
                    <Award className="size-5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Study Tip */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-[#2C5F8D]">💡 Test Tip:</span>{" "}
            Read each question carefully and consider all options before
            selecting your answer. Remember, NCLEX-style questions often ask for
            the BEST or PRIORITY action.
          </p>
        </div>
      </div>
    </div>
  );
}
