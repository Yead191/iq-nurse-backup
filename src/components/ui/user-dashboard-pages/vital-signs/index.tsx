"use client";

import { VitalSignsData } from "@/data/vital-signs/VitalSignsData";
import React, { useMemo } from "react";
import VitalIntroduction from "./pages/VitalIntroduction";
import TemperaturePage from "./pages/TemperaturePage";
import PulsePage from "./pages/PulsePage";

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
