import Image from "next/image";
import React from "react";

export default function BannerHome() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:min-h-[calc(100vh-76px)] py-12 lg:py-0">
      {/* left section */}
      <div className="max-w-[600px]">
        <h1 className="text-4xl lg:text-6xl font-bold text-center md:text-left   mb-6 mx-auto lg:mx-0 ">
          IQ-Nurse Your Ultimate Nursing App
        </h1>
        <p className="text-[#7B7B7B] text-[14px] md:text-[18px] text-center md:text-left">
          Your trusted partner in every heartbeat of your nursing journey. At
          IQ-Nurse, we believe that behind every great nurse is a foundation
          built on knowledge, compassion, and the quiet resilience to keep going
          even on the hardest days. That’s why our goal is simple: To make
          nursing education clearer, smarter, and built around what you actually
          need. <br className="hidden md:block" />{" "}
          <br className="hidden lg:block" /> <br className="hidden lg:block" />{" "}
          Whether you're pulling your first all-nighter for nursing school or
          catching a study break between hospital shifts, we know what it takes
          to show up for this profession — and how heavy that can feel without
          the right support.
        </p>
      </div>
      {/* right section */}
      <div className="flex justify-end ">
        <Image
          src={"/assets/home-images/banner-img.svg"}
          width={600}
          height={627}
          alt="banner-img"
          className="h-full w-full"
          unoptimized
        />
      </div>
    </div>
  );
}
