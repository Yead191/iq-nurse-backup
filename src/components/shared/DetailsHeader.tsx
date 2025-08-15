import { Bookmark, Share2, Printer, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function DetailsHeader({
  title,
  back,
}: {
  title: string | undefined;
  back?: /*unresolved*/ any;
}) {
  return (
    <div className="flex items-center justify-between py-3 sticky top-0 z-50 bg-white">
      {/* Back Button */}
      <div className="flex items-center space-x-3">
        <Link href={back} className="mt-1.5">
          <button className="hover:bg-gray-100 text-[#c5c6c6] font-semibold rounded border   ">
            <ChevronLeft size={24} className="" />
          </button>
        </Link>
        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1  rounded">
          {title}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-3 ">
        <ActionButton
          icon={Bookmark}
          label="Bookmarks"
          hoverColor="text-blue-600"
        />
        <ActionButton icon={Share2} label="Share" hoverColor="text-green-600" />
        <ActionButton
          icon={Printer}
          label="Printer"
          hoverColor="text-purple-600"
        />
      </div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  hoverColor,
}: {
  icon: any;
  label: string;
  hoverColor: string;
}) {
  return (
    <div className="flex flex-col items-center group gap-2 cursor-pointer">
      <button className="flex flex-col items-center justify-center w-8 h-8 lg:w-11 lg:h-[38px] rounded-lg hover:bg-white transition-colors cursor-pointer group border border-[#003877] bg-[#F6F7F8]">
        <Icon className={`w-4 h-4 text-gray-600 group-hover:${hoverColor}`} />
      </button>
      <span
        className={`text-[8px] hidden lg:block lg:text-xs text-gray-500 group-hover:${hoverColor}`}
      >
        {label}
      </span>
    </div>
  );
}
