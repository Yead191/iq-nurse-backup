"use client";

import { useEffect, useState } from "react";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import heartImg from "@/assets/heart-hands.svg";
import PageHeader from "./PageHeader";
import { documentationData, medicalCategories } from "@/data/medicalData";
import CategorySwiper from "./CategorySwiper";
import DocumentationGrid from "./DocumentationGrid";
import { useRouter, useSearchParams } from "next/navigation";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import {
  DownloadOutlined,
  PlusOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Bookmark } from "lucide-react";
import CategorySidebar from "./CategorySidebar";

export default function MedicalSurgicalPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState(
    medicalCategories[0].id
  );
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  // Filter documentation by selected category
  const filteredDocs = documentationData.filter(
    (doc: any) => doc.categoryId === selectedCategory
  );

  // Sort documentation
  const sortedDocs = [...filteredDocs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Paginate documentation
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDocs = sortedDocs.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (categoryId: string) => {
    router.push(`/profile/study-notes?category=${categoryId}`);
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <section>
      <PageNavbar
        icon={<BookOutlined />}
        title="Study Notes"
        subtitle="Comprehensive NCLEX study materials with interactive videos and visual aids"
        isAiEnhanced={true}
        actions={[
          {
            label: "Bookmark",
            icon: <Bookmark size={18} className="mt-1.5" />,
            onClick: () => console.log("Bookmark"),
          },
          {
            label: "Download",
            icon: <DownloadOutlined />,
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
      <div className="flex gap-6 px-4 lg:px-5">
        <CategorySidebar
          selectedId={selectedDocId}
          onSelect={setSelectedDocId}
        />

        <main className="flex-1 p-4 border rounded-lg">
          {selectedDocId ? (
            <div className="text-gray-800">
              <h2 className="text-lg font-semibold">Selected Doc ID:</h2>
              <p className="mt-2">{selectedDocId}</p>
            </div>
          ) : (
            <p className="text-gray-500">
              Select a note from the left sidebar.
            </p>
          )}
        </main>
      </div>
    </section>
  );
}
