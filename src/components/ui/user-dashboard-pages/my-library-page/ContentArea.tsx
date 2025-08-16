"use client";

import { Folder, Page } from "@/data/types";

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
  if (!selectedFolder && !selectedPage) {
    return (
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center px-4">
          <div
            className={`${
              isMobile ? "w-32 h-32" : "w-24 h-24"
            } mx-auto mb-6 bg-pink-100 rounded-full flex items-center justify-center`}
          >
            <div
              className={`${
                isMobile ? "w-16 h-16" : "w-12 h-12"
              } bg-yellow-400 rounded-lg flex items-center justify-center`}
            >
              <div
                className={`${
                  isMobile ? "w-10 h-8" : "w-8 h-6"
                } bg-orange-400 rounded-sm`}
              ></div>
            </div>
          </div>
          <h3
            className={`${
              isMobile ? "text-2xl" : "text-xl"
            } font-medium text-gray-900 mb-2`}
          >
            No Bookmarks Yet
          </h3>
          <p
            className={`text-gray-500 mb-6 ${
              isMobile ? "text-base" : "text-sm"
            }`}
          >
            Start saving your favorite items to access them quickly anytime.
          </p>
          <button
            onClick={onCreateFolder}
            className={`bg-blue-900 text-white ${
              isMobile ? "px-8 py-4 text-base" : "px-6 py-3"
            } rounded-lg hover:bg-blue-800 transition-colors`}
          >
            + Create Folder
          </button>
        </div>
      </div>
    );
  }

  if (selectedPage?.content) {
    return (
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
                className={`bg-gray-50 ${isMobile ? "p-4" : "p-6"} rounded-lg`}
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
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h3
          className={`${
            isMobile ? "text-xl" : "text-xl"
          } font-medium text-gray-900 mb-2`}
        >
          Select a page to view content
        </h3>
        <p className={`text-gray-500 ${isMobile ? "text-base" : "text-sm"}`}>
          Choose a page from the {selectedFolder?.name} folder to see its
          content.
        </p>
      </div>
    </div>
  );
}
