"use client";
import VoiceToText from "@/components/shared/VoiceToText";
import { Button, Image } from "antd";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { BsMic, BsMicMute } from "react-icons/bs";
import { HiOutlineLink } from "react-icons/hi";
import { IoIosCamera, IoIosLink, IoIosSend } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import Conversations from "./chatDetails/Conversations";

const SearchInput = ({
  setIsType,
}: {
  setIsType?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [query, setQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMute, setIsMute] = useState(true);
  const [data,setData]=useState(false)
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsTyping(e.target.value.length > 0);
    
  };

  const onFInish = ()=>{
    setData(true)
   setIsType && setIsType(true)
  }

  return (
    <div className="container mx-auto">
      <div className="border border-[#E2E8F0] overflow-hidden rounded-xl flex flex-col gap-4">
        <div className="w-full px-3 bg-primary flex items-center gap-2 py-6 text-xl text-white ">
          <LuMessagesSquare />
          <span>Chat with Nurse Nia</span>
        </div>
        
        {
          data ?<div className="px-5">
             <Conversations  />
          </div>:<WelcomeBot/>
        }

        {/* Middle Input Field */}
        <div className="flex-1 p-5">
          <div className=" flex items-center gap-3.5 justify-between md:px-3.5">
            <input
              type="text"
              placeholder={isTyping ? "" : "Ask your AI tutor anything"}
              value={query}
              onChange={handleInputChange}
              className="w-full  focus:outline-none focus:ring-0  border border-gray-400 rounded-full p placeholder-[#000000] placeholder:font-semibold text-sm py-3 px-4"
            />
            <div className="flex items-center lg:gap-9 md:gap-4 gap-1">
              <input type="file" name="file" id="file-upload" hidden />
              <label htmlFor="file-upload" className="cursor-pointer">
                <IoIosLink size={20} color="#003877" />
              </label>

              <input type="file" name="image" id="image-upload" hidden />

              <label htmlFor="image-upload" className="cursor-pointer">
                <IoIosCamera size={24} color="#003877" />
              </label>

              <VoiceToText setText={setQuery} isChatBot={true} />
              <button
                className=" h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer "
                onClick={onFInish}
              >
                {" "}
                <IoIosSend size={24} color="#003877" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WelcomeBot = () => {
  return (
    <div className="flex  lg:px-12 md:px-6 px-3 py-3.5 gap-3.5">
      <Image 
        src="/assets/user-dashboard-images/nurse-q/chatAi.svg"
        alt="chatbo"
        width={30}
        height={30}
        className="lg:size-32 md:size-24 flex-1 size-20"
      />
      <p className="text-gray-600 lg:text-base md:text-sm text-xs">
        Hello! i’m here to help with your nursing studies.You can ask me about
        medications,calculations,procedures,or upload documents for me to create
        study materials.What would you like to work on today?
      </p>
    </div>
  );
};

export default SearchInput;
