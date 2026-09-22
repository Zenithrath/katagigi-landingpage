"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, CalendarCheck } from "lucide-react";
import { nav, site } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <header
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled || open
            ? "bg-white/85 shadow-xl shadow-slate-900/[0.07] ring-1 ring-slate-900/5 backdrop-blur-xl"
            : "bg-white/60 ring-1 ring-white/60 backdrop-blur-lg"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <a href="#beranda" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="KataGigi" className="h-9 w-9 rounded-xl bg-white p-0.5 ring-1 ring-emerald-100" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-slate-900">
                {site.name}
              </span>
              <span className="block text-[11px] font-semibold text-emerald-700">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navigasi utama">
            {nav.slice(0, 7).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={site.phoneHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" />
              Chat
            </a>
            <a
              href="#reservasi"
              className="btn-shiny-emerald inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold text-white"
            >
              <CalendarCheck className="h-4 w-4" />
              Reservasi
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-100 px-4 pb-5 pt-2 lg:hidden">
            <nav className="grid gap-1" aria-label="Navigasi seluler">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={site.phoneHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 px-4 py-2.5 text-sm font-bold text-emerald-800"
              >
                <MessageCircle className="h-4 w-4" /> Chat
              </a>
              <a
                href="#reservasi"
                onClick={() => setOpen(false)}
                className="btn-shiny-emerald inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-white"
              >
                <CalendarCheck className="h-4 w-4" /> Reservasi
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
