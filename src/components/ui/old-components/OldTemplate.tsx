// "use client";
// import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
// import React, { useState } from "react";
// import PageHeader from "../study-notes-page/PageHeader";
// import { Col, Layout, Pagination, Row, Typography } from "antd";
// import { mockTemplates } from "@/data/templatesData";
// import { TemplateCard } from "./TemplateCard";
// import { TemplatePreview } from "./TemplatePreview";
// const { Text } = Typography;
// export default function TemplatesPage() {
//     const [sortBy, setSortBy] = useState("newest");
//     const [currentPage, setCurrentPage] = useState(1);
//     const pageSize = 8;
//     const totalTemplates = mockTemplates.length;

//     const handlePageChange = (page: number) => {
//         setCurrentPage(page);
//     };

//     const startIndex = (currentPage - 1) * pageSize;
//     const endIndex = Math.min(startIndex + pageSize, totalTemplates);
//     const handleSortChange = (value: string) => {
//         setSortBy(value);
//         setCurrentPage(1);
//     };
//     return (
//         <div>
//             <PageBreadcrumb
//                 itemLabel={"Templates"}
//                 itemImg={"/assets/sidebar-icons/template-icon.svg"}
//             />
//             <PageHeader
//                 title="Nursing Templates"
//                 totalNotes={120}
//                 label="Templates"
//                 sortBy={sortBy}
//                 onSortChange={handleSortChange}
//             />
//             <div>
//                 <div>
//                     {/* Templates Grid */}

//                     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
//                         {mockTemplates.slice(0, pageSize).map((template, index) => (
//                             <div key={template.id}>
//                                 <TemplateCard template={template} />
//                             </div>
//                         ))}
//                     </div>

//                     <div className="flex justify-between items-center mt-6">
//                         <div>
//                             <Text type="secondary">
//                                 Showing {startIndex + 1}-{endIndex} of {totalTemplates}
//                             </Text>
//                         </div>
//                         <Pagination
//                             current={currentPage}
//                             total={totalTemplates}
//                             pageSize={pageSize}
//                             onChange={handlePageChange}
//                             showSizeChanger={false}
//                             size="small"
//                         />
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }
