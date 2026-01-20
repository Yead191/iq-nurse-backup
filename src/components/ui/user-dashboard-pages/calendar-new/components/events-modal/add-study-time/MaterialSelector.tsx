import { useState } from "react";
import { Tabs, Card, Button, Input, Select, Checkbox, Badge } from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  FileTextOutlined,
  BookOutlined,
  SnippetsOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { StudyMaterial } from "../../ClassCalendar";
import { studyMaterialBank } from "@/data/calendar/studyMaterialBank";
import { Library } from "lucide-react";

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

interface MaterialSelectorProps {
  studyMaterials: StudyMaterial[];
  setStudyMaterials: (materials: StudyMaterial[]) => void;
  filterNursingMaterials?: boolean;
}

export function MaterialSelector({
  studyMaterials,
  setStudyMaterials,
  filterNursingMaterials = false,
}: MaterialSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<
    "all" | "quiz" | "flashcard" | "notes"
  >("all");
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

  let filteredMaterials = studyMaterialBank
    .filter((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((m) => filterType === "all" || m.type === filterType);

  if (filterNursingMaterials) {
    filteredMaterials = filteredMaterials.filter(
      (m) =>
        m.id.startsWith("nursing-assess-") ||
        m.id.startsWith("skills-") ||
        m.id.includes("nursing"),
    );
  }

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
    <div className="space-y-4">
      <Tabs defaultActiveKey="from-bank" type="card">
        <TabPane
          tab={
            <>
              <Library className="mr-2" />
              From Bank
            </>
          }
          key="from-bank"
        >
          <div className="space-y-4">
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
                Available Materials ({filteredMaterials.length})
              </div>
              <div className="max-h-80 overflow-y-auto border rounded p-3 bg-gray-50 space-y-2">
                {filteredMaterials.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Library className="text-5xl mb-2 opacity-30" />
                    <p>No materials found</p>
                  </div>
                ) : (
                  filteredMaterials.map((material) => {
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
              <PlusOutlined className="mr-2" />
              Create New
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
                placeholder="e.g., Chapter 5 Review Notes"
              />
            </div>

            <div>
              <div className="mb-1 font-medium">Description (optional)</div>
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
        <div className="pt-4 border-t space-y-2">
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
    </div>
  );
}
