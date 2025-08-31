"use client";
import VoiceToText from "@/components/shared/VoiceToText";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsMic, BsMicMute } from "react-icons/bs";
import { HiOutlineLink } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div className="container mx-auto">
      <div className="border border-[#E2E8F0] p-4 rounded-xl flex flex-col gap-4">
        {/* Middle Input Field */}
        <div className="flex-1">
          <div className=" flex items-center justify-end">
            <input
              type="text"
              placeholder={isTyping ? "" : "Ask your AI tutor anything"}
              value={query}
              onChange={handleInputChange}
              className="w-full  focus:outline-none focus:ring-0 placeholder-[#000000] placeholder:font-semibold text-sm py-2 px-4"
            />

            <button
              className=" h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer "
              onClick={() => router.push("/profile/nurse-q/12")}
            >
              {" "}
              <IoIosSend size={24} color="#003877" />{" "}
            </button>
          </div>
        </div>

        {/* Left side buttons */}
        <div className="flex flex-row  items-center  justify-between">
          <div className=" flex flex-row  lg:gap-3 gap-1">
            <button className="text-[#02040F] h-9 w-9 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center">
              {" "}
              <HiOutlineLink size={20} />{" "}
            </button>
            <button className="lg:px-4 px-2  lg:py-2 py-1 lg:text-sm text-[7px]  border border-gray-300 rounded-full  text-gray-600 cursor-pointer">
              Web Browsing
            </button>
            <button className="lg:px-4 px-2  lg:py-2 py-1 lg:text-sm text-[7px]  border border-gray-300 rounded-full  text-gray-600 cursor-pointer">
              Search Academic Papers
            </button>
            {isTyping && (
              <button className="lg:px-4 px-2  lg:py-2 py-1 lg:text-sm text-[7px]  text-[#FF505B] bg-[#FEF2F2] border  border-[#FF505B] rounded-full cursor-pointer">
                <span className=" font-medium "> Using 1 material(s) </span>{" "}
                <span className=" text-[#1F7DDA]"> select Materials </span>
              </button>
            )}
          </div>

          <div className="h-8 w-8 rounded-full  flex items-center justify-center ">
            {/* <button onClick={()=>setIsMute(!isMute)} className='cursor-pointer '> {isMute ? <BsMicMute size={20} /> : <BsMic size={20} /> } </button> */}
            <VoiceToText setText={setQuery} isChatBot={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
