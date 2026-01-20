import { useState } from "react";
import { Modal, Button, Input, Select, Typography } from "antd";
import { CheckSquareOutlined, CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

export interface Task {
  id: string;
  title: string;
  dueDate?: Date;
  priority: "low" | "medium" | "high";
  status: "pending" | "completed";
  category?: string;
  notes?: string;
  reminder?: string;
}

interface AddTaskDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddTask: (task: Task) => void;
  selectedDate?: Date;
}

export function AddTaskDialog({
  open,
  onOpenChange,
  onAddTask,
  selectedDate,
}: AddTaskDialogProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      dueDate: selectedDate,
      priority,
      status: "pending",
      category: category || undefined,
      notes: notes || undefined,
    };

    onAddTask(newTask);

    // Reset form
    setTitle("");
    setPriority("medium");
    setCategory("");
    setNotes("");

    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <CheckSquareOutlined className="text-green-600" />
          Add New Task
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={500}
      centered
    >
      <div className="space-y-6">
        <div className="space-y-5 px-1">
          <div>
            <div className="mb-1 font-medium">Task Title *</div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Review care plan notes"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Priority</div>
            <Select
              value={priority}
              onChange={(v) => setPriority(v as "low" | "medium" | "high")}
              style={{ width: "100%" }}
            >
              <Option value="low">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  Low Priority
                </div>
              </Option>
              <Option value="medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  Medium Priority
                </div>
              </Option>
              <Option value="high">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  High Priority
                </div>
              </Option>
            </Select>
          </div>

          <div>
            <div className="mb-1 font-medium">Category (optional)</div>
            <Input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Clinical prep, Study, Personal"
            />
          </div>

          <div>
            <div className="mb-1 font-medium">Notes (optional)</div>
            <TextArea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional details..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t mt-6">
          <Button onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit}>
            Add Task
          </Button>
        </div>
      </div>
    </Modal>
  );
}
