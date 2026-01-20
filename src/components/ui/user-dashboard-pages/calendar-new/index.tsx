"use client";
import React from "react";
import AsidePanel from "../user-home-page/aside/AsidePanel";
import CalendarTabs from "./components/CalendarTabs";
import CalendarHeader from "./components/CalendarHeader";

export default function CalendarNew() {
  return (
    <section className="relative">
      <CalendarHeader />
      {/* main content */}
      <div className="grid grid-cols-12 lg:gap-6 mt-[84px] lg:mt-6 md:mt-0 relative px-4 ">
        <div className="col-span-12 lg:col-span-9  md:max-h-max ">
          <CalendarTabs />
        </div>
        <div className="hidden lg:block lg:col-span-3">
          <AsidePanel />
        </div>
      </div>
    </section>
  );
}
