"use client";

import { useState } from "react";
import LibrarySidebar from "./LibrarySidebar";
import { Folder, LibraryData } from "@/data/types";
import PagesPanel from "./PagesPanel";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import ContentArea from "./ContentArea";
import CreateFolderModal from "./CreateFolderModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const initialData: LibraryData = {
  folders: [
    {
      id: "1",
      name: "Medical Surgical",
      color: "blue",
      topicCount: 5,
      pages: [
        {
          id: "1-1",
          title: "Airway and lungs",
          subtitle: "Respiratory system fundamentals",
          isBookmarked: true,
          content: {
            title: "Thyroid Gland",
            subtitle: "FUNCTION",
            description:
              "Regulates metabolism & growth and development by producing hormones",
            details: [
              "T3 & T4 (Thyroid hormone)",
              "Calcitonin (lowers blood calcium)",
              "TSH from pituitary gland (iodine is needed to create thyroid hormones)",
            ],
            sections: [
              {
                title: "HYPOTHYROIDISM",
                subtitle: "Hyposecretion of thyroid hormone",
                content: "T3 & T4 ↓ TSH ↑",
              },
              {
                title: "HYPERTHYROIDISM",
                subtitle: "Hypersecretion of thyroid hormone",
                content: "T3 & T4 ↑ TSH ↓",
              },
            ],
          },
        },
        {
          id: "1-2",
          title: "Cardiovascular System",
          subtitle: "Heart and blood vessels",
          isBookmarked: false,
        },
      ],
    },
    {
      id: "2",
      name: "Pharmacology",
      color: "orange",
      topicCount: 3,
      pages: [
        {
          id: "2-1",
          title: "Drug Classifications",
          subtitle: "Basic pharmacology principles",
          isBookmarked: true,
        },
      ],
    },
    {
      id: "3",
      name: "Mental Health",
      color: "blue",
      topicCount: 8,
      pages: [],
    },
    {
      id: "4",
      name: "OB/Maternity",
      color: "orange",
      topicCount: 5,
      pages: [],
    },
    {
      id: "5",
      name: "My",
      color: "red",
      topicCount: 3,
      pages: [],
    },
  ],
};

// Type for mobile view state
type MobileView = "folders" | "pages" | "content";

export default function MyLibraryPage() {
  const [data, setData] = useState<LibraryData>(initialData);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<MobileView>("folders");

  const handleCreateFolder = (name: string, color: string) => {
    const newFolder: Folder = {
      id: Date.now().toString(),
      name,
      color,
      topicCount: 0,
      pages: [],
    };
    setData((prev) => ({
      ...prev,
      folders: [...prev.folders, newFolder],
    }));
    setIsCreateModalOpen(false);
  };

  const handleDeleteFolder = (folderId: string) => {
    setFolderToDelete(folderId);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteFolder = () => {
    if (folderToDelete) {
      setData((prev) => ({
        ...prev,
        folders: prev.folders.filter((f) => f.id !== folderToDelete),
      }));
      if (selectedFolder === folderToDelete) {
        setSelectedFolder(null);
        setSelectedPage(null);
      }
    }
    setIsDeleteModalOpen(false);
    setFolderToDelete(null);
  };

  const handleRenameFolder = (folderId: string, newName: string) => {
    setData((prev) => ({
      ...prev,
      folders: prev.folders.map((f) =>
        f.id === folderId ? { ...f, name: newName } : f
      ),
    }));
  };

  const handleToggleBookmark = (folderId: string, pageId: string) => {
    setData((prev) => ({
      ...prev,
      folders: prev.folders.map((f) =>
        f.id === folderId
          ? {
              ...f,
              pages: f.pages.map((p) =>
                p.id === pageId ? { ...p, isBookmarked: !p.isBookmarked } : p
              ),
            }
          : f
      ),
    }));
  };

  const handleFolderSelect = (folderId: string) => {
    setSelectedFolder(folderId);
    setSelectedPage(null);
    setMobileView("pages");
  };

  const handlePageSelect = (pageId: string) => {
    setSelectedPage(pageId);
    setMobileView("content");
  };

  const handleMobileBack = () => {
    if (mobileView === "content") {
      setMobileView("pages");
    } else if (mobileView === "pages") {
      setMobileView("folders");
      setSelectedFolder(null);
    }
  };

  const selectedFolderData = selectedFolder
    ? data.folders.find((f) => f.id === selectedFolder)
    : null;
  const selectedPageData =
    selectedFolderData && selectedPage
      ? selectedFolderData.pages.find((p) => p.id === selectedPage)
      : null;

  return (
    <div>
      <PageBreadcrumb
        itemImg={"/assets/icons/library-icon.svg"}
        itemLabel={"Library"}
      />
      <div className="flex min-h-screen my-6">
        <div className="hidden lg:flex lg:flex-1">
          <LibrarySidebar
            data={data}
            selectedFolder={selectedFolder}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onFolderSelect={setSelectedFolder}
            onCreateFolder={() => setIsCreateModalOpen(true)}
            onDeleteFolder={handleDeleteFolder}
            onRenameFolder={handleRenameFolder}
          />

          <PagesPanel
            selectedFolder={selectedFolderData}
            selectedPage={selectedPage}
            onPageSelect={setSelectedPage}
            onToggleBookmark={handleToggleBookmark}
          />

          <ContentArea
            selectedFolder={selectedFolderData}
            selectedPage={selectedPageData}
            onCreateFolder={() => setIsCreateModalOpen(true)}
          />
        </div>

        <div className="flex flex-col lg:hidden w-full">
          {/* Mobile header with back button */}
          <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            {mobileView !== "folders" && (
              <button
                onClick={handleMobileBack}
                className="flex items-center text-gray-600 hover:text-gray-900"
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
            )}
            <h1 className="text-lg font-semibold text-gray-900">
              {mobileView === "folders" && "Library"}
              {mobileView === "pages" && selectedFolderData?.name}
              {mobileView === "content" && selectedPageData?.title}
            </h1>
            <div className="w-12" />
          </div>

          {/* Mobile content area */}
          <div className="flex-1 overflow-hidden">
            {mobileView === "folders" && (
              <div className="h-full">
                <LibrarySidebar
                  data={data}
                  selectedFolder={selectedFolder}
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  onFolderSelect={handleFolderSelect}
                  onCreateFolder={() => setIsCreateModalOpen(true)}
                  onDeleteFolder={handleDeleteFolder}
                  onRenameFolder={handleRenameFolder}
                  isMobile={true}
                />
              </div>
            )}

            {mobileView === "pages" && (
              <div className="h-full">
                <PagesPanel
                  selectedFolder={selectedFolderData}
                  selectedPage={selectedPage}
                  onPageSelect={handlePageSelect}
                  onToggleBookmark={handleToggleBookmark}
                  isMobile={true}
                />
              </div>
            )}

            {mobileView === "content" && (
              <div className="h-full">
                <ContentArea
                  selectedFolder={selectedFolderData}
                  selectedPage={selectedPageData}
                  onCreateFolder={() => setIsCreateModalOpen(true)}
                  isMobile={true}
                />
              </div>
            )}
          </div>
        </div>

        <CreateFolderModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onConfirm={handleCreateFolder}
        />

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDeleteFolder}
        />
      </div>
    </div>
  );
}
