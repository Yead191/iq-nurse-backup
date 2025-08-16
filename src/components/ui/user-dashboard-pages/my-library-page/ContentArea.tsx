"use client";

import { Folder, Page } from "@/data/types";
import CreateFolder from "./CreateFolder";

interface ContentAreaProps {
  selectedFolder?: Folder | null;
  selectedPage?: Page | null;
  onCreateFolder: () => void;
  isMobile?: boolean;
}

export default function ContentArea({
  selectedFolder,
  selectedPage,
  onCreateFolder,
  isMobile = false,
}: ContentAreaProps) {
  return (
    <>
      {!selectedFolder && !selectedPage ? (
        // Display a message when no folder or page is selected
        <CreateFolder isMobile={isMobile} onCreateFolder={onCreateFolder} />
      ) : selectedPage?.content ? (
        <div className="flex-1 bg-white overflow-y-auto">
          <div className={`max-w-4xl mx-auto ${isMobile ? "p-4" : "p-8"}`}>
            {/* Header */}
            <div className="mb-8">
              <h1
                className={`${
                  isMobile ? "text-2xl" : "text-3xl"
                } font-bold text-gray-900 mb-2`}
              >
                {selectedPage.content.title}
              </h1>
              <h2
                className={`${
                  isMobile ? "text-lg" : "text-xl"
                } font-semibold text-blue-600 mb-4`}
              >
                {selectedPage.content.subtitle}
              </h2>
              <p
                className={`text-gray-700 mb-4 ${
                  isMobile ? "text-base" : "text-sm"
                }`}
              >
                {selectedPage.content.description}
              </p>

              <ul
                className={`list-disc list-inside text-gray-700 space-y-1 ${
                  isMobile ? "text-base" : "text-sm"
                }`}
              >
                {selectedPage.content.details.map((detail: any, index: any) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div
              className={`grid ${
                isMobile ? "grid-cols-1 gap-4" : "md:grid-cols-2 gap-8"
              }`}
            >
              {selectedPage.content.sections.map((section: any, index: any) => (
                <div
                  key={index}
                  className={`bg-gray-50 ${
                    isMobile ? "p-4" : "p-6"
                  } rounded-lg`}
                >
                  <h3
                    className={`${
                      isMobile ? "text-base" : "text-lg"
                    } font-bold text-gray-900 mb-2`}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={`${
                      isMobile ? "text-sm" : "text-sm"
                    } text-gray-600 mb-3`}
                  >
                    {section.subtitle}
                  </p>
                  <p
                    className={`text-gray-700 ${
                      isMobile ? "text-sm" : "text-base"
                    }`}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Medical Diagram Placeholder */}
            <div
              className={`mt-8 bg-gray-100 rounded-lg ${
                isMobile ? "p-4" : "p-8"
              } text-center`}
            >
              <div
                className={`w-full ${
                  isMobile ? "h-48" : "h-64"
                } bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center`}
              >
                <p
                  className={`text-gray-500 ${
                    isMobile ? "text-sm" : "text-base"
                  }`}
                >
                  Medical diagram would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Fallback content when no page is selected
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center px-4">
            <h3
              className={`${
                isMobile ? "text-xl" : "text-xl"
              } font-medium text-gray-900 mb-2`}
            >
              Select a page to view content
            </h3>
            <p
              className={`text-gray-500 ${isMobile ? "text-base" : "text-sm"}`}
            >
              Choose a page from the {selectedFolder?.name} folder to see its
              content.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
