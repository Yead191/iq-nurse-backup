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
  const content = {
    _id: slug ?? "69144587287f14160290a97f",
    title: slug ?? "demo",
    description:
      "Unstable Angina (UA) = chest pain at REST or with minimal exertion, unpredictable in pattern. Part of Acute Coronary Syndrome (ACS).",
    content: "/assets/files/demoStudyNote.html",
  };
  if (slug === "overview") {
    return <StudyNoteOverview />;
  }
  return <StudyNotesNew content={content} />;
}
