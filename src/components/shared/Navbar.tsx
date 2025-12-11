"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const menuItems = [
    { label: "Features", href: "/#features" },
    { label: "Nurse Nia", href: "/nurse-nia" },
    { label: "Pricing", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  return (
    <div className="bg-[#0a0e27] h-20 w-full  flex items-center justify-center  ">
      <div className="container mx-auto flex items-center justify-between text-white  font-[600px] text-sm">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/robot-nurse.png"
            alt="IQ-Nurse Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-[#0078ff] bg-clip-text text-transparent">IQ-Nurse</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-gray-300  transition-colors relative group">
              <span>{item.label}</span>
              {/* Optional: Add hover underline animation if desired, keeping it subtle as per standard modern navs */}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/auth/register">
          <button className="bg-gradient-to-r from-cyan-500 to-[#0078ff]   text-white font-bold py-2.5 px-8 rounded-full transition-all shadow-lg shadow-blue-500/30">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
