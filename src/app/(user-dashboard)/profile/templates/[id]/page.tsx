import TempleteDetails from "@/components/ui/user-dashboard-pages/template";
import { TemplateData } from "@/data/templatesData";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: Props) {
  const { id } = await params;

  let categoryId: string | null = null;

  TemplateData?.categories?.forEach((cat) => {
    if (cat.templates.some((t) => t.id === id)) {
      categoryId = cat.id;
    }
  });

  return <TempleteDetails categories={{ categoryId, templeteId: id }} />;
}
