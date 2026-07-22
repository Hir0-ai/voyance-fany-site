type IconProps = { className?: string };

const base = "stroke-current fill-none";

export function IconEye({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 24c4-8 12-13 20-13s16 5 20 13c-4 8-12 13-20 13S8 32 4 24Z"
      />
      <circle className={base} strokeWidth="1.5" cx="24" cy="24" r="6.5" />
      <circle className="fill-current" cx="24" cy="24" r="2" />
    </svg>
  );
}

export function IconEar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28 6c8 0 14 6.5 14 15 0 6-3 9-6 12-2.3 2.3-3 4-3 7a5 5 0 0 1-10 0v-3"
      />
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M20 10C12 12 7 19 7 27c0 6 3 10 7 13"
      />
      <path className={base} strokeWidth="1.5" strokeLinecap="round" d="M27 17c3 1.5 5 4.5 5 8s-2.5 6-5 7" />
    </svg>
  );
}

export function IconCards({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect
        className={base}
        strokeWidth="1.5"
        x="9"
        y="8"
        width="20"
        height="30"
        rx="2.5"
        transform="rotate(-10 19 23)"
      />
      <rect className={base} strokeWidth="1.5" x="19" y="9" width="20" height="30" rx="2.5" />
      <circle className={base} strokeWidth="1.2" cx="29" cy="20" r="4" />
      <path className={base} strokeWidth="1.2" strokeLinecap="round" d="M24 32h10" />
    </svg>
  );
}

export function IconPendulum({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path className={base} strokeWidth="1.5" strokeLinecap="round" d="M24 6v8" />
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M14 14h20l-6 8h-8Z"
      />
      <path className={base} strokeWidth="1.5" strokeLinecap="round" d="M24 22v9" />
      <path className={base} strokeWidth="1.5" strokeLinejoin="round" d="M24 31l5 8h-10Z" />
    </svg>
  );
}

export function IconAura({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M24 42c7-6 8-12 8-19a8 8 0 0 0-16 0c0 7 1 13 8 19Z"
      />
      <path className={base} strokeWidth="1.2" d="M17 20a7 7 0 0 1 14 0" />
      <circle className={base} strokeWidth="1.2" cx="24" cy="12" r="4" />
    </svg>
  );
}

export function IconHouse({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 24 24 10l16 14"
      />
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v15h8v-9h8v9h8V21"
      />
      <path className={base} strokeWidth="1.2" strokeLinecap="round" d="M24 27v6" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M24 6 38 11v11c0 10-6 17-14 20-8-3-14-10-14-20V11Z"
      />
      <path className={base} strokeWidth="1.5" strokeLinecap="round" d="M18 24l4 4 8-9" />
    </svg>
  );
}

export function IconHands({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle className={base} strokeWidth="1.5" cx="24" cy="18" r="8" />
      <path
        className={base}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M9 40c1-8 6-13 15-13s14 5 15 13"
      />
      <path className={base} strokeWidth="1" d="M24 12v4M20 15l2 2M28 15l-2 2" />
    </svg>
  );
}

export function IconMoonPhase({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className="fill-current"
        d="M28 6a19 19 0 1 0 0 36 15 15 0 0 1 0-36Z"
      />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 8h6l3 8-4 3c2 5 5 8 10 10l3-4 8 3v6c0 2-2 4-4 4C22 38 10 26 10 12c0-2 2-4 4-4Z"
      />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect className={base} strokeWidth="1.6" x="6" y="11" width="36" height="26" rx="3" />
      <path className={base} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 13l17 14 17-14" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path
        className={base}
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M24 43S9 28 9 18a15 15 0 0 1 30 0c0 10-15 25-15 25Z"
      />
      <circle className={base} strokeWidth="1.6" cx="24" cy="18" r="5.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle className={base} strokeWidth="1.6" cx="24" cy="24" r="17" />
      <path className={base} strokeWidth="1.6" strokeLinecap="round" d="M24 14v10l7 5" />
    </svg>
  );
}
