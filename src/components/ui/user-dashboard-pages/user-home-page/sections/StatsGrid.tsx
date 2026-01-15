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
import { useMemo } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

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
      className="p-5 flex flex-col md:flex-row gap-2 justify-between md:items-center relative my-4"
    >
      {/* <Image
        src={"/assets/icons/user-home/welcome-icon.png"}
        alt="welcome icon"
        width={100}
        height={100}
        className="w-[71px] h-[71px] object-fit absolute -top-8 left-0"
      /> */}
      <div className="">
        <div className=" flex items-center gap-3">
          {/* Calendar Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-white border rounded-lg shadow-sm relative">
            <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs font-semibold py-[2px] rounded-t-lg flex items-center justify-center">
              {today.format("MMM")}
            </div>
            <div className="mt-5 text-sm font-bold">{today.format("D")}</div>
          </div>

          {/* Title + Subtitle + Progress */}
          <div className="flex-1 ">
            <div className="flex items-center gap-2">
              {/* <SectionHeader title="This Week Events" /> */}

              <span className="text-sm text-gray-500">
                {/* {today.format("D MMMM YYYY")} */}
                You have 3 events due today and 5 more upcoming this week
              </span>
            </div>
            <div className="md:grid grid-cols-2 justify-start items-center gap-2 max-w-[260px] hidden ">
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
      <div className="flex items-center justify-between gap-2 md:hidden">
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
        <Link
          href={"/profile/calendar"}
          className="text-primary cursor-pointer font-medium "
        >
          See All
        </Link>
      </div>
      <Link
        href={"/profile/calendar"}
        className="text-primary cursor-pointer font-medium hidden  md:block"
      >
        See All
      </Link>
    </div>
  );
}
