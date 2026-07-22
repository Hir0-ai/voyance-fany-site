function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const rand = seededRandom(42);

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  top: rand() * 100,
  left: rand() * 100,
  size: rand() * 2 + 0.6,
  delay: rand() * 6,
  duration: 3 + rand() * 4,
}));

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-[var(--gold-light)]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
