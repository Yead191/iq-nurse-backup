"use client";
import React, { useState, useEffect, memo } from "react";
import { Handle, MarkerType, Position, useReactFlow } from "@xyflow/react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { FiEdit, FiEdit3, FiSave } from "react-icons/fi";
import { ColorPicker } from "antd";
import { FaPen, FaSitemap } from "react-icons/fa";
import NodeHeaderActionButtons from "./ui/NodeHeaderActionButtons";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getRandomColor } from "./constant";

const CustomNode = (node: {
  data: { label: string; color?: string; description?: string; type?: string };
  id: string;
  type?: string;
  selected: boolean;
}) => {
  const { data, id } = node;
  const { setNodes, deleteElements, getNodes, getEdges, setEdges } =
    useReactFlow();
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState("");
  const [hovered, setHovered] = useState(false);
  const [editingLabel, setEditingLabel] = useState(false);

  // console.log("CustomNode data:", node);

  // Add image upload to Quill toolbar and image handler
  // Removed "table" from the Quill toolbar config because table is not working.
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          ["bold", "italic", "underline"],
          [{ list: "bullet" }, { list: "ordered" }],
          // [{ align: [] }],
          ["clean"],
          // ["table"],
          ["image"],
        ],
      },
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

  // Fix: Use node's (x, y) position instead of node.position, which does not exist on type.

  const addConceptNode = () => {
    const nodes = getNodes();
    const edges = getEdges?.() || [];

    const existingConceptNodes = nodes.filter((n: any) => n.type === "custom");
    const existingCount = existingConceptNodes.length;
    const itemNumber = existingCount + 1;

    const angle = existingCount * (Math.PI / 4); // 45° increments

    const polarToCartesian = (
      cx: number,
      cy: number,
      r: number,
      angle: number
    ) => ({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });

    // Assume that our node has the 'id' property, so find its position from nodes
    const thisNode = nodes.find((n: any) => n.id === node.id);
    const nodeX = thisNode?.position?.x ?? 0;
    const nodeY = thisNode?.position?.y ?? 0;

    const { x, y } = polarToCartesian(nodeX, nodeY, 350, angle);

    // Use crypto.randomUUID to generate a unique id
    const uuid =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `tab-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    const id = `tab-${uuid}`;

    // Use a random color from the palette
    const randomColor = getRandomColor();

    setNodes([
      ...nodes,
      {
        id,
        position: { x, y },
        data: { color: randomColor, label: `New item ${itemNumber}` },
        type: "custom",
      },
    ]);

    // Create edge from this node to the new node
    const edgeId =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `edge-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    setEdges([
      ...edges,
      {
        id: `e-${node.id}-${id}-${edgeId}`,
        source: node.id,
        target: id,
        type: "floating",
        markerEnd: { type: MarkerType.Arrow },
        animated: false,
      },
    ]);
  };

  const headerButtons = [
    {
      icon: <FiEdit className="text-sm" />,
      onClick: () => setEditing(true),
      title: "Edit",
      color: "blue-800",
    },
    {
      icon: <FaSitemap className="text-sm" />,
      onClick: () => {
        addConceptNode();
      },
      title: "Create New",
      color: "green-600",
    },
    {
      icon: <RiDeleteBin6Line className="text-sm" />,
      onClick: () => deleteElements({ nodes: [{ id }] }),
      title: "Delete",
      color: "red-500",
    },
  ];

  return (
    <>
      <div
        className={`group relative ${
          node.selected ? ` border-[2px] border-l-0 rounded-md` : ""
        }`}
        style={node.selected ? { borderColor: data.color } : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {data.type !== "initial" ? (
          <NodeHeaderActionButtons buttons={headerButtons} />
        ) : (
          <NodeHeaderActionButtons
            buttons={headerButtons.filter((b) => b.title !== "Delete")}
          />
        )}

        <div
          className="w-[300px] min-h-[100px] rounded-md  border-s-4 bg-white shadow border border-gray-100 p-2 font-sans relative"
          style={{ borderLeftColor: color }}
        >
          <div className="flex items-center gap-1 pb-2">
            <div className="relative flex items-center group">
              <ColorPicker
                className="h-5 w-5 !border-0 !mr-0 !pr-0 focus:!border-0 cursor-pointer"
                style={{ boxShadow: "none" }}
                defaultValue={data?.color}
                mode="single"
                onChangeComplete={(color) =>
                  handleColorChange(color.toHexString())
                }
                styles={{
                  popup: { boxShadow: "none", border: "none" },
                }}
              />
              <span className="absolute right-[-8px] bottom-[12px] left-[14px] opacity-80 pointer-events-none group-hover:opacity-100">
                <FaPen size={9} className="text-white" />
              </span>
            </div>

            <input
              type="text"
              readOnly={!editingLabel}
              className={`
              text-xs rounded-sm leading-none py-1 px-0.5 nodrag border hover:border-gray-300 transition-colors
              ${editingLabel ? " focus:border-primary" : "border-transparent"}
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
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html:
                    content && content.trim()
                      ? content
                      : '<span class="text-gray-400 italic">Write description…</span>',
                }}
              />
            </div>
          )}
        </div>

        {/* handle */}

        <Handle
          type="target"
          position={Position.Top}
          className="!bg-blue-400 !invisible"
        />

        <Handle
          type="source"
          position={Position.Bottom}
          className="!bg-green-400 !invisible"
        />
      </div>
    </>
  );
};

export default memo(CustomNode);
