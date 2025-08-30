"use client";
import React, { useState } from "react";
import { classesData } from "@/data/eventData";
import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";

export default function ClassesSection() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="">
      {/* header */}
      <TaskHeader
        img="/assets/icons/classes.svg"
        title="Classes"
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "h-auto opacity-100" : "max-h-0 opacity-0"
        }`}
      >
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
      </div>

      {/* <AddClassesModal
        open={classesModalOpen}
        onClose={() => setClassesModalOpen(false)}
      /> */}
    </div>
  );
}
