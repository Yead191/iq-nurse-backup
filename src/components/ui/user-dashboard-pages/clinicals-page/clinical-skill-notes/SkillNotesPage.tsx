"use client";

import DetailsHeader from "@/components/shared/DetailsHeader";
import React, { useState } from "react";
import TabNavigation from "../../study-notes-page/surgical-details-page/TabNavigation";
import MediaSection from "../../study-notes-page/surgical-details-page/MediaSection";
import OverviewTab from "../../../../shared/OverviewTab";
import MediaTab from "../../../../shared/MediaTab";
import EquipmentTab from "./EquipmentTab";

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
    id: "equipment",
    label: "Equipment",
    icon: "/assets/icons/equipment-icon.svg",
    color: "bg-purple-500",
  },
];
export default function SkillNotesPage({ id }: { id: any }) {
  console.log(id);

  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "media":
        return <MediaTab />;
      case "equipment":
        return <EquipmentTab />;
      default:
        return <></>;
    }
  };
  return (
    <div>
      <DetailsHeader title="Clinical Skills" back={"/profile/clinicals"} />
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
  );
}
