import { Reveal } from "./reveal";

function AiInDesignArt() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
      <circle cx="80" cy="80" r="28" fill="none" stroke="rgba(26,117,183,0.4)" strokeWidth="1" />
      <circle cx="200" cy="50" r="20" fill="none" stroke="rgba(22,161,151,0.5)" strokeWidth="1" />
      <circle cx="320" cy="100" r="24" fill="none" stroke="rgba(250,173,20,0.4)" strokeWidth="1" />
      <circle cx="160" cy="120" r="16" fill="none" stroke="rgba(26,117,183,0.3)" strokeWidth="1" />
      <circle cx="80" cy="80" r="5" fill="#1A75B7" />
      <circle cx="200" cy="50" r="4" fill="#16A197" />
      <circle cx="320" cy="100" r="5" fill="#FAAD14" />
      <circle cx="160" cy="120" r="3.5" fill="#1A75B7" opacity="0.7" />
      <line x1="80" y1="80" x2="200" y2="50" stroke="rgba(26,117,183,0.25)" strokeWidth="1" />
      <line x1="200" y1="50" x2="320" y2="100" stroke="rgba(22,161,151,0.25)" strokeWidth="1" />
      <line x1="80" y1="80" x2="160" y2="120" stroke="rgba(26,117,183,0.2)" strokeWidth="1" />
      <line x1="160" y1="120" x2="320" y2="100" stroke="rgba(250,173,20,0.2)" strokeWidth="1" />
      <text x="24" y="24" fontFamily="Inter,sans-serif" fontSize="11" fill="rgba(255,255,255,0.2)" letterSpacing="2">
        AI IN DESIGN
      </text>
    </svg>
  );
}

function ComponentsArt() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
      <rect x="20" y="24" width="52" height="36" rx="6" fill="white" stroke="rgba(26,117,183,0.3)" strokeWidth="1.2" />
      <rect x="88" y="24" width="52" height="36" rx="6" fill="rgba(26,117,183,0.12)" stroke="rgba(26,117,183,0.3)" strokeWidth="1.2" />
      <rect x="156" y="24" width="52" height="36" rx="6" fill="white" stroke="rgba(26,117,183,0.3)" strokeWidth="1.2" />
      <rect x="20" y="76" width="84" height="36" rx="6" fill="rgba(26,117,183,0.08)" stroke="rgba(26,117,183,0.25)" strokeWidth="1.2" />
      <rect x="120" y="76" width="52" height="36" rx="6" fill="white" stroke="rgba(26,117,183,0.3)" strokeWidth="1.2" />
      <rect x="188" y="76" width="36" height="36" rx="6" fill="rgba(22,161,151,0.15)" stroke="rgba(22,161,151,0.3)" strokeWidth="1.2" />
      <rect x="240" y="20" width="130" height="130" rx="8" fill="none" stroke="rgba(26,117,183,0.1)" strokeWidth="1" strokeDasharray="4 4" />
      <text x="24" y="20" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(26,117,183,0.4)" letterSpacing="2">
        COMPONENTS
      </text>
    </svg>
  );
}

function EnterpriseUxArt() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="40" r="18" fill="rgba(196,149,106,0.3)" stroke="rgba(180,110,40,0.4)" strokeWidth="1.2" />
      <line x1="200" y1="58" x2="120" y2="90" stroke="rgba(180,110,40,0.3)" strokeWidth="1" />
      <line x1="200" y1="58" x2="200" y2="90" stroke="rgba(180,110,40,0.3)" strokeWidth="1" />
      <line x1="200" y1="58" x2="280" y2="90" stroke="rgba(180,110,40,0.3)" strokeWidth="1" />
      <rect x="96" y="90" width="48" height="28" rx="5" fill="white" stroke="rgba(180,110,40,0.35)" strokeWidth="1.2" />
      <rect x="176" y="90" width="48" height="28" rx="5" fill="rgba(196,149,106,0.2)" stroke="rgba(180,110,40,0.35)" strokeWidth="1.2" />
      <rect x="256" y="90" width="48" height="28" rx="5" fill="white" stroke="rgba(180,110,40,0.35)" strokeWidth="1.2" />
      <line x1="120" y1="118" x2="100" y2="140" stroke="rgba(180,110,40,0.2)" strokeWidth="1" />
      <line x1="120" y1="118" x2="140" y2="140" stroke="rgba(180,110,40,0.2)" strokeWidth="1" />
      <rect x="84" y="140" width="32" height="18" rx="4" fill="rgba(196,149,106,0.15)" stroke="rgba(180,110,40,0.25)" strokeWidth="1" />
      <rect x="124" y="140" width="32" height="18" rx="4" fill="rgba(196,149,106,0.15)" stroke="rgba(180,110,40,0.25)" strokeWidth="1" />
      <text x="24" y="20" fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(180,110,40,0.4)" letterSpacing="2">
        ENTERPRISE UX
      </text>
    </svg>
  );
}

