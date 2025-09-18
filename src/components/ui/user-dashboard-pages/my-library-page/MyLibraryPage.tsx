"use client";

import { useState } from "react";
import { Folder, LibraryData } from "@/data/types";
import ContentArea from "./ContentArea";
import CreateFolderModal from "./CreateFolderModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import MobileFolderList from "./MobileFolderList";
import { libraryData } from "@/data/libraryData";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { BookmarkIcon, FolderPlus } from "lucide-react";

// Type for mobile view state
type MobileView = "folders" | "pages" | "content";

export default function MyLibraryPage() {
  const [data, setData] = useState<LibraryData>(libraryData);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
  const [mobileView, setMobileView] = useState<MobileView>("folders");
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  console.log(selectedPage);
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

  const handlePageSelect = (folderId: string, pageId: string) => {
    setSelectedFolder(folderId);
    setSelectedPage(pageId);
    setMobileView("content");
  };
  const handleMobileBack = () => {
    if (mobileView === "content") {
      setMobileView("folders");
      setSelectedPage(null);
    }
  };

  const handleMobileFolderToggle = (folderId: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderId)) {
        newSet.delete(folderId);
      } else {
        newSet.add(folderId);
      }
      return newSet;
    });
  };

  const selectedFolderData = selectedFolder
    ? data.folders.find((f) => f.id === selectedFolder)
    : null;
  const selectedPageData =
    selectedFolderData && selectedPage
      ? selectedFolderData.pages.find((p) => p.id === selectedPage)
      : null;
  console.log(selectedPageData);
  return (
    <div>
      <PageNavbar
        icon={<BookmarkIcon className="fill-current text-black" />}
        title="My Library"
        subtitle="Organize and manage your bookmarked study notes in custom folders"
        isAiEnhanced={true}
        actions={[
          {
            label: "New Folder",
            icon: <FolderPlus size={18} className="mt-1" />,
            onClick: () => {
              setIsCreateModalOpen(true);
            },
            isPrimary: true,
          },
        ]}
      />
      {/* <PageBreadcrumb
        itemImg={"/assets/icons/library-icon.svg"}
        itemLabel={"Library"}
      /> */}
      <div className="  lg:my-0 lg:mt-6 px-4 lg:px-5">
        <div className="hidden lg:grid grid-cols-9">
          <div className="col-span-2 border-r pr-2">
            <MobileFolderList
              selectedFolder={selectedFolder}
              selectedPage={selectedPage}
              data={data}
              expandedFolders={expandedFolders}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFolderToggle={handleMobileFolderToggle}
              onPageSelect={handlePageSelect}
              onToggleBookmark={handleToggleBookmark}
              onCreateFolder={() => setIsCreateModalOpen(true)}
              onDeleteFolder={handleDeleteFolder}
              onRenameFolder={handleRenameFolder}
            />
          </div>

          <div className="lg:h-[calc(100vh-115px)] overflow-y-auto col-span-7">
            <ContentArea
              selectedFolder={selectedFolderData}
              selectedPage={selectedPageData}
              onCreateFolder={() => setIsCreateModalOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden w-full">
          <div
            className={`grid grid-cols-12 py-0 bg-white ${
              mobileView === "content" ? " border-b-2 border-gray-200 pb-2" : ""
            }`}
          >
            {mobileView === "content" && (
              <button
                onClick={handleMobileBack}
                className="flex items-center text-gray-600 hover:text-gray-900 col-span-3"
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
            <div className="text-lg font-semibold text-gray-900 col-span-8 text-center">
              <h1>{mobileView === "content" && selectedPageData?.title}</h1>
            </div>
          </div>

          <div className="flex-1 overflow-hidden">
            {mobileView === "folders" && (
              <MobileFolderList
                data={data}
                expandedFolders={expandedFolders}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onFolderToggle={handleMobileFolderToggle}
                onPageSelect={handlePageSelect}
                onToggleBookmark={handleToggleBookmark}
                onCreateFolder={() => setIsCreateModalOpen(true)}
                onDeleteFolder={handleDeleteFolder}
                onRenameFolder={handleRenameFolder}
              />
            )}

            {mobileView === "content" && (
              <div className="h-full min-h-[calc(100vh-234px)] overflow-y-auto">
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
