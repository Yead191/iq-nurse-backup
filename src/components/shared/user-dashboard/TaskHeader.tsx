import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

interface TaskHeaderProps {
  img: string;
  title: string;
}

export default function TaskHeader({ img, title }: TaskHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <img src={img} alt={title} className="w-5 h-5" />
        <span className="text-sm font-medium text-[#333333]">{title}</span>
      </div>
      <Button
        size="small"
        type="text"
        shape="circle"
        icon={<PlusOutlined />}
        className="hover:bg-neutral-100"
        style={{
          backgroundColor: "#003877",
          color: "white",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
