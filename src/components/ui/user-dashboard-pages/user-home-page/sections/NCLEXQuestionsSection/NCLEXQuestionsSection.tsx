"use client";

import Link from "next/link";
import { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { SectionHeader } from "../SectionHeader";

const categories = [
  {
    id: "med-surg",
    title: "Med-Surg",
    questionCount: 300,
    icon: "/assets/icons/question/icon1.png",
  },
  {
    id: "pharmacology",
    title: "Pharmacology",
    questionCount: 120,
    icon: "/assets/icons/question/icon2.png",
  },
  {
    id: "labs",
    title: "Labs",
    questionCount: 80,
    icon: "/assets/icons/question/icon3.png",
  },
  {
    id: "ecg",
    title: "ECG",
    questionCount: 60,
    icon: "/assets/icons/question/icon4.png",
  },
  {
    id: "mental-health",
    title: "Mental Health",
    questionCount: 80,
    icon: "/assets/icons/question/icon5.png",
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    questionCount: 150,
    icon: "/assets/icons/question/icon6.png",
  },
];

export function NCLEXQuestionsSection() {
  const [showAll, setShowAll] = useState(false);

  const firstFive = categories.slice(0, 5);
  const remaining = categories.slice(5);

  return (
    <section className="w-full py-6 boxShadow px-4 lg:p-5 rounded-xl my-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <SectionHeader title="Answer NCLEX Questions" />

        {/* Desktop toggle */}
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="hidden font-medium text-[#2C5F8D] hover:underline lg:block cursor-pointer"
        >
          {showAll ? "Show Less" : "See All"}
        </button>

        {/* Mobile link */}
        <Link
          href="/profile/tests"
          className="font-medium text-[#2C5F8D] hover:underline lg:hidden "
        >
          See All
        </Link>
      </div>

      {/* Mobile: horizontal scroll (all items) */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide lg:hidden">
        {categories?.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block space-y-4">
        <div className="grid grid-cols-5 gap-4">
          {firstFive?.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Remaining items (toggle) */}
        {showAll && remaining.length > 0 && (
          <div className="grid grid-cols-5 gap-4">
            {remaining.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                index={index + 5}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
