"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "../SplashScreen";
import ResultMain from "./Results/ResultMain";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { BookOpen } from "lucide-react";

const steps = [
  { id: 1, text: "Grading Exam" },
  { id: 2, text: "Comparing performance" },
  { id: 3, text: "Calculating mastery level" },
];

export default function AnalyzingResultsMain() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const title = "Analyzing Results";

  return (
    <section>
      <PageNavbar
        icon={<BookOpen className="text-black fill-current" />}
        title="Master the NCLEX with Confidence"
        subtitle="Practice with targeted questions, track your progress, and compare with peers to boost your chances of success."
        isAiEnhanced={false}
      />
      <div className="min-h-[calc(100vh-360px)] px-4 lg:px-5">
        {showSplash ? (
          <SplashScreen
            onComplete={() => setShowSplash(false)}
            steps={steps}
            title={title}
          />
        ) : (
          <ResultMain />
        )}
      </div>
    </section>
  );
}
