import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TaskItem from "./TaskItem";

type Task = {
  id: number;
  label: string;
  checked: boolean;
  muted?: boolean;
};

export default function TasksSection() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, label: "Donate $500 to the charity", checked: true },
    { id: 2, label: "Do 500 pushups", checked: false },
    { id: 3, label: "Buy new headset", checked: true },
    { id: 4, label: "clean the room", checked: false, muted: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <div className="bg-white rounded-xl p-2">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/task-icon.svg"
            alt="Tasks"
            className="w-5 h-5"
          />
          <span className="text-sm font-semibold text-neutral-900">Tasks</span>
        </div>
        <Button
          size="small"
          type="text"
          shape="circle"
          icon={<PlusOutlined />}
          className="hover:bg-neutral-100"
          style={{
            backgroundColor: "#003877",
            color: "white",
            borderRadius: 8,
          }}
        />
      </div>

      {/* Task List */}
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            label={task.label}
            checked={task.checked}
            muted={task.muted}
            onToggle={() => toggleTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
