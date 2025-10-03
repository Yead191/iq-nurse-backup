"use client";
import {
  BookOpen,
  CalendarCheck2,
  ClipboardList,
  GraduationCap,
  Timer,
  Clipboard,
  AlarmClock,
  CalendarClock,
  NotebookPen,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "../../user-dashboard-pages/user-home-page/SectionHeader";
import { useMemo } from "react";
import dayjs from "dayjs";
import Link from "next/link";

const iconMap = {
  tasks: ClipboardList,
  exams: NotebookPen,
  classes: GraduationCap,
  assignments: Clipboard,
  "clinical-rotation": CalendarCheck2,
  "me-time": Timer,
  "meeting-appointment": CalendarClock,
  "study-time": BookOpen,
  countdown: AlarmClock,
  done: CheckCircle2,
};
type IconName = keyof typeof iconMap;
export function StatsGrid({ items }: { items: any }) {
  const completed = 1;
  const total = 5;
  const today = useMemo(() => dayjs(), []);

  const progress = (completed / total) * 100;
  return (
    <div
      style={{
        boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
        borderRadius: 12,
      }}
      className="p-5 flex justify-between items-center"
    >
      <div>
        <h4 className="text-primary mb-1 font-bold">Welcome back, Emma!</h4>
        <div className=" flex items-center gap-3">
          {/* Calendar Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border rounded-lg shadow-sm relative">
            <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs font-semibold py-[2px] rounded-t-lg flex items-center justify-center">
              {today.format("MMM")}
            </div>
            <div className="mt-5 text-sm font-bold">{today.format("D")}</div>
          </div>

          {/* Title + Subtitle + Progress */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              {/* <SectionHeader title="This Week Events" /> */}

              <span className="text-sm text-gray-500">
                {/* {today.format("D MMMM YYYY")} */}
                You have 3 events due today and 5 more upcoming this week
              </span>
            </div>
            <div className="grid grid-cols-2 justify-start items-center gap-2 max-w-[260px] ">
              <div className="text-sm text-[#8F8F9A] font-semibold mt-0.5">
                {completed} of {total} completed
              </div>
              {/* Progress bar */}
              <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden w-full">
                <div
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/profile/calendar"}
        className="text-primary cursor-pointer font-medium block"
      >
        See All
      </Link>
    </div>
  );
}

{
  /* <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {items.map((item: any) => {
          const Icon = iconMap[item.key as IconName] || ClipboardList;
          return (
            <div
              key={item.key}
              className="rounded-xl hover:shadow-md transition-shadow p-4 flex items-start gap-3"
              style={{
                boxShadow: "3.53px 3.53px 18.54px 0 rgba(0,0,0,0.1)",
              }}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  item.colorClass || "bg-neutral-100"
                }`}
              >
                <Icon className="h-5 w-5 text-neutral-700" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-[#8D8D8D]">
                  {item.title}
                </div>
                <div className="mt-1 text-xl font-semibold text-neutral-900">
                  {item.count}
                </div>
              </div>
            </div>
          );
        })}
      </div> */
}
