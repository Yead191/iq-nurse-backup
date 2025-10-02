"use client";

import type React from "react";
import { useState } from "react";
import {
  Modal,
  Input,
  Button,
  DatePicker,
  TimePicker,
  Checkbox,
  Row,
  Col,
  Form,
} from "antd";
import IconSelectorModal from "./IconSelectorModal";

const { TextArea } = Input;

interface AddTaskModalProps {
  open: boolean;
  onClose: () => void;
}

const colorOptions = [
  "#87CEEB", // light blue
  "#1B4D72", // dark blue
  "#4A90E2", // blue
  "#20B2AA", // teal
  "#90EE90", // green
  "#FF6B6B", // coral
  "#FFA500", // orange
  "#DDA0DD", // purple
  "#00CED1", // cyan
];

const AddTaskModal: React.FC<AddTaskModalProps> = ({ open, onClose }) => {
  const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0]);
  const [iconModalOpen, setIconModalOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<string>("");
  const [form] = Form.useForm();
  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setIconModalOpen(false);
  };

  const handleSubmit = (values: any) => {
    const formData = {
      ...values,
      color: selectedColor,
      icon: selectedIcon,
    };
    // console.log("Add task form Data:", formData);
    form.resetFields();
    setSelectedIcon("");
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={onClose}
        footer={null}
        title="Add New Task"
        centered
        className="task-modal"
      width={800}

      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          {/* Add Icon Button */}
          <div className="mt-6 mb-5">
            <button
              type="button"
              onClick={() => setIconModalOpen(true)}
              className="border border-[#003877] rounded-md px-3 py-1  text-sm hover:bg-gray-100 transition cursor-pointer"
            >
              {selectedIcon ? `Icon Selected: ${selectedIcon}` : "Add Icon +"}
            </button>
          </div>

          {/* Title */}
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter title" }]}
          >
            <Input
              placeholder="Enter assignment title"
              className="rounded-md py-2 px-3 text-sm"
            />
          </Form.Item>

          {/* Description */}
          <Form.Item label="Description" name="description">
            <TextArea
              placeholder="Write description..."
              rows={4}
              className="rounded-md py-2 px-3 text-sm resize-none"
            />
          </Form.Item>

          {/* Date and Time */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Date"
                name="date"
                rules={[{ required: true, message: "Please select date" }]}
              >
                <DatePicker
                  placeholder="mm/dd/yyyy"
                  format="MM/DD/YYYY"
                  className="w-full rounded-md py-2 px-3"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Time"
                name="time"
                rules={[{ required: true, message: "Please select time" }]}
              >
                <TimePicker
                  placeholder="--:-- --"
                  format="h:mm A"
                  use12Hours
                  className="w-full rounded-md py-2 px-3"
                />
              </Form.Item>
            </Col>
          </Row>

          {/* Repeat Weekly */}
          <Form.Item name="repeatWeekly" valuePropName="checked">
            <Checkbox className="text-sm">Repeat Every week</Checkbox>
          </Form.Item>

          {/* Color Picker */}
          <div className="mt-2 mb-6">
            <label className="block mb-3 font-medium text-gray-800">
              Select a Color
            </label>
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-2 transition ${
                    selectedColor === color
                      ? "border-[#1B4D72] border-[3px]"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <Button
              onClick={onClose}
              className="rounded-md px-6 py-2 font-medium border-gray-300"
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              className="!bg-[#003877] !border-[#003877] !text-white rounded-md px-6 py-2 font-medium"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>

      <IconSelectorModal
        open={iconModalOpen}
        onClose={() => setIconModalOpen(false)}
        onSelect={handleIconSelect}
      />
    </>
  );
};

export default AddTaskModal;
