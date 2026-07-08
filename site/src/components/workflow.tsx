import type { CSSProperties } from "react";
import { Reveal } from "./reveal";

interface WfStep {
  num: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  titleColor?: string;
  description: string;
  bg: string;
  border: string;
  hoverBg: string;
  hoverBorder: string;
  delay: number;
}

const blueTag = { tagBg: "rgba(26,117,183,0.2)", tagColor: "#77ACD7" };
const tealTag = { tagBg: "rgba(22,161,151,0.2)", tagColor: "#66CAC4" };
const amberTag = { tagBg: "rgba(250,173,20,0.15)", tagColor: "#FFC53D" };
const restBg = "rgba(255,255,255,0.04)";
const restBorder = "rgba(255,255,255,0.1)";
const hoverBg = "rgba(26,117,183,0.12)";
const hoverBorder = "rgba(26,117,183,0.4)";

const steps: WfStep[] = [
  {
    num: "01",
    tag: "Claude · Perplexity",
    ...blueTag,
    title: "Discover",
    description: "AI-assisted stakeholder synthesis and problem framing. 10× faster research triangulation.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 0,
  },
  {
    num: "02",
    tag: "Claude · Perplexity",
    ...blueTag,
    title: "Research",
    description: "User interviews, competitive analysis, and behavioral data synthesized with AI in hours.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 60,
  },
  {
    num: "03",
    tag: "Claude · Figma AI",
    ...tealTag,
    title: "AI Synthesis",
    description: "Pattern extraction, insight clustering, and opportunity mapping from raw data to POV.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 120,
  },
  {
    num: "04",
    tag: "v0 · Cursor",
    ...amberTag,
    title: "Wireframes",
    description: "Lo-fi flows to hi-fi explorations. AI generates 10 variants; I curate and refine the 2 best.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 60,
  },
  {
    num: "05",
    tag: "Figma · ProtoPie",
    ...blueTag,
    title: "Prototyping",
    description: "High-fidelity interactive prototypes built in Figma + ProtoPie. Feels real before build.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 120,
  },
  {
    num: "06",
    tag: "Claude · Maze",
    ...tealTag,
    title: "Testing",
    description: "Moderated + unmoderated usability sessions. AI-synthesizes session transcripts in minutes.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 180,
  },
  {
    num: "07",
    tag: "Figma · Tokens",
    ...amberTag,
    title: "Design Systems",
    description: "Components, tokens, and documentation that live alongside the codebase.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 0,
  },
  {
    num: "08",
    tag: "Cursor · Lovable",
    ...blueTag,
    title: "Dev Handoff",
    description: "Specs, annotations, and AI-generated code snippets. Engineers ship faster, fewer surprises.",
    bg: restBg,
    border: restBorder,
    hoverBg,
    hoverBorder,
    delay: 60,
  },
  {
    num: "09",
    tag: "🚀 Launch",
    tagBg: "rgba(22,161,151,0.25)",
    tagColor: "#66CAC4",
    title: "Launch + Measure",
    titleColor: "#66CAC4",
    description: "Post-launch analytics, OKR tracking, and iteration loops. Design never really ships it evolves.",
    bg: "rgba(22,161,151,0.1)",
    border: "rgba(22,161,151,0.3)",
    hoverBg: "rgba(22,161,151,0.18)",
    hoverBorder: "rgba(22,161,151,0.5)",
    delay: 120,
  },
];

export function Workflow() {
  return (
    <section id="workflow" style={{ background: "#0E0C0B", padding: "112px 72px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
          <span
            style={{
              fontSize: 10.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-body)",
            }}
          >
            04 / Process
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)", maxWidth: 60 }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
          }}
        >
          <Reveal
            as="h2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px,3.4vw,50px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "white",
              maxWidth: 480,
            }}
          >
            AI-First Design Workflow
          </Reveal>
          <Reveal
            as="p"
            delay={100}
            style={{
              fontSize: 14,
              fontFamily: "var(--font-body)",
              color: "rgba(255,255,255,0.45)",
              maxWidth: 320,
              lineHeight: 1.6,
              textAlign: "right",
            }}
          >
            Every step integrates AI tools to compress time without sacrificing depth.
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
          {steps.map((step) => (
            <Reveal
              key={step.num}
              delay={step.delay}
              className="wf-step"
              style={
                {
                  background: step.bg,
                  border: `1px solid ${step.border}`,
                  borderRadius: 14,
                  padding: 24,
                  cursor: "default",
                  "--wf-hover-bg": step.hoverBg,
                  "--wf-hover-border": step.hoverBorder,
                } as CSSProperties
              }
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
                  {step.num}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    fontFamily: "var(--font-body)",
                    padding: "2px 8px",
                    background: step.tagBg,
                    borderRadius: 100,
                    color: step.tagColor,
                  }}
                >
                  {step.tag}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: step.titleColor ?? "white",
                  marginBottom: 8,
                }}
              >
                {step.title}
              </div>
              <div style={{ fontSize: 12.5, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                {step.description}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
