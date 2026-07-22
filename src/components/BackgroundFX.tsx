import StarField from "./StarField";

const noiseUrl =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[var(--bg-deep)] via-[var(--bg-void)] to-[#0d0820]">
      <StarField />

      <div
        className="animate-pulse-glow absolute -left-40 top-[8%] h-[26rem] w-[26rem] rounded-full opacity-35 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(155,135,217,0.55), transparent 70%)" }}
      />
      <div
        className="animate-pulse-glow absolute -right-32 top-[38%] h-[22rem] w-[22rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(203,161,92,0.5), transparent 70%)", animationDelay: "1.5s" }}
      />
      <div
        className="animate-pulse-glow absolute -left-24 top-[68%] h-[24rem] w-[24rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(203,161,92,0.4), transparent 70%)", animationDelay: "3s" }}
      />
      <div
        className="animate-pulse-glow absolute -right-40 bottom-[2%] h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(155,135,217,0.5), transparent 70%)", animationDelay: "4.5s" }}
      />

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${noiseUrl}")` }}
      />
    </div>
  );
}
