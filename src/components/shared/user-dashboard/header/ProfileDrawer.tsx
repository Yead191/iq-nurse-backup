"use client";

import React from "react";
import { Drawer, Button, ConfigProvider } from "antd";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  Settings2,
  FileText,
  Languages,
  HelpCircle,
  UserPlus,
  ShieldCheck,
  Contact,
  LogOut,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { LangKey } from "@/data/headerConstants";
import { IoIosSettings } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

interface ProfileDrawerProps {
  open: boolean;
  onClose: () => void;
  lang: LangKey;
  currentLang: {
    key: string;
    label: string;
    flag: string;
  };
}

const MENU_ITEMS = [
  {
    key: "settings",
    label: "Settings",
    icon: <IoIosSettings size={24} className="text-primary" />,
    href: "/profile/account-security",
  },
  {
    key: "billing",
    label: "Billing & Subscriptions",
    icon: "/assets/icons/drawer/billing.svg",
    href: "/profile/subscriptions",
  },
  {
    key: "language",
    label: "Language Preference",
    icon: "/assets/icons/drawer/language.svg",
    href: "/profile/language-preference",
  },
  {
    key: "faqs",
    label: "F.A.Q.s",
    icon: "/assets/icons/drawer/faq.svg",
    href: "/profile/faqs",
  },
  {
    key: "invite",
    label: "Invite a Friend",
    icon: "/assets/icons/drawer/invite.svg",
    href: "/profile/invite-friends",
  },
  {
    key: "terms",
    label: "Terms & Conditions",
    icon: "/assets/icons/drawer/terms.svg",
    href: "/profile/terms-service",
  },
  {
    key: "privacy",
    label: "Privacy Policy",
    icon: "/assets/icons/drawer/privacy.svg",
    href: "/profile/privacy-policy",
  },
  {
    key: "contact",
    label: "Contact Us",
    icon: "/assets/icons/drawer/contact.svg",
    href: "/profile/contact-us",
  },
  {
    key: "logout",
    label: "Logout",
    icon: "/assets/icons/drawer/logout.svg",
    isLogout: true,
  },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebook size={24} className="text-primary" />, href: "#" },
  { icon: <FaInstagram size={24} className="text-primary" />, href: "#" },
  { icon: <FaPinterest size={24} className="text-primary" />, href: "#" },
  { icon: <FaXTwitter size={24} className="text-primary" />, href: "#" },
];

export default function ProfileDrawer({ open, onClose }: ProfileDrawerProps) {
  const router = useRouter();

  const handleLogout = () => {
    toast.warning("Are you sure you want to log out?", {
      duration: 4000,
      description: "You will be logged out and redirected to the login page.",
      action: {
        label: "Logout",
        onClick: () => {
          try {
            toast.success("Logged out successfully");
            router.replace("/");
            onClose();
          } catch (error) {
            toast.error("Error logging out");
          }
        },
      },
    });
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          // Drawer specific theme if needed
        },
        token: {
          // Global token overrides
        },
      }}
    >
      <Drawer
        open={open}
        onClose={onClose}
        closable={false}
        width="70%"
        title={null}
        styles={{
          body: {
            padding: 0,
            display: "flex",
            flexDirection: "column",
            background: "#FFFFFF",
          },
          header: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "16px 24px",
            borderBottom: "1px solid #f0f0f0",
          },
          mask: {
            background: "rgba(0, 0, 0, 0.45)",
          },
        }}
        className="profile-drawer"
      >
        <div className="flex flex-col h-full bg-white relative ">
          <div className="flex justify-end items-center p-4 ">
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          {/* Menu Items */}
          <div className="flex-1 flex flex-col gap-y-6 px-6 pt-2 pb-8">
            {MENU_ITEMS.map((item) => {
              if (item.isLogout) {
                return (
                  <button
                    key={item.key}
                    onClick={handleLogout}
                    className="flex items-center gap-4 group text-left"
                  >
                    <div className="text-primary group-hover:text-primary transition-colors">
                      {typeof item.icon === "string" &&
                      item.icon.endsWith(".svg") ? (
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={30}
                          height={30}
                          className="w-[24px] h-fit object-contain"
                        />
                      ) : (
                        item.icon
                      )}
                    </div>
                    <span className="text-[14px]  text-[#6B6262] group-hover:text-primary transition-colors font-medium">
                      {item.label}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={item.key}
                  href={item.href || "#"}
                  onClick={onClose}
                  className="flex items-center gap-4 group"
                >
                  <div className="text-primary group-hover:text-primary transition-colors">
                    {typeof item.icon === "string" &&
                    item.icon.endsWith(".svg") ? (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={24}
                        height={24}
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <span className="text-[14px]  text-[#6B6262] group-hover:text-primary transition-colors font-medium">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer Socials */}
          <div className="mt-auto pt-8 pb-4 px-6">
            <div className="flex items-center gap-10 justify-start ps-1">
              {SOCIAL_LINKS.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="text-primary hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </ConfigProvider>
  );
}
