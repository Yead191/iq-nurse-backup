import React from 'react'
import { NclexSidebar } from '../study-notes-page/NclexSidebar'

export default function CarePlanSideBar() {
  return (
    <div>
      <NclexSidebar
      onCategorySelect={(categoryId: string) => {}}
      onSubcategorySelect={(categoryId: string, subcategoryId: string) => {}}
      
      />
    </div>
  )
}
