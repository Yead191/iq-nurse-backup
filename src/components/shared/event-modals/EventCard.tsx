"use client";

import type React from "react";
import { Button, Grid } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

interface EventCardProps {
  event: any;
  onAdd: () => void;
  loading?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  event,
  onAdd,
  loading = false,
}) => {
  const { lg } = Grid.useBreakpoint();
  return (
    <div className="flex flex-col items-center space-y-4 shadow-[0_2px_4px_rgba(0,0,0,0.08)] py-[20px] rounded-xl">
      {/* Icon Container */}
      <div className="w-[140px] h-[140px] bg-[#F0F8FE] rounded-full flex items-center justify-center">
        {/* <div className="text-3xl">{icon}</div> */}
        <Image src={event?.img} alt={event?.title} width={80} height={80} />
      </div>

      {/* Action Button */}
      <Button
        style={{
          backgroundColor: "#003877",
          color: "white",
        }}
        size={lg ? "large" : "middle"}
        icon={lg? <PlusOutlined /> :null}
        onClick={onAdd}
        loading={loading}
      >
        {event?.title}
      </Button>
    </div>
  );
};

export default EventCard;
