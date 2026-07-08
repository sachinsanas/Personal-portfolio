import { Reveal } from "./reveal";
import { MagneticLink } from "./magnetic-link";

export function Contact() {
  return (
    <section id="contact" style={{ background: "#0E0C0B", padding: "120px 72px", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,117,183,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -200,
          left: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(22,161,151,0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <span
            style={{
              fontSize: 10.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
            }}
          >
            08 / Contact
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)", maxWidth: 60 }} />
        </div>
        <Reveal
          as="h2"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(40px,5vw,72px)",
            lineHeight: 1.06,
            letterSpacing: "-0.035em",
            color: "white",
            maxWidth: 700,
            marginBottom: 28,
          }}
        >
          Let&apos;s Build Products That Matter.
        </Reveal>
        <Reveal
          as="p"
          delay={100}
          style={{
            fontSize: 16,
            fontFamily: "var(--font-body)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 480,
            lineHeight: 1.65,
            marginBottom: 60,
          }}
        >
          Open to Design Lead, Head of Design, and Principal Designer roles.
          Also available for consulting on design systems, enterprise UX, and
          AI-assisted workflows.
        </Reveal>
        <Reveal delay={180} style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 64 }}>
          <MagneticLink
            href="mailto:sanasgayatri799@gmail.com"
            className="contact-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "14px 28px",
              background: "white",
              color: "#1A1614",
              borderRadius: 100,
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8.5" rx="1.5" stroke="#1A1614" strokeWidth="1.3" />
              <path d="M1 4.5L7 8.5L13 4.5" stroke="#1A1614" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            sanasgayatri799@gmail.com
          </MagneticLink>
          <MagneticLink
            href="https://www.linkedin.com/in/sachin-sanas-79793018/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "14px 28px",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: 100,
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="white" strokeWidth="1.3" />
              <path
                d="M3.5 5.5V10.5M3.5 3.5V3.6M6.5 10.5V7.5C6.5 6.4 7.4 5.5 8.5 5.5C9.6 5.5 10.5 6.4 10.5 7.5V10.5M6.5 5.5V10.5"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            LinkedIn
          </MagneticLink>
          <MagneticLink
            href="#"
            className="contact-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "14px 28px",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              borderRadius: 100,
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 1.5H6L7 4.5L4.5 6C5.5 8.1 5.9 8.5 8 9.5L9.5 7L12.5 8V12C12.5 12.3 12.2 12.5 11.9 12.5C6.2 12.2 1.8 7.8 1.5 2.1C1.5 1.8 1.7 1.5 2 1.5Z"
                stroke="white"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Book a Call
          </MagneticLink>
          <MagneticLink
            href="#"
            className="contact-cta-accent"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "14px 28px",
              background: "rgba(26,117,183,0.2)",
              color: "#77ACD7",
              borderRadius: 100,
              fontSize: 14,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              border: "1px solid rgba(26,117,183,0.3)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1.5L8.5 5H12L9.25 7.25L10.25 10.75L7 8.75L3.75 10.75L4.75 7.25L2 5H5.5L7 1.5Z"
                stroke="#77ACD7"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
            Download Resume
          </MagneticLink>
        </Reveal>
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 40 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
              <rect width="34" height="34" rx="7" fill="rgba(255,255,255,0.1)" />
              <path
                d="M23 9C23 6 11 6 11 12C11 18 23 16 23 22C23 28 11 28 11 25"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.9"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span style={{ fontSize: 13, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)" }}>
              Sachin Sanas UX/UI Designer
            </span>
          </div>
          <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.25)" }}>
            Mumbai, India · Available Globally
          </span>
        </div>
      </div>
    </section>
  );
}
