"use client";

import React from "react";
import dynamic from "next/dynamic";

// Load UserCalendar client-only
const UserCalendar = dynamic(() => import("./UserCalendar"), { ssr: false });

const CalendarMain = () => {
  return (
    <div>
      <UserCalendar />
    </div>
  );
};

export default CalendarMain;
