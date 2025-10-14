import { Input } from 'antd';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

// Basic custom collapsible Sidebar for reliability
const SidebarTabs = ({ tabs, activeTabId, createTab, switchTab, collapsed, setCollapsed }: any) => {


    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    if (isMobile) {
        // No collapse for mobile: show everything, no collapse logic or button
        return (
            <div style={{ display: 'flex', height: '100%' }}>
                <div className="w-full" style={{ minWidth: 0, overflow: 'hidden' }}>
                    <aside className="bg-white h-screen relative border-r border-gray-300">
                        <div className="p-3 pt-5 border-b border-gray-200 flex items-center justify-between">
                            <span className="font-semibold text-sm">Disease Templates</span>
                            <button
                                onClick={createTab}
                                className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-[#003877] text-white"
                                title="New Map"
                                aria-label="Create new map"
                            >
                                <Plus size={14} /> New
                            </button>
                        </div>
                        <div className="p-2">
                            <Input placeholder="Search" size="large" style={{ width: "100%", height: 40 }} />
                        </div>
                        <div className="p-2 space-y-2.5 overflow-y-auto h-[calc(100%-116px)]">
                            {tabs?.map((t: any) => (
                                <button
                                    key={t.id}
                                    onClick={() => switchTab(t.id)}
                                    className={`w-full text-left px-3 py-2 rounded-md border  ${t.id === activeTabId ? "bg-[#F5F7FA] border-[#00387780]" : "hover:bg-gray-50 border-gray-300"
                                        }`}
                                >
                                    <div className="text-sm font-medium">{t.name}</div>
                                    <div className="text-[11px] text-gray-500">
                                        {t.nodes.length - 1} items • {t.edges.length} links
                                    </div>
                                </button>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        )
    }

    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <div
                className={`hidden md:block transition-all duration-150 `}
                style={{
                    width: collapsed ? 10 : 225,
                    minWidth: collapsed ? 10 : 225,
                    overflow: 'hidden',
                }}
            >
                <aside className={`${collapsed ? 'border border-white' : 'border-r border-gray-300'} bg-white h-screen relative`}>
                    {/* Collapse/Expand button */}
                    <div style={{ position: 'relative' }}>

                        <button
                            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                            className="absolute -top-2 right-[-11px] z-30 flex items-center justify-center p-0.5  bg-white cursor-pointer   transition-all duration-150 "
                            style={{
                                width: 28,
                                height: 28,
                                boxShadow: '0 1px 4px 0 rgba(0,0,0,0.06)'
                            }}
                            onClick={() => setCollapsed((c: boolean) => !c)}
                            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                        >
                            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </button>
                    </div>
                    {/* When collapsed, show icon only */}
                    {!collapsed && (
                        <>
                            <div className="p-3 pt-5 border-b border-gray-200 flex items-center justify-between">
                                <span className="font-semibold text-sm">Disease Templates</span>
                                <button
                                    onClick={createTab}
                                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-[#003877] text-white"
                                    title="New Map"
                                    aria-label="Create new map"
                                >
                                    <Plus size={14} /> New
                                </button>
                            </div>

                            <div className="p-2 ">
                                <Input placeholder="Search" size="large" style={{ width: "100%", height: 40 }} />
                            </div>

                            <div className="p-2 space-y-2.5 overflow-y-auto h-[calc(100%-116px)]">
                                {tabs?.map((t: any) => (
                                    <button
                                        key={t.id}
                                        onClick={() => switchTab(t.id)}
                                        className={`w-full text-left px-3 py-2 rounded-md border  ${t.id === activeTabId ? "bg-[#F5F7FA] border-[#00387780]" : "hover:bg-gray-50 border-gray-300"
                                            }`}
                                    >
                                        <div className="text-sm font-medium">{t.name}</div>
                                        <div className="text-[11px] text-gray-500">
                                            {t.nodes.length - 1} items • {t.edges.length} links
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </aside>
            </div>
        </div>
    );
};

export default SidebarTabs;