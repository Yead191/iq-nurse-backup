import { demoContent } from "@/data/demoContent";
import MediaTab from "./MediaTab";

export default function OverviewTab() {
  const content = demoContent;
  return (
    <section className="flex flex-col gap-6">
      <MediaTab />
      <div
        className="flex flex-col space-y-6  h-fit "
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
