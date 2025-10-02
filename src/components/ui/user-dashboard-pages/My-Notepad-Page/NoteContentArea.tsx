"use client";

import { useState, useEffect } from "react";
import NoteTab from "../study-notes-page/surgical-details-page/NoteTab";
import SingleNoteTab from "./single-note/SingleNoteTab";

interface NoteContentAreaProps {
  noteId: string | null;
  initialTitle?: string;
  initialContent?: string;
  onTitleChange?: (title: string) => void;
  onContentChange?: (content: string) => void;
}

export default function NoteContentArea({
  noteId,
  initialTitle = "",
  initialContent = "",
  onTitleChange,
  onContentChange,
}: NoteContentAreaProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = now.toLocaleDateString("en-US", options);
    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${date} ${time}`;
  };

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
  }, [noteId, initialTitle, initialContent]);

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
    onTitleChange?.(newTitle);
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    onContentChange?.(newContent);
  };

  if (!noteId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center text-gray-500">
          <p className="text-lg mb-2">Select a note to start editing</p>
          <p className="text-sm">
            Choose a note from the sidebar or create a new one
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* File Name Input */}
      <div className="p-6 border-b border-gray-200">
        <input
          type="text"
          placeholder="Enter file Name"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full text-lg font-medium border-0 outline-none px-0 placeholder:text-gray-400 bg-transparent"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500">{getCurrentDateTime()}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        <div className="w-full mx-auto h-full ">
          <NoteTab
            handleContentChange={handleContentChange}
            content={content}
          />
        </div>
        {/* <div className="w-full mx-auto h-full md:hidden">
          <SingleNoteTab
            handleContentChange={handleContentChange}
            content={content}
          />
        </div> */}
      </div>
    </div>
  );
}
