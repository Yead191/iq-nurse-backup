"use client";

import type React from "react";
import { ChevronLeft, Plus } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";
import { QuickAddModal } from "../../user-home-page/aside/quick-add/QuickAddModal";
import { AddClassDialog } from "./events-modal/AddClassDialog";
import { AddExamDialog } from "./events-modal/AddExamDialog";
import { AddClinicalDialog } from "./events-modal/AddClinicalDialog";
import { AddMeetingDialog } from "./events-modal/AddMeetingDialog";
import { AddPersonalTimeDialog } from "./events-modal/AddPersonalTimeDialog";
import { AddTaskDialog } from "./events-modal/AddTaskDialog";
import { AddAssignmentModal } from "./events-modal/AddAssignmentDialog";
import { AddStudyTimeDialog } from "./events-modal/add-study-time/AddStudyTimeDialog";

interface CalendarMobileHeaderProps {
  onMenuClick: () => void;
}

const CalendarMobileHeader: React.FC<CalendarMobileHeaderProps> = ({
  onMenuClick,
}) => {
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

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const formatPathName = (slug: string | undefined) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const pathSegments = pathname?.split("/").filter(Boolean) || [];
  const lastSegment =
    pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : undefined;

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
    <div className="lg:hidden  py-4 flex items-center justify-between fixed w-full   bg-white z-50 px-4 top-0 ">
      <div className="flex items-center gap-4">
        <Link
          href={
            pathname === "/profile/calendar"
              ? "/profile/home"
              : "/profile/calendar"
          }
          className="mt-1.5"
        >
          <button className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border">
            <ChevronLeft size={24} />
          </button>
        </Link>
        <h1 className="text-sm lg:text-lg lg:font-semibold bg-[#F6F7F8]  border border-[#2C5F8D] px-6 py-1 rounded-lg">
          {mode ? (
            <span className="capitalize">Calendar {mode}</span>
          ) : (
            formatPathName(lastSegment)
          )}
        </h1>
      </div>

      <button
        onClick={() => setIsQuickAddOpen(true)}
        className="flex items-center gap-2  px-2 py-1.5 rounded-lg text-xs font-normal  transition-colors border border-[#2C5F8D] "
      >
        <Plus size={16} />
        New Event
      </button>
      <QuickAddModal
        open={isQuickAddOpen}
        onOpenChange={setIsQuickAddOpen}
        onSelectType={handleQuickAddSelect}
      />
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

export default CalendarMobileHeader;
