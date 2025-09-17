"use client";
import React, { useState } from "react";
import TempleteList from "./TempleteList";
import TempleteDetails from "./TempleteDetails";

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
  const [setsearchText, setSetsearchText] = useState('');

  console.log({ setsearchText })

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Template List */}
        <div className={`${isSideBarSelect ? "hidden" : "block"} md:block`}>
          <TempleteList setCategories={setCategories} setIsSideBarSelect={setIsSideBarSelect} searchText={setsearchText} setSearchText={setSetsearchText} />
        </div>

        {/* Template Details */}
        <div className={`w-full md:flex-1 ${isSideBarSelect ? "block" : "hidden"} md:block`}>
          <TempleteDetails categories={categories} setIsSideBarSelect={setIsSideBarSelect} />
        </div>
      </div>
    </>
  );
}
