import React from "react";

interface CategoryCardProps {
  onCategoryChange: (categoryId: string) => void;
  category: { id: string; name: string; icon: React.ReactNode };
  selectedCategory: string;
}

export default function CategoryCard({
  onCategoryChange,
  category,
  selectedCategory,
}: CategoryCardProps) {
  return (
    <div
      onClick={() => onCategoryChange(category.id)}
      className={` border rounded-lg p-2 py-4 md:p-4 shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer w-full  flex flex-row items-center  gap-2 md:gap-4 ${
        selectedCategory === category.id
          ? "border-[#003877] bg-[#E6EBF1]"
          : "border-[#C5D0D0] bg-white hover:border-[#547AA4]/50"
      }`}
    >
      <div
        className={`rounded-[4px] p-2 md:p-3 inline-block transition-all duration-300 ${
          selectedCategory === category.id
            ? "bg-[#F6F7F8] "
            : "text-[#110D0D] bg-[#F6F7F8] group-hover:bg-[#F6F7F8] group-hover:text-white"
        }`}
      >
        <div className="text-2xl">{category.icon}</div>
      </div>
      <p
        className={` font-medium text-xs md:text-base text-start flex flex-wrap ${
          selectedCategory === category.id ? "text-black" : "text-gray-700"
        }`}
      >
        {category.name}
      </p>
    </div>
  );
}
