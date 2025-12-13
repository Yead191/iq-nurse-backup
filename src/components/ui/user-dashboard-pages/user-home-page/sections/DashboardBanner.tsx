"use client";
import VoiceToText from "@/components/shared/VoiceToText";
import { Input } from "antd";
import { Search } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [text, setText] = useState<string>("");

  return (
    <section className=" flex flex-col gap-2 md:gap-6 md:justify-center bg-linear-to-b from-transparent to-[#D9ECFF] px-4 lg:px-5 relative min-h-[300px] md:min-h-[400px] rounded-b-lg overflow-hidden">
      <div className="flex flex-col justify-start md:justify-center items-start z-10">
        <div className="flex items-end gap-2 mb-2">
          <Image
            src={"/assets/icons/user-home/welcome-icon.png"}
            alt="welcome icon"
            width={100}
            height={100}
            className="w-[71px] h-[71px] object-fit "
          />

          <h4 className="text-2xl mb-1 font-bold text-[#666f78] ">
            Hello, John!
          </h4>
        </div>
        <h1 className="text-xl lg:text-5xl font-bold text-[#003877]/60 md:text-[#003877]/50 max-w-[800px] tracking-[0.2rem] md:tracking-[0.1em] leading-[130%] md:leading-[100%]">
          Your One Platform with Infinite Possibilities
        </h1>
        {/* Search overlay */}

        <form
          className="w-full"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit as needed
          }}
        >
          <Input
            placeholder="Search..."
            prefix={<Search />}
            suffix={<VoiceToText setText={setText} />}
            allowClear
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="md:!hidden !border-0 !w-full !h-[44px] mt-6 !bg-[#F6F7F8]"
          />
        </form>
      </div>
      <Image
        src={"/assets/images/dashboard/home/banner.png"}
        height={1000}
        width={1000}
        alt="banner"
        className="h-[300px] md:h-[400px] w-fit object-fit absolute top-0 -right-12 md:right-0 z-0 opacity-70 md:opacity-100 "
      />
    </section>
  );
}
