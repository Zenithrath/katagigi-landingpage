import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {desc ? <p className="mt-3 leading-relaxed text-slate-600">{desc}</p> : null}
    </Reveal>
  );
}
