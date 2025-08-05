import FeatureBlock from "@/components/shared/home-shared/FeatureBlock";
import SecondaryHeading from "@/components/shared/home-shared/SecondaryHeading";
import Image from "next/image";

export default function NCLEXSection() {
  return (
    <section className="my-20 container p-4 mx-auto">
      <SecondaryHeading
        title="NCLEX-Style Question Bank"
        subtitle="Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin
        at velit, blandit tempus nunc in."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className=" flex justify-center lg:justify-start">
          <Image
            src="/assets/home-images/nclex-img.png"
            alt="NCLEX"
            width={640}
            height={627}
            className="w-auto h-auto object-cover "
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <FeatureBlock
            features={[
              "Practice with a comprehensive bank of questions that mirror the real exam — complete with detailed rationales and adaptive difficulty levels.",
              "Habitant integer interdum a",
              "Tempus natoque id ",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
