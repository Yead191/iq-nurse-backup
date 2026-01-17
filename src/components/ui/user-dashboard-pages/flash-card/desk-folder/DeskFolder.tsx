"use client";

import { useState } from "react";
import { Folder, LibraryData, Page, FlashcardItem } from "@/data/types";
import { libraryData } from "@/data/libraryData";
import DeskSidebar from "./DeskSidebar";
import CreateFolderModal from "../../my-library-page/CreateFolderModal";
import CreateDeckModal from "./CreateDeckModal";
import DeleteConfirmationModal from "../../my-library-page/DeleteConfirmationModal";
import FlashCardCreateTestMain from "../../flash-cards/high-yield-flashcards/create-test/FlashCardCreateTestMain";
import DeckBuilder from "./DeckBuilder";
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

  // Edit mode state
  const [isEditingDeck, setIsEditingDeck] = useState(false);

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
      cards: [],
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

    // Select the new deck and open edit mode immediately since it's empty
    setSelectedFolder(folderId);
    setSelectedPage(newPage.id);
    setIsEditingDeck(true);
  };

  const handleSaveDeck = (updatedCards: FlashcardItem[]) => {
    if (selectedFolder && selectedPage) {
      setData((prev) => ({
        ...prev,
        folders: prev.folders.map((f) => {
          if (f.id === selectedFolder) {
            return {
              ...f,
              pages: f.pages.map((p) => {
                if (p.id === selectedPage) {
                  return {
                    ...p,
                    cards: updatedCards,
                    subtitle: `${updatedCards.length} cards`,
                  };
                }
                return p;
              }),
            };
          }
          return f;
        }),
      }));
      setIsEditingDeck(false);
    }
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
    setIsEditingDeck(false); // Reset to view mode when switching decks
    if (!lg) {
      // Logic for mobile view if needed
      // router.push(`/profile/flash-card/decks/${pageId}`);
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

  // Derived state for current selection
  const selectedFolderData = selectedFolder
    ? data.folders.find((f) => f.id === selectedFolder)
    : null;
  const selectedPageData =
    selectedFolderData && selectedPage
      ? selectedFolderData.pages.find((p) => p.id === selectedPage)
      : null;

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
            {isEditingDeck && selectedPageData ? (
              <DeckBuilder
                cards={selectedPageData.cards || []}
                title={selectedPageData.title}
                onSave={handleSaveDeck}
                onCancel={() => setIsEditingDeck(false)}
              />
            ) : selectedPageData ? (
              <FlashCardCreateTestMain
                cards={selectedPageData.cards}
                title={selectedPageData.title}
                onEditDeck={() => setIsEditingDeck(true)}
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 opacity-50"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <p>Select a deck to start studying or create a new one.</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden w-full ">
          <div className="flex-1 overflow-hidden">
            {/* Simple mobile view for now, usually needs conditional rendering based on selection */}
            {!selectedPage ? (
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
            ) : (
              <div className="h-[calc(100vh-100px)] flex flex-col">
                <button
                  onClick={() => {
                    setSelectedPage(null);
                    setIsEditingDeck(false);
                  }}
                  className="p-2 text-sm text-blue-600 font-medium flex items-center gap-1"
                >
                  ← Back to Desk
                </button>
                <div className="flex-1 overflow-y-auto p-2">
                  {isEditingDeck && selectedPageData ? (
                    <DeckBuilder
                      cards={selectedPageData.cards || []}
                      title={selectedPageData.title}
                      onSave={handleSaveDeck}
                      onCancel={() => setIsEditingDeck(false)}
                    />
                  ) : (
                    selectedPageData && (
                      <FlashCardCreateTestMain
                        cards={selectedPageData.cards}
                        title={selectedPageData.title}
                        onEditDeck={() => setIsEditingDeck(true)}
                      />
                    )
                  )}
                </div>
              </div>
            )}
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
