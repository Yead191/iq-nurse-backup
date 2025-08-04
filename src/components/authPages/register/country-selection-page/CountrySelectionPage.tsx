"use client";
import BrainIllustration from "../../../shared/BrainIllustration";
import CountrySelectionForm from "./CountrySelectionForm";
export default function CountrySelectionPage() {
  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)]  ">
      {/* Left Side - Illustration and Info */}
      <div className="flex-1 relative">
        <BrainIllustration
          title="Why We Ask This"
          text="Knowing your location helps us tailor your study tools, suggest relevant exam formats, and connect you with local content if available."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 ">
        <CountrySelectionForm />
      </div>
    </div>
  );
}
