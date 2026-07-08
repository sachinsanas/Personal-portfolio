import { Reveal } from "./reveal";
import { CaseStudyHero, NextProjectTeaser } from "./case-studies/shared";
import type { Project } from "@/lib/projects";

const stubSections = [
  {
    title: "Business Challenge",
    body: "The problem this project set out to solve, the stakes for the business, and the constraints going in.",
  },
  {
    title: "Research",
    body: "Stakeholder interviews, competitive analysis, and behavioral data that shaped the direction.",
  },
  {
    title: "UX Process",
    body: "How the problem space was explored: information architecture, journey mapping, and early concepting.",
  },
  {
    title: "User Flows",
    body: "End-to-end flows mapping how different user roles move through the product.",
  },
  {
    title: "Wireframes",
    body: "Low- and mid-fidelity explorations used to validate structure before visual design.",
  },
  {
    title: "Design System",
    body: "Components, tokens, and patterns built or extended to support this product.",
  },
  {
    title: "High-Fidelity UI",
    body: "Final visual design across key screens and states.",
  },
  {
    title: "Prototype",
    body: "Interactive prototype used for stakeholder review and usability testing.",
  },
  {
    title: "Business Impact",
    body: "Measurable outcomes delivered after launch.",
  },
  {
    title: "Key Learnings",
    body: "What worked, what didn't, and what carries forward into future projects.",
  },
];

export function CaseStudy({ project, next }: { project: Project; next: Project }) {
  return (
    <>
      <CaseStudyHero project={project} />

      {/* Stub sections */}
      <section style={{ padding: "40px 72px 112px", background: "#F8F5EF" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {stubSections.map((section, i) => (
            <Reveal
              key={section.title}
              delay={Math.min(i * 40, 200)}
              style={{
                paddingTop: 40,
                paddingBottom: 40,
                borderTop: i === 0 ? undefined : "1px solid #E8E4DC",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 14 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "#B8B1B2",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#1A1614",
                  }}
                >
                  {section.title}
                </h2>
              </div>
              <p style={{ fontSize: 15, fontFamily: "var(--font-body)", lineHeight: 1.7, color: "#726B6C", marginBottom: 12 }}>
                {section.body}
              </p>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#AD6800",
                  background: "#FFFBE6",
                  padding: "4px 12px",
                  borderRadius: 100,
                }}
              >
                Coming soon
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <NextProjectTeaser next={next} />
    </>
  );
}
