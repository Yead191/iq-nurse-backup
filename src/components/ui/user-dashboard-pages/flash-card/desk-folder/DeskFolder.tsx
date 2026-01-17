"use client";

import { useState } from "react";
import { Folder, LibraryData, Page } from "@/data/types";
import { libraryData } from "@/data/libraryData";
import DeskSidebar from "./DeskSidebar";
import CreateFolderModal from "../../my-library-page/CreateFolderModal";
import CreateDeckModal from "./CreateDeckModal";
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
  const [isCreateDeckModalOpen, setIsCreateDeckModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [folderToDelete, setFolderToDelete] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  const router = useRouter();

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

  const handleCreateDeck = (folderId: string, name: string) => {
    const newPage: Page = {
      id: Date.now().toString(),
      title: name,
      subtitle: "0 cards",
      isBookmarked: false,
      content: { image: "" },
    };

    setData((prev) => ({
      ...prev,
      folders: prev.folders.map((f) => {
        if (f.id === folderId) {
          return {
            ...f,
            pages: [...f.pages, newPage],
            topicCount: (f.topicCount || 0) + 1,
          };
        }
        return f;
      }),
    }));

    // Auto expand the folder where deck was created
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      newSet.add(folderId);
      return newSet;
    });

    // Select the new deck
    setSelectedFolder(folderId);
    setSelectedPage(newPage.id);
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

  const handlePageSelect = (folderId: string, pageId: string) => {
    setSelectedFolder(folderId);
    setSelectedPage(pageId);
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

  return (
    <div>
      <div className="lg:py-0 lg:pt-6 lg:px-4">
        <div className="hidden lg:grid grid-cols-12 gap-4">
          <div className="lg:col-span-3 h-[calc(100vh-150px)]">
            <DeskSidebar
              data={data}
              expandedFolders={expandedFolders}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFolderToggle={handleMobileFolderToggle}
              onPageSelect={handlePageSelect}
              onCreateFolder={() => setIsCreateModalOpen(true)}
              onCreateFlashcard={() => setIsCreateDeckModalOpen(true)}
              onDeleteFolder={handleDeleteFolder}
              onRenameFolder={handleRenameFolder}
              selectedFolder={selectedFolder}
              selectedPage={selectedPage}
            />
          </div>

          <div className="lg:h-[calc(100vh-150px)] overflow-y-auto lg:col-span-9 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <FlashCardCreateTestMain />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden w-full ">
          <div className="flex-1 overflow-hidden">
            <DeskSidebar
              data={data}
              expandedFolders={expandedFolders}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onFolderToggle={handleMobileFolderToggle}
              onPageSelect={handlePageSelect}
              onCreateFolder={() => setIsCreateModalOpen(true)}
              onCreateFlashcard={() => setIsCreateDeckModalOpen(true)}
              onDeleteFolder={handleDeleteFolder}
              onRenameFolder={handleRenameFolder}
              selectedFolder={selectedFolder}
              selectedPage={selectedPage}
            />
          </div>
        </div>

        <CreateFolderModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onConfirm={handleCreateFolder}
        />

        <CreateDeckModal
          isOpen={isCreateDeckModalOpen}
          onClose={() => setIsCreateDeckModalOpen(false)}
          onConfirm={handleCreateDeck}
          folders={data.folders}
          preSelectedFolderId={selectedFolder}
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
