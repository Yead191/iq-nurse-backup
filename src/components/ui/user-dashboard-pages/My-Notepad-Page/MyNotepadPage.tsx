"use client";

import { useState } from "react";
import FolderSidebar from "./FolderSidebar";
import NotesListSidebar from "./NotesListSidebar";
import NoteContentArea from "./NoteContentArea";
import DeleteConfirmationModal from "../my-library-page/DeleteConfirmationModal";
import { toast } from "sonner";

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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Delete modal state
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    type: "folder" | "note";
    id: string;
  } | null>(null);

  const activeNote = notes.find((note) => note.id === activeNoteId);
  const folderNotes = notes.filter((note) => note.folder === activeFolder);

  /** Add Folder */
  const handleAddFolder = (folder: Folder) => {
    if (!folders.some((f) => f.name === folder.name)) {
      setFolders([...folders, folder]);
      setActiveFolder(folder.name);
    }
  };

  /** Select Folder */
  const handleFolderSelect = (folderName: string) => {
    setActiveFolder(folderName);
    const firstNote = notes.find((note) => note.folder === folderName);
    setActiveNoteId(firstNote?.id || null);
  };

  /** Rename Folder */
  const handleRenameFolder = (oldName: string, newName: string) => {
    setFolders(
      folders.map((f) => (f.name === oldName ? { ...f, name: newName } : f))
    );
    setNotes(
      notes.map((n) => (n.folder === oldName ? { ...n, folder: newName } : n))
    );
    if (activeFolder === oldName) setActiveFolder(newName);
  };

  /** Delete Folder */
  const handleDeleteFolder = (folderName: string) => {
    setItemToDelete({ type: "folder", id: folderName });
    setIsDeleteModalOpen(true);
  };

  /** Delete Note */
  const handleDeleteNote = (noteId: string) => {
    setItemToDelete({ type: "note", id: noteId });
    setIsDeleteModalOpen(true);
  };

  /** Confirm Delete */
  const confirmDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === "folder") {
      const folderName = itemToDelete.id;
      setFolders(folders.filter((f) => f.name !== folderName));
      setNotes(notes.filter((n) => n.folder !== folderName));

      if (activeFolder === folderName) {
        const fallback = folders.find((f) => f.name !== folderName);
        setActiveFolder(fallback?.name || "");
        setActiveNoteId(
          fallback
            ? notes.find((n) => n.folder === fallback.name)?.id || null
            : null
        );
      }
    } else if (itemToDelete.type === "note") {
      const noteId = itemToDelete.id;
      setNotes(notes.filter((n) => n.id !== noteId));
      if (activeNoteId === noteId) setActiveNoteId(null);
    }

    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  /** Notes */
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
  };

  const handleNoteSelect = (noteId: string) => setActiveNoteId(noteId);

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

  return (
    <div className="h-[calc(100vh-150px)] flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-20 left-4 z-10 bg-blue-600 text-white p-2 rounded-md shadow-lg"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>

        {/* Folder Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block flex-shrink-0`}
        >
          <FolderSidebar
            folders={folders}
            activeFolder={activeFolder}
            onFolderSelect={handleFolderSelect}
            onAddFolder={handleAddFolder}
            // onRenameFolder={handleRenameFolder}
            // onDeleteFolder={handleDeleteFolder}
          />
        </div>

        {/* Notes Sidebar */}
        <div
          className={`${
            sidebarOpen ? "block" : "hidden"
          } lg:block flex-shrink-0`}
        >
          <NotesListSidebar
            notes={folderNotes}
            activeNoteId={activeNoteId}
            onNoteSelect={handleNoteSelect}
            onNewNote={handleNewNote}
            folderName={activeFolder}
          />
        </div>

        {/* Content */}
        <NoteContentArea
          noteId={activeNoteId}
          initialTitle={activeNote?.title || ""}
          initialContent={activeNote?.content || ""}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />

        {/* Single Delete Confirmation Modal */}
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </div>
    </div>
  );
}
