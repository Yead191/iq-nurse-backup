import { Table } from "antd";

export const ComprehensiveContent = ({ category, columns }: any) => {
  console.log("comprehensive", category);
  return (
    <div className="space-y-6">
      <div
        style={{
          boxShadow: "4px 4px 42px 0px rgba(0, 0, 0, 0.07)",
          padding: 24,
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
        }}
        className="prose prose-sm max-w-none "
      >
        {category.tabContent.comprehensiveDescription.map(
          (paragraph: any, index: any) => (
            <p key={index} className="text-gray-600 leading-relaxed mb-3">
              {paragraph}
            </p>
          )
        )}
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
          dataSource={category.tabContent.findings}
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
          <strong>Clinical Note:</strong> {category.tabContent.clinicalNote}
        </p>
      </div>
    </div>
  );
};
