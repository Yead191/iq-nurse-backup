"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { studyMaterialsData } from "@/data/home/studyMaterialsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function StudyMaterials() {
  const halfLength = Math.ceil(studyMaterialsData?.length / 2);
  const firstHalf = studyMaterialsData?.slice(0, halfLength);
  const secondHalf = studyMaterialsData?.slice(halfLength);

  return (
    <section className="mt-8">
      <SectionHeader title="Study Materials" className="mb-6" />

      {/* Mobile/Tablet Slider */}
      <div className="lg:hidden space-y-2  ">
        {/* First Row Slider */}
        <Swiper
          slidesPerView={2.2}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.2 },
          }}
          className="pb-2"
        >
          {firstHalf?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.link}
                className="flex flex-col items-center justify-center p-3 m-1.5 bg-white rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-md transition-all group h-[120px]"
              >
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#F4F8FF] rounded-[14px] mb-3 group-hover:scale-105 transition-transform">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    draggable={false}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-[14px] font-medium text-[#393938] text-center leading-tight px-1">
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row Slider */}
        <Swiper
          slidesPerView={2.2}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.2 },
          }}
          className="pb-4"
        >
          {secondHalf?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link
                href={item.link}
                className="flex flex-col items-center justify-center p-3 m-1.5 bg-white rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:shadow-md transition-all group h-[120px]"
              >
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#F4F8FF] rounded-[14px] mb-3 group-hover:scale-105 transition-transform">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    draggable={false}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span className="text-[14px] font-medium text-[#393938] text-center leading-tight px-1">
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-6">
        {studyMaterialsData?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all group min-h-[170px]"
          >
            <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#F4F8FF] rounded-[16px] mb-4 group-hover:scale-110 transition-transform">
              <Image
                src={item.icon}
                alt={item.title}
                width={30}
                height={30}
                draggable={false}
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="text-[15px] font-medium text-[#393938] text-center leading-tight">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
