import React from 'react';
import { Input, Avatar, Badge, Tooltip } from 'antd';
import { SearchOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { CiLogin } from 'react-icons/ci';
import { IoPersonAdd } from 'react-icons/io5';

const NavigationBar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section - Group Info */}
        <div className="flex items-center gap-4">
          {/* Group Avatar/Icon */}
          <div className="flex items-center gap-3">
            <Avatar.Group size="small" max={{ count: 3 }}>
              <Avatar className="bg-orange-500">
                <UserOutlined />
              </Avatar>
              <Avatar className="bg-blue-500">
                <UserOutlined />
              </Avatar>
              <Avatar className="bg-green-500">
                <UserOutlined />
              </Avatar>
            </Avatar.Group>
            
            {/* Add/Invite Icon */}
            <Tooltip title="Add Member">
              <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer hover:bg-gray-200">
                <IoPersonAdd className="text-xs text-gray-600" />
              </div>
            </Tooltip>
            <Tooltip title="Leave Group">
              <CiLogin className='text-red-500 font-bold cursor-pointer' />
            </Tooltip>
          </div>

          {/* Group Name and Member Count */}
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900 mb-0">
              Nursing Fundamentals
            </h1>
            
            {/* Group Icons */}
            <div className="hidden md:flex items-center gap-1">
              <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
              <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
            </div>
            
            {/* Member Count */}
            <div className="hidden md:flex items-center gap-1 text-sm text-gray-600">
              <UserOutlined className="text-xs" />
              <span className="font-medium">16 Members</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Section - Search */}
        <div className="flex-shrink-0">
          <Input
            placeholder="Search in groups..."
            prefix={<SearchOutlined className="text-gray-400" />}
            className="!w-72 !rounded-full !py-1"
            size="middle"
            style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;