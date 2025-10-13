"use client";
import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  Panel,
  Connection,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import SidebarTabs from "../SidebarTabs";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Network } from "lucide-react";
import { HeaderPanel } from "./Panel/HeaderPannel";
import { initialNode } from "./constant";
import FloatingConnectionLine from "./FloatingConnectionLine";
import FloatingEdge from "./FloatingEdge";
import { useSearchParams } from "next/navigation";
import { FooterMobilePannel } from "./Panel/FooterMobilePannel";
import { Grid } from "antd";

type Tab = {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
};

const ConceptFlow = () => {
  const searchParams = useSearchParams();
  const queryType = searchParams?.get("type");
  const { lg } = Grid.useBreakpoint();

  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      setActiveTabNodes((snapshot) => applyNodeChanges(changes, snapshot)),
    []
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      setActiveTabEdges((snapshot) => applyEdgeChanges(changes, snapshot)),
    []
  );

  // ------------- Tabs state -------------
  const [tabs, setTabs] = useState<Tab[]>([
    { id: "t1", name: "Blank Map", nodes: [initialNode], edges: [] },
  ]);
  const [activeTabId, setActiveTabId] = useState("t1");
  const [collapsed, setCollapsed] = useState(false);

  const activeTab = useMemo(
    () => tabs.find((t) => t.id === activeTabId)!,
    [tabs, activeTabId]
  );

  const setActiveTabNodes = useCallback(
    (updater: (prev: Node[]) => Node[]) => {
      setTabs((prev) =>
        prev.map((t) =>
          t.id === activeTabId ? { ...t, nodes: updater(t.nodes) } : t
        )
      );
    },
    [activeTabId]
  );

  const setActiveTabEdges = useCallback(
    (updater: (prev: Edge[]) => Edge[]) => {
      setTabs((prev) =>
        prev.map((t) =>
          t.id === activeTabId ? { ...t, edges: updater(t.edges) } : t
        )
      );
    },
    [activeTabId]
  );

  // if user draws connections manually
  const handleConnect = useCallback(
    (params: Connection) => {
      setActiveTabEdges((prev) => [
        ...prev,
        {
          id: `${params.source}-${params.target}-${prev.length + 1}`,
          ...params,
        },
      ]);
    },
    [setActiveTabEdges]
  );

  const switchTab = (id: string) => setActiveTabId(id);

  const shouldShowSidebar = !!queryType && queryType === "template";

  return (
    <>
      <div className=" w-full h-[calc(100vh-100px)]">
        <PageNavbar
          icon={<Network className="text-black" />}
          title="Create New Concept Map"
          subtitle="Visualize and understand complex concepts with interactive concept maps"
          isAiEnhanced={false}
        />
        <ReactFlow
          nodes={activeTab.nodes}
          edges={activeTab.edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={handleConnect}
          nodeTypes={{ custom: CustomNode, initial: CustomNode }}
          defaultViewport={{ x: 0, y: 0, zoom: 0.2 }}
          fitView
          style={{ paddingLeft: 0, marginLeft: 0 }}
          deleteKeyCode={["Delete", "Backspace"]}
          maxZoom={2}
          minZoom={0.2}
          connectionLineComponent={FloatingConnectionLine}
          edgeTypes={{
            floating: FloatingEdge as React.ComponentType<any>,
          }}
        >
          {shouldShowSidebar && (
            <Panel
              position="top-left"
              style={{ margin: 0 }}
              className=" hidden md:block"
            >
              <SidebarTabs
                tabs={tabs}
                activeTabId={activeTabId}
                onSelect={switchTab}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
              />
            </Panel>
          )}
          <Panel
            position="bottom-center"
            style={{ margin: 0 }}
            className="md:hidden"
          >
            <FooterMobilePannel
              tabs={tabs}
              activeTabId={activeTabId}
              onSelect={switchTab}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              shouldShowSidebar={shouldShowSidebar}
            />
          </Panel>

          <Panel
            position="top-left"
            style={{ marginLeft: shouldShowSidebar && lg ? 240 : 0 }}
          >
            <HeaderPanel
              collapsed={shouldShowSidebar ? collapsed : true}
              queryType={queryType}
            />
          </Panel>
          <Background variant={BackgroundVariant.Lines} color="#D0E5F9" />
          {/* <Controls position="top-center" /> */}
        </ReactFlow>
      </div>
    </>
  );
};

export default ConceptFlow;
