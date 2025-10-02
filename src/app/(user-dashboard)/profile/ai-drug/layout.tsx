"use client";
import React, { useState } from "react";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Download} from "lucide-react";
import { GrDocumentTest } from "react-icons/gr";
import DrugSearchList from "@/components/ui/user-dashboard-pages/ai-drug/DrugSearchList";
import { useParams} from "next/navigation";

export default function AIDrugLayout({ children }: { children: React.ReactNode }) {

  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);
  const [setselectedId, setSetselectedId] = useState<string | null>(null);
  
  console.log({setselectedId})
  const params = useParams();
  const drugId = params['drug-id'];


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
      
      <div className="flex flex-col md:flex-row sm:mx-2 sm:gap-2 ">
        {/* Calculator List */}
        <div className={` ${setselectedId ? "hidden" : "block"} md:block`}>
          <DrugSearchList
            setIsSideBarSelect={setIsSideBarSelect}
            setSetselectedId={setSetselectedId}
          />
        </div>

        {/* Calculator Tools */}
        <div
          className={`w-full md:flex-1  ${
            setselectedId ? "block" : "hidden"
          } md:block`}
        >
          <button
            onClick={() => setSetselectedId(null)}
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

