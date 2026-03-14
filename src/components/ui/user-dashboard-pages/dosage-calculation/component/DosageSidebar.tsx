"use client";
import { topics } from "@/data/dosage-calculation/topic";
import { Search, LayoutDashboard } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export function DosageSidebar() {
  const router = useRouter();
  const { slug } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Separate home from other topics
  const otherTopics = filteredTopics.filter((t) => t.id !== "overview");
  const onSelectTopic = (topicId: string) => {
    router.push(`/profile/dosage-calculation/${topicId}`);
  };

  return (
    <aside className="w-64 2xl:w-80 bg-white border-r border-gray-200 flex flex-col px-4 h-[calc(100vh-90px)]">
      <button
        onClick={() => onSelectTopic("")}
        className={`flex items-center gap-2 w-full px-3 py-2 mb-3 text-sm font-medium rounded-md transition-colors ${
          slug === "overview" || !slug
            ? "bg-[#2C5F8D]/10 text-[#2C5F8D]"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <LayoutDashboard className="size-4" />
        <span>Overview</span>
      </button>

      <div className=" border-b border-gray-200 pb-4">
        <div className="mb-3">
          <h2 className="text-sm font-semibold text-[#2C5F8D]">
            NCLEX Dosage Calculator
          </h2>
          <p className="text-[9px] font-normal text-[#7f8c8d] leading-[14px]">
            {topics.length - 1} Study Topics
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full text-xs border border-[#8a8a8a] rounded-md h-8 focus:outline-none focus:ring-1 focus:ring-[#2C5F8D] placeholder:text-gray-400"
          />
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto pt-2 ">
        <ul className="space-y-1">
          {otherTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isSelected = slug === topic.id;
            const isPracticeTest = topic.id === "practice-test";

            return (
              <li key={topic.id}>
                {index === 1 && (
                  <div className="my-3 ">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-2 mb-2">
                      Study Notes
                    </p>
                  </div>
                )}
                <button
                  onClick={() => onSelectTopic(topic.id)}
                  className={`w-full flex items-center gap-3 px-2 py-1.5 rounded transition-colors ${
                    isSelected ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
                >
                  <Icon className="size-5 flex-shrink-0 text-[#2C5F8D]" />
                  <span
                    className={`flex-1 text-left text-xs ${
                      isSelected
                        ? "text-blue-700 font-medium"
                        : "text-gray-600 font-normal"
                    }`}
                  >
                    {topic.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-[10px] text-gray-600">
            <strong className="text-gray-700">Tip:</strong> Review each category
            thoroughly to build confidence for the NCLEX exam.
          </p>
        </div>
      </div>
    </aside>
  );
}
