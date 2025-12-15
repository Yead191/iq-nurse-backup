"use client";
import React, { useState } from "react";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Download, File, Printer, Share } from "lucide-react";
import CalculatorCategoryList from "@/components/ui/user-dashboard-pages/clinical-calculator/CalculatorCategoryList";
import Image from "next/image";

interface ClinicalCalculatorProps {
  children: React.ReactNode;
}

type CategoryState = {
  categoryId: string | null;
  templeteId: string | null;
};

const ClinicalCalculator: React.FC<ClinicalCalculatorProps> = ({
  children,
}) => {
  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);

  return (
    <>
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/math.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className="w-fit h-[32px] object-contain"
          />
        }
        title="Clinical Calculators"
        subtitle="Essential calculation tools for safe and accurate nursing practive"
        isAiEnhanced={true}
        actions={[
          {
            label: "Share",
            icon: <Share size={18} className="mt-1" />,
            onClick: () => console.log("Share"),
            isPrimary: true,
          },
          {
            label: "Print",
            icon: <Printer size={18} className="mt-1.5" />,
            onClick: () => console.log("Print"),
            isPrimary: true,
          },
          {
            label: "Download PDF",
            icon: <Download size={18} className="mt-1" />,
            onClick: () => console.log("Download"),
            isPrimary: true,
          },
        ]}
      />

      <div className="flex flex-col md:flex-row sm:mx-2 sm:gap-2">
        {/* Calculator List */}
        <div className={`${isSideBarSelect ? "hidden" : "block"} md:block`}>
          <CalculatorCategoryList setIsSideBarSelect={setIsSideBarSelect} />
        </div>

        {/* Calculator Tools */}
        <div
          className={`w-full max-h-[calc(100vh-100px)] overflow-y-auto md:flex-1 ${
            isSideBarSelect ? "block" : "hidden"
          } md:block`}
        >
          <button
            onClick={() => setIsSideBarSelect((prev) => !prev)}
            className="sm:hidden cursor-pointer px-4 items-center text-gray-600 hover:text-gray-900 col-span-3 mb-4 flex"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default ClinicalCalculator;
