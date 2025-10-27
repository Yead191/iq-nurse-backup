import { FaSitemap } from "react-icons/fa";
import { FiZoomIn, FiZoomOut, FiMaximize, FiDownload } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { LuMousePointer2 } from "react-icons/lu";
import { VscSaveAs } from "react-icons/vsc";
import { Tooltip } from "antd";
import { MarkerType, useReactFlow, getNodesBounds, getViewportForBounds, NodeResizeControl, NodeResizer } from "@xyflow/react";
import { getRandomColor } from "../constant";
import { useRouter } from "next/navigation";
import { toPng } from 'html-to-image';



function downloadImage(dataUrl: string) {
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}

const imageWidth = 1024;
const imageHeight = 768;


export const HeaderPanel = ({
  collapsed,
  queryType,
}: {
  collapsed: boolean;
  queryType: any;
}) => {
  const date = new Date();
  const router = useRouter();

  const {
    fitView,
    zoomIn,
    zoomOut,
    getNodes,
    setNodes,
    getEdges,
    setEdges,
    getEdge,
  } = useReactFlow();

  const selectedNode = getNodes().find((node) => node.selected);

  const addConceptNode = () => {
    const nodes = getNodes();
    const edges = getEdges?.() || [];
    const CENTER_ID = "center";

    // Determine the source node: selectedNode if exists, otherwise centerNode
    const sourceNode = selectedNode
      ? selectedNode
      : (nodes.find((n: any) => n.id === CENTER_ID) ?? nodes[0]);

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

    // Position relative to the source node (selected or center)
    const { x, y } = polarToCartesian(
      sourceNode.position.x,
      sourceNode.position.y,
      350,
      angle
    );

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

    // Create edge from source node (selectedNode if exists, otherwise centerNode if it's type 'initial')
    if (selectedNode) {
      // If there's a selected node, connect from it
      const edgeId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `edge-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      setEdges([
        ...edges,
        {
          id: `e-${selectedNode.id}-${id}-${edgeId}`,
          source: selectedNode.id,
          target: id,
          type: "floating",
          markerEnd: { type: MarkerType.Arrow },
          animated: false,
        },
      ]);
    } else if (sourceNode && sourceNode.type === "initial") {
      // If no selected node, use centerNode logic (only if it's type 'initial')
      const edgeId =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `edge-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
      setEdges([
        ...edges,
        {
          id: `e-${sourceNode.id}-${id}-${edgeId}`,
          source: sourceNode.id,
          target: id,
          type: "floating",
          markerEnd: { type: MarkerType.Arrow },
          animated: false,
        },
      ]);
    }
  };



  // const addConceptNode = () => {
  //   const nodes = getNodes();
  //   const edges = getEdges?.() || [];
  //   const CENTER_ID = "center";
  //   const centerNode = nodes.find((n: any) => n.id === CENTER_ID) ?? nodes[0];

  //   const existingConceptNodes = nodes.filter((n: any) => n.type === "custom");
  //   const existingCount = existingConceptNodes.length;
  //   const itemNumber = existingCount + 1;

  //   const angle = existingCount * (Math.PI / 4); // 45° increments

  //   const polarToCartesian = (
  //     cx: number,
  //     cy: number,
  //     r: number,
  //     angle: number
  //   ) => ({
  //     x: cx + r * Math.cos(angle),
  //     y: cy + r * Math.sin(angle),
  //   });

  //   const { x, y } = polarToCartesian(
  //     centerNode.position.x,
  //     centerNode.position.y,
  //     350,
  //     angle
  //   );

  //   // Use crypto.randomUUID to generate a unique id
  //   const uuid =
  //     typeof crypto !== "undefined" && crypto.randomUUID
  //       ? crypto.randomUUID()
  //       : `tab-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  //   const id = `tab-${uuid}`;

  //   // Use a random color from the palette, regardless of any provided color
  //   const randomColor = getRandomColor();

  //   setNodes([
  //     ...nodes,
  //     {
  //       id,
  //       position: { x, y },
  //       data: { color: randomColor, label: `New item ${itemNumber}` },
  //       type: "custom",
  //     },
  //   ]);

  //   // Implement edge creation: connect from initial node (centerNode if it's type 'initial')
  //   if (centerNode && centerNode.type === "initial") {
  //     // Use crypto.randomUUID for edge id too, fallback to Date.now
  //     const edgeId =
  //       typeof crypto !== "undefined" && crypto.randomUUID
  //         ? crypto.randomUUID()
  //         : `edge-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  //     setEdges([
  //       ...edges,
  //       {
  //         id: `e-${centerNode.id}-${id}-${edgeId}`,
  //         source: centerNode.id,
  //         target: id,
  //         type: "floating",
  //         markerEnd: { type: MarkerType.Arrow },
  //         animated: false,
  //       },
  //     ]);
  //   }
  // };


  const handleBackRoute = () => {
    router.back();
  };




  const handleDownloa = () => {
    const nodesBounds = getNodesBounds(getNodes());
    const viewport = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2, 0);

    const viewportElement = document.querySelector('.react-flow__viewport');
    if (!viewportElement || !(viewportElement instanceof HTMLElement)) {
      console.error("Could not find the .react-flow__viewport element.");
      return;
    }

    toPng(viewportElement, {
      backgroundColor: '#1a365d',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
      },
    }).then(downloadImage);
  };

  return (
    <>
      <div
        className={`flex flex-col rounded-2xl bg-amber-300 transition-all duration-150 w-[100vw] ${collapsed && queryType !== "new" ? "md:-ml-52" : ""
          }`}
      >
        <div className="bg-white border-gray-200 px-4 py-2">
          <div className="flex items-center justify-between md:gap-36">
            <div className="flex flex-col w-full md:w-2/6">
              <div className="flex items-center border-b-2 border-gray-300 pb-0.5">
                <input
                  type="text"
                  className="flex-1 text-sm font-medium text-gray-700 border-none outline-none bg-transparent placeholder:text-gray-400"
                  placeholder="Title...."
                />
                <Tooltip title="Save" placement="top">
                  <button
                    className="ml-2 p-1 rounded text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                    type="button"
                  >
                    <VscSaveAs size={20} />
                  </button>
                </Tooltip>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>
                  {date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span>
                  {date.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </div>
            <div className="flex-col items-start hidden md:block">
              <div
                className="flex items-center py-2 bg-white rounded-xl border border-gray-200"
                style={{
                  minHeight: 48,
                  paddingLeft: 15,
                  paddingRight: 15,
                  boxShadow: "0px 2px 8px 0px rgba(16,24,40,0.03)",
                }}
              >
                {/* Undo/Back */}
                <Tooltip title="Back" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Back"
                    type="button"
                    onClick={handleBackRoute}
                  >
                    <IoArrowBackOutline size={20} className="text-gray-400" />
                  </button>
                </Tooltip>
                {/* Pointer/Select Tool */}
                <Tooltip title="Pointer Tool" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Pointer"
                    type="button"
                  >
                    <LuMousePointer2 size={20} className="text-gray-400" />
                  </button>
                </Tooltip>
                {/* Sitemap/Hierarchy View */}
                <Tooltip title="Add New" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Hierarchy"
                    type="button"
                    onClick={addConceptNode}
                  >
                    <FaSitemap size={20} className="text-gray-400" />
                  </button>
                </Tooltip>
                {/* Zoom Out */}
                <Tooltip title="Zoom Out" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Zoom Out"
                    type="button"
                    onClick={() => zoomOut()}
                  >
                    <FiZoomOut size={20} className="text-gray-500" />
                  </button>
                </Tooltip>
                {/* Zoom In */}
                <Tooltip title="Zoom In" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Zoom In"
                    type="button"
                    onClick={() => zoomIn()}
                  >
                    <FiZoomIn size={20} className="text-gray-500" />
                  </button>
                </Tooltip>
                {/* Fullscreen */}
                <Tooltip title="Fullscreen" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer"
                    aria-label="Fullscreen"
                    type="button"
                    onClick={() => fitView()}
                  >
                    <FiMaximize size={20} className="text-gray-500" />
                  </button>
                </Tooltip>
                {/* Export/Download */}
                <Tooltip title="Download" placement="top">
                  <button
                    className="rounded transition-colors p-2 hover:bg-gray-100 cursor-pointer download-btn xy-theme__button"
                    aria-label="Download"
                    type="button"
                    onClick={handleDownloa}
                  >
                    <FiDownload size={20} className="text-gray-400" />
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="w-2/6"></div>
          </div>
        </div>
      </div>
    </>

  );
};
