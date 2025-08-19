"use client";

import { useState } from "react";
import { Bookmark, Plus, Search, X } from "lucide-react";

interface Note {
  id: string;
  title: string;
  preview: string;
  updatedAt: Date;
}

interface NotesListSidebarProps {
  notes: Note[];
  activeNoteId: string | null;
  onNoteSelect: (noteId: string) => void;
  onNewNote: () => void;
  folderName: string;
}

export default function NotesListSidebar({
  notes,
  activeNoteId,
  onNoteSelect,
  onNewNote,
  folderName,
}: NotesListSidebarProps) {
  // console.log(notes);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header with Search */}
      <div className="p-3 border-b border-gray-200">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search Notes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-8 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* New Note Button */}
      <div className="p-3 border-b border-gray-200">
        <button
          onClick={onNewNote}
          className="flex items-center gap-2 w-full px-3 py-8 text-sm text-[#2A2251] bg-[#6B4EFF1A] rounded  border border-[#6B4EFF99]/60 h-[60px] cursor-pointer"
        >
          <Plus
            size={40}
            className="border border-dashed border-[#6B4EFF] bg-white p-2 rounded-full"
          />
          New note
        </button>
      </div>

      {/* Notes List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-sm">
            {searchTerm ? "No notes found" : "No notes in this folder"}
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`flex items-center justify-between m-2 px-4 py-2 rounded-xl cursor-pointer border-b border-gray-100 ${
                activeNoteId === note.id
                  ? "bg-[#D8ECFE] border-[#D8ECFE]"
                  : "border border-[#C5D0D0] hover:bg-gray-50"
              }`}
              onClick={() => onNoteSelect(note.id)}
            >
              <div>
                <div className="font-medium text-sm text-gray-900 mb-1 truncate">
                  {note.title || "Untitled"}
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {note.updatedAt.toLocaleDateString()}{" "}
                  {note.updatedAt.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="p-1 hover:bg-gray-200 rounded ml-2 flex-shrink-0"
              >
                <Bookmark className={`w-4 h-4 ${"text-black "}`} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
