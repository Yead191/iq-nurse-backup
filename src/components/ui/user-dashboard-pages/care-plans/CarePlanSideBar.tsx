"use client";
import React, { useEffect, useState } from "react";
import { NclexSidebar } from "../study-notes-page/NclexSidebar";
import { Grid } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { FaBook } from "react-icons/fa";

export default function CarePlanSideBar() {
  const { lg } = Grid.useBreakpoint();
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || ""
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (category) setSelectedCategory(category);
  }, [category]);

  /** ---------------- Handlers ---------------- */
  const handleCategorySelect = (categoryId: string) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(categoryId)) newSet.delete(categoryId);
    else newSet.add(categoryId);
    setExpandedCategories(newSet);

    setSelectedCategory(categoryId);
  };

  const handleSubcategorySelect = (
    categoryId: string,
    subcategoryId: string
  ) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);

    if (!lg) {
      // mobile: navigate to document page
      router.push(`/profile/study-notes/document/${subcategoryId}`);
    }
  };
  return (
    <div>
      <NclexSidebar
        onCategorySelect={handleCategorySelect}
        onSubcategorySelect={handleSubcategorySelect}
        expandedCategories={expandedCategories}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
      />
    </div>
  );
}
