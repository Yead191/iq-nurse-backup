"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

interface NoteEditorProps {
  noteTitle: string;
}

export default function NoteEditor({ noteTitle }: NoteEditorProps) {
  const [title, setTitle] = useState(noteTitle);
  const [content, setContent] = useState("");

  return (
    <div className="h-full flex flex-col">
      {/* Title */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-2xl font-semibold mb-4 border-b pb-2 focus:outline-none"
      />

      {/* Content */}
      <div className="flex-1">
        <JoditEditor
          value={content}
          onChange={(newContent) => setContent(newContent)}
          config={{
            height: "100%",
            toolbarAdaptive: false,
            buttons:
              "bold,italic,underline,strikethrough,|,ul,ol,|,font,fontsize,paragraph,|,link,image,video,table,|,undo,redo",
          }}
        />
      </div>
    </div>
  );
}
