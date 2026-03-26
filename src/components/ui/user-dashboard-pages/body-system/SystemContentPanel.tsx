import React, { useState } from "react";
import { Search } from "lucide-react";

interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
}

interface SystemContentPanelProps {
  selectedSystem: BodySystem;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function SystemContentPanel({
  selectedSystem,
  activeTab,
  setActiveTab,
}: SystemContentPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["Overview", "Physiology", "Clinical"];

  const getDemoData = (tab: string, system: string) => {
    if (tab === "Overview") return selectedSystem.description;

    if (tab === "Physiology") {
      return [
        `The physiology of the ${system} involves complex interactions between various cellular and molecular components.`,
        "Key physiological processes include signaling pathways, metabolic regulations, and structural adaptations to maintain homeostasis.",
        `In the context of the ${system}, understanding these processes is crucial for clinical assessment and intervention strategies.`,
      ];
    }

    if (tab === "Clinical") {
      return [
        `Clinical presentation in the ${system} can vary widely depending on the underlying pathology.`,
        "Assessment often involves a combination of physical examination, laboratory tests, and imaging studies.",
        "Management strategies focus on addressing the root cause while alleviating symptoms and preventing future complications.",
      ];
    }

    return [];
  };

  const content = getDemoData(activeTab, selectedSystem.title);

  return (
    <section
      style={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white rounded-[2rem] border border-gray-100 flex flex-col h-full overflow-hidden"
    >
      {/* Tabs */}
      <div className="px-8 pt-6 pb-2 flex gap-8 border-b border-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-3 text-lg font-medium transition-colors ${
              activeTab === tab ? "text-[#ef4444]" : "text-gray-400"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ef4444] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="px-6 py-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for s structure...."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#f3f4f6] border-none rounded-xl py-3 pl-12 pr-4 text-gray-600 focus:ring-2 focus:ring-red-100 transition-all outline-none"
          />
        </div>
      </div>

      {/* Content Area */}
      <div
        className="flex-1 overflow-y-auto px-8 pb-8 
        [&::-webkit-scrollbar]:w-2 
        [&::-webkit-scrollbar-track]:bg-gray-100 
        [&::-webkit-scrollbar-track]:rounded-full 
        [&::-webkit-scrollbar-thumb]:bg-gray-400 
        [&::-webkit-scrollbar-thumb]:rounded-full 
        [&::-webkit-scrollbar-thumb]:border-2 
        [&::-webkit-scrollbar-thumb]:border-gray-100 
        hover:[&::-webkit-scrollbar-thumb]:bg-gray-500 max-h-[calc(100vh-280px)]"
      >
        <div className="space-y-4 pt-4">
          {content
            .filter((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] text-[#1A1A1A] leading-[1.6]"
              >
                {paragraph}
              </p>
            ))}
          {/* Duplicate some content if search is empty to show scroll as per image */}
          {!searchQuery &&
            content.map((paragraph, index) => (
              <p
                key={`dup-${index}`}
                className="text-[15px] text-[#1A1A1A] leading-[1.6]"
              >
                {paragraph}
              </p>
            ))}
          {content.filter((p) =>
            p.toLowerCase().includes(searchQuery.toLowerCase()),
          ).length === 0 && (
            <p className="text-gray-400 text-center py-10">No matches found</p>
          )}
        </div>
      </div>
    </section>
  );
}
