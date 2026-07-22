import Reveal from "./Reveal";

const plans = [
  {
    title: "Voyance & Cartomancie",
    price: "20€ – 60€",
    detail: "Selon la durée et le type de consultation (cabinet, téléphone, visio).",
    highlight: false,
  },
  {
    title: "Soins du stress & douleurs",
    price: "35€ – 50€",
    detail: "Un rééquilibrage énergétique ciblé sur vos besoins du moment.",
    highlight: true,
  },
  {
    title: "Reiki",
    price: "70€ / h",
    detail: "Imposition des mains pour harmoniser votre énergie vitale.",
    highlight: false,
  },
  {
    title: "Nettoyage énergétique de lieux",
    price: "150€",
    detail: "Purification complète d'un espace de vie ou professionnel.",
    highlight: false,
  },
  {
    title: "Protections",
    price: "200€",
    detail: "Un soin protecteur durable pour vous et votre entourage.",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mb-12 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-gold-light">Tarifs</span>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">
          Des prestations <span className="text-gradient-gold">claires et transparentes</span>
        </h2>
        <p className="mt-4 text-ink-muted">
          Les tarifs ci-dessous sont indicatifs&nbsp;: ils sont confirmés lors de la prise de
          rendez-vous selon vos besoins.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <Reveal key={plan.title} delay={index * 90}>
            <div
              className={`rounded-2xl p-7 ${
                plan.highlight
                  ? "border border-gold bg-gradient-to-b from-[var(--gold)]/10 to-transparent"
                  : "glass-panel"
              }`}
            >
              <h3 className="font-display text-lg text-ink">{plan.title}</h3>
              <p className="text-gradient-gold font-display mt-3 text-3xl">{plan.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{plan.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
