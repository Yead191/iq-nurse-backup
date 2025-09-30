import React, { useState } from "react";
import { Button, Avatar, Tooltip, message, Popconfirm } from "antd";
import { Edit3, Save, FileDown, Trash2, MoreHorizontal } from "lucide-react";

const DocumentToolbar = ({
  setIsDesabled,
}: {
  setIsDesabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Sample user data - replace with your actual data
  const collaborators = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    {
      id: 3,
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  const handleEdit = () => {
    setIsDesabled(!isEditing);
    setIsEditing(!isEditing);
    message.success(isEditing ? "Edit mode disabled" : "Edit mode enabled");
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      message.success("Document saved successfully");
    }, 1500);
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    // Simulate PDF export
    setTimeout(() => {
      setIsExporting(false);
      message.success("PDF exported successfully");
    }, 2000);
  };

  const handleDelete = () => {
    message.success("Document deleted successfully");
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap items-center justify-between p-3 md:p-4 bg-white border-b border-gray-200 gap-3">
      {/* Left side - Action buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Edit Button */}
        <Button
          type={isEditing ? "primary" : "default"}
          icon={<Edit3 className="w-4 h-4" />}
          onClick={handleEdit}
          className="flex items-center text-xs sm:text-sm px-2 py-1"
          size="small"
        >
          Edit
        </Button>

        {/* Save Button */}
        <Button
          icon={<Save className="w-4 h-4" />}
          onClick={handleSave}
          loading={isSaving}
          className="flex items-center text-xs sm:text-sm px-2 py-1"
          size="small"
        >
          Save
        </Button>

        {/* Export PDF Button */}
        <Button
          icon={<FileDown className="w-4 h-4" />}
          onClick={handleExportPDF}
          loading={isExporting}
          className="flex items-center text-xs sm:text-sm px-2 py-1"
          size="small"
        >
          Export PDF
        </Button>

        {/* Collaborators */}
        <div className="flex items-center gap-2">
          {/* User Avatars */}
          <div className="flex -space-x-3">
            {collaborators.map((user, index) => (
              <Tooltip key={user.id} title={user.name}>
                <Avatar
                  src={user.avatar}
                  size={28}
                  className="border-2 !border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                  style={{ zIndex: collaborators.length - index }}
                />
              </Tooltip>
            ))}
          </div>

          {/* People editing text */}
          <div className="flex items-center text-xs sm:text-sm text-gray-600">
            <span className="font-medium">{collaborators.length}</span>
            <span className="ml-1">People editing</span>
          </div>
        </div>
      </div>

      {/* Right side - Delete button */}
      <div className="flex items-center">
        <Button
          danger
          ghost
          icon={<Trash2 className="w-4 h-4" />}
          className="flex items-center text-xs sm:text-sm px-2 py-1"
          size="small"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

// Example with different states
const DocFooter = ({
  setIsDesabled,
}: {
  setIsDesabled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className=" bg-gray-50">
      {/* Main toolbar */}
      <DocumentToolbar setIsDesabled={setIsDesabled} />
    </div>
  );
};

export default DocFooter;
