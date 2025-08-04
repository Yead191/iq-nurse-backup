"use client";
import BrainIllustration from "@/components/shared/BrainIllustration";
import React from "react";
import TermsForm from "./TermsForm";

export default function TermsConditionPage() {
  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative flex-1">
        <BrainIllustration
          title="Why This Matters"
          text="Our Terms of Use protect your rights as a student and help us keep Studify safe and fair for everyone."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <TermsForm />
      </div>
    </div>
  );
}
