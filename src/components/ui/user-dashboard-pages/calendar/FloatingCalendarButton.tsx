"use client";

import type React from "react";

import { useState } from "react";
import {
  Calendar,
  ListTodo,
  Stethoscope,
  BookOpen,
  FileText,
  Users,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import AddTaskModal from "@/components/shared/event-modals/AddTaskModal";
import AddClassesModal from "@/components/shared/event-modals/AddClassesModal";
import AddAssignmentModal from "@/components/shared/event-modals/AddAssignmentModal";
import AddStudyTimeModal from "@/components/shared/event-modals/AddStudyTimeModal";
import AddExamModal from "@/components/shared/event-modals/AddExamModal";
import AddMeTimeModal from "@/components/shared/event-modals/AddMeTimeModal";
import AddMeetingModal from "@/components/shared/event-modals/AddMeetingModal";
import { useRouter } from "next/navigation";

interface EventType {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const eventTypes: EventType[] = [
  {
    id: "tasks",
    label: "Tasks",
    icon: <ListTodo className="h-4 w-4" />,
    color: "bg-[#F0AF53]",
  },
  {
    id: "clinical-rotations",
    label: "Clinical Rotations",
    icon: <Stethoscope className="h-4 w-4" />,
    color: "bg-[#326FB1]",
  },
  {
    id: "classes",
    label: "Class",
    icon: <BookOpen className="h-4 w-4" />,
    color: "bg-[#60B960]",
  },
  {
    id: "exams",
    label: "Exam",
    icon: <FileText className="h-4 w-4" />,
    color: "bg-[#D95854]",
  },
  {
    id: "meetings",
    label: "Meeting",
    icon: <Users className="h-4 w-4" />,
    color: "bg-[#9E2DB2]",
  },
  {
    id: "assignment",
    label: "Assignment",
    icon: <FileText className="h-4 w-4" />,
    color: "bg-[#FF9800]",
  },
  {
    id: "study-time",
    label: "Study Time",
    icon: <BookOpen className="h-4 w-4" />,
    color: "bg-[#3F51B5]",
  },
  {
    id: "personal-time",
    label: "Personal Time",
    icon: <Users className="h-4 w-4" />,
    color: "bg-[#4CAF50]",
  },
  {
    id: "countdown",
    label: "Countdown",
    icon: <Clock className="h-4 w-4" />,
    color: "bg-[#E91E63]",
  },
];

export function FloatingCalendarButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [classesModalOpen, setClassesModalOpen] = useState(false);
  const [assignmentModalOpen, setAssignmentModalOpen] = useState(false);
  const [studyTimeModalOpen, setStudyTimeModalOpen] = useState(false);
  const [examModalOpen, setExamModalOpen] = useState(false);
  const [meTimeModalOpen, setMeTimeModalOpen] = useState(false);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const router = useRouter();
  const handleEventClick = (eventId: string) => {
    console.log("[v0] Event clicked:", eventId);
    try {
      // You can add your specific logic here for each event type
      router.push(`/profile/calendar/${eventId}`);
      router;
    } catch (error) {
      toast.error(`Failed to add ${eventId}`);
    }
  };

  return (
    <div className="fixed md:hidden bottom-28 right-8 flex flex-col items-end gap-3">
      {/* Event type buttons */}
      <div
        className={`flex flex-col  gap-2 transition-all duration-300 ease-out
         ${
           isExpanded
             ? "opacity-100 translate-y-0 pointer-events-auto"
             : "opacity-0 hidden translate-y-4 pointer-events-none"
         }
        `}
      >
        {eventTypes?.map((event, index) => (
          <button
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className={`group bg-white h-[40px] flex items-center gap-4 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 pr-6 pl-6 py-4 min-w-[200px] animate-in fade-in  z-50 slide-in-from-bottom-2`}
            style={{
              animationDelay: isExpanded ? `${index * 50}ms` : "0ms",
              animationFillMode: "backwards",
            }}
          >
            <span className="text-card-foreground font-medium text-sm flex-1 text-left">
              {event.label}
            </span>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform group-hover:scale-110 ${event.color}`}
            >
              {event.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Main FAB button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary/90 text-primary-foreground hover:scale-110 active:scale-95 `}
        aria-label="Toggle calendar menu"
        aria-expanded={isExpanded}
      >
        <Calendar
          className={`h-6 w-6 transition-transform duration-300 text-white ${
            isExpanded && "rotate-180"
          }`}
        />
      </button>

      {/* modals */}
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
    </div>
  );
}
