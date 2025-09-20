"use client";

import { Button, Tooltip } from "antd";
import Image from "next/image";

interface Category {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
  image: string;
}

interface CategoryButtonsProps {
  categories: Category[];
  selectedCategory: Category;
  onCategorySelect: any;
}

export default function CategoryButtons({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryButtonsProps) {
  return (
    <div className="bg-white rounded-2xl p-4 2xl:p-6 ">
      <div className="grid grid-cols-6 md:grid-cols-6 gap-2 2xl:gap-4 items-center justify-center">
        {categories?.map((category) => {
          const isSelected = selectedCategory?.id === category.id;

          return (
            <Tooltip key={category.id} title={category.label} placement="top">
              <div className="!flex !items-center justify-center ">
                <Button
                  shape="circle"
                  size="large"
                  className={`
    relative !w-8 !h-10 2xl:!w-12 2xl:!h-12 !flex !items-center !justify-center border-2 transition-all duration-200 overflow-hidden !rounded-full  
    ${
      isSelected
        ? "!bg-[#003877DE] !border-transparent !shadow-lg !scale-105"
        : "bg-white !hover:border-gray-200 !border-[#000000] hover:bg-blue-50"
    }`}
                  onClick={() => onCategorySelect(category)}
                >
                  <span
                    className={`absolute inset-0 rounded-full ${
                      isSelected
                        ? "bg-[#003877DE]"
                        : "bg-white hover:bg-blue-50"
                    }`}
                  />

                  <Image
                    src={category?.icon}
                    alt={category.label}
                    width={28}
                    height={28}
                    className={`relative z-10 transition-all duration-200 
      ${isSelected ? "brightness-0 invert" : ""}
    `}
                  />
                </Button>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
