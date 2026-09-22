import { Star, ShieldCheck, Clock, CalendarCheck, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { heroImages, site } from "@/data/content";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-white pt-16">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-50" />
      <div className="pointer-events-none absolute -left-24 top-64 h-72 w-72 rounded-full bg-teal-50/60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-16">
        <Reveal>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
            <Star className="h-3.5 w-3.5 fill-emerald-500 text-emerald-500" />
            Rating 4.9 dari 2.300+ ulasan pasien
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
            Perawatan Gigi untuk{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Senyum Cerah
            </span>
          </h1>
          <p className="mt-4 max-w-lg leading-relaxed text-slate-600">
            {site.name} menyediakan layanan lengkap — scaling, tambal, behel,
            bleaching, hingga gigi anak — dengan dokter teliti, klinik nyaman,
            dan reservasi semudah chat WhatsApp.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#reservasi"
              className="btn-shiny-emerald inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white"
            >
              <CalendarCheck className="h-4 w-4" />
              Reservasi Sekarang
            </a>
            <a
              href={site.phoneHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Dokter bersertifikat
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-emerald-600" />
              {site.hours}
            </span>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroImages.main}
              alt="Perawatan gigi modern di KataGigi"
              className="h-72 w-full rounded-[22px] object-cover shadow-lg sm:h-96"
              loading="eager"
            />
            <img
              src={heroImages.secondary}
              alt="Dokter gigi KataGigi merawat pasien"
              className="mt-8 h-72 w-full rounded-[22px] object-cover shadow-lg sm:h-96"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 w-[92%] max-w-sm -translate-x-1/2 rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 font-extrabold text-white">
                4
              </span>
              <div>
                <p className="text-sm font-extrabold text-slate-900">4 Cabang Siap Melayani</p>
                <p className="text-xs text-slate-500">Banjarmasin · Banjarbaru · Martapura</p>
              </div>
              <a href="#cabang" className="ml-auto text-xs font-bold text-emerald-700 hover:text-emerald-900">
                Lihat →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
