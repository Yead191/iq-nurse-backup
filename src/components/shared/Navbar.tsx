"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menuItems = [
    { label: "SUPPORT", href: "/support" },
    { label: "LOG IN", href: "/auth/login" },
  ];

  return (
    <div className="bg-[#1b3950]">
      <div className="flex items-center justify-end text-white p-4 space-x-4 font-[600] text-sm ">
        {menuItems.map((item, index) => (
          <div key={item.label} className="flex items-center gap-4">
            <Link href={item.href} className="relative group cursor-pointer">
              <span>{item.label}</span>
              <div className="absolute left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {index < menuItems.length - 1 && (
              <span className="text-gray-400">|</span>
            )}
          </div>
        ))}

        {/* Register Button */}
        <Link href="/auth/register">
          <button className="bg-[#0044db] hover:bg-blue-700 text-white font-bold py-1 px-3 rounded cursor-pointer">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
