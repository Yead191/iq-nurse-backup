"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import {
  DownloadOutlined,
  PlusOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Bookmark } from "lucide-react";

import { SelectedContent } from "./SelectedContent";
import { NclexSidebar } from "./NclexSidebar";
import { Grid } from "antd";

export default function MedicalSurgicalPage() {
  const { lg } = Grid.useBreakpoint();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    category || ""
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>();

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const handleSelectionChange = (
    categoryId: string,
    subcategoryId?: string
  ) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId);
  };

  return (
    <section className="min-h-[calc(100vh-94px)]">
      <PageNavbar
        icon={<BookOutlined />}
        title="Study Notes"
        subtitle="Comprehensive NCLEX study materials with interactive videos and visual aids"
        isAiEnhanced={true}
        actions={[
          {
            label: "Bookmark",
            icon: (
              <Bookmark size={18} className="mt-1.5 text-black fill-current" />
            ),
            onClick: () => console.log("Bookmark"),
          },
          {
            label: "Download",
            icon: <DownloadOutlined  />,
            onClick: () => console.log("Download"),
          },
          {
            label: "Create Note",
            icon: <PlusOutlined />,
            onClick: () => console.log("Create Note"),
            isPrimary: true,
          },
        ]}
      />
      <div className="flex gap-6 ">
        <NclexSidebar
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onSelectionChange={handleSelectionChange}
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
