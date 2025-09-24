interface DiscussionItemProps {
  title: string;
  author: string;
  authorInitials: string;
  replies: number;
  views: number;
}

export default function DiscussionItem({
  title,
  author,
  authorInitials,
  replies,
  views,
}: DiscussionItemProps) {
  return (
    <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
      <div className="w-10 h-10 bg-[#003877] rounded-full md:flex items-center justify-center text-white font-semibold hidden ">
        {authorInitials}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#003877] rounded-full flex items-center justify-center text-white text-[8px] font-semibold md:hidden">
              {authorInitials}
            </div>
            {author}
          </div>
          <span>{replies} replies</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
}
