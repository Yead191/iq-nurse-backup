"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import {  Handbag } from "lucide-react";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
export default function CarePlanHeader() {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();
  const isMainAssessmentPage = pathname === "/profile/care-plans";
  return (
    <>
      {isMainAssessmentPage || lg ? (
        <PageNavbar
          icon={<Handbag  />}
          title="Care Plans"
          subtitle="Comprehensive nursing care plans for patient management"
          isAiEnhanced={true}
        />
      ) : (
        <DetailsHeader
          title="Care Plans"
          back="/profile/care-plans"
        />
      )}
    </>
  );
}
