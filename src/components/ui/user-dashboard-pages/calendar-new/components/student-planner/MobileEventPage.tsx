"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { message } from "antd";

import { eventTypes } from "@/data/eventTypes";

import MobileEventCard from "@/components/shared/event-modals/MobileEventCard";
import { AddClassDialog } from "../events-modal/AddClassDialog";
import { AddExamDialog } from "../events-modal/AddExamDialog";
import { AddAssignmentModal } from "../events-modal/AddAssignmentDialog";
import { AddStudyTimeDialog } from "../events-modal/add-study-time/AddStudyTimeDialog";
import { AddClinicalDialog } from "../events-modal/AddClinicalDialog";
import { AddMeetingDialog } from "../events-modal/AddMeetingDialog";
import { AddPersonalTimeDialog } from "../events-modal/AddPersonalTimeDialog";
import { AddTaskDialog } from "../events-modal/AddTaskDialog";

const MobileEventPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastSegment = pathname.split("/").pop();

  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
  const [isExamDialogOpen, setIsExamDialogOpen] = useState(false);
  const [isAssignmentDialogOpen, setIsAssignmentDialogOpen] = useState(false);
  const [isStudyTimeDialogOpen, setIsStudyTimeDialogOpen] = useState(false);
  const [isClinicalDialogOpen, setIsClinicalDialogOpen] = useState(false);
  const [isMeetingDialogOpen, setIsMeetingDialogOpen] = useState(false);
  const [isPersonalTimeDialogOpen, setIsPersonalTimeDialogOpen] =
    useState(false);
  const [isTaskDialogOpen, setIsTaskDialogOpen] = useState(false);
  const [isCountdownDialogOpen, setIsCountdownDialogOpen] = useState(false);

  // find correct event based on pathname
  const filteredEvent = eventTypes.find(
    (event) => event.key.toLowerCase() === lastSegment?.toLowerCase(),
  );

  const handleQuickAddSelect = (type: string) => {
    setIsQuickAddOpen(false);
    switch (type) {
      case "class":
        setIsClassDialogOpen(true);
        break;
      case "exam":
        setIsExamDialogOpen(true);
        break;
      case "assignment":
        setIsAssignmentDialogOpen(true);
        break;
      case "study-time":
        setIsStudyTimeDialogOpen(true);
        break;
      case "clinical":
        setIsClinicalDialogOpen(true);
        break;
      case "meeting":
        setIsMeetingDialogOpen(true);
        break;
      case "personal":
        setIsPersonalTimeDialogOpen(true);
        break;
      case "task":
        setIsTaskDialogOpen(true);
        break;
      case "countdown":
        setIsCountdownDialogOpen(true);
        break;
    }
  };

  //   date
  const dateParam = searchParams.get("date");
  const selectedDate = useMemo(() => {
    if (!dateParam) return new Date();

    const parsed = new Date(dateParam);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
  }, [dateParam]);
  return (
    <div className="flex justify-center ">
      {filteredEvent ? (
        <MobileEventCard
          event={filteredEvent}
          onAdd={() => handleQuickAddSelect(filteredEvent.key)}
        />
      ) : (
        <p className="text-center text-gray-500">
          No event found for this path
        </p>
      )}

      {/* 🔹 Event Modals */}
      <AddClassDialog
        open={isClassDialogOpen}
        onOpenChange={setIsClassDialogOpen}
        onAddClass={(cls) => console.log(cls)}
        selectedDate={selectedDate}
      />
      <AddExamDialog
        open={isExamDialogOpen}
        onOpenChange={setIsExamDialogOpen}
        onAddExam={(exam) => console.log(exam)}
        selectedDate={selectedDate}
      />
      <AddAssignmentModal
        open={isAssignmentDialogOpen}
        onOpenChange={setIsAssignmentDialogOpen}
        onAddAssignment={(assignment) => console.log(assignment)}
        selectedDate={selectedDate}
      />
      <AddStudyTimeDialog
        open={isStudyTimeDialogOpen}
        onOpenChange={setIsStudyTimeDialogOpen}
        onAddStudyTime={() => {}}
        selectedDate={selectedDate}
      />
      <AddClinicalDialog
        open={isClinicalDialogOpen}
        onOpenChange={setIsClinicalDialogOpen}
        onAddClinical={(clinical) => {}}
        selectedDate={selectedDate}
      />
      <AddMeetingDialog
        open={isMeetingDialogOpen}
        onOpenChange={setIsMeetingDialogOpen}
        onAddMeeting={(meeting) => {}}
        selectedDate={selectedDate}
      />
      <AddPersonalTimeDialog
        open={isPersonalTimeDialogOpen}
        onOpenChange={setIsPersonalTimeDialogOpen}
        onAddPersonalTime={(personal) => {}}
        selectedDate={selectedDate}
      />
      <AddTaskDialog
        open={isTaskDialogOpen}
        onOpenChange={setIsTaskDialogOpen}
        onAddTask={(task) => {}}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default MobileEventPage;
