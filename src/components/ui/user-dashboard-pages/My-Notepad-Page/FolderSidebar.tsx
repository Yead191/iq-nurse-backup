"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

import NewFolderForm from "./NewFolderForm";
import ContextMenu from "../my-library-page/ContextMenu";
import DeleteConfirmationModal from "../my-library-page/DeleteConfirmationModal";
import NotepadFolderItem from "./NotepadFolderItem";

interface Folder {
  name: string;
  color: string;
}

interface FolderSidebarProps {
  folders: Folder[];
  activeFolder: string;
  onFolderSelect: (folder: string) => void;
  onAddFolder: (folder: Folder) => void;
  onRenameFolder?: (oldName: string, newName: string) => void;
  onDeleteFolder?: (name: string) => void;
}

export default function FolderSidebar({
  folders,
  activeFolder,
  onFolderSelect,
  onAddFolder,
  onRenameFolder,
  onDeleteFolder,
}: FolderSidebarProps) {
  /** ---------------- State ---------------- */
  const [showNewFolderForm, setShowNewFolderForm] = useState(false);
  const [renamingFolder, setRenamingFolder] = useState<string | null>(null);
  const [renamingValue, setRenamingValue] = useState("");

  const [contextTarget, setContextTarget] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [showContextMenu, setShowContextMenu] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  /** ---------------- Rename ---------------- */
  const startRenaming = (name: string) => {
    setRenamingFolder(name);
    setRenamingValue(name);
    setShowContextMenu(false);
  };

  const submitRename = () => {
    if (
      renamingFolder &&
      renamingValue.trim() &&
      renamingValue !== renamingFolder
    ) {
      onRenameFolder?.(renamingFolder, renamingValue.trim());
      if (activeFolder === renamingFolder) onFolderSelect(renamingValue.trim());
    }
    setRenamingFolder(null);
    setRenamingValue("");
  };

  /** ---------------- Context Menu ---------------- */
  const openContextMenu = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    setContextTarget(name);
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  /** ---------------- Delete ---------------- */
  const confirmDelete = () => {
    if (contextTarget) onDeleteFolder?.(contextTarget);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="w-64 border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-3 border-b border-gray-200">
        <h2 className="text-sm lg:text-2xl font-semibold text-gray-700">
          My Notes
        </h2>
      </div>

      {/* Folder List */}
      <div className="flex-1 overflow-y-auto py-2 space-y-2">
        {folders.map((folder) => (
          <NotepadFolderItem
            key={folder.name}
            folder={folder}
            isActive={activeFolder === folder.name}
            onSelect={onFolderSelect}
            onStartRename={startRenaming}
            onOpenContext={openContextMenu}
            renamingFolder={renamingFolder}
            renamingValue={renamingValue}
            onRenameChange={setRenamingValue}
            onRenameSubmit={submitRename}
            onRenameCancel={() => setRenamingFolder(null)}
          />
        ))}
      </div>

      {/* Add New Folder */}
      <div className="p-3 border-t border-gray-200">
        {showNewFolderForm ? (
          <NewFolderForm
            onAdd={(name, color) => {
              onAddFolder({ name, color });
              setShowNewFolderForm(false);
            }}
            onCancel={() => setShowNewFolderForm(false)}
          />
        ) : (
          <button
            onClick={() => setShowNewFolderForm(true)}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white bg-primary rounded"
          >
            <Plus size={16} />
            New Folder
          </button>
        )}
      </div>

      {/* Context Menu */}
      {showContextMenu && contextTarget && (
        <ContextMenu
          position={contextMenuPosition}
          onClose={() => {
            setShowContextMenu(false);
            setContextTarget(null);
          }}
          items={[
            {
              icon: Edit2,
              label: "Rename",
              onClick: () => startRenaming(contextTarget),
            },
            {
              icon: Trash2,
              label: "Delete Study Set",
              onClick: () => setIsDeleteModalOpen(true),
              destructive: true,
            },
          ]}
        />
      )}

      {/* Delete Modal */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
