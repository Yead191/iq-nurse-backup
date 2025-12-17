"use client";
import React from "react";
import DetailsHeader from "@/components/shared/DetailsHeader";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Bookmark, File, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";
import { toast } from "sonner";
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
          actions={[
            {
              icon: Bookmark,
              label: "Bookmark",
              hoverColor: "text-blue-600",
              onClick: () => toast.success("Bookmarked!"),
            },
            {
              icon: Share2,
              label: "Share",
              hoverColor: "text-green-600",
              className: "text-[#02478D] fill-current",
              onClick: () => toast.success("Shared!"),
            },
          ]}
        />
      )}
    </>
  );
}
