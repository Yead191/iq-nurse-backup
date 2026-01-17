"use client";

import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { Input, Grid } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ECGMasteryData } from "@/data/ecg/foundation/ecgMasteryData";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function ECGSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const [expanded, setExpanded] = useState<string | null>(
    ECGMasteryData[0]?.id
  );
  const defaultCategoryId = ECGMasteryData[0].id;
  const defaultToolId = ECGMasteryData[0].items[0].id;

  const [searchText, setSearchText] = useState("");
  const selectedTool = pathname.split("/").pop() || defaultToolId;
  const [selectedCategory, setSelectedCategory] =
    useState<string>(defaultCategoryId);

  // Auto redirect on large screen
  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/ecg-mastery" || last === "ecg-mastery";

    if (lg && isBasePath) {
      router.replace(`/profile/ecg-mastery/${defaultToolId}`);
    }
  }, [lg, pathname, defaultToolId, router]);

  // Hide sidebar on mobile when tool is selected
  const hideOnMobile = !lg && pathname.split("/").length > 3;
  if (hideOnMobile) return null;
  return (
    <aside className="p-3 lg:w-64 2xl:w-80 w-full border-r border-gray-300 h-full lg:h-[calc(100vh-77px)] overflow-y-auto -mt-6">
      <Input
        prefix={<Search size={16} />}
        placeholder="Search templates..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ height: 40, marginBottom: 24, marginTop: 24 }}
      />

      {ECGMasteryData.map((section) => (
        <div key={section.id} className="mb-2">
          {/* Folder */}
          <div
            onClick={() => {
              setExpanded((prev) => (prev === section.id ? null : section.id));
              setSelectedCategory(section.id);
            }}
            className={`flex justify-between items-center p-3 rounded-lg cursor-pointer 
                 ${
                   selectedCategory === section.id
                     ? "bg-[#E8EBFB] border border-[#02478D]"
                     : "hover:bg-gray-50"
                 }
                `}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/assets/icons/folder-ico.svg"
                alt="folder"
                width={36}
                height={36}
              />
              <p className="text-sm font-medium">{section.title}</p>
            </div>

            {expanded === section.id ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>

          {/* Items */}
          {expanded === section.id && (
            <div className="ml-6 mt-2 space-y-1">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/profile/ecg-mastery/${item.id}`);
                  }}
                >
                  <div className="bg-[#EEF2F5] rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer pl-[2px] pt-[2px] pb-0.5 pr-[4px] ">
                    <div
                      className={`flex justify-between items-center 
         ${
           selectedTool === item.id
             ? "bg-[#E8EBFB] text-[#2C5F8D] "
             : "bg-white"
         }
         rounded-[10px] px-4 py-2 h-full`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="text-[#2C5F8D] text-sm ">
                          <Image
                            src="/assets/icons/document.svg"
                            alt="NCLEX"
                            width={50}
                            height={50}
                            draggable={false}
                            className="w-4 h-fit "
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="font-medium  text-sm">{item.name}</h3>
                        </div>
                      </div>
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
