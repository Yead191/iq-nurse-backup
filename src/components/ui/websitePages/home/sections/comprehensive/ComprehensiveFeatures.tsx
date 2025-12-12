import { featureCards } from "@/data/featureCards";
import React from "react";
import FeatureCard from "./FeatureCard";

export default function ComprehensiveFeatures() {
  return (
    <section id="features" className="py-16 lg:py-20 container">
      {/* heading */}
      <div className="text-center mb-16">
        <h6 className="section-tagline">Comprehensive Features</h6>
        <h2 className="section-title">Everything You Need to Excel</h2>
        <h6 className="section-subtitle">
          A complete suite of tools designed to support every aspect of your
          nursing education journey
        </h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards?.map((item, index) => (
          <FeatureCard key={index} index={index} item={item} Icon={item.icon} />
        ))}
      </div>
    </section>
  );
}
