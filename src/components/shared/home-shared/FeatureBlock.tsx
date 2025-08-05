import React from "react";

interface FeatureBlockProps {
  features: string[];
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* First item - blue highlighted description */}
      <div className="border-l-3 border-[#2563EB] pl-6">
        <p className="text-[#7B7B7B] text-base leading-relaxed mb-0">
          {features[0]}
        </p>
      </div>

      {/* Remaining items - gray bordered features */}
      <div className="space-y-4">
        {features?.slice(1).map((feature, index) => (
          <div key={index} className="border-l-4 border-[#CBD5E1] pl-6">
            <p className="text-gray-900 font-semibold text-base">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBlock;
