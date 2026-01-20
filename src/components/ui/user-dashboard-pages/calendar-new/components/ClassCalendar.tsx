import { useState } from "react";
import {
  Calendar as AntdCalendar,
  Button,
  Card,
  Badge,
  Tabs,
  Typography,
  Divider,
} from "antd";
import {
  PlusOutlined,
  BookOutlined,
  FileTextOutlined,
  BulbOutlined,
  TrophyOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import dayjs, { type Dayjs } from "dayjs";
import { format, isSameDay } from "date-fns";
import { ReminderPanel } from "./ReminderPanel";
import { AddClassDialog } from "./events-modal/AddClassDialog";
import { AddExamDialog } from "./events-modal/AddExamDialog";

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

export interface StudyMaterial {
  id: string;
  type: "quiz" | "flashcard" | "notes";
  title: string;
  description?: string;
}

export type ReminderType = "none" | "3days" | "1week" | "custom";

export interface ScheduledClass {
  id: string;
  title: string;
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;
  location?: string;
  color: string;
  studyMaterials: StudyMaterial[];
  reminder: ReminderType;
  customReminderDays?: number;
}

export interface ScheduledExam {
  id: string;
  title: string;
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;
  location?: string;
  color: string;
  studyMaterials: StudyMaterial[];
  weight?: string;
  reminder: ReminderType;
  customReminderDays?: number;
}

export function ClassCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<ScheduledClass[]>([
    {
      id: "1",
      title: "Introduction to Calculus",
      subject: "Mathematics",
      date: new Date(),
      startTime: "09:00",
      endTime: "10:30",
      location: "Room 301",
      color: "bg-blue-500",
      studyMaterials: [
        {
          id: "m1",
          type: "quiz",
          title: "Derivatives Practice",
          description: "15 questions on basic derivatives",
        },
        {
          id: "m2",
          type: "flashcard",
          title: "Calculus Formulas",
          description: "Key formulas to memorize",
        },
      ],
      reminder: "3days",
    },
  ]);
  const [exams, setExams] = useState<ScheduledExam[]>([]);
  const [isClassDialogOpen, setIsClassDialogOpen] = useState(false);
  const [isExamDialogOpen, setIsExamDialogOpen] = useState(false);

  const handleAddClass = (newClass: ScheduledClass) => {
    setClasses([...classes, newClass]);
  };

  const handleAddExam = (newExam: ScheduledExam) => {
    setExams([...exams, newExam]);
  };

  const handleDeleteClass = (id: string) => {
    setClasses(classes.filter((c) => c.id !== id));
  };

  const handleDeleteExam = (id: string) => {
    setExams(exams.filter((e) => e.id !== id));
  };

  const classesOnSelectedDate = classes.filter((cls) =>
    isSameDay(cls.date, selectedDate),
  );
  const examsOnSelectedDate = exams.filter((exam) =>
    isSameDay(exam.date, selectedDate),
  );
  const totalItemsOnSelectedDate =
    classesOnSelectedDate.length + examsOnSelectedDate.length;

  // For antd Calendar highlighting
  const dateCellRender = (value: Dayjs) => {
    const date = value.toDate();
    const hasCls = classes.some((c) => isSameDay(c.date, date));
    const hasEx = exams.some((e) => isSameDay(e.date, date));

    let className = "";
    if (hasCls) className += " font-bold text-blue-600";
    if (hasEx) className += " bg-red-100 text-red-700 font-bold";

    return <div className={className.trim()}>{value.date()}</div>;
  };

  return (
    <div className="flex gap-6 p-6 h-full">
      {/* Calendar Section */}
      <Card className="w-96 flex-shrink-0">
        <Card
          title="Calendar"
          extra={<Text type="secondary">View and manage your schedule</Text>}
        >
          <AntdCalendar
            fullscreen={false}
            value={dayjs(selectedDate)}
            onSelect={(date: Dayjs) => setSelectedDate(date.toDate())}
            cellRender={dateCellRender}
            className="rounded-md border"
          />

          <div className="space-y-2 mt-4">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsClassDialogOpen(true)}
              block
            >
              Add Class
            </Button>
            <Button
              type="primary"
              danger
              icon={<PlusOutlined />}
              onClick={() => setIsExamDialogOpen(true)}
              block
            >
              Add Exam
            </Button>
          </div>

          <Divider className="my-4" />

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600" />
              <span>Has classes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-600" />
              <span>Has exams</span>
            </div>
          </div>
        </Card>
      </Card>

      {/* Main Content */}
      <div className="flex-1 overflow-auto space-y-6">
        <ReminderPanel classes={classes} exams={exams} />

        <div>
          <div className="mb-4">
            <Title level={3}>
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </Title>
            <Text type="secondary">
              {totalItemsOnSelectedDate}{" "}
              {totalItemsOnSelectedDate === 1 ? "item" : "items"} scheduled
            </Text>
          </div>

          {totalItemsOnSelectedDate === 0 ? (
            <Card>
              <div className="py-12 text-center text-gray-500">
                <BookOutlined className="text-5xl mb-3 opacity-30" />
                <Paragraph>
                  No classes or exams scheduled for this day
                </Paragraph>
                <div className="flex gap-2 justify-center mt-4">
                  <Button
                    type="link"
                    onClick={() => setIsClassDialogOpen(true)}
                  >
                    Add a class
                  </Button>
                  <Text type="secondary">or</Text>
                  <Button type="link" onClick={() => setIsExamDialogOpen(true)}>
                    Add an exam
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Tabs defaultActiveKey="all">
              <Tabs.TabPane tab={`All (${totalItemsOnSelectedDate})`} key="all">
                <div className="space-y-4 mt-4">
                  {/* Exams first */}
                  {examsOnSelectedDate.map((exam) => (
                    <ExamCard
                      key={exam.id}
                      exam={exam}
                      onDelete={handleDeleteExam}
                    />
                  ))}
                  {/* Classes */}
                  {classesOnSelectedDate.map((cls) => (
                    <ClassCard
                      key={cls.id}
                      cls={cls}
                      onDelete={handleDeleteClass}
                    />
                  ))}
                </div>
              </Tabs.TabPane>

              <Tabs.TabPane
                tab={`Classes (${classesOnSelectedDate.length})`}
                key="classes"
              >
                {classesOnSelectedDate.length === 0 ? (
                  <Card>
                    <div className="py-8 text-center text-gray-500">
                      <Paragraph>No classes scheduled</Paragraph>
                    </div>
                  </Card>
                ) : (
                  <div className="space-y-4 mt-4">
                    {classesOnSelectedDate.map((cls) => (
                      <ClassCard
                        key={cls.id}
                        cls={cls}
                        onDelete={handleDeleteClass}
                      />
                    ))}
                  </div>
                )}
              </Tabs.TabPane>

              <Tabs.TabPane
                tab={`Exams (${examsOnSelectedDate.length})`}
                key="exams"
              >
                {examsOnSelectedDate.length === 0 ? (
                  <Card>
                    <div className="py-8 text-center text-gray-500">
                      <Paragraph>No exams scheduled</Paragraph>
                    </div>
                  </Card>
                ) : (
                  <div className="space-y-4 mt-4">
                    {examsOnSelectedDate.map((exam) => (
                      <ExamCard
                        key={exam.id}
                        exam={exam}
                        onDelete={handleDeleteExam}
                      />
                    ))}
                  </div>
                )}
              </Tabs.TabPane>
            </Tabs>
          )}
        </div>
      </div>

      <AddClassDialog
        open={isClassDialogOpen}
        onOpenChange={setIsClassDialogOpen}
        onAddClass={handleAddClass}
        selectedDate={selectedDate}
      />
      <AddExamDialog
        open={isExamDialogOpen}
        onOpenChange={setIsExamDialogOpen}
        onAddExam={handleAddExam}
        selectedDate={selectedDate}
      />
    </div>
  );
}

