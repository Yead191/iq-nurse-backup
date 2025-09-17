"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, InputRef, Badge } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { BellIcon, ChevronLeft, UserRoundCog } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import VoiceToText from "../VoiceToText";

export default function MobileHeader() {
  const inputRef = useRef<InputRef>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [text, setText] = useState<string>("");

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
        border: "none",
        background: "#003877",
      }}
    >
      <div className="w-full max-w-[640px] mx-auto px-3 py-5 flex flex-col gap-3">
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Logo + Brand */}
          {showLogo ? (
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
              <div className="flex items-center gap-2 ">
                <Image
                  src="/favicon.svg"
                  alt="IQ-Nurse logo"
                  width={36}
                  height={39}
                  style={{ borderRadius: 4 }}
                  priority
                />
                <span className="text-white font-semibold">IQ-Nurse</span>
              </div>
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
          )}
          {/* Right: Actions */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}
          >
            {/* Notifications */}
            <Badge count={4} size="small">
              <Button
                type="text"
                icon={<BellIcon style={{ fontSize: 20, color: "white" }} />}
                aria-label="Notifications"
              />
            </Badge>

            {/* <Button
              type="text"
              icon={<BookmarkIcon style={{ fontSize: 20, color: "white" }} />}
              aria-label="Bookmarks"
            /> */}
            <Link href={"/profile/account"}>
              <Button
                type="text"
                icon={<UserRoundCog style={{ fontSize: 20, color: "white" }} />}
                aria-label="Bookmarks"
              />
            </Link>
          </div>
        </div>
        {/* Search overlay */}

        <form
          className="px-1"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit as needed
          }}
        >
          <Input
            ref={inputRef}
            placeholder="Search..."
            prefix={<SearchOutlined />}
            suffix={<VoiceToText setText={setText} />}
            allowClear
            style={{ borderRadius: 6, height: 44 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}
