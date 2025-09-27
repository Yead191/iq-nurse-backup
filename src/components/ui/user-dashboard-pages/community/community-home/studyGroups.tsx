"use client";
import React, { useState } from 'react';
import { Button } from 'antd';
import { TeamOutlined, PlusOutlined } from '@ant-design/icons';

interface StudyGroup {
  id: number;
  name: string;
  newMessages: number;
}

const StudyGroups: React.FC = () => {
  const studyGroups: StudyGroup[] = [
    {
      id: 1,
      name: 'Med-Surg Study Circle',
      newMessages: 12
    },
    {
      id: 2,
      name: 'Med-Surg Study Circle',
      newMessages: 12
    }
  ];

  return (
    <div className="max-w-5xl !mt-10 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <TeamOutlined className="text-3xl text-gray-800" />
          <h1 className="md:text-3xl text-md font-semibold text-gray-800">Study Groups</h1>
        </div>
        <Button
          type="link"
          href='/profile/group/create-group'
          icon={<PlusOutlined />}
          className="!bg-primary !text-white rounded-md h-10 px-4 !py-4 !text-xs md:!text-sm font-medium"
        >
          Create New Group
        </Button>
      </div>

      {/* My Study Groups Section */}
      <div className=" shadow-md p-6 border border-gray-200 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-gray-800">
            My Study Groups
          </h2>
          <Button type="link" href='/profile/group/my-groups' className="text-blue-600 font-medium p-0 text-sm">
            View All
          </Button>
        </div>

        {/* Groups List */}
        <div className="space-y-3">
          {studyGroups.map((group) => (
            <div
              key={group.id}
              className="!bg-[#4A6ECC] rounded-lg p-4 md:max-w-2xl text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200"
            >
              <h3 className="font-medium md:text-lg text-xs mb-2">
                {group.name}
              </h3>
              <div className="flex items-center text-blue-100">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className="md:text-sm text-[10px]">
                  {group.newMessages} new messages
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyGroups;