"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import DocumentationCard from "./DocumentationCard";

interface CategoryItemProps {
  category: any;
  isSelected: boolean;
  selectedSubcategory?: string;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (categoryId: string, subcategoryId: string) => void;
  isExpanded?: boolean;
  isMobile?: boolean;
}

export function CategoryItem({
  category,
  isSelected,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  isExpanded = false,
  isMobile = false,
}: CategoryItemProps) {
  const handleCategoryClick = () => {
    onCategorySelect(category.id);
  };

  return (
    <div className="mb-1">
      {/* Main Category */}
      <div
        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors  ${
          isSelected
            ? "bg-[#E8EBFB] hover:bg-[#E8EBFB] border border-[#02478D]"
            : "hover:bg-gray-50"
        }`}
        onClick={handleCategoryClick}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-md ${category.color}`} />
          <div>
            <div
              className={`font-medium text-gray-900 ${
                isMobile ? "text-base" : "text-sm"
              }`}
            >
              {category.name}
            </div>
            <div
              className={`text-gray-500 ${isMobile ? "text-sm" : "text-xs"}`}
            >
              {category.topicCount} topics
            </div>
          </div>
        </div>

        {category.subcategories && category.subcategories.length > 0 && (
          <div className="text-gray-400">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>
        )}
      </div>

      {/* Subcategories */}
      {category.subcategories && isExpanded && (
        <div className="ml-1 mt-1">
          {category.subcategories.map((subcategory: any) => (
            <div
              key={subcategory.id}
              className={`rounded-md cursor-pointer transition-colors p-1 hover:bg-gray-50`}
              onClick={(e) => {
                e.stopPropagation();
                onSubcategorySelect(category.id, subcategory.id);
              }}
            >
              <DocumentationCard
                document={subcategory}
                selectedSubcategory={selectedSubcategory}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
