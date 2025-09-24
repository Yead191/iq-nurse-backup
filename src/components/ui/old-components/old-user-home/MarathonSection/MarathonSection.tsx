"use client";

import { useEffect } from "react";
import PracticeCard from "./PracticeCard";
import { practiceData } from "@/data/userHome";

export default function MarathonSection() {
  useEffect(() => {
    const initSwiper = async () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        const { Swiper } = await import("swiper");
        const { Pagination } = await import("swiper/modules");

        new Swiper(".practiceSwiper", {
          modules: [Pagination],
          slidesPerView: 1.2,
          spaceBetween: 16,
          centeredSlides: false,
          // pagination: {
          //   el: ".swiper-pagination",
          //   clickable: true,
          // },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }
    };

    initSwiper();
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
      />
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

      <div className="bg-white rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            NCLEX Marathon Practice
          </h2>
          <button className="text-[#7B7B7B] font-medium">See All</button>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {practiceData?.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden h-full">
          <div className="swiper practiceSwiper">
            <div className="swiper-wrapper h-full">
              {practiceData?.map((practice) => (
                <div key={practice.id} className="swiper-slide h-full">
                  <PracticeCard practice={practice} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
