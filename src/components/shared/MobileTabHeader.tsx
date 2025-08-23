import React from "react";

interface MobileTabHeaderProps {
  title: string;
  subtitle?: string;
}
export default function MobileTabHeader({
  title,
  subtitle,
}: MobileTabHeaderProps) {
  return (
    <div className="bg-[#F6F7F8] border border-[#85A6CA] pl-4 py-2 mb-4 rounded-xl md:hidden">
      <h1 className=" text-[16px]">{title}</h1>
      <p className="text-[#7B7B7B] text-xs ">{subtitle} </p>
    </div>
  );
}
