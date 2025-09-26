import React from "react";

interface TestHeaderProps {
  title: string;
  subtitle?: string;
}
export default function TestHeader({ title, subtitle }: TestHeaderProps) {
  return (
    <div className="mb-8">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-[#000000] mb-2">{title}</h1>
      <p className="text-[#0000008A] text-lg">{subtitle}</p>
    </div>
  );
}
