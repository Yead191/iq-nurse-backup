import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import React from "react";

export default function MeetingSection() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <TaskHeader img="/assets/icons/meetings-icon.svg" title="Meetings..." />
        <TaskHeader img="/assets/icons/meet-time-icon.svg" title="Meet Time" />
        <TaskHeader
          img="/assets/icons/count-down-icon.svg"
          title="Count Down"
        />
      </div>
    </div>
  );
}
