"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import CalendarMobileHeader from "../calendar-new/components/CalendarMobileHeader";
import AsidePanel from "../user-home-page/aside/AsidePanel";
import EventsBottomDrawer from "./EventsBottomDrawer";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import { FloatingCalendarButton } from "../calendar-new/components/FloatingCalendarButton";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import Image from "next/image";

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

  const handleNewEventClick = () => {
    setModalVisible(true);
  };

  return (
    <div className="relative">
      {/* Mobile Header */}
      <CalendarMobileHeader
        onMenuClick={handleMenuClick}
        // onNewEventClick={handleNewEventClick}
      />
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

      {/* Student Planner Drawer */}
      {/* <StudentPlannerDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} /> */}

      {/* Main Content */}
      <div className="grid grid-cols-12 lg:gap-6 mt-6 md:mt-0 relative px-4">
        <div className="col-span-12 lg:col-span-9 max-h-[calc(100vh-145px)] md:max-h-max overflow-y-auto ">
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
