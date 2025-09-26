"use client";
import Image from "next/image";
import React, { useState } from "react";
import NurseNiaModal from "./NurseNiaModal";

export default function NurseQButton() {
  const [status, setStatus] = useState("online");
  const [nurseModalOpen, setNurseModalOpen] = useState(false);
  const statusConfig: any = {
    online: {
      textColor: "text-white",
      statusDotColor: "bg-green-400",
      statusText: "Online",
      statusTextColor: "text-green-400",
    },
    connecting: {
      textColor: "text-white",
      statusDotColor: "bg-blue-400",
      statusText: "Connecting",
      statusTextColor: "text-blue-400",
    },
    offline: {
      textColor: "text-white",
      statusDotColor: "bg-red-400",
      statusText: "Offline",
      statusTextColor: "text-red-400",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <div className="fixed right-4 lg:right-12 bottom-28 lg:bottom-8  ">
      <button
        onClick={() => setNurseModalOpen(true)}
        className={`bg-primary ${currentStatus.textColor} rounded-full px-4 py-2 lg:px-6 lg:py-3 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-w-40 lg:min-w-48`}
      >
        {/* Avatar */}
        <div className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center flex-shrink-0">
          <Image
            src={"/assets/sidebar-icons/chatbot-icon.svg"}
            height={44}
            width={44}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left">
          <div className="font-medium text-white ">Nurse Nia</div>
          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 ${
                currentStatus.statusDotColor
              } rounded-full ${status === "connecting" ? "animate-pulse" : ""}`}
            ></div>
            <span className={`text-sm ${currentStatus.statusTextColor}`}>
              {currentStatus.statusText}
            </span>
          </div>
        </div>
      </button>
      <NurseNiaModal
        open={nurseModalOpen}
        onClose={() => setNurseModalOpen(false)}
      />
    </div>
  );
}
