import { communityGroupsData, discussionsData } from "@/data/userHome";
import CommunityGroup from "./CommunityGroup";
import DiscussionItem from "./DiscussionItem";
import { IoIosChatboxes } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";

export default function CommunityDiscussionsSection() {
  return (
    <div className=" md:bg-[#F8F7FB] md:p-4 py-6 ">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <IoIosChatboxes className="text-4xl md:text-5xl" />
          <h2 className="text-xl font-bold text-gray-900">
            Community Discussions
          </h2>
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium hidden md:block">
          View All
        </button>
      </div>

      {/* Discussion Items */}
      <div className="space-y-4 mb-8">
        {discussionsData?.map((discussion) => (
          <DiscussionItem key={discussion.id} {...discussion} />
        ))}
      </div>

      {/* Community Groups Section */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <PiUsersThreeFill className="text-4xl" />

            <h3 className="text-lg font-semibold text-gray-900">
              Community Discussions
            </h3>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium hidden md:block">
            Active All
          </button>
        </div>

        {communityGroupsData.map((group) => (
          <CommunityGroup key={group.id} {...group} />
        ))}
      </div>
    </div>
  );
}
