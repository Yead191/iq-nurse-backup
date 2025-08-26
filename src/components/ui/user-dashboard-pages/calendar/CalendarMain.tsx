"use client";

import React from "react";
import dynamic from "next/dynamic";
import AsidePanel from "../user-home-page/aside/AsidePanel";

// Load UserCalendar client-only
const UserCalendar = dynamic(() => import("./UserCalendar"), { ssr: false });

const CalendarMain = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-6">
      <div className="col-span-12 lg:col-span-9">
        <UserCalendar />
      </div>
      <div className="hidden lg:block lg:col-span-3 ">
        <AsidePanel />
      </div>
    </div>
  );
};

export default CalendarMain;
