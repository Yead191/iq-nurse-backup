import { useState } from "react";
import { Modal, Button, Input, Select, Typography } from "antd";
import { BellOutlined, TeamOutlined } from "@ant-design/icons";
import { ReminderType } from "../ClassCalendar";

const { TextArea } = Input;
const { Option } = Select;

export interface Meeting {
  id: string;
  title: string;
  type: "study-group" | "advisor" | "faculty" | "other";
  date: Date;
  startTime: string;
  endTime: string;
  location?: string;
  attendees?: string;
  notes?: string;
  reminder: ReminderType;
  customReminderDays?: number;
}

interface AddMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddMeeting: (meeting: Meeting) => void;
  selectedDate: Date;
}

export function AddMeetingDialog({
  open,
  onOpenChange,
  onAddMeeting,
  selectedDate,
}: AddMeetingDialogProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<
    "study-group" | "advisor" | "faculty" | "other"
  >("study-group");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("11:00");
  const [location, setLocation] = useState("");
  const [attendees, setAttendees] = useState("");
  const [notes, setNotes] = useState("");
  const [reminder, setReminder] = useState<ReminderType>("none");
  const [customReminderDays, setCustomReminderDays] = useState<number>(1);

  const handleSubmit = () => {
    if (!title.trim()) return;

    const newMeeting: Meeting = {
      id: Date.now().toString(),
      title,
      type,
      date: selectedDate,
      startTime,
      endTime,
      location: location || undefined,
      attendees: attendees || undefined,
      notes: notes || undefined,
      reminder,
      customReminderDays:
        reminder === "custom" ? customReminderDays : undefined,
    };

    onAddMeeting(newMeeting);

    // Reset form
    setTitle("");
    setType("study-group");
    setStartTime("10:00");
    setEndTime("11:00");
    setLocation("");
    setAttendees("");
    setNotes("");
    setReminder("none");
    setCustomReminderDays(1);

    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <TeamOutlined className="text-indigo-600" />
          Schedule Meeting
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
            <div className="mb-1 font-medium">Meeting Title *</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Study Group Session"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Meeting Type</div>
            <Select
              value={type}
              onChange={(v) => setType(v as typeof type)}
              style={{ width: "100%" }}
            >
              <Option value="study-group">Study Group</Option>
              <Option value="advisor">Academic Advisor</Option>
              <Option value="faculty">Faculty Meeting</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-1 font-medium">Start Time</div>
              <Input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-1 font-medium">End Time</div>
              <Input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="mb-1 font-medium">Location (optional)</div>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Library Room 205"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Attendees (optional)</div>
            <Input
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
              placeholder="e.g., Sarah, Mike, Dr. Johnson"
            />
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
              placeholder="Add agenda or meeting notes..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t mt-6">
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit}>
            Schedule Meeting
          </Button>
        </div>
      </div>
    </Modal>
  );
}
