"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, Info, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Tooltip } from "antd";
import React from "react";

interface SidebarProps {
  showLabels: boolean;
  setShowLabels: (v: boolean) => void;
  setMobileVisible?: (v: boolean) => void;
}

interface MenuItem {
  key: string;
  label: string;
  icon: any;
  children?: { key: string; label: string }[];
  tag?: string;
  subtitle?: string;
}

const Sidebar = ({ showLabels, setShowLabels }: SidebarProps) => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    studyTools: true,
    supportLegal: true,
  });

  const toggleSidebar = () => setShowLabels(!showLabels);
  const isActive = (path: string) => pathname === path;
  const toggleMenu = (menu: string) =>
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));

  // Menu Data
  const menus = {
    main: [
      {
        key: "/profile/home",
        label: "Home",
        icon: (
          <img
            src="/assets/sidebar-icons/home-icon.svg"
            alt="home-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/nurse-q",
        label: "Nurse Q",
        icon: (
          <img
            src="/assets/sidebar-icons/chatbot-icon.svg"
            alt="chatbot-icon"
            className="h-[25px]"
          />
        ),
      },
    ],
    studyTools: [
      {
        key: "/study-notes",
        label: "Study Notes",
        icon: (
          <img
            src="/assets/sidebar-icons/study-notes-icon.svg"
            alt="study-notes-icon"
            className="h-[25px]"
          />
        ),
        children: [
          { key: "/study-notes/anatomy", label: "Anatomy" },
          { key: "/study-notes/pharmacology", label: "Pharmacology" },
        ],
      },
      {
        key: "/clinicals",
        label: "Clinicals",
        icon: (
          <img
            src="/assets/sidebar-icons/clinicals-icon.svg"
            alt="clinicals-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/patient-assessment",
        label: "Patient Assessment",
        icon: (
          <img
            src="/assets/sidebar-icons/patient-assessment-icon.svg"
            alt="patient-assessment-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/template",
        label: "Template",
        icon: (
          <img
            src="/assets/sidebar-icons/template-icon.svg"
            alt="template-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/content-map",
        label: "Content Map",
        icon: (
          <img
            src="/assets/sidebar-icons/content-map-icon.svg"
            alt="content-map-icon"
            className="h-[25px]"
          />
        ),
        tag: "Coming Soon",
      },
      {
        key: "/my-library",
        label: "My Library",
        icon: (
          <img
            src="/assets/sidebar-icons/my-library-icon.svg"
            alt="my-library-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/calendar",
        label: "Calendar",
        icon: (
          <img
            src="/assets/sidebar-icons/calendar-icon.svg"
            alt="calendar-icon"
            className="h-[25px]"
          />
        ),
        tag: "New",
      },
      {
        key: "/tests",
        label: "Test & Quizzers",
        icon: (
          <img
            src="/assets/sidebar-icons/test-icon.svg"
            alt="test-icon"
            className="h-[25px]"
          />
        ),
        subtitle: "NCLEX Tests/ Next Gen style",
      },
      {
        key: "/flash-cards",
        label: "Flash Cards",
        icon: (
          <img
            src="/assets/sidebar-icons/flash-cards-icon.svg"
            alt="flash-cards"
            className="h-[25px]"
          />
        ),
      },
    ],
    supportLegal: [
      {
        key: "/contact",
        label: "Contact Us",
        icon: (
          <img
            src="/assets/sidebar-icons/contact-us-icon.svg"
            alt="contact-us-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/about",
        label: "About Us",
        icon: (
          <img
            src="/assets/sidebar-icons/info-icon.svg"
            alt="info-icon"
            className="h-[20px]"
          />
        ),
      },
      {
        key: "/faqs",
        label: "FAQs",
        icon: (
          <img
            src="/assets/sidebar-icons/faq-icon.svg"
            alt="faq-icon"
            className="h-[25px]"
          />
        ),
      },
      {
        key: "/terms",
        label: "Terms & Condition",
        icon: (
          <img
            src="/assets/sidebar-icons/terms-icon.svg"
            alt="terms-icon"
            className="h-[20px]"
          />
        ),
      },
      {
        key: "/privacy",
        label: "Privacy & Policy",
        icon: (
          <img
            src="/assets/sidebar-icons/privacy-icon.svg"
            alt="privacy-icon"
            className="h-[25px]"
          />
        ),
      },
    ],
  };

  // Render single menu link
  const MenuLink = ({ item }: { item: MenuItem }) => (
    <Link href={item.key}>
      <Tooltip title={showLabels ? item.label : ""} placement="right">
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
      </Tooltip>
    </Link>
  );

  // Render expandable menu section
  const ExpandableMenu = ({
    title,
    items,
    menuKey,
  }: {
    title?: string;
    items: MenuItem[];
    menuKey: string;
  }) => (
    <div className="mt-6">
      {!showLabels && title && (
        <p className="px-5 mb-2 text-xs font-semibold text-gray-500 uppercase">
          {title}
        </p>
      )}
      {items.map((item) =>
        item.children ? (
          <div key={item.key}>
            <Tooltip title={showLabels ? item.label : ""} placement="right">
              <button
                onClick={() => toggleMenu(menuKey)}
                className={`w-full flex items-center ${
                  showLabels ? "justify-center" : "justify-between"
                } px-5 py-2 hover:bg-gray-50 ${
                  isActive(item.key) ? "bg-blue-50" : ""
                }`}
              >
                <div
                  className={`flex items-center ${showLabels ? "" : "gap-3"}`}
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
                  (openMenus[menuKey] ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  ))}
              </button>
            </Tooltip>

            {openMenus[menuKey] && (
              <div className={`${showLabels ? "" : "ml-11"}`}>
                {item.children.map((sub) => (
                  <MenuLink key={sub.key} item={{ ...sub, icon: <></> }} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <MenuLink key={item.key} item={item} />
        )
      )}
    </div>
  );

  return (
    <div
      className={`h-full bg-white border-r border-[#D9D9D9] flex flex-col transition-all duration-300  ${
        showLabels ? "w-20" : "w-64"
      }`}
    >
      {/* Logo & Toggle */}
      <div className="px-5">
        <div className=" border-b border-[#D9D9D9] flex items-center justify-between py-4 lg:py-6">
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

      <div className="flex-1 overflow-y-auto">
        <ExpandableMenu items={menus.main} menuKey="main" />
        <ExpandableMenu
          title="Study Tools"
          items={menus.studyTools}
          menuKey="studyTools"
        />
        <div className="mt-6">
          <Tooltip
            title={showLabels ? "Support & Legal" : ""}
            placement="right"
          >
            <button
              onClick={() => toggleMenu("supportLegal")}
              className={`w-full flex items-center ${
                showLabels ? "justify-center" : "justify-between"
              } px-5 py-2 hover:bg-gray-50`}
            >
              <div className={`flex items-center ${showLabels ? "" : "gap-3"}`}>
                <Info size={20} />
                {!showLabels && (
                  <span className="text-sm font-medium uppercase">
                    Support & Legal
                  </span>
                )}
              </div>
              {!showLabels &&
                (openMenus.supportLegal ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                ))}
            </button>
          </Tooltip>
          {openMenus.supportLegal && (
            <div className={`${showLabels ? "" : "ml-5 mt-1"}`}>
              {menus.supportLegal.map((item) => (
                <MenuLink key={item.key} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
