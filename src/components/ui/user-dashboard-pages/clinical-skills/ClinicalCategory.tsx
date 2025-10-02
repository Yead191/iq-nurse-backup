"use client";
import React from "react";
import ClinicalSkills from "./ClinicalSkills";
import DetailsHeader from "@/components/shared/DetailsHeader";
import { Bookmark, Search } from "lucide-react";

export default function ClinicalCategory({ category }: any) {
  return (
    <section>
      <DetailsHeader
        primaryBg={false}
        title="Clinical Skills"
        actions={[
          {
            icon: Search,
            label: "Share",
            hoverColor: "text-green-600",
            onClick: () => console.log("Shared!"),
          },
          {
            icon: Bookmark,
            label: "Bookmark",
            hoverColor: "text-green-600",
            onClick: () => console.log("Bookmarked!"),
          },
        ]}
      />
      <ClinicalSkills
        categories={{ skillCategoryId: category, setSkillId: null }}
      />
    </section>
  );
}
