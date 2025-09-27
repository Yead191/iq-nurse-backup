// app/.../ConnectConcept.tsx
"use client";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Network, Plus } from "lucide-react";
import React, { useCallback, useMemo, useState, useEffect } from "react";
import ConceptFlow from "./concept-flow/ConceptFlow";
import ConceptTypeForm from "./ConceptTypeForm";
import type { Edge, Node, Connection } from "@xyflow/react";
import SidebarTabs from "./SidebarTabs";

type EdgeStyle = "straight" | "smoothstep" | "bezier" | "dotted";

type AddNodeArgs = {
    label: string;
    color: string;
    description?: string;
    type?: string;
    connectionStyle?: EdgeStyle;
};

const CENTER_ID = "center-node";

type Tab = {
    id: string;
    name: string;         
    nodes: Node[];
    edges: Edge[];
};

const makeCenterNode = (label = "Patient") =>
    ({
        id: CENTER_ID,
        position: { x: 0, y: 0 },
        data: { label, description: "write description..", color: "#A34F41", type: "main" },
        type: "custom",
    }) as Node;

const polarToCartesian = (cx: number, cy: number, radius: number, ang: number) => ({
    x: cx + radius * Math.cos(ang),
    y: cy + radius * Math.sin(ang),
});

export default function ConnectConcept() {
    // ------------- Tabs state -------------
    const [tabs, setTabs] = useState<Tab[]>([
        { id: "t1", name: "Blank Map", nodes: [makeCenterNode()], edges: [] },
    ]);
    const [activeTabId, setActiveTabId] = useState("t1");

    const activeTab = useMemo(() => tabs.find(t => t.id === activeTabId)!, [tabs, activeTabId]);

    const setActiveTabNodes = useCallback(
        (updater: (prev: Node[]) => Node[]) => {
            setTabs(prev =>
                prev.map(t => (t.id === activeTabId ? { ...t, nodes: updater(t.nodes) } : t))
            );
        },
        [activeTabId]
    );

    const setActiveTabEdges = useCallback(
        (updater: (prev: Edge[]) => Edge[]) => {
            setTabs(prev =>
                prev.map(t => (t.id === activeTabId ? { ...t, edges: updater(t.edges) } : t))
            );
        },
        [activeTabId]
    );

    // ------------- Form data that should affect ONLY the active tab -------------
    const [formData, setFormData] = useState<{ name?: string; description?: string }>({});

    useEffect(() => {
        if (!activeTab) return;
        setActiveTabNodes(prev =>
            prev.map(n =>
                n.id === CENTER_ID
                    ? {
                        ...n,
                        data: {
                            ...n.data,
                            label: formData?.name || "Patient",
                            description: formData?.description || "",
                            type: "main",
                        },
                    }
                    : n
            )
        );
    }, [formData, activeTabId, setActiveTabNodes]);

    // ------------- Add node in a circle around center (for the active tab) -------------
    const addConceptNode = useCallback(
        ({ label, color, connectionStyle = "smoothstep" }: AddNodeArgs) => {
            setActiveTabNodes(prevNodes => {
                const existingCount = prevNodes.filter(n => n.id.startsWith("tab-")).length;
                const angle = existingCount * (Math.PI / 4); // 45°
                const center = prevNodes.find(n => n.id === CENTER_ID) ?? prevNodes[0];
                const { x, y } = polarToCartesian(center.position.x, center.position.y, 350, angle);
                const id = `tab-${existingCount + 1}`;
                return [
                    ...prevNodes,
                    { id, position: { x, y }, data: { label, color }, type: "custom" } as Node,
                ];
            });

            setActiveTabEdges(prev => {
                const nextIndex = prev.length + 1;
                return [
                    ...prev,
                    {
                        id: `e-${CENTER_ID}-tab-${nextIndex}`,
                        source: CENTER_ID,
                        target: `tab-${nextIndex}`,
                        type: connectionStyle, 
                    } as Edge,
                ];
            });
        },
        [setActiveTabNodes, setActiveTabEdges]
    );

    // if user draws connections manually
    const onConnect = useCallback(
        (params: Connection) => {
            setActiveTabEdges(prev => [
                ...prev,
                { id: `${params.source}-${params.target}-${prev.length + 1}`, ...params },
            ]);
        },
        [setActiveTabEdges]
    );

    // ------------- Sidebar actions -------------
    const createTab = () => {
        const id = `t${tabs.length + 1}`;
        setTabs(prev => [...prev, { id, name: `Map ${prev.length + 1}`, nodes: [makeCenterNode()], edges: [] }]);
        setActiveTabId(id);
    };

    const switchTab = (id: string) => setActiveTabId(id);

    return (
        <div>
            <PageNavbar
                icon={<Network className="text-black" />}
                title="Create New Concept Map"
                subtitle="Visualize and understand complex concepts with interactive concept maps"
                isAiEnhanced={false}
            />

            <div className="w-full h-[calc(100vh-110px)] grid grid-cols-[300px_1fr_360px] gap-4 overflow-hidden">
                {/* LEFT: Tab list (like the screenshot) */}
                <SidebarTabs tabs={tabs} activeTabId={activeTabId} onSelect={switchTab} onCreate={createTab} />

                {/* CENTER: Canvas for the ACTIVE tab */}
                <main className="overflow-hidden">
                    <ConceptFlow
                        nodes={activeTab.nodes}
                        edges={activeTab.edges}
                        setNodes={setActiveTabNodes}
                        setEdges={setActiveTabEdges}
                        onConnect={onConnect}
                    />
                </main>

                {/* RIGHT: Form driving the ACTIVE tab’s center + new child nodes */}
                <section className="bg-[#F5F7FA] h-full px-2 pt-3">
                    <ConceptTypeForm setFormData={setFormData} onAddNode={addConceptNode} />
                </section>
            </div>
        </div>
    );
}
