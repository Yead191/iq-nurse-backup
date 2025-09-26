"use client";

import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import TodaysEvent from "./todays-event/TodaysEvent";
import AddEvent from "./add-event/AddEvent";

export default function AsidePanel() {
  const [activeTab, setActiveTab] = useState<"today" | "add">("today");

  return (
    <div className="w-full lg:h-[calc(100vh-120px)] overflow-auto rounded-xl p-0   relative">
      {/* Custom Tabs */}
      <div className=" sticky top-0 z-10 pb-2 bg-white">
        <div className="flex items-center bg-neutral-100 rounded-lg py-[6px]  px-[14px]">
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
      </div>

      {/* Tab Content */}
      {activeTab === "today" && <TodaysEvent />}
      {activeTab === "add" && <AddEvent />}
    </div>
  );
}
