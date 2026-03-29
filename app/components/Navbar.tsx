"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

function Dropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label} <span className="text-slate-400">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  const discoverItems: Item[] = [
    { href: "/about", label: "Qui sommes-nous" },
    { href: "/missions", label: "Nos missions" },
    { href: "/actions", label: "Nos actions" },
    { href: "/investment", label: "Investissement & infrastructures" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo + texte (tout cliquable) */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/hero/logo.png"
            alt="DAC – Diaspora Afrique Congo"
            width={150}
            height={150}
            className="object-contain"
            priority
          />
          <span className="font-semibold leading-tight">
            Diaspora Afrique <span className="text-slate-500">Congo</span>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Accueil
          </Link>

          <Dropdown label="Découvrir" items={discoverItems} />

          <Link
            href="/support"
            className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Nous soutenir
          </Link>

          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-expanded={mobile}
        >
          ☰
        </button>
      </div>

      {mobile && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-3">
            <Link
              className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100"
              href="/"
              onClick={() => setMobile(false)}
            >
              Accueil
            </Link>

            <div className="rounded-xl border border-slate-200 p-2">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Découvrir
              </div>
              {discoverItems.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  onClick={() => setMobile(false)}
                >
                  {it.label}
                </Link>
              ))}
            </div>

            <Link
              className="block rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
              href="/support"
              onClick={() => setMobile(false)}
            >
              Nous soutenir
            </Link>

            <Link
              className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              href="/contact"
              onClick={() => setMobile(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
