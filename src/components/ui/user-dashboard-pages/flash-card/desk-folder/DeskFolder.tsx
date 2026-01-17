"use client";

import { useState } from "react";
import { Folder, LibraryData } from "@/data/types";
import { libraryData } from "@/data/libraryData";
import MobileFolderList from "../../my-library-page/MobileFolderList";
import CreateFolderModal from "../../my-library-page/CreateFolderModal";
import DeleteConfirmationModal from "../../my-library-page/DeleteConfirmationModal";
import FlashCardCreateTestMain from "../../flash-cards/high-yield-flashcards/create-test/FlashCardCreateTestMain";
import { Grid } from "antd";
import { useRouter } from "next/navigation";

// Type for mobile view state
type MobileView = "folders" | "pages" | "content";

export default function DeskFolder() {
  const { lg } = Grid.useBreakpoint();
  const [data, setData] = useState<LibraryData>(libraryData);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  const router = useRouter();
  // console.log(selectedPage);
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
    // setMobileView("content");
    if (!lg) {
      router.push(`/profile/flash-card/decks/${pageId}`);
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
  // console.log(selectedPageData);
  return (
    <div>
      {/* <PageBreadcrumb
        itemImg={"/assets/icons/library-icon.svg"}
        itemLabel={"Library"}
      /> */}
      <div className="  lg:py-0 lg:pt-6  lg:px-4 ">
        <div className="hidden lg:grid grid-cols-12 gap-8">
          <div className="lg:col-span-3  pr-2">
            <MobileFolderList
              isDeck={true}
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

          <div className="lg:h-[calc(100vh-150px)]  overflow-y-auto lg:col-span-9 ">
            <FlashCardCreateTestMain />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden w-full">
          <div className="flex-1 overflow-hidden">
            <MobileFolderList
              isDeck={true}
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
