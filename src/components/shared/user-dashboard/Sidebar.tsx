"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, ChevronLeft, Info } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "antd";
import React from "react";

interface SidebarProps {
  showLabels: boolean;
  setShowLabels: (v: boolean) => void;
  setMobileVisible?: (v: boolean) => void;
  setIsMobileSidebarOpen?: any;
}

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  children?: MenuItem[];
  tag?: string;
  subtitle?: string;
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
    setIsMobileSidebarOpen(false);
  };
  const isActive = (path: string) => pathname === path;
  const toggleMenu = (menu: string) =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  const icon = (src: string, alt: string, size = 25) => (
    <img src={src} alt={alt} className={`h-[${size}px]`} />
  );

  const menus: Record<string, MenuItem[]> = {
    main: [
      {
        key: "/profile/home",
        label: "Home",
        icon: icon("/assets/sidebar-icons/home-icon.svg", "home"),
      },
      {
        key: "/nurse-q",
        label: "Nurse Q",
        icon: icon("/assets/sidebar-icons/chatbot-icon.svg", "chatbot"),
      },
    ],
    studyTools: [
      {
        key: "/study-notes",
        label: "Study Notes",
        icon: icon("/assets/sidebar-icons/study-notes-icon.svg", "study-notes"),
        children: [
          { key: "/study-notes/anatomy", label: "Anatomy", icon: <></> },
          {
            key: "/study-notes/pharmacology",
            label: "Pharmacology",
            icon: <></>,
          },
        ],
      },
      {
        key: "/clinicals",
        label: "Clinicals",
        icon: icon("/assets/sidebar-icons/clinicals-icon.svg", "clinicals"),
      },
      {
        key: "/patient-assessment",
        label: "Patient Assessment",
        icon: icon(
          "/assets/sidebar-icons/patient-assessment-icon.svg",
          "patient"
        ),
      },
      {
        key: "/template",
        label: "Template",
        icon: icon("/assets/sidebar-icons/template-icon.svg", "template"),
      },
      {
        key: "/content-map",
        label: "Content Map",
        icon: icon("/assets/sidebar-icons/content-map-icon.svg", "map"),
        tag: "Coming Soon",
      },
      {
        key: "/my-library",
        label: "My Library",
        icon: icon("/assets/sidebar-icons/my-library-icon.svg", "library"),
      },
      {
        key: "/calendar",
        label: "Calendar",
        icon: icon("/assets/sidebar-icons/calendar-icon.svg", "calendar"),
        tag: "New",
      },
      {
        key: "/tests",
        label: "Test & Quizzers",
        icon: icon("/assets/sidebar-icons/test-icon.svg", "test"),
        subtitle: "NCLEX Tests / Next Gen",
      },
      {
        key: "/flash-cards",
        label: "Flash Cards",
        icon: icon("/assets/sidebar-icons/flash-cards-icon.svg", "flashcards"),
      },
    ],
    supportLegal: [
      {
        key: "/contact",
        label: "Contact Us",
        icon: icon("/assets/sidebar-icons/contact-us-icon.svg", "contact"),
      },
      {
        key: "/about",
        label: "About Us",
        icon: icon("/assets/sidebar-icons/info-icon.svg", "info", 20),
      },
      {
        key: "/faqs",
        label: "FAQs",
        icon: icon("/assets/sidebar-icons/faq-icon.svg", "faq"),
      },
      {
        key: "/terms",
        label: "Terms & Condition",
        icon: icon("/assets/sidebar-icons/terms-icon.svg", "terms", 20),
      },
      {
        key: "/privacy",
        label: "Privacy & Policy",
        icon: icon("/assets/sidebar-icons/privacy-icon.svg", "privacy"),
      },
    ],
  };

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
              <div className={`flex items-center ${showLabels ? "" : "gap-3"}`}>
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
                className={`flex items-center ${
                  showLabels ? "justify-center" : "gap-3"
                } px-5 py-2 cursor-pointer ${
                  isActive(item.key) ? "bg-[#324C93]" : "hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {!showLabels && (
                  <span
                    className={`text-sm font-medium ${
                      isActive(item.key)
                        ? "text-white font-bold scale-105"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </Link>
          )}
        </Tooltip>

        {hasChildren && menuOpen && (
          <div className={`${showLabels ? "" : "ml-11"}`}>
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
      className={`h-full bg-white border-r border-[#D9D9D9] flex flex-col transition-all duration-300 ${
        showLabels ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="px-5">
        <div className="border-b border-[#D9D9D9] flex items-center justify-between py-4 lg:py-6">
          {!showLabels && (
            <div className="flex items-center gap-2">
              <img src="/favicon.svg" alt="Logo" className="h-8 w-auto" />
              <span className="text-lg font-semibold">IQ-Nurse</span>
            </div>
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
        <RenderMenuGroup items={menus.main} menuKey="main" />
        <RenderMenuGroup
          title="Study Tools"
          items={menus.studyTools}
          menuKey="studyTools"
        />
        <RenderMenuGroup
          title="Support & Legal"
          items={menus.supportLegal}
          menuKey="supportLegal"
        />
      </div>
    </div>
  );
};

export default Sidebar;
