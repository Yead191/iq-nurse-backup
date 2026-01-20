import { useState } from "react";
import { Modal, Button, Input, Select } from "antd";
import { ReminderType, StudyMaterial } from "../ClassCalendar";
import { Bell, Stethoscope } from "lucide-react";
import { MaterialSelector } from "./add-study-time/MaterialSelector";

const { TextArea } = Input;
const { Option } = Select;

export interface Clinical {
  id: string;
  title: string;
  facility: string;
  unit?: string;
  date: Date;
  startTime: string;
  endTime: string;
  instructor?: string;
  notes?: string;
  studyMaterials: StudyMaterial[];
  reminder: ReminderType;
  customReminderDays?: number;
}

interface AddClinicalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddClinical: (clinical: Clinical) => void;
  selectedDate: Date;
}

export function AddClinicalDialog({
  open,
  onOpenChange,
  onAddClinical,
  selectedDate,
}: AddClinicalDialogProps) {
  const [title, setTitle] = useState("");
  const [facility, setFacility] = useState("");
  const [unit, setUnit] = useState("");
  const [startTime, setStartTime] = useState("07:00");
  const [endTime, setEndTime] = useState("15:00");
  const [instructor, setInstructor] = useState("");
  const [notes, setNotes] = useState("");
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterial[]>([]);
  const [reminder, setReminder] = useState<ReminderType>("1week");
  const [customReminderDays, setCustomReminderDays] = useState<number>(7);

  const handleSubmit = () => {
    if (!title.trim() || !facility.trim()) return;

    const newClinical: Clinical = {
      id: Date.now().toString(),
      title,
      facility,
      unit: unit || undefined,
      date: selectedDate,
      startTime,
      endTime,
      instructor: instructor || undefined,
      notes: notes || undefined,
      studyMaterials,
      reminder,
      customReminderDays:
        reminder === "custom" ? customReminderDays : undefined,
    };

    onAddClinical(newClinical);

    // Reset form
    setTitle("");
    setFacility("");
    setUnit("");
    setStartTime("07:00");
    setEndTime("15:00");
    setInstructor("");
    setNotes("");
    setStudyMaterials([]);
    setReminder("1week");
    setCustomReminderDays(7);

    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <Stethoscope className="text-green-600" />
          Schedule Clinical Rotation
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={800}
      centered
      styles={{ body: { maxHeight: "85vh", overflowY: "auto" } }}
    >
      <div className="space-y-6">
        <div className="space-y-5 px-1">
          <div>
            <div className="mb-1 font-medium">Clinical Title *</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Med-Surg Clinical Rotation"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Healthcare Facility *</div>
            <Input
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              placeholder="e.g., City General Hospital"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Unit/Department (optional)</div>
            <Input
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="e.g., ICU, ER, Pediatrics"
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
            <div className="mb-1 font-medium">
              Clinical Instructor (optional)
            </div>
            <Input
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              placeholder="e.g., Nurse Johnson, RN"
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
                  <Bell /> None
                </div>
              </Option>
              <Option value="3days">
                <div className="flex items-center gap-2">
                  <Bell /> 3 Days Before
                </div>
              </Option>
              <Option value="1week">
                <div className="flex items-center gap-2">
                  <Bell /> 1 Week Before
                </div>
              </Option>
              <Option value="custom">
                <div className="flex items-center gap-2">
                  <Bell /> Custom
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
            <div className="mb-1 font-medium">Clinical Notes (optional)</div>
            <TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add preparation notes, patient assignments, or special instructions..."
              rows={3}
            />
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-900">
            <strong>Tip:</strong> Attach nursing assessment guides and practical
            skills notes from your library to prepare for this clinical
            rotation.
          </div>

          <MaterialSelector
            studyMaterials={studyMaterials}
            setStudyMaterials={setStudyMaterials}
            filterNursingMaterials={true}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t mt-6">
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button
            type="primary"
            className="bg-green-600 hover:bg-green-700"
            onClick={handleSubmit}
          >
            Schedule Clinical
          </Button>
        </div>
      </div>
    </Modal>
  );
}
