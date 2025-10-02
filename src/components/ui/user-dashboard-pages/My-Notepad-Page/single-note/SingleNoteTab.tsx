"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import "jodit/es2021/jodit.min.css";

// ✅ Load Jodit without SSR
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
interface NoteTabProps {
  handleContentChange?: any;
  content?: string;
  height?: string;
  isDesabled?: boolean;
}

export default function SingleNoteTab({
  handleContentChange,
  content,
  height = "100vh",
  isDesabled = false,
}: NoteTabProps) {
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Type your notes here..",
    toolbarSticky: false,
    height: height,
    disabled: isDesabled,
    style: {
      background: "#fff",
      borderRadius: "6px",
    },
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  return (
    <div
    className="single-note-tab"
      style={{
        // border: "1px solid #003877",
        borderRadius: "11px",
        // padding: "12px",
      }}
    >
      <JoditEditor
        ref={editor}
        value={content || ""}
        config={config}
        onBlur={(newContent) => handleContentChange(newContent)}
        onChange={() => {}}
      />
    </div>
  );
}
