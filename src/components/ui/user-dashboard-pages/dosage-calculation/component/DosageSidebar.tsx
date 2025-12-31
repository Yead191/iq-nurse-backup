"use client";

import { Input, Grid } from "antd";
import { useEffect, useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { DosageCalculationData } from "@/data/dosage-calculation/dosageSidebarData";

export default function DosageSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();

  const defaultToolId = DosageCalculationData[0]?.id;

  const [searchText, setSearchText] = useState("");
  const selectedTool = pathname.split("/").pop() || defaultToolId;

  const filteredData = DosageCalculationData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/dosage-calculation" ||
      last === "dosage-calculation";

    if (lg && isBasePath && defaultToolId) {
      router.replace(`/profile/dosage-calculation/${defaultToolId}`);
    }
  }, [lg, pathname, defaultToolId, router]);

  const hideOnMobile = !lg && pathname.split("/").length > 3;
  if (hideOnMobile) return null;

  return (
    <aside className="p-3 lg:w-64 2xl:w-80 w-full h-full lg:h-[calc(100vh-77px)] border-r border-gray-200 overflow-y-auto -mt-6">
      <Input
        prefix={<Search size={16} />}
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ height: 40, marginBottom: 24, marginTop: 24 }}
      />

      <div className="space-y-2.5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              router.push(`/profile/dosage-calculation/${item.id}`);
            }}
          >
            <div className="bg-[#EEF2F5] rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer pl-[2px] pt-[2px] pb-0.5 pr-[4px] ">
              <div
                className={`flex justify-between items-center  
         ${
           selectedTool === item.id
             ? "bg-[#E8EBFB] text-[#003877] "
             : "bg-white"
         }
         rounded-[10px] px-4 py-3 h-full`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-[#003877] text-sm ">
                    <Image
                      src="/assets/icons/document.svg"
                      alt="document"
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
    </aside>
  );
}
