import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function NoteTab() {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "Type your notes here..",
    toolbarSticky: false,
    style: {
      height: "58vh",
      background: "#ffff",
      border: "none",
      // boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      padding: "10px",
    },
    buttons: [
      "paragraph",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "ul",
      "ol",
      "brush",
    ],
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
  };

  const handleSaveChanges = () => {
    const newContent = {
      content: content,
      type: "terms",
    };
    console.log("Content saved:", newContent);
  };
  return (
    <div className="jodit-container">
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
