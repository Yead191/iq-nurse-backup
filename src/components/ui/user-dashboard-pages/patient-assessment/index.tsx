import { Table } from "antd";
import { assessmentCategories, FindingData } from "@/data/assessmentCategories";
import React from "react";
import { ColumnsType } from "antd/es/table";

interface AssessmentPageProps {
  id: string;
}
export default function AssessmentPage({ id }: AssessmentPageProps) {
  console.log(id);
  // console.log(id);
  // find the selected subcategory
  const sub = assessmentCategories
    .flatMap((c) => c.subcategories)
    .find((s) => s.id === id);

  const columns: ColumnsType<FindingData> = [
    {
      title: "Assessment",
      dataIndex: "assessment",
      key: "assessment",
      className: "font-medium text-gray-800",
      width: "30%",
    },
    {
      title: "Normal",
      dataIndex: "normal",
      key: "normal",
      className: "text-green-700",
      width: "35%",
    },
    {
      title: "Abnormal",
      dataIndex: "abnormal",
      key: "abnormal",
      className: "text-red-600",
      width: "35%",
    },
  ];

  if (!sub) return <div>Not found</div>;
  return (
    <section className="space-y-6">
      <div
        style={{
          boxShadow: "4px 4px 42px 0px rgba(0, 0, 0, 0.07)",
          padding: 24,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
        }}
        className="prose prose-sm max-w-none "
      >
        {sub?.comprehensiveDescription.map((paragraph: any, index: any) => (
          <p key={index} className="text-gray-600 leading-relaxed mb-3">
            {paragraph}
          </p>
        ))}
      </div>

      <div
        style={{
          boxShadow: "4px 4px 42px 0px rgba(0, 0, 0, 0.07)",
          padding: 24,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
        }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Expected Findings
        </h3>
        <Table
          columns={columns}
          dataSource={sub?.findings}
          pagination={false}
          size="middle"
          className="rounded-lg overflow-hidden border border-gray-200"
          rowClassName="hover:bg-gray-50"
        />
      </div>

      <div
        style={{
          boxShadow: "4px 4px 42px 0px rgba(0, 0, 0, 0.07)",
          padding: 24,
          borderRadius: 12,
        }}
        className="bg-blue-50 p-4 rounded-lg border border-blue-200"
      >
        <p className="text-sm text-blue-800">
          <strong>Clinical Note:</strong> {sub?.clinicalNote}
        </p>
      </div>
    </section>
  );
}
