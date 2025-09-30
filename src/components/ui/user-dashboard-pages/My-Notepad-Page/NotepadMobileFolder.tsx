"use client";

import { useState } from "react";
import {
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  Bookmark,
  Search,
  FolderClosed,
} from "lucide-react";
import ContextMenu from "../my-library-page/ContextMenu";
import DeleteConfirmationModal from "../my-library-page/DeleteConfirmationModal";
import NewFolderForm from "./NewFolderForm";
import Input from "antd/es/input/Input";
import { Button, Grid } from "antd";

interface Folder {
  name: string;
  color: string;
}

interface Note {
  id: string;
  title: string;
  preview: string;
  folder: string;
}

interface NotepadMobileFolderProps {
  folders: Folder[];
  notes: Note[];
  activeFolder: string;
  onFolderSelect: (folder: string) => void;
  onNoteSelect: (noteId: string) => void;
  onAddFolder: (folder: Folder) => void;
  onNewNote: (folderName: string) => void;
  activeNoteId?: string | null;
}

export default function NotepadMobileFolder({
  folders,
  notes,
  activeFolder,
  onFolderSelect,
  onNoteSelect,
  onAddFolder,
  onNewNote,
  activeNoteId,
}: NotepadMobileFolderProps) {
  const { lg } = Grid.useBreakpoint();
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [renamingFolder, setRenamingFolder] = useState<string | null>(null);
  const [renamingValue, setRenamingValue] = useState("");
  const [contextTarget, setContextTarget] = useState<string | null>(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showNewFolderForm, setShowNewFolderForm] = useState(false);
  // console.log(folders);

  /** ---------------- Expand / Collapse ---------------- */
  const toggleFolder = (name: string) => {
    const newSet = new Set(expandedFolders);
    if (newSet.has(name)) newSet.delete(name);
    else newSet.add(name);
    setExpandedFolders(newSet);
  };

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
      // update parent state if needed
      onFolderSelect(renamingValue.trim());
    }
    setRenamingFolder(null);
    setRenamingValue("");
  };

  /** ---------------- Context Menu ---------------- */
  const openContextMenu = (e: React.MouseEvent, name: string) => {
    e.preventDefault();
    e.stopPropagation();

    const menuWidth = 150;
    const menuHeight = 80;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = e.clientX;
    let y = e.clientY;

    // Clamp X and Y to prevent overflow
    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth - 20; // 10px padding from edge
    }
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight - 20;
    }

    setContextTarget(name);
    setContextMenuPosition({ x, y });
    setShowContextMenu(true);
  };

  /** ---------------- Delete ---------------- */
  const confirmDelete = () => {
    // call delete logic in parent
    if (contextTarget) {
      console.log("delete folder:", contextTarget);
    }
    setIsDeleteModalOpen(false);
  };

  /** ---------------- Colors ---------------- */
  // console.log(activeFolder, activeNoteId);
  return (
    <div className="flex flex-col h-full relative">
      <div className="pb-4 pr-2  border-b border-gray-200">
        <Input
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          prefix={<Search className="text-gray-400" />}
          style={{
            height: 50,
            borderRadius: 8,
          }}
        />
        {/* Add New Folder */}
        <div className="  absolute bottom-6 left-1/2 -translate-x-1/2 bg-white z-10">
          {showNewFolderForm ? (
            <NewFolderForm
              onAdd={(name, color) => {
                onAddFolder({ name, color });
                setShowNewFolderForm(false);
              }}
              onCancel={() => setShowNewFolderForm(false)}
            />
          ) : (
            <Button
              size={lg ? "large" : "small"}
              onClick={() => setShowNewFolderForm(true)}
              icon={<Plus className="w-4 h-4 " />}
              className=" !bg-primary !text-white  !transition-colors !border-none "
            >
              Create Folder
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2 pr-2 space-y-4">
        {folders?.map((folder) => {
          // console.log(folder?.color);
          const isExpanded = expandedFolders.has(folder.name);
          const folderNotes = notes.filter((n) => n.folder === folder.name);

          return (
            <div
              key={folder.name}
              className="border-b border-gray-100 last:border-b-0"
            >
              {/* Folder Header */}
              <div
                // style={{
                //   borderLeftColor: folder.color,
                // }}
                className={`flex items-center justify-between pl-4 py-2  cursor-pointer  rounded-md ${
                  activeFolder === folder.name
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  toggleFolder(folder.name);
                  if (lg) {
                    onFolderSelect(folder.name);
                  }
                }}
              >
                <div className="flex-1 flex items-center gap-2">
                  <FolderClosed
                    className={` fill-current`}
                    style={{ color: folder.color }}
                  />
                  {/* <p>{folder.color}</p> */}
                  <div>
                    {renamingFolder === folder.name ? (
                      <input
                        type="text"
                        value={renamingValue}
                        onChange={(e) => setRenamingValue(e.target.value)}
                        onBlur={submitRename}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") submitRename();
                          if (e.key === "Escape") setRenamingFolder(null);
                        }}
                        className="font-medium text-gray-900 text-base bg-white border border-blue-500 rounded px-2 py-1 w-full"
                        autoFocus
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <h3 className="font-medium text-gray-900 text-base">
                        {folder.name}
                      </h3>
                    )}
                    <p className="text-sm text-gray-500">
                      {folderNotes.length} notes
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => openContextMenu(e, folder.name)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Expanded Notes */}
              {isExpanded && (
                <div className="pl-0.5 pb-2 space-y-2">
                  {folderNotes.length > 0 ? (
                    folderNotes.map((note) => (
                      <div
                        key={note.id}
                        className={`flex items-center justify-between my-2 px-4 py-2 rounded-xl cursor-pointer border-b 
                           ${
                             activeNoteId === note.id
                               ? "bg-[#D8ECFE] border border-[#D8ECFE] "
                               : "border border-[#C5D0D0] hover:bg-gray-50"
                           }
                          `}
                        onClick={() => onNoteSelect(note.id)}
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-base">
                            {note.title || "untitled"}
                          </h4>
                          {/* <p className="text-sm text-gray-500 truncate">
                            {note.preview}
                          </p> */}
                        </div>
                        <button className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                          <Bookmark
                            className={`w-4 h-4 text-black  text-gray-400"
                            }`}
                          />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="bg-gray-50 p-3 text-sm text-gray-500 italic">
                      No notes in this folder yet
                    </div>
                  )}
                  <button
                    onClick={() => onNewNote(folder.name)}
                    className="text-primary text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Add Note
                  </button>
                </div>
              )}
            </div>
          );
        })}
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
              label: "Delete Folder",
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
