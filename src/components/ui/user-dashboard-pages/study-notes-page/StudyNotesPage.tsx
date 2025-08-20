"use client";

import { useEffect, useState } from "react";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import heartImg from "@/assets/heart-hands.svg";
import PageHeader from "./PageHeader";
import { documentationData, medicalCategories } from "@/data/medicalData";
import CategorySwiper from "./CategorySwiper";
import DocumentationGrid from "./DocumentationGrid";
import { useSearchParams } from "next/navigation";

export default function MedicalSurgicalPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    medicalCategories[0].id
  );
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

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
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <PageBreadcrumb itemImg={heartImg} itemLabel="Study Notes" />

      <PageHeader
        totalNotes={documentationData.length}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        title="Medical Surgical"
        label="Notes"
      />

      <div className="overflow-hidden ">
        <CategorySwiper
          categories={medicalCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <DocumentationGrid
        documents={paginatedDocs}
        totalDocuments={sortedDocs.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
