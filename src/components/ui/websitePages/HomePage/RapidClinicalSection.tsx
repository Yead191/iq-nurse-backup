import SectionHeading from "@/components/shared/home-shared/SectionHeading";
import Image from "next/image";
import React from "react";

export default function RapidClinicalSection() {
  return (
    <section className="bg-[#F1F5F9] my-12">
      <div className="container mx-auto py-12 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen justify-center items-center">
        {/* left content */}
        <SectionHeading
          title="Rapid Clinical Reference Tools"
          subtitle="Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id."
        />
        <div className="flex justify-end items-center">
          <Image
            src={"/assets/home-images/rapid-img.png"}
            width={454}
            height={575}
            alt="rapid-img"
            className="h-auto w-auto"
          />
        </div>
      </div>
    </section>
  );
}
