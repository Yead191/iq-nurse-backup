import Link from "next/link";
import React from "react";

export default function AssessmentCard({ category }: { category: any }) {
  return (
    <Link href={`/profile/patient-assessment/assessment-notes/${category.id}`}>
      <div className="cursor-pointer transition-all duration-200 hover:shadow-md bg-[#F6F7F8] p-2">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="bg-white w-full flex justify-center items-center ">
            <div className="w-full h-[140px] rounded-full  flex items-center justify-center p-1">
              <img
                src={category.icon || "/placeholder.svg"}
                alt={`${category.label} icon`}
                className="w-full h-full object-contain opacity-70"
              />
            </div>
          </div>

          <div className="space-y-1 bg-white w-full p-2">
            <h3 className="text-sm md:text-[16px] font-medium  text-[#110D0D] leading-tight">
              {category.label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
