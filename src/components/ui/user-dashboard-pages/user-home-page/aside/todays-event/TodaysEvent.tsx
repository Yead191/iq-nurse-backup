import React from "react";
import TasksSection from "./TasksSection";
import ClassesSection from "./ClassesSection";
import AssignmentSection from "./AssignmentSection";
import MeetingSection from "./MeetingSection";

export default function TodaysEvent() {
  return (
    <div className="space-y-4 p-2">
      <TasksSection />
      <ClassesSection />
      <AssignmentSection />
      <MeetingSection />
    </div>
  );
}
