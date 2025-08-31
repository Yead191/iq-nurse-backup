"use client";

import type React from "react";
import { Button, Grid } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

interface MobileEventCardProps {
  event: any;
  onAdd: () => void;
  loading?: boolean;
}

const MobileEventCard: React.FC<MobileEventCardProps> = ({
  event,
  onAdd,
  loading = false,
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 ">
      {/* Icon Container */}
      <div className=" p-12  bg-[#F0F8FE] rounded-full flex items-center justify-center">
        {/* <div className="text-3xl">{icon}</div> */}
        <Image
          src={event?.img}
          alt={event?.title}
          width={200}
          height={200}
          className="w-[100wh] h-[100%] object-contain"
        />
      </div>

      {/* Action Button */}
      <Button
        style={{
          backgroundColor: "#003877",
          color: "white",
          marginTop: 20,
        }}
        size="large"
        icon={<PlusOutlined />}
        onClick={onAdd}
        loading={loading}
      >
        {event?.title}
      </Button>
    </div>
  );
};

export default MobileEventCard;