function ClassCard({
  cls,
  onDelete,
}: {
  cls: ScheduledClass;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-2 ${cls.color}`} />
      <Card.Meta
        title={
          <div className="flex items-center gap-2">
            <BookOutlined className="text-blue-600" />
            <span>{cls.title}</span>
          </div>
        }
        description={
          <div className="mt-1">
            {cls.subject} • {cls.startTime} - {cls.endTime}
            {cls.location && ` • ${cls.location}`}
          </div>
        }
        // extra={
        //   <Button type="text" danger onClick={() => onDelete(cls.id)}>
        //     Delete
        //   </Button>
        // }
      />
      {cls.studyMaterials.length > 0 && (
        <div className="px-6 pb-6">
          <StudyMaterialsSection materials={cls.studyMaterials} />
        </div>
      )}
    </Card>
  );
}

function ExamCard({
  exam,
  onDelete,
}: {
  exam: ScheduledExam;
  onDelete: (id: string) => void;
}) {
  return (
    <Card className="overflow-hidden border-2 border-red-200">
      <div className={`h-2 ${exam.color}`} />
      <Card.Meta
        title={
          <div className="flex items-center gap-2">
            <TrophyOutlined className="text-red-600" />
            <span>{exam.title}</span>
            <Badge color="red">Exam</Badge>
          </div>
        }
        description={
          <div className="mt-1">
            {exam.subject} • {exam.startTime} - {exam.endTime}
            {exam.location && ` • ${exam.location}`}
            {exam.weight && (
              <>
                <br />
                <Text strong className="text-red-700">
                  Weight: {exam.weight}
                </Text>
              </>
            )}
          </div>
        }
        // extra={
        //   <Button type="text" danger onClick={() => onDelete(exam.id)}>
        //     Delete
        //   </Button>
        // }
      />
      {exam.studyMaterials.length > 0 && (
        <div className="px-6 pb-6">
          <StudyMaterialsSection materials={exam.studyMaterials} />
        </div>
      )}
    </Card>
  );
}

function StudyMaterialsSection({ materials }: { materials: StudyMaterial[] }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-medium">
        <BulbOutlined className="text-base" />
        Study Materials ({materials.length})
      </div>
      <div className="grid gap-2">
        {materials.map((material) => (
          <div
            key={material.id}
            className="flex items-start gap-3 p-3 rounded-lg border bg-gray-50/50"
          >
            {material.type === "quiz" ? (
              <FileTextOutlined className="text-purple-600 text-xl mt-0.5" />
            ) : material.type === "flashcard" ? (
              <BookOutlined className="text-green-600 text-xl mt-0.5" />
            ) : (
              <SnippetsOutlined className="text-yellow-600 text-xl mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{material.title}</span>
                <Badge>{material.type}</Badge>
              </div>
              {material.description && (
                <Paragraph className="text-xs text-gray-600 mt-1 !mb-0">
                  {material.description}
                </Paragraph>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
