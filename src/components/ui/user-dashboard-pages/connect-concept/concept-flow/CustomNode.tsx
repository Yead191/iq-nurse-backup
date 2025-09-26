"use client";
import React, { useState, useEffect } from "react";
import { Handle, Position } from "@xyflow/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { FiEdit3, FiSave } from "react-icons/fi";

interface CustomNodeProps {
    data: { label: string };
}

const CustomNode = ({ data }: CustomNodeProps) => {
    const [editing, setEditing] = useState(false);
    const [content, setContent] = useState("");
    const [hovered, setHovered] = useState(false);

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

    // Initialize once & keep editor mounted
    useEffect(() => {
        if (!quill) return;
        if (quill && editing) {
            quill.clipboard.dangerouslyPasteHTML(content);
            quill.on("text-change", () => {
                setContent(quill.root.innerHTML);
            });
        }
    }, [quill, editing]); 
    

    // When entering edit mode, load current content & enable editing
    // useEffect(() => {
    //     if (!quill) return;
    //     if (editing) {
    //         quill.clipboard.dangerouslyPasteHTML(content || "");
    //         quill.enable(true);
    //     } else {
    //         quill.enable(false);
    //     }
    // }, [quill, editing, content]);

    const handleSave = () => {
        if (quill) setContent(quill.root.innerHTML);
        setEditing(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="w-[270px] min-h-[150px] rounded-md border-s-4 border-s-[#A34F41] bg-white shadow border border-gray-100 p-2 font-sans relative">
                {/* Header */}
                <div className="flex items-center gap-2 pb-2">
                    <button type="button" className="h-5 w-5 rounded" style={{ backgroundColor: "#A34F4150" }} />
                    <p className="text-base font-bold text-black">{data.label}</p>
                </div>

                {/* Quill editor (always mounted) */}
                <div className={editing ? "" : "hidden"}>
                    <div ref={quillRef} style={{ minHeight: 100 }} className="bg-white rounded-md" />
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-1 bg-[#A34F41] text-white px-3 py-1 rounded-md text-sm hover:bg-[#873d34] transition mt-0.5"
                    >
                        <FiSave /> Save
                    </button>
                </div>

                {/* Read-only preview */}
                {!editing && (
                    <div
                        className="prose prose-sm max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}

                {/* Edit button on hover */}
                {!editing && hovered && (
                    <button
                        onClick={() => setEditing(true)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 transition"
                    >
                        <FiEdit3 size={16} className="text-gray-700" />
                    </button>
                )}
            </div>

            <Handle type="target" position={Position.Top} className="!bg-blue-400" />
            <Handle type="source" position={Position.Bottom} className="!bg-green-400" />
        </div>
    );
};

export default CustomNode;
