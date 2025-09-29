"use client";

import type React from "react";
import { useRouter, usePathname } from "next/navigation";
interface NavItem {
  key: string;
  icon: string;
  label: string;
}

export default function BottomNavigation({
  setIsMobileSidebarOpen,
}: {
  setIsMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Main navigation items for bottom nav
  const navItems: NavItem[] = [
    {
      key: "/profile/home",
      icon: "/assets/icons/home-icon.svg",
      label: "Home",
    },
    {
      key: "/profile/nurse-q",
      icon: "/assets/sidebar-icons/chatbot-icon.svg",
      label: "Nurse Q",
    },
    {
      key: "/profile/study-tools",
      icon: "/assets/icons/study-tools-icon.svg",
      label: "Study Tools",
    },
    {
      key: "/profile/calendar",
      icon: "/assets/icons/calendar-icon.svg",
      label: "Calendar",
    },
    {
      key: "/profile/community-home",
      icon: "/assets/sidebar-icons/community-icon.svg",
      label: "Community",
    },
  ];

  const handleNavClick = (key: string) => {
    if (key === "/profile/study-tools") {
      setIsMobileSidebarOpen(true);
    } else {
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
      className="fixed bottom-0 z-50 w-full"
      style={{
        backgroundColor: "white",
        borderTop: "0.1px solid #151515",
        padding: "10px 0",
        zIndex: 1000,
        boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.1)",
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
          gap: 2,
          width: "100%",
        }}
      >
        {navItems.map((item) => (
          <div
            key={item.key}
            onClick={() => handleNavClick(item.key)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "12px 4px",
              borderRadius: "10px",
              backgroundColor: isActive(item.key) ? "#F6F7F8" : "transparent",
              border: isActive(item.key) ? "1px solid #85A6CA" : "transparent",
              color: "#666",
              cursor: "pointer",
              transition: "all 0.3s ease",
              //   minWidth: "60px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "14px", marginBottom: "8px" }}>
              <img src={item.icon} alt={item.label} />
            </div>
            <span
              style={{
                fontSize: "10px",
                fontWeight: isActive(item.key) ? "500" : "400",
                textAlign: "center",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
