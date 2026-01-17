"use client";

import { clinicalCalculatorData } from "@/data/clinicalCalculatorData";
import { BookmarkIcon, ChevronDown, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Grid, Input } from "antd";

export default function CalculatorCategoryList() {
  const { getCaluclatorData } = clinicalCalculatorData;
  const router = useRouter();
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const [searchText, setSearchText] = useState("");

  const defaultCategoryId = getCaluclatorData.categories[0].id;
  const defaultToolId = getCaluclatorData.categories[0].tools[0].id;

  const [expanded, setExpanded] = useState<string | null>(defaultCategoryId);
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategoryId);

  // selected tool from URL
  const selectedTool = pathname.split("/").pop() || defaultToolId;

  // Auto redirect on large screen
  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/clinical-calculator" ||
      last === "clinical-calculator";

    if (lg && isBasePath) {
      router.replace(`/profile/clinical-calculator/${defaultToolId}`);
    }
  }, [lg, pathname, defaultToolId, router]);

  // Hide sidebar on mobile when tool is selected
  const hideOnMobile = !lg && pathname.split("/").length > 3;
  if (hideOnMobile) return null;
  const isBookmarked = false;
  return (
    <aside
      className={`p-3 lg:w-64 2xl:w-80 w-full boxShadow h-full lg:h-[calc(100vh-77px)] overflow-y-auto -mt-6`}
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
      {getCaluclatorData.categories.map((cat) => (
        <div key={cat.id} className="mb-2">
          {/* CATEGORY */}
          <div
            onClick={() => {
              setExpanded((prev) => (prev === cat.id ? null : cat.id));
              setSelectedCategory(cat.id);
            }}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors
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
                width={80}
                height={80}
                draggable={false}
                className="w-9 h-fit"
              />
              <div>
                <div className="font-medium text-gray-900 text-sm">
                  {cat.title}
                </div>
                <div className="text-xs text-gray-500">
                  {cat.tools.length} tools
                </div>
              </div>
            </div>

            {expanded === cat.id ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </div>

          {/* TOOLS */}
          {expanded === cat.id && (
            <div className="ml-2 mt-1 space-y-2">
              {cat.tools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/profile/clinical-calculator/${tool.id}`);
                  }}
                >
                  <div className="bg-[#EEF2F5] rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer pl-[2px] pt-[2px] pb-0.5 pr-[4px] ">
                    <div
                      className={`flex justify-between items-center 
         ${
           selectedTool === tool.id
             ? "bg-[#E8EBFB] text-[#2C5F8D] "
             : "bg-white"
         }
         rounded-[10px] px-4 py-2 h-full`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="text-[#2C5F8D] text-sm ">
                          <Image
                            src="/assets/icons/calculator.svg"
                            alt="NCLEX"
                            width={50}
                            height={50}
                            draggable={false}
                            className="w-6 h-fit "
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-medium  text-sm">{tool.name}</h3>
                        </div>
                      </div>

                      <button className="text-gray-400 hover:text-[#2C5F8D] transition-colors duration-200 ml-4 text-sm">
                        {isBookmarked ? (
                          <BookmarkIcon
                            className="text-[#2C5F8D] fill-current"
                            size={16}
                          />
                        ) : (
                          <BookmarkIcon size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
