"use client";
import React, { useState } from "react";
import heartImg from "@/assets/heart-hands.svg";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import PageHeader from "../study-notes-page/PageHeader";
import { skillCategories, skillDocumentationData } from "@/data/skillData";
import CategorySwiper from "../../old-components/old-study-notes/CategorySwiper";
import DocumentationGrid from "../../old-components/old-study-notes/DocumentationGrid";
import SkillDocumentationGrid from "./SkillDocumentationGrid";

export default function ClinicalsPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    skillCategories[0].id
  );
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter documentation by selected category
  const filteredDocs = skillDocumentationData.filter(
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
      <PageBreadcrumb itemImg={heartImg} itemLabel="Clinicals" />
      <PageHeader
        title="Clinical Skills"
        totalNotes={skillDocumentationData.length}
        sortBy={sortBy}
        onSortChange={handleSortChange}
        label="Skills"
      />
      <CategorySwiper
        categories={skillCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SkillDocumentationGrid
        documents={paginatedDocs}
        totalDocuments={sortedDocs.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
