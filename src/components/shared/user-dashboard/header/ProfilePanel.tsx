import Link from "next/link";
import React from "react";
import {
  LogoutOutlined,
  CreditCardOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function ProfilePanel({ onLogout }: { onLogout: () => void }) {
  const PROFILE_ITEMS = [
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
        {PROFILE_ITEMS?.map((item: any) => {
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
