"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Grid, Tooltip } from "antd";
import React from "react";
import { MenuItem, menus, studyNotesChildren } from "@/data/SidebarMenus";
import Image from "next/image";

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
  // const { category } = await params;
  // console.log(category);
  const { lg } = Grid.useBreakpoint();
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    studyTools: false,
    supportLegal: false,
  });

  const toggleSidebar = () => {
    setShowLabels(!showLabels);
    if (setIsMobileSidebarOpen) {
      setIsMobileSidebarOpen(false);
    }
  };
  useEffect(() => {
    // Check if current pathname starts with any study tools route
    const currentPath =
      typeof window !== "undefined" ? window.location.href : "";

    const isStudyNotesChild = studyNotesChildren.some((route) =>
      currentPath.includes(route)
    );

    setOpenMenus((prev) => ({
      ...prev,
      studyTools: isStudyNotesChild,
    }));
  }, [pathname]);

  const isActive = (path: string) => {
    // if (path.includes("/category/")) {
    //   // Extract category from the path
    //   const pathCategory = path.split("/category/")[1];
    //   return pathCategory === category;
    // }
    return pathname === path;
  };

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const MenuItemComponent = ({
    item,
    parentKey,
  }: {
    item: MenuItem;
    parentKey?: string;
  }) => {
    const hasChildren = item.children && item.children.length > 0;
    const menuOpen = openMenus[item.key];

    return (
      <div>
        <Tooltip title={showLabels ? item.label : ""} placement="right">
          {hasChildren ? (
            <button
              onClick={() => toggleMenu(item.key)}
              className={`w-full flex items-center ${
                showLabels ? "justify-center" : "justify-between"
              } px-5 py-2 hover:bg-gray-50 ${
                isActive(item.key) ? "bg-blue-50" : ""
              }`}
            >
              <div
                className={`flex items-center ${
                  showLabels ? "" : "gap-3 mx-1"
                }`}
              >
                {item.icon}
                {!showLabels && (
                  <span
                    className={`text-sm font-medium ${
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
                onClick={() => {
                  if (!lg) toggleSidebar();
                }}
                className={`flex items-center ${
                  showLabels ? "justify-center " : "gap-3 pl-4"
                } mx-2  py-2 cursor-pointer ${
                  isActive(item.key)
                    ? "bg-[#F6F7F8] rounded-[10px] border border-[#85A6CA]"
                    : "hover:bg-gray-50 hover:rounded-[10px]"
                }`}
              >
                {item.icon}
                {!showLabels && (
                  <span className={`text-sm font-medium"text-gray-700`}>
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
        <p className="px-5 mb-2 text-xs md:text-sm font-semibold text-gray-500 uppercase">
          {title}
        </p>
      )}
      {items?.map((item) => (
        <MenuItemComponent key={item.key} item={item} parentKey={menuKey} />
      ))}
    </div>
  );

  return (
    <div
      className={`h-full bg-white border-r border-[#D9D9D9] flex flex-col transition-all duration-300    ${
        showLabels ? "w-20" : " lg:w-52 2xl:w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="px-5">
        <div className="border-b border-[#D9D9D9] flex items-center justify-between py-4 lg:py-6">
          {!showLabels && (
            <Link href={"/profile/home"}>
              <div className="flex items-center gap-2">
                <Image
                  src="/favicon.svg"
                  alt="Logo"
                  width={40}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-semibold">IQ-Nurse</span>
              </div>
            </Link>
          )}
          <button
            onClick={toggleSidebar}
            className="hover:bg-gray-100 text-[#212121] font-semibold rounded bg-[#F6F8FA] p-1 "
          >
            {showLabels ? (
              <PanelRightClose size={22} />
            ) : (
              // <ChevronRight size={22} />
              // <ChevronLeft size={20} />
              <PanelRightOpen size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Menus */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-160px)] md:max-h-max  lg:pb-8">
        <div className="hidden md:block">
          <RenderMenuGroup items={menus.main} menuKey="main" />
        </div>
        <RenderMenuGroup
          title="Study Material"
          items={menus.studyMaterial}
          menuKey="studyTools"
        />
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
