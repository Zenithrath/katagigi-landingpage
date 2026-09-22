import { CalendarDays } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { doctors } from "@/data/content";

export default function Dokter() {
  return (
    <section id="dokter" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="List Dokter"
          title="Ditangani dokter teliti dan komunikatif"
          desc="Kenali tim dokter kami — jadwal praktik tercantum agar kamu bisa pilih waktu yang pas."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 80}>
              <article className="overflow-hidden rounded-[22px] border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <img src={d.photo} alt={d.name} className="h-64 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-sm font-extrabold text-slate-900">{d.name}</h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">{d.role}</p>
                  <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    <CalendarDays className="h-3.5 w-3.5 text-emerald-600" />
                    {d.schedule}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
