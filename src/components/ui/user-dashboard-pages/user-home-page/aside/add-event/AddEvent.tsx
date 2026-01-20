"use client";
import { Button } from "antd";
import { Plus } from "lucide-react";
import React, { useMemo, useState } from "react";
import TasksSection from "../todays-event/TasksSection";
import ClassesSection from "../todays-event/ClassesSection";
import AssignmentSection from "../todays-event/AssignmentSection";
import MeetingSection from "../todays-event/MeetingSection";
import dayjs from "dayjs";
import SmallCalendar from "./SmallCalendar";
import { useRouter, useSearchParams } from "next/navigation";
import { QuickAddModal } from "../quick-add/QuickAddModal";
import { AddClassDialog } from "../../../calendar-new/components/events-modal/AddClassDialog";
import { AddExamDialog } from "../../../calendar-new/components/events-modal/AddExamDialog";
import { AddAssignmentModal } from "../../../calendar-new/components/events-modal/AddAssignmentDialog";
import { AddStudyTimeDialog } from "../../../calendar-new/components/events-modal/add-study-time/AddStudyTimeDialog";
import { AddClinicalDialog } from "../../../calendar-new/components/events-modal/AddClinicalDialog";
import { AddMeetingDialog } from "../../../calendar-new/components/events-modal/AddMeetingDialog";
import { AddPersonalTimeDialog } from "../../../calendar-new/components/events-modal/AddPersonalTimeDialog";
import { AddTaskDialog } from "../../../calendar-new/components/events-modal/AddTaskDialog";

export default function AddEvent() {
  const router = useRouter();
  const [selectedDateCalendar, setSelectedDate] = useState(dayjs());
  const searchParams = useSearchParams();
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

  // Mock data for events
  const datesWithEvents = new Map<string, string[]>([
    ["2025-12-16", ["red", "teal", "pink"]],
    ["2025-12-17", ["orange", "green"]],
    ["2025-12-18", ["purple", "indigo", "gray"]],
    ["2025-12-19", ["red", "pink"]],
    ["2025-12-20", ["teal", "purple"]],
    ["2025-12-21", ["purple", "gray"]],
    ["2025-12-22", ["green"]],
    ["2025-12-23", ["pink"]],
    // Let's add some for January 2026 too since today is Jan 16
    ["2026-01-16", ["red", "teal", "pink"]],
    ["2026-01-17", ["orange", "green"]],
    ["2026-01-18", ["purple", "indigo", "gray"]],
    ["2026-01-19", ["red", "pink"]],
    ["2026-01-20", ["teal", "purple"]],
    ["2026-01-21", ["purple", "gray"]],
    ["2026-01-22", ["green"]],
    ["2026-01-23", ["pink"]],
  ]);

  const onPanelChange = (value: any, mode: string) => {
    console.log("[v0] Calendar panel changed:", value, mode);
  };

  const onSelect = (value: any) => {
    console.log("[v0] Calendar date selected:", value);
    setSelectedDate(value);
    router.push(`?date=${value.format("YYYY-MM-DD")}`);
  };

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
    <div className="p-2">
      <div className="min-h-[70vh] flex flex-col gap-4 justify-start items-center ">
        {/* Calendar Section */}
        <div className="pb-4 border-b border-gray-100 w-full">
          <SmallCalendar
            value={selectedDateCalendar}
            datesWithEvents={datesWithEvents}
            onPanelChange={onPanelChange}
            onSelect={onSelect}
          />
        </div>
        <div className="flex justify-center item-center my-2 w-full">
          <Button
            onClick={() => setIsQuickAddOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              height: 38,
              backgroundColor: "#2C5F8D",
              color: "#FFFFFF",
              borderRadius: 10,
              width: "100%",
            }}
            icon={<Plus size={16} className="mt-1.5" />}
          >
            Add New Event
          </Button>
        </div>
        <div className="w-full space-y-4">
          <TasksSection />
          <ClassesSection />
          <AssignmentSection />
          <MeetingSection />
        </div>
      </div>
      <QuickAddModal
        open={isQuickAddOpen}
        onOpenChange={setIsQuickAddOpen}
        onSelectType={handleQuickAddSelect}
      />
      {/* <AddEventsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
      {/* All Event Dialogs */}
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
      {/* <AddCountDownModal
        open={isCountdownDialogOpen}
        onOpenChange={() => {}}
        onAddCountdown={(countdown) => {}}
      /> */}
    </div>
  );
}
