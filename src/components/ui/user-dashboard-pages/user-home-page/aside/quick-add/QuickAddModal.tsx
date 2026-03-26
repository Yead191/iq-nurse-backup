import { Modal, Card, Typography, Row, Col } from "antd";
import {
  BookOpen,
  Clock,
  Stethoscope,
  Users,
  FileText,
  ListTodo,
} from "lucide-react";

const { Text } = Typography;

interface QuickAddMenuProps {
  onSelectType: (type: string) => void;
}

function QuickAddMenu({ onSelectType }: QuickAddMenuProps) {
  const eventTypes = [
    {
      id: "task",
      label: "Tasks",
      icon: ListTodo,
      color: "bg-[#F0AF53]",
      desc: "Quick to-do item",
    },
    {
      id: "clinical-rotation",
      label: "Clinical Rotations",
      icon: Stethoscope,
      color: "bg-[#326FB1]",
      desc: "Clinical rotation",
    },
    {
      id: "class",
      label: "Class",
      icon: BookOpen,
      color: "bg-[#60B960]",
      desc: "Lecture or lab session",
    },
    {
      id: "exam",
      label: "Exam",
      icon: FileText,
      color: "bg-[#D95854]",
      desc: "Test or quiz",
    },
    {
      id: "meeting",
      label: "Meeting",
      icon: Users,
      color: "bg-[#9E2DB2]",
      desc: "Group or advisor meeting",
    },
    {
      id: "assignment",
      label: "Assignment",
      icon: FileText,
      color: "bg-[#FF9800]",
      desc: "Homework or project",
    },
    {
      id: "study-time",
      label: "Study Time",
      icon: BookOpen,
      color: "bg-[#3F51B5]",
      desc: "Scheduled study block",
    },
    {
      id: "me-time",
      label: "Personal Time",
      icon: Users,
      color: "bg-[#4CAF50]",
      desc: "Self-care & wellness",
    },
    {
      id: "countdown",
      label: "Countdown",
      icon: Clock,
      color: "bg-[#E91E63]",
      desc: "Track milestones",
    },
  ];

  return (
    <div className="py-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {eventTypes.map((type) => (
          <div key={type.id}>
            <Card
              hoverable
              className="text-center transition-all duration-200 group border border-gray-200 hover:border-gray-300 hover:shadow-md h-full"
              onClick={() => onSelectType(type.id)}
              styles={{ body: { padding: "20px 16px" } }}
            >
              <div className="flex flex-col items-center gap-3 h-full">
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
