"use client";
import SurgicalDetailsPage from "@/components/ui/user-dashboard-pages/study-notes-page/surgical-details-page/SurgicalDetailsPage";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  return <SurgicalDetailsPage id={id} />;
}
