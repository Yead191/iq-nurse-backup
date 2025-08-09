import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { classesData } from "@/data/classesData";
import { EventCard } from "@/components/shared/EventCard";

export default function ClassesSection() {
  return (
    <div className="p-2">
      {/* header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src="/assets/icons/classes.svg"
            alt="Tasks"
            className="w-5 h-5"
          />
          <span className="text-sm font-semibold text-neutral-900">
            Classes
          </span>
        </div>
        <Button
          size="small"
          type="text"
          shape="circle"
          icon={<PlusOutlined />}
          className="hover:bg-neutral-100"
          style={{
            backgroundColor: "#003877",
            color: "white",
            borderRadius: 8,
          }}
        />
      </div>
      <div className="my-6">
        {/* Dynamic Class Cards */}
        {classesData.map((classItem) => (
          <EventCard
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
    </div>
  );
}
