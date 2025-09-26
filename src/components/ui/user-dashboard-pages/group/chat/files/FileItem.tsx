import { FileText } from "lucide-react";

const getFileIcon = (name: string, type: "pdf" | "doc" | "ppt") => {
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
    default:
      return <FileText className={iconClass} />;
  }
};

export interface FileItem {
  id: string;
  name: string;
  size: string;
  type: "pdf" | "doc" | "ppt";
  date?: string;
  time?: string;
  filePath: string;
}
export interface FileListProps {
  user: string;
  files: FileItem[];
}
const FileListItem: React.FC<{ file: FileItem; showDate?: boolean }> = ({
  file,
  showDate = false,
}) => (
  <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0">
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

const FileListItemBox = ({files}:{files: FileListProps[]}) => {
  return (
    <>
      {files.map((file) => (
        <div className="px-4">
          <div className="text-gray-500 text-sm px-4 py-2 mt-4">
            {file.user}
          </div>
          {
            file.files.map((file) => (
              <FileListItem key={file.id} file={file} />
            ))
          }
        </div>
      ))}
    </>
  );
};


export default FileListItemBox;
