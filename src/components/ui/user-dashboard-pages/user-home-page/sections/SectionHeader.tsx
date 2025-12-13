type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeader({ title, subtitle, className }: Props) {
  return (
    <div
      className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}
    >
      <h2 className="text-[16px] lg:text-[18px] font-semibold text-[#000000]">{title}</h2>
      {subtitle ? <p className="text-xs text-neutral-500">{subtitle}</p> : null}
    </div>
  );
}
