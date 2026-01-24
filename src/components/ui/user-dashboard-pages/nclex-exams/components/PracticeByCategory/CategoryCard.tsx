import { Card, Collapse, Button, Tag, Progress, Space } from "antd";
import { RightOutlined } from "@ant-design/icons";
import type { Category, Subtopic } from "@/data/types";

const { Panel } = Collapse;

interface CategoryCardProps {
  category: Category;
  onPracticeAll: (category: Category) => void;
  onSubtopicSelect: (category: Category, subtopic: Subtopic) => void;
}

export function CategoryCard({
  category,
  onPracticeAll,
  onSubtopicSelect,
}: CategoryCardProps) {
  const Icon = category.icon;
  const completionPercentage = Math.round(
    (category.completed / category.totalQuestions) * 100,
  );

  // Approximate Tailwind color → Ant Design style
  const colorBg = category.color.includes("blue")
    ? "#e6f7ff"
    : category.color.includes("red")
      ? "#fff1f0"
      : category.color.includes("green")
        ? "#f6ffed"
        : category.color.includes("pink")
          ? "#fff0f6"
          : category.color.includes("purple")
            ? "#f9f0ff"
            : category.color.includes("cyan")
              ? "#e6fffb"
              : category.color.includes("amber")
                ? "#fffbe6"
                : "#f0f5ff";

  const colorText = category.color.includes("blue")
    ? "#1890ff"
    : category.color.includes("red")
      ? "#f5222d"
      : category.color.includes("green")
        ? "#52c41a"
        : "#722ed1";

  return (
    <div className="flex items-center gap-4 w-full border border-gray-100 rounded-lg p-4 ">
      <div className="w-full">
        <div className="flex items-start gap-2">
          <div
            className="p-3 rounded-lg"
            style={{
              background: colorBg,
              color: colorText,
            }}
          >
            <Icon style={{ fontSize: 24 }} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{category.name}</h3>
              <Button type="primary" onClick={() => onPracticeAll(category)}>
                Practice All
              </Button>
            </div>
            <Space size="small">
              <p className="text-sm text-gray-500">
                {category.totalQuestions} questions
              </p>
              <p className="text-sm text-gray-500">•</p>
              <p className="text-sm text-gray-500">
                {category.completed} completed ({completionPercentage}%)
              </p>
            </Space>

            <Progress
              percent={completionPercentage}
              size="small"
              showInfo={false}
              style={{ marginTop: 12 }}
            />
          </div>
        </div>
        <Collapse ghost>
          <Panel
            header={`View Subtopics (${category.subtopics.length})`}
            key="subtopics"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {category?.subtopics?.map((subtopic) => {
                const percent = Math.round(
                  (subtopic.completed / subtopic.questionCount) * 100,
                );

                return (
                  <div key={subtopic.id}>
                    <Card
                      hoverable
                      size="small"
                      onClick={() => onSubtopicSelect(category, subtopic)}
                    >
                      <div className="flex items-start gap-2 justify-between">
                        <div style={{ flex: 1 }}>
                          <p className="font-medium text-sm">{subtopic.name}</p>
                          <div style={{ marginTop: 6 }}>
                            <Space size="small">
                              <p className="text-xs text-gray-500">
                                {subtopic.questionCount} questions
                              </p>
                              <Tag
                                color={
                                  percent >= 80
                                    ? "success"
                                    : percent >= 40
                                      ? "processing"
                                      : "default"
                                }
                              >
                                {percent}% done
                              </Tag>
                            </Space>
                          </div>
                        </div>
                        <RightOutlined
                          style={{ color: "#bfbfbf", marginTop: 4 }}
                        />
                      </div>

                      <Progress
                        percent={percent}
                        size="small"
                        showInfo={false}
                        style={{ marginTop: 12 }}
                      />
                    </Card>
                  </div>
                );
              })}
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
