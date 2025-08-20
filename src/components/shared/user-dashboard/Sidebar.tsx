"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "antd";
import React from "react";
import { MenuItem, menus } from "@/data/SidebarMenus";

interface SidebarProps {
  showLabels: boolean;
  setShowLabels: (v: boolean) => void;
  setMobileVisible?: (v: boolean) => void;
  setIsMobileSidebarOpen?: any;
}

const Sidebar = ({
  showLabels,
  setShowLabels,
  setIsMobileSidebarOpen,
}: SidebarProps) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    studyTools: true,
    supportLegal: true,
  });

  const toggleSidebar = () => {
    setShowLabels(!showLabels);
    if (setIsMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const isActive = (path: string) => {
    if (path.includes("category=")) {
      const url = new URL(path, "http://dummy");
      return url.searchParams.get("category") === category;
    }
    return pathname === path;
  };
  const toggleMenu = (menu: string) =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  const MenuItemComponent = ({
    item,
    parentKey,
  }: {
    item: MenuItem;
    parentKey?: string;
  }) => {
    const hasChildren = item.children && item.children.length > 0;
    const menuOpen = parentKey && openMenus[parentKey];

    return (
      <div>
        <Tooltip title={showLabels ? item.label : ""} placement="right">
          {hasChildren ? (
            <button
              onClick={() => parentKey && toggleMenu(parentKey)}
              className={`w-full flex items-center ${
                showLabels ? "justify-center" : "justify-between"
              } px-5 py-2 hover:bg-gray-50 ${
                isActive(item.key) ? "bg-blue-50" : ""
              }`}
            >
              <div className={`flex items-center ${showLabels ? "" : "gap-3 mx-1"}`}>
                {item.icon}
                {!showLabels && (
                  <span
                    className={`text-lg lg:text-sm font-medium ${
                      isActive(item.key) ? "text-blue-500" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </div>
              {!showLabels &&
                (menuOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                ))}
            </button>
          ) : (
            <Link href={item.key}>
              <div
                className={`flex items-center ${
                  showLabels ? "justify-center " : "gap-3 pl-4"
                } mx-2  py-2 cursor-pointer ${
                  isActive(item.key)
                    ? "bg-[#F6F7F8] rounded-[10px]"
                    : "hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {!showLabels && (
                  <span
                    className={`text-lg lg:text-sm font-medium"text-gray-700`}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </Link>
          )}
        </Tooltip>

        {hasChildren && menuOpen && (
          <div className={`${showLabels ? "" : "ml-2"}  `}>
            {item.children!.map((sub) => (
              <MenuItemComponent key={sub.key} item={sub} />
            ))}
          </div>
        )}
      </div>
    );
  };

  const RenderMenuGroup = ({
    title,
    items,
    menuKey,
  }: {
    title?: string;
    items: MenuItem[];
    menuKey: string;
  }) => (
    <div className="mt-4">
      {!showLabels && title && (
        <p className="px-5 mb-2 text-xs font-semibold text-gray-500 uppercase">
          {title}
        </p>
      )}
      {items.map((item) => (
        <MenuItemComponent key={item.key} item={item} parentKey={menuKey} />
      ))}
    </div>
  );

  return (
    <div
      className={`h-full bg-white border-r border-[#D9D9D9] flex flex-col transition-all duration-300 lg:pb-12 ${
        showLabels ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="px-5">
        <div className="border-b border-[#D9D9D9] flex items-center justify-between py-4 lg:py-6">
          {!showLabels && (
            <Link href={"/profile/home"}>
              <div className="flex items-center gap-2">
                <img src="/favicon.svg" alt="Logo" className="h-8 w-auto" />
                <span className="text-lg font-semibold">IQ-Nurse</span>
              </div>
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border p-1"
          >
            {showLabels ? (
              <ChevronRight size={22} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Menus */}
      <div className="flex-1 overflow-y-auto">
        <div className="hidden md:block">
          <RenderMenuGroup items={menus.main} menuKey="main" />
        </div>
        <RenderMenuGroup
          title="Study Tools"
          items={menus.studyTools}
          menuKey="studyTools"
        />
        <div className="hidden md:block">
          <RenderMenuGroup
            title="Support & Legal"
            items={menus.supportLegal}
            menuKey="supportLegal"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
