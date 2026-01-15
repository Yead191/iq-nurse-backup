"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { MedicalCategory } from "@/data/medicalData";
import CategoryCard from "./CategoryCard";

interface CategorySwiperProps {
  categories: MedicalCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategorySwiper({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategorySwiperProps) {
  const swiperRef = useRef<any>(null);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <div className="relative mb-8 w-full overflow-hidden">
      {/* Navigation Buttons - Top Right */}
      <div className="flex justify-end mb-6">
        <div className="md:flex items-center gap-5 bg-[#F6F7F8] shadow-md px-4 py-2 rounded-[8px] hidden ">
          <button
            onClick={goPrev}
            className="p-2 rounded-[3px] bg-[#0038771A] hover:bg-[#003877] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            className="p-2 rounded-[3px] bg-[#0038771A] hover:bg-[#003877] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1200: { slidesPerView: 4 },
          1580: { slidesPerView: 6 },
        }}
        className="category-swiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center w-full">
              <CategoryCard
                onCategoryChange={onCategoryChange}
                category={category}
                selectedCategory={selectedCategory}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
