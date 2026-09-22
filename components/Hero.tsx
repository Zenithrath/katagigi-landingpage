import { Star, ShieldCheck, Clock, CalendarCheck, MessageCircle, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import { doctors, heroImages, site } from "@/data/content";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-white">
      {/* Mesh gradient modern */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-white" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-emerald-200/60 to-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-48 top-72 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-teal-100/60 to-emerald-50/40 blur-3xl" />
      <div className="bg-dots pointer-events-none absolute inset-x-0 top-0 h-72 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 text-xs font-bold text-slate-700 ring-1 ring-slate-200/80 shadow-sm">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-extrabold text-white">
              <Star className="h-3 w-3 fill-white" /> 4.9
            </span>
            dari 2.300+ ulasan pasien
          </span>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tighter text-slate-900 sm:text-6xl">
            Senyum cerah
            <br />
            dimulai dari{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              gigi sehat
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
            {site.name} melayani 6 poli — umum, konservasi, behel, bedah mulut,
            gigi anak, hingga gigi palsu — dengan harga sesuai pricelist klinik
            dan reservasi semudah chat.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#reservasi"
              className="btn-shiny-emerald inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-white"
            >
              <CalendarCheck className="h-4 w-4" />
              Reservasi Sekarang
            </a>
            <a
              href={site.phoneHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-800 ring-1 ring-slate-200 transition-all hover:ring-emerald-300 hover:text-emerald-800 shadow-sm"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              Chat WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2.5">
              <span className="flex -space-x-2.5">
                {doctors.slice(0, 4).map((d) => (
                  <img
                    key={d.name}
                    src={d.photo}
                    alt={d.name}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    loading="lazy"
                  />
                ))}
              </span>
              <span className="text-xs font-semibold leading-tight text-slate-500">
                <span className="block text-sm font-extrabold text-slate-900">25.000+ pasien</span>
                senyumnya dirawat di sini
              </span>
            </span>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-slate-500">
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
          <div className="relative grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-emerald-900/15 ring-1 ring-slate-900/5">
              <img
                src={heroImages.main}
                alt="Perawatan gigi modern di KataGigi"
                className="h-72 w-full object-cover sm:h-[26rem]"
                loading="eager"
              />
            </div>
            <div className="mt-10 overflow-hidden rounded-[2rem] shadow-2xl shadow-emerald-900/15 ring-1 ring-slate-900/5">
              <img
                src={heroImages.secondary}
                alt="Dokter gigi KataGigi merawat pasien"
                className="h-72 w-full object-cover sm:h-[26rem]"
                loading="eager"
              />
            </div>

            {/* Badge melayang: slot hari ini */}
            <div className="animate-float absolute -left-2 top-8 rounded-2xl bg-white/90 p-3.5 shadow-xl ring-1 ring-slate-900/5 backdrop-blur sm:-left-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-slate-900">Slot hari ini</span>
                  <span className="block text-xs font-semibold text-emerald-700">6 jadwal tersisa</span>
                </span>
              </div>
            </div>

            {/* Badge melayang: cabang */}
            <div className="animate-float-slow absolute -bottom-4 right-2 rounded-2xl bg-white/90 p-3.5 shadow-xl ring-1 ring-slate-900/5 backdrop-blur sm:-right-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-base font-extrabold text-white">
                  4
                </span>
                <span>
                  <span className="block text-sm font-extrabold text-slate-900">Cabang klinik</span>
                  <a href="#cabang" className="block text-xs font-bold text-emerald-700 hover:text-emerald-900">
                    Lihat lokasi →
                  </a>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
