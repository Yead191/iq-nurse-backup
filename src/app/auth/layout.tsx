"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="container mx-auto p-4">
      <Link
        href={"/"}
        className={`flex justify-center items-center md:justify-start md:items-center ${
          pathname === "/auth/compare-membership" ? "hidden" : "block"
        }`}
      >
        <Image src={"/Logo.png"} height={48} width={180} alt="logo" className="w-[145px] h-[48px]"/>
      </Link>
      <div className=" ">{children}</div>
    </div>
  );
}
