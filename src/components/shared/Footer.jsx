"use client";
import React from "react";
import SectionHeading from "./home-shared/SectionHeading";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Button, Grid } from "antd";

export default function Footer() {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="bg-gradient-to-b from-[#F1F5F9] to-[#FFFFFF] py-12">
      <div className=" container p-4 mx-auto grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-10 justify-center items-center">
        <div className="max-w-[600px] text-center md:text-left">
          <SectionHeading
            title="Work from anywhere"
            subtitle="In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci."
          />

          {/* app store btns */}
          <div className="flex flex-row gap-2 md:gap-4 items-center justify-center md:justify-start my-8 ">
            {/* app store */}
            <Button
              size={lg ? "large" : "small"}
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                padding: lg ? "28px 24px" : "24px 14px",
              }}
            >
              <FaApple className="w-7 h-7 text-white" />

              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="!text-sm font-semibold -mt-1">App Store</div>
              </div>
            </Button>

            {/* Google Play Button */}
            <Button
              size={lg ? "large" : "small"}
              style={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
                padding: lg ? "28px 24px" : "24px 14px",
              }}
            >
              <FaGooglePlay className="w-6 h-5 text-white" />

              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="!text-sm font-semibold -mt-1">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"/assets/home-images/footer-img.png"}
            alt={"footer image"}
            width={600}
            height={622}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
