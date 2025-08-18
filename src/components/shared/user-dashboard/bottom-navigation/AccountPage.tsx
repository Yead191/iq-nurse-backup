"use client";
import Image from "next/image";
import Link from "next/link";
import { profile } from "../header/Header";

export default function AccountPage() {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  const menuItems = [
    {
      label: "Account & Security",
      icon: "/assets/sidebar-icons/security-icon.svg",
      url: "/profile/account-security",
    },
    {
      label: "Billing & Subscription",
      icon: "/assets/sidebar-icons/billing-icon.svg",
      url: "/profile/subscriptions",
    },
    {
      label: "Language Preference",
      icon: "/assets/sidebar-icons/language-icon.svg",
      url: "/profile/language-preference",
    },
    {
      label: "FAQs",
      icon: "/assets/sidebar-icons/faq-icon.svg",
      url: "/profile/faqs",
    },
    {
      label: "Privacy & Policy",
      icon: "/assets/sidebar-icons/privacy-icon.svg",
      url: "/profile/privacy-policy",
    },
    {
      label: "Terms & Condition",
      icon: "/assets/sidebar-icons/terms-icon.svg",
      url: "/profile/terms-service",
    },
    {
      label: "Invite Your Friends",
      icon: "/assets/sidebar-icons/invite-icon.svg",
      url: "/profile/invite-friends",
    },
    {
      label: "Contact Us",
      icon: "/assets/sidebar-icons/contact-us-icon.svg",
      url: "/profile/contact-us",
    },
    {
      label: "About Us",
      icon: "/assets/sidebar-icons/info-icon.svg",
      url: "/profile/about-us",
    },
    {
      label: "Logout",
      icon: "/assets/sidebar-icons/logout-icon.svg",
      action: handleLogout,
    },
  ];

  return (
    <div className="max-w-md lg:max-w-[600px] mx-auto bg-white">
      {/* Header */}
      {/* <h1 className="text-xl font-bold text-center mb-6">Account</h1> */}

      {/* User Info */}
      <div className="flex items-center gap-4 bg-[#F6F7F8] p-3 rounded-xl mb-4">
        <img
          src={profile.image}
          alt={profile.name}
          className="rounded-full w-[50px]"
        />
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="text-sm text-gray-500">{profile.email}</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item, index) =>
          item.action ? (
            <button
              key={index}
              onClick={item.action}
              className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors text-left"
            >
              <Image src={item.icon} alt={item.label} width={24} height={24} />
              <span className="text-gray-800">{item.label}</span>
            </button>
          ) : (
            <Link key={index} href={item.url} passHref>
              <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-100 transition-colors text-left">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <span className="text-gray-800">{item.label}</span>
              </button>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
