"use client";

import { useState } from "react";
import { CalendarCheck, MessageCircle, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/content";

export default function CtaBooking() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState("Konsultasi & scaling");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo KataGigi, saya ${name || "pasien baru"}. Saya ingin reservasi: ${need}. Mohon info jadwal tersedia. Terima kasih.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="reservasi" className="scroll-mt-20 bg-white pb-16 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="card-shiny-emerald relative grid gap-8 overflow-hidden rounded-[28px] p-8 sm:p-10 lg:grid-cols-2 lg:p-12">
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/5" />

            <div className="relative">
              <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Segera Periksa — jangan tunda senyum sehatmu
              </h2>
              <p className="mt-3 leading-relaxed text-emerald-50">
                Isi form singkat, kami teruskan ke WhatsApp admin. Balasan cepat di jam
                operasional {site.hours}.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
                >
                  <MessageCircle className="h-4 w-4" /> Chat Admin
                </a>
                <span className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white">
                  <CalendarCheck className="h-4 w-4" /> Konsultasi pertama gratis
                </span>
              </div>
            </div>

            <form onSubmit={submit} className="relative rounded-[22px] bg-white p-6 shadow-xl">
              <label className="block text-xs font-bold text-slate-700" htmlFor="nama">
                Nama
              </label>
              <input
                id="nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="cth. Putri Anjani"
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <label className="mt-4 block text-xs font-bold text-slate-700" htmlFor="kebutuhan">
                Kebutuhan perawatan
              </label>
              <select
                id="kebutuhan"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              >
                <option>Konsultasi &amp; scaling</option>
                <option>Tambal gigi</option>
                <option>Behel / aligner</option>
                <option>Bleaching / veneer</option>
                <option>Gigi anak</option>
                <option>Sakit gigi darurat</option>
              </select>
              <button
                type="submit"
                className="btn-shiny-emerald mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white"
              >
                <CalendarCheck className="h-4 w-4" />
                Booking via WhatsApp
              </button>
              {sent && (
                <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Membuka WhatsApp — admin kami akan membalas secepatnya.
                </p>
              )}
              <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
                Dengan menekan tombol di atas, kamu setuju dihubungi admin KataGigi untuk
                penjadwalan. Tanpa spam.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
