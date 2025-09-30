"use client";

import { nclexCategories } from "@/data/nclexCategories";
import { Grid, Input } from "antd";
import { CategoryItem } from "./CategoryItem";
import { Search } from "lucide-react";
import { useState } from "react";

interface NclexSidebarProps {
  selectedCategory?: string;
  selectedSubcategory?: string;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (categoryId: string, subcategoryId: string) => void;
  expandedCategories?: Set<string>;
}

export function NclexSidebar({
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  expandedCategories = new Set(),
}: NclexSidebarProps) {
  const { lg } = Grid.useBreakpoint();
  const [searchText, setSearchText] = useState("");

  return (
    <div
      className={`bg-white md:border-r border-gray-200 flex flex-col ${
        !lg ? "w-full" : "w-80"
      }`}
    >
      {/* Header */}
      <div className="px-4 py-2 md:py-4 border-b border-gray-200">
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
      <div className="flex-1 max-h-[calc(100vh-263px)] md:max-h-[calc(100vh-185px)] overflow-y-auto p-4">
        <Input
          prefix={<Search />}
          placeholder="Search Notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            height: 40,
          }}
        />
        <div className="space-y-2">
          {nclexCategories?.map((category: any) => (
            <CategoryItem
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              selectedSubcategory={selectedSubcategory}
              onCategorySelect={onCategorySelect}
              onSubcategorySelect={onSubcategorySelect}
              isExpanded={expandedCategories.has(category.id)}
              isMobile={!lg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
