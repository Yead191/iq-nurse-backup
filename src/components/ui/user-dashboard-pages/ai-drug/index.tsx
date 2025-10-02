"use client";
import React, { useState } from "react";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Download, File, Printer, Share } from "lucide-react";
import CalculatorCategoryList from "../clinical-calculator/CalculatorCategoryList";
import CalculatorMainPanel from "../clinical-calculator/calculators";
import { GrDocumentTest } from "react-icons/gr";
import DrugSearchList from "./DrugSearchList";

const AIDrug = () => {
  type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
  };

  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);
  const [setselectedId, setSetselectedId] = useState<string>("");

  return (
    <>
      <PageNavbar
        title="AI Drug Card Generator"
        icon={<GrDocumentTest />}
        subtitle="Generate comprehensive medication reference cards with AI-powered drug information"
        isAiEnhanced={true}
        actions={[
          {
            label: "Download",
            icon: <Download size={18} className="mt-1" />,
            onClick: () => console.log("Download"),
            isPrimary: true,
          },
        ]}
      />
      
      <div className="flex flex-col md:flex-row sm:mx-2 sm:gap-2">
        {/* Calculator List */}
        <div className={`${isSideBarSelect ? "hidden" : "block"} md:block`}>
          <DrugSearchList
            setIsSideBarSelect={setIsSideBarSelect}
            setSetselectedId={setSetselectedId}
          />
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
          <CalculatorMainPanel selected={setselectedId} />
        </div>
      </div>
    </>
  );
};

export default AIDrug;
