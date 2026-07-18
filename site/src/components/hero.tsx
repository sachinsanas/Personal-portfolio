import { Reveal } from "./reveal";
import { MagneticLink } from "./magnetic-link";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "140px 72px 100px",
      }}
    >
      {/* Texture overlay */}
              <div
                          style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: "repeating-linear-gradient(45deg, #1A1614 0px, #1A1614 2px, transparent 2px, transparent 4px)",
                                        opacity: 0.012,
                                        pointerEvents: "none",
                                        zIndex: 1,
                          }}
                        />
      {/* Blobs */}
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -140,
          width: 680,
          height: 680,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,110,74,0.32) 0%, rgba(255,150,100,0.14) 50%, transparent 70%)",
          filter: "blur(60px)",
          animation: "blobA 13s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 60,
          right: 160,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(148,94,210,0.22) 0%, rgba(180,140,230,0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
          animation: "blobB 16s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 280,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(250,180,20,0.2) 0%, rgba(250,210,80,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
          animation: "blobC 11s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 280,
          right: 60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(22,161,151,0.28) 0%, transparent 70%)",
          filter: "blur(44px)",
          animation: "blobA 9s ease-in-out infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* Hero content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
        <Reveal
          as="h1"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontWeight: 700,
            fontSize: "clamp(64px,8.5vw,116px)",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#1A1614",
            marginBottom: 32,
          }}
        >
          ux/ui designer
        </Reveal>
        <Reveal
          as="p"
          delay={120}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(20px,2.2vw,30px)",
            lineHeight: 1.5,
            color: "#454041",
            maxWidth: 640,
            marginBottom: 56,
          }}
        >
          focused on{" "}
          <span style={{ color: "#16A197", fontStyle: "italic" }}>
            simplifying complex ideas into clear, intuitive digital
            experiences
          </span>
        </Reveal>
        <Reveal delay={220}>
          <MagneticLink
            href="/#projects"
            className="hero-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              fontSize: 12,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1A1614",
            }}
          >
            <div
              className="hero-cta-circle"
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                border: "1.5px solid rgba(26,22,20,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease, border-color 0.2s ease",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M8.5 3.5L13 8L8.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            View Projects
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}
