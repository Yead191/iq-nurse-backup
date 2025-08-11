import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import { assignmentData } from "@/data/eventData";
import React from "react";

export default function AssignmentSection() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <TaskHeader
          img="/assets/icons/assignment-icon.svg"
          title="Assignment"
        />
        <TaskHeader
          img="/assets/icons/study-time-icon.svg"
          title="Study Time"
        />
        <TaskHeader img="/assets/icons/exam-icon.svg" title="Exams" />
        <TaskHeader
          img="/assets/icons/clinical-icon.svg"
          title="Clinical Rotations"
        />
      </div>
      <div className="my-6">
        {/* Dynamic Class Cards */}
        {assignmentData.map((classItem) => (
          <EventCard
            key={classItem.id}
            title={classItem.title}
            description={classItem.description}
            timeRange={classItem.timeRange}
            status={classItem.status}
            avatarColor={classItem.avatarColor}
            avatarIcon={classItem.avatarIcon}
            backgroundColor={classItem.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
