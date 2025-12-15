"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, Folder, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { carePlansCategories } from "@/data/carePlansCategories";
import { Input, Grid } from "antd";
import DocumentationCard from "../../study-notes-page/DocumentationCard";

export default function CarePlanSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();

  const [searchText, setSearchText] = useState("");

  const defaultCategoryId = carePlansCategories[0].id;
  const defaultSubId = carePlansCategories[0].subcategories[0].id;

  const [expanded, setExpanded] = useState<string | null>(defaultCategoryId);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategoryId);

  // Determine selected sub from URL
  const selectedSub = pathname.split("/").pop() || defaultSubId;

  // Redirect ONLY on large screen
  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/care-plans" || last === "care-plans";

    if (lg && isBasePath) {
      router.replace(`/profile/care-plans/${defaultSubId}`);
    }
  }, [lg, pathname, defaultSubId, router]);

  const toggleCategory = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
    setSelectedCategory(id);
  };

  const selectSub = (catId: string, sub: any) => {
    setSelectedCategory(catId);
    router.push(`/profile/care-plans/${sub.id}`);
  };

  // Hide sidebar on mobile if there's a subcategory in the URL
  const hideOnMobile = !lg && pathname.split("/").length > 3;

  if (hideOnMobile) return null;

  return (
    <aside
      className={`lg:h-[calc(100vh-120px)] overflow-y-auto p-3 boxShadow -mt-6 md:mt-0
      ${lg ? "w-80" : "w-full"}`}
    >
      <Input
        prefix={<Search />}
        placeholder="Search Care Plans..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "24px",
          height: 40,
          marginTop: "12px",
        }}
      />
      {carePlansCategories?.map((cat) => (
        <div key={cat.id} className="mb-2">
          {/* CATEGORY HEADER */}
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
              <Folder
                style={{ color: cat.color }}
                className={`w-8 h-8 fill-current`}
              />
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

          {/* SUBCATEGORIES */}
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
