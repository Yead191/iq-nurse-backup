"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Folder } from "@/data/types";

import CategorySection from "./CategorySection";
import SubcategorySection from "./SubcategorySection";

interface StudySectionProps {
  flashcards: any[];
  folders: Folder[];
}

export default function NclexStudy({ flashcards }: StudySectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const router = useRouter();

  const handleStartStudy = () => {
    router.push(
      "/profile/flash-card/high-yield-flashcards/create-test"
    );
  };

  return !selectedCategory ? (
    <CategorySection
      flashcards={flashcards}
      onSelectCategory={setSelectedCategory}
    />
  ) : (
    <SubcategorySection
      selectedCategory={selectedCategory}
      flashcards={flashcards}
      onBack={() => setSelectedCategory(null)}
      onStartStudy={handleStartStudy}
    />
  );
}
