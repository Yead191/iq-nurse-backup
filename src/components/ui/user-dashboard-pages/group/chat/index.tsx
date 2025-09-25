"use client";

import { useState } from "react";
import UserStatusSidebar from "./UserStatusSidebar";
import ChatInterface from "./ChatInterface";
import { Tabs } from "antd";

interface Message {
    id: string;
    user: string;
    content: string;
}

const GroupChatPageInfo: React.FC<{ groupId: string }> = ({ groupId }) => {

    console.log({groupId})

    const tabItems = [
        { key: '1', label: 'Chat', children: <ChatInterface /> },
        { key: '2', label: 'Flashcards' },
        { key: '3', label: 'Polls' },
        { key: '4', label: 'Documents' },
        { key: '5', label: 'Quiz' },
        { key: '6', label: 'Files' }
    ];
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="flex gap-2    ">
            {/* Left sidebar with user statuses */}
            <UserStatusSidebar />
            <div className="w-[calc(100%-170px)] h-[calc(100vh-120px)] overflow-y-auto relative ">
                <Tabs
                    activeKey={activeTab}
                    onChange={setActiveTab}
                    items={tabItems}
                    className="px-4 sticky top-0"
                    tabBarStyle={{ margin: 0, backgroundColor: 'white' }}
                />
            </div>
        </div>
    );
};

export default GroupChatPageInfo;
