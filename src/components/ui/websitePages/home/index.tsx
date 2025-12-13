import React from "react";
import Banner from "./sections/Banner";
import ComprehensiveFeatures from "./sections/comprehensive/ComprehensiveFeatures";
import Pricing from "./sections/Pricing";

export default function HomePage() {
  return (
    <section>
      <Banner />
      <ComprehensiveFeatures />
      <Pricing />
    </section>
  );
}
