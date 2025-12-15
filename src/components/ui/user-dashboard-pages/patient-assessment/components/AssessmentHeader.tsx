"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { File } from "lucide-react";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";
export default function AssessmentHeader() {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const isMainAssessmentPage = pathname === "/profile/patient-assessment";
  return (
    <>
      {isMainAssessmentPage || lg ? (
        <PageNavbar
          icon={
            <Image
              src="/assets/icons/header/heart-rate.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-[32px] object-contain"
            />
          }
          title="Comprehensive Nursing Assessment Guide"
          subtitle="Create, organize, and enhance your study notes with AI assistance"
          isAiEnhanced={false}
        />
      ) : (
        <DetailsHeader
          title="Patient Assessment"
          back="/profile/patient-assessment"
        />
      )}
    </>
  );
}
