import AvailableFlashcards from "@/components/ui/user-dashboard-pages/flash-cards/high-yield-flashcards/AvailableFlashcards";

import { FlashCardsPerformance } from "@/components/ui/user-dashboard-pages/flash-cards/high-yield-flashcards/Performance/FlashCardsPerformance";

import PreviousFlashcards from "@/components/ui/user-dashboard-pages/flash-cards/high-yield-flashcards/Previous Flashcards/PreviousFlashcards";

export const flashTabsData = [
  {
    id: "Flashcards",
    label: "2500 Flashcards Available   ",
    imageSrc: "/assets/user-dashboard-images/flash-card/cards-avaiable.png",
    component: <AvailableFlashcards />,
  },
  {
    id: "Performance",
    label: "Performance",
    imageSrc: "/assets/user-dashboard-images/flash-card/performance.png",
    component: <FlashCardsPerformance />,
  },
  {
    id: "Previous Flashcards",
    label: "Previous Flashcards",
    imageSrc: "/assets/user-dashboard-images/flash-card/previous-exam.png",
    component: <PreviousFlashcards />,
  },
];

export const flashcardSections = [
  {
    title: "Flashcard Categories",
    total: 800,
    categories: [
      [
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
      ],
      [
        { name: "Cardiovascular", count: 297 },
        { name: "Hematology", count: 297 },
        { name: "Cardiovascular", count: 297 },
        { name: "Endocrine", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Neurology", count: 297 },
      ],
    ],
  },
  {
    title: "All Pharmacology",
    total: 800,
    categories: [
      [
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
      ],
      [
        { name: "Cardiovascular", count: 297 },
        { name: "Hematology", count: 297 },
        { name: "Cardiovascular", count: 297 },
        { name: "Endocrine", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Neurology", count: 297 },
      ],
    ],
  },
];

export const PreviousFlashcardsData = [
  {
    key: "1",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
  {
    key: "2",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
  {
    key: "3",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
  {
    key: "4",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
  {
    key: "5",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
  {
    key: "6",
    topic: "Finance monthly test",
    score: "90/100",
    cardsAttempted: "98/100",
    know: "90",
    stillLearning: "8",
    date: "Monday, 23 April 3:30 PM",
  },
];
