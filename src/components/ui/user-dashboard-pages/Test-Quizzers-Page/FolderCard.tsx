"use client";

import { Dropdown, MenuProps } from "antd";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
interface FolderCardProps {
  folder: {
    id: string;
    name: string;
    color: string;
    quizCount: number;
    createdAt: string;
  };
  onClick?: () => void;
  onRename: () => void;
  onDelete: () => void;
  label?: string;
}

export default function FolderCard({
  folder,
  onClick,
  onRename,
  onDelete,
  label,
}: FolderCardProps) {
  const menuItems: MenuProps["items"] = [
    {
      key: "rename",
      label: "Rename",
      icon: <EditOutlined />,
      onClick: (e) => {
        e.domEvent.stopPropagation();
        onRename();
      },
    },
    {
      key: "delete",
      label: "Delete Study Set",
      icon: <DeleteOutlined />,
      onClick: (e) => {
        e.domEvent.stopPropagation();
        onDelete();
      },
      danger: true,
    },
  ];
  return (
    <div
      className=" w-full cursor-pointer transition-transform duration-300 hover:-translate-y-1 px-4 lg:px-12 h-[150px] lg:h-[270px] flex flex-col justify-center  overflow-visible "
      onClick={onClick}
      style={{
        backgroundImage: "url('/assets/icons/folder-icon.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-start gap-3 my-4 lg:my-0 ">
        <div
          className="w-5 h-5 rounded-sm flex-shrink-0 flex justify-center items-center"
          style={{ backgroundColor: folder.color }}
        >
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
        <div className="-mt-1 .5">
          <h3 className="font-medium text-gray-900 text-lg">{folder.name}</h3>
          {/* Quiz count */}
          <p className="text-sm text-gray-500 ">
            {folder.quizCount} {""} {label}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center lg:mt-8">
        <p className="text-xs text-gray-400">{folder.createdAt}</p>

        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          placement="bottomRight"
        >
          <button
            className="p-1 rounded hover:bg-gray-100 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreHorizontal className="text-gray-400 hover:text-gray-600" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
}
