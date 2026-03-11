import StudyNotesNew from "@/components/ui/user-dashboard-pages/study-notes-new";
import StudyNoteOverview from "@/components/ui/user-dashboard-pages/study-notes-new/components/StudyNoteOverview";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // console.log(slug);
  if (slug === "overview") {
    return <StudyNoteOverview />;
  }
  return <StudyNotesNew id={slug} />;
}
