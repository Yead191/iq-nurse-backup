import Link from "next/link";
import React from "react";
import {
  LogoutOutlined,
  CreditCardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Grid } from "antd";
import { toast } from "sonner";
export default function ProfilePanel() {
  const router = useRouter();
  const { lg } = Grid.useBreakpoint();
  const PROFILE_ITEMS = [
    {
      key: "account",
      icon: (
        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#FFF1E6]">
          <UserOutlined style={{ color: "#DC6803" }} />
        </span>
      ),
      label: lg ? "Account & Security" : "Account",
      href: lg ? "/profile/account-security" : "/profile/account",
    },
    {
      key: "subscription",
      icon: (
        <span className="grid h-8 w-8 place-items-center rounded-md bg-[#E6F4EE]">
          <CreditCardOutlined style={{ color: "#1D9A6C" }} />
        </span>
      ),
      label: "Billing & Subscription",
      href: "/profile/subscriptions",
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
  // logout
  const onLogout = () => {
    toast.warning("Are you sure you want to log out?", {
      duration: 4000,
      description: "You will be logged out and redirected to the login page.",
      action: {
        label: "Logout",
        onClick: () => {
          try {
            // Cookies.remove("user");
            // Cookies.remove("accessToken");
            toast.success("Logged out successfully");
            router.replace("/");
            router.refresh();
          } catch (error) {
            toast.error("Error logging out");
          }
        },
      },
    });
  };
  return (
    <div
      className="w-80 rounded-2xl bg-white p-3  shadow-xl"
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
            <button
              key={item.key}
              onClick={onLogout}
              className="text-left cursor-pointer"
            >
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
