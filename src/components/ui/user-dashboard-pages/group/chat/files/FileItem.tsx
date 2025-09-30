import React, { useState } from 'react';
import { Modal, Button, Image, Card, Typography, message, Divider } from 'antd';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  X, 
  Eye,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Move
} from 'lucide-react';

const { Title, Text } = Typography;

export interface FileItem {
  id: string;
  name: string;
  size: string;
  type: "pdf" | "doc" | "ppt" | "jpg" | "png" | "jpeg";
  date?: string;
  time?: string;
  filePath: string;
}

export interface FileListProps {
  user: string;
  files: FileItem[];
}

const getFileIcon = (name: string, type: "pdf" | "doc" | "ppt" | "jpg" | "png" | "jpeg") => {
  const iconClass = "px-5 py-3 rounded text-white";
  switch (type) {
    case "pdf":
      return (
        <div className={`${iconClass} bg-red-500`}>{name[0].toUpperCase()}</div>
      );
    case "doc":
      return (
        <div className={`${iconClass} bg-blue-600`}>
          {name[0].toUpperCase()}
        </div>
      );
    case "ppt":
      return (
        <div className={`${iconClass} bg-orange-500`}>
          {name[0].toUpperCase()}
        </div>
      );
    case "jpg":
    case "jpeg":
    case "png":
      return (
        <div className={`${iconClass} bg-green-500`}>
          {name[0].toUpperCase()}
        </div>
      );
    default:
      return <FileText className={iconClass} />;
  }
};

const isImageFile = (type: string) => {
  return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(type.toLowerCase());
};

const isPDFFile = (type: string) => {
  return type.toLowerCase() === 'pdf';
};

// Image Preview Modal Component
const ImagePreviewModal: React.FC<{
  file: FileItem | null;
  visible: boolean;
  onClose: () => void;
}> = ({ file, visible, onClose }) => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  if (!file || !isImageFile(file.type)) return null;

  const handleDownload = async () => {
    try {
      const link = document.createElement('a');
      link.href = file.filePath;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      message.success('Download started successfully!');
    } catch (error) {
      message.error('Failed to download the file');
    }
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.2));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleReset = () => {
    setScale(1);
    setRotation(0);
  };

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width="90vw"
      centered
      closeIcon={<X className="w-5 h-5" />}
      styles={{ body: { padding: 0 } }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <Title level={4} className="mb-1">{file.name}</Title>
            <Text type="secondary">Size: {file.size}</Text>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              icon={<ZoomOut className="w-4 h-4" />} 
              onClick={handleZoomOut}
              disabled={scale <= 0.2}
              size="small"
            />
            <span className="text-sm min-w-[60px] text-center">{Math.round(scale * 100)}%</span>
            <Button 
              icon={<ZoomIn className="w-4 h-4" />} 
              onClick={handleZoomIn}
              disabled={scale >= 3}
              size="small"
            />
            <Button 
              icon={<RotateCw className="w-4 h-4" />} 
              onClick={handleRotate}
              size="small"
            />
            <Button 
              onClick={handleReset}
              size="small"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Image Display */}
      <div className="flex justify-center items-center bg-gray-100" style={{ height: '70vh' }}>
        <div className="overflow-auto max-w-full max-h-full">
          <img
            src={file.filePath}
            alt={file.name}
            style={{ 
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transition: 'transform 0.3s ease',
              maxWidth: 'none',
              maxHeight: 'none'
            }}
            className="block"
          />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-center space-x-3">
          <Button
            type="primary"
            icon={<Download className="w-4 h-4" />}
            onClick={handleDownload}
            className="flex items-center"
          >
            Download Image
          </Button>
          <Button
            icon={<ExternalLink className="w-4 h-4" />}
            onClick={() => window.open(file.filePath, '_blank')}
            className="flex items-center"
          >
            Open Original
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// File Preview Modal Component (for non-images)
const FilePreviewModal: React.FC<{
  file: FileItem | null;
  visible: boolean;
  onClose: () => void;
}> = ({ file, visible, onClose }) => {
  if (!file || isImageFile(file.type)) return null;

  const handleDownload = async () => {
    try {
      const link = document.createElement('a');
      link.href = file.filePath;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      message.success('Download started successfully!');
    } catch (error) {
      message.error('Failed to download the file');
    }
  };

  const handleOpenExternal = () => {
    window.open(file.filePath, '_blank');
  };

  return (
    <Modal
      title={null}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
      closeIcon={<X className="w-5 h-5" />}
    >
      <div className="p-4">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              {getFileIcon(file.name, file.type)}
            </div>
          </div>
          <Title level={3} className="mb-2">{file.name}</Title>
          <Text type="secondary" className="text-base">
            Size: {file.size} | Type: {file.type.toUpperCase()}
          </Text>
        </div>

        {/* File Preview */}
        <div className="mb-6">
          <Card className="overflow-hidden">
            {isPDFFile(file.type) ? (
              <iframe
                src={file.filePath}
                width="100%"
                height={400}
                className="rounded border-0"
                title="PDF Preview"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-64 bg-gray-50">
                <FileText className="w-16 h-16 text-gray-400 mb-4" />
                <Text type="secondary">Preview not available for this file type</Text>
                <Text type="secondary" className="text-sm">Use "Open in New Tab" to view the file</Text>
              </div>
            )}
          </Card>
        </div>

        <Divider />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            type="primary"
            icon={<Download className="w-4 h-4" />}
            size="large"
            onClick={handleDownload}
            className="flex items-center justify-center min-w-[140px]"
          >
            Download
          </Button>
          
          <Button
            icon={<ExternalLink className="w-4 h-4" />}
            size="large"
            onClick={handleOpenExternal}
            className="flex items-center justify-center min-w-[140px]"
          >
            Open in New Tab
          </Button>
        </div>
      </div>
    </Modal>
  );
};

