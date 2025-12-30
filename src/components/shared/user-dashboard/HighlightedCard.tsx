interface HighlightedCardProps {
  title?: string;
  focusLabel?: string;
  content: string;
  className?: string;
}

/**
 * A reusable highlight component built with Tailwind CSS.
 * Replicates the NCLEX-RN highlight box with an amber gradient and precise typography.
 */
export function HighlightedCard({
  title = "NCLEX-RN HIGHLIGHT",
  focusLabel = "NCLEX-RN Testing Focus:",
  content,
  className = "",
}: HighlightedCardProps) {
  return (
    <div className={`w-full rounded-xl p-5 shadow-sm md:p-6 my-4 ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Header with Star Icon and Title */}
        <div className="flex items-center gap-2">
          {/* <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> */}
          <span className="text-[13px] font-bold tracking-wide uppercase text-red-600">
            {title}
          </span>
        </div>

        {/* Main Content Area */}
        <p className="m-0 text-[15px] leading-relaxed text-gray-800">
          <span className="mr-1.5 font-bold text-gray-900">{focusLabel}</span>
          {content}
        </p>
      </div>
    </div>
  );
}
