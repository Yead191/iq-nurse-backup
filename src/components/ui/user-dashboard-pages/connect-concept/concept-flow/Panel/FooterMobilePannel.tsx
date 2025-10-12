import { FaSitemap } from 'react-icons/fa';
import { FiDownload, FiMaximize, FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { IoArrowBackOutline } from 'react-icons/io5';
import { ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Drawer, Button } from 'antd';
import SidebarTabs from '../../SidebarTabs';
import { MarkerType, useReactFlow } from '@xyflow/react';
import { getRandomColor } from '../constant';
import { useRouter } from 'next/navigation';

export const FooterMobilePannel = ({ tabs, activeTabId, createTab, switchTab, collapsed, setCollapsed, shouldShowSidebar }: any) => {
    // This panel is ONLY for mobile (see usage: md:hidden)
    const [openDrawer, setOpenDrawer] = useState(false);
    const router = useRouter();

    const { fitView, zoomIn, zoomOut, getNodes, setNodes, getEdges, setEdges, getEdge } = useReactFlow();


    const addConceptNode = () => {
        const nodes = getNodes();
        const edges = getEdges?.() || [];
        const CENTER_ID = "center";
        const centerNode = nodes.find((n: any) => n.id === CENTER_ID) ?? nodes[0];

        const existingConceptNodes = nodes.filter((n: any) => n.type === 'custom');
        const existingCount = existingConceptNodes.length;
        const itemNumber = existingCount + 1;

        const angle = existingCount * (Math.PI / 4); // 45° increments

        const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => ({
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
        });

        const { x, y } = polarToCartesian(
            centerNode.position.x,
            centerNode.position.y,
            350,
            angle
        );

        // Use crypto.randomUUID to generate a unique id
        const uuid = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `tab-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
        const id = `tab-${uuid}`;

        // Use a random color from the palette, regardless of any provided color
        const randomColor = getRandomColor();

        setNodes([
            ...nodes,
            {
                id,
                position: { x, y },
                data: { color: randomColor, label: `New item ${itemNumber}` },
                type: "custom",
            }
        ]);

        // Implement edge creation: connect from initial node (centerNode if it's type 'initial')
        if (centerNode && centerNode.type === "initial") {
            // Use crypto.randomUUID for edge id too, fallback to Date.now
            const edgeId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `edge-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
            setEdges([
                ...edges,
                {
                    id: `e-${centerNode.id}-${id}-${edgeId}`,
                    source: centerNode.id,
                    target: id,
                    type: 'floating',
                    markerEnd: { type: MarkerType.Arrow },
                    animated: false,
                }
            ]);
        }
    };


    const handleDownloadFlow = async () => {
        const flowJson = {
            nodes: getNodes(),
            edges: getEdges()
        };

        // Trigger download of the JSON
        const blob = new Blob([JSON.stringify(flowJson, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'concept-flow.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

    const handleBackRoute = () => {
        router.back();
    }
    return (
        <>
            <div className="flex flex-col items-center gap-2 py-3 px-1 w-full pointer-events-none pb-28">
                {/* Top action bar */}
                <div
                    className="flex flex-row pointer-events-auto bg-white rounded-xl shadow border min-h-12 items-center"
                    style={{
                        width: 360,
                        maxWidth: '100vw',
                        borderColor: '#E5E7EB',
                        padding: '0.25rem 0.25rem 0.25rem 0.75rem',
                    }}
                >

                    <button
                        className="flex items-center rounded p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Redo"
                        type="button"
                        tabIndex={0}
                        onClick={handleBackRoute}
                    >
                        <IoArrowBackOutline size={22} className="text-gray-400" />
                    </button>
                    <button
                        className="flex items-center rounded p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Hierarchy"
                        type="button"
                        tabIndex={0}
                        onClick={addConceptNode}
                    >
                        <FaSitemap size={20} className="text-gray-400" />
                    </button>
                    <button
                        className="flex items-center rounded p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Fullscreen"
                        type="button"
                        onClick={() => fitView()}
                        tabIndex={0}
                    >
                        <FiMaximize size={20} className="text-gray-400" />
                    </button>
                    <button
                        className="flex items-center rounded p-2 hover:bg-gray-100 transition-colors"
                        aria-label="Export"
                        type="button"
                        tabIndex={0}
                        onClick={handleDownloadFlow}
                    >
                        <FiDownload size={20} className="text-gray-400" />
                    </button>
                    {/* Vertical Divider */}
                    <div className="h-7 w-px mx-5" style={{ background: '#E5E7EB' }} />
                    <div className="flex gap-0">
                        <button
                            className="flex items-center rounded-l px-3 py-2 hover:bg-gray-100 transition-colors border border-gray-200 border-r-0 bg-gray-50"
                            aria-label="Zoom Out"
                            type="button"
                            style={{ minWidth: 36, minHeight: 36 }}
                            tabIndex={0}
                            onClick={() => zoomOut()}

                        >
                            <FiZoomOut size={18} className="text-gray-400" />
                        </button>
                        <button
                            className="flex items-center rounded-r px-3 py-2 hover:bg-gray-100 transition-colors border border-gray-200 bg-gray-50"
                            aria-label="Zoom In"
                            type="button"
                            onClick={() => zoomIn()}
                            style={{ minWidth: 36, minHeight: 36 }}
                            tabIndex={0}
                        >
                            <FiZoomIn size={18} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                {/* Disease Templates bar */}
                <div
                    className={`flex items-center justify-between pointer-events-auto bg-white rounded-xl shadow border ${shouldShowSidebar ? "" : "hidden"}`}
                    style={{
                        height: 48,
                        maxWidth: 360,
                        minWidth: 220,
                        width: '100%',
                        paddingLeft: 24,
                        paddingRight: 12,
                        marginTop: 8,
                        borderColor: '#E5E7EB'
                    }}
                >
                    <span className="font-medium text-gray-800 text-[17px]">Disease Templates</span>
                    <button
                        className="flex items-center cursor-pointer justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors border-none"
                        aria-label="Collapse"
                        style={{
                            width: 36,
                            height: 36,
                            marginLeft: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={() => setOpenDrawer(true)}
                        tabIndex={0}
                        type="button"
                    >
                        <span>
                            <ChevronUp size={28} className="text-gray-500" />
                        </span>
                    </button>
                </div>
            </div>
            <Drawer
                placement="bottom"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                height="80vh"
                closeIcon={null}
                bodyStyle={{ padding: 0, background: "#fff", borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                maskClosable={true}
            >
                <div
                    className={`  bottom-0 left-0 right-0 bg-white border-amber-400 !w-screen transition-transform duration-300 ease-in-out ${openDrawer ? "translate-y-0" : "translate-y-full"
                        }`}
                    style={{ height: "80vh" }}
                >

                    <div className="p-4 max-h-[calc(100vh-400px)] overflow-y-auto ">
                        <SidebarTabs
                            tabs={tabs}
                            activeTabId={activeTabId}
                            onSelect={switchTab}
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};
