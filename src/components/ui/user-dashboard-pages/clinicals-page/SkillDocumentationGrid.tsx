import { SkillDocumentation } from "@/data/skillData";
import { Pagination } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiCube } from "react-icons/bi";

interface SkillDocumentationGridProps {
  documents: SkillDocumentation[];
  totalDocuments: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function SkillDocumentationGrid({
  documents,
  totalDocuments,
  currentPage,
  itemsPerPage,
  onPageChange,
}: SkillDocumentationGridProps) {
  return (
    <div className="space-y-4">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <Link key={doc.id} href={`/profile/clinicals/skill-notes/${doc.id}`}>
            <div
              className="flex items-center gap-3 p-4 rounded-xl bg-white hover:shadow-md transition "
              style={{
                boxShadow: "4.03px 4.03px 57.38px 0px rgba(0, 0, 0, 0.07)",
              }}
            >
              <div className="flex-shrink-0">
                <Image
                  src={doc.image}
                  alt={doc.title}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover w-[63px] h-[63px]"
                />
              </div>
              <div className="flex-1 font-medium">{doc.title}</div>
              <BiCube className="w-6 h-6 text-gray-500" />
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>
          Showing {itemsPerPage * (currentPage - 1) + 1}-
          {Math.min(itemsPerPage * currentPage, totalDocuments)} of{" "}
          {totalDocuments}
        </span>

        {/* Ant Design Pagination */}
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={totalDocuments}
          onChange={onPageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
