import { Avatar, Typography, Tag, Button, Dropdown } from "antd";
import {
  MoreOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Reusable ClassCard component
export interface ClassCardProps {
  title: string;
  description: string;
  timeRange: string;
  status: string;
  avatarColor: string;
  avatarIcon: React.ReactNode;
  backgroundColor: string;
}

export const EventCard = ({
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
    <div
      className={`class-card p-4 flex flex-col space-y-2 `}
      style={{
        backgroundColor: backgroundColor,
        border: "none",
        borderRadius: 12,
        marginBottom: 12,
        borderLeft: `4px solid ${avatarColor}`,
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
            src={avatarIcon}
            size={40}
            style={{
              backgroundColor: avatarColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 6,
              objectPosition: "center",
            }}
          ></Avatar>
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
      <div style={{ flex: 1 }}>
        <Title
          level={5}
          style={{ margin: 0, marginBottom: 4, fontWeight: 600 }}
        >
          {title}
        </Title>
        <Text
          type="secondary"
          style={{ fontSize: 12, lineHeight: 1.4, color: "#7B7B7B" }}
        >
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
            <ClockCircleOutlined style={{ fontSize: 12, color: "#8c8c8c" }} />
            <Text style={{ fontSize: 12, color: "#7B7B7B" }}>{timeRange}</Text>
          </div>

          <Tag
            icon={<VideoCameraAddOutlined />}
            color="default"
            style={{
              fontSize: 11,
              padding: "2px 8px",
              borderRadius: 6,
              border: "none",
              //   backgroundColor: "rgba(0,0,0,0.06)",
              backgroundColor: "transparent",
            }}
          >
            {status}
          </Tag>
        </div>
      </div>
    </div>
  );
};
