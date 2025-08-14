import SurgicalDetailsPage from "@/components/ui/user-dashboard-pages/study-notes-page/surgical-details-page/SurgicalDetailsPage";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; 
  console.log(id);
  return <SurgicalDetailsPage id={id} />;
}
