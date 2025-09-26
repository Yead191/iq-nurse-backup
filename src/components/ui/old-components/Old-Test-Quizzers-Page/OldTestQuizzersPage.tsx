"use client";
import { PageBreadcrumb } from "@/components/shared/user-dashboard/PageBreadcrumb";
import { TestCardsData } from "@/data/testCardData";
import Image from "next/image";
import React from "react";
import Card from "../../user-dashboard-pages/flash-cards/Card";

export default function OldTestQuizzersPage() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-4 min-h-[60vh] items-center justify-center  lg:my-0">
        {TestCardsData.map((card) => (
          <div key={card.id}>
            <Card className="" items={card} />
          </div>
        ))}
      </div>
    </section>
  );
}
