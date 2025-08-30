"use client";

import {
  Modal,
  Input,
  DatePicker,
  TimePicker,
  Select,
  Checkbox,
  Button,
  Form,
  Space,
} from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Dayjs } from "dayjs";
import { useState } from "react";
import IconSelectorModal from "./IconSelectorModal";

const { TextArea } = Input;
const { Option } = Select;

interface AddExamModalProps {
  open: boolean;
  onClose: () => void;
}

const colorOptions = [
  "#40E0D0", // cyan
  "#003366", // dark blue
  "#1E90FF", // blue
  "#20B2AA", // light sea green
  "#32CD32", // lime green
  "#FF6B6B", // coral
  "#FFA500", // orange
  "#DA70D6", // orchid
  "#48CAE4", // sky blue
];

interface FormValues {
  title: string;
  date: Dayjs | null;
  description: string;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  timeZone: string;
  subjectDeliveryType: string;
  instructorsName: string;
  grade: string;
  selectedColor: string;
  notifyBeforeMeeting: boolean;
  phoneNumbers: string[];
  addLocation: string;
  officeHours: string;
}

export default function AddExamModal({ open, onClose }: AddExamModalProps) {
  const [form] = Form.useForm();
  const [selectedColor, setSelectedColor] = useState<string>(colorOptions[0]);
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const [iconModalOpen, setIconModalOpen] = useState(false);
  const handleIconSelect = (icon: string) => {
    setSelectedIcon(icon);
    setIconModalOpen(false);
  };

  const handleSubmit = (values: FormValues) => {
    const formData = {
      ...values,
      color: selectedColor,
      icon: selectedIcon,
    };
    console.log("add exam Form Values:", formData);
    onClose();
    form.resetFields();
    setSelectedColor("");
    setSelectedIcon("");
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
      title={
        <span className="text-lg font-semibold text-gray-800">
          Add Tests/Quizz/Exams
        </span>
      }
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          timeZone: "America/New_York",
          selectedColor: colorOptions[0],
          repeatEveryWeek: false,
          notifyBeforeMeeting: false,
        }}
      >
        <div>
          {/* Add Icon button */}
          <div className="my-6">
            <button
              type="button"
              onClick={() => setIconModalOpen(true)}
              className="border border-[#003877] rounded-md px-3 py-1 text-sm hover:bg-gray-100 transition cursor-pointer"
            >
              {selectedIcon ? `Icon Selected: ${selectedIcon}` : "Add Icon +"}
            </button>
          </div>

          {/* Title and Description Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 lg:mb-4">
            <Form.Item
              name="title"
              label="Title"
              rules={[
                { required: true, message: "Please enter assignment title" },
              ]}
            >
              <Input
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="Enter assignment title"
              />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <TextArea
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="Write description..."
                rows={1}
              />
            </Form.Item>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 lg:mb-4">
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select due date" }]}
            >
              <DatePicker
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="mm/dd/yyyy"
                className="w-full"
                format="MM/DD/YYYY"
              />
            </Form.Item>

            <Form.Item
              name="startTime"
              label="Start Time"
              rules={[{ required: true, message: "Please select start time" }]}
            >
              <TimePicker
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="--:-- --"
                format="HH:mm"
                className="w-full"
              />
            </Form.Item>

            <Form.Item
              name="endTime"
              label="End Time"
              rules={[{ required: true, message: "Please select end time" }]}
            >
              <TimePicker
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="--:-- --"
                format="HH:mm"
                className="w-full"
              />
            </Form.Item>
          </div>

          {/* Time Zone */}
          <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item name="timeZone" label="Select a Time Zone">
              <Select
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
              >
                <Option value="America/New_York">America/New_York</Option>
                <Option value="America/Los_Angeles">America/Los_Angeles</Option>
                <Option value="Europe/London">Europe/London</Option>
                <Option value="Asia/Tokyo">Asia/Tokyo</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="subjectDeliveryType"
              label="Subject delivery type"
              rules={[
                {
                  required: true,
                  message: "Please select subject delivery type",
                },
              ]}
            >
              <Select
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="Select subject delivery type"
              >
                <Option value="online">Online</Option>
                <Option value="offline">Offline</Option>
                <Option value="hybrid">Hybrid</Option>
              </Select>
            </Form.Item>
            <Form.Item name="addLocation" label="Add Location">
              <Input
                style={{
                  height: 40,
                  backgroundColor: "#F6F7F8",
                  borderColor: "#C5D0D0",
                }}
                placeholder="Add location"
              />
            </Form.Item>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 justify-between items-start">
            <Form.Item name="repeatEveryWeek" valuePropName="checked" noStyle>
              <Checkbox className="text-sm text-gray-700">
                Repeat Every week
              </Checkbox>
            </Form.Item>

            {/* Color Picker */}
            <div className="">
              <label className="block mb-3 font-medium text-gray-800">
                Select a Color
              </label>
              <div className="flex flex-wrap gap-3">
                {colorOptions.map((color, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer border-2 transition ${
                      selectedColor === color
                        ? "border-[#1B4D72] border-[3px]"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#003877" }}
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
      <IconSelectorModal
        open={iconModalOpen}
        onClose={() => setIconModalOpen(false)}
        onSelect={handleIconSelect}
      />
    </Modal>
  );
}
