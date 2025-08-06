"use client";
import { Check } from "lucide-react";

import { Grid } from "antd";
import VideoContent from "./VideoContent";

export default function WhyJoinUsSection() {
  const { lg, md } = Grid.useBreakpoint();

  const reasons = [
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci.",
  ];
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home-images/join-us-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: lg ? "right" : "bottom",
        backgroundSize: lg ? "50% 100%" : md ? "80%" : "95%",
      }}
      className="container mx-auto  lg:overflow-visible p-4 lg:p-20 mt-6 mb-12 lg:px-4 lg:pr-20"
    >
      <div className="relative ">
        <div className="grid lg:grid-cols-2 gap-12 items-center p-4 md:p-8 lg:p-[60px]  rounded-4xl shadow-xl">
          {/* Left Content */}
          <div className="space-y-8 overflow-hidden py-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#0F172A] mb-8">
                Why join us
              </h2>

              <div className="space-y-4">
                {reasons?.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-[#0F172A] text-[18px] leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <VideoContent />
        </div>
      </div>
    </section>
  );
}
