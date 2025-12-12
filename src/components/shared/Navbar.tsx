"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Drawer, ConfigProvider } from "antd";
import navItems from "@/data/navItems";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [activePath, setActivePath] = useState<string>("#home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollTop = useRef(0);

  const router = useRouter();

  useEffect(() => {
    const currentHash = window.location.hash || "#home";
    setActivePath(currentHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + 120;

      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActivePath(item.href);
          }
        }
      });

      if (scrollY > lastScrollTop.current && scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop.current = Math.max(scrollY, 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavScroll = useCallback((e: React.MouseEvent, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActivePath(path);
      window.location.hash = path;
    }
  }, []);

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
                // onClick={(e) => handleNavScroll(e, item.href)}
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
              className="lg:hidden text-xl"
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
              <div className="font-semibold text-xl text-white pb-2 ps-5 w-full border-b border-[#444447]">
                Menu
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
