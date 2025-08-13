"use client";

import { useState } from "react";
import { FileText, Stethoscope, ImageIcon, Video } from "lucide-react";
import SurgicalHeader from "./SurgicalHeader";
import MediaSection from "./MediaSection";
import TabNavigation from "./TabNavigation";
import OverviewTab from "./OverviewTab";
import NoteTab from "./NoteTab";
import MediaTab from "./MediaTab";

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
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "media":
        return <MediaTab />;
      case "note":
        return <NoteTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="">
      <SurgicalHeader />

      <div>
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
          <div className=" hidden lg:block">
            <MediaSection />
          </div>
          <div className=" ">
            <div className="">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
