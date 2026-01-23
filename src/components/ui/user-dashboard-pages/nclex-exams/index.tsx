"use client";
import React from "react";
import ProgressSection from "./components/progress";
import { PracticeByCategorySection } from "./components/PracticeByCategory";

export default function NclexContent({ id }: { id: string }) {
  const renderContent = () => {
    switch (id) {
      case "progress":
        return <ProgressSection />;
      case "practice":
        return <PracticeByCategorySection onStartExam={() => {}} />;

      default:
        return <div>Content coming soon...</div>;
    }
  };

  return (
    <div className="px-4 py-6">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
