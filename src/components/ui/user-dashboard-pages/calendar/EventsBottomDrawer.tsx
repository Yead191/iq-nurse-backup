"use client";

import type React from "react";
import { useState, useRef } from "react";
import {
  CheckSquare,
  BookOpen,
  FileText,
  Timer,
  GraduationCap,
  Plus,
  ChevronUp,
} from "lucide-react";
import TasksSection from "../user-home-page/aside/todays-event/TasksSection";
import ClassesSection from "../user-home-page/aside/todays-event/ClassesSection";
import AssignmentSection from "../user-home-page/aside/todays-event/AssignmentSection";
import MeetingSection from "../user-home-page/aside/todays-event/MeetingSection";

interface EventsBottomDrawerProps {
  selectedDate?: string;
}

const EventsBottomDrawer: React.FC<EventsBottomDrawerProps> = ({
  selectedDate,
}) => {
  const [height, setHeight] = useState(25); // Initial height as percentage
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startHeight, setStartHeight] = useState(25);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
    setStartHeight(height);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    const windowHeight = window.innerHeight;
    const deltaPercent = (deltaY / windowHeight) * 100;

    const newHeight = Math.max(15, Math.min(85, startHeight + deltaPercent));
    setHeight(newHeight);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Snap to positions
    if (height < 20) {
      setHeight(15);
    } else if (height < 40) {
      setHeight(25);
    } else if (height < 70) {
      setHeight(50);
    } else {
      setHeight(85);
    }
  };

  const eventSections = [
    {
      icon: CheckSquare,
      title: "Tasks",
      color: "text-blue-500",
      items: [
        {
          text: "Donate $500 to the charity",
          completed: true,
          color: "text-blue-500",
        },
        { text: "Do 500 pushups", completed: false },
        { text: "Buy new headset", completed: true, color: "text-blue-500" },
        { text: "Clean the room", completed: false },
      ],
    },
    {
      icon: BookOpen,
      title: "Classes",
      color: "text-orange-500",
      items: [
        {
          text: "Pediatrics Clinical",
          subtitle:
            "Collaborative session with the international team in Tokyo",
          time: "3:00 PM - 4:30 PM",
          type: "Online",
          completed: false,
        },
      ],
    },
    {
      icon: FileText,
      title: "Assignment",
      color: "text-purple-500",
      items: [],
    },
    {
      icon: Timer,
      title: "Study Time",
      color: "text-blue-400",
      items: [],
    },
    {
      icon: GraduationCap,
      title: "Exams",
      color: "text-teal-500",
      items: [],
    },
  ];

  return (
    <div
      ref={drawerRef}
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-30 transition-all duration-200 ease-out"
      style={{ height: `${height}vh` }}
    >
      {/* Drag Handle */}
      <div
        className="flex justify-center py-2 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-12 h-1 bg-gray-300 rounded-full" />
      </div>

      {/* Selected Date Header */}
      <div className="bg-primary  text-white px-4 py-3 mx-4 rounded-t-[20px] mb-4">
        <div className="flex items-center justify-between">
          <span className="font-medium">{selectedDate}</span>
          <ChevronUp size={20} />
        </div>
      </div>

      {/* Content */}
      <div
        className="px-4 pb-4 overflow-y-auto"
        style={{ height: `calc(${height}vh - 120px)` }}
      >
        {eventSections.map((section, sectionIndex) => {
          const IconComponent = section.icon;
          return (
            <div key={sectionIndex} className="mb-6">
              {section.items.length > 0 ? (
                <div className="space-y-4 p-2 pt-4">
                  <TasksSection />
                  <ClassesSection />
                  <AssignmentSection />
                  <MeetingSection />
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No {section.title.toLowerCase()} for this date
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventsBottomDrawer;
