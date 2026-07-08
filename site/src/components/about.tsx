import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" style={{ background: "#F8F5EF", padding: "112px 72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 64,
          }}
        >
          {/* Left: heading + bio */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Reveal
              as="h2"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(48px,5.5vw,80px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#1A1614",
                marginBottom: 48,
              }}
            >
              About Me
            </Reveal>
            <Reveal delay={100}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#454041",
                  marginBottom: 28,
                }}
              >
                My journey into design has been shaped by my passion for
                creativity, problem-solving, and helping others. Whether
                editing a mix in ProTools or guiding individuals through
                sobriety as a recovery coach, I&apos;ve consistently
                approached my work with a user-centered mindset, even before
                I knew what that meant.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#454041",
                  marginBottom: 28,
                }}
              >
                What excites me about product &amp; visual design is the
                opportunity to create intuitive, human-centered solutions
                that empower people. I believe design is more than just
                making things look good, it&apos;s about crafting thoughtful
                experiences that truly serve the needs of the people who use
                them.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#454041",
                }}
              >
                My diverse background provides a unique perspective on
                creating impactful, meaningful solutions. I&apos;m eager to
                learn, grow, and collaborate with others to build products
                that connect with people in a real way.
              </p>
            </Reveal>
          </div>

          {/* Right: portrait */}
          <Reveal delay={60} style={{ flexShrink: 0, width: 300 }}>
            <div
              style={{
                width: 300,
                height: 360,
                borderRadius: 20,
                background: "linear-gradient(150deg,#E8D5B7 0%,#C4956A 100%)",
                position: "relative",
                overflow: "hidden",
                transform: "rotate(3deg)",
                boxShadow: "0 20px 48px rgba(26,22,20,0.14)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="64" height="78" viewBox="0 0 72 88" fill="none">
                  <circle
                    cx="36"
                    cy="24"
                    r="18"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 88C4 68.1 18.3 52 36 52C53.7 52 68 68.1 68 88"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 16,
                  background:
                    "linear-gradient(transparent, rgba(150,80,30,0.4))",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Add Your Photo
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
