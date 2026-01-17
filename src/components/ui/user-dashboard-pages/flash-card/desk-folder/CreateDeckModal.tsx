"use client";
import React, { useState } from "react";
import { Modal, Select } from "antd";
import { X } from "lucide-react";
import { LibraryData } from "@/data/types";

// Standard colors if we want to associate color with deck, but likely not needed for deck itself if it mimics Page
// Assuming Deck doesn't need color, just Name and Folder selection.

interface CreateDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (folderId: string, name: string) => void;
  folders: LibraryData["folders"];
  preSelectedFolderId?: string | null;
}

export default function CreateDeckModal({
  isOpen,
  onClose,
  onConfirm,
  folders,
  preSelectedFolderId,
}: CreateDeckModalProps) {
  const [deckName, setDeckName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(
    preSelectedFolderId || (folders.length > 0 ? folders[0].id : null)
  );

  // Update selected folder when modal opens if needed, but simpler to let user pick
  // ensuring selectedFolder is valid
  React.useEffect(() => {
    if (isOpen && preSelectedFolderId) {
      setSelectedFolder(preSelectedFolderId);
    } else if (isOpen && !selectedFolder && folders.length > 0) {
      setSelectedFolder(folders[0].id);
    }
  }, [isOpen, preSelectedFolderId, folders]);

  const handleSubmit = () => {
    if (deckName.trim() && selectedFolder) {
      onConfirm(selectedFolder, deckName.trim());
      setDeckName("");
      onClose();
    }
  };

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      closable={false}
      centered
      width={400}
      className="custom-deck-modal"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 text-blue-600">
            {/* Icon for Deck/Flashcard */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-2">
        Create New Flashcard Deck
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Organize your flashcards into a new deck.
      </p>

      {/* Deck Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Deck Name
        </label>
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          placeholder="e.g. Pharmacology Basics"
        />
      </div>

      {/* Folder Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Select Folder
        </label>
        <Select
          className="w-full h-10"
          value={selectedFolder}
          onChange={setSelectedFolder}
          options={folders.map((f) => ({ value: f.id, label: f.name }))}
          placeholder="Select a folder"
        />
      </div>

      {/* Done Button */}
      <button
        onClick={handleSubmit}
        disabled={!deckName.trim() || !selectedFolder}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          !deckName.trim() || !selectedFolder
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-900 text-white hover:bg-blue-800"
        }`}
      >
        Create Deck
      </button>
    </Modal>
  );
}
