"use client";
import React, { useState } from "react";
import { flashTestData } from "@/data/flashCards";
import FlashTestHeader from "../../flash-cards/high-yield-flashcards/create-test/FlashTestHeader";
import FlashTestToolbar from "../../flash-cards/high-yield-flashcards/create-test/FlashTestToolbar";
import FlashTestSwitcher from "../../flash-cards/high-yield-flashcards/create-test/FlashTestSwitcher";
import FlashTestCard from "../../flash-cards/high-yield-flashcards/create-test/FlashTestCard";
import FlashTestFooter from "../../flash-cards/high-yield-flashcards/create-test/FlashTestFooter";
import { useRouter } from "next/navigation";



const FlashCardCreateTestMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter()
  const currentCard = flashTestData[currentIndex];

  const handleClose = () => {
    // router.back(); 
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : flashTestData.length - 1
    );
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < flashTestData.length - 1 ? prev + 1 : 0
    );
    setIsFlipped(false);
  };

  return (
    <div className="lg:h-[calc(100vh-150px)] h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="w-full lg:max-w-2/3 ">
        {/* Header */}
        <FlashTestHeader  handleClose={handleClose}/>

        {/* Body */}
        <div className="bg-[#F3F3F3] h-auto">
          <div className="flex flex-col px-6 flex-1 overflow-y-auto pb-2">
            {/* Title + Actions */}
            <FlashTestToolbar
              title={currentCard.title}
              isFavorite={isFavorite}
              onToggleFavorite={() => setIsFavorite(!isFavorite)}
            />

            {/* Switcher + Card */}
            <div className="w-full px-0 md:px-6 flex-1">
              <FlashTestSwitcher
                isFlipped={isFlipped}
                onShowFront={() => setIsFlipped(false)}
                onShowBack={() => setIsFlipped(true)}
              />

              <FlashTestCard
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
            isFromChat="id"
          />
        </div>
      </div>
    </div>
  );
};

export default FlashCardCreateTestMain;
