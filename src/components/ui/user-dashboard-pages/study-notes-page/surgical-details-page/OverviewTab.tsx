import { demoContent } from "@/data/demoContent";

export default function OverviewTab() {
  const content = demoContent;
  return (
    <div
      className="flex flex-col space-y-6 p-6 h-fit border border-[#003877] rounded-[11px]"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
