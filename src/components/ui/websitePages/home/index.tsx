import React from "react";
import Banner from "./sections/Banner";
import ComprehensiveFeatures from "./sections/comprehensive/ComprehensiveFeatures";
import Pricing from "./sections/Pricing";
import WhatNursingSay from "./sections/WhatNursingSay/WhatNursingSay";
import ReadyToTransform from "./sections/ReadyToTransform";
import PowerfulTools from "./sections/PowerfulTools/PowerfulTools";


export default function HomePage() {
  return (
    <section>
      <Banner />
      <ComprehensiveFeatures />
      <PowerfulTools />
      <Pricing />
      <WhatNursingSay />
      <ReadyToTransform />
    </section>
  );
}
