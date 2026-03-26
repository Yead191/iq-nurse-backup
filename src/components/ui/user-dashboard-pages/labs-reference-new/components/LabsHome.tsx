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
              <CheckSquareOutlined style={{ fontSize: 20, color: "white" }} />
            </div>
            <div>
              <Title level={4} style={{ margin: 0 }}>
                Practice Test
              </Title>
              <p className="text-[10px] lg:text-[16px] text-gray-600">
                15 NGN-style questions to test your knowledge
              </p>
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

      <div className="grid grid-cols-1  gap-6">
        {/* Most Popular Topics */}
        <div>
          <Space>
            <TrendingUp style={{ color: "#2C5F8D" }} />
            Most Popular Topics
          </Space>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 mt-4 md:mt-0">
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
        <div>
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
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-5 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C5F8D]">
            41
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Study Topics
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-5 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C5F8D]">
            8
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Categories
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-5 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C5F8D]">
            15
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-500">
            Practice Questions
          </p>
        </div>
      </div>
      {/* Study Tips */}
      <Card
        title={<span style={{ color: "#733E0A" }}>💡 Study Tips</span>}
        style={{ marginTop: 24, background: "#F3F4F6", borderColor: "#F3F4F6" }}
      >
        <ul
          style={{ listStyle: "none", padding: 0, margin: 0, color: "#733E0A" }}
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
