"use client";
import BrainIllustration from "@/components/shared/BrainIllustration";
import UpdatePassForm from "./UpdatePassForm";

export default function UpdatePasswordPage() {
  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative md:flex-1">
        <BrainIllustration
          title="Secure Your Account"
          text={
            <>
              You're just one step away from regaining access.
              <div className="my-2"></div>
              Once updated, use your new password to sign in to Studify and
              continue learning with ease.
            </>
          }
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <UpdatePassForm />
      </div>
    </div>
  );
}
