import { BaseEdge, EdgeLabelRenderer, EdgeProps, getSmoothStepPath, useReactFlow } from "@xyflow/react";
import React from "react";

const NodeEdge = ({ id, selected, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }: EdgeProps) => {
  const { deleteElements } = useReactFlow();
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    offset: 0,
    sourcePosition,
    targetPosition,
  });

  const onEdgeDelete = () => deleteElements({ edges: [{ id }] });

  return (
    <>
      <svg>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="gray" />
          </marker>
        </defs>
      </svg>
      <svg>
        <defs>
          <marker id="arrow-selected" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3460fb" />
          </marker>
        </defs>
      </svg>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: selected ? "#3460fb" : "gray",
          fill: "none",
        }}
        markerEnd={selected ? "url(#arrow-selected)" : "url(#arrow)"}
      />

      <EdgeLabelRenderer>
        {selected && (
          <button
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
            className={`absolute pointer-events-auto text-sm transition flex items-center justify-center w-4 h-4 text-blueCustom bg-gray-100 border border-blueCustom rounded-full hover:shadow-md`}
            onClick={onEdgeDelete}
          >
            ×
          </button>
        )}
      </EdgeLabelRenderer>
    </>
  );
};

export default NodeEdge;