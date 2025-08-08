"use client";

import React from "react";
import Link from "next/link";
import { Badge, Button, Dropdown, Input, Avatar, Typography } from "antd";
import type { MenuProps } from "antd";
import {
  SearchOutlined,
  AudioOutlined,
  DownOutlined,
  BellOutlined,
  BulbOutlined,
  LogoutOutlined,
  CreditCardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { CiLight } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const { Text } = Typography;

type LangKey = "en" | "de" | "es";
type Lang = { key: LangKey; label: string; flag: string };

const LANGUAGES: Lang[] = [
  { key: "en", label: "English (US)", flag: "/assets/flag/us.svg" },
  { key: "de", label: "German", flag: "/assets/flag/de.svg" },
  { key: "es", label: "Spanish", flag: "/assets/flag/es.svg" },
];

// Language panel styled to match the Figma card
function LanguagePanel({
  selected,
  onSelect,
}: {
  selected: LangKey;
  onSelect: (key: LangKey) => void;
}) {
  return (
    <div
      className="w-72 rounded-2xl bg-white p-3 shadow-xl"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        {LANGUAGES.map((lang) => {
          const active = selected === lang.key;
          return (
            <button
              key={lang.key}
              onClick={() => onSelect(lang.key)}
              className="flex items-center justify-between rounded-xl bg-[#F6F8FB] px-3 py-3 transition-colors hover:bg-[#eef2f7]"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-6 w-10 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-gray-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={lang.flag || "/placeholder.svg"}
                    alt={`${lang.label} flag`}
                    className="h-6 w-10 object-cover"
                  />
                </span>
                <span className="text-[14px] font-medium text-[#121212]">
                  {lang.label}
                </span>
              </span>
              {/* Checkbox visual */}
              <span
                className="grid h-6 w-6 place-items-center rounded-md"
                style={{ background: active ? "#0B66E4" : "transparent" }}
              >
                <span
                  className="h-5 w-5 rounded-md border"
                  style={{
                    borderColor: active ? "transparent" : "#C9D2DC",
                    background: active ? "#0B66E4" : "transparent",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {active ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Profile panel styled to match the Figma card
function ProfilePanel({ onLogout }: { onLogout: () => void }) {
  const items: Array<{
    key: string;
    icon: React.ReactNode;
    label: React.ReactNode;
    href?: string;
    danger?: boolean;
  }> = [
    {
      key: "account",
      icon: (
        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#FFF1E6]">
          <UserOutlined style={{ color: "#DC6803" }} />
        </span>
      ),
      label: "Account & Security",
      href: "/settings/account",
    },
    {
      key: "billing",
      icon: (
        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#E6F4EE]">
          <CreditCardOutlined style={{ color: "#1D9A6C" }} />
        </span>
      ),
      label: "Billing & Subscription",
      href: "/settings/billing",
    },
    {
      key: "logout",
      icon: (
        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#FDECEC]">
          <LogoutOutlined style={{ color: "#D64545" }} />
        </span>
      ),
      label: "Logout",
      danger: true,
    },
  ];

  return (
    <div
      className="w-80 rounded-2xl bg-white p-3 shadow-xl"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const content = (
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8FB] px-3 py-3">
              {item.icon}
              <span
                className={`font-medium ${
                  item.danger ? "text-[#D64545]" : "text-[#121212]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
          return item.key === "logout" ? (
            <button key={item.key} onClick={onLogout} className="text-left">
              {content}
            </button>
          ) : (
            <Link
              key={item.key}
              href={item.href ?? "#"}
              className="no-underline"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Header() {
  const [lang, setLang] = React.useState<LangKey>("en");

  const currentLang = React.useMemo(
    () => LANGUAGES.find((l) => l.key === lang) ?? LANGUAGES[0],
    [lang]
  );
  const profile = {
    image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
    name: " Aiden Max",
    email: "sara.@example.com",
  };

  return (
    <div className=" border-[#C5D0D0] border-b  w-full bg-white">
      <div className=" px-5 flex items-center justify-between gap-4 rounded-none bg-transparent py-4">
        {/* Left: Sidebar toggle + Search */}
        <div className="flex flex-1 items-center gap-3 ">
          <Input
            size="large"
            allowClear
            placeholder="What do you want to study.."
            prefix={
              <SearchOutlined
                size={20}
                style={{
                  color: "#7B7B7B",
                }}
              />
            }
            suffix={
              <Button
                type="text"
                icon={<AudioOutlined />}
                style={{
                  backgroundColor: "#0038771A",
                  borderRadius: 4,
                  padding: 8,
                  color: "#003877",
                }}
              />
            }
            style={{
              backgroundColor: "#F6F7F8",
            }}
            className="h-12 max-w-2xl rounded-2xl bg-[#F6F7F8] outline-none"
          />
        </div>

        {/* Right: Actions container */}
        <div className="flex items-center gap-2 rounded-2xl bg-[#F6F8FB] p-1">
          {/* Language Dropdown */}
          <Dropdown
            trigger={["click"]}
            dropdownRender={() => (
              <LanguagePanel selected={lang} onSelect={(k) => setLang(k)} />
            )}
            placement="bottomRight"
          >
            <Button
              type="text"
              className="flex items-center gap-2 rounded-xl bg-white px-3 py-2"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentLang.flag || "/placeholder.svg"}
                alt={`${currentLang.label} flag`}
                className="h-5 w-7 rounded-sm object-cover"
              />
              <DownOutlined className="text-gray-500" />
            </Button>
          </Dropdown>

          {/* Theme */}
          <Button
            type="text"
            className="h-10 w-10 rounded-xl bg-white"
            icon={<CiLight className="text-xl" />}
          />

          {/* Notifications */}
          <Badge dot>
            <Button
              type="text"
              className="h-10 w-10 rounded-xl bg-white"
              icon={<IoMdNotificationsOutline className="text-xl" />}
            />
          </Badge>

          {/* Profile Dropdown */}
          <Dropdown
            trigger={["click"]}
            dropdownRender={() => (
              <ProfilePanel onLogout={() => console.log("logout")} />
            )}
            placement="bottomRight"
          >
            <Button
              type="text"
              className="flex items-center gap-3 rounded-xl bg-white px-2 py-1.5"
            >
              <Avatar src={profile?.image} size={32} />
              <span className="hidden text-left leading-tight md:block">
                <span className="block text-[14px] font-medium text-[#121212]">
                  {profile?.name}
                </span>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {profile?.email}
                </Text>
              </span>
              <DownOutlined className="hidden text-gray-500 md:block" />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
