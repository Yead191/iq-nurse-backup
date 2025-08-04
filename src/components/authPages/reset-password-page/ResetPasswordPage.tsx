"use client";

import BrainIllustration from "@/components/shared/BrainIllustration";
import ResetForm from "./ResetForm";

export default function ResetPasswordPage() {
  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative flex-1">
        <BrainIllustration
          title="Forgot Your Password?"
          text="It happens! We’re here to help you get back on track."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <ResetForm />
      </div>
    </div>
  );
}
