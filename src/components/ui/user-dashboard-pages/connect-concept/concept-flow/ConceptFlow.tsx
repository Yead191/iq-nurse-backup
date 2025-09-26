"use client";
import { useState, useCallback } from "react";
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


const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Nursing Interventions" }, type: "custom" },
  { id: "n2", position: { x: 0, y: 120 }, data: { label: "Node 2" }, type: "custom" },
  { id: "n3", position: { x: 0, y: 240 }, data: { label: "Node 3" }, type: "custom" },
];

const initialEdges: Edge[] = [
  { id: "n1-n2", source: "n1", target: "n2" , type:'floating' },
  { id: "n1-n3", source: "n1", target: "n3" ,type:'floating'},
];

const ConceptFlow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((snapshot) => applyNodeChanges(changes, snapshot)),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((snapshot) => applyEdgeChanges(changes, snapshot)),
    []
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((snapshot) => addEdge(params, snapshot)),
    []
  );
  return (
    <div className="h-[calc(100vh-110px)] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ custom: CustomNode }} 
        defaultViewport={{ x: 100, y: 0, zoom: 0.2 }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ConceptFlow;