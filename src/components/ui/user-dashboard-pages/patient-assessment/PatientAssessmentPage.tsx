"use client";

import { assessmentCategories } from "@/data/assessmentCategories";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
import CategoryButtons from "./CategoryButtons";
import AssessmentTabs from "./AssessmentTabs";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Bookmark, File, Share } from "lucide-react";

export default function PatientAssessmentPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    assessmentCategories[0]
  );

  return (
    <section>
      <PageNavbar
        icon={<File className=" text-black" />}
        title="My Library"
        subtitle="Organize and manage your bookmarked study notes in custom folders"
        isAiEnhanced={true}
        actions={[
          {
            label: "Bookmark",
            icon: <Bookmark size={18} className="mt-1.5" />,
            onClick: () => console.log("Bookmark"),
            isPrimary: false,
          },
          {
            label: "Share",
            icon: <Share size={18} className="mt-1" />,
            onClick: () => console.log("Share"),
            isPrimary: false,
          },
        ]}
      />
      <div className="px-4 lg:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-4">
            <CategoryCard category={selectedCategory} />
            <CategoryButtons
              categories={assessmentCategories}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            <AssessmentTabs category={selectedCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}
