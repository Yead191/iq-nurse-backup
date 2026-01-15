import Image from "next/image";
import React from "react";
interface TabSelectProps {
  tab: {
    id: string;
    label: string;
    imageSrc: string;
  };
  activeTab: string;
  handleTabClick: (tab: string) => void;
}

export default function TabSelect({
  tab,
  activeTab,
  handleTabClick,
}: TabSelectProps) {
  return (
    <div key={tab.id} className="cursor-pointer  w-[50px] md:w-auto">
      <div
        onClick={() => handleTabClick(tab.id)}
        className={` md:border rounded-lg   md:py-4 md:p-4 md:shadow-sm transition-all duration-300 hover:shadow-md group cursor-pointer w-full  flex flex-row items-center justify-between  gap-2 md:gap-4 ${
          activeTab === tab.id
            ? "border-white shadow-sm md:border-[#003877]/80 bg-white md:bg-[#E6EBF1]/80"
            : "border-[#C5D0D0]  hover:border-[#547AA4]/80"
        }`}
      >
        <p
          className={`hidden font-medium text-xs md:text-base text-start md:flex flex-wrap ${
            activeTab === tab.id ? "text-black" : "text-gray-700"
          }`}
        >
          {tab.label}
        </p>
        <div className="">
          <Image
            src={tab.imageSrc}
            alt="sidebar icon"
            className="md:w-10 md:h-10 w-14  p-2 md:p-0"
            height={10}
            width={10}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
