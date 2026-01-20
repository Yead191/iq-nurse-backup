"use client";
import React, { useState } from "react";
import CalendarMobileHeader from "../calendar/CalendarMobileHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import Image from "next/image";
import { Grid } from "antd";
import AsidePanel from "../user-home-page/aside/AsidePanel";
import CalendarTabs from "./components/CalendarTabs";

export default function CalendarNew() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { lg } = Grid.useBreakpoint();

  const today = new Date();
  const formattedToday = today.toLocaleDateString("en-GB", {
    weekday: "long", // Tuesday
    day: "2-digit", // 07
    month: "short", // Jan
    year: "numeric", // 2025
  });
  const [selectedDate, setSelectedDate] = useState(formattedToday);
  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  const handleNewEventClick = () => {
    setModalVisible(true);
  };
  return (
    <section className="relative">
      {lg ? (
        <PageNavbar
          title="Calendar"
          icon={
            <Image
              src="/assets/sidebar-icons/calendar-icon.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-10 object-contain"
            />
          }
        />
      ) : (
        <CalendarMobileHeader
          onMenuClick={handleMenuClick}
          onNewEventClick={handleNewEventClick}
        />
      )}

      {/* main content */}
      <div className="grid grid-cols-12 lg:gap-6 mt-6 md:mt-0 relative px-4">
        <div className="col-span-12 lg:col-span-9 max-h-[calc(100vh-145px)] md:max-h-max overflow-y-auto ">
          <CalendarTabs />
        </div>
        <div className="hidden lg:block lg:col-span-3">
          <AsidePanel />
        </div>
      </div>
    </section>
  );
}
