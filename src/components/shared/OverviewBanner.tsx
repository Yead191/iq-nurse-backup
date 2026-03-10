import { Activity, Heart, Thermometer, Stethoscope } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OverviewBanner({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#1B3E5F] via-[#122A44] to-[#0A1A2E] rounded-[24px] p-8 md:p-12 mb-10 overflow-visible lg:h-[200px] shadow-2xl flex ">
      {/* Decorative Dots Top Right */}
      <div className="absolute top-6 right-6 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#00A3FF]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#5C7285]" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Robot Image */}
        <div className="relative w-[180px] md:w-[240px] lg:w-[280px] flex-shrink-0 -translate-y-10 lg:-translate-y-7.5">
          <Image
            src={image || "/assets/images/overview-images/study-notes.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {title || "Learn Smarter, Not Harder"}
          </h1>
          <p className="text-[#B0C4D6] text-lg md:text-xl max-w-2xl leading-relaxed">
            {description ||
              "NCLEX-focused notes covering every major nursing concept with clear breakdowns and clinical pearls."}
          </p>
        </div>

        {/* Right Side Icons Grid */}
        <div className="grid grid-cols-2 gap-3  self-end">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2C4A6B]/50 border border-[#A3D133]/30 flex items-center justify-center backdrop-blur-sm">
            <Activity className="size-5 md:size-6 text-[#A3D133]" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2C4A6B]/50 border border-[#FF6B6B]/30 flex items-center justify-center backdrop-blur-sm">
            <Heart className="size-5 md:size-6 text-[#FF6B6B]" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2C4A6B]/50 border border-[#4CC9F0]/30 flex items-center justify-center backdrop-blur-sm">
            <Thermometer className="size-5 md:size-6 text-[#4CC9F0]" />
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#2C4A6B]/50 border border-[#4361EE]/30 flex items-center justify-center backdrop-blur-sm">
            <Stethoscope className="size-5 md:size-6 text-[#4895EF]" />
          </div>
        </div>
      </div>

      {/* Bottom Progress Bars */}
      <div className="absolute bottom-6 left-1/2 md:left-auto md:ml-64 lg:ml-80 -translate-x-1/2 md:translate-x-0 flex items-center gap-3">
        <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-[#FFB800] to-transparent opacity-60" />
        <div className="w-10 h-1.5 rounded-full bg-gradient-to-r from-[#00A3FF] to-transparent opacity-40" />
        <div className="w-5 h-1.5 rounded-full bg-[#1F3A53]" />
      </div>
    </section>
  );
}
