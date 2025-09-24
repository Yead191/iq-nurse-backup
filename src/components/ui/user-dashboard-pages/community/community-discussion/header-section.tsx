import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FiUsers, FiPlus } from "react-icons/fi";
import { FaBell } from "react-icons/fa";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { Bell, Plus, Users } from "lucide-react";

const CommunityHeader: React.FC = () => {
  return (
    // <div className="bg-white">
    //   {/* Top Header */}
    //   <div className=" shadow-md border-b border-gray-100 md:px-6 px-3 py-3">
    //     <div className="flex items-center justify-between">
    //       {/* Left side - Logo and Community info */}
    //       <div className="flex items-center md:space-x-4 space-x-1.5">
    //         <div className="flex items-center space-x-2 md:!text-3xl text-xl">
    //           <HiOutlineAcademicCap className=" text-gray-700" />
    //           <h1 className=" font-semibold text-gray-900">Community</h1>
    //         </div>

    //         <div className="flex items-center space-x-3">
    //           <span className="bg-blue-600 text-white md:text-xs  text-[8px] font-medium px-2 py-1 rounded">
    //             AI-Enhanced
    //           </span>

    //           <div className="md:flex hidden items-center space-x-1 md:text-sm text-xs  text-gray-600">
    //             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
    //             <span>1,247 students online</span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Right side - Actions */}
    //       <div className="flex items-center space-x-3">
    //         <div className="bg-gray-100 rounded-md flex gap-1.5 items-center justify-center p-3 text-sm">
    //             <FaBell />
    //           <span className="text-gray-700  font-medium">3</span>
    //         </div>

    //         <Button
    //           type="primary"
    //           className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 rounded md:!text-sm !text-xs font-medium h-8 md:!px-4 px-2"
    //         >
    //           + Ask Question
    //         </Button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Search Section */}
    //   <div className="md:px-6 py-4 border-b border-gray-200 max-w-4xl">
    //     <div className="flex items-center justify-between">
    //       <div className="flex-1">
    //         <Input
    //           placeholder="Search discussions/NCLEX tips/Clinical guides"
    //           prefix={<SearchOutlined className="text-gray-400" />}
    //           className="rounded border-gray-300 bg-white h-10"
    //           size="middle"
    //         />
    //       </div>

    //       <Button
    //         type="primary"
    //         icon={<FiPlus className="w-4 h-4" />}
    //         className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 rounded text-sm font-medium !h-10 px-4 ml-4"
    //       >
    //         New Post
    //       </Button>
    //     </div>
    //   </div>
    // </div>
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
      <div className="md:px-6 py-4 border-b border-gray-200 max-w-4xl">
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
            type="primary"
            icon={<FiPlus className="w-4 h-4" />}
            className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 rounded text-sm font-medium !h-10 px-4 ml-4"
          >
            New Post
          </Button>
        </div>
      </div>
    </>
  );
};

export default CommunityHeader;
