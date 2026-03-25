"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Search, ChevronRight, LayoutDashboard } from "lucide-react";
import { EcgItem, ecgItems } from "@/data/ecg-new/ecg-items";
import Image from "next/image";

export function EcgSidebar() {
  const router = useRouter();
  const { slug } = useParams();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "foundations",
    "normal-sinus",
    "atrial-arrhythmias",
    "heart-blocks",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const onTopicSelect = (topicId: string) => {
    router.push(`/profile/ecg-mastery/${topicId}`);
  };
  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Count children for each parent item
  const getChildCount = (item: EcgItem) => {
    return item.children?.length || 0;
  };

  const renderNavItem = (item: EcgItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.id);
    const isSelected = slug === item.id;
    const isParent = level === 0;

    return (
      <div key={item.id}>
        {/* Parent/System Level Item */}
        {isParent && (
          <button
            onClick={() => {
              if (hasChildren) {
                toggleExpanded(item.id);
              }
            }}
            className="w-full flex items-center gap-3 p-1 hover:bg-gray-50 rounded transition-colors"
          >
            {/* Icon - Left */}
            {item.icon && <div className="flex-shrink-0">{item.icon}</div>}

            {/* Text - Center (flex-1 expands to fill) */}
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-[#2C5F8D] capitalize">
                {item.label}
              </p>
              {hasChildren && (
                <p className="text-[9px] font-normal text-[#7f8c8d] leading-[14px]">
                  {getChildCount(item)} Topics
                </p>
              )}
            </div>

            {/* Chevron - Right (auto pushed by flex-1) */}
            {hasChildren && (
              <ChevronRight
                className={`size-4 text-gray-400 transition-transform ${
                  isExpanded ? "rotate-90" : "rotate-0"
                }`}
              />
            )}
          </button>
        )}

        {/* Child/Subcategory Level Item */}
        {!isParent && (
          <button
            onClick={() => onTopicSelect(item.id)}
            className={`w-full text-left px-2 py-1.5 rounded text-xs transition-colors ${
              isSelected
                ? "bg-blue-50 text-blue-700 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.label}
          </button>
        )}

        {/* Render Children */}
        {hasChildren && isExpanded && (
          <div className="mt-1 ml-8 space-y-0.5">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full lg:w-64 2xl:w-80 h-full bg-white lg:border-r lg:border-gray-200 flex flex-col lg:p-4 lg:h-[calc(100vh-64px)]">
      {/* Home Button */}
      <button
        onClick={() => onTopicSelect("")}
        className={`hidden lg:flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          slug === "overview" || !slug
            ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <LayoutDashboard className="size-4" />
        <span>Overview</span>
      </button>

      {/* Search Bar */}
      <div className="py-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="search Clinical Skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-xs border border-[#8a8a8a] rounded-md outline-none focus:border-[#2C5F8D] transition-colors placeholder:text-gray-400"
          />
        </div>
        {/* Practice Strips Button */}
        <button
          onClick={() => onTopicSelect("practice-strips")}
          className={`flex items-center gap-2 w-full px-3 py-2 text-sm font-medium rounded-md transition-colors mt-2 ${
            slug === "practice-strips"
              ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Image
            width={20}
            height={20}
            src={"/assets/icons/ecg/ecgIcon.svg"}
            alt=""
            className="h-[20px] w-fit object-contain"
          />
          <span>Practice Strips</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1">
          {ecgItems?.map((item) => renderNavItem(item))}
        </nav>
      </div>
    </div>
  );
}
