"use client";

import dynamic from "next/dynamic";
import React, { useRef } from "react";
import "@/styles/jodit-fixed.css";

// ✅ Load Jodit without SSR
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
interface NoteTabProps {
  handleContentChange?: any;
  content?: string;
  height?: string;
  isDesabled?: boolean;
}

export default function NoteTab({
  handleContentChange,
  content,
  height = "60vh",
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
      // padding: "8px",
    },
    // buttons: ["paragraph", "bold", "italic", "underline", "ul", "ol", "brush"],
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
    buttonsMD: [
      "paragraph",
      "bold",
      "italic",
      "underline",
      "ul",
      "ol",
      "brush",
      "table",
    ],
    buttonsSM: [
      "paragraph",
      "bold",
      "italic",
      "underline",
      "ul",
      "ol",
      "brush",
    ],
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  return (
    <div
      style={{
        // border: "1px solid #2C5F8D",
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
