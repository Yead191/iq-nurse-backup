"use client";
import { useEffect, useState } from "react";
import { Card, Button, Statistic, Typography, Empty, Tag, Space } from "antd";
import {
  ClockCircleOutlined,
  CheckSquareOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TopicItem, popularTopics } from "@/data/labs-ref/popularTopics";
import { labsAllTopics } from "@/data/labs-ref/labAllTopics";

const { Title, Text, Paragraph } = Typography;

export function LabsHome() {
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    const recent = localStorage.getItem("labsRecentlyViewedTopics");
    if (recent) {
      setRecentlyViewed(JSON.parse(recent));
    }
  }, []);

  const getTopicDetails = (topicId: string): TopicItem | null => {
    const allTopics = labsAllTopics;
    return allTopics.find((t) => t.id === topicId) || null;
  };

  const setActiveSection = (section: string) => {
    router.push(`/profile/labs-reference/${section}`);
  };
  return (
    <div>
      {/* Practice Test Card - Featured */}
      <Card
        style={{
          marginBottom: 24,
          borderColor: "#2C5F8D",
          background: "linear-gradient(to right, #f0f7ff, #ffffff)",
        }}
      >
        <Space
          align="center"
          className="flex flex-col md:flex-row gap-4 md:!items-center !items-start h-full justify-between w-full"
        >
          <Space align="center">
            <div
              style={{
                width: 48,
                height: 48,
                background: "#2C5F8D",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckSquareOutlined style={{ fontSize: 24, color: "white" }} />
            </div>
            <div>
              <Title level={4} style={{ margin: 0 }}>
                Practice Test
              </Title>
              <Text type="secondary">
                15 NGN-style questions to test your knowledge
              </Text>
            </div>
          </Space>

          <Link href={"/profile/labs-reference/practice-test"}>
            <Button
              type="primary"
              style={{ background: "#2C5F8D", borderColor: "#2C5F8D" }}
            >
              Start Test <RightOutlined />
            </Button>
          </Link>
        </Space>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Most Popular Topics */}
        <div className="lg:border lg:border-gray-200 lg:rounded-2xl lg:p-4">
          <Space>
            <TrendingUp style={{ color: "#2C5F8D" }} />
            Most Popular Topics
          </Space>
          <div className="grid grid-cols-2 gap-2 lg:gap-6 mt-4 md:mt-0">
            {popularTopics?.map((topic) => (
              <Card
                key={topic.id}
                hoverable
                onClick={() => setActiveSection(topic.id)}
                style={{ height: "100%", cursor: "pointer" }}
                styles={{
                  body: { padding: 16, textAlign: "center" },
                }}
              >
                <Space direction="vertical" size={12} align="center">
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      background:
                        "linear-gradient(to bottom right, #2C5F8D, #1e4563)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    }}
                  >
                    <topic.icon style={{ fontSize: 28, color: "white" }} />
                  </div>
                  <div>
                    <Text strong style={{ fontSize: 14, display: "block" }}>
                      {topic.title}
                    </Text>
                    <Tag color="default" style={{ marginTop: 4, fontSize: 12 }}>
                      {topic.category}
                    </Tag>
                  </div>
                </Space>
              </Card>
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="lg:border lg:border-gray-200 lg:rounded-2xl lg:p-4">
          <Space>
            <ClockCircleOutlined style={{ color: "#2C5F8D" }} />
            Recently Viewed
          </Space>
          {recentlyViewed.length === 0 ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <div>
                  <Text strong>No recently viewed topics yet</Text>
                  <br />
                  <Text type="secondary">Topics you view will appear here</Text>
                </div>
              }
              style={{ margin: "48px 0" }}
            />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {recentlyViewed.slice(0, 6).map((topicId) => {
                const topic = getTopicDetails(topicId);
                if (!topic) return null;

                return (
                  <Card
                    key={topicId}
                    hoverable
                    onClick={() => setActiveSection(topicId)}
                    style={{ cursor: "pointer" }}
                    bodyStyle={{ padding: 16, textAlign: "center" }}
                  >
                    <Space direction="vertical" size={12} align="center">
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          background:
                            "linear-gradient(to bottom right, #2C5F8D, #1e4563)",
                          borderRadius: 12,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        }}
                      >
                        <topic.icon style={{ fontSize: 28, color: "white" }} />
                      </div>
                      <div>
                        <Text strong style={{ fontSize: 14, display: "block" }}>
                          {topic.title}
                        </Text>
                        <Tag
                          color="default"
                          style={{ marginTop: 4, fontSize: 12 }}
                        >
                          {topic.category}
                        </Tag>
                      </div>
                    </Space>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginTop: 24,
        }}
      >
        <Card>
          <Statistic
            title="Study Topics"
            value={41}
            valueStyle={{ color: "#2C5F8D" }}
          />
        </Card>
        <Card>
          <Statistic
            title="Categories"
            value={8}
            valueStyle={{ color: "#2C5F8D" }}
          />
        </Card>
        <Card>
          <Statistic
            title="Practice Questions"
            value={15}
            valueStyle={{ color: "#2C5F8D" }}
          />
        </Card>
      </div>

      {/* Study Tips */}
      <Card
        title={<span style={{ color: "#854d0e" }}>💡 Study Tips</span>}
        style={{ marginTop: 24, background: "#fefce8", borderColor: "#fef08a" }}
      >
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, color: "#854d0e" }}
        >
          <li style={{ marginBottom: 8 }}>
            ✓ Focus on critical values and nursing implications for NCLEX
            success
          </li>
          <li style={{ marginBottom: 8 }}>
            ✓ Review normal ranges daily to build muscle memory
          </li>
          <li style={{ marginBottom: 8 }}>
            ✓ Practice correlating lab values with patient symptoms and
            conditions
          </li>
          <li>
            ✓ Use the practice test to identify areas that need more review
          </li>
        </ul>
      </Card>
    </div>
  );
}
