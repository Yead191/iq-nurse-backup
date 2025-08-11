import { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TaskItem from "./TaskItem";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";

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
    <div className="bg-white rounded-xl ">
      {/* Header */}

      <TaskHeader img="/assets/icons/task-icon.svg" title="Tasks" />

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
