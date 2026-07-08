import type { CSSProperties } from "react";
import { Reveal } from "./reveal";

interface SkillCard {
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tagBg: string;
  tagColor: string;
  tags: string[];
  hoverBorder: string;
}

const cards: SkillCard[] = [
  {
    iconBg: "#E9F2F9",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="1.5" width="6.5" height="6.5" rx="1.5" stroke="#1A75B7" strokeWidth="1.4" />
        <rect x="10" y="1.5" width="6.5" height="6.5" rx="1.5" stroke="#1A75B7" strokeWidth="1.4" />
        <rect x="1.5" y="10" width="6.5" height="6.5" rx="1.5" stroke="#1A75B7" strokeWidth="1.4" />
        <rect x="10" y="10" width="6.5" height="6.5" rx="1.5" stroke="#1A75B7" strokeWidth="1.4" />
      </svg>
    ),
    title: "Product Design",
    description: "End-to-end UX from strategy to pixel",
    tagBg: "#E9F2F9",
    tagColor: "#165E96",
    tags: [
      "UX Strategy",
      "User Research",
      "IA",
      "Prototyping",
      "Usability Testing",
      "Interaction Design",
      "Accessibility",
    ],
    hoverBorder: "rgba(26,117,183,0.3)",
  },
  {
    iconBg: "#E6F7F6",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="5.5" r="2.5" stroke="#16A197" strokeWidth="1.4" />
        <circle cx="3.5" cy="12" r="2" stroke="#16A197" strokeWidth="1.4" />
        <circle cx="14.5" cy="12" r="2" stroke="#16A197" strokeWidth="1.4" />
        <path d="M9 8V10.5M9 10.5L5.5 12M9 10.5L12.5 12" stroke="#16A197" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Leadership",
    description: "Building high-performing design teams",
    tagBg: "#E6F7F6",
    tagColor: "#00645E",
    tags: [
      "Team Management",
      "Mentorship",
      "Design Reviews",
      "Roadmapping",
      "Stakeholder Comms",
      "Cross-functional",
    ],
    hoverBorder: "rgba(22,161,151,0.3)",
  },
  {
    iconBg: "linear-gradient(135deg,#FFF1B8,#FFE58F)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2L10.5 6.5H15L11.5 9L13 13.5L9 11L5 13.5L6.5 9L3 6.5H7.5L9 2Z"
          stroke="#AD6800"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "AI Workflow",
    description: "Design at the speed of thought",
    tagBg: "#FFFBE6",
    tagColor: "#874D00",
    tags: ["Claude", "Cursor", "v0", "Lovable", "Figma AI", "Midjourney", "Perplexity"],
    hoverBorder: "rgba(250,173,20,0.4)",
  },
  {
    iconBg: "#F0ECED",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 5H15M3 9H15M3 13H10" stroke="#454041" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Design Systems",
    description: "Scale by design, not by headcount",
    tagBg: "#F0ECED",
    tagColor: "#454041",
    tags: [
      "Figma",
      "Token Systems",
      "Component Arch",
      "Documentation",
      "Dev Handoff",
      "Pattern Libraries",
    ],
    hoverBorder: "rgba(26,22,20,0.25)",
  },
];

export function Expertise() {
  return (
    <section id="expertise" style={{ padding: "112px 72px", background: "#F8F5EF" }}>
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
            02 / Expertise
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
            maxWidth: 600,
          }}
        >
          Core Expertise
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 80}
              className="hover-card"
              style={
                {
                  background: "white",
                  borderRadius: 16,
                  padding: 28,
                  border: "1.5px solid rgba(26,22,20,0.07)",
                  cursor: "default",
                  "--hover-border-color": card.hoverBorder,
                } as CSSProperties
              }
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: card.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#1A1614",
                  marginBottom: 6,
                }}
              >
                {card.title}
              </div>
              <div
                style={{
                  fontSize: 12.5,
                  color: "#908A8A",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.5,
                  marginBottom: 20,
                }}
              >
                {card.description}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      fontFamily: "var(--font-body)",
                      padding: "3px 10px",
                      background: card.tagBg,
                      color: card.tagColor,
                      borderRadius: 100,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
