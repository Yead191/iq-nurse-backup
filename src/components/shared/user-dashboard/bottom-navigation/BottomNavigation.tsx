"use client";

import type React from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
interface NavItem {
  key: string;
  icon: string;
  label: string;
}

export default function BottomNavigation({
  setIsMobileSidebarOpen,
  setShowLabels,
}: {
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowLabels: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Main navigation items for bottom nav
  const navItems: NavItem[] = [
    // {
    //   key: "/profile/nurse-q",
    //   icon: "/assets/sidebar-icons/chatbot-icon.svg",
    //   label: "Nurse Q",
    // },
    {
      key: "/profile/study-tools",
      icon: "/assets/icons/bottom-nav/tools.svg",
      label: "Study Tools",
    },
    {
      key: "/profile/calendar",
      icon: "/assets/icons/bottom-nav/calendar.svg",
      label: "Calendar",
    },
    {
      key: "/profile/home",
      icon: "/assets/icons/bottom-nav/home.svg",
      label: "Home",
    },
    // {
    //   key: "/profile/community-home",
    //   icon: "/assets/sidebar-icons/community-icon.svg",
    //   label: "Community",
    // },
    {
      key: "/profile/my-notepad",
      icon: "/assets/icons/bottom-nav/notes.svg",
      label: "My Notepad",
    },
    {
      key: "/profile/my-library",
      icon: "/assets/icons/bottom-nav/files.svg",
      label: "My Library",
    },
  ];

  const handleNavClick = (key: string) => {
    if (key === "/profile/study-tools") {
      setIsMobileSidebarOpen(true);
    } else {
      setIsMobileSidebarOpen(false);
      router.push(key);
    }
  };

  const isActive = (key: string) => {
    // if (key === "/profile") {
    //   return pathname.startsWith("/profile");
    // }
    return pathname === key;
  };

  return (
    <div
      className="fixed bottom-0 z-50 w-full h-[76px] flex items-center justify-center"
      style={{
        backgroundColor: "white",
        // padding: "10px 0",
        zIndex: 1000,
        boxShadow: "0px -1px 1px 0px #0000001A",
      }}
    >
      <div
        className="mobile-nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   maxWidth: "400px",
          margin: "0 auto",
          padding: "0 8px",
          gap: 12,
          width: "100%",
        }}
      >
        {navItems?.map((item) => (
          <div
            key={item.key}
            onClick={() => handleNavClick(item.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // padding: "12px",
              borderRadius: "12px",
              // backgroundColor: isActive(item.key) ? "#F6F7F8" : "transparent",
              // border: isActive(item.key) ? "1px solid #85A6CA" : "transparent",
              color: "#666",
              cursor: "pointer",
              // transition: "all 0.3s ease",
              //   minWidth: "60px",
              width: "100%",
              justifyContent: "center",
            }}
            className={`p-2.5 ${
              item.key === "/profile/home"
                ? "translate-y-[-22px] h-[56px] boxShadow bg-white"
                : "h-full flex items-center justify-center "
            } 
            ${
              isActive(item.key)
                ? "bg-[#F6F7F8] border border-[#85A6CA]"
                : "bg-transparent "
            }
            `}
          >
            <div style={{ fontSize: "16px", marginBottom: "8px" }}>
              <Image
                src={item.icon}
                alt={item.label}
                width={32}
                height={32}
                className="h-[24px] w-fit object-contain mt-1.5"
              />
            </div>
            {/* <span
              style={{
                fontSize: "10px",
                fontWeight: isActive(item.key) ? "500" : "400",
                textAlign: "center",
              }}
            >
              {item.label}
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
