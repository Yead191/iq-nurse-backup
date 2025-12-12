import React from "react";

export default function FeatureCard({
  index,
  item,
  Icon,
}: {
  index: number;
  item: {
    title: string;
    description: string;
    iconColor: string;
  };
  Icon: any;
}) {
  return (
    <div
      key={index}
      className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 border border-[#1e293b] hover:border-[#33dfe5]/30 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-[#008fff] flex items-center justify-center p-3">
          <Icon
            className="w-full h-full"
            style={{ color: item.iconColor }}
            fill="currentColor"
            fillOpacity={0.2}
          />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>

      <p className="text-gray-400 leading-relaxed text-lg">
        {item.description}
      </p>
    </div>
  );
}
