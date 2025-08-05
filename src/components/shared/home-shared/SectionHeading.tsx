import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="w-full ">
      <h1 className="text-3xl lg:text-5xl font-bold text-[#0F172A] mb-8 max-w-[450px]">
        {title}
      </h1>
      <p className="text-[#0F172A] text-[14px] lg:text-[18px] leading-relaxed">{subtitle}</p>
    </div>
  );
}
