import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const points = [
  "Dokter umum + spesialis (konservasi, ortodonti, gigi anak)",
  "Sterilisasi standar klinik dengan alat modern",
  "Harga transparan — estimasi dijelaskan sebelum tindakan",
  "Reminder kontrol otomatis via WhatsApp",
];

export default function Tentang() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1674775372047-27fb6492c9a2?q=80&w=900&auto=format&fit=crop"
            alt="Suasana klinik KataGigi"
            className="h-72 w-full rounded-[22px] object-cover shadow-lg sm:h-96"
            loading="lazy"
          />
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Tentang Kami"
            title="Klinik gigi keluarga yang nyaman dan tanpa drama"
            desc="KataGigi hadir dengan empat cabang yang siap melayani perawatan gigi lengkap — dari anak hingga lansia — dengan pendekatan yang ramah dan minim nyeri."
          />
          <Reveal delay={120}>
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href="#layanan"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-900"
            >
              Lihat semua layanan <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
