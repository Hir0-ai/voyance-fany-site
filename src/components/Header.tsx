"use client";

import { useState } from "react";
import { IconPhone } from "./icons";

const links = [
  { href: "#voyance", label: "Voyance" },
  { href: "#soins", label: "Soins énergétiques" },
  { href: "#deroulement", label: "Consultations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--border-soft)] bg-[var(--bg-void)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#accueil" className="font-display text-xl tracking-wide text-gradient-gold">
          Fany <span className="text-ink">Voyance</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0603636545"
            className="flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 py-2 text-sm text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
          >
            <IconPhone className="h-4 w-4" />
            06 03 63 65 45
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-5 py-2 text-sm font-semibold text-[#241606] transition-transform hover:scale-105"
          >
            Prendre rendez-vous
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span className={`h-px w-7 bg-gold-light transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-gold-light transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-gold-light transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--border-soft)] bg-[var(--bg-void)] px-5 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-ink-muted hover:bg-white/5 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0603636545"
            className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] px-4 py-3 text-gold-light"
          >
            <IconPhone className="h-4 w-4" /> 06 03 63 65 45
          </a>
        </nav>
      )}
    </header>
  );
}
