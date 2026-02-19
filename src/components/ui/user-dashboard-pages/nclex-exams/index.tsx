"use client";
import React from "react";
import ProgressSection from "./components/progress";
import { PracticeByCategorySection } from "./components/PracticeByCategory";
import { FullNCLEXPracticeSection } from "./components/full-nclex";

export default function NclexContent({ id }: { id: string }) {
  0;
  const renderContent = () => {
    switch (id) {
      case "progress":
        return <ProgressSection />;
      case "category":
        return <PracticeByCategorySection />;
      case "full-nclex":
        return <FullNCLEXPracticeSection />;

      default:
        return <PracticeByCategorySection />;
    }
  };

  return (
    <div className="px-4 py-6 lg:h-[calc(100vh-80px)] overflow-auto">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
