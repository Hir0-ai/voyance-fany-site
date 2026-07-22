"use client";

import { useState } from "react";
import { IconPhone, IconMail, IconPin, IconClock } from "./icons";

const ADDRESS = "12 rue Du Lieutenant Le Corfec, 35136 Saint-Jacques-de-la-Lande";
const EMAIL = "35fanyvoyance@gmail.com";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Nom : ${name}\nTéléphone : ${phone}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Demande de rendez-vous — site internet"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-gold-light">Contact</span>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">
          Prenons <span className="text-gradient-gold">rendez-vous</span>
        </h2>
        <p className="mt-4 text-ink-muted">
          Par téléphone, par email ou via le formulaire ci-dessous, je vous réponds avec plaisir.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <form onSubmit={handleSubmit} className="glass-panel space-y-4 rounded-2xl p-7">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-ink-muted">
              Nom
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[var(--border-soft)] bg-white/5 px-4 py-2.5 text-ink outline-none focus:border-gold"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm text-ink-muted">
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-[var(--border-soft)] bg-white/5 px-4 py-2.5 text-ink outline-none focus:border-gold"
              placeholder="06 00 00 00 00"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-ink-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-[var(--border-soft)] bg-white/5 px-4 py-2.5 text-ink outline-none focus:border-gold"
              placeholder="Votre demande, vos disponibilités..."
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-6 py-3 font-semibold text-[#241606] transition-transform hover:scale-[1.02]"
          >
            Envoyer la demande
          </button>
        </form>

        <div className="flex flex-col gap-5">
          <div className="glass-panel space-y-5 rounded-2xl p-7">
            <a href="tel:0603636545" className="flex items-center gap-3 text-ink hover:text-gold-light">
              <IconPhone className="h-5 w-5 text-gold-light" /> 06 03 63 65 45
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-ink hover:text-gold-light">
              <IconMail className="h-5 w-5 text-gold-light" /> {EMAIL}
            </a>
            <div className="flex items-center gap-3 text-ink">
              <IconPin className="h-5 w-5 shrink-0 text-gold-light" /> {ADDRESS}
            </div>
            <div className="flex items-start gap-3 text-ink">
              <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
              <span>
                Lundi &ndash; Vendredi&nbsp;: 9h &ndash; 19h
                <br />
                Samedi&nbsp;: 9h &ndash; 12h
              </span>
            </div>
          </div>

          <div className="glass-panel overflow-hidden rounded-2xl">
            <iframe
              title="Localisation du cabinet"
              src={MAP_SRC}
              className="h-64 w-full grayscale invert-[0.92] contrast-[1.1] sm:h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
