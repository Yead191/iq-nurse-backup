"use client";

import { AssessmentCategory, FindingData } from "@/data/assessmentCategories";
import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";

import { useState } from "react";

interface AssessmentTabsProps {
  category: AssessmentCategory;
}

export default function AssessmentTabs({ category }: AssessmentTabsProps) {
  const [activeTab, setActiveTab] = useState("comprehensive");

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

  const comprehensiveContent = (
    <div className="space-y-6">
      <div className="prose prose-sm max-w-none">
        {category.tabContent.comprehensiveDescription.map(
          (paragraph, index) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-3">
              {paragraph}
            </p>
          )
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Expected Findings
        </h3>
        <Table
          columns={columns}
          dataSource={category.tabContent.findings}
          pagination={false}
          size="middle"
          className="rounded-lg overflow-hidden border border-gray-200"
          rowClassName="hover:bg-gray-50"
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Clinical Note:</strong> {category.tabContent.clinicalNote}
        </p>
      </div>
    </div>
  );

  const mnemonicsContent = (
    <div className="space-y-6">
      {category.tabContent.mnemonics.map((mnemonic, index) => (
        <div
          key={index}
          className={`bg-${mnemonic.color}-50 p-6 rounded-lg border border-${mnemonic.color}-200`}
        >
          <h4 className={`font-semibold text-${mnemonic.color}-800 mb-3`}>
            {mnemonic.title}
          </h4>
          <div className="space-y-2 text-sm">
            {mnemonic.items.map((item, itemIndex) => (
              <div key={itemIndex} className={`text-${mnemonic.color}-700`}>
                <strong>{item.letter}</strong> - {item.description}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card className="rounded-2xl border-0 shadow-lg bg-white h-full">
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("comprehensive")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === "comprehensive"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Comprehensive Assessment
          </button>
          <button
            onClick={() => setActiveTab("mnemonics")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === "mnemonics"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Mnemonics
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "comprehensive" && comprehensiveContent}
        {activeTab === "mnemonics" && mnemonicsContent}
      </div>
    </Card>
  );
}
