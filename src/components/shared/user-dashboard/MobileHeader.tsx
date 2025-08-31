"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Input,
  Button,
  InputRef,
  Dropdown,
  Avatar,
  Typography,
  Badge,
} from "antd";
import {
  AudioOutlined,
  NotificationFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { BellIcon, BookmarkIcon, ChevronLeft, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { IoMdNotificationsOutline } from "react-icons/io";
import VoiceToText from "../VoiceToText";

export default function MobileHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [text, setText] = useState<string>("");

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

  // Check if the string looks like an ID (Mongo _id or numeric)
  const isIdSegment = (str: string) =>
    /^[a-f\d]{24}$/i.test(str) || /^\d+$/.test(str);
  let targetSlug = pathSegments[pathSegments.length - 1];
  if (isIdSegment(targetSlug)) {
    targetSlug = pathSegments[pathSegments.length - 2];
  }
  const showLogo = ["home", "nurse-q"].includes(targetSlug);
  // console.log(showLogo, targetSlug);

  const isAccountRelated =
    pathname.startsWith("/profile/account-security") ||
    pathname.startsWith("/profile/subscriptions") ||
    pathname.startsWith("/profile/language-preference") ||
    pathname.startsWith("/profile/faqs") ||
    pathname.startsWith("/profile/privacy-policy") ||
    pathname.startsWith("/profile/terms-service") ||
    pathname.startsWith("/profile/invite-friends") ||
    pathname.startsWith("/profile/contact-us") ||
    pathname.startsWith("/profile/about-us");

  // const backLink = isAccountRelated ? "/profile/account" : "/profile/home";

  const handleBack = () => {
    if (isAccountRelated) {
      router.push("/profile/account");
      return;
    }
    router.back();
  };

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
                <button
                  onClick={handleBack}
                  className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border "
                >
                  <ChevronLeft size={24} />
                </button>

                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">
                  {formatPathName(targetSlug)}
                </span>
              </div>
            ))}

          {/* Right: Actions */}
          {!searchOpen && (
            <div
              style={{
                marginLeft: "auto",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Button
                type="text"
                icon={<Search style={{ fontSize: 20 }} />}
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
              />
              {/* Notifications */}
              <Badge count={4} size="small">
                <Button
                  type="text"
                  icon={<BellIcon style={{ fontSize: 20 }} />}
                  aria-label="Notifications"
                />
              </Badge>

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
                    suffix={<VoiceToText setText={setText} />}
                    allowClear
                    style={{ borderRadius: 9999, height: 40 }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
