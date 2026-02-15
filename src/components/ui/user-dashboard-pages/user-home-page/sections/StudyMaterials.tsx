"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { studyMaterialsData } from "@/data/home/studyMaterialsData";

export default function StudyMaterials() {
  return (
    <section className="mt-8 ">
      <SectionHeader title="Study Materials" className="mb-6" />
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4">
        {studyMaterialsData?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex flex-col items-center justify-center p-2  lg:p-6 bg-[#F9F6F4] lg:bg-white rounded-[7px] lg:rounded-[20px] boxShadow hover:shadow-md transition-shadow group h-[100px] lg:h-full"
          >
            <div className="lg:w-[52px] lg:h-[52px] flex items-center justify-center bg-[#F4F8FF] rounded-[14px] mb-4 group-hover:scale-110 transition-transform">
              <Image
                src={item.icon}
                alt={item.title}
                width={32}
                height={32}
                draggable={false}
                className="lg:w-7 lg:h-7 w-5 h-5 object-contain"
              />
            </div>
            <span className="text-xs lg:text-[14px] font-medium text-[#393938] text-center leading-tight">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
