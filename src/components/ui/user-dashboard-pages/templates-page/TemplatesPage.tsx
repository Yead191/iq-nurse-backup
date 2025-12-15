"use client";
import React, { useState } from "react";
import TempleteList from "./TempleteList";
import TempleteDetails from "./TempleteDetails";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Download, File, Printer, Share } from "lucide-react";
import Image from "next/image";

export default function TemplatesPage() {
  type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
  };

  const [categories, setCategories] = useState<CategoryState>({
    categoryId: null,
    templeteId: null,
  });
  const [isSideBarSelect, setIsSideBarSelect] = useState<boolean>(false);
  const [setsearchText, setSetsearchText] = useState("");

  return (
    <>
      <PageNavbar
        icon={
          <Image
            src="/assets/icons/header/book.svg"
            alt="NCLEX"
            width={50}
            height={50}
            draggable={false}
            className="w-fit h-[32px] object-contain"
          />
        }
        title="Document Templates"
        subtitle="Professional nursing documentation templates for clinical practice"
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
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Template List */}
        <div
          className={`${
            isSideBarSelect ? "hidden" : "block"
          } md:block col-span-1 md:col-span-3`}
        >
          <TempleteList
            setCategories={setCategories}
            setIsSideBarSelect={setIsSideBarSelect}
            searchText={setsearchText}
            setSearchText={setSetsearchText}
          />
        </div>

        {/* Template Details */}
        <div
          className={`w-full   ${
            isSideBarSelect ? "block" : "hidden"
          } md:block col-span-1 md:col-span-9`}
        >
          <TempleteDetails
            categories={categories}
            setIsSideBarSelect={setIsSideBarSelect}
          />
        </div>
      </div>
    </>
  );
}