// Original File List Item Component (keeping your exact styling)
const FileListItem: React.FC<{ 
  file: FileItem; 
  showDate?: boolean;
  onPreview: (file: FileItem) => void;
}> = ({ file, showDate = false, onPreview }) => (
  <div 
    className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 cursor-pointer transition-colors"
    onClick={() => onPreview(file)}
  >
    <div className="flex items-center space-x-3">
      {getFileIcon(file.name, file.type)}
      <div className="flex-1">
        <div className="font-medium text-gray-900 text-sm">{file.name}</div>
        <div className="text-gray-500 text-xs">{file.size}</div>
      </div>
    </div>
    <div className="text-right text-xs text-gray-500">
      {file.time || file.date}
    </div>
  </div>
);

// Main File List Component (keeping your exact structure)
const FileListItemBox: React.FC<{ files: FileListProps[] }> = ({ files }) => {
  const [previewFile, setPreviewFile] = useState<FileItem | null>(null);
  const [filePreviewVisible, setFilePreviewVisible] = useState(false);
  const [imagePreviewVisible, setImagePreviewVisible] = useState(false);

  const handlePreview = (file: FileItem) => {
    setPreviewFile(file);
    if (isImageFile(file.type)) {
      setImagePreviewVisible(true);
    } else {
      setFilePreviewVisible(true);
    }
  };

  const handleCloseFilePreview = () => {
    setFilePreviewVisible(false);
    setPreviewFile(null);
  };

  const handleCloseImagePreview = () => {
    setImagePreviewVisible(false);
    setPreviewFile(null);
  };

  return (
    <>
      {files.map((fileGroup, groupIndex) => (
        <div key={groupIndex} className="md:px-4 px-2">
          <div className="text-gray-500 text-sm px-4 py-2 mt-4">
            {fileGroup.user}
          </div>
          {fileGroup.files.map((file) => (
            <FileListItem 
              key={file.id} 
              file={file} 
              onPreview={handlePreview}
            />
          ))}
        </div>
      ))}

      {/* File Preview Modal for PDFs and Documents */}
      <FilePreviewModal
        file={previewFile}
        visible={filePreviewVisible}
        onClose={handleCloseFilePreview}
      />

      {/* Image Preview Modal for Images */}
      <ImagePreviewModal
        file={previewFile}
        visible={imagePreviewVisible}
        onClose={handleCloseImagePreview}
      />
    </>
  );
};

// Example usage component

export default FileListItemBox;