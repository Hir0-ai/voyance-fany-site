import { ReactNode } from "react";
import { IconEye, IconEar, IconCards, IconPendulum, IconAura, IconHouse, IconShield, IconHands } from "./icons";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
};

const voyanceServices: Service[] = [
  {
    icon: <IconEye className="h-8 w-8" />,
    title: "Clairvoyance",
    description: "Une lecture intuitive de votre situation présente pour éclairer vos choix de vie.",
  },
  {
    icon: <IconEar className="h-8 w-8" />,
    title: "Clairaudience",
    description: "Des messages perçus au-delà des mots, pour vous guider avec justesse et douceur.",
  },
  {
    icon: <IconCards className="h-8 w-8" />,
    title: "Cartomancie",
    description: "Tarots et oracles pour explorer vos questions de cœur, de travail et de vie.",
  },
  {
    icon: <IconPendulum className="h-8 w-8" />,
    title: "Radiesthésie",
    description: "Le pendule, pour affiner les réponses et lever les zones d'ombre.",
  },
];

const soinsServices: Service[] = [
  {
    icon: <IconAura className="h-8 w-8" />,
    title: "Soins du stress & douleurs",
    description: "Un rééquilibrage énergétique pour apaiser le corps et l'esprit au quotidien.",
  },
  {
    icon: <IconHouse className="h-8 w-8" />,
    title: "Nettoyage énergétique de lieux",
    description: "Purification des espaces de vie ou de travail pour retrouver une atmosphère saine.",
  },
  {
    icon: <IconShield className="h-8 w-8" />,
    title: "Protections",
    description: "Des soins protecteurs pour vous préserver des énergies négatives environnantes.",
  },
  {
    icon: <IconHands className="h-8 w-8" />,
    title: "Reiki",
    description: "Une imposition des mains traditionnelle pour harmoniser votre énergie vitale.",
  },
];

function ServiceCard({ icon, title, description }: Service) {
  return (
    <div className="glass-panel group rounded-2xl p-6 transition-colors hover:border-gold">
      <div className="text-gold-light transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="font-display mt-4 text-lg text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <section id="voyance" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-light">Voyance</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Des consultations pour <span className="text-gradient-gold">éclairer votre chemin</span>
          </h2>
          <p className="mt-4 text-ink-muted">
            À l&apos;aide des oracles, des tarots et du pendule, j&apos;explore avec vous vos questions
            de cœur, de travail et de vie pour vous offrir des prédictions à court et long terme.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {voyanceServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section id="soins" className="relative mx-auto max-w-6xl px-5 py-24">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-gold-light">Soins énergétiques</span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">
            Retrouvez <span className="text-gradient-gold">l&apos;harmonie</span> du corps et des lieux
          </h2>
          <p className="mt-4 text-ink-muted">
            Des soins énergétiques pour apaiser les maux du quotidien, protéger votre entourage et
            purifier vos espaces de vie.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {soinsServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
