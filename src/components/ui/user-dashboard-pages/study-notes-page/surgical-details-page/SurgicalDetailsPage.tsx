"use client";

import { useState } from "react";
import { FileText, Stethoscope, ImageIcon, Video } from "lucide-react";
import SurgicalHeader from "./SurgicalHeader";
import MediaSection from "./MediaSection";
import TabNavigation from "./TabNavigation";
import OverviewTab from "./OverviewTab";
import ProcedureTab from "./ProcedureTab";
import ImagesTab from "./ImagesTab";
import VideosTab from "./VideosTab";

const tabs = [
  { id: "overview", label: "Overview", icon: FileText, color: "bg-blue-500" },
  {
    id: "procedure",
    label: "Procedure",
    icon: Stethoscope,
    color: "bg-green-500",
  },
  { id: "images", label: "Images", icon: ImageIcon, color: "bg-purple-500" },
  { id: "videos", label: "Videos", icon: Video, color: "bg-orange-500" },
];

export default function SurgicalDetailsPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "procedure":
        return <ProcedureTab />;
      case "images":
        return <ImagesTab />;
      case "videos":
        return <VideosTab />;
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      <SurgicalHeader />
      <div className="">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <MediaSection />
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
