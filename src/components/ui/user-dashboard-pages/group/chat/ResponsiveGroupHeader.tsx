import React, { useState, useRef, useEffect } from 'react';
import { Avatar, Dropdown, Menu, Input, Tooltip } from 'antd';
import { 
  MoreOutlined, 
  SearchOutlined, 
  UserDeleteOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { MdArrowBackIosNew } from 'react-icons/md';
import { CiLogin } from 'react-icons/ci';
import { IoPersonAdd } from 'react-icons/io5';

const ResponsiveGroupNav = () => {
  const [visible, setVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const searchInputRef = useRef(null);

  const handleMenuClick = ({ key }:{ key: string }) => {
    if (key === 'leave') {
      console.log('Leave group clicked');
    } else if (key === 'delete') {
      console.log('Delete group clicked');
    }
    setVisible(false);
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      (searchInputRef.current as any).focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleKeyDown = (e:any) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  const menu = (
    <Menu onClick={handleMenuClick} className="min-w-[160px]">
      <Menu.Item
        key="leave"
        icon={<LogoutOutlined />}
        className="hover:bg-gray-100"
      >
        <span className="text-gray-700">Leave Group</span>
      </Menu.Item>
      <Menu.Item
        key="delete"
        icon={<UserDeleteOutlined />}
        className="hover:bg-red-50"
      >
        <span className="text-red-600">Delete Group</span>
      </Menu.Item>
    </Menu>
  );

  const memberAvatars = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg"
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <div className="lg:hidden w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 gap-4">
          {/* Back Button */}
          <button className="flex items-center justify-center w-8 h-8 hover:bg-gray-100 transition-colors border border-primary p-1 rounded-md">
            <MdArrowBackIosNew className="text-xl text-primary" />
          </button>

          {/* Group Info */}
          {!searchOpen && (
            <div className="flex-1 mx-3">
              <h2 className="text-base font-semibold text-gray-900">
                Nursing Fundamentals
              </h2>
              <div className="flex items-center gap-[1px] border border-solid border-gray-200 rounded p-[2px] w-fit mt-1">
                {memberAvatars.map((src, idx) => (
                  <Avatar
                    key={idx}
                    shape="square"
                    size={20}
                    src={src}
                    className="rounded-sm"
                  />
                ))}
                <p className="text-sm text-gray-500 ml-2">
                  55 Members, <span className="text-green-500">6 online</span>
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-2 relative">
            {searchOpen ? (
              <div className="absolute right-12 z-20">
                <Input
                  ref={searchInputRef}
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onBlur={() => setSearchOpen(false)}
                  placeholder="Search group..."
                  className="!w-48 border !border-primary !rounded-md !px-3 !py-1 transition-shadow shadow focus:shadow-md"
                  allowClear
                  size="small"
                />
              </div>
            ) : (
              <button
                type="button"
                className="flex items-center cursor-pointer justify-center w-8 h-8 border border-primary rounded-md p-2 transition-colors hover:bg-gray-100"
                onClick={() => setSearchOpen(true)}
              >
                <SearchOutlined className="text-xl text-gray-600" />
              </button>
            )}

            <Dropdown
              overlay={menu}
              trigger={['click']}
              open={visible}
              onOpenChange={setVisible}
              placement="bottomRight"
            >
              <button
                type="button"
                className="flex items-center justify-center cursor-pointer w-8 h-8 border border-primary rounded-md p-2 transition-colors hover:bg-gray-100"
              >
                <MoreOutlined className="text-xl text-gray-600" />
              </button>
            </Dropdown>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block w-full bg-white border-b border-gray-200 px-3 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Group Members Label with Actions */}
            <div className="flex items-center gap-3 w-[200px]">
              <p className="text-sm font-semibold text-gray-600">Group members</p>
              <div className="flex items-center gap-[1px] ml-2">
                <Tooltip title="Add Member">
                  <div className="w-6 h-6 rounded flex items-center justify-center cursor-pointer hover:bg-gray-200">
                    <IoPersonAdd className="text-xs text-gray-800 font-bold" />
                  </div>
                </Tooltip>
                <Tooltip title="Leave Group">
                  <div className="w-6 h-6 rounded flex items-center justify-center cursor-pointer hover:bg-gray-200">
                    <CiLogin className="text-red-500 text-xl font-bold" />
                  </div>
                </Tooltip>
              </div>
            </div>

            {/* Group Name and Members */}
            <div className="flex items-center gap-3">
              <h1 className="text-lg font-semibold text-gray-900 mb-0">
                Nursing Fundamentals
              </h1>

              {/* Member Avatars */}
              <div className="flex items-center gap-[1px]">
                {memberAvatars.map((src, idx) => (
                  <Avatar
                    key={idx}
                    shape="square"
                    size={20}
                    src={src}
                    className="rounded-sm"
                  />
                ))}
              </div>

              {/* Member Count and Active Status */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Tooltip title="View all members">
                  <button
                    className="flex items-center gap-1 font-medium hover:underline focus:outline-none cursor-pointer"
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    16 Members
                  </button>
                </Tooltip>
                <Tooltip title="3 Active">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-green-500 bg-white relative">
                      <span className="bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-0.5">
                        3
                      </span>
                    </div>
                  </div>
                </Tooltip>
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
    </>
  );
};

export default ResponsiveGroupNav