import { Reveal } from "../reveal";
import { MagneticLink } from "../magnetic-link";
import { ProjectThumbnail } from "../project-thumbnails";
import type { Project } from "@/lib/projects";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section
      style={{
        position: "relative",
        padding: "160px 72px 96px",
        background: "#F8F5EF",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <MagneticLink
          href="/#projects"
          style={{
            display: "flex",
            width: "fit-content",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontFamily: "var(--font-body)",
            color: "#726B6C",
            marginBottom: 40,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M10 6H2M5.5 2.5L2 6L5.5 9.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Work
        </MagneticLink>
        <div
          style={{
            display: "inline-block",
            padding: "5px 14px",
            border: "1px solid rgba(26,22,20,0.2)",
            borderRadius: 100,
            fontSize: 10.5,
            textTransform: "uppercase",
            letterSpacing: "0.09em",
            color: "#726B6C",
            fontFamily: "var(--font-body)",
            marginBottom: 24,
          }}
        >
          {project.category}
        </div>
        <Reveal
          as="h1"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(40px,6vw,76px)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#1A1614",
            marginBottom: 28,
            maxWidth: 900,
          }}
        >
          {project.title}
        </Reveal>
        <Reveal
          as="p"
          delay={80}
          style={{
            fontSize: "clamp(17px,1.6vw,20px)",
            fontFamily: "var(--font-body)",
            lineHeight: 1.7,
            color: "#726B6C",
            maxWidth: 680,
            marginBottom: 56,
          }}
        >
          {project.description}
        </Reveal>
        <Reveal delay={140}>
          <ProjectThumbnail slug={project.slug} height={480} />
        </Reveal>
      </div>
    </section>
  );
}

export function NextProjectTeaser({ next }: { next: Project }) {
  return (
    <section style={{ background: "#0E0C0B", padding: "96px 72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <span
          style={{
            fontSize: 10.5,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            fontFamily: "var(--font-body)",
          }}
        >
          Next Project
        </span>
        <MagneticLink
          href={`/work/${next.slug}`}
          style={{
            display: "block",
            marginTop: 16,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px,4.5vw,60px)",
              letterSpacing: "-0.03em",
              color: "white",
            }}
          >
            {next.title} →
          </h2>
        </MagneticLink>
      </div>
    </section>
  );
}
