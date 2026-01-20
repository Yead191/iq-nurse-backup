import { useState } from "react";
import {
  Modal,
  Button,
  Input,
  Select,
  Tabs,
  Card,
  Checkbox,
  Badge,
  Form,
  InputNumber,
} from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  FileTextOutlined,
  BookOutlined,
  BellOutlined,
  SearchOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

import { Library, StickyNote } from "lucide-react";
import { ReminderType, StudyMaterial } from "../ClassCalendar";
import { studyMaterialBank } from "@/data/calendar/studyMaterialBank";

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;

export interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: Date;
  dueTime?: string;
  priority: "low" | "medium" | "high";
  status: "not-started" | "in-progress" | "completed";
  description?: string;
  studyMaterials: StudyMaterial[];
  reminder: ReminderType;
  customReminderDays?: number;
}

interface AddAssignmentModalProps {
  open: boolean;
  onAddAssignment: (assignment: Assignment) => void;
  selectedDate: Date;
  onOpenChange: (open: boolean) => void;
}

export function AddAssignmentModal({
  onOpenChange,
  open,

  onAddAssignment,
  selectedDate,
}: AddAssignmentModalProps) {
  const [form] = Form.useForm();
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterial[]>([]);

  // Bank selection states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<
    "all" | "quiz" | "flashcard" | "notes"
  >("all");

  // New custom material form states
  const [materialType, setMaterialType] = useState<
    "quiz" | "flashcard" | "notes"
  >("notes");
  const [materialTitle, setMaterialTitle] = useState("");
  const [materialDescription, setMaterialDescription] = useState("");

  const handleAddMaterial = () => {
    if (!materialTitle.trim()) return;

    const newMaterial: StudyMaterial = {
      id: Date.now().toString(),
      type: materialType,
      title: materialTitle,
      description: materialDescription || undefined,
    };

    setStudyMaterials((prev) => [...prev, newMaterial]);
    setMaterialTitle("");
    setMaterialDescription("");
  };

  const handleRemoveMaterial = (id: string) => {
    setStudyMaterials((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddBankMaterial = (id: string) => {
    const material = studyMaterialBank?.find((m) => m.id === id);
    if (material && !studyMaterials.some((m) => m.id === id)) {
      setStudyMaterials((prev) => [...prev, material]);
    }
  };

  const handleToggleBankMaterial = (material: StudyMaterial) => {
    if (studyMaterials.some((m) => m.id === material.id)) {
      handleRemoveMaterial(material.id);
    } else {
      handleAddBankMaterial(material.id);
    }
  };

  const filteredBankMaterials = studyMaterialBank
    .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((m) => filterType === "all" || m.type === filterType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "quiz":
        return <FileTextOutlined className="text-purple-600 text-lg" />;
      case "flashcard":
        return <BookOutlined className="text-green-600 text-lg" />;
      default:
        return <StickyNote className="text-yellow-600 text-lg" />;
    }
  };

  const handleFinish = (values: any) => {
    const newAssignment: Assignment = {
      id: Date.now().toString(),
      title: values.title.trim(),
      course: values.course.trim(),
      dueDate: selectedDate,
      dueTime: values.dueTime || undefined,
      priority: values.priority,
      status: "not-started",
      description: values.description?.trim() || undefined,
      studyMaterials,
      reminder: values.reminder,
      customReminderDays:
        values.reminder === "custom" ? values.customReminderDays : undefined,
    };

    onAddAssignment(newAssignment);

    // Reset everything
    form.resetFields();
    setStudyMaterials([]);
    setSearchQuery("");
    setMaterialTitle("");
    setMaterialDescription("");
    setMaterialType("notes");
    setFilterType("all");
    onOpenChange(false);
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <OrderedListOutlined className="text-purple-600" />
          Add Assignment
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={800}
      centered
      bodyStyle={{ maxHeight: "85vh", overflowY: "auto" }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          priority: "medium",
          reminder: "3days",
          customReminderDays: 3,
        }}
        onFinish={handleFinish}
      >
        <div className="space-y-6">
          <Tabs defaultActiveKey="1" type="card">
            <TabPane tab="Assignment Info" key="1">
              <div className="space-y-5 px-1">
                <Form.Item
                  name="title"
                  label="Assignment Title"
                  rules={[
                    {
                      required: true,
                      message: "Please enter assignment title",
                    },
                  ]}
                >
                  <Input placeholder="e.g., Care Plan for Cardiac Patient" />
                </Form.Item>

                <Form.Item
                  name="course"
                  label="Course / Subject"
                  rules={[
                    {
                      required: true,
                      message: "Please enter course/subject name",
                    },
                  ]}
                >
                  <Input placeholder="e.g., Med-Surg Nursing" />
                </Form.Item>

                <Form.Item name="dueTime" label="Due Time (optional)">
                  <Input type="time" />
                </Form.Item>

                <Form.Item name="priority" label="Priority">
                  <Select>
                    <Option value="low">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />{" "}
                        Low
                      </div>
                    </Option>
                    <Option value="medium">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />{" "}
                        Medium
                      </div>
                    </Option>
                    <Option value="high">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" /> High
                      </div>
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item name="reminder" label="Reminder">
                  <Select>
                    <Option value="none">None</Option>
                    <Option value="3days">3 Days Before</Option>
                    <Option value="1week">1 Week Before</Option>
                    <Option value="custom">Custom</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  noStyle
                  shouldUpdate={(prev, curr) => prev.reminder !== curr.reminder}
                >
                  {({ getFieldValue }) =>
                    getFieldValue("reminder") === "custom" && (
                      <Form.Item
                        name="customReminderDays"
                        label="Days Before Due"
                        rules={[
                          {
                            required: true,
                            message: "Please enter number of days",
                          },
                        ]}
                      >
                        <InputNumber
                          min={1}
                          max={30}
                          style={{ width: "100%" }}
                        />
                      </Form.Item>
                    )
                  }
                </Form.Item>

                <Form.Item name="description" label="Description (optional)">
                  <TextArea
                    placeholder="Add assignment details, requirements, or notes..."
                    rows={4}
                  />
                </Form.Item>
              </div>
            </TabPane>

            <TabPane tab="Study Materials" key="2">
              <Tabs defaultActiveKey="bank" type="card" size="small">
                <TabPane
                  tab={
                    <span className="flex gap-1">
                      <Library /> From Bank
                    </span>
                  }
                  key="bank"
                >
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        prefix={<SearchOutlined />}
                        placeholder="Search by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        allowClear
                      />
                      <Select
                        value={filterType}
                        onChange={(v) => setFilterType(v as any)}
                        style={{ minWidth: 160 }}
                      >
                        <Option value="all">All Types</Option>
                        <Option value="quiz">Quizzes</Option>
                        <Option value="flashcard">Flashcards</Option>
                        <Option value="notes">Notes</Option>
                      </Select>
                    </div>

                    <div>
                      <div className="mb-2 font-medium">
                        Available Materials ({filteredBankMaterials.length})
                      </div>
                      <div className="max-h-80 overflow-y-auto border rounded p-3 bg-gray-50 flex flex-col gap-2 ">
                        {filteredBankMaterials?.map((material) => {
                          const isSelected = studyMaterials.some(
                            (m) => m.id === material.id,
                          );
                          return (
                            <Card
                              key={material.id}
                              size="small"
                              hoverable
                              className={
                                isSelected ? "bg-green-50 border-green-300" : ""
                              }
                              onClick={() => handleToggleBankMaterial(material)}
                            >
                              <div className="flex items-start gap-3">
                                <Checkbox checked={isSelected} />
                                {getTypeIcon(material.type)}
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium">
                                      {material.title}
                                    </span>
                                    <Badge>{material.type}</Badge>
                                  </div>
                                  {material.description && (
                                    <div className="text-xs text-gray-600 mt-1">
                                      {material.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabPane>

                <TabPane
                  tab={
                    <>
                      <PlusOutlined /> Create New
                    </>
                  }
                  key="new"
                >
                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 font-medium">Material Type</div>
                      <Select
                        value={materialType}
                        onChange={(v) => setMaterialType(v as any)}
                        style={{ width: "100%" }}
                      >
                        <Option value="quiz">Practice Quiz</Option>
                        <Option value="flashcard">Flashcard</Option>
                        <Option value="notes">Study Notes</Option>
                      </Select>
                    </div>

                    <div>
                      <div className="mb-1 font-medium">Material Title</div>
                      <Input
                        value={materialTitle}
                        onChange={(e) => setMaterialTitle(e.target.value)}
                        placeholder="e.g., Cardiac Care Study Guide"
                      />
                    </div>

                    <div>
                      <div className="mb-1 font-medium">
                        Description (optional)
                      </div>
                      <TextArea
                        value={materialDescription}
                        onChange={(e) => setMaterialDescription(e.target.value)}
                        placeholder="Add details..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="default"
                      icon={<PlusOutlined />}
                      onClick={handleAddMaterial}
                      block
                      disabled={!materialTitle.trim()}
                    >
                      Add Custom Material
                    </Button>
                  </div>
                </TabPane>
              </Tabs>

              {studyMaterials.length > 0 && (
                <div className="mt-6 pt-4 border-t">
                  <div className="font-medium mb-2">
                    Selected Materials ({studyMaterials.length})
                  </div>
                  <div className="max-h-48 overflow-y-auto space-y-2">
                    {studyMaterials.map((material) => (
                      <Card
                        key={material.id}
                        size="small"
                        className="bg-green-50 border-green-200"
                      >
                        <div className="flex items-start gap-3">
                          {getTypeIcon(material.type)}
                          <div className="flex-1">
                            <div className="font-medium">{material.title}</div>
                            {material.description && (
                              <div className="text-xs text-gray-600 mt-1">
                                {material.description}
                              </div>
                            )}
                          </div>
                          <Button
                            type="text"
                            icon={<CloseOutlined />}
                            onClick={() => handleRemoveMaterial(material.id)}
                            danger
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabPane>
          </Tabs>

          <div className="flex justify-end gap-3 pt-4 border-t mt-6">
            <Button onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Add Assignment
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
}
