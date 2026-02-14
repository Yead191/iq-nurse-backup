"use client";
import React, { useEffect, useState } from "react";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { useRouter, useSearchParams } from "next/navigation";
import { IoMdAdd } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import DeskFolder from "../desk-folder/DeskFolder";
import Image from "next/image";
import NelexStudy from "../NELEX-study/NelexStudy";
import { Flashcard, sampleFlashcards } from "@/data/sampleFlashcards";

export const FlashCard = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(tabParam || "1");
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    setFlashcards([...sampleFlashcards]);
  }, []);

  const handleUpdateFlashcard = (updatedFlashcard: Flashcard) => {
    setFlashcards((prev) =>
      prev.map((fc) => (fc.id === updatedFlashcard.id ? updatedFlashcard : fc))
    );
  };

  React.useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  // console.log(user);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/profile/flash-card?tab=${tabId}`);
  };

  const tabs = [
    {
      id: "1",
      label: "Study Desk",
      icon: <IoMdAdd size={22} />,
      component: <NelexStudy flashcards={flashcards} folders={[]} onUpdateFlashcard={handleUpdateFlashcard} />,
    },
    {
      id: "2",
      label: "My Decks",
      icon: <IoAnalytics size={22} />,
      component: <DeskFolder />,
    },
  ];

  return (
    <div>
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/flashcard.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className=" h-8 w-full"
          />
        }
        title="Flashcards"
        topics={32}
      />

      <div className="flex flex-col lg:flex-row px-4 lg:px-0">
        <div className="w-full lg:w-1/4 2xl:w-1/6 p-1  flex justify-center items-start   ">
          <div className="flex md:flex-col gap-4 bg-white md:shadow-xl h-[calc(100%)]   w-full md:p-3 pb-12 ">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-4 cursor-pointer ${activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-primary/20 text-[#6B6B6B] hover:bg-primary hover:text-white"
                  }`}
              >
                <p> {tab.icon} </p> <p> {tab.label} </p>
              </div>
            ))}
          </div>
        </div>

        {/* Component Display */}
        <div className="w-full   rounded-xl lg:h-[calc(100vh-105px)] overflow-y-scroll    ">
          {tabs?.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};
