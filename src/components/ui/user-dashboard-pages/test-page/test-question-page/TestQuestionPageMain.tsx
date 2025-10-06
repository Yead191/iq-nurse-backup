"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import TestQuestion from "./TestQuestion";
import { sampleQuestions } from "@/data/testQuestionData";
const steps = [
  { id: 1, text: "Analyzing Past Performance" },
  { id: 2, text: "Selecting optional questions for you mastery level" },
  { id: 3, text: "Finalizing Exam" },
];

export default function TestQuestionPageMain({ mode }: { mode: string }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto-transition to questions after splash animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const title = "Personalizing Your Exam";
  return (
    <section className="min-h-screen  flex justify-center md:items-center  min-w-full">
      {/* <PageNavbar
        icon={<BookOpen className="text-black fill-current" />}
        title="Master the NCLEX with Confidence"
        subtitle="Practice with targeted questions, track your progress, and compare with peers to boost your chances of success."
        isAiEnhanced={false}
      /> */}
      <div className="min-h-[calc(100vh-360px)]  lg:px-5 min-w-full">
        {showSplash ? (
          <SplashScreen
            onComplete={() => setShowSplash(false)}
            steps={steps}
            title={title}
          />
        ) : (
          <TestQuestion
            mode={mode}
            questions={sampleQuestions}
            subject="NCLEX Cardiovascular"
            category="Medical Surgical"
            initialTime={7200}
          />
        )}
      </div>
    </section>
  );
}
