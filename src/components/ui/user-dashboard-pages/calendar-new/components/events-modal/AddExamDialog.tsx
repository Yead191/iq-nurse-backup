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
} from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  FileTextOutlined,
  BookOutlined,
  SnippetsOutlined,
  BellOutlined,
  SearchOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { ReminderType, ScheduledExam, StudyMaterial } from "../ClassCalendar";
import { studyMaterialBank } from "@/data/calendar/studyMaterialBank";
import { Library } from "lucide-react";

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

interface AddExamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddExam: (newExam: ScheduledExam) => void;
  selectedDate: Date;
}

const colorOptions = [
  { label: "Red", value: "bg-red-500" },
  { label: "Orange", value: "bg-orange-500" },
  { label: "Purple", value: "bg-purple-500" },
  { label: "Pink", value: "bg-pink-500" },
  { label: "Indigo", value: "bg-indigo-500" },
  { label: "Blue", value: "bg-blue-500" },
  { label: "Green", value: "bg-green-500" },
  { label: "Teal", value: "bg-teal-500" },
];

export function AddExamDialog({
  open,
  onOpenChange,
  onAddExam,
  selectedDate,
}: AddExamDialogProps) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("11:00");
  const [location, setLocation] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("bg-red-500");
  const [reminder, setReminder] = useState<ReminderType>("1week");
  const [customReminderDays, setCustomReminderDays] = useState<number>(7);
  const [studyMaterials, setStudyMaterials] = useState<StudyMaterial[]>([]);

  // Bank selection
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<
    "all" | "quiz" | "flashcard" | "notes"
  >("all");

  // New material form
  const [materialType, setMaterialType] = useState<
    "quiz" | "flashcard" | "notes"
  >("quiz");
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
    setStudyMaterials([...studyMaterials, newMaterial]);
    setMaterialTitle("");
    setMaterialDescription("");
  };

  const handleRemoveMaterial = (id: string) => {
    setStudyMaterials(studyMaterials.filter((m) => m.id !== id));
  };

  const handleToggleBankMaterial = (material: StudyMaterial) => {
    if (studyMaterials.some((m) => m.id === material.id)) {
      handleRemoveMaterial(material.id);
    } else {
      setStudyMaterials([...studyMaterials, material]);
    }
  };

  const filteredBankMaterials = studyMaterialBank
    .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((m) => filterType === "all" || m.type === filterType);

  const handleSubmit = () => {
    if (!title.trim() || !subject.trim()) return;

    const newExam: ScheduledExam = {
      id: Date.now().toString(),
      title,
      subject,
      date: selectedDate,
      startTime,
      endTime,
      location: location || undefined,
      weight: weight || undefined,
      color,
      reminder,
      customReminderDays:
        reminder === "custom" ? customReminderDays : undefined,
      studyMaterials,
    };

    onAddExam(newExam);

    // Reset form
    setTitle("");
    setSubject("");
    setStartTime("09:00");
    setEndTime("11:00");
    setLocation("");
    setWeight("");
    setColor("bg-red-500");
    setReminder("1week");
    setCustomReminderDays(7);
    setStudyMaterials([]);
    setMaterialTitle("");
    setMaterialDescription("");
    setSearchQuery("");
    setFilterType("all");
    setMaterialType("quiz");

    onOpenChange(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "quiz":
        return <FileTextOutlined className="text-purple-600 text-xl" />;
      case "flashcard":
        return <BookOutlined className="text-green-600 text-xl" />;
      default:
        return <SnippetsOutlined className="text-yellow-600 text-xl" />;
    }
  };

  return (
    <Modal
      title={
        <div className="flex items-center gap-2 text-lg">
          <ExclamationCircleOutlined className="text-red-600" />
          Add New Exam
        </div>
      }
      open={open}
      onCancel={() => onOpenChange(false)}
      footer={null}
      width={800}
      centered
      bodyStyle={{ maxHeight: "85vh", overflowY: "auto" }}
    >
      <div className="space-y-6">
        <Tabs defaultActiveKey="exam-info" type="card">
          <TabPane tab="Exam Information" key="exam-info">
            <div className="space-y-5 px-1">
              <div>
                <div className="mb-1 font-medium">Exam Title *</div>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Midterm Exam - Calculus"
                />
              </div>

              <div>
                <div className="mb-1 font-medium">Subject *</div>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Mathematics"
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
                <div className="mb-1 font-medium">Location</div>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Main Hall, Building C"
                />
              </div>

              <div>
                <div className="mb-1 font-medium">Exam Weight (optional)</div>
                <Input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 30% of final grade"
                />
              </div>

              <div>
                <div className="mb-1 font-medium">Color Label</div>
                <Select
                  value={color}
                  onChange={setColor}
                  style={{ width: "100%" }}
                >
                  {colorOptions.map((opt) => (
                    <Option key={opt.value} value={opt.value}>
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${opt.value}`} />
                        {opt.label}
                      </div>
                    </Option>
                  ))}
                </Select>
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
                  <div className="mb-1 font-medium">Days Before Exam</div>
                  <Input
                    type="number"
                    min={1}
                    max={30}
                    value={customReminderDays}
                    onChange={(e) =>
                      setCustomReminderDays(Number(e.target.value))
                    }
                  />
                </div>
              )}
            </div>
          </TabPane>

          <TabPane tab="Prep Materials" key="materials">
            <Tabs defaultActiveKey="from-bank" type="card" size="small">
              <TabPane
                tab={
                  <span className="flex gap-1">
                    <Library /> From Bank
                  </span>
                }
                key="from-bank"
              >
                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-900">
                    <strong>Tip:</strong> Select study materials from your
                    existing library to help prepare for this exam.
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="mb-1 font-medium">Search Materials</div>
                      <Input
                        prefix={<SearchOutlined />}
                        placeholder="Search by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        allowClear
                      />
                    </div>

                    <div>
                      <div className="mb-1 font-medium">Filter by Type</div>
                      <Select
                        value={filterType}
                        onChange={(v) => setFilterType(v as any)}
                        style={{ width: "100%" }}
                      >
                        <Option value="all">All Types</Option>
                        <Option value="quiz">Quizzes</Option>
                        <Option value="flashcard">Flashcards</Option>
                        <Option value="notes">Notes</Option>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 font-medium">
                      Available Materials ({filteredBankMaterials.length})
                    </div>
                    <div className="max-h-80 overflow-y-auto border rounded p-3 bg-gray-50 flex flex-col gap-2 ">
                      {filteredBankMaterials.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <Library className="text-4xl mb-2 opacity-30" />
                          <p>No materials found</p>
                        </div>
                      ) : (
                        filteredBankMaterials.map((material) => {
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
                        })
                      )}
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
                key="create-new"
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
                      placeholder="e.g., Practice Problems Set 1"
                    />
                  </div>

                  <div>
                    <div className="mb-1 font-medium">
                      Description (optional)
                    </div>
                    <TextArea
                      value={materialDescription}
                      onChange={(e) => setMaterialDescription(e.target.value)}
                      placeholder="Add details about this study material"
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
              <div className="mt-6 pt-4 border-t space-y-2">
                <div className="font-medium">
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
                          danger
                          onClick={() => handleRemoveMaterial(material.id)}
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
          <Button type="primary" danger onClick={handleSubmit}>
            Schedule Exam
          </Button>
        </div>
      </div>
    </Modal>
  );
}
