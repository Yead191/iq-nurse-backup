"use client";

import { useState, useEffect } from "react";
import UserStatusSidebar from "./UserStatusSidebar";
import ChatInterface from "./ChatInterface";
import { Tabs } from "antd";
import Poll from "./Poll";
import FlashCardSection from "./FlashCardSection";
import DocumentSection from "./DocumentSection";
import QuizSection from "./quiz/QuizSection";
import FileSection from "./files/FileSection";
import ResponsiveGroupNav from "./ResponsiveGroupHeader";
import TeamMembers from "./TeamMembers";

interface Message {
    id: string;
    user: string;
    content: string;
}

const getResponsiveTabGutter = () => {
    if (typeof window === "undefined") return 24;
    if (window.innerWidth < 500) return 12;
    if (window.innerWidth < 768) return 24;
    if (window.innerWidth < 1024) return 40;
    return 80;
};

const GroupChatPageInfo: React.FC<{ groupId: string }> = ({ groupId }) => {

    const [activeTab, setActiveTab] = useState('1');
    const [tabGutter, setTabGutter] = useState(getResponsiveTabGutter());
    const [isMembersSelcted, setIsMembersSelcted] = useState(false);


    const tabItems = [
        { key: '1', label: 'Chat', children: <ChatInterface /> },
        { key: '2', label: 'Flashcards', children: <FlashCardSection /> },
        { key: '3', label: 'Polls', children: <Poll /> },
        { key: '4', label: 'Documents', children: <DocumentSection /> },
        { key: '5', label: 'Quiz', children: <QuizSection /> },
        { key: '6', label: 'Files', children: <FileSection /> }
    ];



    useEffect(() => {
        function handleResize() {
            setTabGutter(getResponsiveTabGutter());
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMembersSelcted ? (
                <>
                    <ResponsiveGroupNav  setIsMembersSelcted={setIsMembersSelcted}/>
                    <div className="flex gap-2">
                        <UserStatusSidebar />
                        <div className="w-full md:w-[calc(100%-200px)] h-[calc(100vh-90px)] overflow-y-auto relative">
                            <Tabs
                                activeKey={activeTab}
                                onChange={setActiveTab}
                                items={tabItems}
                                className="px-4 sticky top-0"
                                tabBarStyle={{
                                    margin: 0,
                                    backgroundColor: 'white',
                                    paddingLeft: typeof window !== "undefined" && window.innerWidth < 768 ? 8 : 10
                                }}
                                tabBarGutter={tabGutter}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <TeamMembers setIsMembersSelcted={setIsMembersSelcted}/>
            )}
        </>

    );
};

export default GroupChatPageInfo;
