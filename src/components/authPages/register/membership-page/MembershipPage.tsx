"use client";
import BrainIllustration from "@/components/shared/BrainIllustration";
import React from "react";
import MembershipBenefits from "./MembershipForm";

export default function MembershipPage() {
  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative flex-1">
        <BrainIllustration
          title="Enjoy Amboss Uninterrupted"
          text="Purchase membership now to extend your access"
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <MembershipBenefits />
      </div>
    </div>
  );
}
