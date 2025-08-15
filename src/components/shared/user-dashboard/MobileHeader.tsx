"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, InputRef, Dropdown, Avatar, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { BookmarkIcon, ChevronLeft, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const pathname = usePathname();
  const router = useRouter();
  // Focus input when search opens and close on Escape
  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  // page title from URL
  const formatPathName = (slug: string | undefined) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const pathSegments = pathname?.split("/").filter(Boolean) || [];

  let targetSlug = pathSegments[pathSegments.length - 1];
  const showLogo = ["home", "nurse-q"].includes(targetSlug);
  // console.log(showLogo, targetSlug);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #f0f0f0",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            position: "relative",
            height: 62,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo + Brand */}
          {!searchOpen &&
            (showLogo ? (
              <Link
                href="/profile/home"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  minWidth: 0,
                }}
                aria-label="Home"
              >
                <Image
                  src="/assets/Logo.png"
                  alt="IQ-Nurse logo"
                  width={127}
                  height={48}
                  style={{ borderRadius: 4 }}
                  priority
                />
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/profile/home" className="mt-1.5">
                  <button className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border ">
                    <ChevronLeft size={24} />
                  </button>
                </Link>

                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  {formatPathName(targetSlug)}
                </span>
              </div>
            ))}

          {/* Right: Actions */}
          {!searchOpen && (
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <Button
                type="text"
                icon={<Search style={{ fontSize: 20 }} />}
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
              />
              <Button
                type="text"
                icon={<BookmarkIcon style={{ fontSize: 20 }} />}
                aria-label="Bookmarks"
              />
            </div>
          )}

          {/* Search overlay */}
          {searchOpen && (
            <>
              {/* Click-outside area */}
              <div
                style={{
                  position: "fixed",
                  inset: 0,
                  zIndex: 40,
                }}
                onClick={() => setSearchOpen(false)}
                aria-hidden="true"
              />
              <div
                style={{ position: "absolute", left: 0, right: 0, zIndex: 50 }}
              >
                <form
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 56,
                    padding: "0 16px",
                  }}
                  role="search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // handle submit as needed
                    setSearchOpen(false);
                  }}
                >
                  <Input
                    ref={inputRef}
                    placeholder="Search..."
                    prefix={<SearchOutlined />}
                    allowClear
                    style={{ borderRadius: 9999, height: 40 }}
                  />
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
