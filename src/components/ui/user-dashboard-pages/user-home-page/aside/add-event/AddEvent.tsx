"use client";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import { Button } from "antd";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import TasksSection from "../todays-event/TasksSection";
import ClassesSection from "../todays-event/ClassesSection";
import AssignmentSection from "../todays-event/AssignmentSection";
import MeetingSection from "../todays-event/MeetingSection";

import dayjs from "dayjs";
import SmallCalendar from "./SmallCalendar";

export default function AddEvent() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Mock data for events
  const datesWithEvents = new Map<string, string[]>([
    ["2025-12-16", ["red", "teal", "pink"]],
    ["2025-12-17", ["orange", "green"]],
    ["2025-12-18", ["purple", "indigo", "gray"]],
    ["2025-12-19", ["red", "pink"]],
    ["2025-12-20", ["teal", "purple"]],
    ["2025-12-21", ["purple", "gray"]],
    ["2025-12-22", ["green"]],
    ["2025-12-23", ["pink"]],
    // Let's add some for January 2026 too since today is Jan 16
    ["2026-01-16", ["red", "teal", "pink"]],
    ["2026-01-17", ["orange", "green"]],
    ["2026-01-18", ["purple", "indigo", "gray"]],
    ["2026-01-19", ["red", "pink"]],
    ["2026-01-20", ["teal", "purple"]],
    ["2026-01-21", ["purple", "gray"]],
    ["2026-01-22", ["green"]],
    ["2026-01-23", ["pink"]],
  ]);

  const onPanelChange = (value: any, mode: string) => {
    console.log("[v0] Calendar panel changed:", value, mode);
  };

  const onSelect = (value: any) => {
    console.log("[v0] Calendar date selected:", value);
    setSelectedDate(value);
  };
  return (
    <div className="p-2">
      <div className="min-h-[70vh] flex flex-col gap-4 justify-start items-center ">
        {/* Calendar Section */}
        <div className="pb-4 border-b border-gray-100 w-full">
          <SmallCalendar
            value={selectedDate}
            datesWithEvents={datesWithEvents}
            onPanelChange={onPanelChange}
            onSelect={onSelect}
          />
        </div>
        <div className="flex justify-center item-center my-2 w-full">
          <Button
            onClick={() => setModalVisible(true)}
            style={{
              display: "flex",
              alignItems: "center",
              height: 38,
              backgroundColor: "#2C5F8D",
              color: "#FFFFFF",
              borderRadius: 10,
              width: "100%",
            }}
            icon={<Plus size={16} className="mt-1.5" />}
          >
            Add New Event
          </Button>
        </div>
        <div className="w-full space-y-4">
          <TasksSection />
          <ClassesSection />
          <AssignmentSection />
          <MeetingSection />
        </div>
      </div>

      <AddEventsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}
