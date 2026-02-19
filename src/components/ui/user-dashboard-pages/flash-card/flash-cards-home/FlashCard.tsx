"use client";
import React, { useEffect, useState } from "react";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { useRouter, useSearchParams } from "next/navigation";
import { IoAnalytics } from "react-icons/io5";
import DeskFolder from "../desk-folder/DeskFolder";
import Image from "next/image";
import NelexStudy from "../NELEX-study/NelexStudy";
import {
  CategoryProgress,
  Flashcard,
  sampleFlashcards,
} from "@/data/sampleFlashcards";
import { BookOpen } from "lucide-react";
import { GiProgression } from "react-icons/gi";
import { ProgressSection } from "../progress/Progress";

export const FlashCard = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(tabParam || "1");
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

  useEffect(() => {
    setFlashcards([...sampleFlashcards]);
  }, []);

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

  const calculateProgress = (): CategoryProgress[] => {
    const categories = [
      "Fundamentals of Nursing",
      "Medical Surgical Nursing",
      "Maternal Newborn Nursing",
      "Pediatric Nursing",
      "Mental Health Nursing",
      "Pharmacology",
      "Critical Care Nursing",
      "Community Health Nursing",
      "Nursing Leadership and Management",
      "Gerontological Nursing",
      "ECG Interpretation",
      "Dosage Calculations",
      "Nursing Assessment",
      "Clinical Skills",
    ];

    return categories.map((category) => {
      const categoryCards = flashcards.filter(
        (card) => card.category === category,
      );
      const reviewedCards = categoryCards.filter(
        (card) => card.timesReviewed && card.timesReviewed > 0,
      );

      const correctPercentage =
        reviewedCards.length > 0
          ? (reviewedCards.reduce((acc, card) => acc + card.correctCount, 0) /
              reviewedCards.reduce(
                (acc, card) => acc + card.timesReviewed,
                0,
              )) *
            100
          : 0;

      // Fix: Check if there are any reviewed cards with lastReviewed dates
      const cardsWithDates = reviewedCards.filter((card) => card.lastReviewed);
      const lastStudied =
        cardsWithDates.length > 0
          ? new Date(
              Math.max(
                ...cardsWithDates.map((card) =>
                  new Date(card.lastReviewed!).getTime(),
                ),
              ),
            )
          : undefined;

      return {
        category,
        totalCards: categoryCards.length,
        reviewedCards: reviewedCards.length,
        correctPercentage,
        lastStudied,
      };
    });
  };

  const tabs = [
    {
      id: "2",
      label: "Study",
      icon: <BookOpen className="lg:text-[22px] " size={16} />,
      component: <NelexStudy flashcards={flashcards} folders={[]} />,
    },
    {
      id: "3",
      label: "My Folders",
      icon: <IoAnalytics className="lg:text-[22px] text-[16px]" />,
      component: <DeskFolder />,
    },
    {
      id: "1",
      label: "Progress",
      icon: <GiProgression className="lg:text-[22px] text-[16px]" />,
      component: <ProgressSection categoryProgress={calculateProgress()} />,
    },
  ];

  return (
    <div>
      <PageNavbar
        icon={
          <Image
            src="/assets/sidebar-icons/flash-cards-icon.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className=" h-8 w-full active-icon-filter"
          />
        }
        title="Flashcards"
        topics={32}
      />

      <div className="flex flex-col lg:flex-row px-4 lg:px-0">
        <div className="w-full lg:w-1/4 2xl:w-1/6 p-1  flex justify-center items-start   ">
          <div className="flex md:flex-col lg:gap-4 gap-2 bg-white md:shadow-xl h-[calc(100%)]   w-full md:p-3 lg:pb-12 pb-6 overflow-x-auto  ">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-left px-4 lg:py-3 py-1.5 rounded-lg font-medium transition-all flex items-center lg:gap-4 gap-2 cursor-pointer w-full text-xs md:text-[16px] text-nowrap ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-primary/20 text-[#6B6B6B] hover:bg-primary hover:text-white"
                }`}
              >
                <p className="lg:text-sm "> {tab.icon} </p> <p> {tab.label} </p>
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
