import { Reveal } from "./reveal";

export function Statement() {
  return (
    <section style={{ padding: "108px 72px", maxWidth: 1320, margin: "0 auto" }}>
      <Reveal
        as="p"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(26px,2.8vw,40px)",
          lineHeight: 1.38,
          color: "#1A1614",
          letterSpacing: "-0.01em",
          maxWidth: 860,
        }}
      >
        AI-native Design Lead with 9+ years shipping UX for SaaS, dashboards,
        and mobile apps. I lead a team of six designers, ship enterprise
        products, and run an AI-assisted workflow that shortens the journey
        from insight to validated design.
      </Reveal>
    </section>
  );
}
