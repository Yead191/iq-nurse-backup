import React from "react";
import CarePlanSideBar from "./CarePlanSideBar";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { File } from "lucide-react";

export default function CarePlanSection() {
  return (
    <div>
      <PageNavbar
        icon={<File />}
        title="Care Plans"
        subtitle="Comprehensive NCLEX study materials with interactive videos and visual aids"
        isAiEnhanced={true}
      />

      <CarePlanSideBar />
    </div>
  );
}
