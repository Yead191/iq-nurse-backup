import AddCountDownModal from "@/components/shared/event-modals/AddCountdownModal";
import AddMeetingModal from "@/components/shared/event-modals/AddMeetingModal";
import AddMeTimeModal from "@/components/shared/event-modals/AddMeTimeModal";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import { Clock, Users } from "lucide-react";
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
          icon={Users}
          iconColor="bg-[#9E2DB2]"
          title="Meetings..."
          handleEvent={handleMeeting}
        />
        <TaskHeader
          icon={Users}
          iconColor="bg-[#4CAF50]"
          title="MeTime"
          handleEvent={handleMeTime}
        />
        <TaskHeader
          icon={Clock}
          iconColor="bg-[#E91E63]"
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
