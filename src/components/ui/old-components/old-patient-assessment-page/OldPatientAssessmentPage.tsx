import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import React, { useState } from "react";
import heartImg from "@/assets/heart-hands.svg";
import PageHeader from "../../user-dashboard-pages/study-notes-page/PageHeader";
import {
  assessmentCategories,
  PatientAssessmentProps,
} from "@/data/assessmentCategories";
import { Card } from "antd";
import AssessmentCard from "./AssessmentCard";

export default function OldPatientAssessmentPage({
  categories = assessmentCategories,
}: PatientAssessmentProps) {
  return (
    <div>
      <PageBreadcrumb itemLabel={"Patient Assessment"} itemImg={heartImg} />
      <PageHeader
        title="Patient Assessment"
        totalNotes={12}
        label="Assessments"
      />
      <div
        style={{
          boxShadow: "4px 4px 42px 0px rgba(0, 0, 0, 0.10)",
          borderRadius: 11,
        }}
        className={`w-full p-4 lg:p-6`}
      >
        <h1 className="bg-[#F6F7F8] text-xl font-medium px-6 py-4 rounded-[5px] mb-4">
          Patient Assessment
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <AssessmentCard category={category} key={category.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
