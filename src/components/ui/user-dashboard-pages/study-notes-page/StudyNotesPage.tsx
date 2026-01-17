"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { BookOutlined } from "@ant-design/icons";
import { SelectedContent } from "./SelectedContent";
import { NclexSidebar } from "./NclexSidebar";
import { Grid } from "antd";
import { Bookmark, Printer, Share } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function MedicalSurgicalPage() {
  const { lg } = Grid.useBreakpoint();
  const searchParams = useSearchParams();
  const router = useRouter();
  const category = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || ""
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setExpandedCategories(new Set([category]));
    }
  }, [category]);

  /** ---------------- Handlers ---------------- */
  const handleCategorySelect = (categoryId: string) => {
    const newSet = new Set(expandedCategories);
    if (newSet.has(categoryId)) newSet.delete(categoryId);
    else newSet.add(categoryId);
    setExpandedCategories(newSet);

    setSelectedCategory(categoryId);
  };

  const handleSubcategorySelect = (
    categoryId: string,
    subcategoryId: string
  ) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);

    if (!lg) {
      // mobile: navigate to document page
      router.push(`/profile/study-notes/document/${subcategoryId}`);
    }
  };

  return (
    <section className="">
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/study-notes-icon.svg"
            alt="study notes"
            width={50}
            height={50}
            draggable={false}
            className="w-6 h-fit "
          />
        }
        title="Study Notes"
        topics={20}
      />

      <div className="flex gap-6">
        <NclexSidebar
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onCategorySelect={handleCategorySelect}
          onSubcategorySelect={handleSubcategorySelect}
          expandedCategories={expandedCategories}
        />

        {lg && (
          <SelectedContent
            selectedCategory={selectedCategory}
            selectedSubcategory={selectedSubcategory}
          />
        )}
      </div>
    </section>
  );
}
