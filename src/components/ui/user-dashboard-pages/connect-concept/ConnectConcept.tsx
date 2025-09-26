"use client";
import PageNavbar from '@/components/shared/user-dashboard/PageNavbar';
import { Network } from 'lucide-react';
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import ConceptFlow from './concept-flow/ConceptFlow';
import ConceptTypeForm from './ConceptTypeForm';
import type { Edge, Node, Connection } from "@xyflow/react";

type AddNodeArgs = {
    label: string;         
    color: string;   
    description?: string;     
    type?: string;     
    connectionStyle?: "straight" | "smoothstep" | "bezier" | "dotted";
};

const CENTER_ID = "center-node";

const polarToCartesian = (cx: number, cy: number, radius: number, angleRad: number) => ({
    x: cx + radius * Math.cos(angleRad),   //x=cx+r⋅cos(θ)
    y: cy + radius * Math.sin(angleRad),    //y=cy+r⋅sin(θ)
});

const ConnectConcept = () => {
    const [formData, setFormData] = useState<{ name?: string , description?: string }>({});

    // graph state
    const [nodes, setNodes] = useState<Node[]>([
        {
            id: CENTER_ID,
            position: { x: 0, y: 0 },
            data: { label: "Patient", description:"write description..", color: "#A34F41" , type: "main"  }, 
            type: "custom",
        },
    ]);
    const [edges, setEdges] = useState<Edge[]>([]);

    // keep center node label synced with name
    useEffect(() => {
        setNodes((prev) =>
            prev.map((n) =>
                n.id === CENTER_ID ? { ...n, data: { ...n.data, label: formData?.name || "Patient" , description: formData?.description || "" , type: "main" } } : n
            )
        );
    }, [formData]);

    // add a node around the center
    const addConceptNode = useCallback(
        ({ label, color, connectionStyle = "smoothstep" }: AddNodeArgs) => {
            // count existing “tab-*” nodes to decide angle
            const existing = nodes.filter((n) => n.id.startsWith("tab-")).length;
            const angleStep = Math.PI / 4; 
            const angle = existing * angleStep;

            const radius = 350; 
            const center = nodes.find((n) => n.id === CENTER_ID) ?? nodes[0];
            const cx = center?.position?.x ?? 0;
            const cy = center?.position?.y ?? 0;

            const { x, y } = polarToCartesian(cx, cy, radius, angle);

            const id = `tab-${existing + 1}`;

            const newNode: Node = {
                id,
                position: { x, y },
                data: { label, color },
                type: "custom",
            };

            const newEdge: Edge = {
                id: `${CENTER_ID}-${id}`,
                source: CENTER_ID,
                target: id,
                type: connectionStyle, // React Flow built-in edge types
            };

            setNodes((prev) => [...prev, newNode]);
            setEdges((prev) => [...prev, newEdge]);
        },
        [nodes]
    );

    // optional: handler if user manually connects nodes in canvas
    const onConnect = useCallback((params: Connection) => {
        setEdges((prev) => [...prev, { id: `${params.source}-${params.target}-${prev.length + 1}`, ...params }]);
    }, []);

    return (
        <div>
            <PageNavbar
                icon={<Network className=" text-black" />}
                title="Interactive Concept Maps"
                subtitle="Visualize and understand complex concepts with interactive concept maps"
                isAiEnhanced={false}
            />

            <div className='w-full h-[calc(100vh-110px)] flex items-center overflow-y-auto'>
                <div className='w-3/4'>
                    <ConceptFlow
                        nodes={nodes}
                        edges={edges}
                        setNodes={setNodes}
                        setEdges={setEdges}
                        onConnect={onConnect}
                    />
                </div>

                <div className='w-1/4 h-full bg-[#F5F7FA] px-2 flex items-start justify-center pt-3 rounded-lg'>
                    <ConceptTypeForm
                        setFormData={setFormData}
                        onAddNode={addConceptNode}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConnectConcept;
