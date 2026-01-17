"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";
export default function CarePlanHeader() {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const isMainAssessmentPage = pathname === "/profile/care-plans";
  return (
    <>
      {isMainAssessmentPage || lg ? (
        <PageNavbar
          icon={
            <Image
              src="/assets/icons/header/care.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-[32px] object-contain"
            />
          }
          title="Care Plans"
          topics={24}
        />
      ) : (
        <DetailsHeader title="Care Plans" back="/profile/care-plans" />
      )}
    </>
  );
}
