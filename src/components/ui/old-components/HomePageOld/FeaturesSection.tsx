import { features } from "@/data/featureData";
import { FolderIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              {/* Icon with dashed border */}
              {/* Icon with dashed border */}
              <div className="relative mb-6 flex justify-center">
                <div
                  className={`w-20 h-20 ${feature.iconBg} rounded-full flex items-center justify-center relative z-10`}
                >
                  <FolderIcon className="w-8 h-8 text-white" />
                </div>
                {/* Dashed border circle */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed ${feature.borderColor} rounded-full`}
                ></div>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-[#0F172A] mb-4">
                {feature.title}
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
