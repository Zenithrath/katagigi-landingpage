import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimoni() {
  return (
    <section id="testimoni" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimoni"
          title="Cerita senyum pasien kami"
          desc="Pelayanan ramah, dokter sangat teliti dan hasil perawatan memuaskan — kata mereka, bukan kata kami."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm">
                <Quote className="h-7 w-7 text-emerald-200" />
                <div className="mt-2 flex gap-0.5" aria-label="Rating 5 dari 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm font-extrabold text-slate-900">{t.name}</p>
                  <p className="text-xs font-semibold text-emerald-700">{t.treatment}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
