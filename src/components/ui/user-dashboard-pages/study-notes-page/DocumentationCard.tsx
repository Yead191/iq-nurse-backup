"use client";

import type React from "react";

import { useState } from "react";
import { BookFilled, FileTextOutlined } from "@ant-design/icons";
import { Documentation } from "@/data/medicalData";
import { BookmarkCheckIcon, BookmarkIcon } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

interface DocumentationCardProps {
  document: Documentation;
}

export default function DocumentationCard({
  document,
}: DocumentationCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(document.isBookmarked);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked((prev) => !prev);
    toast.success(
      isBookmarked ? "Removed from bookmarks" : "Added to bookmarks"
    );
  };

  return (
    <Link href={`/profile/study-notes/document/${document.id}`}>
      <div className="bg-[#EEF2F5] rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer pl-[3px] pt-[2px] pb-1 pr-[6px]">
        <div className="flex justify-between items-center bg-[#FFFFFF] rounded-[10px] px-6 py-2 h-full">
          <div className="flex items-center gap-4 flex-1">
            <div className="text-[#003877] text-2xl mt-1">
              <FileTextOutlined />
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1 text-lg">
                {document.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {document.description}
              </p>
              {/* <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span>
                Updated: {new Date(document.createdAt).toLocaleDateString()}
              </span>
              <span>•</span>
              <span>{document.readTime} min read</span>
            </div> */}
            </div>
          </div>

          <button
            onClick={toggleBookmark}
            className="text-gray-400 hover:text-[#003877] transition-colors duration-200 ml-4"
          >
            {isBookmarked ? (
              <BookmarkCheckIcon className="text-[#003877]" />
            ) : (
              <BookmarkIcon />
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}
