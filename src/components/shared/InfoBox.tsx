import type { LucideIcon } from "lucide-react";

export interface InfoBoxData {
  title?: string;
  defaultColor: string;
  Icon: LucideIcon;
  features: string[];
  description?: string;
}

interface InfoBoxProps {
  data: InfoBoxData;
  className?: string;
}

export function InfoBox({ data, className = "" }: InfoBoxProps) {
  const { title, defaultColor, Icon, features, description } = data;

  const formatFeature = (text: string) => {
    // bold formating
    if (text.trim().startsWith('"')) {
      const lastQuoteIndex = text.lastIndexOf('"');
      if (lastQuoteIndex > 0) {
        const quoted = text.substring(0, lastQuoteIndex + 1);
        const remainder = text.substring(lastQuoteIndex + 1);
        return (
          <>
            <span className="font-bold">{quoted}</span>
            {remainder}
          </>
        );
      }
    }

    // Check for colon
    if (text.includes(":")) {
      const [boldPart, ...rest] = text.split(":");
      return (
        <>
          <span className="font-bold">{boldPart}:</span>
          {rest.join(":")}
        </>
      );
    }

    return text;
  };

  return (
    <div
      className={`border-l-4 rounded-xl p-6 mb-8 ${className}`}
      style={{
        borderColor: defaultColor,
        backgroundColor: `color-mix(in srgb, ${defaultColor} 20%, transparent)`,
      }}
    >
      {title && (
        <div
          className="flex items-center gap-2 mb-3"
          style={{ color: defaultColor }}
        >
          <Icon className="w-5 h-5" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      )}

      {description && (
        <p className="text-slate-700 mb-4 text-sm leading-relaxed">
          {description}
        </p>
      )}

      <ul className="space-y-2.5">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-slate-700 flex gap-2">
            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-black" />
            <span>{formatFeature(feature)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
