"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";

export default function DynamicHeader({
  title,
  subtitle,
  icon,
  mobileTitle,
  basePath,
}: {
  title: string;
  subtitle: string;
  icon: string;
  actions?: any;
  mobileTitle?: string;
  basePath?: string;
}) {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const isMainAssessmentPage = pathname === basePath;
  return (
    <>
      {isMainAssessmentPage || lg ? (
        <PageNavbar
          icon={
            <Image
              src={icon}
              alt="icon"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-[32px] object-contain"
            />
          }
          title={title}
          subtitle={subtitle}
          isAiEnhanced={true}
        />
      ) : (
        <DetailsHeader title={mobileTitle} back={basePath} />
      )}
    </>
  );
}
