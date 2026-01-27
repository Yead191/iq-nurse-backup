"use client";
import { Grid } from "antd";
import { BookOpen, FileText, LayoutGrid } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function NclexSidebar() {
  const router = useRouter();
  const { lg } = Grid.useBreakpoint();

  const pathname = usePathname();
  const tabs = [
    {
      id: "progress",
      label: "Progress",
      icon: <LayoutGrid size={22} />,
    },
    {
      id: "category",
      label: "Practice By Category",
      icon: <BookOpen size={22} />,
    },

    {
      id: "full-nclex",
      label: "Full NCLEX Practice",
      icon: <FileText size={22} />,
    },
  ];

  useEffect(() => {
    const segments = pathname.split("/");
    const last = segments[segments.length - 1];

    const isBasePath =
      pathname === "/profile/nclex-exams" || last === "nclex-exams";

    if (lg && isBasePath) {
      router.replace(`/profile/nclex-exams/${tabs[0].id}`);
    }
  }, [lg, pathname, router]);

  const handleTabChange = (tabId: string) => {
    router.push(`/profile/nclex-exams/${tabId}`, { scroll: false });
  };

  return (
    <div
      style={{
        display: pathname.includes("start-exam") ? "none" : "block",
      }}
      className="w-full lg:w-2/6 2xl:w-1/5  p-1 px-2 md:px-0  flex justify-center items-start h-full lg:h-[calc(100vh-80px)]"
    >
      <div className="flex md:flex-col gap-2 md:gap-4 justify-between md:justify-start md:bg-white border-r border-gray-200  w-full md:p-3 md:pb-12 pt-2 lg:pt-6 h-full">
        {tabs.map((tab) => {
          const isActive = pathname.endsWith(tab.id);
          return (
            <div
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`text-left w-full text-[10px] md:text-base lg:px-4 py-3 rounded-md md:rounded-lg font-medium transition-all text-nowrap flex items-center justify-center md:justify-start gap-4 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow"
                  : "bg-white text-[#6B6B6B] hover:bg-primary hover:text-white"
              }`}
            >
              <p className="hidden md:block"> {tab.icon} </p>
              <p> {tab.label} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
