export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-ink-900">
      {/* Grid lines */}
      <div className="absolute inset-0 bg-grid-lines [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />

      {/* Aurora blobs */}
      <div className="absolute -left-40 -top-40 size-[520px] rounded-full bg-accent/25 blur-[130px] animate-float-slow" />
      <div className="absolute -right-40 top-1/4 size-[480px] rounded-full bg-cyan-neon/20 blur-[130px] animate-float" />
      <div className="absolute bottom-0 left-1/3 size-[440px] rounded-full bg-pink-neon/15 blur-[140px] animate-pulse-glow" />

      {/* Top vignette for nav legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/80 to-transparent" />

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
