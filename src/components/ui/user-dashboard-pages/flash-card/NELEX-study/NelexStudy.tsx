"use client";
import { useState } from 'react';
import { ChevronRight, BookOpen, Play, RotateCcw, Shuffle, CheckCircle, XCircle, Home, Star, Layers, FileText } from 'lucide-react';
import { FlashcardView } from './FlashcardView';
import { Flashcard, nursingCategories } from '@/data/sampleFlashcards';
import { Folder } from '@/data/types';
import { Badge, Button } from 'antd';
import { getCategoryColor, getCategoryIcon } from '@/helpers/categoryColors';

interface StudySectionProps {
  flashcards : any[];
  folders: Folder[];
  onUpdateFlashcard: (flashcard: Flashcard) => void;
}

export default function NclexStudy({ flashcards, folders, onUpdateFlashcard }: StudySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardsNeedingReview, setCardsNeedingReview] = useState<Flashcard[]>([]);
  const [showCompletion, setShowCompletion] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [currentDeck, setCurrentDeck] = useState<Flashcard[]>([]);

  // Featured decks configuration
  const featuredDecks = [
    {
      category: 'Fundamentals of Nursing',
      subcategory: 'Vital Signs',
      description: 'Master essential vital sign assessment',
      featured: true,
    },
    {
      category: 'Pharmacology',
      subcategory: 'Medication Administration',
      description: 'Critical medication safety principles',
      featured: true,
    },
    {
      category: 'Medical Surgical Nursing',
      subcategory: 'Cardiovascular Disorders',
      description: 'High-yield cardiac conditions',
      featured: true,
    },
  ];

  // Filter flashcards based on selection
  const getFilteredFlashcards = () => {
    if (selectedSubcategory) {
      return flashcards.filter(
        (card) =>
          card.category === selectedCategory && card.subcategory === selectedSubcategory
      );
    } else if (selectedCategory) {
      return flashcards.filter((card) => card.category === selectedCategory);
    }
    return [];
  };

  const studyFlashcards = getFilteredFlashcards();

  const handleStartStudy = () => {
    if (studyFlashcards.length > 0) {
      setCurrentCardIndex(0);
      setIsStudying(true);
      setCurrentDeck(studyFlashcards);
      setCardsNeedingReview([]);
      setCorrectCount(0);
      setShowCompletion(false);
    }
  };


  const handleStartReview = () => {
    setCurrentCardIndex(0);
    setIsStudying(true);
    setCurrentDeck(cardsNeedingReview);
    setCardsNeedingReview([]);
    setCorrectCount(0);
    setShowCompletion(false);
  };

  const handleReshuffle = () => {
    const shuffled = [...currentDeck].sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
    setIsStudying(true);
    setCurrentDeck(shuffled);
    setCardsNeedingReview([]);
    setCorrectCount(0);
    setShowCompletion(false);
  };

  const handleCorrect = () => {
    const currentCard = currentDeck[currentCardIndex];
    onUpdateFlashcard({
      ...currentCard,
      timesReviewed: currentCard.timesReviewed + 1,
      correctCount: currentCard.correctCount + 1,
      lastReviewed: new Date(),
    });
    setCorrectCount(correctCount + 1);
  };

  const handleIncorrect = () => {
    const currentCard = currentDeck[currentCardIndex];
    onUpdateFlashcard({
      ...currentCard,
      timesReviewed: currentCard.timesReviewed + 1,
      lastReviewed: new Date(),
    });
    // Only add to review if not already in the list
    if (!cardsNeedingReview.find(c => c.id === currentCard.id)) {
      setCardsNeedingReview([...cardsNeedingReview, currentCard]);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < currentDeck.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // Finished all cards
      setIsStudying(false);
      setCurrentCardIndex(0);
      setShowCompletion(true);
    }
  };

  const handleBackToSelection = () => {
    setIsStudying(false);
    setCurrentCardIndex(0);
    setShowCompletion(false);
  };

  const handleBackToCategories = () => {
    setIsStudying(false);
    setCurrentCardIndex(0);
    setShowCompletion(false);
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setCardsNeedingReview([]);
    setCorrectCount(0);
    setCurrentDeck([]);
  };

  if (isStudying && currentDeck.length > 0) {
    return (
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <Button onClick={handleBackToSelection} >
            ← Back to Selection
          </Button>
          <div className="text-sm text-gray-600">
            {selectedCategory} {selectedSubcategory && `→ ${selectedSubcategory}`}
          </div>
        </div>
        <FlashcardView
          flashcard={currentDeck[currentCardIndex]}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
          onNext={handleNext}
          currentIndex={currentCardIndex}
          totalCards={currentDeck.length}
        />
      </div>
    );
  }

  if (showCompletion) {
    const incorrectCount = currentDeck.length - correctCount;
    const percentage = Math.round((correctCount / currentDeck.length) * 100);

    return (
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#2C5F8D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl mb-2">Great Job!</h1>
            <p className="text-gray-500">
              You've completed studying {selectedCategory}
              {selectedSubcategory && ` - ${selectedSubcategory}`}
            </p>
          </div>

          {/* Stats Card */}
          <div className="mb-6 flex flex-col gap-6 rounded-xl border bg-white text-gray-900">
            <div className="px-6 pt-6 pb-6">
              {/* Stats */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <p className="mb-1 text-3xl font-semibold">
                    {currentDeck.length}
                  </p>
                  <p className="text-sm text-gray-600">Total Cards</p>
                </div>

                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <p className="mb-1 text-3xl font-semibold text-green-600">
                    {correctCount}
                  </p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>

                <div className="rounded-lg bg-red-50 p-4 text-center">
                  <p className="mb-1 text-3xl font-semibold text-red-600">
                    {incorrectCount}
                  </p>
                  <p className="text-sm text-gray-600">Need Review</p>
                </div>
              </div>

              {/* Score Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Your Score</span>
                  <span className="text-lg font-semibold">
                    {percentage}%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-[#2C5F8D] transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {cardsNeedingReview.length > 0 && (
              <Button
                onClick={handleStartReview}
                className="w-full bg-[#2C5F8D] hover:bg-[#234a6b] text-base py-6"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Review Cards That Need Work ({cardsNeedingReview.length})
              </Button>
            )}

            <Button
              onClick={handleReshuffle}
              // variant="outline"
              // size="lg"
              className="w-full text-base py-6"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Reshuffle & Study Again
            </Button>

            <Button
              onClick={handleBackToCategories}
              // variant="outline"
              className="w-full"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </div>

          {/* Encouragement Message */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm text-blue-900">
              {percentage >= 90 && "🌟 Outstanding! You're mastering this material!"}
              {percentage >= 70 && percentage < 90 && "💪 Good work! Keep practicing to improve your score!"}
              {percentage >= 50 && percentage < 70 && "📚 You're making progress! Review the cards you missed."}
              {percentage < 50 && "🎯 Keep studying! Repetition is key to learning."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Study Flashcards</h1>
        <p className="text-gray-500">
          Select a category or subcategory to begin studying
        </p>
      </div>

      {/* Category Selection */}
      {!selectedCategory && (
        <>
          {/* Featured Decks */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#F59E0B]" fill="#F59E0B" />
              <h2 className="text-2xl">Featured Decks</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {featuredDecks.map((deck) => {
                const deckCards = flashcards.filter(
                  (card) =>
                    card.category === deck.category &&
                    card.subcategory === deck.subcategory
                );
                const categoryColor = getCategoryColor(deck.category);
                const categoryIcon = getCategoryIcon(deck.category);

                return (
                  <div
                    key={`${deck.category}-${deck.subcategory}`}
                    className="relative cursor-pointer overflow-hidden rounded-xl border-2 border-[#2C5F8D] bg-gradient-to-br from-white to-blue-50 transition-all hover:-translate-y-1 hover:shadow-xl"
                    onClick={() => {
                      setSelectedCategory(deck.category);
                      setSelectedSubcategory(deck.subcategory);
                    }}
                  >
                    {/* Star badge */}
                    <div className="absolute right-3 top-3">
                      <Star className="h-5 w-5 text-[#F59E0B]" fill="#F59E0B" />
                    </div>

                    <div className="px-6 pt-6 pb-6">
                      <div className="mb-3 flex items-start gap-3">
                        {/* Icon */}
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg text-2xl"
                          style={{ backgroundColor: `${categoryColor}15` }}
                        >
                          {categoryIcon}
                        </div>

                        {/* Content */}
                        <div className="min-w-0 flex-1 pr-6">
                          <h3 className="mb-1 text-lg font-medium">
                            {deck.subcategory}
                          </h3>

                          <p className="mb-2 text-xs text-gray-500">
                            {deck.category}
                          </p>

                          <p className="mb-3 text-sm text-gray-600">
                            {deck.description}
                          </p>

                          {/* Badge (Tailwind-only) */}
                          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                            <Layers className="h-3 w-3" />
                            {deckCards.length} cards
                          </span>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        className="mt-3 flex w-full items-center justify-center rounded-md bg-[#2C5F8D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#234a6b]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCategory(deck.category);
                          setSelectedSubcategory(deck.subcategory);
                        }}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Start Now
                      </button>
                    </div>
                  </div>

                );
              })}
            </div>
          </div>

          {/* All Categories */}
          <div>
            <h2 className="text-2xl mb-4">All Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nursingCategories.map((category) => {
                const categoryCards = flashcards.filter(
                  (card) => card.category === category.name
                );
                const categoryColor = getCategoryColor(category.name);
                const categoryIcon = getCategoryIcon(category.name);

                return (
                  <div
                    key={category.name}
                    className="cursor-pointer rounded-xl border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="px-6 pt-6 pb-6">
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
                            style={{ backgroundColor: `${categoryColor}15` }}
                          >
                            {categoryIcon}
                          </div>

                          {/* Text */}
                          <div>
                            <h3 className="mb-1 text-lg font-medium">
                              {category.name}
                            </h3>

                            <p className="flex items-center gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Layers className="h-4 w-4" />
                                {categoryCards.length} cards
                              </span>

                              <span className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                {category.subcategories.length} topics
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Chevron */}
                        <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-400" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Subcategory Selection */}
      {selectedCategory && !selectedSubcategory && (
        <div>
          <Button
            onClick={() => setSelectedCategory(null)}
            className="mb-4"
          >
            ← Back to Categories
          </Button>

          <div className="mb-4 rounded-xl border-2 border-blue-200 bg-blue-50">
            <div className="px-6 pt-6 pb-6">
              <div className="flex items-center justify-between">
                {/* Text */}
                <div>
                  <h3 className="mb-1 text-xl font-medium">
                    {selectedCategory}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Study all{" "}
                    {
                      flashcards.filter(
                        (c) => c.category === selectedCategory
                      ).length
                    }{" "}
                    flashcards
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handleStartStudy}
                  className="flex items-center gap-2 rounded-md bg-[#2C5F8D] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#234a6b]"
                >
                  <Play className="h-4 w-4" />
                  Study All
                </button>
              </div>
            </div>
          </div>

          <h3 className="text-lg mb-4">Or choose a specific topic:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nursingCategories
              .find((c) => c.name === selectedCategory)
              ?.subcategories.map((subcategory) => {
                const subCards = flashcards.filter(
                  (card) =>
                    card.category === selectedCategory &&
                    card.subcategory === subcategory
                );
                return (
                  <div
                    key={subcategory}
                    className="cursor-pointer rounded-xl border bg-white transition-shadow hover:shadow-md"
                    onClick={() => setSelectedSubcategory(subcategory)}
                  >
                    <div className="px-6 pt-6 pb-6">
                      <div className="mb-2 flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <h4 className="text-lg font-medium">
                          {subcategory}
                        </h4>
                      </div>

                      <p className="text-sm text-gray-500">
                        {subCards.length} flashcards
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Ready to Study */}
      {selectedCategory && selectedSubcategory && (
        <div>
          <Button
            onClick={() => setSelectedSubcategory(null)}
            className="mb-4"
          >
            ← Back to {selectedCategory}
          </Button>

          <div className="mx-auto max-w-2xl rounded-xl border bg-white">
            <div className="px-6 py-8 text-center">
              <h2 className="mb-4 text-2xl font-semibold">
                {selectedCategory} – {selectedSubcategory}
              </h2>

              <p className="mb-6 text-gray-600">
                Ready to study {studyFlashcards.length} flashcards?
              </p>

              {studyFlashcards.length > 0 ? (
                <button
                  onClick={handleStartStudy}
                  className="inline-flex items-center justify-center rounded-md bg-[#2C5F8D] px-8 py-2 text-sm font-medium text-white transition-colors hover:bg-[#234a6b]"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Studying
                </button>
              ) : (
                <p className="text-gray-500">
                  No flashcards available in this topic yet.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}