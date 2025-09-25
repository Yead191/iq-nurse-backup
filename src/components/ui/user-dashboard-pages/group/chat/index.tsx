"use client";

import { useState } from "react";
import UserStatusSidebar from "./UserStatusSidebar";
import ChatInterface from "./ChatInterface";
import { Tabs } from "antd";
import NavigationBar from "./ChatNav";
import Poll from "./Poll";
import FlashCardSection from "./FlashCardSection";
import DocumentSection from "./DocumentSection";
import QuizSection from "./quiz/QuizSection";
import FileSection from "./files/FileSection";

interface Message {
    id: string;
    user: string;
    content: string;
}

const GroupChatPageInfo: React.FC<{ groupId: string }> = ({ groupId }) => {

    console.log({ groupId })

    const tabItems = [
        { key: '1', label: 'Chat', children: <ChatInterface /> },
        { key: '2', label: 'Flashcards', children: <FlashCardSection/> },
        { key: '3', label: 'Polls', children: <Poll /> },
        { key: '4', label: 'Documents', children: <DocumentSection/>},
        { key: '5', label: 'Quiz' , children: <QuizSection/>},
        { key: '6', label: 'Files', children:<FileSection/>  },
    ];
    const [activeTab, setActiveTab] = useState('1');

    return (
        <>
            <NavigationBar />
            <div className="flex gap-2">

                {/* Left sidebar with user statuses */}
                <UserStatusSidebar />
                <div className="w-[calc(100%-170px)] h-[calc(100vh-90px)] overflow-y-auto relative ">
                    <Tabs
                        activeKey={activeTab}
                        onChange={setActiveTab}
                        items={tabItems}
                        className="px-4 sticky top-0"
                        tabBarStyle={{ margin: 0, backgroundColor: 'white' }}
                        tabBarGutter={80}
                    />
                </div>
            </div>
        </>

    );
};

export default GroupChatPageInfo;
