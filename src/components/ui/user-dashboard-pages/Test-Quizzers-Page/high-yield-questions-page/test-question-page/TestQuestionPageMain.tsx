"use client";
import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import TestQuestion from "./TestQuestion";

export default function TestQuestionPageMain({ mode }: { mode: string }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Auto-transition to questions after splash animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-[calc(100vh-360px)]">
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <TestQuestion mode={mode} />
      )}
    </div>
  );
}
