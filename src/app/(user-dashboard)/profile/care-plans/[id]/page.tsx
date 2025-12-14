import CarePlanContent from "@/components/ui/user-dashboard-pages/care-plans"
import { carePlansCategories } from "@/data/carePlansCategories"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function page({ params }: PageProps) {
  const { id } = await params

  // Find the care plan content by ID
  let carePlanContent = null

  for (const category of carePlansCategories) {
    const subcategory = category.subcategories.find((sub) => sub.id === id)
    if (subcategory) {
      carePlanContent = subcategory.content
      break
    }
  }

  if (!carePlanContent) {
    notFound()
  }

  return (
    <div className="p-6 lg:p-8">
      <CarePlanContent content={carePlanContent} />
    </div>
  )
}
