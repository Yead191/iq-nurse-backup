"use client";
import React, { useState, useEffect } from "react";
import { flashTestData } from "@/data/flashCards";
import FlashTestHeader from "./FlashTestHeader";
import FlashTestCard from "./FlashTestCard";
import FlashTestFooter from "./FlashTestFooter";
import { usePathname, useRouter } from "next/navigation";
import { FlashHeader } from "./FlashHeader";
import { FlashcardItem } from "@/data/types";
import { Button } from "antd";
import { Edit } from "lucide-react";

interface flashCardType {
  isStudyNote?: boolean;
  setShowCompletion?: any;
  cards?: FlashcardItem[];
  onEditDeck?: () => void;
  title?: string;
}

const FlashCardCreateTestMain = ({
  isStudyNote,
  setShowCompletion,
  cards,
  onEditDeck,
  title,
}: flashCardType) => {
  const pathname = usePathname();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const router = useRouter();

  // Use provided cards or fallback to test data if not custom deck context
  // If cards prop is provided (even empty), use it.
  const activeCards = cards || flashTestData;
  const currentCard = activeCards[currentIndex];

  const isPrimary =
    pathname === "/profile/flash-card/high-yield-flashcards/create-test";

  // console.log(isPrimary);

  // Reset index if cards change or deck switches
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [cards]);

  const handleClose = () => {
    router.back();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : activeCards.length - 1));
    setIsFlipped(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < activeCards.length - 1 ? prev + 1 : 0));
    setIsFlipped(false);
  };

  const handleFlipped = () => {
    setIsFlipped(!isFlipped);
  };

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

  if (cards && cards.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gray-50 rounded-xl border border-dashed border-gray-300">
        <div className="mb-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <img
              src="/assets/icons/header/flashcard.svg"
              alt="Flashcards"
              className="w-10 h-10 opacity-50"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          This deck is empty
        </h3>
        <p className="text-gray-500 mb-6 max-w-md">
          Add some flashcards to start studying this topic.
        </p>
        {onEditDeck && (
          <Button
            type="primary"
            onClick={onEditDeck}
            className="bg-blue-900 h-12 px-8 text-base font-medium hover:bg-blue-800"
          >
            Add Flashcards
          </Button>
        )}
      </div>
    );
  }

  // Fallback if somehow currentCard is undefined even with length > 0 check above (safeguard)
  if (!currentCard) return null;

  return (
    <div
      className={`${
        isStudyNote ? "h-full " : "h-full"
        // : "lg:h-[calc(100vh-50px)] h-[calc(100vh-50px)]"
      }  flex  justify-center `}
    >
      <div className={`w-full ${isStudyNote ? "" : ""}  `}>
        {/* Header */}
        {!isStudyNote && !cards && (
          <FlashTestHeader handleClose={handleClose} />
        )}

        {/* Custom Header for Personal Decks */}
        {cards && (
          <div className="flex justify-between items-center mb-4 px-2">
            <div>
              {/* <h2 className="text-xl font-bold text-gray-800">{title || "Your Deck"}</h2> */}
              {/* <p className="text-sm text-gray-500">{activeCards.length} cards</p> */}
            </div>
            {onEditDeck && (
              <Button
                onClick={onEditDeck}
                className="flex items-center gap-2 text-blue-600 border-blue-200 hover:border-blue-500 hover:text-blue-700 bg-blue-50"
              >
                <Edit size={14} />
                Edit Deck
              </Button>
            )}
          </div>
        )}

        {/* Body */}
        <div className={` h-auto ${isPrimary ? "lg:max-w-3/4" : ""} mx-auto`}>
          <div className="flex flex-col flex-1  pb-2">
            <FlashHeader
              currentIndex={currentIndex}
              total={activeCards.length}
              title={currentCard.title || `Card ${currentIndex + 1}`}
              onShuffle={onShuffle}
              onRepeatDifficult={onRepeatDifficult}
              onAudio={onAudio}
            />

            {/* Switcher + Card */}
            <div
              className={`w-full ${
                isStudyNote ? "px-0" : "px-0 md:px-0"
              } flex-1 `}
            >
              <FlashTestCard
                isStudyNote={isStudyNote}
                isFlipped={isFlipped}
                onFlip={() => setIsFlipped(!isFlipped)}
                // Adapt FlashcardItem to shape expected by FlashTestCard or ensure it matches
                // FlashTestData shape: { id, title?, frontContent, backContent } which matches our new types basically
                // IF legacy data is different, we might need adapter.
                // Legacy: { id, title, frontContent: {text}, backContent: {text, image} }
                // Our new type: { id, title?, frontContent: {text, image?}, backContent: {text, image?} }
                // Seems compatible enough.
                card={currentCard}
              />
            </div>
          </div>

          {/* Footer */}
          <FlashTestFooter
            isPrimary={isPrimary}
            currentIndex={currentIndex}
            total={activeCards.length}
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
