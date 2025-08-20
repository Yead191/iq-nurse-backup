"use client";

import { useState } from "react";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import CreateFolderCard from "./CreateFolderCard";

interface OptionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const options: OptionCard[] = [
  {
    id: "upload",
    title: "Upload any files from class",
    description: "Click to upload a .png and .jpeg files",
    icon: "📁",
    color: "bg-pink-50 border-pink-200",
  },
  {
    id: "quizlet",
    title: "Import from Quizlet",
    description: "Import your material from Quizlet",
    icon: "🔍",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: "anki",
    title: "Import from Anki",
    description: "Import your material from Anki",
    icon: "⭐",
    color: "bg-cyan-50 border-cyan-200",
  },
];

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

  const generateDemoQuiz = (name: string) => {
    return {
      name,
      questions: [
        {
          id: 1,
          type: "mcq",
          question: "What is the normal range for adult heart rate?",
          options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
          correctAnswer: 1,
        },
        {
          id: 2,
          type: "mcq",
          question: "Which medication is commonly used to treat hypertension?",
          options: ["Aspirin", "Lisinopril", "Metformin", "Albuterol"],
          correctAnswer: 1,
        },
        {
          id: 3,
          type: "text",
          question: "List three signs of dehydration in elderly patients.",
          answer: "Dry mouth, decreased skin elasticity, confusion",
        },
        {
          id: 4,
          type: "mcq",
          question: "What is the first-line treatment for anaphylaxis?",
          options: [
            "Diphenhydramine",
            "Epinephrine",
            "Corticosteroids",
            "Albuterol",
          ],
          correctAnswer: 1,
        },
        {
          id: 5,
          type: "text",
          question:
            "Explain the difference between systolic and diastolic blood pressure.",
          answer:
            "Systolic pressure is the pressure when the heart contracts, diastolic is when the heart relaxes",
        },
      ],
      createdAt: new Date().toISOString(),
      color: "#ec4899",
    };
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
      <CreateFolderCard />

      <div className="mb-8 mt-16">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Choose an option
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedOption(option.id)}
              className={`
                    relative cursor-pointer rounded-lg border-2 p-4 transition-all
                    ${
                      selectedOption === option.id
                        ? "border-blue-500 bg-blue-50"
                        : `${option.color} hover:shadow-md`
                    }
                  `}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{option.icon}</div>
                <h3 className="font-medium text-gray-900 mb-1">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
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
        <Button
          type="primary"
          size="large"
          onClick={handleContinue}
          disabled={!quizName || !selectedOption}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Continue
        </Button>
        <Button
          size="large"
          onClick={() => router.push("/")}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
