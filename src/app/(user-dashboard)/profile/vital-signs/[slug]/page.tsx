import VitalContentClient from "@/components/ui/user-dashboard-pages/vital-signs";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <VitalContentClient slug={slug} />;
}
