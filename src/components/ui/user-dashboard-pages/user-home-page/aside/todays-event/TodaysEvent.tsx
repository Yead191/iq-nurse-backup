import React from "react";
import TasksSection from "./TasksSection";
import ClassesSection from "./ClassesSection";

export default function TodaysEvent() {
  return (
    <div className="space-y-4">
      <TasksSection />
      <ClassesSection />
    </div>
  );
}
