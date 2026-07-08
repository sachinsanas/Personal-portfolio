import { Reveal } from "./reveal";

interface Entry {
  current: boolean;
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: { label: string; bg: string; color: string }[];
}

const entries: Entry[] = [
  {
    current: true,
    role: "Senior UI/UX Designer",
    company: "RAHI Platform Technologies · Pune, India",
    period: "Oct 2024 Present",
    summary:
      "Leading end-to-end UX for a greenfield LMS and LOS, covering the full lending lifecycle origination, KYC, underwriting, approval, disbursement and collections.",
    bullets: [
      "Built and govern a scalable fintech design system components, tokens, typography and colour across LMS, LOS and Collections modules, cutting design iteration time and enabling pixel-perfect developer handoff via Figma Dev Mode",
      "Redesigned the Collections & Payments workflow, mapping multi-role processes into status-driven dashboards that reduced loan officers' day-to-day workload",
      "Ran heuristic evaluations and moderated usability testing in Maze, resolving 15+ critical usability blockers before development handoff",
      "Used Figma AI and Galileo AI to accelerate early-stage wireframing, freeing up more time for UX strategy and research",
      "Partnered with product managers and engineers inside Agile sprints, keeping Figma specs and Confluence documentation airtight",
      "Ensured every surface met WCAG 2.1 AA accessibility standards for enterprise banking compliance",
    ],
    tags: [
      { label: "LMS", bg: "#E6F7F6", color: "#00645E" },
      { label: "LOS", bg: "#E6F7F6", color: "#00645E" },
      { label: "Design Systems", bg: "#E9F2F9", color: "#165E96" },
      { label: "Fintech", bg: "#FFFBE6", color: "#874D00" },
      { label: "Accessibility", bg: "#F0ECED", color: "#454041" },
    ],
  },
  {
    current: false,
    role: "UI/UX Designer Web, Mobile & SaaS Products",
    company: "Freelance & Agency Product Design · Pune, India",
    period: "2014 2024",
    summary:
      "A decade-long freelance and agency design practice spanning travel, hospitality, logistics, fintech, marketplace and consumer apps the foundation that built the breadth now visible across his Dribbble and Behance archive.",
    bullets: [
      "Designed and shipped 40+ product, dashboard and mobile app interfaces for SaaS, logistics, hospitality, marketplace and financial services clients",
      "Delivered customer & supplier portal dashboards, economic/data-visualisation tools, and trust & compliance-driven landing experiences for B2B platforms",
      "Owned design end-to-end research, wireframes, UI, prototyping and client collaboration across web and mobile",
      "Built a reputation on Dribbble and Behance for clean, systemised UI work, growing into the senior fintech-focused practice he leads today",
    ],
    tags: [
      { label: "SaaS", bg: "#E9F2F9", color: "#165E96" },
      { label: "Mobile Design", bg: "#E9F2F9", color: "#165E96" },
      { label: "Dashboards", bg: "#F0ECED", color: "#454041" },
      { label: "Web Design", bg: "#F0ECED", color: "#454041" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: "112px 72px", background: "#F2EDE4" }}>
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
            05 / Experience
          </span>
          <div style={{ flex: 1, height: 1, background: "#DDD8D9", maxWidth: 60 }} />
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
            marginBottom: 64,
          }}
        >
          Career Timeline
        </Reveal>
        <div style={{ maxWidth: 820 }}>
          {entries.map((entry, i) => (
            <Reveal
              key={entry.role}
              delay={i * 80}
              style={{
                display: "flex",
                gap: 32,
                marginBottom: i < entries.length - 1 ? 64 : 0,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6 }}>
                <div
                  style={{
                    width: entry.current ? 13 : 11,
                    height: entry.current ? 13 : 11,
                    borderRadius: "50%",
                    background: entry.current ? "#16A197" : "#908A8A",
                    border: entry.current ? "3px solid #F2EDE4" : "2.5px solid #F2EDE4",
                    boxShadow: entry.current ? "0 0 0 2px #16A197" : "0 0 0 1.5px #908A8A",
                    flexShrink: 0,
                  }}
                />
                {i < entries.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: 1.5,
                      background: "linear-gradient(#16A197,#DDD8D9)",
                      marginTop: 6,
                      minHeight: 100,
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1, paddingBottom: i < entries.length - 1 ? 8 : 0 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 8,
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    {entry.current && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                        <span
                          style={{
                            fontSize: 10,
                            fontFamily: "var(--font-body)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            padding: "3px 10px",
                            background: "#E6F7F6",
                            color: "#00645E",
                            borderRadius: 100,
                            fontWeight: 500,
                          }}
                        >
                          Current
                        </span>
                      </div>
                    )}
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: "#1A1614", lineHeight: 1.2 }}>
                      {entry.role}
                    </div>
                    <div
                      style={{
                        fontSize: 13.5,
                        fontFamily: "var(--font-body)",
                        color: entry.current ? "#1A75B7" : "#726B6C",
                        fontWeight: 500,
                        marginTop: 3,
                      }}
                    >
                      {entry.company}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-mono)",
                      color: "#908A8A",
                      padding: "4px 12px",
                      background: "rgba(26,22,20,0.05)",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {entry.period}
                  </div>
                </div>
                <p style={{ fontSize: 13.5, fontFamily: "var(--font-body)", color: "#726B6C", lineHeight: 1.65, marginBottom: 16, maxWidth: 680 }}>
                  {entry.summary}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {entry.bullets.map((bullet, bi) => (
                    <div key={bi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span
                        style={{
                          color: entry.current ? "#16A197" : "#908A8A",
                          fontSize: 13,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                      <span style={{ fontSize: 13.5, fontFamily: "var(--font-body)", color: "#454041", lineHeight: 1.55 }}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {entry.tags.map((tag) => (
                    <span
                      key={tag.label}
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-body)",
                        padding: "3px 11px",
                        background: tag.bg,
                        color: tag.color,
                        borderRadius: 100,
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
