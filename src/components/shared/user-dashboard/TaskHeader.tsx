import { Button } from "antd";
import React from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

interface TaskHeaderProps {
  img?: string;
  icon?: React.ElementType;
  iconColor?: string;
  title: string;
  handleEvent?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function TaskHeader({
  img,
  icon: Icon,
  iconColor,
  title,
  handleEvent,
  isOpen,
  onToggle,
}: TaskHeaderProps) {
  return (
    <div onClick={onToggle} className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        {Icon ? (
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center ${iconColor}`}
          >
            <Icon className="w-4 h-4 text-white" />
          </div>
        ) : (
          <img src={img} alt={title} className="w-5 h-5" />
        )}
        <span className="text-sm font-medium text-[#333333]">{title}</span>
      </div>
      <Button
        size="small"
        type="text"
        shape="circle"
        icon={isOpen ? <MinusOutlined /> : <PlusOutlined />}
        className="hover:bg-neutral-100"
        style={{
          backgroundColor: "#2C5F8D",
          color: "white",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
