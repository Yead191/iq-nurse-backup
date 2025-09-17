"use client";

import { Pagination } from "antd";
import { Documentation } from "@/data/medicalData";
import DocumentationCard from "../../user-dashboard-pages/study-notes-page/DocumentationCard";

interface DocumentationGridProps {
  documents: Documentation[];
  totalDocuments: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function DocumentationGrid({
  documents,
  totalDocuments,
  currentPage,
  itemsPerPage,
  onPageChange,
}: DocumentationGridProps) {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalDocuments);

  return (
    <div className="md:border md:border-[#C5D0D0] md:p-6 rounded-[10px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8  ">
        {documents.map((doc) => (
          <DocumentationCard key={doc.id} document={doc} />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">
          Showing {startIndex}-{endIndex.toString().padStart(2, "0")} of{" "}
          {totalDocuments}
        </span>

        <Pagination
          current={currentPage}
          total={totalDocuments}
          pageSize={itemsPerPage}
          onChange={onPageChange}
          showSizeChanger={false}
          className="ant-pagination-custom"
        />
      </div>
    </div>
  );
}
