"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import TestQuestion from "./TestQuestion";

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

const title = "Personalizing Your Exam"
  return (
    <div className="min-h-[calc(100vh-360px)]">
      {showSplash ? (
        <SplashScreen onComplete={() =>setShowSplash(false)} steps={steps} title={title}  />
      ) : (
        <TestQuestion mode={mode} />
      )}
    </div>
  );
}
