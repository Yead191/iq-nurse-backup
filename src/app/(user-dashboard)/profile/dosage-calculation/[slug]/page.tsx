import DosageContentClient from "@/components/ui/user-dashboard-pages/dosage-calculation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <DosageContentClient slug={slug} />;
}
