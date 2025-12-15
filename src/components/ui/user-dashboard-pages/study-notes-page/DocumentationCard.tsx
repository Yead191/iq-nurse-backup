"use client";

import type React from "react";

import { useState } from "react";
import { FileTextOutlined } from "@ant-design/icons";
import { BookmarkIcon } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface DocumentationCardProps {
  document: any;
  selectedSubcategory?: string;
}

export default function DocumentationCard({
  document,
  selectedSubcategory,
}: DocumentationCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(document.isBookmarked);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked((prev: any) => !prev);
    toast.success(
      isBookmarked ? "Removed from bookmarks" : "Added to bookmarks"
    );
  };

  return (
    <div className="bg-[#EEF2F5] rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer pl-[2px] pt-[2px] pb-0.5 pr-[4px] ">
      <div
        className={`flex justify-between items-center 
         ${
           selectedSubcategory === document.id
             ? "bg-[#E8EBFB] text-[#003877] "
             : "bg-white"
         }
         rounded-[10px] px-4 py-2 h-full`}
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="text-[#003877] text-sm ">
            <Image
              src="/assets/icons/document.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-4 h-fit "
            />
          </div>

          <div className="flex-1">
            <h3 className="font-medium  text-sm">{document.name}</h3>
          </div>
        </div>

        <button
          onClick={toggleBookmark}
          className="text-gray-400 hover:text-[#003877] transition-colors duration-200 ml-4 text-sm"
        >
          {isBookmarked ? (
            <BookmarkIcon className="text-[#003877] fill-current" size={16} />
          ) : (
            <BookmarkIcon size={16} />
          )}
        </button>
      </div>
    </div>
  );
}
