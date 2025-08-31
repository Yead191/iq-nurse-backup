"use client";

import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import "jodit/es2021/jodit.min.css"; 

// ✅ Load Jodit without SSR
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
interface NoteTabProps {
  handleContentChange?: any;
  content?: string;
}

export default function NoteTab({
  handleContentChange,
  content,
}: NoteTabProps) {
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Type your notes here..",
    toolbarSticky: false,
    height: "60vh",
    style: {
      background: "#fff",
      borderRadius: "6px",
      // padding: "8px",
    },
    // ✅ Force same buttons on all screen sizes
    // buttons: ["paragraph", "bold", "italic", "underline", "ul", "ol", "brush"],
    // buttonsMD: [
    //   "paragraph",
    //   "bold",
    //   "italic",
    //   "underline",
    //   "ul",
    //   "ol",
    //   "brush",
    // ],
    // buttonsSM: [
    //   "paragraph",
    //   "bold",
    //   "italic",
    //   "underline",
    //   "ul",
    //   "ol",
    //   "brush",
    // ],
    // buttonsXS: [
    //   "paragraph",
    //   "bold",
    //   "italic",
    //   "underline",
    //   "ul",
    //   "ol",
    //   "brush",
    // ],
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  return (
    <div
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
