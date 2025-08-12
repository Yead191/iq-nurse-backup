"use client";

import { Breadcrumb } from "antd";
import Image from "next/image";
import folderImg from "@/assets/Folder.svg";

import arrowImg from "@/assets/arrow.svg";
import Link from "next/link";

interface PageBreadcrumbProps {
  itemImg?: any;
  itemLabel?: any;
}

export function PageBreadcrumb({ itemImg, itemLabel }: PageBreadcrumbProps) {
  return (
    <Breadcrumb
      className="[&_.ant-breadcrumb-separator]:flex [&_.ant-breadcrumb-separator]:items-center"
      separator={
        <Image
          src={arrowImg}
          height={12}
          width={16}
          alt="arrow"
          className="inline-block"
        />
      }
      items={[
        {
          title: (
            <Link href={"/profile/home"}>
              <div className="flex items-center gap-1 text-[#82808F]">
                <Image src={folderImg} height={14} width={14} alt="folder" />
                Home
              </div>
            </Link>
          ),
        },
        {
          title: (
            <div className="flex items-center gap-1 text-[#82808F]">
              <Image src={itemImg} height={14} width={14} alt={itemLabel} />
              {itemLabel}
            </div>
          ),
        },
      ]}
    />
  );
}
