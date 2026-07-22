import { IconEye } from "./icons";

export default function Hero() {
  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold-light">
            Saint-Jacques-de-la-Lande &middot; 35136
          </span>

          <h1 className="font-display mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Éclairez votre chemin avec
            <span className="block text-gradient-gold">Fany, voyante &amp; énergéticienne</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Clairvoyance, cartomancie et soins énergétiques, dans l&apos;écoute et la bienveillance.
            Consultations en cabinet, par téléphone ou en visio, pour vous accompagner vers plus de clarté et de sérénité.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-7 py-3.5 font-semibold text-[#241606] transition-transform hover:scale-105"
            >
              Prendre rendez-vous
            </a>
            <a
              href="#voyance"
              className="rounded-full border border-[var(--border-soft)] px-7 py-3.5 text-ink transition-colors hover:border-gold hover:text-gold-light"
            >
              Découvrir les services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-muted">
            <span>Cabinet &middot; Téléphone &middot; Visio</span>
            <span>Lun&ndash;Ven 9h&ndash;19h &middot; Sam 9h&ndash;12h</span>
          </div>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-[var(--border-soft)]" />
          <div className="absolute inset-6 rounded-full border border-[var(--border-soft)]" />
          <div
            className="animate-float-slow absolute inset-10 rounded-full opacity-90"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.35), rgba(155,135,217,0.25) 40%, rgba(203,161,92,0.18) 70%, transparent 80%)",
              boxShadow: "0 0 80px 10px rgba(155,135,217,0.25), inset 0 0 60px rgba(203,161,92,0.2)",
            }}
          />
          <IconEye className="relative h-16 w-16 text-gold-light opacity-80" />
        </div>
      </div>
    </section>
  );
}
