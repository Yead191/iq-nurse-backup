"use client";
import React from "react";
import CommunityHeader from "./header-section";
import StudentDiscussion from "./student-discussion";
import SideBar from "./sidebar";

export default function CommunityDiscussion() {
  return (
    <div>
      <CommunityHeader />
      <div className="flex items-start ">
        <div className="p-6">
          <h1 className="text-3xl font-bold py-4">Student Discussion</h1>
          <StudentDiscussion />
        </div>
        <SideBar/>
      </div>
    </div>
  );
}
