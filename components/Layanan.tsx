import { Sparkles, ShieldCheck, Smile, Sun, Plus, Heart, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services, site } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="h-6 w-6" />,
  shield: <ShieldCheck className="h-6 w-6" />,
  smile: <Smile className="h-6 w-6" />,
  sun: <Sun className="h-6 w-6" />,
  plus: <Plus className="h-6 w-6" />,
  heart: <Heart className="h-6 w-6" />,
};

export default function Layanan() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Perawatan gigi lengkap dengan sentuhan personal"
          desc="Semua tindakan diawali konsultasi dan rencana perawatan transparan. Tidak ada biaya siluman."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 100}>
              <article className="group flex h-full flex-col rounded-[22px] border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-emerald-700">
                  {icons[s.icon]}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold text-emerald-700">{s.price}</span>
                  <a
                    href={site.phoneHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 transition-colors group-hover:text-emerald-700"
                  >
                    Tanya dulu <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
