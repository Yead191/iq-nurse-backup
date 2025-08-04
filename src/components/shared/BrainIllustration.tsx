import { Typography } from "antd";
import Image from "next/image";
import React from "react";

const { Title, Text } = Typography;

export default function BrainIllustration({
  title,
  text,
}: {
  title: string;
  text: any;
}) {
  return (
    <div className="relative flex ">
      {/* Speech Bubble */}
      <div
        className="absolute top-10 md:-top-28 md:right-20 bg-[#324C93] text-white p-6 rounded-xl shadow-lg  max-w-md"
        style={{ zIndex: 10 }}
      >
        <Title
          level={4}
          style={{
            color: "white",
            margin: 0,
            fontSize: "18px",
            lineHeight: 1.4,
          }}
        >
          {title}
        </Title>
        <Text style={{ color: "white", fontSize: "14px", lineHeight: "0.8" }}>
          {text}
        </Text>

        {/* Speech bubble arrow */}
        <div
          className=" left-[100px] md:left-[40px]"
          style={{
            position: "absolute",
            bottom: "-10px",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid #1e40af",
          }}
        />
      </div>

      {/* Brain Illustration */}
      <div className=" mt-40 md:mt-0 w-full ">
        <Image
          src="/assets/auth-images/brain-illustration.png"
          alt="Brain character with glasses and lightbulb"
          width={350}
          height={350}
          className=" w-[200px] md:w-auto h-auto object-fit"
        />
      </div>
    </div>
  );
}
