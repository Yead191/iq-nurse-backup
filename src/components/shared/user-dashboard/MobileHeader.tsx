"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, InputRef, Dropdown, Avatar, Typography } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { BookmarkIcon, Search } from "lucide-react";
import ProfilePanel from "./header/ProfilePanel";
import { profile } from "./header/Header";
const { Text } = Typography;

export default function MobileHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<InputRef>(null);

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
          {!searchOpen && (
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
          )}

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
              <Dropdown
                trigger={["click"]}
                dropdownRender={() => <ProfilePanel />}
              >
                <Button
                  style={{ padding: 0, borderRadius: "50%" }}
                  type="text"
                  className="flex items-center "
                >
                  <Avatar src={profile.image} size={32} />
                  {/* <DownOutlined className="hidden text-gray-500 md:block" /> */}
                </Button>
              </Dropdown>
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
