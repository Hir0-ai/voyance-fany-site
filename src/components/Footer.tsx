export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-soft)] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-muted sm:flex-row">
        <span className="font-display text-gold-light">Fany Voyance &amp; Énergéticienne</span>
        <span>12 rue Du Lieutenant Le Corfec, 35136 Saint-Jacques-de-la-Lande</span>
        <span>&copy; {new Date().getFullYear()} &mdash; Tous droits réservés</span>
      </div>
    </footer>
  );
}
