"use client";
import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiUsers, FiPlus } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Bell, Plus, Users } from "lucide-react";
import PostCreationModal from "./AddPostModel";

const CommunityHeader: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
 
    <>
      <PageNavbar
        icon={<Users className=" text-black" />}
        title="Community"
        subtitle="1,247 students online"
        isAiEnhanced={true}
        actions={[
          {
            label: "3",
            icon: <Bell size={18} className="mt-1.5" />,
            onClick: () => console.log("notification"),
            isPrimary: false,
          },
          {
            label: "Ask Question",
            icon: <Plus size={18} className="mt-1" />,
            onClick: () => console.log("ask question"),
            isPrimary: true,
          },
        ]}
      />
      {/* Search Section */}
      <div className="md:px-6 py-4 border-b border-gray-200 max-w-4xl px-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Input
              placeholder="Search discussions/NCLEX tips/Clinical guides"
              prefix={<SearchOutlined className="text-gray-400" />}
              className="rounded border-gray-300 bg-white h-10"
              size="middle"
            />
          </div>

          <Button
         
            icon={<FiPlus className="w-4 h-4" />}
            onClick={() => setIsModalOpen(true)}
            className="!bg-primary !text-white !border-0  !h-10 px-4 ml-4"
          >
            New Post
          </Button>
        </div>
        <PostCreationModal isVisible={isModalOpen} setIsVisible={setIsModalOpen}/>
      </div>
    </>
  );
};

export default CommunityHeader;
