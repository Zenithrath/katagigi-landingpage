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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
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

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
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
            className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-800 transition-colors hover:bg-emerald-50"
          >
            <MessageCircle className="h-4 w-4" />
            Chat
          </a>
          <a
            href="#reservasi"
            className="btn-shiny-emerald inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold text-white"
          >
            <CalendarCheck className="h-4 w-4" />
            Reservasi
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-2 lg:hidden">
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
  );
}
