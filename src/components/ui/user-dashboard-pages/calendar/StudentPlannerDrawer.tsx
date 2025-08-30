"use client";

import type React from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { calendarMenuItems } from "@/data/calendarData";
import { useRouter } from "next/navigation";

interface StudentPlannerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudentPlannerDrawer: React.FC<StudentPlannerDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
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
        className={`lg:hidden fixed left-0 top-0  w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out  ${
          isOpen ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-white px-4 py-3 flex items-center justify-between h-[70px]">
          <h2 className="text-lg font-semibold">Student Planner</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-blue-700 rounded"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="w-[48px] h-screen fixed bg-[#EDF1F7]" />

        {/* Menu Items */}
        <div className="py-2 h-[calc(100vh-164px)] overflow-y-auto">
          {calendarMenuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                onClick={() => {
                  // Handle menu item click
                  // console.log(`Clicked ${item.label}`);
                  router.push(item.path);
                }}
              >
                {/* <IconComponent size={20} className={item.color} /> */}
                <Image
                  src={IconComponent}
                  width={24}
                  height={24}
                  alt={item.label}
                  className="z-40"
                />
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
