"use client";
import React, { useState } from "react";
import { classesData } from "@/data/eventData";
import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";
import AddClassesModal from "@/components/shared/event-modals/AddClassesModal";

export default function ClassesSection() {
  const [classesModalOpen, setClassesModalOpen] = useState(false);
  const handleEvent = () => {
    setClassesModalOpen(true);
  };
  return (
    <div className="">
      {/* header */}
      <TaskHeader
        img="/assets/icons/classes.svg"
        title="Classes"
        handleEvent={handleEvent}
      />
      <div className="my-6">
        {/* Dynamic Class Cards */}
        {classesData.map((classItem) => (
          <EventCard
            key={classItem.id}
            title={classItem.title}
            description={classItem.description}
            timeRange={classItem.timeRange}
            status={classItem.status}
            avatarColor={classItem.avatarColor}
            avatarIcon={classItem.avatarIcon}
            backgroundColor={classItem.backgroundColor}
          />
        ))}
      </div>
      <AddClassesModal
        open={classesModalOpen}
        onClose={() => setClassesModalOpen(false)}
      />
    </div>
  );
}
