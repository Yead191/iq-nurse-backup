"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import DocumentationCard from "../study-notes-page/DocumentationCard";
import { assessmentCategories } from "@/data/assessmentCategories";
import { Input } from "antd";

export default function AssessmentSidebar() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const defaultCategoryId = assessmentCategories[0].id;
  const defaultSubId = assessmentCategories[0].subcategories[0].id;

  const [expanded, setExpanded] = useState<string | null>(defaultCategoryId);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategoryId);
  const [selectedSub, setSelectedSub] = useState<string>(defaultSubId);

  useEffect(() => {
    router.replace(`/profile/patient-assessment/${defaultSubId}`);
  }, []);

  const toggleCategory = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
    setSelectedCategory(id);
  };

  const selectSub = (catId: string, sub: any) => {
    setSelectedCategory(catId);
    setSelectedSub(sub.id);

    router.push(`/profile/patient-assessment/${sub.id}`);
  };

  return (
    <aside className="w-80  h-[calc(100vh-120px)] overflow-y-auto p-3 boxShadow">
      <Input
        prefix={<Search />}
        placeholder="Search Notes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "24px",
          height: 40,
        }}
      />
      {assessmentCategories?.map((cat) => (
        <div key={cat.id} className="mb-2">
          {/* Category */}
          <div
            onClick={() => toggleCategory(cat.id)}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors
              ${
                selectedCategory === cat.id
                  ? "bg-[#E8EBFB] border border-[#02478D]"
                  : "hover:bg-gray-50"
              }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-md ${cat.color}`} />
              <div>
                <div className="font-medium text-gray-900 text-sm">
                  {cat.name}
                </div>
                <div className="text-xs text-gray-500">
                  {cat.topicCount} topics
                </div>
              </div>
            </div>

            {expanded === cat.id ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </div>

          {/* Subcategories */}
          {expanded === cat.id && (
            <div className="ml-2 mt-1 space-y-2">
              {cat.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectSub(cat.id, sub);
                  }}
                >
                  <DocumentationCard
                    document={sub}
                    selectedSubcategory={selectedSub}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
