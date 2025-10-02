"use client";

import { useState } from "react";
import TabNavigation from "./TabNavigation";
import OverviewTab from "../../../../shared/OverviewTab";
import NoteTab from "./NoteTab";

import DetailsHeader from "@/components/shared/DetailsHeader";

import FlashcardTab from "./flashcard-tab/FlashcardTab";
import ExamTab from "./exam-tab/ExamTab";
import MediaTab from "@/components/shared/MediaTab";
import { Bookmark, Printer, Share2 } from "lucide-react";
import { toast } from "sonner";

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
    color: "bg-blue-500",
  },
  {
    id: "flashcard",
    label: "Flashcard",
    icon: "/assets/sidebar-icons/flash-cards-icon.svg",
    color: "bg-green-500",
  },
  {
    id: "exam",
    label: "Exam",
    icon: "/assets/sidebar-icons/test-icon.svg",
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
      case "flashcard":
        return <FlashcardTab />;
      case "media":
        return <MediaTab />;
      case "exam":
        return <ExamTab />;
      case "note":
        return <NoteTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="p-0">
      <DetailsHeader title={id} back={"/profile/study-notes"} primaryBg={false} 
      actions={[
        {
          icon: Bookmark,
          label: "Bookmark",
          hoverColor: "text-blue-600",
          onClick: () => toast.success("Bookmarked!"),
        },
        {
          icon: Share2,
          label: "Share",
          hoverColor: "text-green-600",
          onClick: () => toast.success("Shared!"),
        },
        {
          icon: Printer,
          label: "print",
          hoverColor: "text-green-600",
          onClick: () => console.log("print!"),
        },
      ]}/>

      <div className="flex justify-end items-center px-4   lg:px-5 ">
        {/* <p className="text-2xl font-semibold">{id}</p> */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>
      <div className="grid grid-cols-1  gap-8 mt-0 lg:mt-4  ">
        {/* <div className=" hidden lg:block ">
          <MediaSection
            img="https://i.ibb.co.com/CpRX0XB1/f612a1bef42e4c66c9ae53562b3b4ebb7db86c8d.png"
            alt="Heart anatomy diagram"
          />
        </div> */}
        <div className="px-4  lg:px-5   lg:pt-0  ">
          <div className="max-h-[calc(100vh-130px)] lg:max-h-[calc(100vh-200px)] overflow-auto ">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
