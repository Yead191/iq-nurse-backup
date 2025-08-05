import React from "react";

interface SecondaryHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SecondaryHeading({
  title,
  subtitle,
}: SecondaryHeadingProps) {
  return (
    <div className="lg:text-center mb-12">
      <h1 className="text-2xl lg:text-4xl font-bold text-[#110D0D] mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[#0F172A] text-[14px] lg:text-lg">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
      )}
    </div>
  );
}
