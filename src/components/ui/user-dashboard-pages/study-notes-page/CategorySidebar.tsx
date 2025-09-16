"use client";

import { useState } from "react";
import { medicalCategories } from "@/data/medicalData";
import { ChevronDown, ChevronRight } from "lucide-react";

interface CategorySidebarProps {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function CategorySidebar({
  selectedId,
  onSelect,
}: CategorySidebarProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <aside className="w-64 bg-white rounded-xl border p-3 shadow-sm h-full">
      <h2 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
        NCLEX Categories
      </h2>

      <nav className="space-y-2">
        {medicalCategories.map((cat) => (
          <div key={cat.id}>
            {/* Main Category Button */}
            <button
              onClick={() => toggleCategory(cat.id)}
              className={`flex items-center justify-between w-full rounded-lg px-3 py-2 text-sm font-medium transition ${
                openCategory === cat.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{cat.icon}</span>
                {cat.name}
              </span>
              {openCategory === cat.id ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* Subcategories (IDs list) */}
            {openCategory === cat.id && (
              <div className="ml-8 mt-1 space-y-1">
                {Array.from({ length: 4 }).map((_, idx) => {
                  const subId = `${cat.id}-doc-${idx + 1}`;
                  return (
                    <button
                      key={subId}
                      onClick={() => onSelect(subId)}
                      className={`block w-full text-left rounded-md px-2 py-1.5 text-sm transition ${
                        selectedId === subId
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {cat.name} {idx + 1}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
