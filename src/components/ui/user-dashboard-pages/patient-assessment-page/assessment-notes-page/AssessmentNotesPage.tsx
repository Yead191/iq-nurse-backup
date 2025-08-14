"use client";
import DetailsHeader from "@/components/shared/DetailsHeader";
import MediaTab from "@/components/shared/MediaTab";
import OverviewTab from "@/components/shared/OverviewTab";
import React, { useState } from "react";
import TabNavigation from "../../study-notes-page/surgical-details-page/TabNavigation";
import MediaSection from "../../study-notes-page/surgical-details-page/MediaSection";
import SupplyTab from "./SupplyTab";

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
    id: "supplies",
    label: "Supplies",
    icon: "/assets/icons/equipment-icon.svg",
    color: "bg-purple-500",
  },
];
export default function AssessmentNotesPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab />;
      case "media":
        return <MediaTab />;
      case "supplies":
        return <SupplyTab />;
      default:
        return <OverviewTab />;
    }
  };
  return (
    <div>
      <DetailsHeader
        title="Patient Assessment"
        back={"/profile/patient-assessment"}
      />
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        <div className=" hidden lg:block">
          <MediaSection img="/assets/assessment-img.png" alt="Assessment img" />
        </div>
        <div className=" ">
          <div className="">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
