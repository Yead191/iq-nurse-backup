import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  Clock,
  Stethoscope,
  Users,
  Heart,
  CheckSquare,
  X,
  FileText,
} from "lucide-react";

import { Badge, Button, Card } from "antd";
import { ScheduledClass, ScheduledExam } from "./ClassCalendar";
import { Assignment } from "./events-modal/AddAssignmentDialog";
import { StudyTime } from "./events-modal/add-study-time/AddStudyTimeDialog";
import { Clinical } from "./events-modal/AddClinicalDialog";
import { Meeting } from "./events-modal/AddMeetingDialog";
import { PersonalTime } from "./events-modal/AddPersonalTimeDialog";
import { Task } from "./events-modal/AddTaskDialog";

interface CalendarViewProps {
  selectedDate: Date;
  classes: ScheduledClass[];
  exams: ScheduledExam[];
  assignments: Assignment[];
  studyTimes: StudyTime[];
  clinicals: Clinical[];
  meetings: Meeting[];
  personalTimes: PersonalTime[];
  tasks: Task[];
  onDeleteClass: (id: string) => void;
  onDeleteExam: (id: string) => void;
  onDeleteAssignment: (id: string) => void;
  onDeleteStudyTime: (id: string) => void;
  onDeleteClinical: (id: string) => void;
  onDeleteMeeting: (id: string) => void;
  onDeletePersonalTime: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onToggleTaskStatus: (id: string) => void;
  onEventClick: (event: any) => void;
}

const timeSlots = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];

function getEventForTimeSlot(
  time: string,
  date: Date,
  classes: ScheduledClass[],
  exams: ScheduledExam[],
  studyTimes: StudyTime[],
  clinicals: Clinical[],
  meetings: Meeting[],
) {
  const events: any[] = [];

  classes.forEach((cls) => {
    if (isSameDay(cls.date, date)) {
      const startHour = parseInt(cls.startTime.split(":")[0]);
      const slotHour = parseInt(time.split(":")[0]);
      if (
        startHour === slotHour ||
        (slotHour > startHour && slotHour < parseInt(cls.endTime.split(":")[0]))
      ) {
        events.push({ ...cls, type: "class" });
      }
    }
  });

  exams.forEach((exam) => {
    if (isSameDay(exam.date, date)) {
      const startHour = parseInt(exam.startTime.split(":")[0]);
      const slotHour = parseInt(time.split(":")[0]);
      if (
        startHour === slotHour ||
        (slotHour > startHour &&
          slotHour < parseInt(exam.endTime.split(":")[0]))
      ) {
        events.push({ ...exam, type: "exam" });
      }
    }
  });

  studyTimes.forEach((study) => {
    if (isSameDay(study.date, date)) {
      const startHour = parseInt(study.startTime.split(":")[0]);
      const slotHour = parseInt(time.split(":")[0]);
      if (
        startHour === slotHour ||
        (slotHour > startHour &&
          slotHour < parseInt(study.endTime.split(":")[0]))
      ) {
        events.push({ ...study, type: "study" });
      }
    }
  });

  clinicals.forEach((clinical) => {
    if (isSameDay(clinical.date, date)) {
      const startHour = parseInt(clinical.startTime.split(":")[0]);
      const slotHour = parseInt(time.split(":")[0]);
      if (
        startHour === slotHour ||
        (slotHour > startHour &&
          slotHour < parseInt(clinical.endTime.split(":")[0]))
      ) {
        events.push({ ...clinical, type: "clinical" });
      }
    }
  });

  meetings.forEach((meeting) => {
    if (isSameDay(meeting.date, date)) {
      const startHour = parseInt(meeting.startTime.split(":")[0]);
      const slotHour = parseInt(time.split(":")[0]);
      if (
        startHour === slotHour ||
        (slotHour > startHour &&
          slotHour < parseInt(meeting.endTime.split(":")[0]))
      ) {
        events.push({ ...meeting, type: "meeting" });
      }
    }
  });

  return events;
}

