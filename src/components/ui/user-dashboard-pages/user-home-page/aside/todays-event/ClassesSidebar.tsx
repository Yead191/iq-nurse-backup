import React from "react";
import { Card, Avatar, Typography, Tag, Button, Dropdown } from "antd";
import {
  BookOutlined,
  PlusOutlined,
  MoreOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Reusable ClassCard component
interface ClassCardProps {
  title: string;
  description: string;
  timeRange: string;
  status: string;
  avatarColor: string;
  avatarIcon: React.ReactNode;
  backgroundColor: string;
}

const ClassCard = ({
  title,
  description,
  timeRange,
  status,
  avatarColor,
  avatarIcon,
  backgroundColor,
}: ClassCardProps) => {
  const dropdownItems = [
    { key: "1", label: "Edit Class" },
    { key: "2", label: "View Details" },
    { key: "3", label: "Delete", danger: true },
  ];

  return (
    <Card
      className="class-card"
      style={{
        backgroundColor: backgroundColor,
        border: "none",
        borderRadius: 12,
        marginBottom: 12,
        borderLeft: `4px solid ${avatarColor}`,
        padding:0
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            flex: 1,
          }}
        >
          <Avatar
            size={40}
            style={{
              backgroundColor: avatarColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {avatarIcon}
          </Avatar>

          <div style={{ flex: 1 }}>
            <Title
              level={5}
              style={{ margin: 0, marginBottom: 4, fontWeight: 600 }}
            >
              {title}
            </Title>
            <Text type="secondary" style={{ fontSize: 13, lineHeight: 1.4 }}>
              {description}
            </Text>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <ClockCircleOutlined
                  style={{ fontSize: 12, color: "#8c8c8c" }}
                />
                <Text style={{ fontSize: 12, color: "#8c8c8c" }}>
                  {timeRange}
                </Text>
              </div>

              <Tag
                icon={<GlobalOutlined />}
                color="default"
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: 6,
                  border: "none",
                  backgroundColor: "rgba(0,0,0,0.06)",
                }}
              >
                {status}
              </Tag>
            </div>
          </div>
        </div>

        <Dropdown
          menu={{ items: dropdownItems }}
          placement="bottomRight"
          trigger={["click"]}
        >
          <Button
            type="text"
            icon={<MoreOutlined />}
            size="small"
            style={{
              color: "#8c8c8c",
              border: "none",
              boxShadow: "none",
            }}
          />
        </Dropdown>
      </div>
    </Card>
  );
};

// Main Classes Sidebar Component
const ClassesSidebar = () => {
  const classesData = [
    {
      id: 1,
      title: "Pediatrics",
      description:
        "Collaborative session with the international team in Tokyo.",
      timeRange: "3:00 PM - 4:30 PM",
      status: "Online",
      avatarColor: "#ff7875",
      avatarIcon: "👶",
      backgroundColor: "#E68C9133",
    },
    {
      id: 2,
      title: "Anatomy & Physiology",
      description:
        "A discussion on business development strategies with the team.",
      timeRange: "3:00 PM - 4:30 PM",
      status: "Online",
      avatarColor: "#40a9ff",
      avatarIcon: "🧠",
      backgroundColor: "#e6f4ff",
    },
  ];

  return (
    <div className="mt-2">
      {/* Dynamic Class Cards */}
      {classesData.map((classItem) => (
        <ClassCard
          key={classItem.id}
          title={classItem.title}
          description={classItem.description}
          timeRange={classItem.timeRange}
          status={classItem.status}
          avatarColor={classItem.avatarColor}
          avatarIcon={classItem.avatarIcon}
          backgroundColor={classItem.backgroundColor}
        />
      ))}
    </div>
  );
};

export default ClassesSidebar;
