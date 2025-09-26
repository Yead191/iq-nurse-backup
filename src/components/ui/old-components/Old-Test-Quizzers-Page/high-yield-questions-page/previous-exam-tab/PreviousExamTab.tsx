import MobileTabHeader from "@/components/shared/MobileTabHeader";
import { previousExamData } from "@/data/previousExamData";
import { Pagination, Table } from "antd";
import React, { useState } from "react";

export default function PreviousExamTab() {
  const [page, setPage] = useState(0);

  const columns = [
    {
      title: "Test",
      dataIndex: "topic",
      key: "topic",
      render: (_: string, record: any) => (
        <div>
          <div className="font-medium">{record.topic}</div>
          <div className="text-sm text-gray-500">{record.date}</div>
        </div>
      ),
    },
    { title: "Mark", dataIndex: "score", key: "score" },
    {
      title: "Questions attempted",
      dataIndex: "questionsAttempted",
      key: "questionsAttempted",
    },
    { title: "Correct", dataIndex: "correct", key: "correct" },
    { title: "Wrong", dataIndex: "wrong", key: "wrong" },
  ];
  return (
    <div className=" lg:w-full ">
      <MobileTabHeader title="Previous Exams" />

      <Table
        columns={columns}
        dataSource={previousExamData}
        pagination={false}
        scroll={{ x: 600 }}
      />
      <div className="flex justify-center mt-6">
        <Pagination
          current={page}
          pageSize={10}
          total={30}
          onChange={() => setPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
