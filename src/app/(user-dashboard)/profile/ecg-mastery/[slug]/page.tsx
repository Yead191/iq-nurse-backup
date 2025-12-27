import EcgContentClient from "@/components/ui/user-dashboard-pages/ecg-mastery";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <EcgContentClient slug={slug} />;
}
