import SurgicalDetailsPage from "@/components/ui/user-dashboard-pages/study-notes-page/surgical-details-page/SurgicalDetailsPage";

export default function Page({ params }: { params: { id: string } }) {
  return <SurgicalDetailsPage id={params.id} />;
}
