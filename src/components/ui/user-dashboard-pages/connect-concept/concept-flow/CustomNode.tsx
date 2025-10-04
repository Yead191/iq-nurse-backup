"use client";
import React, { useState, useEffect } from "react";
import { Handle, Position } from "@xyflow/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { FiEdit3, FiSave } from "react-icons/fi";

interface CustomNodeProps {
  data: { label: string; color?: string; description?: string; type?: string };
}

const CustomNode = ({ data }: CustomNodeProps) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");
  const [hovered, setHovered] = useState(false);
  console.log("CustomNode data:", data);

  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ list: "bullet" }, { list: "ordered" }],
        ["bold", "italic", "underline"],
        [{ align: [] }],
        ["clean"],
      ],
    },
  });

  useEffect(() => {
    if (!quill) return;
    if (editing) {
      quill.clipboard.dangerouslyPasteHTML(content || "");
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill, editing]);

  const handleSave = () => {
    if (quill) setContent(quill.root.innerHTML);
    setEditing(false);
  };

  const color = data.color || "#A34F41";

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-[270px] min-h-[100px] rounded-md  border-s-4 bg-white shadow border border-gray-100 p-2 font-sans relative"
        style={{ borderLeftColor: color }}
      >
        <div className="flex items-center gap-2 pb-2">
          <button
            type="button"
            className="h-5 w-5 rounded"
            style={{ backgroundColor: `${color}80` }}
          />
          <p className="text-base font-bold text-black">{data.label}</p>
        </div>
        {data.description ? (
          <span className="text-sm text-gray-500 italic">
            {" "}
            - {data.description}
          </span>
        ) : null}

        <div className={editing ? "nodrag" : "hidden"}>
          <div
            ref={quillRef}
            style={{ minHeight: 100 }}
            className="bg-white rounded-md "
          />
          <button
            onClick={handleSave}
            className="flex items-center gap-1"
            style={{
              backgroundColor: color,
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "0.375rem",
            }}
          >
            <FiSave /> Save
          </button>
        </div>

        {!editing && (
          <div className="ql-snow">
            <div
              className="ql-editor "
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}

        {!editing && hovered && (
          <button
            onClick={() => setEditing(true)}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FiEdit3 size={16} className="text-gray-700" />
          </button>
        )}
      </div>

      {/* handle */}

      {data.type === "main" ? null : (
        <Handle
          type="target"
          position={Position.Top}
          className="!bg-blue-400"
        />
      )}

      {data.type === "main" && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-green-400"
        />
      )}
    </div>
  );
};

export default CustomNode;
