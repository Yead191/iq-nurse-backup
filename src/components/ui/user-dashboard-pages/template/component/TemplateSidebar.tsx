"use client";

import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { Input, Grid } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TemplateData } from "@/data/templatesData";
import DocumentationCard from "@/components/shared/DocumentationCard";

interface Item {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
  topicCount: number;
  items: Item[];
}

interface Props {
  basePath: string; // "/profile/templates"
}

export default function TemplateSidebar({ basePath }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();

  const [expanded, setExpanded] = useState<string | null>(
    TemplateData.categories[0]?.id,
  );
  const [searchText, setSearchText] = useState("");

  const defaultItemId = TemplateData.categories[0]?.templates[0]?.id;
  const defaultCategoryId = TemplateData.categories[0].id;

  const selectedItem = pathname.split("/").pop();
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategoryId);

  // Auto redirect on desktop
  useEffect(() => {
    if (lg && pathname === basePath && defaultItemId) {
      router.replace(`${basePath}/${defaultItemId}`);
    }
  }, [lg, pathname, basePath, defaultItemId, router]);

  // Hide sidebar on mobile when item selected
  const hideOnMobile = !lg && pathname.split("/").length > 3;
  if (hideOnMobile) return null;

  return (
    <aside
      className={`p-3 lg:w-64 2xl:w-80 w-full boxShadow h-full lg:h-[calc(100vh-64px)] overflow-y-auto `}
    >
      <Input
        prefix={<Search />}
        placeholder="Search Notes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "24px",
          height: 40,
          marginTop: "24px",
        }}
      />
      {TemplateData.categories.map((cat) => (
        <div key={cat.id} className="mb-2">
          {/* CATEGORY */}
          <div
            onClick={() => {
              setExpanded((prev) => (prev === cat.id ? null : cat.id));
              setSelectedCategory(cat.id);
            }}
            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer
               ${
                 selectedCategory === cat.id
                   ? "bg-[#E8EBFB] border border-[#02478D]"
                   : "hover:bg-gray-50"
               }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/assets/icons/folder-ico.svg"
                alt="folder"
                width={36}
                height={36}
              />
              <div>
                <p className="text-sm font-medium">{cat?.title}</p>
                <p className="text-xs text-gray-500">
                  {cat?.templates?.length} templates
                </p>
              </div>
            </div>

            {expanded === cat.id ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>

          {/* ITEMS */}
          {expanded === cat.id && (
            <div className="ml-3 mt-2 space-y-1">
              {cat?.templates?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(`${basePath}/${item.id}`)}
                >
                  <DocumentationCard
                    document={item}
                    selectedSubcategory={selectedItem}
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
