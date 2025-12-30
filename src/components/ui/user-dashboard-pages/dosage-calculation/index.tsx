"use client";

import { DosageCalculationData } from "@/data/dosage-calculation/dosageSidebarData";
import React, { useMemo } from "react";
import DosageIntroPage from "./pages/DosageIntroPage";
import BasicMathPage from "./pages/BasicMathPage";

type Props = {
  slug: string;
};

import TypesOfCalculation from "./pages/TypesOfCalculation";

export default function DosageContentClient({ slug }: Props) {
  const content = useMemo(() => {
    return DosageCalculationData.find((item) => item.id === slug);
  }, [slug]);

  const renderContent = () => {
    switch (slug) {
      case "introduction":
        return <DosageIntroPage />;
      case "basic-math":
        return <BasicMathPage />;
        return <>intro</>;
      case "types-of-calculations":
        return <TypesOfCalculation />;

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
