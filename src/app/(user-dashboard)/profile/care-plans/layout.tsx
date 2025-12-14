
import CarePlanHeader from "@/components/ui/user-dashboard-pages/care-plans/components/CarePlanHeader"
import CarePlanSidebar from "@/components/ui/user-dashboard-pages/care-plans/components/CarePlanSidebar"
import type React from "react"

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative">
      <CarePlanHeader />
      <div className="flex">
        <CarePlanSidebar />
        <div className="flex-1 lg:h-[calc(100vh-110px)] overflow-auto lg:px-5">{children}</div>
      </div>
    </section>
  )
}
