"use client";
import { useState } from "react";
import PreviousChatSession from "./PreviousChatSession";
import { tabs, tabsData } from "@/data/nurseQ";
import SearchInput from "./SearchInput";
import NurseBox from "./NurseBox";

const NurseChat = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [typing,setTyping]=useState(false)

  const content = [
    <PreviousChatSession key="1" chatSessions={tabsData?.carePlanSessions} />,
    <PreviousChatSession key="2" chatSessions={tabsData?.drugCardSessions} />,
    <PreviousChatSession
      key="3"
      chatSessions={tabsData?.dosageCalculationSessions}
    />,
    <PreviousChatSession
      key="4"
      chatSessions={tabsData?.reviewEssaySessions}
    />,
    <PreviousChatSession
      key="5"
      chatSessions={tabsData?.uploadDocumentSessions}
    />,
    <PreviousChatSession key="6" chatSessions={tabsData?.myCalenderSessions} />,
  ];

  return (
    <div className="w-full lg:h-[calc(100vh-245px)] h-[calc(100vh-192px)]">
      <div className=" h-full flex flex-col relative ">
        {/* Scrollable content */}
        <div className=" sticky w-full  bottom-0 bg-white ">
          <SearchInput setIsType={setTyping} />
        </div>
        <div className="flex-1 overflow-y-auto container mx-auto lg:p-8 p-2">

         { !typing && <NurseBox tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab}/>}
        </div>

        {/* Fixed bottom input */}
        
      </div>
    </div>
  );
};

export default NurseChat;
