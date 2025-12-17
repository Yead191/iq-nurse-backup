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
