"use client";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import CalendarMobileHeader from "@/components/ui/user-dashboard-pages/calendar/CalendarMobileHeader";
import StudentPlannerDrawer from "@/components/ui/user-dashboard-pages/calendar/StudentPlannerDrawer";
import React, { useState } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };
  const handleNewEventClick = () => {
    // Handle new event creation
    // console.log("New event clicked");
    setModalVisible(true);
  };
  return (
    <section>
      <CalendarMobileHeader
        onMenuClick={handleMenuClick}
        onNewEventClick={handleNewEventClick}
      />
      <StudentPlannerDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
      <div className="min-h-[calc(100vh-182px)] flex justify-center items-center">
        {children}
      </div>
      <AddEventsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </section>
  );
}
