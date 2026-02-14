import { useState } from 'react';
import { Flashcard } from '@/data/sampleFlashcards';
import { Button, Card } from 'antd';

import { RotateCcw, ThumbsUp, ThumbsDown } from 'lucide-react';

interface FlashcardViewProps {
  flashcard: Flashcard;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCards: number;
}

export function FlashcardView({
  flashcard,
  onCorrect,
  onIncorrect,
  onNext,
  currentIndex,
  totalCards,
}: FlashcardViewProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleCorrect = () => {
    setHasAnswered(true);
    onCorrect();
  };

  const handleIncorrect = () => {
    setHasAnswered(true);
    onIncorrect();
  };

  const handleNext = () => {
    setIsFlipped(false);
    setHasAnswered(false);
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 max-w-6xl mx-auto w-full">
      <div className="text-sm text-gray-500 mb-6">
        Card {currentIndex + 1} of {totalCards}
      </div>

      <div className="w-full mb-8" style={{ perspective: '1000px' }}>
        <Card
          className="relative cursor-pointer transition-all duration-500 shadow-xl border-2"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
            height: '600px',
          }}
          onClick={handleFlip}
        >
          {/* Front */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-12 backface-hidden bg-white"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute top-4 right-4 text-gray-400 flex items-center gap-2">
              <RotateCcw className="w-5 h-5" />
              <span className="text-sm">Click to flip</span>
            </div>
            <div className="text-3xl text-center mb-6 max-w-3xl">{flashcard.question}</div>
            {flashcard.questionImage && (
              <img
                src={flashcard.questionImage}
                alt="Question illustration"
                className="max-h-64 rounded-lg shadow-md object-contain"
              />
            )}
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-12 backface-hidden bg-white"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="absolute top-4 right-4 text-xs text-gray-400 uppercase tracking-wider">
              Answer
            </div>
            <div className="text-3xl text-center mb-6 max-w-3xl">{flashcard.answer}</div>
            {flashcard.answerImage && (
              <img
                src={flashcard.answerImage}
                alt="Answer illustration"
                className="max-h-64 rounded-lg shadow-md object-contain"
              />
            )}
          </div>
        </Card >
      </div>

      {isFlipped && !hasAnswered && (
        <div className="flex gap-4">
          <Button
            onClick={handleIncorrect}
            className="flex items-center gap-2"
          >
            <ThumbsDown className="w-4 h-4" />
            Need to Review
          </Button>
          <Button
            onClick={handleCorrect}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            <ThumbsUp className="w-4 h-4" />
            Got it Right
          </Button>
        </div>
      )}

      {hasAnswered && (
        <div className="flex gap-4">
          <Button onClick={handleFlip} className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Review Card
          </Button>
          <Button onClick={handleNext} className="px-8">
            Next Card
          </Button>
        </div>
      )}

      {!isFlipped && (
        <div className="text-sm text-gray-500 mt-4">
          {flashcard.category} → {flashcard.subcategory}
        </div>
      )}
    </div>
  );
}