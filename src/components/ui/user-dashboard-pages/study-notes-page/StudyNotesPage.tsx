"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { BookOutlined } from "@ant-design/icons";
import { SelectedContent } from "./SelectedContent";
import { NclexSidebar } from "./NclexSidebar";
import { Grid } from "antd";

export default function MedicalSurgicalPage() {
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
    <section className="">
      <PageNavbar
        icon={<BookOutlined />}
        title="Study Notes"
        subtitle="Comprehensive NCLEX study materials with interactive videos and visual aids"
        isAiEnhanced={true}
      />

      <div className="flex gap-6">
        <NclexSidebar
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
          expandedCategories={expandedCategories}
        />

        {lg && (
          <SelectedContent
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />
        )}
      </div>
    </section>
  );
}
