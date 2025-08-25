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

interface AddClassesModalProps {
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

export default function AddClassesModal({
  open,
  onClose,
}: AddClassesModalProps) {
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
    console.log("add classes Form Values:", formData);
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
      title={
        <span className="text-lg font-semibold text-gray-800">Add Classes</span>
      }
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          timeZone: "America/New_York",
          selectedColor: colorOptions[0],
          notifyBeforeMeeting: false,
          phoneNumbers: [""],
        }}
      >
        <div>
          {/* Add Icon button */}
          <div className="my-6">
            <button
              type="button"
              onClick={() => setIconModalOpen(true)}
              className="border border-[#003877] rounded-md px-3 py-1  text-sm hover:bg-gray-100 transition cursor-pointer"
            >
              {selectedIcon ? `Icon Selected: ${selectedIcon}` : "Add Icon +"}
            </button>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Column */}
            <div className="space-y-4">
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please enter a title" }]}
              >
                <Input placeholder="Enter assignment title" />
              </Form.Item>

              <Form.Item
                name="startTime"
                label="Start Time"
                rules={[
                  { required: true, message: "Please select start time" },
                ]}
              >
                <TimePicker
                  placeholder="--:--"
                  format="HH:mm"
                  className="w-full"
                />
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
                <Select placeholder="Select subject delivery type">
                  <Option value="online">Online</Option>
                  <Option value="offline">Offline</Option>
                  <Option value="hybrid">Hybrid</Option>
                </Select>
              </Form.Item>

              {/* Multiple Phone Numbers */}
              <Form.List name="phoneNumbers">
                {(fields, { add, remove }) => (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        className="flex mb-2 w-full"
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={name}
                          className="flex-1 mb-0"
                        >
                          <Input placeholder="Add phone number" />
                        </Form.Item>
                        {fields.length > 1 && (
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        )}
                      </Space>
                    ))}
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Phone
                    </Button>
                  </div>
                )}
              </Form.List>
            </div>

            {/* Middle Column */}
            <div className="space-y-4">
              <Form.Item
                name="date"
                label="Date"
                rules={[{ required: true, message: "Please select date" }]}
              >
                <DatePicker
                  placeholder="mm/dd/yyyy"
                  className="w-full"
                  format="MM/DD/YYYY"
                />
              </Form.Item>

              <Form.Item
                name="endTime"
                label="End Time"
                rules={[{ required: true, message: "Please select end time" }]}
              >
                <TimePicker
                  placeholder="--:--"
                  format="HH:mm"
                  className="w-full"
                />
              </Form.Item>

              <Form.Item name="addLocation" label="Add Location">
                <Input placeholder="Add location" />
              </Form.Item>

              <Form.Item name="officeHours" label="Office Hours">
                <Input placeholder="Add office hours" />
              </Form.Item>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <Form.Item name="description" label="Description">
                <TextArea placeholder="Write description..." rows={3} />
              </Form.Item>

              <Form.Item name="timeZone" label="Select a Time Zone">
                <Select>
                  <Option value="America/New_York">America/New_York</Option>
                  <Option value="America/Los_Angeles">
                    America/Los_Angeles
                  </Option>
                  <Option value="Europe/London">Europe/London</Option>
                  <Option value="Asia/Tokyo">Asia/Tokyo</Option>
                </Select>
              </Form.Item>

              <Form.Item name="instructorsName" label="Instructors Name">
                <Input placeholder="Instructors Name" />
              </Form.Item>

              <Form.Item name="grade" label="Grade">
                <Input placeholder="Add Grade" />
              </Form.Item>
            </div>
          </div>

          {/* Notify Checkbox */}
          <div className="mb-6">
            <Form.Item
              name="notifyBeforeMeeting"
              valuePropName="checked"
              noStyle
            >
              <Checkbox className="text-sm text-gray-700">
                Notify me 30 min before meeting
              </Checkbox>
            </Form.Item>
          </div>

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
