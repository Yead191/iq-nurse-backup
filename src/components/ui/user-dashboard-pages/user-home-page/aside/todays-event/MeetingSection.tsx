import AddCountDownModal from "@/components/shared/event-modals/AddCountdownModal";
import AddMeetingModal from "@/components/shared/event-modals/AddMeetingModal";
import AddMeTimeModal from "@/components/shared/event-modals/AddMeTimeModal";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import React, { useState } from "react";

export default function MeetingSection() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [meTimeModalOpen, setMeTimeModalOpen] = useState(false);
  const [countDownModal, setCountDownModalOpen] = useState(false);

  const handleMeeting = () => {
    setMeetingModalOpen(true);
  };
  const handleMeTime = () => {
    setMeTimeModalOpen(true);
  };
  const handleCountDown = () => {
    setCountDownModalOpen(true);
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <TaskHeader
          img="/assets/icons/meetings-icon.svg"
          title="Meetings..."
          handleEvent={handleMeeting}
        />
        <TaskHeader
          img="/assets/icons/meet-time-icon.svg"
          title="MeTime"
          handleEvent={handleMeTime}
        />
        <TaskHeader
          img="/assets/icons/count-down-icon.svg"
          handleEvent={handleCountDown}
          title="Count Down"
        />
      </div>
      <AddMeetingModal
        open={meetingModalOpen}
        onClose={() => setMeetingModalOpen(false)}
      />
      <AddMeTimeModal
        open={meTimeModalOpen}
        onClose={() => setMeTimeModalOpen(false)}
      />
      <AddCountDownModal
        open={countDownModal}
        onClose={() => setCountDownModalOpen(false)}
      />
    </div>
  );
}
