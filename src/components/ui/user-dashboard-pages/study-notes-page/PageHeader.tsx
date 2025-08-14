"use client";

import { Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

interface PageHeaderProps {
  totalNotes: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  title?: string;
  label: string;
}

export default function PageHeader({
  totalNotes,
  sortBy,
  onSortChange,
  title,
  label 
}: PageHeaderProps) {
  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "alphabetical", label: "Alphabetical" },
  ];

  return (
    <div className="flex justify-between items-center mb-8 mt-6">
      <div>
        <h1 className="md:text-2xl font-bold text-gray-900">
          {title}{" "}
          <span className="text-gray-500 font-normal text-[14px]">
            {totalNotes} {label}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm hidden">Sort by</span>
        <Select
          placeholder="Sort by"
          value={sortBy}
          onChange={onSortChange}
          suffixIcon={<FilterOutlined />}
          className="w-40"
          options={sortOptions}
        />
      </div>
    </div>
  );
}
