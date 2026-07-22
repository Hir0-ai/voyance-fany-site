import { IconShield, IconAura, IconEye } from "./icons";

const badges = [
  {
    icon: <IconEye className="h-7 w-7" />,
    title: "Avis vérifiés",
    description: "De nombreux retours positifs sur Google et Pages Jaunes.",
  },
  {
    icon: <IconShield className="h-7 w-7" />,
    title: "Confidentialité",
    description: "Chaque échange reste strictement privé et respectueux.",
  },
  {
    icon: <IconAura className="h-7 w-7" />,
    title: "Écoute bienveillante",
    description: "Un accompagnement sans jugement, à votre rythme.",
  },
];

export default function Trust() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16">
      <div className="glass-panel grid gap-8 rounded-3xl p-8 sm:grid-cols-3 sm:p-10">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-start gap-4">
            <div className="text-gold-light">{badge.icon}</div>
            <div>
              <h3 className="font-display text-lg">{badge.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/search?q=Fany+Voyance+Saint-Jacques-de-la-Lande+avis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold-light underline decoration-[var(--border-soft)] underline-offset-4 hover:text-gold"
        >
          Voir les avis sur Google &rarr;
        </a>
      </div>
    </section>
  );
}
