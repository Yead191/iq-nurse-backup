"use client";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import CalendarMobileHeader from "@/components/ui/user-dashboard-pages/calendar-new/components/CalendarMobileHeader";
import { FloatingCalendarButton } from "@/components/ui/user-dashboard-pages/calendar-new/components/FloatingCalendarButton";
import StudentPlannerDrawer from "@/components/ui/user-dashboard-pages/calendar/StudentPlannerDrawer";
import React, { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };
  return (
    <section className="relative">
      <CalendarMobileHeader onMenuClick={handleMenuClick} />
      <StudentPlannerDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <div className="min-h-screen flex justify-center items-center">
        {children}
      </div>
      <FloatingCalendarButton />
    </section>
  );
}
