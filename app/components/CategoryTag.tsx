const categoryColors: Record<string, string> = {
  Fundamentals: "bg-blue-50 text-accent border-blue-100",
  Models: "bg-slate-100 text-ink-soft border-border",
  Practice: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Opinion: "bg-amber-50 text-amber-700 border-amber-100",
  Research: "bg-purple-50 text-purple-700 border-purple-100",
};

interface CategoryTagProps {
  category: string;
  size?: "sm" | "md";
}

export default function CategoryTag({ category, size = "sm" }: CategoryTagProps) {
  const colors = categoryColors[category] ?? "bg-slate-100 text-ink-soft border-border";
  const textSize = size === "md" ? "text-xs" : "text-[0.65rem]";

  return (
    <span
      className={`
        inline-block font-sans font-600 uppercase tracking-widest border
        px-2.5 py-0.5 ${textSize} ${colors}
      `}
      style={{ letterSpacing: "0.12em" }}
    >
      {category}
    </span>
  );
}
