"use client";

import { templateData } from "@/data/templatesData";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { Grid } from "antd";

export type CategoryState = {
  categoryId: string | null;
  templeteId: string | null;
};

interface IProps {
  setCategories: React.Dispatch<React.SetStateAction<CategoryState>>;
  setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export default function TempleteList({
  setCategories,
  setIsSideBarSelect,
  searchText,
  setSearchText,
}: IProps) {
  const { getTemplateData } = templateData;
  const { lg } = Grid.useBreakpoint();

  const firstCategory = getTemplateData.categories[0];
  const firstTemplate = firstCategory?.templates[0];

  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  // ⚡ Initial auto-select on large screens
  useEffect(() => {
    if (!lg) return;

    // Expand first category
    setExpanded(firstCategory.id);

    // Select 1st category + 1st template
    if (firstCategory && firstTemplate) {
      setCategories({
        categoryId: firstCategory.id,
        templeteId: firstTemplate.id,
      });
    }
  }, [lg]);

  return (
    <aside className="w-full bg-white sm:border-r border-gray-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">
      {/* Search */}
      <div className="mb-4 flex items-center gap-2 border border-gray-300 rounded-md px-3 py-3 bg-white">
        <IoSearchOutline className="text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search templates..."
          className="w-full text-sm focus:outline-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="space-y-6 max-h-[calc(100vh-175px)] overflow-y-auto">
        {getTemplateData?.categories.map((cat) => {
          const isOpen = expanded === cat.id;

          return (
            <div key={cat.title}>
              {/* Header with toggle */}
              <div
                onClick={() => toggleCategory(cat.id)}
                className="flex items-center justify-between cursor-pointer border-b-2 pb-1 border-b-gray-200 mb-2.5"
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  {cat.title}
                </h3>

                {isOpen ? (
                  <Minus className="w-4 h-4 text-gray-500 mb-2" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-500 mb-2" />
                )}
              </div>

              {/* Collapsible template list */}
              {isOpen && (
                <div className="space-y-2 px-1 pb-2 transition-all ease-in-out">
                  {cat?.templates?.map((tpl) => (
                    <button
                      onClick={() => {
                        setCategories({
                          categoryId: cat.id,
                          templeteId: tpl.id,
                        });
                        setIsSideBarSelect((prev) => !prev);
                      }}
                      key={tpl.id}
                      className="flex cursor-pointer items-start w-full rounded-lg p-3 text-left hover:shadow-md transition bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {/* Icon */}
                      <div
                        style={{ background: tpl.color }}
                        className="w-8 h-8 rounded-md flex-shrink-0 mr-3"
                      ></div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-900">
                          {tpl.name}
                        </span>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {tpl.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
