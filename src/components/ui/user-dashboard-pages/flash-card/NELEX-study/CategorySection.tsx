"use client";

import {
  ChevronRight,
  Play,
  Star,
  Layers,
  FileText,
} from "lucide-react";
import { featuredDecks, nursingCategories } from "@/data/sampleFlashcards";
import { getCategoryColor, getCategoryIcon } from "@/helpers/categoryColors";

interface CategorySectionProps {
  flashcards: any[];
  onSelectCategory: (category: string) => void;
}

export default function CategorySection({
  flashcards,
  onSelectCategory,
}: CategorySectionProps) {
 
  const getCategoryCardCount = (category: string) =>
    flashcards.filter((c) => c.category === category).length;

  const getSubcategoryCardCount = (category: string, sub: string) =>
    flashcards.filter(
      (c) => c.category === category && c.subcategory === sub
    ).length;

  return (
    <div className="lg:py-0 lg:pt-6 lg:px-4">
      <h1 className="mb-2 lg:text-2xl text-xl font-medium">Study Flashcards</h1>
      <p className="mb-8 text-gray-500 lg:text-[16px] text-sm">
        Choose a nursing category to begin
      </p>

      <div className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <Star className="lg:h-6 lg:w-6 h-4.5 w-4.5 text-[#F59E0B]" fill="#F59E0B" />
          <h2 className="lg:text-2xl text-xl font-medium">Featured Decks</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredDecks.map((deck) => (
            <div
              key={`${deck.category}-${deck.subcategory}`}
              className="cursor-pointer rounded-xl border border-[#2C5F8D] bg-gradient-to-br from-white to-blue-50 lg:p-6 p-4 transition hover:-translate-y-1 hover:shadow-xl"
              onClick={() => onSelectCategory(deck.category)}
            >
              <h3 className="mb-1 lg:text-lg text-[16px] text-gray-700 font-medium">
                {deck.subcategory}
              </h3>
              <p className="mb-2 text-xs text-gray-500">
                {deck.category}
              </p>
              <p className="mb-3 text-sm text-gray-600">
                {deck.description}
              </p>

              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs">
                <Layers className="h-3 w-3" />
                {getSubcategoryCardCount(
                  deck.category,
                  deck.subcategory
                )}
                cards
              </span>

              <button className="mt-4 flex w-full items-center justify-center rounded-md bg-[#2C5F8D] py-2 text-sm text-white hover:bg-[#234a6b]">
                <Play className="mr-2 h-4 w-4" />
                View Category
              </button>
            </div>
          ))}
        </div>
      </div>

      <h2 className="mb-4 text-xl font-medium">All Categories</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-4">
        {nursingCategories.map((category) => {
          const color = getCategoryColor(category.name);
          const icon = getCategoryIcon(category.name);

          return (
            <div
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    {icon}
                  </div>

                  <div>
                    <h3 className="mb-1 lg:text-lg text-[16px] text-gray-700 font-medium">
                      {category.name}
                    </h3>
                    <p className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Layers className="h-4 w-4" />
                        {getCategoryCardCount(category.name)}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {category.subcategories.length}
                      </span>
                    </p>
                  </div>
                </div>

                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
