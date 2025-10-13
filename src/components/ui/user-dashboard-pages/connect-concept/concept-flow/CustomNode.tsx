"use client";
import React, { useState, useEffect, memo } from "react";
import { Handle, Position, useReactFlow } from "@xyflow/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { FiEdit3, FiSave } from "react-icons/fi";
import { ColorPicker } from "antd";


const CustomNode = (node: { data: { label: string; color?: string; description?: string; type?: string }, id: string, type?: string, selected: boolean }) => {

  const { data, id } = node;
  const { setNodes } = useReactFlow();
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");
  const [hovered, setHovered] = useState(false);
  const [editingLabel, setEditingLabel] = useState(false);

  console.log("CustomNode data:", node);

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


  // update title

  const handleLabelClick = () => {
    setEditingLabel(true);
  };

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNodes((nds) =>
      nds.map((nodeItems) => {
        if (nodeItems.id === node.id) {
          return {
            ...nodeItems,
            data: { ...node.data, label: e.target.value },
          };
        }
        return nodeItems;
      })
    );
  };


  const handleColorChange = (color: string) => {
    setNodes((nds) =>
      nds.map((nodeItems) => {
        if (nodeItems.id === node.id) {
          return {
            ...nodeItems,
            data: { ...nodeItems.data, color },
          };
        }
        return nodeItems;
      })
    );
  };
  return (
    <div
      className={`relative${node.selected ? ` border-[2px] border-l-0 rounded-md` : ""}`}
      style={node.selected ? { borderColor: data.color } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-[270px] min-h-[100px] rounded-md  border-s-4 bg-white shadow border border-gray-100 p-2 font-sans relative"
        style={{ borderLeftColor: color }}
      >
        <div className="flex items-center gap-1 pb-2">
          {/* <button
            type="button"
            className="h-5 w-5 rounded"
            style={{ backgroundColor: `${color}80` }}
          /> */}
          {/* only hax: allow ColorPicker from antd only */}
          <ColorPicker 
            className="h-5 w-5 !border-0 !mr-0 !pr-0 focus:!border-0" 
            style={{ boxShadow: "none" }}
            defaultValue={data?.color} 
            mode="single" 
            onChangeComplete={(color) => handleColorChange(color.toHexString())} 
            styles={{
              popup: { boxShadow: "none", border: "none" },
            }}
          />

          <input
            type="text"
            readOnly={!editingLabel}
            className={`
              text-xs rounded-sm leading-none py-1 px-0.5 nodrag border hover:border-gray-300 transition-colors
              ${editingLabel
                ? " focus:border-primary"
                : "border-transparent"
              }
              ${hovered && !editingLabel ? "border-gray-200" : ""}
              truncate
            `}
            style={{
              outline: "none",
              background: "transparent",
              width: "calc(100% - 65px)",
            }}
            onChange={handleLabelChange}
            defaultValue={data?.label}
            placeholder="Enter title"
            onClick={handleLabelClick}
            onBlur={() => setEditingLabel(false)}
          />
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
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 mt-2.5 cursor-pointer"
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

      {data.type !== "initial" && (
        <Handle
          type="target"
          position={Position.Top}
          className="!bg-blue-400 !invisible"
        />
      )}

      {data.type === "initial" && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-green-400 !invisible"
        />
      )}
      {/* {data.type !== "initial" && (
        <Handle
          type="target"
          position={Position.Top}
          className="!bg-blue-400"
        />
      )}

      {data.type === "initial" && (
        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-green-400"
        />
      )} */}
    </div>
  );
};

export default memo(CustomNode);
