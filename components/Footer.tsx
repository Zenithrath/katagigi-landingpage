"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { nav, services, site } from "@/data/content";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3H11v7h2.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M16.5 4c.4 2 1.8 3.4 3.9 3.6v3c-1.5 0-2.9-.5-3.9-1.3v6.1c0 3.4-2.6 5.6-5.7 5.6-3 0-5.3-2.2-5.3-5.1 0-3 2.5-5.2 5.7-5 0 .1.1 0 .3 0v3.1c-.2 0-.4 0-.6 0-1.3 0-2.3 1-2.3 2 0 1.1.9 2 2.1 2 1.3 0 2.2-1 2.2-2.5V4h3.6Z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        {/* Baris atas: brand + newsletter */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <a href="#beranda" className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt="KataGigi"
                className="h-10 w-10 rounded-2xl bg-white p-0.5 ring-1 ring-emerald-100"
              />
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight text-slate-900">
                  {site.name}
                </span>
                <span className="block text-xs font-semibold text-emerald-700">
                  {site.tagline}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              Klinik gigi modern untuk keluarga — 6 poli spesialis, dokter teliti,
              harga transparan sesuai pricelist klinik.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: <FacebookIcon />, label: "Facebook" },
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <TiktokIcon />, label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#beranda"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all hover:bg-emerald-600 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 ring-1 ring-emerald-100 sm:p-7">
            <h3 className="text-base font-extrabold tracking-tight text-slate-900">
              Tips gigi sehat + promo tiap bulan
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Daftarkan email — tanpa spam, berhenti kapan saja.
            </p>
            <form
              className="mt-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  aria-label="Email"
                  className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                />
                <button
                  type="submit"
                  aria-label="Berlangganan"
                  className="btn-shiny-emerald flex shrink-0 items-center gap-1.5 rounded-full px-5 text-sm font-bold text-white"
                >
                  Daftar <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4" /> Terdaftar! Cek inbox untuk promo pertama.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Kolom link */}
        <div className="mt-12 grid gap-8 border-t border-slate-100 pt-10 sm:grid-cols-3">
          <nav aria-label="Menu footer">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Jelajah
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-medium text-slate-600 transition-colors hover:text-emerald-700">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Layanan footer">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Layanan
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.code}>
                  <a href="#layanan" className="font-medium text-slate-600 transition-colors hover:text-emerald-700">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
              Hubungi Kami
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {site.address}
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 hover:text-emerald-700">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-600" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-emerald-700">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-600" /> {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-emerald-600" /> {site.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-100 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Semua hak dilindungi.</p>
          <p>Dibuat dengan teliti untuk senyum Indonesia.</p>
        </div>
      </div>

      {/* Watermark raksasa */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-6 bg-gradient-to-b from-emerald-100/70 to-emerald-50/0 bg-clip-text text-center text-[19vw] font-extrabold leading-none tracking-tighter text-transparent lg:-mb-10 lg:text-[13rem]">
          KataGigi
        </p>
      </div>
    </footer>
  );
}
