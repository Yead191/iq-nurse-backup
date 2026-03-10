import StudyNoteOverview from "@/components/ui/user-dashboard-pages/study-notes-new/components/StudyNoteOverview";
import SurgicalDetailsPage from "@/components/ui/user-dashboard-pages/study-notes-page/surgical-details-page/SurgicalDetailsPage";

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
  return <SurgicalDetailsPage id={slug} />;
}
