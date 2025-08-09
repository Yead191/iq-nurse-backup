"use client";

import { Breadcrumb } from "antd";
import Image from "next/image";

export function HomeBreadcrumbs() {
  return (
    <div className="flex items-center gap-2 text-[#82808F]">
      <Image
        src={"/assets/icons/folder.svg"}
        height={14}
        width={14}
        alt="folder"
      />
      <Breadcrumb items={[{ title: "Home" }]} />
    </div>
  );
}
