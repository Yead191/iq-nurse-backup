"use client";

import type React from "react";
import { Calendar, ChevronLeft, Plus } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface CalendarMobileHeaderProps {
  onMenuClick: () => void;
  onNewEventClick: () => void;
}

const CalendarMobileHeader: React.FC<CalendarMobileHeaderProps> = ({
  onMenuClick,
  onNewEventClick,
}) => {
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
  return (
    <div className="lg:hidden  py-2 flex items-center justify-between sticky top-4  bg-white">
      {/* <button
        onClick={onMenuClick}
        className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Calendar size={24} />
      </button> */}
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
      <h1 className="text-sm lg:text-lg lg:font-semibold bg-[#F6F7F8]  border border-[#003877] px-6 py-1 rounded-lg">
        {mode ? (
          <span className="capitalize">Calendar  {mode}</span>
        ) : (
          formatPathName(lastSegment)
        )}
      </h1>

      <button
        onClick={onNewEventClick}
        className="flex items-center gap-2  px-2 py-1.5 rounded-lg text-xs font-normal  transition-colors border border-[#003877] "
      >
        <Plus size={16} />
        New Event
      </button>
    </div>
  );
};

export default CalendarMobileHeader;
