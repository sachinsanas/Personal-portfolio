import Link from "next/link";
import { Reveal } from "./reveal";
import { MagneticLink } from "./magnetic-link";
import { ProjectVisual } from "./project-phone-visual";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" style={{ padding: "112px 72px", background: "#F8F5EF" }}>
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
            03 / Selected Work
          </span>
          <div style={{ flex: 1, height: 1, background: "#E8E4DC", maxWidth: 60 }} />
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
              color: "#1A1614",
              maxWidth: 480,
            }}
          >
            Featured Projects
          </Reveal>
          <Link
            href="/#contact"
            className="arrow-link"
            style={{
              fontSize: 13.5,
              fontFamily: "var(--font-body)",
              color: "#1A75B7",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            More work on request
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M2 6.5H11M7.5 3L11 6.5L7.5 10"
                stroke="#1A75B7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {projects.map((project, i) => (
          <Reveal
            key={project.slug}
            className="proj-card"
            style={{
              display: "flex",
              flexDirection: project.imageSide === "right" ? "row-reverse" : "row",
              gap: 64,
              alignItems: "center",
              marginBottom: i < projects.length - 1 ? 96 : 0,
            }}
          >
            <div style={{ flex: "0 0 55%" }} className="proj-thumb">
              <ProjectVisual config={project.visual} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "9px 20px",
                  border: "1px solid rgba(26,22,20,0.16)",
                  borderRadius: 100,
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#454041",
                  fontFamily: "var(--font-body)",
                  marginBottom: 24,
                }}
              >
                {project.category}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(24px,2.4vw,34px)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "#1A1614",
                  marginBottom: 16,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.7,
                  color: "#726B6C",
                  marginBottom: 40,
                }}
              >
                {project.description}
              </p>
              <MagneticLink
                href={`/work/${project.slug}`}
                className="case-study-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: "#1A1614",
                }}
              >
                View Case Study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="case-study-arrow">
                  <path
                    d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MagneticLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
