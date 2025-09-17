"use client";

import { nclexCategories } from "@/data/nclexCategories";
import { Grid } from "antd";
import { CategoryItem } from "./CategoryItem";
import { useRouter } from "next/navigation";

interface NclexSidebarProps {
  selectedCategory?: string;
  selectedSubcategory?: string;
  onSelectionChange: (categoryId: string, subcategoryId?: string) => void;
  className?: string;
}

export function NclexSidebar({
  selectedCategory,
  selectedSubcategory,
  onSelectionChange,
  className,
}: NclexSidebarProps) {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    onSelectionChange(categoryId);
  };

  const handleSubcategorySelect = (
    categoryId: string,
    subcategoryId: string
  ) => {
    onSelectionChange(categoryId, subcategoryId);

    if (!lg) {
      // Find the selected subcategory to get its document ID
      const category = nclexCategories.find(
        (cat: any) => cat.id === categoryId
      );
      const subcategory = category?.subcategories?.find(
        (sub: any) => sub.id === subcategoryId
      );

      if (subcategory?.documentId) {
        router.push(`/profile/study-notes/document/${subcategory.documentId}`);
      }
    }
  };

  return (
    <div
      className={`bg-white md:border-r border-gray-200 flex flex-col ${
        !lg ? "w-full" : "w-80"
      } ${className || ""}`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          NCLEX Categories
        </h2>
        <p className="text-sm text-gray-500">
          {!lg
            ? "Select category and subcategory to view details"
            : "Select a category to study"}
        </p>
      </div>

      {/* Categories List */}
      <div className="flex-1 md:max-h-[calc(100vh-185px)] overflow-y-auto p-4">
        <div className="space-y-2">
          {nclexCategories?.map((category: any) => (
            <CategoryItem
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={handleCategorySelect}
              onSubcategorySelect={handleSubcategorySelect}
              isMobile={!lg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
