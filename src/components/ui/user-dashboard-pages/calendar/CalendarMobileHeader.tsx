"use client";

import type React from "react";
import { Calendar, Plus } from "lucide-react";

interface CalendarMobileHeaderProps {
  onMenuClick: () => void;
  onNewEventClick: () => void;
}

const CalendarMobileHeader: React.FC<CalendarMobileHeaderProps> = ({
  onMenuClick,
  onNewEventClick,
}) => {
  return (
    <div className="lg:hidden  py-2 flex items-center justify-between sticky top-4  bg-white">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Calendar size={24} />
      </button>

      <h1 className="text-lg font-semibold">Calendar</h1>

      <button
        onClick={onNewEventClick}
        className="flex items-center gap-2  px-3 py-1.5 rounded-lg text-sm font-medium text-white transition-colors border border-[#003877] bg-primary"
      >
        <Plus size={16} />
        New Event
      </button>
    </div>
  );
};

export default CalendarMobileHeader;
