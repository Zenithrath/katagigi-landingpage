"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { nav, site } from "@/data/content";

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
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="KataGigi" className="h-9 w-9 rounded-xl bg-white p-0.5" />
            <span className="text-base font-extrabold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Klinik gigi modern untuk keluarga — perawatan lengkap, dokter teliti, harga
            transparan.
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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-emerald-600"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Menu footer">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Menu</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm lg:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-slate-400 transition-colors hover:text-emerald-300">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">Kontak</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {site.address}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-emerald-300">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-emerald-300">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" /> {site.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
            Info &amp; Promo
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Daftarkan email untuk tips gigi sehat dan promo scaling tiap bulan.
          </p>
          <form
            className="mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <div className="flex overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 focus-within:ring-emerald-500">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email kamu"
                aria-label="Email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Berlangganan"
                className="btn-shiny-emerald flex items-center gap-1.5 px-4 text-sm font-bold text-white"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {subscribed && (
              <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Terdaftar! Cek inbox untuk promo pertama.
              </p>
            )}
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. Semua hak dilindungi.</p>
          <p>Dibuat dengan teliti untuk senyum Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