interface Article {
  bg: string;
  art: React.ReactNode;
  badge: string;
  badgeBg: string;
  badgeBorder: string;
  badgeColor: string;
  meta: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    bg: "#0E0C0B",
    art: <AiInDesignArt />,
    badge: "AI in Design",
    badgeBg: "rgba(250,173,20,0.2)",
    badgeBorder: "rgba(250,173,20,0.3)",
    badgeColor: "#FFC53D",
    meta: "Jan 2025 · 6 min read",
    title: "How I Use Claude to Cut UX Research Time by 10×",
    description:
      "A practical walkthrough of AI-assisted synthesis, pattern extraction, and how to maintain research integrity while moving faster than ever.",
  },
  {
    bg: "#E9F2F9",
    art: <ComponentsArt />,
    badge: "Design Systems",
    badgeBg: "rgba(26,117,183,0.15)",
    badgeBorder: "rgba(26,117,183,0.25)",
    badgeColor: "#165E96",
    meta: "Dec 2024 · 8 min read",
    title: "Building a Design System That Developers Actually Love",
    description:
      "Why most design systems fail at adoption and how to build component documentation that engineers bookmark, not avoid.",
  },
  {
    bg: "#F5EEE0",
    art: <EnterpriseUxArt />,
    badge: "Enterprise UX",
    badgeBg: "rgba(196,149,106,0.2)",
    badgeBorder: "rgba(196,149,106,0.35)",
    badgeColor: "#704820",
    meta: "Nov 2024 · 5 min read",
    title: "The Enterprise UX Playbook: From Chaos to Clarity",
    description:
      "Patterns and principles for designing complex internal tools where power users matter as much as delight.",
  },
];

export function Writing() {
  return (
    <section id="writing" style={{ padding: "112px 72px", background: "#F2EDE4" }}>
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
            07 / Writing
          </span>
          <div style={{ flex: 1, height: 1, background: "#DDD8D9", maxWidth: 60 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
          <Reveal
            as="h2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px,3.4vw,50px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#1A1614",
            }}
          >
            Insights &amp; Writing
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {articles.map((article, i) => (
            <Reveal
              key={article.title}
              as="a"
              href="/#contact"
              delay={i * 80}
              className="writing-card"
              style={{
                display: "block",
                background: "white",
                borderRadius: 16,
                overflow: "hidden",
                border: "1.5px solid rgba(26,22,20,0.07)",
                cursor: "pointer",
              }}
            >
              <div style={{ height: 160, background: article.bg, position: "relative", overflow: "hidden" }}>
                {article.art}
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    left: 14,
                    padding: "3px 10px",
                    background: article.badgeBg,
                    border: `1px solid ${article.badgeBorder}`,
                    borderRadius: 100,
                    fontSize: 10,
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.06em",
                    color: article.badgeColor,
                  }}
                >
                  {article.badge}
                </div>
              </div>
              <div style={{ padding: 22 }}>
                <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "#908A8A", marginBottom: 10 }}>
                  {article.meta}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, lineHeight: 1.3, color: "#1A1614", marginBottom: 10 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 13, fontFamily: "var(--font-body)", lineHeight: 1.6, color: "#726B6C" }}>
                  {article.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
