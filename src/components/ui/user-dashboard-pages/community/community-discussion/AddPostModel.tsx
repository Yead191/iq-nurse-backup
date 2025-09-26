"use client"
import React, { useState } from 'react';
import { Modal, Input, Button, Select, Tooltip, Divider } from 'antd';
import { 
  Image as ImageIcon,
  Bold,
  Italic,
  Underline,
  Link,
  Hash,
  Quote,
  Code,
  List,
  AlignLeft,
  Plus,
  X
} from 'lucide-react';
import NoteTab from '../../study-notes-page/surgical-details-page/NoteTab';

const { TextArea } = Input;
const { Option } = Select;

const PostCreationModal = ({ isVisible, setIsVisible }:{isVisible: boolean, setIsVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const formatButtons = [
    { icon: <ImageIcon className="w-4 h-4" />, tooltip: 'Add Image' },
    { icon: <Bold className="w-4 h-4" />, tooltip: 'Bold' },
    { icon: <Italic className="w-4 h-4" />, tooltip: 'Italic' },
    { icon: <Underline className="w-4 h-4" />, tooltip: 'Underline' },
    { icon: <Link className="w-4 h-4" />, tooltip: 'Add Link' },
    { icon: <Hash className="w-4 h-4" />, tooltip: 'Heading' },
    { icon: <Quote className="w-4 h-4" />, tooltip: 'Quote' },
    { icon: <Code className="w-4 h-4" />, tooltip: 'Code' },
    { icon: <List className="w-4 h-4" />, tooltip: 'List' },
    { icon: <AlignLeft className="w-4 h-4" />, tooltip: 'Align' },
  ];

  return (
    <>

      <Modal
        open={isVisible}
        onCancel={handleClose}
        width={800}
        className="post-creation-modal"
        footer={null}
        closeIcon={<X className="w-5 h-5" />}
        styles={{
          body: { padding: 0 },
          header: { borderBottom: 'none', padding: '16px 24px 0' }
        }}
      >
        <div className="md:p-6 p-1">
          {/* Title and Tags Row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <Input
                placeholder="Short Subject Title Of Your Post"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-sm border-gray-200 focus:border-blue-400"
                size="large"
              />
            </div>
            <div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="Add Tags"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="text-sm border-gray-200 focus:border-blue-400"
                    size="large"
                    onPressEnter={handleAddTag}
                  />
                  <Button 
                    icon={<Plus className="w-4 h-4" />}
                    onClick={handleAddTag}
                    className="flex items-center justify-center"
                  />
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded border"
                      >
                        {tag}
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-blue-800"
                          onClick={() => handleRemoveTag(tag)}
                        />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="mb-4">
            <h3 className="text-base font-medium text-gray-800 mb-3">Details</h3>
            <NoteTab height='30vh'/>
          </div>

          {/* Share Post Button */}
          <div className="flex justify-end">
            <Button 
             
              className="!bg-primary !text-white !border-none px-6"
              size="large"
            >
              Share Post
            </Button>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .post-creation-modal .ant-modal-header {
          border-bottom: none;
        }
        .post-creation-modal .ant-modal-close {
          top: 16px;
          right: 24px;
        }
      `}</style>
    </>
  );
};

export default PostCreationModal;