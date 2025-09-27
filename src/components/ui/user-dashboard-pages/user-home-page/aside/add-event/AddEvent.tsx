"use client";
import AddEventsModal from "@/components/shared/event-modals/AddEventsModal";
import { Button, Calendar } from "antd";
import { Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import TasksSection from "../todays-event/TasksSection";
import ClassesSection from "../todays-event/ClassesSection";
import AssignmentSection from "../todays-event/AssignmentSection";
import MeetingSection from "../todays-event/MeetingSection";

export default function AddEvent() {
  const [modalVisible, setModalVisible] = useState(false);
  const onPanelChange = (value: any, mode: string) => {
    console.log("[v0] Calendar panel changed:", value, mode);
  };

  const onSelect = (value: any) => {
    console.log("[v0] Calendar date selected:", value);
  };
  return (
    <div className="p-2">
      <div className="min-h-[70vh] flex flex-col gap-4 justify-start items-center ">
        {/* Calendar Section */}
        <div className="pb-4 border-b border-gray-100">
          <Calendar
            fullscreen={false}
            onPanelChange={onPanelChange}
            onSelect={onSelect}
            className="
            [&_.ant-picker-calendar-header]:mb-4
            [&_.ant-picker-calendar-header_.ant-picker-calendar-year-select]:text-base
            [&_.ant-picker-calendar-header_.ant-picker-calendar-month-select]:text-base
            [&_.ant-picker-calendar-header_.ant-picker-calendar-year-select]:font-medium
            [&_.ant-picker-calendar-header_.ant-picker-calendar-month-select]:font-medium
            [&_.ant-picker-calendar-date]:text-sm
            [&_.ant-picker-calendar-date]:h-8
            [&_.ant-picker-calendar-date]:leading-8
            [&_.ant-picker-calendar-date]:rounded-md
            [&_.ant-picker-calendar-date]:hover:bg-blue-50
            [&_.ant-picker-calendar-date-selected]:bg-blue-500
            [&_.ant-picker-calendar-date-selected]:text-white
            [&_.ant-picker-calendar-date-selected]:font-medium
            [&_.ant-picker-calendar-date-today]:bg-blue-500
            [&_.ant-picker-calendar-date-today]:text-white
            [&_.ant-picker-calendar-date-today]:font-medium
            [&_.ant-picker-calendar-header_.ant-picker-calendar-mode-switch]:hidden
          "
          />
        </div>
        <div className="flex justify-center item-center my-2 w-full">
          <Button
            onClick={() => setModalVisible(true)}
            style={{
              display: "flex",
              alignItems: "center",
              height: 38,
              backgroundColor: "#003877",
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
