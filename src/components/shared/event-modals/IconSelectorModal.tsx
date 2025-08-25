"use client";

import type React from "react";
import { useState } from "react";
import { Modal, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import * as Icons from "@ant-design/icons";

interface IconSelectorModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (icon: string) => void;
}

// Collect Ant Design icons
const iconList = Object.keys(Icons)
  .filter(
    (key) =>
      key.endsWith("Outlined") ||
      key.endsWith("Filled") ||
      key.endsWith("TwoTone")
  )
  .slice(0, 200); // limit for performance

const IconSelectorModal: React.FC<IconSelectorModalProps> = ({
  open,
  onClose,
  onSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const filteredIcons = iconList.filter((iconName) =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const handleUpdate = () => {
    if (selectedIcon) {
      onSelect(selectedIcon);
    }
  };

  const handleCancel = () => {
    setSelectedIcon("");
    setSearchTerm("");
    onClose();
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (!IconComponent) return null;

    return (
      <div
        key={iconName}
        onClick={() => handleIconClick(iconName)}
        className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition m-[2px] ${
          selectedIcon === iconName
            ? "border-2 border-[#1B4D72] bg-[#f0f8ff]"
            : "border border-gray-300 bg-white"
        }`}
      >
        <IconComponent className="text-[20px] text-gray-600" />
      </div>
    );
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      title={"Icon Selector"}
      footer={null}
      centered
    >
      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-gray-500 mb-4">Select an icon</p>

        {/* Search Input */}
        <div className="flex gap-2 mb-5">
          <Input
            placeholder="Search Icon..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-md py-2 px-3 flex-1"
          />
          <button className="!bg-[#003877] !border-[#003877] !text-white rounded-md px-5 py-2">
            Search
          </button>
        </div>
      </div>

      {/* Icons Grid */}
      <div className="max-h-[300px] overflow-y-auto border border-gray-300 rounded-md p-3 mb-5">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(44px,1fr))] gap-1">
          {filteredIcons.map((iconName) => renderIcon(iconName))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-2">
        <Button
          onClick={handleCancel}
          className="rounded-md px-5 py-2 border border-gray-300"
        >
          Cancel
        </Button>
        <Button
          onClick={handleUpdate}
          disabled={!selectedIcon}
          className="!bg-[#28C76F] !border-green-500 rounded-md px-5 py-2 !text-white"
        >
          Update
        </Button>
      </div>
    </Modal>
  );
};

export default IconSelectorModal;
