import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import { TestCardsData } from "@/data/testCardData";
import Image from "next/image";
import React from "react";

export default function TestQuizzersPage() {
  return (
    <section>
      <PageBreadcrumb
        itemImg={"/assets/sidebar-icons/test-icon.svg"}
        itemLabel={"Exams & Quizzers"}
      />

      {/* title */}
      <div className="my-6">
        <h1 className="text-xl lg:text-2xl font-medium">Exams & Quizzes</h1>
        <p className="text-xs text-[#7B7B7B] mt-1">
          Get ready for your test, it's time to practice!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-4 h-[60vh] items-center justify-center">
        {TestCardsData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center justify-center p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white lg:h-[336px]"
          >
            <div className="w-16 h-16 relative mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-semibold text-center">{card.title}</h3>
            <p className="text-gray-500 text-sm text-center">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
