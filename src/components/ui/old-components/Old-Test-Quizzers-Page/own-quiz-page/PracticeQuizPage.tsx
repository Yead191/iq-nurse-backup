"use client";

import { useState } from "react";
import { Button, Tooltip } from "antd";
import { useRouter } from "next/navigation";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import CreateFolderCard from "./CreateFolderCard";
import { ImportCard } from "@/data/testCardData";
import Image from "next/image";
import { generateDemoQuiz } from "@/data/generateQuiz";

export default function PracticeQuizPage() {
  const [quizName, setQuizName] = useState("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const router = useRouter();

  const handleContinue = () => {
    if (quizName && selectedOption) {
      const quizData = generateDemoQuiz(quizName);

      // Get existing folders from localStorage or use empty array
      const existingFolders = JSON.parse(
        localStorage.getItem("quizFolders") || "[]"
      );

      // Create new folder with the quiz
      const newFolder = {
        id: Date.now().toString(),
        name: quizName,
        color: getRandomColor(),
        quizCount: 1,
        createdAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        quizzes: [quizData],
      };

      // Add new folder to existing folders
      const updatedFolders = [...existingFolders, newFolder];
      localStorage.setItem("quizFolders", JSON.stringify(updatedFolders));

      router.push("/profile/tests/practice-quiz/quizzes");
    }
  };

  const getRandomColor = () => {
    const colors = [
      "#ec4899",
      "#f59e0b",
      "#3b82f6",
      "#10b981",
      "#8b5cf6",
      "#f97316",
      "#06b6d4",
      "#84cc16",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="">
      <PageBreadcrumb
        itemImg={"/assets/sidebar-icons/test-icon.svg"}
        itemLabel={"Exams & Quizzers"}
      />
      <div className="my-6">
        <h1 className="text-xl lg:text-2xl font-medium">
          Create Practice Quiz
        </h1>
        <p className="text-xs text-[#7B7B7B] mt-1">
          Get ready for your test, it's time to practice!
        </p>
      </div>

      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name Your Quiz
        </label>
        <input
          type="text"
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter quiz name..."
        />
      </div>

      <div className="mb-8 mt-16">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Choose an option
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 ">
          {ImportCard.map((option, i) => (
            <div
              key={i}
              onClick={() => setSelectedOption(option.id)}
              className={` rounded-2xl shadow-md border p-6 text-center flex flex-col items-center w-full justify-center py-8 relative cursor-pointer  transition-transform duration-300 hover:shadow hover:-translate-y-1
              ${
                selectedOption === option.id
                  ? "border-[#003877] bg-blue-50"
                  : `bg-white border-[#00000024]`
              }
            `}
            >
              {/* Image Wrapper */}
              <div className="lg:w-20 w-16 h-16 lg:h-20 bg-[#F5F6F8] rounded-full flex items-center justify-center shadow-sm mb-4">
                <img
                  src={option?.image}
                  alt={option.title}
                  className="lg:w-14 lg:h-14 w-10 h-10 "
                />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-1">{option?.title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {option?.description}
              </p>

              {/* Dynamic Options (only for upload card) */}
              {option?.options && (
                <div className="flex flex-wrap justify-center gap-2">
                  {option?.options.map((opt) => (
                    <button
                      key={opt}
                      className="px-3 py-1 rounded-lg border text-xs bg-gray-50 hover:bg-gray-100 text-gray-700"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              {selectedOption === option.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Tooltip
          title={
            !quizName && !selectedOption
              ? "Enter folder name and choose an option"
              : !quizName
              ? "Enter folder name"
              : !selectedOption
              ? "Choose an option"
              : ""
          }
          placement="top"
          // open={!quizName || !selectedOption}
        >
          <span>
            <Button
              type="primary"
              size="large"
              onClick={handleContinue}
              disabled={!quizName || !selectedOption}
              className="bg-primary"
            >
              Continue
            </Button>
          </span>
        </Tooltip>
        <Button
          size="large"
          onClick={() => {
            if (selectedOption || quizName) {
              setSelectedOption("");
              setQuizName("");
              return;
            }
            router.back();
          }}
          style={{
            backgroundColor: "#EF4444",
            color: "white",
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
