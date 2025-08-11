import { Button } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { classesData } from "@/data/eventData";
import { EventCard } from "@/components/shared/EventCard";
import TaskHeader from "@/components/shared/user-dashboard/TaskHeader";

export default function ClassesSection() {
  return (
    <div className="">
      {/* header */}
      <TaskHeader img="/assets/icons/classes.svg" title="Classes" />
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
