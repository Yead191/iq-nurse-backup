// src/components/practice/CategoryCard.tsx
import {
  Card,
  Collapse,
  Button,
  Tag,
  Progress,
  Space,
  Typography,
  Row,
  Col,
  ConfigProvider,
} from "antd";
import { RightOutlined } from "@ant-design/icons";
import type { Category, Subtopic } from "@/data/types";

const { Title, Text } = Typography;
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
        : "#722ed1"; // fallback

  return (
    <div className="flex items-center gap-4 w-full border border-gray-100 rounded-lg p-4 ">
      <div className="w-full">
        <div className="flex items-start gap-2">
          <div
            style={{
              padding: 12,
              borderRadius: 8,
              background: colorBg,
              color: colorText,
            }}
          >
            <Icon style={{ fontSize: 24 }} />
          </div>
          <div style={{ flex: 1 }}>
            <div className="flex items-center justify-between">
              <Title level={5} style={{ margin: 0, marginBottom: 4 }}>
                {category.name}
              </Title>
              <Button type="primary" onClick={() => onPracticeAll(category)}>
                Practice All
              </Button>
            </div>
            <Space size="small">
              <Text type="secondary">{category.totalQuestions} questions</Text>
              <Text type="secondary">•</Text>
              <Text type="secondary">
                {category.completed} completed ({completionPercentage}%)
              </Text>
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
            <Row gutter={[12, 12]}>
              {category.subtopics.map((subtopic) => {
                const percent = Math.round(
                  (subtopic.completed / subtopic.questionCount) * 100,
                );

                return (
                  <Col xs={24} md={12} key={subtopic.id}>
                    <Card
                      hoverable
                      size="small"
                      onClick={() => onSubtopicSelect(category, subtopic)}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <Text strong style={{ fontSize: 14 }}>
                            {subtopic.name}
                          </Text>
                          <div style={{ marginTop: 6 }}>
                            <Space size="small">
                              <Text type="secondary" style={{ fontSize: 12 }}>
                                {subtopic.questionCount} questions
                              </Text>
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
                  </Col>
                );
              })}
            </Row>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
