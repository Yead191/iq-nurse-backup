"use client";

import { VitalSignsData } from "@/data/vital-signs/VitalSignsData";
import React, { useMemo } from "react";
import VitalIntroduction from "./pages/VitalIntroduction";
import TemperaturePage from "./pages/TemperaturePage";
import PulsePage from "./pages/PulsePage";
import RespirationPage from "./pages/RespirationPage";
import BloodPressurePage from "./pages/BloodPressurePage";
import PainAssessmentPage from "./pages/PainAssessmentPage";
import DocumentationPage from "./pages/DocumentationPage";
import FactorsAffectingPage from "./pages/FactorsAffectingPage";
import TestTakingPage from "./pages/TestTakingPage";
import QuickReferencePage from "./pages/QuickReferencePage";

type Props = {
  slug: string;
};

export default function VitalContentClient({ slug }: Props) {
  const content = useMemo(() => {
    return VitalSignsData.find((item) => item.id === slug);
  }, [slug]);

  const renderContent = () => {
    switch (slug) {
      case "introduction":
        return <VitalIntroduction />;
      case "temperature":
        return <TemperaturePage />;
      case "pulse":
        return <PulsePage />;
      case "respiration":
        return <RespirationPage />;
      case "blood-pressure":
        return <BloodPressurePage />;
      case "pain-assessment":
        return <PainAssessmentPage />;
      case "documentation-guidelines":
        return <DocumentationPage />;
      case "factors-affecting":
        return <FactorsAffectingPage />;
      case "test":
        return <TestTakingPage />;
      case "quick-reference":
        return <QuickReferencePage />;
      default:
        return <div>Content coming soon...</div>;
    }
  };

  if (!content) {
    return <div className="p-4">Content not found for {slug}</div>;
  }

  return (
    <div className="px-4 lg:px-0 py-8 lg:py-0">
      <div className="h-full">{renderContent()}</div>
    </div>
  );
}
