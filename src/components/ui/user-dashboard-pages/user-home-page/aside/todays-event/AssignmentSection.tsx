import AddAssignmentModal from "@/components/shared/event-modals/AddAssignmentModal";
import AddExamModal from "@/components/shared/event-modals/AddExamModal";
import AddStudyTimeModal from "@/components/shared/event-modals/AddStudyTimeModal";
import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import { assignmentData } from "@/data/eventData";
import { BookOpen, FileText, Stethoscope } from "lucide-react";
import React, { useState } from "react";

export default function AssignmentSection() {
  // const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  // const [studyTimeModalOpen, setStudyTimeModalOpen] = useState(false);
  // const [examModalOpen, setExamModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <TaskHeader
          icon={FileText}
          iconColor="bg-[#FF9800]"
          title="Assignment"
        />
        <TaskHeader
          icon={BookOpen}
          iconColor="bg-[#3F51B5]"
          title="Study Time"
        />
        <TaskHeader
          icon={FileText}
          iconColor="bg-[#D95854]"
          title="Exams"
        />
        <TaskHeader
          icon={Stethoscope}
          iconColor="bg-[#326FB1]"
          title="Clinical Rotations"
          isOpen={isOpen}
          onToggle={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {/* Dynamic Class Cards */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="my-6">
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
      {/* <AddAssignmentModal
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
      /> */}
    </div>
  );
}
