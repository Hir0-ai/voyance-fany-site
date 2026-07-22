import { IconHouse, IconPhone, IconAura } from "./icons";

const steps = [
  {
    icon: <IconHouse className="h-7 w-7" />,
    title: "En cabinet",
    description:
      "À Saint-Jacques-de-la-Lande, dans un cadre calme et discret propice à l'écoute et à la confiance.",
  },
  {
    icon: <IconPhone className="h-7 w-7" />,
    title: "Par téléphone",
    description: "Où que vous soyez, une consultation à distance tout aussi précise et personnalisée.",
  },
  {
    icon: <IconAura className="h-7 w-7" />,
    title: "En visio",
    description: "Un échange en visioconférence pour garder un contact visuel et une proximité rassurante.",
  },
];

export default function Deroulement() {
  return (
    <section id="deroulement" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="mb-12 max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-gold-light">Comment ça se passe</span>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">
          Trois façons de <span className="text-gradient-gold">vous accompagner</span>
        </h2>
        <p className="mt-4 text-ink-muted">
          Chaque consultation est adaptée à votre rythme et à vos besoins, dans la bienveillance et la
          confidentialité.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="glass-panel relative overflow-hidden rounded-2xl p-7">
            <span className="font-display absolute -right-2 -top-4 text-7xl text-white/5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative text-gold-light">{step.icon}</div>
            <h3 className="font-display relative mt-4 text-xl">{step.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
