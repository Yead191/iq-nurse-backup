import { useState } from "react";
import { Modal, Button, Input, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { ReminderType, StudyMaterial } from "../../ClassCalendar";
import { MaterialSelector } from "./MaterialSelector";

const { TextArea } = Input;
const { Title } = Typography;

export interface StudyTime {
  id: string;
  title: string;
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;
  location?: string;
  goals?: string;
  studyMaterials: StudyMaterial[];
  reminder: ReminderType;
  customReminderDays?: number;
}

interface AddStudyTimeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddStudyTime: (studyTime: StudyTime) => void;
  selectedDate: Date;
}

export function AddStudyTimeDialog({
  open,
  onOpenChange,
  onAddStudyTime,
  selectedDate,
}: AddStudyTimeDialogProps) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [startTime, setStartTime] = useState("14:00");
  const [endTime, setEndTime] = useState("16:00");
  const [location, setLocation] = useState("");
  const [goals, setGoals] = useState("");
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterial[]>([]);

  // Reminder is defined in interface but not used in UI → kept with default "none"
  const [reminder] = useState<ReminderType>("none");

  const handleSubmit = () => {
    if (!title.trim() || !subject.trim()) return;

    const newStudyTime: StudyTime = {
      id: Date.now().toString(),
      title,
      subject,
      date: selectedDate,
      startTime,
      endTime,
      location: location || undefined,
      goals: goals || undefined,
      studyMaterials,
      reminder,
      customReminderDays: undefined,
    };

    onAddStudyTime(newStudyTime);

    // Reset form
    setTitle("");
    setSubject("");
    setStartTime("14:00");
    setEndTime("16:00");
    setLocation("");
    setGoals("");
    setStudyMaterials([]);

    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <ClockCircleOutlined className="text-teal-600" />
          Schedule Study Time
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={700}
      centered
      styles={{ body: { maxHeight: "85vh", overflowY: "auto" } }}
    >
      <div className="space-y-6">
        <div className="space-y-5 px-1">
          <div>
            <div className="mb-1 font-medium">Study Session Title *</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Pharmacology Review"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Subject *</div>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g., Pharmacology"
            />
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
              placeholder="e.g., Library, Home"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Study Goals (optional)</div>
            <TextArea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="What do you want to accomplish in this study session?"
              rows={3}
            />
          </div>

          {/* Reusing the same MaterialSelector component */}
          <MaterialSelector
            studyMaterials={studyMaterials}
            setStudyMaterials={setStudyMaterials}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t mt-6">
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            type="primary"
            className="bg-teal-600 hover:bg-teal-700"
            onClick={handleSubmit}
          >
            Schedule Study Time
          </Button>
        </div>
      </div>
    </Modal>
  );
}
