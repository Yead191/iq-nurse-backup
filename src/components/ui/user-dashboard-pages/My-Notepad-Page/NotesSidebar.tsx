"use client";

import { useState } from "react";
import { Search, Plus, X } from "lucide-react";
import { Button, Input } from "antd";

interface Note {
  id: string;
  title: string;
  preview: string;
  category: string;
}

interface NotesSidebarProps {
  notes: Note[];
  activeNote: string | null;
  onNoteSelect: (noteId: string) => void;
  onNewNote: () => void;
  onNewFolder: () => void;
}

export default function NotesSidebar({
  notes,
  activeNote,
  onNoteSelect,
  onNewNote,
  onNewFolder,
}: NotesSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.preview.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">My Notes</h2>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <Input
            type="text"
            placeholder="Search Notes"
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e.target.value)}
            className="pl-10 pr-8 py-2 text-sm border-gray-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* New Note Button */}
        <Button
          onClick={onNewNote}
          className="w-full bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 flex items-center justify-center gap-2"
        >
          <Plus size={16} />
          New note
        </Button>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            {searchQuery ? "No notes found" : "No notes yet"}
          </div>
        ) : (
          <div className="p-2">
            {filteredNotes.map((note) => (
              <div
                key={note.id}
                onClick={() => onNoteSelect(note.id)}
                className={`p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
                  activeNote === note.id
                    ? "bg-blue-100 border border-blue-200"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-medium text-gray-800 text-sm truncate flex-1">
                    {note.title || "Untitled"}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">
                    {note.category}
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {note.preview || "No content"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* New Folder Button */}
      <div className="p-4 border-t border-gray-200">
        <Button
          onClick={onNewFolder}
          className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus size={16} />
          New Folder
        </Button>
      </div>
    </div>
  );
}
