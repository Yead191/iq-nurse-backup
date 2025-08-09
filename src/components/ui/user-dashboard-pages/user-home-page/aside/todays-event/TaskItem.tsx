import { Checkbox } from "antd";

type TaskItemProps = {
  label: string;
  checked: boolean;
  muted?: boolean;
  onToggle: () => void;
};

export default function TaskItem({
  label,
  checked,
  muted,
  onToggle,
}: TaskItemProps) {
  return (
    <Checkbox
      checked={checked}
      onChange={onToggle}
      className={`border-b-2 border-[#F6F7F8] ${checked ? "line-through text-neutral-400 " : ""} ${
        muted ? "text-neutral-500" : ""
      }`}
    >
      {label}
    </Checkbox>
  );
}
