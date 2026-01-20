import { Modal, Card, Typography, Row, Col } from "antd";
import {
  BookOpen,
  GraduationCap,
  ClipboardList,
  Clock,
  Stethoscope,
  Users,
  Heart,
  CheckSquare,
  Calendar as CalendarIcon,
} from "lucide-react";

const { Text } = Typography;

interface QuickAddMenuProps {
  onSelectType: (type: string) => void;
}

function QuickAddMenu({ onSelectType }: QuickAddMenuProps) {
  const eventTypes = [
    {
      id: "class",
      label: "Class",
      icon: BookOpen,
      color: "bg-[#2C5F8D]",
      desc: "Lecture or lab session",
    },
    {
      id: "exam",
      label: "Exam",
      icon: GraduationCap,
      color: "bg-[#FE5E7E]",
      desc: "Test or quiz",
    },
    {
      id: "assignment",
      label: "Assignment",
      icon: ClipboardList,
      color: "bg-purple-500",
      desc: "Homework or project",
    },
    {
      id: "study-time",
      label: "Study Time",
      icon: Clock,
      color: "bg-teal-500",
      desc: "Scheduled study block",
    },
    {
      id: "clinical",
      label: "Clinical",
      icon: Stethoscope,
      color: "bg-emerald-600",
      desc: "Clinical rotation",
    },
    {
      id: "meeting",
      label: "Meeting",
      icon: Users,
      color: "bg-[#4A7DAF]",
      desc: "Group or advisor meeting",
    },
    {
      id: "personal",
      label: "Personal Time",
      icon: Heart,
      color: "bg-[#FF8CA5]",
      desc: "Self-care & wellness",
    },
    {
      id: "task",
      label: "Task",
      icon: CheckSquare,
      color: "bg-slate-600",
      desc: "Quick to-do item",
    },
    {
      id: "countdown",
      label: "Countdown",
      icon: CalendarIcon,
      color: "bg-amber-500",
      desc: "Track milestones",
    },
  ];

  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventTypes.map((type) => (
          <div key={type.id}>
            <Card
              hoverable
              className="text-center transition-all duration-200 group border border-gray-200 hover:border-gray-300 hover:shadow-md"
              onClick={() => onSelectType(type.id)}
              styles={{ body: { padding: "20px 16px" } }}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${type.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium text-base">{type.label}</div>
                  <Text type="secondary" className="text-xs block mt-1">
                    {type.desc}
                  </Text>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

interface QuickAddModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectType: (type: string) => void;
}

export function QuickAddModal({
  open,
  onOpenChange,
  onSelectType,
}: QuickAddModalProps) {
  return (
    <Modal
      title="What would you like to add?"
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={700}
      centered
    >
      <div className="pt-2 pb-6">
        <Text type="secondary" className="block mb-6 text-center">
          Choose the type of event or item to schedule
        </Text>

        <QuickAddMenu
          onSelectType={(type) => {
            onSelectType(type);
            // Optional: close modal immediately after selection
            // onOpenChange(false);
          }}
        />
      </div>
    </Modal>
  );
}
