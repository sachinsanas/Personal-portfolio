import { Reveal } from "./reveal";

interface Testimonial {
  quote: string;
  initials: string;
  avatarGradient: string;
  avatarColor: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Sachin reduced our design-to-dev handoff time by 40%. His design system work is exceptional engineers actually enjoy using his components. That's rare.",
    initials: "PM",
    avatarGradient: "linear-gradient(135deg,#D2E3F2,#A4C8E4)",
    avatarColor: "#165E96",
    name: "Priya Mehta",
    title: "Engineering Manager, Fintech",
  },
  {
    quote:
      "He's the rare designer who can zoom from 30,000-foot strategy all the way down to pixel-perfect UI and back without losing context. Incredibly valuable in product reviews.",
    initials: "AK",
    avatarGradient: "linear-gradient(135deg,#E6F7F6,#99DCD8)",
    avatarColor: "#006060",
    name: "Arjun Kapoor",
    title: "Product Director",
  },
  {
    quote:
      "Sachin's AI-assisted research process turned a 3-week discovery sprint into a 4-day exercise without cutting corners. It fundamentally changed how our team thinks about research.",
    initials: "SC",
    avatarGradient: "linear-gradient(135deg,#FFF1B8,#FFD666)",
    avatarColor: "#874D00",
    name: "Sarah Chen",
    title: "Chief Product Officer",
  },
];

export function Testimonials() {
  return (
    <section style={{ padding: "112px 72px", background: "#F8F5EF" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span
            style={{
              fontSize: 10.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#908A8A",
              fontFamily: "var(--font-body)",
            }}
          >
            06 / Testimonials
          </span>
          <div style={{ flex: 1, height: 1, background: "#E8E4DC", maxWidth: 60 }} />
        </div>
        <Reveal
          as="h2"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(34px,3.4vw,50px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1614",
            marginBottom: 56,
          }}
        >
          What People Say
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className="testimonial-card"
              style={{
                background: "white",
                borderRadius: 16,
                padding: 30,
                border: "1.5px solid rgba(26,22,20,0.07)",
              }}
            >
              <div style={{ fontSize: 28, color: "#E8E4DC", fontFamily: "Georgia,serif", lineHeight: 1, marginBottom: 16 }}>
                &ldquo;
              </div>
              <p style={{ fontSize: 14, fontFamily: "var(--font-body)", lineHeight: 1.7, color: "#454041", marginBottom: 24 }}>
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: "1px solid #F0ECED" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: t.avatarGradient,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 13,
                    color: t.avatarColor,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13.5, color: "#1A1614" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: 11.5, fontFamily: "var(--font-body)", color: "#908A8A" }}>{t.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
