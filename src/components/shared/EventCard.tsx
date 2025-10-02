import { Avatar, Typography, Tag, Button, Dropdown } from "antd";
import {
  MoreOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Calendar } from "lucide-react";

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
        // borderLeft: `4px solid ${avatarColor}`,
      }}
    >
      {/* <div
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
              borderRadius: 4,
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
      </div> */}
      <div style={{ flex: 1 }}>
        <div className="flex justify-between items-center">
          <Title
            level={5}
            style={{ margin: 0, marginBottom: 4, fontWeight: 600 }}
          >
            {title}
          </Title>
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
        {/* <Text
          type="secondary"
          style={{ fontSize: 14, lineHeight: 0.8, color: "#7B7B7B" }}
        >
          {description}
        </Text> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <div className="flex items-center gap-2 text-[10px] 2xl:text-[12px]">
            <Calendar size={10} style={{ fontSize: 10, color: "#8c8c8c" }} />
            <p className="">Wed, 05 Apr 2025</p>
            <p className="text-[#7B7B7B] ">{timeRange}</p>
          </div>

          {/* <Tag
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
          </Tag> */}
        </div>
      </div>
    </div>
  );
};
