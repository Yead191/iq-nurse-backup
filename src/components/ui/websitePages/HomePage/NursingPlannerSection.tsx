import SectionHeading from "@/components/shared/home-shared/SectionHeading";
import Image from "next/image";
import React from "react";

export default function NursingPlannerSection() {
  return (
    <div className="bg-[#F1F5F9] my-12 min-h-screen flex justify-center items-center ">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-12">
        <SectionHeading
          title="Nursing School Planner & Calendar"
          subtitle="Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id."
        />
        <div className="flex justify-center lg:justify-end items-center">
          <Image
            src={"/assets/home-images/Devices.png"}
            alt={"Devices"}
            width={454}
            height={575}
            className="h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
}
