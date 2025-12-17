"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, InputRef, Badge, Dropdown, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ChevronLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LanguagePanel from "./header/LanguagePanel";
import { LangKey, LANGUAGES } from "@/data/headerConstants";

import { IoMdNotificationsOutline } from "react-icons/io";

import { profile } from "./header/Header";

export default function MobileHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [lang, setLang] = React.useState<LangKey>("en");
  const currentLang = React.useMemo(
    () => LANGUAGES.find((l) => l.key === lang) ?? LANGUAGES[0],
    [lang]
  );
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
        background: "white",
      }}
    >
      <div className="w-full max-w-[640px] mx-auto px-3 py-2.5 flex flex-col gap-3  ">
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
                  src="/Logo.png"
                  alt="Logo"
                  width={400}
                  height={80}
                  className="h-10 w-full object-contain"
                />
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
          {/* Right */}
          <div className="flex items-center gap-1 rounded-2xl p-1">
            {/* Language */}
            <Dropdown
              trigger={["click"]}
              popupRender={() => (
                <LanguagePanel selected={lang} onSelect={setLang} />
              )}
            >
              <Button
                type="text"
                className="flex items-center gap-2 rounded-xl !bg-[#F6F8FB] px-2 py-1"
              >
                <img
                  src={currentLang.flag}
                  alt={`${currentLang.label} flag`}
                  className="h-5 w-7 rounded-sm object-cover"
                />
                <DownOutlined className="text-gray-500" />
              </Button>
            </Dropdown>

            {/* Notifications */}
            <Badge dot>
              <Button
                // style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                type="text"
                className="h-10 w-10 rounded-xl !bg-[#F6F8FB]"
                icon={<IoMdNotificationsOutline className="text-xl" />}
              />
            </Badge>

            {/* Profile */}
            <Link href={"/profile/account"}>
              <Button
                type="text"
                className="flex items-center gap-3 rounded-xl !bg-[#F6F8FB] px-1 !py-0.5"
              >
                <Avatar src={profile.image} size={28} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
