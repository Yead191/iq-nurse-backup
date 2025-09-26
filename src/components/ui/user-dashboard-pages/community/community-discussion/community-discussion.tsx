"use client";
import React from "react";
import CommunityHeader from "./header-section";
import StudentDiscussion from "./student-discussion";
import SideBar from "./sidebar";
import PostCreationModal from "./AddPostModel";

export default function CommunityDiscussion() {
  return (
    <div>
      <CommunityHeader />
      <div className="grid md:p-6 p-5 grid-cols-12 ">
        <div className="lg:col-span-8 xl:col-span-9 md:col-span-7 col-end-1">
          <h1 className="md:text-3xl text-xl font-bold py-4">Student Discussion</h1>
          <StudentDiscussion />
        </div>
        <div className="lg:col-span-4 xl:col-span-3 md:col-span-5 md:block hidden">
          <SideBar/>
        </div>
      </div>
      
    </div>
  );
}
