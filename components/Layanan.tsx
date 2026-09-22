import { Stethoscope, ShieldCheck, Smile, Syringe, Baby, Crown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services, site } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  stethoscope: <Stethoscope className="h-6 w-6" />,
  shield: <ShieldCheck className="h-6 w-6" />,
  smile: <Smile className="h-6 w-6" />,
  syringe: <Syringe className="h-6 w-6" />,
  baby: <Baby className="h-6 w-6" />,
  crown: <Crown className="h-6 w-6" />,
};

export default function Layanan() {
  return (
    <section id="layanan" className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Sama seperti di dashboard — 6 poli spesialis"
          desc="Kategori dan harga selaras dengan sistem klinik KataGigi. Estimasi pasti selalu dijelaskan sebelum tindakan — tanpa biaya siluman."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.code} delay={(i % 3) * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-900/10 hover:ring-emerald-200">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-teal-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 text-white shadow-lg shadow-emerald-600/25">
                    {icons[s.icon]}
                  </span>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold tracking-widest text-emerald-700 ring-1 ring-emerald-100">
                    {s.code}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-slate-900">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                <ul className="mt-5 flex-1 space-y-3 border-t border-dashed border-slate-200 pt-5">
                  {s.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-3 text-sm">
                      <span className="font-semibold text-slate-700">{item.name}</span>
                      <span className="shrink-0 text-[13px] font-extrabold text-emerald-700">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${site.waNumber}?text=${encodeURIComponent(`Halo KataGigi, saya ingin tanya pricelist ${s.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-slate-400 transition-colors group-hover:text-emerald-700"
                >
                  Minta pricelist lengkap <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Harga di atas rentang dari pricelist klinik — hubungi admin untuk estimasi pasti sesuai kondisimu.{" "}
            <a href="#reservasi" className="font-bold text-emerald-700 hover:text-emerald-900">
              Konsultasi pertama gratis →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
