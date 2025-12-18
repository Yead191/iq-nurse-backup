"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: {
    id: string;
    title: string;
    questionCount: number;
    icon: string;
  };
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const circlePosition = index % 2 === 0 ? "top-left" : "bottom-right";

  return (
    <Link
      href={`/profile/tests/mode/practice?category=${category.id}`}
      className="group relative flex min-w-[140px] flex-col justify-start items-start overflow-hidden rounded-2xl p-4 pb-6 transition-transform hover:scale-105"
      style={{ backgroundColor: "#e6ecf2" }}
    >
      {/* Gradient Circle Background */}
      <div
        className="absolute h-32 w-32 rounded-full opacity-40"
        style={{
          background: "linear-gradient(180deg, #223672 1.38%, #3655AA 100%)",
          ...(circlePosition === "top-left"
            ? { top: "-40px", left: "-40px" }
            : { bottom: "-40px", right: "-40px" }),
        }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-3">
        <Image
          src={category.icon || "/placeholder.svg"}
          alt={category.title}
          width={200}
          height={200}
          draggable={false}
          className="h-12 w-fit object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mb-1 text-start text-sm lg:text-base font-bold text-[#02478D]">
        {category.title}
      </h3>

      {/* Question Count */}
      <p className="relative z-10 text-xs font-medium text-[#02478D]">
        {category.questionCount} Questions
      </p>
    </Link>
  );
}
