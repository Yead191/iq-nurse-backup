"use client";
import { BookOpen, Play } from "lucide-react";
import { Button } from "antd";
import { nursingCategories } from "@/data/sampleFlashcards";

interface SubcategorySectionProps {
  selectedCategory: string;
  flashcards: any[];
  onBack: () => void;
  onStartStudy: () => void;
}

export default function SubcategorySection({
  selectedCategory,
  flashcards,
  onBack,
  onStartStudy,
}: SubcategorySectionProps) {
  const getSubcategoryCardCount = (sub: string) =>
    flashcards.filter(
      (c) => c.category === selectedCategory && c.subcategory === sub
    ).length;

  return (
    <div className="lg:py-0 lg:pt-6 lg:px-4">
      <Button onClick={onBack} className="mb-4">
        ← Back to Categories
      </Button>

      <div className="mb-6 rounded-xl border-2 border-blue-200 bg-blue-50 lg:p-6 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="mb-1 text-lg font-medium text-gray-700">
              {selectedCategory}
            </h3>
            <p className="text-sm text-gray-600">
              Study all 
              <span className="px-1 font-medium"> 
              {
                flashcards.filter(
                  (c) => c.category === selectedCategory
                ).length
              }
              </span>
              flashcards
            </p>
          </div>

          <button
            onClick={onStartStudy}
            className="flex items-center gap-2 rounded-md bg-[#2C5F8D] px-4 py-2 text-sm font-medium text-white hover:bg-[#234a6b] cursor-pointer"
          >
            <Play className="h-4 w-4" />
            Study All
          </button>
        </div>
      </div>

      <h2 className="mb-1 lg:text-2xl text-xl font-medium">{selectedCategory}</h2>
      <p className="mb-3 text-gray-500">
        Choose a topic to explore
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 pb-4">
        {nursingCategories
          .find((c) => c.name === selectedCategory)
          ?.subcategories.map((sub) => (
            <div
              key={sub}
              onClick={onStartStudy}
              className="cursor-pointer rounded-xl border border-gray-200 bg-white lg:p-6 p-4 transition hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-3">
                <BookOpen className="lg:h-5 lg:w-5 h-4 w-4 text-blue-600" />
                <h4 className="lg:text-[16px] text-sm text-gray-700 font-medium">{sub}</h4>
              </div>
              <p className="text-sm text-gray-500">
                {getSubcategoryCardCount(sub)} flashcards
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
