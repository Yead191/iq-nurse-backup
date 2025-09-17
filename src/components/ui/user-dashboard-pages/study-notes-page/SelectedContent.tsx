"use client";

import SurgicalDetailsPage from "./surgical-details-page/SurgicalDetailsPage";

interface SelectedContentProps {
  selectedCategory?: string;
  selectedSubcategory?: string;
}

export function SelectedContent({
  selectedCategory,
  selectedSubcategory,
}: SelectedContentProps) {
  // Get selected category details
  console.log(selectedCategory, "sub category", selectedSubcategory);
  return (
    <div className="flex-1  md:max-h-[calc(100vh-110px)]  overflow-y-auto">
      {selectedSubcategory && selectedCategory ? (
        <SurgicalDetailsPage id={selectedSubcategory} />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-235px)]  text-center text-gray-500 ">
          <h2 className="text-2xl font-semibold mb-4">
            Select a category and subcategory to view details
          </h2>
        </div>
      )}
    </div>
  );
}
