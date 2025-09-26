import React, { useState } from "react";
import { Input, Button, Avatar, Badge, Tabs, Card, Image } from "antd";
import {
  ArrowLeft,
  Search,
  MoreVertical,
  Link,
  X,
  FileText,
  Download,
  Signal,
  Wifi,
  Battery,
} from "lucide-react";
import FileListItem, { FileItem } from "./FileItem";
import { recentFiles } from "@/data/filesDemoData";
import FileListItemBox from "./FileItem";

const { TabPane } = Tabs;

const FileSection: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  // Sample file data


  const images = [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&h=150&fit=crop",
  ];

  return (
    <div className=" p-2">
      {/* Search Bar */}
      {searchVisible && (
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-50">
          <Button
            type="primary"
            icon={<Link className="w-4 h-4" />}
            size="small"
            className="flex items-center"
          >
            Links
          </Button>
          <Input placeholder="Search" className="flex-1" size="small" />
          <Button
            type="text"
            icon={<X className="w-4 h-4" />}
            onClick={() => setSearchVisible(false)}
            className="p-1"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {/* Recent Section */}

        <FileListItemBox files={recentFiles as any} />

        {/* Dated Files */}
   

        {/* Image Gallery */}
        <div className="px-4 py-3 max-w-xl">
          <div className="text-gray-900 font-semibold mb-3">10/20/2025</div>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <div key={index} className="aspect-square">
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  preview={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Last Month */}
        <div className="px-4 py-3">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Last Month</h3>
            <span className="text-gray-500 text-sm">10/20/2025</span>
          </div>
          <div className="text-blue-600 text-sm break-all px-4">
            https://www.figma.com/design/VQHktMfqgG2ktrZx7tX0I0
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-tabs .ant-tabs-nav {
          margin-bottom: 0;
        }
        .mobile-tabs .ant-tabs-tab {
          padding: 8px 12px;
          font-size: 14px;
        }
        .mobile-tabs .ant-tabs-ink-bar {
          background: #1890ff;
        }
      `}</style>
    </div>
  );
};

export default FileSection;
