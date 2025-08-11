"use client";

import { Breadcrumb } from "antd";
import Image from "next/image";
import img from "@/assets/Folder.svg"

export function HomeBreadcrumbs() {
  return (
    <div className="flex items-center gap-2 text-[#82808F]">
      <Image
        src={img}
        height={14}
        width={14}
        alt="folder"
      />
      <Breadcrumb items={[{ title: "Home" }]} />
    </div>
  );
}
