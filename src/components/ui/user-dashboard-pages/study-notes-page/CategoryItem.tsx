"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MedicalCategory } from "@/data/nclexCategories";
import DocumentationCard from "./DocumentationCard";

interface CategoryItemProps {
  category: MedicalCategory;
  isSelected: boolean;
  selectedSubcategory?: string;
  onCategorySelect: (categoryId: string) => void;
  onSubcategorySelect: (categoryId: string, subcategoryId: string) => void;
  isMobile?: boolean;
}

export function CategoryItem({
  category,
  isSelected,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
  isMobile = false,
}: CategoryItemProps) {
  const [isExpanded, setIsExpanded] = useState(isSelected);

  const handleCategoryClick = () => {
    onCategorySelect(category.id);
    if (category.subcategories && category.subcategories.length > 0) {
      //   onCategorySelect(category.id);
      setIsExpanded(!isExpanded);
    }
  };

  const categoryClasses = `flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors  ${
    isSelected
      ? "bg-[#E8EBFB] hover:bg-[#E8EBFB] border border-[#02478D]"
      : "hover:bg-gray-50"
  }`;

  return (
    <div className="mb-1">
      {/* Main Category */}
      <div className={categoryClasses} onClick={handleCategoryClick}>
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
              <ChevronDown className={`${isMobile ? "w-5 h-5" : "w-4 h-4"}`} />
            ) : (
              <ChevronRight className={`${isMobile ? "w-5 h-5" : "w-4 h-4"}`} />
            )}
          </div>
        )}
      </div>

      {/* Subcategories */}
      {category.subcategories && isExpanded && (
        <div className="ml-1 mt-1 ">
          {category.subcategories.map((subcategory: any) => {
            const subcategoryClasses = ` rounded-md cursor-pointer transition-colors hover:bg-gray-50 ${
              isMobile ? "p-3" : "p-1"
            }`;

            return (
              <div
                key={subcategory.id}
                className={subcategoryClasses}
                onClick={(e) => {
                  e.stopPropagation();
                  onSubcategorySelect(category.id, subcategory.id);
                }}
              >
                {/* <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                  <span
                    className={`font-medium ${
                      isMobile ? "text-base" : "text-sm"
                    }`}
                  >
                    {subcategory.name}
                  </span>
                </div>
                <span
                  className={`text-gray-500 ${
                    isMobile ? "text-sm" : "text-xs"
                  }`}
                >
                  {subcategory.topicCount}
                </span> */}
                <DocumentationCard
                  document={subcategory}
                  selectedSubcategory={selectedSubcategory}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
