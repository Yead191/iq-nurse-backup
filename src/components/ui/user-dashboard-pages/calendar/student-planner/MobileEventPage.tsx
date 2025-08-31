"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { message } from "antd";

import { eventTypes } from "@/data/eventTypes";
import AddTaskModal from "@/components/shared/event-modals/AddTaskModal";
import AddClassesModal from "@/components/shared/event-modals/AddClassesModal";
import AddAssignmentModal from "@/components/shared/event-modals/AddAssignmentModal";
import AddStudyTimeModal from "@/components/shared/event-modals/AddStudyTimeModal";
import AddExamModal from "@/components/shared/event-modals/AddExamModal";
import AddMeTimeModal from "@/components/shared/event-modals/AddMeTimeModal";
import AddMeetingModal from "@/components/shared/event-modals/AddMeetingModal";
import MobileEventCard from "@/components/shared/event-modals/MobileEventCard";
import AddCountDownModal from "@/components/shared/event-modals/AddCountdownModal";

const MobileEventPage = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").pop();

  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [classesModalOpen, setClassesModalOpen] = useState(false);
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [studyTimeModalOpen, setStudyTimeModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [meTimeModalOpen, setMeTimeModalOpen] = useState(false);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [countDownModalOpen, setCountDownModalOpen] = useState(false);

  // find correct event based on pathname
  const filteredEvent = eventTypes.find(
    (event) => event.key.toLowerCase() === lastSegment?.toLowerCase()
  );

  const handleEventAdd = (eventType: string) => {
    switch (eventType) {
      case "Add a Tasks":
        setTaskModalOpen(true);
        break;
      case "Add Classes":
        setClassesModalOpen(true);
        break;
      case "Add Assignment":
        setAssignmentModalOpen(true);
        break;
      case "Add Study Time":
        setStudyTimeModalOpen(true);
        break;
      case "Add Exams":
        setExamModalOpen(true);
        break;
      case "Add Me Time":
        setMeTimeModalOpen(true);
        break;
      case "Add Meetings":
        setMeetingModalOpen(true);
        break;
      case "Add Count Down":
        setCountDownModalOpen(true);
        break;
      default:
        message.warning("No modal found for this event");
        break;
    }
  };

  return (
    <div className="flex justify-center ">
      {filteredEvent ? (
        <MobileEventCard
          event={filteredEvent}
          onAdd={() => handleEventAdd(filteredEvent.title)}
        />
      ) : (
        <p className="text-center text-gray-500">
          No event found for this path
        </p>
      )}

      {/* 🔹 Event Modals */}
      <AddTaskModal
        open={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
      />
      <AddClassesModal
        open={classesModalOpen}
        onClose={() => setClassesModalOpen(false)}
      />
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
      <AddMeTimeModal
        open={meTimeModalOpen}
        onClose={() => setMeTimeModalOpen(false)}
      />
      <AddMeetingModal
        open={meetingModalOpen}
        onClose={() => setMeetingModalOpen(false)}
      />
      <AddCountDownModal
        open={countDownModalOpen}
        onClose={() => setCountDownModalOpen(false)}
      />
    </div>
  );
};

export default MobileEventPage;
