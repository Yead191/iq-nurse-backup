import { Input } from 'antd';
import { Plus } from 'lucide-react';
import React from 'react';

const SidebarTabs = ({ tabs, activeTabId, createTab, switchTab }: any) => {
    return (
        <div>
            <aside className="border-r border-gray-300 bg-white">
                <div className="p-3 border-b border-gray-300 flex items-center justify-between">
                    <span className="font-semibold text-sm">Disease Templates</span>
                    <button
                        onClick={createTab}
                        className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-[#003877] text-white"
                        title="New Map"
                    >
                        <Plus size={14} /> New
                    </button>
                </div>

                <div className="p-2 border-b border-gray-300">
                    <Input placeholder="Search" size="large" style={{ width: "100%" , height: 44 }} />
                </div> 
                
                <div className="p-2 space-y-2.5 overflow-y-auto h-[calc(100%-44px)]">
                    {tabs.map((t: any) => (
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
    );
};

export default SidebarTabs;