"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { File } from "lucide-react";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
export default function AssessmentHeader() {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const isMainAssessmentPage = pathname === "/profile/patient-assessment";
  return (
    <>
      {isMainAssessmentPage || lg ? (
        <PageNavbar
          icon={<File />}
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
