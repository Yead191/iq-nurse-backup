"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Drawer, ConfigProvider, Button } from "antd";
import navItems from "@/data/navItems";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { XIcon } from "lucide-react";

export default function Navbar() {
  const [activePath, setActivePath] = useState<string>("#home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  const router = useRouter();

  useEffect(() => {
    const currentHash = globalThis.location.hash || "#home";
    setActivePath(currentHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150;

      navItems.forEach((item) => {
        const sectionId = item.href.replace("/#", ""); // ← FIXED
        const section = document.getElementById(sectionId);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollY >= top && scrollY < bottom) {
            setActivePath(item.href);
          }
        }
      });

      // Hide/show navbar
      if (window.scrollY > lastScrollTop.current && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    const isHome = window.location.pathname === "/";

    if (!isHome) {
      // If user is on another page, allow normal navigation
      return;
    }

    // If user is already on home page → smooth scroll
    e.preventDefault();

    const id = path.replace("/#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", path);
      setActivePath(path);
    }
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-[#0a0e27] px-4
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
    >
      <div className="container py-4 transition-colors duration-300 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={240}
              height={150}
              className="h-10 lg:h-12 w-fit"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm transition-all duration-300 ${
                  activePath === item.href
                    ? "font-semibold text-white"
                    : "text-white/80 hover:text-white/70"
                }`}
              >
                {item.labelKey}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="bg-gradient-to-r from-cyan-500 to-[#0078ff] text-white font-bold py-1.5 lg:py-2.5 px-4 lg:px-8 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-[0_0_20px_4px_rgba(0,120,255,0.6)] text-sm lg:text-base"
            >
              Get Started
            </Link>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-xl text-white"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer (Mobile) */}
      <ConfigProvider>
        <Drawer
          // title={<span className="font-semibold text-lg">Menu</span>}
          closable={false}
          placement="right"
          width={280}
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{
            body: {
              padding: 0,
              background: "#1C1C1E",
            },
          }}
        >
          <div className="relative h-full pt-8  w-full">
            <div className="flex flex-col h-full">
              <div className="font-semibold text-xl text-white pb-2 ps-5 w-full border-b border-[#444447] flex items-center justify-between">
                <h4>Menu</h4>
                <Button className="!text-white !text-xl" type="text" onClick={() => setDrawerOpen(false)}>
                  <XIcon />
                </Button>
              </div>

              <div className="flex flex-col gap-y-4 overflow-y-auto w-full ps-5 pt-6 ">
                {navItems?.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      // handleNavScroll(e, item.href);
                      setDrawerOpen(false);
                    }}
                    className={`text-base! transition-all!   ${
                      activePath === item.href
                        ? "font-semibold!  rounded-lg! text-primary!  "
                        : "text-white! "
                    }`}
                  >
                    {item.labelKey}
                  </Link>
                ))}
              </div>

              <div className="py-3  absolute bottom-0 w-full ">
                <div
                  onClick={() => {
                    onCloseDrawer();
                    router.push("/auth/login");
                  }}
                  className="flex items-center gap-x-2 text-red-500 hover:text-red-600 font-medium ps-5"
                >
                  <IoIosLogOut size={18} />
                  <span className="font-normal">Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </ConfigProvider>
    </nav>
  );
}
