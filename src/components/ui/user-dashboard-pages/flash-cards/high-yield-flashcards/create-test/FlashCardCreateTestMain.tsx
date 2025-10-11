"use client";
import React, { useState } from "react";
import { flashTestData } from "@/data/flashCards";
import FlashTestHeader from "./FlashTestHeader";
import FlashTestToolbar from "./FlashTestToolbar";
import FlashTestSwitcher from "./FlashTestSwitcher";
import FlashTestCard from "./FlashTestCard";
import FlashTestFooter from "./FlashTestFooter";
import { useRouter } from "next/navigation";
import { FlashHeader } from "./FlashHeader";
import { IoMdClose } from "react-icons/io";

interface flashCardType {
  isStudyNote?: boolean;
  setShowCompletion?: any;
}
const FlashCardCreateTestMain = ({
  isStudyNote,
  setShowCompletion,
}: flashCardType) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();
  const currentCard = flashTestData[currentIndex];

  const handleClose = () => {
    router.back();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashTestData.length - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < flashTestData.length - 1 ? prev + 1 : 0));
    setIsFlipped(false);
  };

  const handleFlipped = () => {
    setIsFlipped(!isFlipped)
  }

  const onShuffle = () => {

    setCurrentIndex(currentIndex);
    setIsFlipped(false);
  };

  const onRepeatDifficult = () => {
    // Placeholder: logic to repeat difficult cards
    // For demonstration, just alert
    alert("Repeat Difficult Cards feature coming soon!");
  };

  const onAudio = () => {
    // Placeholder: logic to play audio for current card
    // For demonstration, just alert
    alert("Audio feature coming soon!");
  };

  return (
    <div
      className={`${isStudyNote
        ? "h-full "
        : "h-full"
        // : "lg:h-[calc(100vh-50px)] h-[calc(100vh-50px)]"
        }  flex items-center justify-center `}
    >
      <div className={`w-full ${isStudyNote ? "" : ""}  `}>
        {/* Header */}
        <FlashTestHeader handleClose={handleClose} />

        {/* Body */}
        <div className=" h-auto lg:max-w-3/4 mx-auto">
          <div className="flex flex-col flex-1  pb-2">
            <FlashHeader
              currentIndex={currentIndex}
              total={flashTestData.length}
              title={currentCard.title}
              onShuffle={onShuffle}
              onRepeatDifficult={onRepeatDifficult}
              onAudio={onAudio}
            />

            {/* Switcher + Card */}
            <div className="w-full px-0 md:px-6 flex-1 ">
              <FlashTestCard
                isStudyNote={isStudyNote}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
                card={currentCard}
              />
            </div>
          </div>

          {/* Footer */}
          <FlashTestFooter
            currentIndex={currentIndex}
            total={flashTestData.length}
            onPrev={handlePrev}
            onNext={handleNext}
            isFlipped={isFlipped}
            setShowCompletion={setShowCompletion}
            isStudyNote={isStudyNote}
            onPlippeClicked={handleFlipped}
          />
        </div>
      </div>
    </div>
  );
};

export default FlashCardCreateTestMain;
