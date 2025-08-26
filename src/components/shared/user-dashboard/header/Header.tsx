"use client";

import React from "react";
import { Badge, Button, Dropdown, Avatar, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CiLight } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import LanguagePanel from "./LanguagePanel";
import ProfilePanel from "./ProfilePanel";
import SearchBar from "./SearchBar";
import { LangKey, LANGUAGES, PROFILE_ITEMS } from "@/data/headerConstants";

const { Text } = Typography;
export const profile = {
  image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
  name: "Aiden Max",
  email: "sara.@example.com",
};

export default function Header() {
  const [lang, setLang] = React.useState<LangKey>("en");
  const currentLang = React.useMemo(
    () => LANGUAGES.find((l) => l.key === lang) ?? LANGUAGES[0],
    [lang]
  );

  return (
    <div className="border-b border-[#C5D0D0] w-full bg-white lg:h-[80px] ">
      <div className="px-5 flex items-center justify-between gap-4 py-4">
        {/* Left */}
        <div className="flex flex-1 items-center gap-3">
          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 rounded-2xl bg-[#F6F8FB] p-1">
          {/* Language */}
          <Dropdown
            trigger={["click"]}
            popupRender={() => (
              <LanguagePanel selected={lang} onSelect={setLang} />
            )}
          >
            <Button
              type="text"
              className="flex items-center gap-2 rounded-xl bg-white px-3 py-2"
            >
              <img
                src={currentLang.flag}
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

          {/* Profile */}
          <Dropdown trigger={["click"]} popupRender={() => <ProfilePanel />}>
            <Button
              type="text"
              className="flex items-center gap-3 rounded-xl bg-white px-2 py-1.5"
            >
              <Avatar src={profile.image} size={32} />
              <span className="hidden text-left leading-tight md:block">
                <span className="block text-[14px] font-medium text-[#121212]">
                  {profile.name}
                </span>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {profile.email}
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
