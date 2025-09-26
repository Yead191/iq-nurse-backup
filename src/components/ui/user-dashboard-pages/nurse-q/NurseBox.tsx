import React, { Dispatch, SetStateAction } from "react";

export default function NurseBox({tabs,setActiveTab,activeTab}:{tabs: {
    title: string;
    iconImg: string;
}[],setActiveTab:Dispatch<SetStateAction<number>>,activeTab:number
}) {
  return (
    <div className="tabs flex flex-wrap w-full items-center justify-center lg:gap-4 gap-2 mb-4">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`md:p-6 p-3 rounded-lg cursor-pointer flex flex-col items-center lg:gap-6 gap-2.5 bg-white drop-shadow-xl  text-[#475569] ${
            activeTab === index
              ? "border border-[#003877]"
              : "border border-[#E2E8F0]"
          }`}
          onClick={() => setActiveTab(index)}
        >
          <img
            src={tab?.iconImg}
            alt=""
            className=" lg:size-6 size-6 object-contain"
          />
          <p className="lg:text-sm text-xs font-medium">{tab?.title}</p>
        </div>
      ))}
    </div>
  );
}
