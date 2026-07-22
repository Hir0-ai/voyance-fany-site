import { IconMoonPhase } from "./icons";

// Texte de présentation réécrit à partir du site existant — à faire relire et
// valider par Fany avant mise en ligne (dates, parcours, détails personnels).
export default function About() {
  return (
    <section id="a-propos" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
          <div
            className="absolute inset-0 rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, rgba(203,161,92,0.35), rgba(21,12,41,0.9) 65%)",
            }}
          />
          <div className="absolute inset-3 rounded-full border border-[var(--border-soft)]" />
          <div className="absolute inset-8 rounded-full border border-dashed border-[var(--border-soft)]" />
          <IconMoonPhase className="relative h-20 w-20 text-gold-light" />
          <span className="absolute bottom-3 rounded-full bg-[var(--bg-void)]/70 px-3 py-1 text-[11px] text-ink-muted">
            Portrait à venir
          </span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-gold-light">À propos de Fany</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Une écoute <span className="text-gradient-gold">sincère</span>, un don transmis depuis
            l&apos;adolescence
          </h2>
          <div className="mt-5 space-y-4 text-ink-muted">
            <p>
              Depuis l&apos;adolescence, je ressens et j&apos;interprète ce que les autres ne perçoivent
              pas toujours &mdash; des intuitions qui se sont affinées avec le temps pour devenir un
              accompagnement au service des autres.
            </p>
            <p>
              Clairvoyante, clairaudiente et énergéticienne, j&apos;utilise les oracles, les tarots et le
              pendule pour éclairer vos questions du quotidien et vous offrir des pistes concrètes,
              à court comme à long terme.
            </p>
            <p>
              Mon approche est avant tout humaine&nbsp;: chaque consultation se construit autour de
              votre histoire, dans le respect, la confidentialité et la bienveillance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
