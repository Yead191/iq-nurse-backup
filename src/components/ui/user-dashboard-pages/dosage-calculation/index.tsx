"use client";

import { DosageCalculationData } from "@/data/dosage-calculation/dosageSidebarData";
import React, { useMemo } from "react";

type Props = {
  slug: string;
};

import TypesOfCalculation from "./pages/TypesOfCalculation";
import ClinicalDecisionPage from "./pages/ClinicalDecisionPage";
import SuccessStrategiesPage from "./pages/SuccessStrategiesPage";
import QuickReferencePage from "./pages/QuickReferencePage";
import CalculationMethodsPage from "./pages/CalculationMethodsPage";

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
      case "calculation-methods":
        return <CalculationMethodsPage />;
      case "types-of-calculations":
        return <TypesOfCalculation />;
      case "clinical-decision":
        return <ClinicalDecisionPage />;
      case "nclex-rn-strategies":
        return <SuccessStrategiesPage />;
      case "reference-guide":
        return <QuickReferencePage />;

      default:
        return <div>Content coming soon...</div>;
    }
  };

  if (!content) {
    return <div className="p-4">Content not found for {slug}</div>;
  }

  return (
    <div className="px-4 lg:px-0 py-4 lg:py-0 pb-4">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
