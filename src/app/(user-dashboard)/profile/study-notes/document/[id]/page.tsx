import SurgicalDetailsPage from "@/components/ui/user-dashboard-pages/study-notes-page/surgical-details-page/SurgicalDetailsPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return <SurgicalDetailsPage id={params.id} />;
}
