"use client";

import { useState, useEffect } from "react";
import { clinicalSkils } from "@/data/clinical-skills-data";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { Grid, Input } from "antd";
import DocumentationCard from "../study-notes-page/DocumentationCard";
import Image from "next/image";

export default function SkillSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const { lg } = Grid.useBreakpoint();
  const { getClinicalSkillsData } = clinicalSkils;
  const defaultToolId = getClinicalSkillsData[0].skills[0].id;

  const [searchText, setSearchText] = useState("");

  const currentSkillId = params?.id as string;

  // Find which category contains the current skill to auto-expand
  const activeCategory = getClinicalSkillsData.find((cat) =>
    cat.skills.some((skill) => skill.id === currentSkillId)
  );

  const [expanded, setExpanded] = useState<string | null>(
    activeCategory?.id || getClinicalSkillsData[0]?.id
  );

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    activeCategory?.id || getClinicalSkillsData[0]?.id
  );

  // Auto redirect on large screen
  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/clinicals" || last === "clinicals";

    if (lg && isBasePath) {
      router.replace(`/profile/clinicals/${defaultToolId}`);
    }
  }, [lg, pathname, defaultToolId, router]);

  const toggleCategory = (id: string) => {
    setExpanded((prev) => (prev === id ? null : id));
    setSelectedCategory(id);
  };

  const filteredData = getClinicalSkillsData.filter(
    (cat) =>
      cat.title.toLowerCase().includes(searchText.toLowerCase()) ||
      cat.skills.some((skill) =>
        skill.name.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  // Hide sidebar on mobile when tool is selected
  const hideOnMobile = !lg && pathname.split("/").length > 3;
  if (hideOnMobile) return null;
  return (
    <aside
      className={`lg:h-[calc(100vh-80px)] overflow-y-auto p-3 boxShadow -mt-6 
      ${lg ? "lg:w-64 2xl:w-80" : "w-full"}`}
    >
      <Input
        prefix={<Search />}
        placeholder="Search Clinical Skills..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "24px",
          height: 40,
          marginTop: "12px",
        }}
      />

      {/* Categories */}
      <div className="flex flex-col gap-2">
        {filteredData?.map((cat, index) => (
          <div key={index + 1} className="mb-1">
            <div
              onClick={() => toggleCategory(cat.id)}
              className={`p-3 rounded-lg flex cursor-pointer items-center justify-between transition-colors ${
                selectedCategory === cat.id
                  ? "bg-[#E8EBFB] border border-[#02478D]"
                  : "hover:bg-gray-50 text-gray-800"
              }`}
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="/assets/icons/folder-ico.svg"
                  alt="folder"
                  width={80}
                  height={80}
                  draggable={false}
                  className="w-9 h-fit"
                />

                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {cat.skills.length} notes
                  </span>
                </div>
              </div>

              {expanded === cat.id ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>

            {/* Subcategories (Skills) */}
            {expanded === cat.id && (
              <div className="ml-2 mt-1 space-y-2">
                {cat.skills
                  .filter((skill) =>
                    skill.name.toLowerCase().includes(searchText.toLowerCase())
                  )
                  .map((skill) => (
                    <div
                      key={skill.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/profile/clinicals/${skill.id}`);
                      }}
                    >
                      <DocumentationCard
                        document={skill}
                        selectedSubcategory={currentSkillId}
                      />
                    </div>
                  ))}
                {cat.skills.length === 0 && (
                  <div className="text-xs text-gray-400 italic p-2">
                    No skills available
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
