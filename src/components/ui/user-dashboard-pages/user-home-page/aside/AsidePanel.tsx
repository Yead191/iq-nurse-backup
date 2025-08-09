"use client";

import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TasksSection from "./todays-event/TasksSection";
import TodaysEvent from "./todays-event/TodaysEvent";

export default function AsidePanel() {
  const [activeTab, setActiveTab] = useState<"today" | "add">("today");

  return (
    <div className="w-full rounded-xl p-0  md:p-6 ">
      {/* Custom Tabs */}
      <div className="flex items-center bg-neutral-100 rounded-lg py-[6px] mb-4 px-[14px] ">
        <button
          onClick={() => setActiveTab("today")}
          className={`flex-1 text-sm  px-3 py-2 rounded-[8px] transition ${
            activeTab === "today"
              ? "bg-white  text-[#003877] font-medium"
              : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          Today's Events
        </button>
        <button
          onClick={() => setActiveTab("add")}
          className={`flex-1 text-sm font-medium px-3 py-2 rounded-md transition ${
            activeTab === "add"
              ? "bg-white  text-[#003877] font-medium"
              : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          <PlusOutlined /> Add Event
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "today" && <TodaysEvent />}
      {activeTab === "add" && (
        <div className="text-center text-sm text-neutral-500">
          Form goes here...
        </div>
      )}
    </div>
  );
}
