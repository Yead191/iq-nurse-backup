"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import CalendarMobileHeader from "./CalendarMobileHeader";
import AsidePanel from "../user-home-page/aside/AsidePanel";
import EventsBottomDrawer from "./EventsBottomDrawer";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import { FloatingCalendarButton } from "./FloatingCalendarButton";

// Load UserCalendar client-only
const UserCalendar = dynamic(() => import("./UserCalendar"), { ssr: false });

const CalendarMain = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleNewEventClick = () => {
    // Handle new event creation
    // console.log("New event clicked");
    setModalVisible(true);
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <CalendarMobileHeader
        onMenuClick={handleMenuClick}
        onNewEventClick={handleNewEventClick}
      />

      {/* Student Planner Drawer */}
      {/* <StudentPlannerDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> */}

      {/* Main Content */}
      <div className="grid grid-cols-12 lg:gap-6 mt-6 md:mt-0 relative">
        <div className="col-span-12 lg:col-span-9 max-h-[calc(100vh-145px)] md:max-h-max overflow-y-auto">
          <UserCalendar />
        </div>
        <div className="hidden lg:block lg:col-span-3">
          <AsidePanel />
        </div>
        <FloatingCalendarButton />
      </div>

      {/* Events Bottom Drawer - Mobile Only */}
      <EventsBottomDrawer selectedDate={selectedDate} />
      <AddEventsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
};

export default CalendarMain;
