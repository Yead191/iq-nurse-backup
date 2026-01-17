"use client";
import { useState } from "react";
import { Button } from "antd";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { IoMdCard } from "react-icons/io";
import Link from "next/link";
import { studySubjects } from "@/data/studySubjects";

const NclexStudy = () => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleSubject = (subjectId: any) => {
    setSelectedSubjects((prev: any) => {
      if (prev.includes(subjectId)) {
        return prev.filter((id: number) => id !== subjectId);
      } else {
        return [...prev, subjectId];
      }
    });
  };

  const handleStartFlashcards = () => {
    if (selectedSubjects.length > 0) {
      console.log("Starting flashcards for subjects:", selectedSubjects);
      // Add your navigation logic here
    }
  };

  return (
    <div className="">
      <div className="p-4 lg:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            NCLEX Study Subjects
          </h1>
          <p className="text-gray-600">
            Choose a subject to start studying with our pre-made flashcards
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {studySubjects?.map((subject: any) => (
            <div
              key={subject.id}
              style={{
                boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
              }}
              className={`relative  p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md${
                (selectedSubjects as number[]).includes(subject.id)
                  ? " bg-[#00408017] ring-2 border-primary "
                  : `${subject.color} hover:border-gray-300 border-gray-100 `
              }`}
              onClick={() => toggleSubject(subject.id)}
            >
              {/* Content */}
              <div className="">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                  {subject.title}
                </h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed ">
                  {subject.description}
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <IoMdCard className="mr-1" />
                  <span>
                    {subject.cards} cards • {subject.percentage} of NCLEX
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Start Button */}
        <div className="text-center flex justify-center items-center pr-8 md:pr-0 w-full fixed md:static bottom-20">
          <Link href="/profile/flash-cards/high-yield-flashcards/create-test">
            <Button
              size="large"
              disabled={selectedSubjects.length === 0}
              onClick={handleStartFlashcards}
              className="px-8 py-2 h-auto !bg-primary !text-white disabled:bg-gray-400"
            >
              Start Flashcard({selectedSubjects.length} Selected)
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NclexStudy;
