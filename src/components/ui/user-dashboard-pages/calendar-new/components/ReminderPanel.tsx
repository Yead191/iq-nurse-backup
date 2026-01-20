import { BellRing, BookOpen, GraduationCap, Clock, Badge } from "lucide-react";
import { differenceInDays, startOfDay, format } from "date-fns";
import { ScheduledClass, ScheduledExam } from "./ClassCalendar";
import { Card } from "antd";

interface ReminderPanelProps {
  classes: ScheduledClass[];
  exams: ScheduledExam[];
}

interface ReminderItem {
  id: string;
  title: string;
  subject: string;
  date: Date;
  startTime: string;
  type: "class" | "exam";
  daysUntil: number;
  color: string;
  weight?: string;
}

function getReminderDays(reminder: string, customDays?: number): number {
  switch (reminder) {
    case "3days":
      return 3;
    case "1week":
      return 7;
    case "custom":
      return customDays || 0;
    default:
      return 0;
  }
}

export function ReminderPanel({ classes, exams }: ReminderPanelProps) {
  const today = startOfDay(new Date());
  const activeReminders: ReminderItem[] = [];

  // Process classes
  classes.forEach((cls) => {
    if (cls.reminder === "none") return;

    const clsDate = startOfDay(cls.date);
    const daysUntil = differenceInDays(clsDate, today);
    const reminderDays = getReminderDays(cls.reminder, cls.customReminderDays);

    // Show reminder if we're within the reminder window and the event is in the future or today
    if (daysUntil >= 0 && daysUntil <= reminderDays) {
      activeReminders.push({
        id: cls.id,
        title: cls.title,
        subject: cls.subject,
        date: cls.date,
        startTime: cls.startTime,
        type: "class",
        daysUntil,
        color: cls.color,
      });
    }
  });

  // Process exams
  exams.forEach((exam) => {
    if (exam.reminder === "none") return;

    const examDate = startOfDay(exam.date);
    const daysUntil = differenceInDays(examDate, today);
    const reminderDays = getReminderDays(
      exam.reminder,
      exam.customReminderDays,
    );

    // Show reminder if we're within the reminder window and the event is in the future or today
    if (daysUntil >= 0 && daysUntil <= reminderDays) {
      activeReminders.push({
        id: exam.id,
        title: exam.title,
        subject: exam.subject,
        date: exam.date,
        startTime: exam.startTime,
        type: "exam",
        daysUntil,
        color: exam.color,
        weight: exam.weight,
      });
    }
  });

  // Sort by date (closest first) and then by type (exams first)
  activeReminders.sort((a, b) => {
    if (a.daysUntil !== b.daysUntil) {
      return a.daysUntil - b.daysUntil;
    }
    // If same day, exams come first
    return a.type === "exam" ? -1 : 1;
  });

  if (activeReminders.length === 0) {
    return null;
  }

  return (
    <Card className="border-2 border-amber-200 bg-amber-50/50">
      <div className="pb-3">
        <div className="flex items-center gap-2">
          <BellRing className="w-5 h-5 text-amber-600" />
          <h2>Upcoming Reminders</h2>
          <Badge color="blue">{activeReminders.length}</Badge>
        </div>
        <p>Classes and exams coming up soon</p>
      </div>
      <div>
        <div className="space-y-3">
          {activeReminders.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-lg border-2 ${
                item.type === "exam"
                  ? "bg-red-50 border-red-200"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 flex-1">
                  {item.type === "exam" ? (
                    <GraduationCap className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-sm">{item.title}</p>
                      {item.type === "exam" && (
                        <Badge color="red" className="text-xs">
                          Exam
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {item.subject} • {format(item.date, "MMM d")} at{" "}
                      {item.startTime}
                    </p>
                    {item.weight && (
                      <p className="text-xs text-red-700 font-medium mt-1">
                        {item.weight}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex-shrink-0 text-right">
                  <div
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      item.daysUntil === 0
                        ? "bg-red-100 text-red-700"
                        : item.daysUntil <= 3
                          ? "bg-orange-100 text-orange-700"
                          : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    <Clock className="w-3 h-3" />
                    {item.daysUntil === 0
                      ? "Today"
                      : item.daysUntil === 1
                        ? "Tomorrow"
                        : `${item.daysUntil} days`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
