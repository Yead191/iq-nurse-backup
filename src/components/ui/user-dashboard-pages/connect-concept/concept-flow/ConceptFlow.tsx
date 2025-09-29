"use client";
import { useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";

type Props = {
  nodes: Node[];
  edges: Edge[];
  setNodes: (updater: (prev: Node[]) => Node[]) => void;
  setEdges: (updater: (prev: Edge[]) => Edge[]) => void;
  onConnect?: OnConnect;
};

const ConceptFlow = ({
  nodes,
  edges,
  setNodes,
  setEdges,
  onConnect,
}: Props) => {
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((snapshot) => applyNodeChanges(changes, snapshot)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((snapshot) => applyEdgeChanges(changes, snapshot)),
    [setEdges]
  );

  const handleConnect: OnConnect = useCallback(
    (params) => {
      if (onConnect) return onConnect(params);
      setEdges((snapshot) => addEdge(params, snapshot));
    },
    [onConnect, setEdges]
  );

  return (
    <div className="h-[calc(100vh-260px)] lg:h-[calc(100vh-110px)] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        nodeTypes={{ custom: CustomNode }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ConceptFlow;
