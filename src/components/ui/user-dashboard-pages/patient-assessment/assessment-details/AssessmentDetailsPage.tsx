"use client";
import DetailsHeader from "@/components/shared/DetailsHeader";
import React from "react";
import { Bookmark, Share2, Printer } from "lucide-react";
import { toast } from "sonner";
import { assessmentCategories } from "@/data/assessmentCategories";
import AssessmentTabs from "../AssessmentTabs";
export default function AssessmentDetailsPage({ id }: any) {
  console.log(id);
  const category = assessmentCategories.find((cat) => cat.id === id);
  //   console.log(category);
  return (
    <section>
      <DetailsHeader
        title="Patient Assessment"
        back={`/profile/patient-assessment?tab=${category?.id}`}
        actions={[
          {
            icon: Bookmark,
            label: "Bookmarks",
            hoverColor: "text-blue-600",
            onClick: () => toast.success("Bookmarked!"),
          },
          {
            icon: Share2,
            label: "Share",
            hoverColor: "text-green-600",
            onClick: () => console.log("Shared!"),
          },
          {
            icon: Printer,
            label: "Print",
            hoverColor: "text-purple-600",
            onClick: () => window.print(),
          },
        ]}
      />
      <div>
        <AssessmentTabs category={category} />
      </div>
    </section>
  );
}
