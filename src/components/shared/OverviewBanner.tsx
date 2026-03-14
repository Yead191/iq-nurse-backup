import { Activity, Heart, Thermometer, Stethoscope } from "lucide-react";
import React from "react";

export default function OverviewBanner({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: any;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#1B3E5F] via-[#122A44] to-[#0A1A2E] rounded-xl md:rounded-[24px] p-2 md:p-12 mb-10 overflow-visible h-[97px] md:h-[150px] lg:h-[200px] shadow-2xl flex ">
      {/* Decorative Dots Top Right */}
      <div className="absolute top-6 right-6 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#00A3FF]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#5C7285]" />
      </div>

      <div className="flex flex-row items-center gap-8 relative z-10 lg:w-full justify-between">
        {/* Robot Image */}
        <div className="relative w-[122px] md:w-[240px] lg:w-[280px] flex-shrink-0 -translate-y-3 lg:-translate-y-7.5 -translate-x-5 lg:-translate-x-0">
          {image}
        </div>

        {/* Text Content */}
        <div className="lg:flex-1 text-left -translate-x-12 lg:-translate-x-24 2xl:-translate-x-12">
          <h1 className="text-[16px] md:text-[28px] lg:text-[34px] font-bold text-white mb-2 md:mb-4 tracking-tight leading-none lg:leading-[37px] w-[160px] md:w-auto">
            {title || "Learn Smarter, Not Harder"}
          </h1>
          <p className="text-[#B0C4D6] text-[8px] leading-[12px] md:text-xl max-w-[150px] md:max-w-2xl lg:leading-[28px]">
            {description ||
              "NCLEX-focused notes covering every major nursing concept with clear breakdowns and clinical pearls."}
          </p>
        </div>

        {/* Right Side Icons Grid */}
        <div className="absolute bottom-1 lg:-bottom-8 right-3 lg:-right-8">
          <div className="grid grid-cols-2 gap-2 lg:gap-3  self-end items-end ">
            <div className="w-4 h-4 md:w-12 md:h-12 rounded-sm md:rounded-xl bg-[#2C4A6B]/50 border border-[#A3D133]/30 flex items-center justify-center backdrop-blur-sm">
              <Activity className="size-2 md:size-6 text-[#A3D133]" />
            </div>
            <div className="w-4 h-4 md:w-12 md:h-12 rounded-sm md:rounded-xl bg-[#2C4A6B]/50 border border-[#FF6B6B]/30 flex items-center justify-center backdrop-blur-sm">
              <Heart className="size-2 md:size-6 text-[#FF6B6B]" />
            </div>
            <div className="w-4 h-4 md:w-12 md:h-12 rounded-sm md:rounded-xl bg-[#2C4A6B]/50 border border-[#4CC9F0]/30 flex items-center justify-center backdrop-blur-sm">
              <Thermometer className="size-2 md:size-6 text-[#4CC9F0]" />
            </div>
            <div className="w-4 h-4 md:w-12 md:h-12 rounded-sm md:rounded-xl bg-[#2C4A6B]/50 border border-[#4361EE]/30 flex items-center justify-center backdrop-blur-sm">
              <Stethoscope className="size-2 md:size-6 text-[#4895EF]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bars */}
      <div className="absolute bottom-2 lg:bottom-6 left-1/2 md:left-auto md:ml-64 lg:ml-80 -translate-x-1/2 md:translate-x-0 flex items-center gap-3">
        <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-[#FFB800] to-transparent opacity-60" />
        <div className="w-10 h-1.5 rounded-full bg-gradient-to-r from-[#00A3FF] to-transparent opacity-40" />
        <div className="w-5 h-1.5 rounded-full bg-[#1F3A53]" />
      </div>
    </section>
  );
}
