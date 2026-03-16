import { useState, useEffect } from "react";
import { Button, Typography, Space } from "antd";
import { StarOutlined, ShareAltOutlined } from "@ant-design/icons";
import { SaveTopicModal } from "./modals/SaveTopicModal";
import { ShareTopicModal } from "./modals/ShareTopicModal";

const { Title, Text } = Typography;

interface ContentAreaProps {
  content: any;
}

export function LabsContentArea({ content }: ContentAreaProps) {
  const [isSaveModalOpen, setSaveModalOpen] = useState(false);
  const [isShareModalOpen, setShareModalOpen] = useState(false);

  // Track recently viewed topics
  useEffect(() => {
    if (content && content.title) {
      const recentKey = "labsRecentlyViewedTopics";
      const recent = localStorage.getItem(recentKey);
      const recentArray = recent ? JSON.parse(recent) : [];

      // Remove if already exists and add to front
      const filtered = recentArray.filter((id: string) => id !== content.id);
      const updated = [content.id, ...filtered].slice(0, 10); // Keep last 10

      localStorage.setItem(recentKey, JSON.stringify(updated));
    }
  }, [content]);

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full">
        <Text type="secondary">Select a topic from the sidebar</Text>
      </div>
    );
  }

  return (
    <div className="container py-6">
      {/* Title and Action Buttons */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
          <Title level={2} className="!mb-0">
            {content.title}
          </Title>
          <Space>
            <Button
              icon={<StarOutlined />}
              onClick={() => setSaveModalOpen(true)}
            >
              Save Topic
            </Button>
            <Button
              icon={<ShareAltOutlined />}
              onClick={() => setShareModalOpen(true)}
            >
              Share Topic
            </Button>
          </Space>
        </div>
        {content.subtitle && (
          <Text type="secondary" className="block">
            {content.subtitle}
          </Text>
        )}
      </div>
      {/* Content */}
      <section
        className="study-note-content prose max-w-none overflow-scroll"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
      {/* Modals (placeholders — implement as needed) */}
      <SaveTopicModal
        isOpen={isSaveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        topicTitle={content.title}
      />
      <ShareTopicModal
        isOpen={isShareModalOpen}
        onClose={() => setShareModalOpen(false)}
        topicTitle={content.title}
      />
    </div>
  );
}