function EventBadge({ event, onDelete }: { event: any; onDelete: () => void }) {
  const configs: Record<
    string,
    { color: string; icon: any; label: string; bg: string }
  > = {
    class: {
      color: event.color || "bg-[#2C5F8D]",
      icon: BookOpen,
      label: "Class",
      bg: "bg-blue-100",
    },
    exam: {
      color: "bg-[#FE5E7E]",
      icon: GraduationCap,
      label: "Exam",
      bg: "bg-pink-100",
    },
    study: {
      color: "bg-teal-500",
      icon: Clock,
      label: "Study",
      bg: "bg-teal-100",
    },
    clinical: {
      color: "bg-emerald-600",
      icon: Stethoscope,
      label: "Clinical",
      bg: "bg-emerald-100",
    },
    meeting: {
      color: "bg-[#4A7DAF]",
      icon: Users,
      label: "Meeting",
      bg: "bg-blue-100",
    },
  };

  const config = configs[event.type] || configs.class;
  const Icon = config.icon;

  return (
    <div
      className={`${config.bg} border-l-4 ${config.color.replace("bg-", "border-l-")} p-2 rounded mb-1 group relative`}
    >
      <div className="flex items-center gap-2">
        <Icon className="w-3 h-3" />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium truncate">{event.title}</p>
          <p className="text-xs text-gray-600">
            {event.startTime} - {event.endTime}
          </p>
        </div>
        <Button
          type="default"
          size="small"
          onClick={onDelete}
          className="lg:opacity-0 lg:group-hover:opacity-100 "
        >
          <X size={20} color="red" className="w-3.5 " />
        </Button>
      </div>
    </div>
  );
}

