import AddAssignmentModal from "@/components/shared/event-modals/AddAssignmentModal";
import AddExamModal from "@/components/shared/event-modals/AddExamModal";
import AddStudyTimeModal from "@/components/shared/event-modals/AddStudyTimeModal";
import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import { assignmentData } from "@/data/eventData";
import React, { useState } from "react";

export default function AssignmentSection() {
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [studyTimeModalOpen, setStudyTimeModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);

  const handleEvent = () => {
    setAssignmentModalOpen(true);
  };
  const handleStudyTime = () => {
    setStudyTimeModalOpen(true);
  };
  const handleExamModal = () => {
    setExamModalOpen(true);
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <TaskHeader
          img="/assets/icons/assignment-icon.svg"
          title="Assignment"
          handleEvent={handleEvent}
        />
        <TaskHeader
          img="/assets/icons/study-time-icon.svg"
          title="Study Time"
          handleEvent={handleStudyTime}
        />
        <TaskHeader
          img="/assets/icons/exam-icon.svg"
          title="Exams"
          handleEvent={handleExamModal}
        />
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
      <AddAssignmentModal
        open={assignmentModalOpen}
        onClose={() => setAssignmentModalOpen(false)}
      />
      <AddStudyTimeModal
        open={studyTimeModalOpen}
        onClose={() => setStudyTimeModalOpen(false)}
      />
      <AddExamModal
        open={examModalOpen}
        onClose={() => setExamModalOpen(false)}
      />
    </div>
  );
}
