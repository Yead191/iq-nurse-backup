import React, { useState } from "react";
import FlashCardCreateTestMain from "../../../flash-cards/high-yield-flashcards/create-test/FlashCardCreateTestMain";
import FlashcardResult from "./FlashcardResult";

export default function FlashcardTab() {
  const [showCompletion, setShowCompletion] = useState(false);

  return (
    <div>
      {showCompletion ? (
        <FlashcardResult setShowCompletion={setShowCompletion} />
      ) : (
        <FlashCardCreateTestMain
          setShowCompletion={setShowCompletion}
          isStudyNote={true}
        />
      )}
    </div>
  );
}
