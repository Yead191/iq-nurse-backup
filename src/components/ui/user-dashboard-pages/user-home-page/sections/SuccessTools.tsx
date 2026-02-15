"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import { successToolsData } from "@/data/home/successToolsData";

export default function SuccessTools() {
  return (
    <section className="my-8">
      <SectionHeader title="Success Tools" className="mb-6" />
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-2">
        {successToolsData?.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`${item.bgColor} p-4 lg:p-6 rounded-[20px] flex flex-col gap-4 hover:opacity-90 transition-opacity h-full`}
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center bg-white rounded-[14px] shadow-sm">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="w-5 h-5 lg:w-7 lg:h-7 object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[16px] lg:text-[18px] font-bold text-[#1E293B]">
                {item.title}
              </h3>
              <p className="text-xs lg:text-[14px] text-[#64748B]">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
