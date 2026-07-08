export function NoiseOverlay() {
  return (
    <svg
      aria-hidden
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0.028,
      }}
    >
      <filter id="noise-f">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={0.88}
          numOctaves={4}
          stitchTiles="stitch"
          result="n"
        />
        <feColorMatrix type="saturate" values="0" in="n" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise-f)" />
    </svg>
  );
}
