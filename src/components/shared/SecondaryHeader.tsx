import React from "react";

interface SecondaryHeaderProps {
  title: string;
}

export default function SecondaryHeader({ title }: SecondaryHeaderProps) {
  return (
    <div className="bg-[#2C5F8D] rounded-xl p-8 shadow-lg mb-6 ">
      <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
        {title}
      </h1>
    </div>
  );
}
