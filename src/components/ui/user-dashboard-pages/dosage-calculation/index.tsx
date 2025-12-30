"use client";

import { DosageCalculationData } from "@/data/dosage-calculation/dosageSidebarData";
import React, { useMemo } from "react";

type Props = {
  slug: string;
};

export default function DosageContentClient({ slug }: Props) {
  const content = useMemo(() => {
    return DosageCalculationData.find((item) => item.id === slug);
  }, [slug]);

  const renderContent = () => {
    switch (slug) {
      case "introduction":
        return <>intro</>;
      case "basic-math":
        return <>intro</>;

      default:
        return <div>Content coming soon...</div>;
    }
  };

  if (!content) {
    return <div className="p-4">Content not found for {slug}</div>;
  }

  return (
    <div className="px-4 lg:px-0 py-4 lg:py-0">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
