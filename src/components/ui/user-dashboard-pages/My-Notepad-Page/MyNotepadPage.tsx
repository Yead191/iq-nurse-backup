"use client";

import { useState } from "react";
import FolderSidebar from "./FolderSidebar";
import NotesListSidebar from "./NotesListSidebar";
import NoteContentArea from "./NoteContentArea";
import DeleteConfirmationModal from "../my-library-page/DeleteConfirmationModal";
import { toast } from "sonner";
import NotepadMobileFolder from "./NotepadMobileFolder";

// -------------------- Types --------------------
interface Note {
  id: string;
  title: string;
  content: string;
  preview: string;
  folder: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Folder {
  name: string;
  color: string;
}

type MobileView = "folders" | "notes" | "content";

// -------------------- Component --------------------
export default function MyNotepadPage() {
  const [folders, setFolders] = useState<Folder[]>([
    { name: "Medical Surgical Notes", color: "#3b82f6" },
  ]);
  const [activeFolder, setActiveFolder] = useState(
    folders.length ? folders[0].name : ""
  );

  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "",
      content: "",
      preview: "",
      folder: "Medical Surgical Notes",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const [activeNoteId, setActiveNoteId] = useState<string | null>(
    notes.length ? notes[0].id : null
  );

  // Delete modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    type: "folder" | "note";
    id: string;
  } | null>(null);

  // Mobile view state
  const [mobileView, setMobileView] = useState<MobileView>("folders");

  const activeNote = notes.find((note) => note.id === activeNoteId);
  const folderNotes = notes.filter((note) => note.folder === activeFolder);

  // -------------------- Folder Handlers --------------------
  const handleAddFolder = (folder: Folder) => {
    if (!folders.some((f) => f.name === folder.name)) {
      setFolders([...folders, folder]);
      setActiveFolder(folder.name);
    }
  };

  const handleFolderSelect = (folderName: string) => {
    setActiveFolder(folderName);
    const firstNote = notes.find((note) => note.folder === folderName);
    setActiveNoteId(firstNote?.id || null);
    setMobileView("notes"); // go to notes list in mobile
  };

  // -------------------- Notes Handlers --------------------
  const handleNewNote = () => {
    if (!folders.length) {
      toast.error("Please create a folder first!");
      return;
    }
    const newNote: Note = {
      id: Date.now().toString(),
      title: "",
      content: "",
      preview: "",
      folder: activeFolder,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);
    setMobileView("content"); // open directly in content
  };

  const handleNoteSelect = (noteId: string) => {
    setActiveNoteId(noteId);
    setMobileView("content");
  };

  const handleTitleChange = (title: string) => {
    if (!activeNoteId) return;
    setNotes(
      notes.map((n) =>
        n.id === activeNoteId
          ? {
              ...n,
              title,
              preview: n.content.substring(0, 100) || title,
              updatedAt: new Date(),
            }
          : n
      )
    );
  };

  const handleContentChange = (content: string) => {
    if (!activeNoteId) return;
    setNotes(
      notes.map((n) =>
        n.id === activeNoteId
          ? {
              ...n,
              content,
              preview: content.substring(0, 100) || n.title,
              updatedAt: new Date(),
            }
          : n
      )
    );
  };

  // -------------------- Delete Handlers --------------------
  const handleDeleteFolder = (folderName: string) => {
    setItemToDelete({ type: "folder", id: folderName });
    setIsDeleteModalOpen(true);
  };

  const handleDeleteNote = (noteId: string) => {
    setItemToDelete({ type: "note", id: noteId });
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === "folder") {
      const folderName = itemToDelete.id;
      setFolders(folders.filter((f) => f.name !== folderName));
      setNotes(notes.filter((n) => n.folder !== folderName));
      if (activeFolder === folderName) {
        setActiveFolder("");
        setActiveNoteId(null);
      }
      setMobileView("folders");
    } else if (itemToDelete.type === "note") {
      const noteId = itemToDelete.id;
      setNotes(notes.filter((n) => n.id !== noteId));
      if (activeNoteId === noteId) {
        setActiveNoteId(null);
        setMobileView("notes");
      }
    }

    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  // -------------------- Mobile Back --------------------
  const handleMobileBack = () => {
    setMobileView("folders");
  };

  // -------------------- Render --------------------
  return (
    <div className="h-[calc(100vh-190px)] flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* ---------- Desktop Layout ---------- */}
        <div className="hidden lg:flex w-full">
          <FolderSidebar
            folders={folders}
            activeFolder={activeFolder}
            onFolderSelect={handleFolderSelect}
            onAddFolder={handleAddFolder}
          />
          <NotesListSidebar
            notes={folderNotes}
            activeNoteId={activeNoteId}
            onNoteSelect={handleNoteSelect}
            onNewNote={handleNewNote}
            folderName={activeFolder}
          />
          <NoteContentArea
            noteId={activeNoteId}
            initialTitle={activeNote?.title || ""}
            initialContent={activeNote?.content || ""}
            onTitleChange={handleTitleChange}
            onContentChange={handleContentChange}
          />
        </div>

        {/* ---------- Mobile Layout ---------- */}
        <div className="flex flex-col lg:hidden w-full">
          {/* Mobile Header with Back Button */}
          <div className="grid grid-cols-12 py-2  bg-white">
            {mobileView !== "folders" && (
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
            {/* <div className="col-span-9 text-center font-semibold text-gray-900">
              {mobileView === "folders" && "Folders"}
              {mobileView === "notes" && activeFolder}
              {mobileView === "content" && activeNote?.title}
            </div> */}
          </div>

          {/* Mobile View Content */}
          <div className="flex-1 overflow-y-auto">
            {mobileView === "folders" && (
              <NotepadMobileFolder
                folders={folders}
                notes={notes}
                activeFolder={activeFolder}
                onFolderSelect={handleFolderSelect}
                onNoteSelect={handleNoteSelect}
                onAddFolder={handleAddFolder}
                onNewNote={(folderName) => {
                  setActiveFolder(folderName);
                  handleNewNote();
                }}
              />
            )}

            {mobileView === "content" && (
              <NoteContentArea
                noteId={activeNoteId}
                initialTitle={activeNote?.title || ""}
                initialContent={activeNote?.content || ""}
                onTitleChange={handleTitleChange}
                onContentChange={handleContentChange}
              />
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </div>
    </div>
  );
}
