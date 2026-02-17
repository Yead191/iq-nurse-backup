"use client";
import React, { useMemo, useState } from "react";
import { Button, Popover } from "antd";
import { Calendar as CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import SmallCalendar from "../../user-home-page/aside/add-event/SmallCalendar";
import { DayView, MonthView, WeekView } from "./CalendarViews";
import { useRouter, useSearchParams } from "next/navigation";
import { Assignment } from "./events-modal/AddAssignmentDialog";
import { ScheduledClass, ScheduledExam } from "./ClassCalendar";
import { PersonalTime } from "./events-modal/AddPersonalTimeDialog";
import { Task } from "./events-modal/AddTaskDialog";
import { StudyTime } from "./events-modal/add-study-time/AddStudyTimeDialog";
import { Clinical } from "./events-modal/AddClinicalDialog";
import { Meeting } from "./events-modal/AddMeetingDialog";
import {
  assignmentsData,
  classesData,
  clinicalsData,
  countdownsData,
  examsData,
  meetingsData,
  personalTimeData,
  studyTimesData,
  tasksData,
} from "@/data/calendar/eventData";

type EventDetail =
  | { type: "class"; data: ScheduledClass }
  | { type: "exam"; data: ScheduledExam }
  | { type: "assignment"; data: Assignment }
  | { type: "study"; data: StudyTime }
  | { type: "clinical"; data: Clinical }
  | { type: "meeting"; data: Meeting }
  | { type: "personal"; data: PersonalTime }
  | { type: "task"; data: Task }
  | null;

export default function CalendarTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"day" | "week" | "month">("day");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [viewDate, setViewDate] = useState(dayjs());
  const [eventDetail, setEventDetail] = useState<EventDetail>(null);
  const handleTabChange = (tab: "day" | "week" | "month") => {
    setActiveTab(tab);
  };
  const tabs: { label: string; value: "day" | "week" | "month" }[] = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  //   date
  const dateParam = searchParams.get("date");
  const selectedDate = useMemo(() => {
    if (!dateParam) return new Date();

    const parsed = new Date(dateParam);
    return isNaN(parsed.getTime()) ? new Date() : parsed;
  }, [dateParam]);

  // Toggle task completion
  const toggleTaskStatus = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "pending" ? "completed" : "pending",
            }
          : task,
      ),
    );
  };

  // demo data
  const [classes, setClasses] = useState<ScheduledClass[]>(classesData);
  const [exams, setExams] = useState(examsData);
  const [assignments, setAssignments] = useState<any[]>(assignmentsData);
  const [studyTimes, setStudyTimes] = useState<any[]>(studyTimesData);
  const [clinicals, setClinicals] = useState<any[]>(clinicalsData);
  const [meetings, setMeetings] = useState<any[]>(meetingsData);
  const [personalTimes, setPersonalTimes] = useState<any[]>(personalTimeData);
  const [tasks, setTasks] = useState<any[]>(tasksData);
  const [countdowns, setCountdowns] = useState<any[]>(countdownsData);

  return (
    <section>
      <div className="flex items-center justify-between gap-4 max-w-4xl">
        <div className="flex items-center bg-neutral-100 rounded-full py-[6px]  px-[14px] flex-1 max-w-md">
          {tabs?.map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value)}
              className={`flex-1 text-xs 2xl:text-sm px-2 py-1  lg:px-3 lg:py-2 rounded-full transition text-nowrap ${
                activeTab === tab.value
                  ? "bg-white  text-[#2C5F8D] font-medium"
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <Popover
            content={
              <div className="w-[280px]">
                <SmallCalendar
                  value={viewDate}
                  activeDate={dayjs(selectedDate)}
                  onSelect={(date, info) => {
                    setViewDate(date);
                    if (info.source === "date") {
                      router.push(`?date=${date.format("YYYY-MM-DD")}`);
                      setIsCalendarOpen(false);
                    }
                  }}
                />
              </div>
            }
            trigger="click"
            open={isCalendarOpen}
            onOpenChange={setIsCalendarOpen}
            placement="bottomRight"
          >
            <Button
              icon={<CalendarIcon size={18} />}
              className="!flex !items-center !justify-center !rounded-full !w-10 !h-10 !bg-neutral-100 !border-none"
            />
          </Popover>
        </div>
      </div>
      {/* tab content */}
      <div className="mt-4 lg:max-h-[calc(100vh-170px)] overflow-y-auto">
        {activeTab === "day" && (
          <DayView
            selectedDate={selectedDate}
            classes={classes}
            exams={exams}
            assignments={assignments}
            studyTimes={studyTimes}
            clinicals={clinicals}
            meetings={meetings}
            personalTimes={personalTimes}
            tasks={tasks}
            onDeleteClass={(id) =>
              setClasses(classes.filter((c) => c.id !== id))
            }
            onDeleteExam={(id) => setExams(exams.filter((e) => e.id !== id))}
            onDeleteAssignment={(id) =>
              setAssignments(assignments.filter((a) => a.id !== id))
            }
            onDeleteStudyTime={(id) =>
              setStudyTimes(studyTimes.filter((s) => s.id !== id))
            }
            onDeleteClinical={(id) =>
              setClinicals(clinicals.filter((c) => c.id !== id))
            }
            onDeleteMeeting={(id) =>
              setMeetings(meetings.filter((m) => m.id !== id))
            }
            onDeletePersonalTime={(id) =>
              setPersonalTimes(personalTimes.filter((p) => p.id !== id))
            }
            onDeleteTask={(id) => setTasks(tasks.filter((t) => t.id !== id))}
            onToggleTaskStatus={toggleTaskStatus}
            onEventClick={(event) => setEventDetail(event)}
          />
        )}
        {activeTab === "week" && (
          <WeekView
            selectedDate={selectedDate}
            classes={classes}
            exams={exams}
            assignments={assignments}
            studyTimes={studyTimes}
            clinicals={clinicals}
            meetings={meetings}
            personalTimes={personalTimes}
            tasks={tasks}
            onDeleteClass={(id) =>
              setClasses(classes.filter((c) => c.id !== id))
            }
            onDeleteExam={(id) => setExams(exams.filter((e) => e.id !== id))}
            onDeleteAssignment={(id) =>
              setAssignments(assignments.filter((a) => a.id !== id))
            }
            onDeleteStudyTime={(id) =>
              setStudyTimes(studyTimes.filter((s) => s.id !== id))
            }
            onDeleteClinical={(id) =>
              setClinicals(clinicals.filter((c) => c.id !== id))
            }
            onDeleteMeeting={(id) =>
              setMeetings(meetings.filter((m) => m.id !== id))
            }
            onDeletePersonalTime={(id) =>
              setPersonalTimes(personalTimes.filter((p) => p.id !== id))
            }
            onDeleteTask={(id) => setTasks(tasks.filter((t) => t.id !== id))}
            onToggleTaskStatus={toggleTaskStatus}
            onEventClick={(event) => setEventDetail(event)}
          />
        )}
        {activeTab === "month" && (
          <MonthView
            selectedDate={selectedDate}
            classes={classes}
            exams={exams}
            assignments={assignments}
            studyTimes={studyTimes}
            clinicals={clinicals}
            meetings={meetings}
            personalTimes={personalTimes}
            tasks={tasks}
            onDeleteClass={(id) =>
              setClasses(classes.filter((c) => c.id !== id))
            }
            onDeleteExam={(id) => setExams(exams.filter((e) => e.id !== id))}
            onDeleteAssignment={(id) =>
              setAssignments(assignments.filter((a) => a.id !== id))
            }
            onDeleteStudyTime={(id) =>
              setStudyTimes(studyTimes.filter((s) => s.id !== id))
            }
            onDeleteClinical={(id) =>
              setClinicals(clinicals.filter((c) => c.id !== id))
            }
            onDeleteMeeting={(id) =>
              setMeetings(meetings.filter((m) => m.id !== id))
            }
            onDeletePersonalTime={(id) =>
              setPersonalTimes(personalTimes.filter((p) => p.id !== id))
            }
            onDeleteTask={(id) => setTasks(tasks.filter((t) => t.id !== id))}
            onToggleTaskStatus={toggleTaskStatus}
            onEventClick={(event) => setEventDetail(event)}
          />
        )}
      </div>
    </section>
  );
}