export function DayView(props: CalendarViewProps) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">
        {format(props.selectedDate, "EEEE, MMMM d, yyyy")}
      </h3>
      <div className="border rounded-lg overflow-hidden border-gray-300">
        {timeSlots.map((time) => {
          const events = getEventForTimeSlot(
            time,
            props.selectedDate,
            props.classes,
            props.exams,
            props.studyTimes,
            props.clinicals,
            props.meetings,
          );

          return (
            <div
              key={time}
              className="flex border-b last:border-b-0 min-h-[60px] border-gray-300"
            >
              <div className="w-20 lg:w-24 flex-shrink-0 p-3 border-r border-gray-300 bg-gray-50 text-xs lg:text-sm font-medium text-gray-600">
                {time}
              </div>
              <div className="flex-1 p-2">
                {events.map((event, idx) => (
                  <EventBadge
                    key={`${event.id}-${idx}`}
                    event={event}
                    onDelete={() => {
                      if (event.type === "class") props.onDeleteClass(event.id);
                      else if (event.type === "exam")
                        props.onDeleteExam(event.id);
                      else if (event.type === "study")
                        props.onDeleteStudyTime(event.id);
                      else if (event.type === "clinical")
                        props.onDeleteClinical(event.id);
                      else if (event.type === "meeting")
                        props.onDeleteMeeting(event.id);
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* All-day events */}
      <div className="mt-4 space-y-2">
        {props.assignments.filter((a) =>
          isSameDay(a.dueDate, props.selectedDate),
        ).length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Assignments Due</h4>
            {props.assignments
              .filter((a) => isSameDay(a.dueDate, props.selectedDate))
              .map((assignment) => (
                <Card key={assignment.id} className="mb-2">
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ClipboardList className="w-4 h-4 text-purple-500" />
                      <div>
                        <p className="font-medium text-sm">
                          {assignment.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {assignment.course}
                        </p>
                      </div>
                      <Badge
                        color={
                          assignment.priority === "high" ? "red" : "secondary"
                        }
                      >
                        {assignment.priority}
                      </Badge>
                    </div>
                    <Button
                      type="default"
                      size="small"
                      onClick={() => props.onDeleteAssignment(assignment.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        )}

        {props.tasks.filter(
          (t) => t.dueDate && isSameDay(t.dueDate, props.selectedDate),
        ).length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Tasks</h4>
            {props.tasks
              .filter(
                (t) => t.dueDate && isSameDay(t.dueDate, props.selectedDate),
              )
              .map((task) => (
                <Card key={task.id} className="mb-2">
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-6 h-6 rounded-full ${task.status === "completed" ? "bg-green-500" : "bg-gray-400"} flex items-center justify-center cursor-pointer`}
                        onClick={() => props.onToggleTaskStatus(task.id)}
                      >
                        <CheckSquare className="w-4 h-4 text-white" />
                      </div>
                      <p
                        className={`font-medium text-sm ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                      >
                        {task.title}
                      </p>
                    </div>
                    <Button
                      type="default"
                      size="small"
                      onClick={() => props.onDeleteTask(task.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function WeekView(props: CalendarViewProps) {
  const weekStart = startOfWeek(props.selectedDate, { weekStartsOn: 0 });
  const weekEnd = endOfWeek(props.selectedDate, { weekStartsOn: 0 });
  const weekDays = eachDayOfInterval({ start: weekStart, end: weekEnd });

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg mb-4">
        Week of {format(weekStart, "MMM d")} - {format(weekEnd, "MMM d, yyyy")}
      </h3>
      <div className="border rounded-lg overflow-x-auto border-gray-300">
        <div className="min-w-[900px]">
          {/* Header */}
          <div className="flex border-b bg-gray-50 border-gray-300">
            <div className="w-20 flex-shrink-0 p-2 border-r border-gray-300"></div>
            {weekDays?.map((day) => (
              <div
                key={day.toISOString()}
                className={`flex-1 p-2 text-center border-r last:border-r-0 border-gray-300 ${
                  isSameDay(day, new Date()) ? "bg-green-100 font-semibold" : ""
                }`}
              >
                <div className="text-xs lg:text-sm font-medium">
                  {format(day, "EEE")}
                </div>
                <div
                  className={`text-sm lg:text-lg ${isSameDay(day, new Date()) ? "text-green-600" : ""}`}
                >
                  {format(day, "d")}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots */}
          {timeSlots.map((time) => (
            <div
              key={time}
              className="flex border-b last:border-b-0 min-h-[50px] border-gray-300"
            >
              <div className="w-20 flex-shrink-0 p-2 border-r border-gray-300 bg-gray-50 text-xs font-medium text-gray-600">
                {time}
              </div>
              {weekDays.map((day) => {
                const events = getEventForTimeSlot(
                  time,
                  day,
                  props.classes,
                  props.exams,
                  props.studyTimes,
                  props.clinicals,
                  props.meetings,
                );

                return (
                  <div
                    key={day.toISOString()}
                    className="flex-1 p-1 border-r border-gray-300 last:border-r-0"
                  >
                    {events.map((event, idx) => (
                      <EventBadge
                        key={`${event.id}-${idx}`}
                        event={event}
                        onDelete={() => {
                          if (event.type === "class")
                            props.onDeleteClass(event.id);
                          else if (event.type === "exam")
                            props.onDeleteExam(event.id);
                          else if (event.type === "study")
                            props.onDeleteStudyTime(event.id);
                          else if (event.type === "clinical")
                            props.onDeleteClinical(event.id);
                          else if (event.type === "meeting")
                            props.onDeleteMeeting(event.id);
                        }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MonthView(props: CalendarViewProps) {
  // Get items for selected date
  const classesOnDate = props.classes.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const examsOnDate = props.exams.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const assignmentsOnDate = props.assignments.filter((item) =>
    isSameDay(item.dueDate, props.selectedDate),
  );
  const studyTimesOnDate = props.studyTimes.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const clinicalsOnDate = props.clinicals.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const meetingsOnDate = props.meetings.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const personalTimesOnDate = props.personalTimes.filter((item) =>
    isSameDay(item.date, props.selectedDate),
  );
  const tasksOnDate = props.tasks.filter(
    (item) => item.dueDate && isSameDay(item.dueDate, props.selectedDate),
  );

  const totalItemsOnDate =
    classesOnDate.length +
    examsOnDate.length +
    assignmentsOnDate.length +
    studyTimesOnDate.length +
    clinicalsOnDate.length +
    meetingsOnDate.length +
    personalTimesOnDate.length +
    tasksOnDate.length;

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">
          {format(props.selectedDate, "EEEE, MMMM d, yyyy")}
        </h2>
        <p className="text-gray-600">
          {totalItemsOnDate} {totalItemsOnDate === 1 ? "item" : "items"}{" "}
          scheduled
        </p>
      </div>

      {totalItemsOnDate === 0 ? (
        <Card>
          <div className="py-12 text-center text-gray-500">
            <p>No events scheduled for this day</p>
          </div>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Classes */}
          {classesOnDate?.map((cls) => (
            <div
              key={cls.id}
              className="border-l-4 cursor-pointer hover:shadow-md transition-shadow rounded-lg border border-gray-200"
              style={{ borderLeftColor: cls.color.replace("bg-", "") }}
              onClick={() => props.onEventClick({ type: "class", data: cls })}
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full ${cls.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{cls.title}</h3>
                        <Badge className="!bg-gray-200 !text-gray-800 !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Class
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{cls.subject}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {cls.startTime} - {cls.endTime}
                        {cls.location && ` • ${cls.location}`}
                      </p>
                      {cls.studyMaterials.length > 0 && (
                        <div className="flex items-center gap-2 mt-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-xs text-gray-600">
                            {cls.studyMaterials.length} study{" "}
                            {cls.studyMaterials.length === 1
                              ? "material"
                              : "materials"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteClass(cls.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Exams */}
          {examsOnDate.map((exam) => (
            <div
              key={exam.id}
              className="border-l-4 cursor-pointer hover:shadow-md transition-shadow rounded-lg border border-gray-200  "
              onClick={() => props.onEventClick({ type: "exam", data: exam })}
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{exam.title}</h3>
                        <Badge className="!bg-gray-200 !text-gray-800 !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Exam
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{exam.subject}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {exam.startTime} - {exam.endTime}
                        {exam.location && ` • ${exam.location}`}
                      </p>
                      {exam.weight && (
                        <p className="text-sm text-red-700 mt-1 font-medium">
                          {exam.weight}
                        </p>
                      )}
                      {exam.studyMaterials &&
                        exam.studyMaterials.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            <FileText className="w-4 h-4 text-red-600" />
                            <span className="text-xs text-gray-700">
                              {exam.studyMaterials.length} study{" "}
                              {exam.studyMaterials.length === 1
                                ? "material"
                                : "materials"}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteExam(exam.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Assignments */}
          {assignmentsOnDate.map((assignment) => (
            <div
              key={assignment.id}
              className="border-l-4 border-l-purple-500 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() =>
                props.onEventClick({ type: "assignment", data: assignment })
              }
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        <Badge className="!bg-gray-200 !text-gray-800 !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Assignment
                        </Badge>
                        <Badge
                          className={`
                            !p-1 !text-xs rounded-md !px-2 !font-medium
                            ${
                              assignment.priority === "high"
                                ? "!bg-red-200 !text-red-800"
                                : assignment.priority === "medium"
                                  ? "!bg-yellow-200 !text-yellow-800"
                                  : "!bg-blue-200 !text-blue-800"
                            }`}
                        >
                          {assignment.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {assignment.course}
                      </p>
                      {assignment.studyMaterials &&
                        assignment.studyMaterials.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            <FileText className="w-4 h-4 text-purple-500" />
                            <span className="text-xs text-gray-600">
                              {assignment.studyMaterials.length} study{" "}
                              {assignment.studyMaterials.length === 1
                                ? "material"
                                : "materials"}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteAssignment(assignment.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Study Time */}
          {studyTimesOnDate.map((study) => (
            <div
              key={study.id}
              className="border-l-4 border-l-teal-500 cursor-pointer hover:shadow-md transition-shadow border border-gray-200 rounded-lg "
              onClick={() => props.onEventClick({ type: "study", data: study })}
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{study.title}</h3>
                        <Badge className="!bg-gray-200 !text-gray-800 !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Study Time
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{study.subject}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {study.startTime} - {study.endTime}
                      </p>
                      {study.studyMaterials &&
                        study.studyMaterials.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            <FileText className="w-4 h-4 text-teal-500" />
                            <span className="text-xs text-gray-600">
                              {study.studyMaterials.length} study{" "}
                              {study.studyMaterials.length === 1
                                ? "material"
                                : "materials"}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteStudyTime(study.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Clinicals */}
          {clinicalsOnDate?.map((clinical) => (
            <div
              key={clinical.id}
              className="border-l-4 border-l-teal-500 cursor-pointer hover:shadow-md transition-shadow border border-gray-200 rounded-lg "
              onClick={() =>
                props.onEventClick({ type: "clinical", data: clinical })
              }
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{clinical.title}</h3>
                        <Badge className="!bg-green-600 !text-white !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Clinical
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {clinical.facility}
                        {clinical.unit && ` - ${clinical.unit}`}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {clinical.startTime} - {clinical.endTime}
                      </p>
                      {clinical.studyMaterials &&
                        clinical.studyMaterials.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                            <FileText className="w-4 h-4 text-green-600" />
                            <span className="text-xs text-gray-700">
                              {clinical.studyMaterials.length} study{" "}
                              {clinical.studyMaterials.length === 1
                                ? "material"
                                : "materials"}
                            </span>
                          </div>
                        )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteClinical(clinical.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Meetings */}
          {meetingsOnDate?.map((meeting) => (
            <div
              key={meeting.id}
              className="border-l-4 border-l-indigo-500 cursor-pointer hover:shadow-md transition-shadow border border-gray-200 rounded-lg "
              onClick={() =>
                props.onEventClick({ type: "meeting", data: meeting })
              }
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{meeting.title}</h3>
                        <Badge className="!bg-indigo-500 !text-white !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Meeting
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 capitalize">
                        {meeting.type.replace("-", " ")}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {meeting.startTime} - {meeting.endTime}
                      </p>
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteMeeting(meeting.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Personal Time */}
          {personalTimesOnDate?.map((personal) => (
            <div
              key={personal.id}
              className="border-l-4 border-l-pink-500 cursor-pointer hover:shadow-md transition-shadow border border-gray-200 rounded-lg "
              onClick={() =>
                props.onEventClick({ type: "personal", data: personal })
              }
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{personal.title}</h3>
                        <Badge className="!bg-pink-300 !text-black !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Personal
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 capitalize">
                        {personal.category.replace("-", " ")}
                      </p>
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeletePersonalTime(personal.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Tasks */}
          {tasksOnDate?.map((task) => (
            <div
              key={task.id}
              className="border-l-4 border-l-gray-600 cursor-pointer hover:shadow-md transition-shadow border border-gray-200 rounded-lg"
              onClick={() => props.onEventClick({ type: "task", data: task })}
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full ${task.status === "completed" ? "bg-green-500" : "bg-gray-600"} flex items-center justify-center flex-shrink-0 cursor-pointer`}
                      onClick={(e) => {
                        e.stopPropagation();
                        props.onToggleTaskStatus(task.id);
                      }}
                    >
                      <CheckSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-semibold ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                        >
                          {task.title}
                        </h3>
                        <Badge className="!bg-gray-300 !text-black !p-1 !text-xs rounded-md !px-2 !font-medium">
                          Task
                        </Badge>
                        {task.priority !== "low" && (
                          <Badge
                            className={
                              task.priority === "high"
                                ? "!bg-red-600 !text-white !p-1 !text-xs rounded-md !px-2 !font-medium"
                                : "!bg-yellow-500 !text-white !p-1 !text-xs rounded-md !px-2 !font-medium"
                            }
                          >
                            {task.priority}
                          </Badge>
                        )}
                      </div>
                      {task.category && (
                        <p className="text-sm text-gray-600">{task.category}</p>
                      )}
                    </div>
                  </div>
                  <button
                    className="hover:bg-red-500 hover:text-white p-2 rounded-md transition-colors cursor-pointer "
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteTask(task.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
