import { MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { branches } from "@/data/content";

export default function Cabang() {
  return (
    <section id="cabang" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Cabang"
          title="Empat cabang dekat denganmu"
          desc="Pilih cabang terdekat — semua cabang punya standar pelayanan dan harga yang sama."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((b, i) => (
            <Reveal key={b.name} delay={(i % 4) * 80}>
              <article
                className={`flex h-full flex-col rounded-[22px] border p-6 ${
                  b.main
                    ? "card-shiny-emerald border-transparent"
                    : "border-slate-100 bg-white shadow-sm"
                }`}
              >
                {b.main && (
                  <span className="mb-3 inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold text-white">
                    Cabang Utama
                  </span>
                )}
                <h3 className={`text-sm font-extrabold ${b.main ? "text-white" : "text-slate-900"}`}>
                  {b.name}
                </h3>
                <p className={`mt-2 flex items-start gap-1.5 text-xs leading-relaxed ${b.main ? "text-emerald-50" : "text-slate-600"}`}>
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                  {b.address}
                </p>
                <p className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${b.main ? "text-emerald-50" : "text-slate-600"}`}>
                  <Clock className="h-3.5 w-3.5" />
                  {b.hours}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
