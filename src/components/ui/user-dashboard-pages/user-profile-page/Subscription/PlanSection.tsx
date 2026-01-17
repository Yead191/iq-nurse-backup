import { IoDiamondOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const PlanSection = () => (
  <div className="bg-white p-6 rounded-lg   lg:ml-6  border border-gray-200 ">
    <h2 className="text-lg lg:text-xl font-medium text-black lg:mb-8 mb-4 ">
      Your Current Plan
    </h2>
    <div className="text-[#28C76F] pb-2 lg:pb-6 text-[16px] lg:text-lg  font-normal ">
      ✓ You're subscribed to Studify Premium
    </div>
    <div className="text-[#7B7B7B] mb-2 lg:text-lg text-sm lg:pb-8 pb-4">
      Your subscription will expire on:{" "}
      <span className=" text-[#2C5F8D] font-medium "> December 22, 2025 </span>
    </div>
    <div className=" flex flex-col lg:gap-y-6 gap-y-4">
      <button className="w-full lg:h-[54px] h-12  bg-[#2C5F8D] text-white font-medium rounded  flex items-center justify-center gap-2 ">
        {" "}
        <span>
          {" "}
          <LuRefreshCcw size={20} />{" "}
        </span>{" "}
        <span> Renew Subscription </span>
      </button>
      <button className="w-full lg:h-[54px] h-12  bg-[#2C5F8D] text-white font-medium rounded  flex items-center justify-center gap-2 ">
        {" "}
        <span>
          {" "}
          <RxCross2 size={20} />{" "}
        </span>{" "}
        <span> Cancel Subscription </span>{" "}
      </button>
      <button className="w-full lg:h-[54px] h-12  bg-[#2C5F8D] text-white font-medium rounded  flex items-center justify-center gap-2 ">
        {" "}
        <span>
          {" "}
          <IoDiamondOutline size={20} />{" "}
        </span>{" "}
        <span> Upgrade Subscription </span>
      </button>
    </div>
  </div>
);

export default PlanSection;
