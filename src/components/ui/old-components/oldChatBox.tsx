"use client";
import { useState } from "react";
import PreviousChatSession from "../user-dashboard-pages/nurse-q/PreviousChatSession";
import { tabs, tabsData } from "@/data/nurseQ";
import SearchInput from "../user-dashboard-pages/nurse-q/SearchInput";
import NurseBox from "../user-dashboard-pages/nurse-q/NurseBox";

const NurseChat = () => {
  const [activeTab, setActiveTab] = useState(0);

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
    <div className="w-full lg:h-[calc(100vh-145px)] h-[calc(100vh-192px)]">
      <div className=" h-full flex flex-col relative ">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto container mx-auto lg:p-8 p-2">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center lg:pb-8 pb-4">
              <img
                src="/assets/user-dashboard-images/nurse-q/chatAi.svg"
                alt=""
                className="lg:w-[130px] lg:h-[130px] w-[88px] h-[88px] "
              />
            </div>
            <h1 className="lg:text-[23px] text-[19px] font-extrabold">
              Hi, I’m Nurse Q
            </h1>
            <p className="mt-2 lg:text-lg text-sm font-regular">
              Ask me anything about nursing, or try one of these examples
            </p>
          </div>

          <NurseBox tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab}/>

          <div className="tab-content">{content[activeTab]}</div>
        </div>

        {/* Fixed bottom input */}
        <div className=" sticky w-full  bottom-0 bg-white ">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default NurseChat;
