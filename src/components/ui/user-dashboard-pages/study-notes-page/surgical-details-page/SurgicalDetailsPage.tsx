"use client";

import { useState } from "react";
import { FileText, Stethoscope, ImageIcon, Video } from "lucide-react";
import MediaSection from "./MediaSection";
import TabNavigation from "./TabNavigation";
import OverviewTab from "../../../../shared/OverviewTab";
import NoteTab from "./NoteTab";
import MediaTab from "../../../../shared/MediaTab";
import DetailsHeader from "@/components/shared/DetailsHeader";

const tabs = [
  {
    id: "overview",
    label: "Overview",
    icon: "/assets/sidebar-icons/study-notes-icon.svg",
    color: "bg-blue-500",
  },
  {
    id: "media",
    label: "Media",
    icon: "/assets/icons/media-icon.svg",
    color: "bg-green-500",
  },
  {
    id: "note",
    label: "Note",
    icon: "/assets/icons/note-icon.svg",
    color: "bg-purple-500",
  },
];

export default function SurgicalDetailsPage({ id }: { id: any }) {
  console.log(id);
  const [activeTab, setActiveTab] = useState("overview");
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      // case "media":
      //   return <MediaTab />;
      case "note":
        return <NoteTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="">
      <DetailsHeader title={"Muscle System"} back={"/profile/study-notes"} />

      <div className="flex justify-end items-center px-4  lg:px-5 ">
        {/* <p className="text-2xl font-semibold">{id}</p> */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
      <div className="grid grid-cols-1  gap-8 mt-0 lg:mt-8 lg:mb-8">
        {/* <div className=" hidden lg:block ">
          <MediaSection
            img="https://i.ibb.co.com/CpRX0XB1/f612a1bef42e4c66c9ae53562b3b4ebb7db86c8d.png"
            alt="Heart anatomy diagram"
          />
        </div> */}
        <div className="px-4  lg:px-5 max-h-[calc(100vh-230px)] overflow-auto pt-4 lg:pt-0">
          <div className="">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
