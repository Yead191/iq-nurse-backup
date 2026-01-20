import { useState } from "react";
import { Modal, Button, Input, Select, Typography } from "antd";
import {
  ClockCircleOutlined,
  BellOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { ReminderType } from "../ClassCalendar";

const { TextArea } = Input;
const { Option } = Select;

export interface PersonalTime {
  id: string;
  title: string;
  category: "self-care" | "exercise" | "family" | "social" | "other";
  date: Date;
  startTime?: string;
  endTime?: string;
  notes?: string;
  reminder: ReminderType;
  customReminderDays?: number;
}

interface AddPersonalTimeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddPersonalTime: (personalTime: PersonalTime) => void;
  selectedDate: Date;
}

export function AddPersonalTimeDialog({
  open,
  onOpenChange,
  onAddPersonalTime,
  selectedDate,
}: AddPersonalTimeDialogProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<
    "self-care" | "exercise" | "family" | "social" | "other"
  >("self-care");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [notes, setNotes] = useState("");
  const [reminder, setReminder] = useState<ReminderType>("none");
  const [customReminderDays, setCustomReminderDays] = useState<number>(1);

  const handleSubmit = () => {
    if (!title.trim()) return;

    const newPersonalTime: PersonalTime = {
      id: Date.now().toString(),
      title,
      category,
      date: selectedDate,
      startTime: startTime || undefined,
      endTime: endTime || undefined,
      notes: notes || undefined,
      reminder,
      customReminderDays:
        reminder === "custom" ? customReminderDays : undefined,
    };

    onAddPersonalTime(newPersonalTime);

    // Reset form
    setTitle("");
    setCategory("self-care");
    setStartTime("");
    setEndTime("");
    setNotes("");
    setReminder("none");
    setCustomReminderDays(1);

    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <HeartOutlined className="text-pink-600" />
          Schedule Personal Time
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={700}
      centered
      bodyStyle={{ maxHeight: "85vh", overflowY: "auto" }}
    >
      <div className="space-y-6">
        <div className="space-y-5 px-1">
          <div>
            <div className="mb-1 font-medium">Activity *</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Yoga Class, Family Dinner"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Category</div>
            <Select
              value={category}
              onChange={(v) => setCategory(v as typeof category)}
              style={{ width: "100%" }}
            >
              <Option value="self-care">Self-Care</Option>
              <Option value="exercise">Exercise</Option>
              <Option value="family">Family Time</Option>
              <Option value="social">Social</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-1 font-medium">Start Time (optional)</div>
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-1 font-medium">End Time (optional)</div>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1 font-medium">Reminder</div>
            <Select
              value={reminder}
              onChange={(v) => setReminder(v as ReminderType)}
              style={{ width: "100%" }}
            >
              <Option value="none">
                <div className="flex items-center gap-2">
                  <BellOutlined /> None
                </div>
              </Option>
              <Option value="3days">
                <div className="flex items-center gap-2">
                  <BellOutlined /> 3 Days Before
                </div>
              </Option>
              <Option value="1week">
                <div className="flex items-center gap-2">
                  <BellOutlined /> 1 Week Before
                </div>
              </Option>
              <Option value="custom">
                <div className="flex items-center gap-2">
                  <BellOutlined /> Custom
                </div>
              </Option>
            </Select>
          </div>

          {reminder === "custom" && (
            <div>
              <div className="mb-1 font-medium">Days Before</div>
              <Input
                type="number"
                min={1}
                max={30}
                value={customReminderDays}
                onChange={(e) => setCustomReminderDays(Number(e.target.value))}
              />
            </div>
          )}

          <div>
            <div className="mb-1 font-medium">Notes (optional)</div>
            <TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any details..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t mt-6">
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            type="primary"
            className="bg-pink-600 hover:bg-pink-700"
            onClick={handleSubmit}
          >
            Schedule
          </Button>
        </div>
      </div>
    </Modal>
  );
}
