import React, { useState } from "react";
import TestHeader from "../TestHeader";
import { useRouter } from "next/navigation";

export default function PersonalizeQuizTab() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [questionCount, setQuestionCount] = useState("10");
  const [difficulty, setDifficulty] = useState("Medium");

  const questionOptions = [
    "5 questions",
    "10 questions",
    "15 questions",
    "20 questions",
    "25 questions",
  ];

  const difficultyOptions = ["Easy", "Medium", "Hard"];

  const handleGenerateQuiz = () => {
    console.log("Generating quiz with:", {
      content,
      questionCount,
      difficulty,
    });
    router.push(
      `/profile/tests/personalized-quiz?count=${questionCount}?difficulty=${difficulty}`
    );
  };

  return (
    <div className="w-full ">
      {/* Header */}
      <TestHeader
        title=" Create Custom Quizzes with AI"
        subtitle=" Upload your class notes or paste content to generate personalized
          practice questions."
      />

      {/* Content Input */}
      <div className="mb-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Paste your class notes, textbook excerpts, or study materials here..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Settings */}
      <div className="space-y-4 mb-6">
        {/* Number of Questions */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">
            Number of Questions:
          </label>
          <div className="relative">
            <select
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none cursor-pointer"
            >
              {questionOptions.map((option) => (
                <option key={option} value={option.split(" ")[0]}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Difficulty Level */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Difficulty level:</label>
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none cursor-pointer"
            >
              {difficultyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerateQuiz}
        disabled={!content.trim()}
        className={`
          w-full max-w-lg py-3 px-6 rounded-lg font-medium transition-all duration-200
          ${
            content.trim()
              ? "bg-primary boxShadow  text-white "
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
        `}
      >
        Generate Custom Quiz
      </button>
    </div>
  );
}
