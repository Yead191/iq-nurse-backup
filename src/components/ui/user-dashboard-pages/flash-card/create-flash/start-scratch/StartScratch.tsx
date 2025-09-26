"use client";
import React, { useState } from "react";
import { Typography } from "antd";
import StartScratchCard from "./StartScratchCard";
import { startScratchData } from "@/data/flashCards";
import { MdOutlineAdd, MdOutlineArrowForward } from "react-icons/md";
import AddFlashModal from "./AddFlashModal";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const StartScratch = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className=" lg:p-8 p-1">
      <div className=" mx-auto ">
        {/* Header Section */}
        <div className="flex lg:flex-row flex-col justify-between items-center mb-8">
          <Title level={2} className="w-full">
            Flashcard23601
          </Title>
          <div className=" flex lg:flex-row flex-col items-center gap-2 w-full justify-end">
            <button className=" h-[45px] lg:w-[200px] w-full rounded-lg bg-[#003877] text-white cursor-pointer">
              <span> Study Now </span>
            </button>

            <button
              className="h-[45px] lg:w-[200px] w-full rounded-lg border border-[#003877] text-[#003877] flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <span>
                {" "}
                <MdOutlineAdd size={20} />{" "}
              </span>
              <span> Add Flash </span>
            </button>

            {/* sf */}
            <button
              className=" h-[45px] lg:w-[200px] w-full rounded-lg bg-[#003877] text-white flex items-center justify-center gap-1 cursor-pointer"
              onClick={() =>
                router.push(
                  "/profile/flash-cards/create-flash/start-scratch/flash-folder"
                )
              }
            >
              <span> Continue </span>{" "}
              <span>
                {" "}
                <MdOutlineArrowForward size={20} />{" "}
              </span>
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className=" flex flex-col gap-7">
          {startScratchData?.map((values, index) => (
            <div key={index}>
              <StartScratchCard values={values} />
            </div>
          ))}
        </div>
      </div>
      <AddFlashModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default StartScratch;
