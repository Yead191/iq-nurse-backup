"use client";

import type React from "react";
import {
  X,
  Calendar,
  CheckSquare,
  BookOpen,
  FileText,
  Timer,
  Stethoscope,
  GraduationCap,
  Users,
  User,
  Target,
} from "lucide-react";

interface StudentPlannerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Calendar, label: "Day", color: "text-red-500" },
  { icon: Calendar, label: "Week", color: "text-red-500" },
  { icon: Calendar, label: "Month", color: "text-red-500" },
  { icon: CheckSquare, label: "Tasks", color: "text-blue-500" },
  { icon: BookOpen, label: "Classes", color: "text-orange-500" },
  { icon: FileText, label: "Assignment", color: "text-purple-500" },
  { icon: Timer, label: "Study Time", color: "text-blue-400" },
  { icon: Stethoscope, label: "Clinical Rotations", color: "text-green-500" },
  { icon: GraduationCap, label: "Exams", color: "text-teal-500" },
  { icon: Users, label: "Meetings/Appointments", color: "text-pink-500" },
  { icon: User, label: "Me Time", color: "text-yellow-500" },
  { icon: Target, label: "Count Down", color: "text-indigo-500" },
];

const StudentPlannerDrawer: React.FC<StudentPlannerDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`lg:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Student Planner</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-blue-700 rounded"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                onClick={() => {
                  // Handle menu item click
                  console.log(`Clicked ${item.label}`);
                }}
              >
                <IconComponent size={20} className={item.color} />
                <span className="text-gray-700 font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StudentPlannerDrawer;
