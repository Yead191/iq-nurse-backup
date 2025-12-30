import React from "react";
import { typesOfCalculationData } from "@/data/dosage-calculation/typesOfCalculationData";
import {
  Lightbulb,
  AlertTriangle,
  Gem,
  Star,
  CheckCircle2,
  Info,
} from "lucide-react";
import SecondaryHeader from "@/components/shared/SecondaryHeader";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "lightbulb":
      return <Lightbulb className="w-5 h-5 text-yellow-500 fill-yellow-50" />;
    case "alert":
      return <AlertTriangle className="w-5 h-5 text-red-600" />;
    case "gem":
      return <Gem className="w-5 h-5 text-purple-600" />;
    case "star":
      return <Star className="w-5 h-5 text-amber-500 fill-amber-50" />;
    default:
      return <Info className="w-5 h-5 text-blue-500" />;
  }
};

const formatText = (text: string) => {
  const parts = text.split(
    /(\b(?:Order|Available|Calculate|Answer|Step \d -|Tubing|Instructions|Calculate concentration|Calculate rate|Calculate dose|Convert to mg|Calculate volume|Patient intake|Breakfast|Lunch|IV|Coffee|Juice|Water|Soup|Milk|Total Intake|maximum injection volumes|Safety Check|NCLEX-RN|NCLEX-RN Critical Point|NCLEX-RN Essential|Safe Dose Range Verification|Patient weight|Convert weight|•)\b:?)/gi
  );

  return parts.map((part, i) => {
    const lowerPart = part.toLowerCase();
    const isLabel =
      lowerPart.includes(":") ||
      lowerPart.startsWith("step") ||
      lowerPart.startsWith("•");

    if (isLabel) {
      return (
        <span key={i} className="font-bold">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function TypesOfCalculation() {
  return (
    <div>
      {/* Main Title Box */}
      <SecondaryHeader title={typesOfCalculationData.title} />

      <div className=" mx-auto space-y-6">
        {typesOfCalculationData.sections.map((section) => (
          <section
            key={section.id}
            className="bg-[#F8F9FA] rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#8e24aa] mb-2 tracking-tight">
                {section.title}
              </h2>
              {section.description && (
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
                  {section.description}
                </p>
              )}
            </div>

            <div
              className={`grid gap-6 ${
                section.layout === "grid"
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {section.boxes.map((box, bIdx) => {
                // Determine box styling based on type
                let boxStyles = "";
                let headerStyles = "";
                let contentStyles = "";

                switch (box.type) {
                  case "example":
                    boxStyles =
                      "bg-[#e9f5e9] border border-[#d1e7cf] text-[#2e7d32]";
                    headerStyles = "text-[#2e7d32] font-bold";
                    contentStyles = "text-slate-700";
                    break;
                  case "formula":
                    boxStyles =
                      "bg-[#d6eafb] border border-[#aed3f2] p-8 md:p-10 flex flex-col items-center justify-center text-center";
                    headerStyles =
                      "text-[#1565c0] text-sm uppercase tracking-widest mb-4 opacity-80";
                    contentStyles =
                      "text-[#1565c0] font-bold text-xl md:text-2xl leading-tight";
                    break;
                  case "alert":
                    boxStyles =
                      "bg-[#ffebee] border border-[#ffcdd2] text-[#c62828]";
                    headerStyles =
                      "text-[#c62828] font-bold uppercase tracking-wider flex items-center gap-2";
                    contentStyles = "text-[#d32f2f] leading-relaxed";
                    break;
                  case "pearl":
                    boxStyles =
                      "bg-[#f3e5f5] border border-[#e1bee7] text-[#7b1fa2]";
                    headerStyles =
                      "text-[#7b1fa2] font-bold uppercase tracking-wider flex items-center gap-2";
                    contentStyles = "text-[#6a1b9a] leading-relaxed";
                    break;
                  case "list":
                    boxStyles =
                      "bg-[#fff8e1] border border-[#ffecb3] text-[#5d4037]";
                    headerStyles = "text-[#795548] font-bold mb-4";
                    contentStyles = "text-[#5d4037]";
                    break;
                  case "highlight":
                    boxStyles =
                      "bg-[#fff9c4] border border-[#fbc02d] text-[#5d4037]";
                    headerStyles =
                      "text-[#ef6c00] font-bold uppercase tracking-wider flex items-center gap-2";
                    contentStyles = "text-[#5d4037] leading-relaxed";
                    break;
                }

                return (
                  <div
                    key={bIdx}
                    className={`rounded-xl p-6 transition-all duration-300 hover:shadow-md ${boxStyles} ${
                      section.layout === "grid" && box.type !== "example"
                        ? "md:col-span-2"
                        : ""
                    }`}
                  >
                    {box.type !== "formula" && (
                      <div
                        className={`flex items-start gap-3 mb-4 ${headerStyles}`}
                      >
                        {box.icon && (
                          <span className="mt-0.5">{getIcon(box.icon)}</span>
                        )}
                        <h3 className="text-base md:text-lg tracking-tight">
                          {box.title}
                        </h3>
                      </div>
                    )}

                    {box.type === "formula" && (
                      <div className={headerStyles}>{box.title}</div>
                    )}

                    <div className={`space-y-2 ${contentStyles}`}>
                      {box.type === "list" ? (
                        <ul className="space-y-3">
                          {box.content.map((line, lIdx) => (
                            <li
                              key={lIdx}
                              className="flex gap-3 text-sm md:text-[15px]"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-40 shrink-0" />
                              <span className="leading-relaxed">
                                {formatText(line)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        box.content.map((line, lIdx) => (
                          <div
                            key={lIdx}
                            className={`text-sm md:text-[15px] leading-relaxed ${
                              box.type === "formula" ? contentStyles : ""
                            }`}
                          >
                            {formatText(line)}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
