"use client";
import { useParams, useRouter } from "next/navigation";

import { ChevronRight, Search, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import {
  nursingSidebarItems,
  NavigationItem,
} from "@/data/nursing-assessment/nursingSidebarItems";

export default function NursingSidebar() {
  const router = useRouter();
  const params = useParams();
  const slug = params.id || params.slug;

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([
      "cardiovascular",
      "respiratory",
      "neurological",
      "heent",
      "gastrointestinal",
      "genitourinary",
      "musculoskeletal",
      "integumentary",
    ]),
  );
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const filterItems = (items: NavigationItem[]): NavigationItem[] => {
    if (!searchQuery) return items;

    return items.filter((item) => {
      const matchesSearch = item.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const hasMatchingChildren = item.children?.some((child) =>
        child.label.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return matchesSearch || hasMatchingChildren;
    });
  };
  const setActiveSection = (topicId: string) => {
    router.push(`/profile/patient-assessment/${topicId}`);
  };
  const renderTopLevelItem = (item: NavigationItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = slug === item.id;
    const Icon = item.icon;

    return (
      <div key={item.id}>
        {/* Level 1: System/Top-Level - Arrow on RIGHT */}
        <button
          onClick={() => {
            if (hasChildren) {
              toggleSection(item.id);
            }
          }}
          className={`w-full flex items-center gap-3 p-1 rounded transition-colors ${
            isActive ? "bg-blue-50" : "hover:bg-gray-50"
          }`}
        >
          {/* Icon - Left */}
          <div className="flex-shrink-0">
            {Icon && <Icon className="size-5 text-[#2C5F8D]" />}
          </div>

          {/* Text - Center (flex-1 expands to fill) */}
          <div className="flex-1 text-left">
            <p
              className={`text-sm font-semibold capitalize ${
                isActive ? "text-blue-700" : "text-[#2C5F8D]"
              }`}
            >
              {item.label}
            </p>
            {item.count !== undefined && (
              <p className="text-[9px] font-normal text-[#7f8c8d] leading-[14px]">
                {item.count} {item.count === 1 ? "Topic" : "Topics"}
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

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="ml-8 mt-1 space-y-0.5">
            {item.children!.map((child) => renderChildItem(child))}
          </div>
        )}
      </div>
    );
  };

  const renderChildItem = (item: NavigationItem) => {
    const isActive = slug === item.id;

    return (
      <button
        key={item.id}
        onClick={() => setActiveSection(item.id)}
        className={`w-full text-left px-2 py-1.5 rounded text-sm transition-colors ${
          isActive
            ? "bg-blue-50 text-blue-700 font-medium"
            : "text-gray-600 hover:bg-gray-50"
        }`}
      >
        <span>{item.label}</span>
      </button>
    );
  };

  const filteredData = filterItems(nursingSidebarItems);

  return (
    <div className="h-full flex flex-col bg-white w-full lg:w-64 2xl:w-80  lg:border-r lg:border-gray-200  lg:h-[calc(100vh-64px)] overflow-auto">
      {/* Home Button at the very top */}
      <div className="hidden lg:block lg:px-4 pt-4 pb-2 border-b border-gray-200 space-y-2">
        <button
          onClick={() => setActiveSection("")}
          className={`flex items-center gap-2 w-full px-3 py-2  text-sm font-medium rounded-md transition-colors ${
            slug === "overview" || !slug
              ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard className="size-4" />
          <span>Overview</span>
        </button>
        {/* <button
          onClick={() => setActiveSection("practice-test")}
          className={`flex items-center gap-3 w-full px-1 py-2 text-sm font-medium rounded-md transition-colors mt-2 ${
            slug === "practice-test"
              ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <ClipboardCheck className="size-5" />
          <span>Practice Test</span>
        </button> */}
      </div>

      {/* Search Bar */}
      <div className="lg:px-4 py-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full text-xs border border-[#8a8a8a] rounded-md h-8 px-3 focus:outline-none focus:ring-1 focus:ring-[#2C5F8D] placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto lg:px-4 py-4 space-y-2">
        {filteredData.map((item) => renderTopLevelItem(item))}
      </nav>
    </div>
  );
}
