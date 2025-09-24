import { HeartIcon } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

interface CommunityGroupProps {
  name: string;
  members: number;
  online: number;
  iconColor: string;
}

export default function CommunityGroup({
  name,
  members,
  online,
  iconColor,
}: CommunityGroupProps) {
  return (
    <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
      <div
        className={`w-10 h-10 ${iconColor} rounded-lg flex items-center justify-center`}
      >
        <FaRegHeart className="text-white text-2xl" />

      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">
          {members} members, {online} online
        </p>
      </div>
    </div>
  );
}
