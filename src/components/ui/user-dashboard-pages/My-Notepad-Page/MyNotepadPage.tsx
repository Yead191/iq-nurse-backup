"use client";

import { useState } from "react";
import WordRibbonToolbar from "./WordRibbonToolbar";
import FolderSidebar from "./FolderSidebar";
import NotesListSidebar from "./NotesListSidebar";
import NoteContentArea from "./NoteContentArea";

interface Note {
  id: string;
  title: string;
  content: string;
  preview: string;
  folder: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function NotePadApp() {
  const [folders, setFolders] = useState<string[]>(["Medical Surgical Notes"]);
  const [activeFolder, setActiveFolder] = useState("Medical Surgical Notes");

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

  const [activeNoteId, setActiveNoteId] = useState<string | null>("1");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeNote = notes.find((note) => note.id === activeNoteId);
  const folderNotes = notes.filter((note) => note.folder === activeFolder);

  const handleAddFolder = (name: string) => {
    if (!folders.includes(name)) {
      setFolders([...folders, name]);
      setActiveFolder(name);
    }
  };

  const handleFolderSelect = (folder: string) => {
    setActiveFolder(folder);
    const firstNoteInFolder = notes.find((note) => note.folder === folder);
    setActiveNoteId(firstNoteInFolder?.id || null);
  };

  const handleNewNote = () => {
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

  const handleNoteSelect = (noteId: string) => {
    setActiveNoteId(noteId);
  };

  const handleTitleChange = (title: string) => {
    if (!activeNoteId) return;

    setNotes(
      notes.map((note) =>
        note.id === activeNoteId
          ? {
              ...note,
              title,
              preview: note.content.substring(0, 100) || title,
              updatedAt: new Date(),
            }
          : note
      )
    );
  };

  const handleContentChange = (content: string) => {
    if (!activeNoteId) return;

    setNotes(
      notes.map((note) =>
        note.id === activeNoteId
          ? {
              ...note,
              content,
              preview: content.substring(0, 100) || note.title,
              updatedAt: new Date(),
            }
          : note
      )
    );
  };

  return (
    <div className="h-[calc(100vh-150px)] flex flex-col ">
      {/* Word-style Ribbon Toolbar */}
      {/* <WordRibbonToolbar /> */}

      {/* Main Content Area */}
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
          />
        </div>

        {/* Notes List Sidebar */}
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

        {/* Note Content */}
        <NoteContentArea
          noteId={activeNoteId}
          initialTitle={activeNote?.title || ""}
          initialContent={activeNote?.content || ""}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
        />
      </div>
    </div>
  );
}
